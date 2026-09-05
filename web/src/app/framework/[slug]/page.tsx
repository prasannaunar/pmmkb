import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllEntries, getEntryBySlug, markdownToHtml } from "@/lib/content";
import { TypeBadge } from "@/components/type-badge";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllEntries().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);
  if (!entry) return { title: "Not Found" };
  return {
    title: entry.title,
    description: `${entry.type}: ${entry.title}. Part of the PMM Knowledge Base.`,
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

  const contentHtml = await markdownToHtml(entry.rawMarkdown);

  return (
    <div className="px-6 lg:px-12 py-12 max-w-3xl mx-auto">
      <nav className="mb-8">
        <Link
          href="/"
          className="text-sm transition-colors hover:underline"
          style={{ color: "var(--text-tertiary)" }}
        >
          Home
        </Link>
        <span className="mx-2 text-sm" style={{ color: "var(--text-tertiary)" }}>/</span>
        <Link
          href={`/category/${entry.categorySlug}`}
          className="text-sm transition-colors hover:underline"
          style={{ color: "var(--text-tertiary)" }}
        >
          {entry.categoryTitle.replace(/^Category \d+: /, "")}
        </Link>
        <span className="mx-2 text-sm" style={{ color: "var(--text-tertiary)" }}>/</span>
        <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
          {entry.title}
        </span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <TypeBadge type={entry.type} />
          <span className="text-sm" style={{ color: "var(--text-tertiary)" }}>
            {entry.categoryTitle}
          </span>
        </div>
        <h1
          className="text-3xl lg:text-4xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {entry.title}
        </h1>
      </header>

      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      <footer className="mt-12 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
        <Link
          href={`/category/${entry.categorySlug}`}
          className="text-sm font-medium transition-colors hover:underline"
          style={{ color: "var(--accent)" }}
        >
          &larr; Back to {entry.categoryTitle.replace(/^Category \d+: /, "")}
        </Link>
      </footer>
    </div>
  );
}
