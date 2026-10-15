import type { Category, Entry } from "./content";
import { cleanTitle } from "./editorial";
import { AUTHOR, SITE_NAME, SITE_URL, absoluteUrl } from "./site";

// Schema.org JSON-LD for search and answer engines (PLAN.md, "SEO PR 2").
// Every `url` and `@id` on this site is built from SITE_URL, so the graph
// moves with the canonical origin. Rendered by `<JsonLd>`.

type JsonLdNode = Record<string, unknown>;

const WEBSITE_ID = `${SITE_URL}/#website`;
const AUTHOR_ID = `${SITE_URL}/#author`;

const SITE_DESCRIPTION =
  "A practical product marketing field guide: frameworks, methodologies and models, each with a worked example, pitfalls, sources and a quiz.";

const author: JsonLdNode = {
  "@type": "Person",
  "@id": AUTHOR_ID,
  name: AUTHOR.name,
  url: AUTHOR.url,
};

const websiteRef = { "@id": WEBSITE_ID };

export function websiteJsonLd(): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "en-GB",
        creator: author,
        publisher: author,
      },
    ],
  };
}

interface Crumb {
  name: string;
  path: string;
}

function breadcrumbList(crumbs: Crumb[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

const HOME: Crumb = { name: "Home", path: "/" };
const TOPICS: Crumb = { name: "Explore topics", path: "/topics" };

function itemList(entries: Entry[]): JsonLdNode {
  return {
    "@type": "ItemList",
    numberOfItems: entries.length,
    itemListElement: entries.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/framework/${entry.slug}`),
      name: entry.title,
    })),
  };
}

function collectionPage(
  name: string,
  description: string,
  path: string,
  entries: Entry[],
  crumbs: Crumb[],
): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": absoluteUrl(path),
        url: absoluteUrl(path),
        name,
        description,
        inLanguage: "en-GB",
        isPartOf: websiteRef,
        mainEntity: itemList(entries),
      },
      breadcrumbList(crumbs),
    ],
  };
}

export function categoryJsonLd(category: Category, description: string): JsonLdNode {
  const path = `/category/${category.slug}`;
  const name = cleanTitle(category.title);
  return collectionPage(name, description, path, category.entries, [
    HOME,
    TOPICS,
    { name, path },
  ]);
}

export function typeJsonLd(
  name: string,
  description: string,
  path: string,
  entries: Entry[],
): JsonLdNode {
  return collectionPage(name, description, path, entries, [
    HOME,
    TOPICS,
    { name, path },
  ]);
}

/** One cited work per markdown link in the Sources bullets: the link text is
 * the work's title, the target its canonical URL. */
export function parseCitations(
  sourcesMarkdown: string | null,
): { name: string; url: string }[] {
  if (!sourcesMarkdown) return [];
  const seen = new Set<string>();
  const citations: { name: string; url: string }[] = [];
  for (const match of sourcesMarkdown.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g)) {
    const url = match[2];
    if (seen.has(url)) continue;
    seen.add(url);
    citations.push({
      name: match[1].replace(/^["“'‘]+|["”'’]+$/g, "").replace(/[*_]/g, "").trim(),
      url,
    });
  }
  return citations;
}

export function entryJsonLd(
  entry: Entry,
  credits: string[],
  sourcesMarkdown: string | null,
): JsonLdNode {
  const url = absoluteUrl(`/framework/${entry.slug}`);
  const categoryPath = `/category/${entry.categorySlug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        url,
        mainEntityOfPage: url,
        headline: entry.title,
        description: entry.description,
        abstract: entry.definition,
        articleSection: cleanTitle(entry.categoryTitle),
        genre: entry.type,
        inLanguage: "en-GB",
        isPartOf: websiteRef,
        // The site's maker wrote this summary; the originators are credited
        // through `creditText` and their works through `citation`, rather
        // than being named as authors of a page they did not write.
        author,
        publisher: author,
        image: absoluteUrl("/og-default.png"),
        ...(credits.length ? { creditText: credits.join("; ") } : {}),
        citation: parseCitations(sourcesMarkdown).map((c) => ({
          "@type": "CreativeWork",
          name: c.name,
          url: c.url,
        })),
        license: "https://creativecommons.org/licenses/by/4.0/",
      },
      breadcrumbList([
        HOME,
        TOPICS,
        { name: cleanTitle(entry.categoryTitle), path: categoryPath },
        { name: entry.title, path: `/framework/${entry.slug}` },
      ]),
    ],
  };
}
