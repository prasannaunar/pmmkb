import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCategories, getCategoryBySlug } from "@/lib/content";
import { cleanTitle, categoryIntros, guidanceFor } from "@/lib/editorial";
import { parseQuizMarkdown } from "@/lib/quiz";
import { CategoryEntries } from "@/components/category-entries";
import { QuizSection } from "@/components/quiz-section";
export function generateStaticParams() {
  return getAllCategories().map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCategoryBySlug(slug);
  return {
    title: c ? cleanTitle(c.title) : "Not found",
    description: c ? categoryIntros[c.number] : undefined,
  };
}
const picks: Record<number, [string, string][]> = {
  1: [
    [
      "Choose a target audience",
      "Segmentation–Targeting–Positioning (STP) Framework",
    ],
    ["Understand why customers switch", "JTBD Switch Interview Method"],
    ["Recognise best-fit accounts", "ICP Development Methodology"],
  ],
  2: [
    [
      "Write a concise positioning statement",
      "Geoffrey Moore's Positioning Statement Framework",
    ],
    [
      "Work out your differentiated value",
      "April Dunford's 5-Component Positioning Canvas",
    ],
    ["Align your team's copy", "Message Architecture (Messaging House)"],
    [
      "Test whether the message resonates",
      "Message Testing (Message-Market Fit)",
    ],
  ],
  3: [
    ["Assess your price-value position", "Bowman's Strategic Clock"],
    [
      "Find a meaningful difference",
      "Product Differentiation Strategy Framework",
    ],
    ["Improve your intelligence programme", "CI Program Maturity Model"],
  ],
  4: [
    [
      "Decide how much launch effort is enough",
      "Launch Tier Framework (Tier 1/2/3)",
    ],
    ["Choose your acquisition motion", "GTM Motion Model"],
    ["Coordinate the full launch", "Complete GTM Workflow Stages"],
  ],
  5: [
    [
      "Connect PMM to the customer lifecycle",
      "PMM Lifecycle Management Framework",
    ],
    ["Coordinate go-to-market execution", "Go-to-Market Motion Framework"],
    ["Improve feature use", "Feature Adoption Framework"],
  ],
  6: [
    ["Reduce friction before first value", "Time to Value Framework"],
    ["Understand why deals are lost", "Win/Loss Analysis Framework"],
    ["Prioritise features by satisfaction", "Kano Model"],
  ],
  7: [
    [
      "Make strategic choices explicit",
      "Playing to Win (Strategic Choice Cascade)",
    ],
    ["Focus the next quarter", "Quarterly PMM Planning Framework"],
    ["Organise a growing team", "PMM Team Scaling Framework"],
  ],
  8: [
    [
      "Choose the unit you charge for",
      "Value Metric / Willingness-to-Pay Framework",
    ],
    [
      "Create differentiated packages",
      "Good-Better-Best (GBB) Packaging Framework",
    ],
    ["Research feature and price trade-offs", "Conjoint Analysis"],
  ],
  9: [
    ["Diagnose enablement gaps", "Sales Enablement Maturity Model"],
    ["Support competitive conversations", "Competitive Battlecard Framework"],
    ["Match content to buyer questions", "Buyer's Journey Content Map"],
  ],
  10: [["Understand where PMM fits", "GTM Strategy vs Product Marketing"]],
};
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();
  const label = cleanTitle(category.title);
  const questions = category.quizMarkdown
    ? parseQuizMarkdown(category.quizMarkdown, slug)
    : [];
  const suggestions = (picks[category.number] || []).map(
    ([question, title]) => ({
      question,
      entry: category.entries.find((e) => e.title === title),
    }),
  );
  return (
    <div className="page-shell">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/topics">Explore topics</Link>
        <span>/</span>
        <span>{label}</span>
      </nav>
      <header className="page-intro">
        <p className="eyebrow">
          {category.entries.length} entries
          {questions.length
            ? ` · ${questions.length}-question category quiz`
            : ""}
        </p>
        <h1>{label}</h1>
        <p className="lede">{categoryIntros[category.number]}</p>
        <div className="inline-links">
          <a href="#all-entries">
            Browse all {category.entries.length} entries ↓
          </a>
          {questions.length > 0 && (
            <a href="#category-quiz">Take the category quiz ↓</a>
          )}
        </div>
      </header>
      <section className="section-block">
        <div className="section-heading">
          <h2>Start with your question</h2>
        </div>
        <div className="recommendations">
          {suggestions.map(
            ({ question, entry }) =>
              entry && (
                <Link key={entry.slug} href={`/framework/${entry.slug}`}>
                  <p className="eyebrow">{question}</p>
                  <h3>{entry.title} →</h3>
                  <p>{guidanceFor(entry).output}</p>
                </Link>
              ),
          )}
        </div>
      </section>
      <section className="section-block" id="all-entries">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The complete topic</p>
            <h2>All {category.entries.length} entries</h2>
          </div>
        </div>
        <CategoryEntries
          key={category.slug}
          entries={category.entries.map((e) => ({
            slug: e.slug,
            title: e.title,
            type: e.type,
            useWhen: guidanceFor(e).useWhen,
          }))}
        />
      </section>
      {questions.length > 0 && (
        <div id="category-quiz">
          <QuizSection
            key={category.slug}
            title={`${label}: put it into practice`}
            description="Ten scenarios to help you choose the right method and recognise when to use it."
            questions={questions}
            reviewLinks={questions.map((question) => {
              const answer =
                question.options
                  .find((option) => option.correct)
                  ?.text.toLowerCase() || "";
              const match = category.entries.find((entry) =>
                answer.includes(
                  entry.title
                    .toLowerCase()
                    .replace(/\s+(framework|methodology|model|process)$/, ""),
                ),
              );
              return match
                ? {
                    href: `/framework/${match.slug}`,
                    label: `Revisit ${match.title}`,
                  }
                : { href: "#all-entries", label: `Review the ${label} guides` };
            })}
            nextLink={{
              href: "/learn",
              label: "Connect these ideas in a learning path",
            }}
          />
        </div>
      )}
    </div>
  );
}
