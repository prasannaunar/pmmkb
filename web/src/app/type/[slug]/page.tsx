import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllCategories,
  getAllTypeSlugs,
  getEntriesByType,
  getTypeBySlug,
} from "@/lib/content";
import { cleanTitle, guidanceFor } from "@/lib/editorial";
import { pluralType } from "@/lib/plural";
import { pageMetadata, TYPE_DEFINITIONS } from "@/lib/seo";
export function generateStaticParams() {
  return getAllTypeSlugs().map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const type = getTypeBySlug(slug);
  if (!type) return { title: "Not found" };
  const count = getEntriesByType(type).length;
  return pageMetadata({
    title: pluralType(type, 2),
    description: `${count} product marketing ${pluralType(type, count).toLowerCase()}: ${TYPE_DEFINITIONS[type]}. Browse them by topic, each with a worked example and a quiz.`,
    path: `/type/${slug}`,
  });
}
export default async function TypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const type = getTypeBySlug(slug);
  if (!type) notFound();
  const categories = getAllCategories()
    .map((c) => ({ ...c, entries: c.entries.filter((e) => e.type === type) }))
    .filter((c) => c.entries.length);
  const count = categories.reduce((n, c) => n + c.entries.length, 0);
  return (
    <div className="page-shell">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/topics">Explore topics</Link>
        <span>/</span>
        <span>{pluralType(type, 2)}</span>
      </nav>
      <header className="page-intro">
        <p className="eyebrow">Browse by type</p>
        <h1>{pluralType(type, 2)}</h1>
        <p className="lede">
          All {count} {pluralType(type, count).toLowerCase()} in the knowledge
          base, organised by topic.
        </p>
      </header>
      {categories.map((c) => (
        <section className="section-block" key={c.slug}>
          <div className="section-heading">
            <h2>
              <Link href={`/category/${c.slug}`}>{cleanTitle(c.title)} →</Link>
            </h2>
          </div>
          <div className="entry-list">
            {c.entries.map((e) => (
              <Link
                className="entry-row"
                key={e.slug}
                href={`/framework/${e.slug}`}
              >
                <div>
                  <h3>{e.title} ↗</h3>
                  <p>{guidanceFor(e).useWhen}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
