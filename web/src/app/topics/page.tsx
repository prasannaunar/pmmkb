import Link from "next/link";
import { getAllCategories, TYPE_SLUGS } from "@/lib/content";
import { categoryIntros, cleanTitle } from "@/lib/editorial";
import { pluralType } from "@/lib/plural";
export const metadata = {
  title: "Explore topics",
  description: "Browse the complete product marketing library by topic.",
};
export default function TopicsPage() {
  const categories = getAllCategories();
  return (
    <div className="page-shell">
      <header className="page-intro">
        <p className="eyebrow">The complete library</p>
        <h1>Explore topics</h1>
        <p className="lede">
          Follow your curiosity, or go straight to the part of your practice you
          want to strengthen. Every entry is here.
        </p>
      </header>
      <div className="topic-directory">
        {categories.map((c) => (
          <Link href={`/category/${c.slug}`} key={c.slug}>
            <div>
              <h2>{cleanTitle(c.title)}</h2>
              <p>{categoryIntros[c.number]}</p>
            </div>
            <span className="metadata">
              {c.entries.length} {c.entries.length === 1 ? "entry" : "entries"}{" "}
              ↗
            </span>
          </Link>
        ))}
      </div>
      <section className="section-block">
        <div className="section-heading">
          <h2>Looking for a particular kind of guide?</h2>
        </div>
        <div className="filter-bar">
          {Object.entries(TYPE_SLUGS).map(([type, slug]) => (
            <Link key={slug} href={`/type/${slug}`}>
              {pluralType(type, 2)} →
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
