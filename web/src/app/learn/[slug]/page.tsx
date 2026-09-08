import Link from "next/link";
import { notFound } from "next/navigation";
import { learningPaths, resolveSteps, pathQuiz } from "@/lib/guides";
import { QuizSection } from "@/components/quiz-section";
export function generateStaticParams() {
  return learningPaths.map((g) => ({ slug: g.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = learningPaths.find((g) => g.slug === slug);
  return { title: g?.title || "Not found", description: g?.description };
}
export default async function LearningPathPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = learningPaths.find((g) => g.slug === slug);
  if (!guide) notFound();
  const steps = resolveSteps(guide);
  const quiz = pathQuiz(guide);
  return (
    <div className="page-shell reading-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/learn">Learning paths</Link>
        <span>/</span>
        <span>{guide.title}</span>
      </nav>
      <header className="page-intro">
        <p className="eyebrow">{steps.length} entries · 5 practice questions</p>
        <h1>{guide.title}</h1>
        <p className="lede">{guide.description}</p>
        <a href="#path-quiz" className="text-link">
          Ready to test your understanding? Jump to the quiz ↓
        </a>
      </header>
      <aside className="outcome-note">
        <span className="eyebrow">By the end of this path</span>
        <p>{guide.outcome}</p>
      </aside>
      <section className="section-block">
        <div className="section-heading">
          <h2>Your reading path</h2>
        </div>
        <ol className="guide-steps">
          {steps.map((s, i) => (
            <li key={s.item.slug}>
              <span className="step-number">{i + 1}</span>
              <div>
                <p className="metadata">{s.item.type}</p>
                <h3>
                  <Link href={`/framework/${s.item.slug}?path=${guide.slug}`}>
                    {s.item.title} →
                  </Link>
                </h3>
                <p>{s.why}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="application-prompt">
        <p className="eyebrow">Connect it to your work</p>
        <h2>Bring a real decision to the path.</h2>
        <p>
          For each method, name the input you would need and the decision or
          output it would produce. Explain how that output would help you take
          the next step.
        </p>
      </section>
      <div id="path-quiz">
        <QuizSection
          title="Put the path into practice"
          description="Five scenarios about choosing and connecting the methods you have explored."
          questions={quiz.questions}
          reviewLinks={quiz.reviews}
          nextLink={{ href: "/learn", label: "Explore another learning path" }}
        />
      </div>
    </div>
  );
}
