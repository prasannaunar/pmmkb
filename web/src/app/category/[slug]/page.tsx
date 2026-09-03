import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCategories, getCategoryBySlug } from "@/lib/content";
import { TypeBadge } from "@/components/type-badge";
import { pluralType } from "@/lib/plural";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Not Found" };
  return {
    title: category.title,
    description: `${category.entries.length} product marketing entries in ${category.title}.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const typeCounts = category.entries.reduce(
    (acc, e) => {
      acc[e.type] = (acc[e.type] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

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
          {category.title}
        </span>
      </nav>

      <header className="mb-12">
        <h1
          className="text-3xl lg:text-4xl font-bold tracking-tight mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {category.title}
        </h1>
        <div className="flex flex-wrap gap-3">
          {Object.entries(typeCounts).map(([type, count]) => (
            <span
              key={type}
              className="text-sm px-3 py-1 rounded-full border"
              style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
            >
              {count} {pluralType(type, count)}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-3">
        {category.entries.map((entry) => {
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
              className="block p-5 rounded-xl border transition-all hover:shadow-md"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
              }}
            >
              <div className="flex items-start gap-3">
                <TypeBadge type={entry.type} />
                <div className="min-w-0">
                  <h2 className="font-semibold leading-snug" style={{ color: "var(--text-primary)" }}>
                    {entry.title}
                  </h2>
                  {snippet && (
                    <p className="text-sm mt-1.5 leading-relaxed line-clamp-2" style={{ color: "var(--text-secondary)" }}>
                      {snippet}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
