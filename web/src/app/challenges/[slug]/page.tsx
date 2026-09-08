import Link from "next/link";
import { notFound } from "next/navigation";
import { challenges, resolveSteps } from "@/lib/guides";
export function generateStaticParams() {
  return challenges.map((g) => ({ slug: g.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = challenges.find((g) => g.slug === slug);
  return { title: g?.title || "Not found", description: g?.description };
}
export default async function ChallengePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = challenges.find((g) => g.slug === slug);
  if (!guide) notFound();
  const steps = resolveSteps(guide);
  return (
    <div className="page-shell reading-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/challenges">Solve a challenge</Link>
        <span>/</span>
        <span>Suggested starting points</span>
      </nav>
      <header className="page-intro">
        <p className="eyebrow">A practical guide</p>
        <h1>{guide.title}</h1>
        <p className="lede">{guide.description}</p>
      </header>
      <aside className="outcome-note">
        <span className="eyebrow">Work towards</span>
        <p>{guide.outcome}</p>
      </aside>
      <section className="section-block">
        <div className="section-heading">
          <h2>Work through the decisions</h2>
        </div>
        <ol className="guide-steps">
          {steps.map((s, i) => (
            <li key={s.item.slug}>
              <span className="step-number">{i + 1}</span>
              <div>
                <h3>
                  <Link href={`/framework/${s.item.slug}`}>
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
        <p className="eyebrow">Put it into practice</p>
        <h2>Choose your next decision.</h2>
        <p>
          Write down what you need to decide, the evidence you already have, and
          what is missing. Start with the method that addresses that gap.
        </p>
      </section>
      <p className="source-note">
        <Link href="/challenges">← Explore other challenges</Link> ·{" "}
        <Link href="/topics">Browse every entry</Link>
      </p>
    </div>
  );
}
