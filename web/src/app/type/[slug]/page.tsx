import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllCategories,
  getAllTypeSlugs,
  getEntriesByType,
  getTypeBySlug,
} from "@/lib/content";
import { pluralType } from "@/lib/plural";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllTypeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const type = getTypeBySlug(slug);
  if (!type) return { title: "Not Found" };
  return {
    title: pluralType(type, 2),
    description: `Every ${type.toLowerCase()} in the PMM Knowledge Base.`,
  };
}

export default async function TypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const type = getTypeBySlug(slug);
  if (!type) notFound();

  const entries = getEntriesByType(type);
  const categories = getAllCategories()
    .map((cat) => ({
      ...cat,
      entries: cat.entries.filter((e) => e.type === type),
    }))
    .filter((cat) => cat.entries.length > 0);

  const label = pluralType(type, entries.length);

  return (
    <div className="px-6 lg:px-12 py-12 max-w-4xl mx-auto">
      <nav className="mb-8">
        <Link
          href="/"
          className="text-sm transition-colors hover:underline"
          style={{ color: "var(--text-tertiary)" }}
        >
          Home
        </Link>
        <span className="mx-2 text-sm" style={{ color: "var(--text-tertiary)" }}>/</span>
        <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
          {label}
        </span>
      </nav>

      <header className="mb-12">
        <h1
          className="text-3xl lg:text-4xl font-bold tracking-tight mb-3"
          style={{ fontFamily: "var(--font-serif)", color: "var(--text-primary)" }}
        >
          {label}
        </h1>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          {entries.length} {label.toLowerCase()} across the knowledge base.
        </p>
      </header>

      {categories.map((cat) => (
        <section key={cat.slug} className="mb-10">
          <h2
            className="text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ fontFamily: "var(--font-sans)", color: "var(--text-tertiary)" }}
          >
            {cat.title.replace(/^Category \d+: /, "")}
          </h2>
          <div className="space-y-3">
            {cat.entries.map((entry) => {
              const whatItIs = entry.rawMarkdown.match(
                /\*\*What it is:\*\*\s*([\s\S]*?)(?=\n\n\*\*|\n##|$)/
              );
              const snippet = whatItIs
                ? whatItIs[1].trim().slice(0, 180) + (whatItIs[1].trim().length > 180 ? "..." : "")
                : "";

              return (
                <Link
                  key={entry.slug}
                  href={`/framework/${entry.slug}`}
                  className="block p-5 border transition-all hover:shadow-md"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border)",
                  }}
                >
                  <h3 className="font-semibold leading-snug" style={{ color: "var(--text-primary)" }}>
                    {entry.title}
                  </h3>
                  {snippet && (
                    <p className="text-sm mt-1.5 leading-relaxed line-clamp-2" style={{ color: "var(--text-secondary)" }}>
                      {snippet}
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
