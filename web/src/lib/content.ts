import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { toString as hastToString } from "hast-util-to-string";
import type {
  Root as HastRoot,
  RootContent as HastNode,
  Element as HastElement,
  ElementContent as HastElementContent,
} from "hast";

const REPO_ROOT = path.join(/*turbopackIgnore: true*/ process.cwd(), "..");

export type EntryType = "Framework" | "Methodology" | "Model" | "Primer";

export interface Entry {
  title: string;
  slug: string;
  type: EntryType;
  categorySlug: string;
  categoryTitle: string;
  categoryNumber: number;
  rawMarkdown: string;
}

export interface Category {
  slug: string;
  title: string;
  number: number;
  entries: Entry[];
}

const CATEGORY_FILES = [
  "frameworks/01-market-customer-understanding.md",
  "frameworks/02-positioning-messaging.md",
  "frameworks/03-competitive-strategy.md",
  "frameworks/04-go-to-market-launch.md",
  "frameworks/05-lifecycle-workflow.md",
  "frameworks/06-product-experience-adoption.md",
  "frameworks/07-strategy-planning.md",
  "frameworks/08-pricing-packaging.md",
  "frameworks/09-sales-enablement.md",
];

const CONCEPT_FILES = ["concepts/gtm-strategy-vs-product-marketing.md"];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function extractCategoryInfo(filePath: string): {
  number: number;
  slug: string;
} {
  const basename = path.basename(filePath, ".md");
  const match = basename.match(/^(\d+)-(.+)$/);
  if (match) {
    return { number: parseInt(match[1], 10), slug: basename };
  }
  return { number: 0, slug: basename };
}

function extractType(markdown: string): EntryType {
  const match = markdown.match(/\*\*Type:\*\*\s*(Framework|Methodology|Model|Primer)/i);
  if (match) {
    const raw = match[1];
    return (raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase().replace(/\.$/, "")) as EntryType;
  }
  return "Framework";
}

function splitEntries(
  fileContent: string,
  categorySlug: string,
  categoryTitle: string,
  categoryNumber: number
): Entry[] {
  const lines = fileContent.split("\n");
  const entries: Entry[] = [];
  let currentTitle = "";
  let currentLines: string[] = [];
  let inEntry = false;

  for (const line of lines) {
    const h2Match = line.match(/^## (.+)$/);
    if (h2Match) {
      if (inEntry && currentTitle) {
        const rawMarkdown = currentLines.join("\n").trim();
        entries.push({
          title: currentTitle,
          slug: slugify(currentTitle),
          type: extractType(rawMarkdown),
          categorySlug,
          categoryTitle,
          categoryNumber,
          rawMarkdown,
        });
      }
      currentTitle = h2Match[1].trim();
      currentLines = [];
      inEntry = true;
    } else if (inEntry) {
      if (line.trim() === "---") {
        const rawMarkdown = currentLines.join("\n").trim();
        entries.push({
          title: currentTitle,
          slug: slugify(currentTitle),
          type: extractType(rawMarkdown),
          categorySlug,
          categoryTitle,
          categoryNumber,
          rawMarkdown,
        });
        currentTitle = "";
        currentLines = [];
        inEntry = false;
      } else {
        currentLines.push(line);
      }
    }
  }

  if (inEntry && currentTitle) {
    const rawMarkdown = currentLines.join("\n").trim();
    entries.push({
      title: currentTitle,
      slug: slugify(currentTitle),
      type: extractType(rawMarkdown),
      categorySlug,
      categoryTitle,
      categoryNumber,
      rawMarkdown,
    });
  }

  return entries;
}

function extractCategoryTitle(content: string): string {
  const match = content.match(/^# (.+)$/m);
  return match ? match[1].trim() : "Untitled";
}

export function getAllCategories(): Category[] {
  const categories: Category[] = [];

  for (const file of CATEGORY_FILES) {
    const filePath = path.join(REPO_ROOT, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { number, slug } = extractCategoryInfo(file);
    const title = extractCategoryTitle(content);

    const entries = splitEntries(content, slug, title, number);
    categories.push({ slug, title, number, entries });
  }

  for (const file of CONCEPT_FILES) {
    const filePath = path.join(REPO_ROOT, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const entries = splitEntries(content, "concepts-primers", "Concepts", 10);
    if (entries.length > 0) {
      const existing = categories.find((c) => c.slug === "concepts-primers");
      if (existing) {
        existing.entries.push(...entries);
      } else {
        categories.push({
          slug: "concepts-primers",
          title: "Concepts",
          number: 10,
          entries,
        });
      }
    }
  }

  return categories.sort((a, b) => a.number - b.number);
}

export function getAllEntries(): Entry[] {
  return getAllCategories().flatMap((c) => c.entries);
}

export function getEntryBySlug(slug: string): Entry | undefined {
  return getAllEntries().find((e) => e.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return getAllCategories().find((c) => c.slug === slug);
}

export const TYPE_SLUGS: Record<EntryType, string> = {
  Framework: "frameworks",
  Methodology: "methodologies",
  Model: "models",
  Primer: "primers",
};

const SLUG_TO_TYPE: Record<string, EntryType> = Object.fromEntries(
  Object.entries(TYPE_SLUGS).map(([type, slug]) => [slug, type as EntryType])
);

export function getTypeBySlug(slug: string): EntryType | undefined {
  return SLUG_TO_TYPE[slug];
}

export function getAllTypeSlugs(): string[] {
  return Object.values(TYPE_SLUGS);
}

export function getEntriesByType(type: EntryType): Entry[] {
  return getAllEntries().filter((e) => e.type === type);
}

export function getSiteStats(): { totalEntries: number; categoryCount: number } {
  const categories = getAllCategories();
  return {
    totalEntries: categories.reduce((sum, c) => sum + c.entries.length, 0),
    categoryCount: categories.length,
  };
}

const SECTION_LABELS = [
  "What it is",
  "When to use it",
  "Ownership",
  "How to apply it",
  "How to run it",
  "Cadence & ownership",
  "Maturity stages",
  "How to read it",
  "Example",
  "Pitfalls",
  "Why it matters",
  "Key distinctions",
  "Where PMM fits",
];

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const LABEL_PATTERN = new RegExp(
  `^\\*\\*(${SECTION_LABELS.map(escapeRegExp).join("|")}):\\*\\*\\s*(.*)$`
);

/** Promotes the bold inline `**Label:**` markers into real `## Label` headings. */
function promoteLabelsToHeadings(markdown: string): string {
  return markdown
    .split("\n")
    .map((line) => {
      const match = line.match(LABEL_PATTERN);
      if (!match) return line;
      const [, label, rest] = match;
      return `## ${label}\n\n${rest}`;
    })
    .join("\n");
}

const PANEL_HEADINGS = new Set(["example", "pitfalls"]);

/** Wraps each `<h2>` and its following siblings into an anchored `<section>`. */
function wrapSections() {
  return (tree: HastRoot) => {
    const newChildren: HastNode[] = [];
    let current: HastElement | null = null;

    for (const node of tree.children) {
      if (node.type === "element" && node.tagName === "h2") {
        const heading = hastToString(node).trim().toLowerCase();
        const className = PANEL_HEADINGS.has(heading)
          ? ["entry-section", "entry-section-panel"]
          : ["entry-section"];
        current = {
          type: "element",
          tagName: "section",
          properties: { className },
          children: [node],
        };
        newChildren.push(current);
      } else if (current) {
        current.children.push(node as HastElementContent);
      } else {
        newChildren.push(node);
      }
    }

    tree.children = newChildren;
  };
}

const entryProcessor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeSlug)
  .use(wrapSections)
  .use(rehypeStringify);

export async function markdownToHtml(markdown: string): Promise<string> {
  const promoted = promoteLabelsToHeadings(markdown);
  const file = await entryProcessor.process(promoted);
  return String(file);
}

/** Small inline markdown (a Sources bullet list, a snippet) with no section wrapping. */
export async function markdownToInlineHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export interface SearchEntry {
  title: string;
  slug: string;
  type: EntryType;
  categoryTitle: string;
  categorySlug: string;
  snippet: string;
}

export function getSearchIndex(): SearchEntry[] {
  return getAllEntries().map((entry) => {
    const whatItIs = entry.rawMarkdown.match(
      /\*\*What it is:\*\*\s*([\s\S]*?)(?=\n\n\*\*|\n##|$)/
    );
    const snippet = whatItIs
      ? whatItIs[1].trim().slice(0, 200)
      : entry.rawMarkdown.slice(0, 200);
    return {
      title: entry.title,
      slug: entry.slug,
      type: entry.type,
      categoryTitle: entry.categoryTitle,
      categorySlug: entry.categorySlug,
      snippet,
    };
  });
}
