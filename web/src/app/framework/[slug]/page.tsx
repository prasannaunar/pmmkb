import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getAllEntries, getEntryBySlug, markdownToHtml } from "@/lib/content";
import { extractSpecialSections, parseSeeAlso } from "@/lib/entry-sections";
import { parseQuizMarkdown } from "@/lib/quiz";
import { cleanTitle, guidanceFor, plainText } from "@/lib/editorial";
import { learningPaths, resolveSteps } from "@/lib/guides";
import { EntrySources } from "@/components/entry-sources";
import { QuizSection } from "@/components/quiz-section";
import { ArticleContents } from "@/components/article-contents";
import { FrameworkVisual } from "@/components/framework-visual";
import { PathContext } from "@/components/path-context";
export function generateStaticParams() {
  return getAllEntries().map((e) => ({ slug: e.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const e = getEntryBySlug(slug);
  return {
    title: e?.title || "Not found",
    description: e ? guidanceFor(e).useWhen : undefined,
  };
}
export default async function FrameworkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);
  if (!entry) notFound();
  const { body, sourcesMarkdown, seeAlsoText, quizMarkdown } =
    extractSpecialSections(entry.rawMarkdown);
  const html = await markdownToHtml(
    body.replace(/^\*\*Type:\*\*[^\n]*\n?/m, ""),
  );
  const questions = quizMarkdown
    ? parseQuizMarkdown(quizMarkdown, entry.slug)
    : [];
  const related = seeAlsoText ? parseSeeAlso(seeAlsoText, getAllEntries()) : [];
  const guidance = guidanceFor(entry);
  const headings = Array.from(
    html.matchAll(/<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g),
  ).map((m) => ({
    id: m[1],
    label: m[2].replace(/<[^>]+>/g, "").replace(/&amp;/g, "&"),
  }));
  const contents = [
    { id: "at-a-glance", label: "At a glance" },
    ...headings,
    ...(related.length
      ? [{ id: "connected-reading", label: "Connected reading" }]
      : []),
    ...(questions.length
      ? [{ id: "entry-quiz", label: "Check your understanding" }]
      : []),
    ...(sourcesMarkdown ? [{ id: "sources", label: "Sources" }] : []),
  ];
  const paths = learningPaths.flatMap((p) => {
    const steps = resolveSteps(p);
    const i = steps.findIndex((s) => s.item.slug === slug);
    return i < 0
      ? []
      : [
          {
            slug: p.slug,
            title: p.title,
            position: i + 1,
            total: steps.length,
            previous:
              i > 0
                ? {
                    slug: steps[i - 1].item.slug,
                    title: steps[i - 1].item.title,
                  }
                : undefined,
            next:
              i + 1 < steps.length
                ? {
                    slug: steps[i + 1].item.slug,
                    title: steps[i + 1].item.title,
                  }
                : undefined,
          },
        ];
  });
  const next =
    related.find(
      (r) =>
        r.slug && /after|next|turn|build|reinforce/i.test(r.guidance || ""),
    ) || related.find((r) => r.slug);
  const reviewId =
    headings.find((h) => /apply|run|read/.test(h.id))?.id ||
    headings[0]?.id ||
    "at-a-glance";
  return (
    <div className="page-shell article-shell">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/topics">Explore topics</Link>
        <span>/</span>
        <Link href={`/category/${entry.categorySlug}`}>
          {cleanTitle(entry.categoryTitle)}
        </Link>
      </nav>
      <div className="article-grid">
        <ArticleContents items={contents} />
        <div className="article-body">
          <header className="page-intro">
            <p className="eyebrow">
              {entry.type} ·{" "}
              {Math.max(
                1,
                Math.ceil(plainText(body).split(/\s+/).length / 220),
              )}{" "}
              min read
            </p>
            <h1>{entry.title}</h1>
            <p className="lede">{guidance.output}</p>
            {sourcesMarkdown && (
              <a className="attribution-link" href="#sources">
                {
                  plainText(sourcesMarkdown.split("\n")[0])
                    .replace(/^-\s*/, "")
                    .split(",")[0]
                }{" "}
                · View sources ↓
              </a>
            )}
          </header>
          <section className="at-a-glance" id="at-a-glance">
            <h2>At a glance</h2>
            <dl>
              <div>
                <dt>Use this when</dt>
                <dd>{guidance.useWhen}</dd>
              </div>
              <div>
                <dt>
                  {entry.type === "Primer"
                    ? "What you will understand"
                    : "What you will work towards"}
                </dt>
                <dd>{guidance.output}</dd>
              </div>
              <div>
                <dt>Bring to the reading</dt>
                <dd>
                  {entry.type === "Primer"
                    ? "A question about how product marketing fits into your organisation."
                    : "A specific decision from your work and the customer evidence you have so far."}
                </dd>
              </div>
            </dl>
          </section>
          <FrameworkVisual slug={slug} />
          <article
            className="prose"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {related.length > 0 && (
            <section className="connected-reading" id="connected-reading">
              <p className="eyebrow">How the ideas connect</p>
              <h2>Choose where to go next</h2>
              <div>
                {related.map((r) => (
                  <div className="related-item" key={r.name}>
                    <p className="metadata">
                      {/before|prerequisite|first/i.test(r.guidance || "")
                        ? "Before this"
                        : /alternative|contrast|distinguish|compare/i.test(
                              r.guidance || "",
                            )
                          ? "Compare with"
                          : /after|next|turn|build|reinforce/i.test(
                                r.guidance || "",
                              )
                            ? "Build on this"
                            : "Use alongside"}
                    </p>
                    <h3>
                      {r.slug ? (
                        <Link href={`/framework/${r.slug}`}>{r.name} →</Link>
                      ) : (
                        r.name
                      )}
                    </h3>
                    {r.guidance && <p>{r.guidance}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
          <section className="application-prompt">
            <p className="eyebrow">Make it useful</p>
            <h2>
              {slug === "geoffrey-moores-positioning-statement-framework"
                ? "Try it on your positioning."
                : "Bring it back to your work."}
            </h2>
            <p>
              {slug === "geoffrey-moores-positioning-statement-framework"
                ? "Draft your statement. Can you name a real customer who fits it? Could a competitor credibly make the same claim? Use those two questions to decide what needs more evidence."
                : entry.type === "Primer"
                  ? "Explain the distinction to a colleague using a decision your team is facing. Where does ownership sit, and which assumptions need to be clarified?"
                  : "Name one decision this guide could help you make. Write down the evidence you need, the output you would produce, and how you would know it was useful."}
            </p>
          </section>
          {questions.length > 0 && (
            <div id="entry-quiz">
              <QuizSection
                key={slug}
                title="Check your understanding"
                description={`Practise applying ${entry.title} in five short scenarios.`}
                questions={questions}
                reviewLinks={questions.map(() => ({
                  href: `#${reviewId}`,
                  label: "Revisit the method",
                }))}
                nextLink={
                  next?.slug
                    ? {
                        href: `/framework/${next.slug}`,
                        label: `Continue with ${next.name}`,
                      }
                    : {
                        href: `/category/${entry.categorySlug}`,
                        label: `Explore ${cleanTitle(entry.categoryTitle)}`,
                      }
                }
              />
            </div>
          )}
          {sourcesMarkdown && (
            <div className="article-sources">
              <EntrySources markdown={sourcesMarkdown} />
            </div>
          )}
          <Suspense fallback={null}>
            <PathContext paths={paths} />
          </Suspense>
          <p className="source-note">
            <Link href={`/category/${entry.categorySlug}`}>
              ← All entries in {cleanTitle(entry.categoryTitle)}
            </Link>{" "}
            ·{" "}
            <Link
              href={`/category/${entry.categorySlug}${entry.categoryNumber !== 10 ? "#category-quiz" : ""}`}
            >
              {entry.categoryNumber !== 10
                ? "Try the category quiz"
                : "Explore the topic"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
