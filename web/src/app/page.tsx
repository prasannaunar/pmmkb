import Link from "next/link";
import { getAllCategories, getSearchIndex, TYPE_SLUGS } from "@/lib/content";
import { Search } from "@/components/search";
import { pluralType } from "@/lib/plural";

const CATEGORY_ICONS: Record<number, string> = {
  1: "M",
  2: "P",
  3: "C",
  4: "G",
  5: "L",
  6: "X",
  7: "S",
  8: "$",
  9: "E",
  10: "?",
};

export default function HomePage() {
  const categories = getAllCategories();
  const searchEntries = getSearchIndex();

  const totalEntries = categories.reduce((sum, c) => sum + c.entries.length, 0);
  const typeCounts = categories
    .flatMap((c) => c.entries)
    .reduce(
      (acc, e) => {
        acc[e.type] = (acc[e.type] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

  const typeSummary = Object.entries(typeCounts)
    .map(([type, count]) => `${count} ${pluralType(type, count).toLowerCase()}`)
    .join(", ");

  return (
    <div className="px-6 lg:px-12 py-12 max-w-5xl mx-auto">
      <header className="mb-16">
        <h1
          className="text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          style={{ fontFamily: "var(--font-serif)", color: "var(--text-primary)" }}
        >
          Product Marketing
          <br />
          Knowledge Base
        </h1>
        <p
          className="text-lg max-w-2xl mb-8 leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {totalEntries} entries: {typeSummary}, for product marketing professionals.
          Practical, structured, and ready to apply.
        </p>

        <Search entries={searchEntries} />
      </header>

      <section className="mb-12">
        <h2
          className="text-2xl font-bold mb-8"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Browse by Category
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group block p-5 border transition-all hover:shadow-md"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
              }}
            >
              <div className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-sm font-bold"
                  style={{
                    backgroundColor: "var(--accent-light)",
                    color: "var(--accent)",
                  }}
                >
                  {CATEGORY_ICONS[cat.number] || cat.number}
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm leading-snug" style={{ color: "var(--text-primary)" }}>
                    {cat.title}
                  </h3>
                  <p className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>
                    {cat.entries.length} {cat.entries.length === 1 ? "entry" : "entries"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2
          className="text-sm font-semibold uppercase tracking-wider mb-4"
          style={{ fontFamily: "var(--font-sans)", color: "var(--text-tertiary)" }}
        >
          Browse by Type
        </h2>
        <div className="flex flex-wrap gap-3">
          {(Object.keys(TYPE_SLUGS) as Array<keyof typeof TYPE_SLUGS>).map((type) => (
            <Link
              key={type}
              href={`/type/${TYPE_SLUGS[type]}`}
              className="type-pill text-sm font-medium px-4 py-2 border transition-colors"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            >
              View all {pluralType(type, 2).toLowerCase()}
            </Link>
          ))}
        </div>
      </section>

      <footer className="pt-8 border-t text-center" style={{ borderColor: "var(--border)" }}>
        <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
          CC BY 4.0 &middot; A reference guide for product marketing professionals
        </p>
      </footer>
    </div>
  );
}
