import fs from "fs";
import path from "path";
import matter from "gray-matter";
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
import { plainText, cleanTitle } from "./editorial";

const REPO_ROOT = path.join(/*turbopackIgnore: true*/ process.cwd(), "..");

export type EntryType = "Framework" | "Methodology" | "Model" | "Primer";

const ENTRY_TYPES: readonly EntryType[] = [
  "Framework",
  "Methodology",
  "Model",
  "Primer",
];

export interface Entry {
  title: string;
  slug: string;
  type: EntryType;
  categorySlug: string;
  categoryTitle: string;
  categoryNumber: number;
  /** Position within the category; only the relative order matters, so
   * authors can leave gaps (10, 20, 30) and insert without renumbering. */
  order: number;
  /** One-sentence trigger shown in listings, search and the page description. */
  useWhen: string;
  /** One-line statement of what applying the entry produces. */
  produces: string;
  /** Meta description for search and social previews: one complete sentence of 50 to 160 characters. */
  description: string;
  /** Repo-relative path of the entry's markdown file. */
  filePath: string;
  /** The entry body: no frontmatter, no title heading, no quiz. */
  rawMarkdown: string;
  /** Contents of the sibling `<slug>.quiz.md`, or null if there is none. */
  quizMarkdown: string | null;
}

export interface Category {
  slug: string;
  title: string;
  number: number;
  intro: string;
  entries: Entry[];
  quizMarkdown: string | null;
}

// Content layout (see CLAUDE.md, "Repository Structure"): each category is a
// directory holding `_category.md`, an optional `_category.quiz.md`, and one
// `<slug>.md` plus `<slug>.quiz.md` per entry. Categories live under
// `frameworks/<NN-slug>/`; the primers collection is `concepts/` itself.
const FRAMEWORKS_DIR = "frameworks";
const CONCEPTS_DIR = "concepts";
const CATEGORY_FILE = "_category.md";
const CATEGORY_QUIZ_FILE = "_category.quiz.md";

function fail(file: string, message: string): never {
  throw new Error(`${file}: ${message}`);
}

function requireString(
  data: Record<string, unknown>,
  key: string,
  file: string,
): string {
  const value = data[key];
  if (typeof value !== "string" || !value.trim())
    fail(file, `frontmatter needs a non-empty "${key}"`);
  return value.trim();
}

function requireNumber(
  data: Record<string, unknown>,
  key: string,
  file: string,
): number {
  const value = data[key];
  if (typeof value !== "number" || !Number.isFinite(value))
    fail(file, `frontmatter needs a numeric "${key}"`);
  return value;
}

function readIfPresent(absolutePath: string): string | null {
  return fs.existsSync(absolutePath)
    ? fs.readFileSync(absolutePath, "utf-8")
    : null;
}

/** Quiz files open with a `# ...` heading for GitHub readers; the parser only
 * needs the numbered questions beneath it. */
function readQuiz(absolutePath: string): string | null {
  const raw = readIfPresent(absolutePath);
  if (raw === null) return null;
  const body = raw.replace(/^\s*# [^\n]*\n/, "").trim();
  return body || null;
}

function categoryDirectories(): string[] {
  const dirs: string[] = [];
  for (const root of [FRAMEWORKS_DIR, CONCEPTS_DIR]) {
    const absoluteRoot = path.join(REPO_ROOT, root);
    if (fs.existsSync(path.join(absoluteRoot, CATEGORY_FILE))) {
      dirs.push(root);
      continue;
    }
    for (const child of fs.readdirSync(absoluteRoot, { withFileTypes: true })) {
      if (
        child.isDirectory() &&
        fs.existsSync(path.join(absoluteRoot, child.name, CATEGORY_FILE))
      )
        dirs.push(`${root}/${child.name}`);
    }
  }
  return dirs;
}

function loadEntry(
  dir: string,
  fileName: string,
  category: Pick<Category, "slug" | "title" | "number">,
): Entry {
  const filePath = `${dir}/${fileName}`;
  const { data, content } = matter(
    fs.readFileSync(path.join(REPO_ROOT, filePath), "utf-8"),
  );
  const title = requireString(data, "title", filePath);
  const slug = requireString(data, "slug", filePath);
  if (`${slug}.md` !== fileName)
    fail(filePath, `slug "${slug}" must match the file name`);
  const type = requireString(data, "type", filePath) as EntryType;
  if (!ENTRY_TYPES.includes(type))
    fail(filePath, `type must be one of ${ENTRY_TYPES.join(", ")}`);

  const heading = content.match(/^\s*# ([^\n]+)\n?/);
  if (!heading || heading[1].trim() !== title)
    fail(filePath, `body must open with "# ${title}"`);

  return {
    title,
    slug,
    type,
    categorySlug: category.slug,
    categoryTitle: category.title,
    categoryNumber: category.number,
    order: requireNumber(data, "order", filePath),
    useWhen: requireString(data, "use_when", filePath),
    produces: requireString(data, "produces", filePath),
    description: requireString(data, "description", filePath),
    filePath,
    rawMarkdown: content.slice(heading[0].length).trim(),
    quizMarkdown: readQuiz(
      path.join(REPO_ROOT, dir, fileName.replace(/\.md$/, ".quiz.md")),
    ),
  };
}

function loadCategory(dir: string): Category {
  const categoryPath = `${dir}/${CATEGORY_FILE}`;
  const { data } = matter(
    fs.readFileSync(path.join(REPO_ROOT, categoryPath), "utf-8"),
  );
  const category = {
    slug: requireString(data, "slug", categoryPath),
    title: requireString(data, "title", categoryPath),
    number: requireNumber(data, "number", categoryPath),
  };
  const fileNames = fs
    .readdirSync(path.join(REPO_ROOT, dir))
    .filter(
      (name) =>
        name.endsWith(".md") &&
        !name.endsWith(".quiz.md") &&
        name !== CATEGORY_FILE,
    );
  const entries = fileNames
    .map((name) => loadEntry(dir, name, category))
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));

  return {
    ...category,
    intro: requireString(data, "intro", categoryPath),
    entries,
    quizMarkdown: readQuiz(path.join(REPO_ROOT, dir, CATEGORY_QUIZ_FILE)),
  };
}

let categoryCache: Category[] | null = null;

export function getAllCategories(): Category[] {
  // Build-time only: in `next dev` the files are re-read on every call so an
  // edit shows up on refresh.
  if (categoryCache && process.env.NODE_ENV === "production")
    return categoryCache;
  const categories = categoryDirectories()
    .map(loadCategory)
    .sort((a, b) => a.number - b.number);
  categoryCache = categories;
  return categories;
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
  content: string;
}

export function getSearchIndex(): SearchEntry[] {
  return getAllEntries().map((entry) => {
    return {
      title: entry.title,
      slug: entry.slug,
      type: entry.type,
      categoryTitle: cleanTitle(entry.categoryTitle),
      categorySlug: entry.categorySlug,
      snippet: entry.useWhen,
      content: plainText(entry.rawMarkdown),
    };
  });
}
