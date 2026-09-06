import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCategories, getCategoryBySlug } from "@/lib/content";
import { parseQuizMarkdown } from "@/lib/quiz";
import { StickyHeader } from "@/components/sticky-header";
import { CategoryEntries } from "@/components/category-entries";
import { QuizSection } from "@/components/quiz-section";
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

  const quizQuestions = category.quizMarkdown
    ? parseQuizMarkdown(category.quizMarkdown, category.slug)
    : [];

  const typeCounts = category.entries.reduce(
    (acc, e) => {
      acc[e.type] = (acc[e.type] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <div className="px-6 lg:px-12 py-12 max-w-4xl mx-auto">
      <StickyHeader crumbs={[{ label: "Home" }, { label: category.title }]} title={category.title} />

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
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {category.title}
        </h1>
      </header>

      <CategoryEntries entries={category.entries} typeCounts={typeCounts} />

      {quizQuestions.length > 0 && (
        <QuizSection
          title="Category quiz"
          description="Cross-framework judgement: given a situation, pick which entry in this category fits it best."
          questions={quizQuestions}
        />
      )}
    </div>
  );
}
