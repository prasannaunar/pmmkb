/**
 * Checks the built site in `out/` for the on-page SEO the plan in PLAN.md
 * ("Web app: SEO / GEO / AEO") promises: one h1, a unique title and meta
 * description, a canonical URL on the www origin, Open Graph and Twitter tags,
 * a sitemap listing exactly the indexable pages, and a robots.txt that points
 * at it, schema.org JSON-LD on the home, category, type and entry pages, and
 * an llms.txt and llms-full.txt that cover every entry. Reads the static
 * export, so run it after the build.
 *
 * Usage: npm run build && npm run test:seo
 */
import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

const OUT = path.join(import.meta.dirname, "..", "out");
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pmmkb.com"
).replace(/\/$/, "");
const AUTHOR_URL = "https://www.prasannaunar.com/";
// Pages that exist but should not be in the sitemap, or are not real pages.
const NOT_PAGES = new Set(["404.html", "_not-found.html"]);
const NOT_IN_SITEMAP = new Set(["/search"]);

assert.ok(
  fs.existsSync(OUT),
  "web/out not found: run `npm run build` before `npm run test:seo`",
);

function htmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((item) => {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) return item.name === "_next" ? [] : htmlFiles(full);
    return item.name.endsWith(".html") ? [full] : [];
  });
}

const attr = (html, pattern) => html.match(pattern)?.[1];
const meta = (html, key, value) =>
  attr(
    html,
    new RegExp(`<meta ${key}="${value}" content="([^"]*)"`),
  );

const pages = new Map(); // path -> html
for (const file of htmlFiles(OUT)) {
  const rel = path.relative(OUT, file).split(path.sep).join("/");
  if (NOT_PAGES.has(rel)) continue;
  const route = rel === "index.html" ? "/" : `/${rel.replace(/\.html$/, "")}`;
  pages.set(route, fs.readFileSync(file, "utf8"));
}
assert.ok(pages.size >= 90, `Expected the full site (about 97 pages), found ${pages.size}`);

const titles = new Map();
const descriptions = new Map();
for (const [route, html] of pages) {
  const at = `page ${route}`;
  // Next writes the homepage canonical without the trailing slash; the two
  // forms are the same URL.
  const canonical = route === "/" ? SITE_URL : `${SITE_URL}${route}`;
  assert.match(html, /<html lang="en-GB"/, `${at}: html lang should be en-GB`);
  assert.equal(
    (html.match(/<h1[\s>]/g) ?? []).length,
    1,
    `${at}: needs exactly one h1`,
  );
  const title = attr(html, /<title>([^<]+)<\/title>/);
  assert.ok(title, `${at}: missing title`);
  const description = meta(html, "name", "description");
  assert.ok(description, `${at}: missing meta description`);
  assert.equal(
    attr(html, /<link rel="canonical" href="([^"]+)"/),
    canonical,
    `${at}: canonical should be ${canonical}`,
  );
  assert.equal(meta(html, "property", "og:url"), canonical, `${at}: og:url`);
  assert.equal(meta(html, "property", "og:title"), title, `${at}: og:title should match the title`);
  assert.equal(meta(html, "property", "og:description"), description, `${at}: og:description`);
  assert.equal(
    meta(html, "property", "og:type"),
    route.startsWith("/framework/") ? "article" : "website",
    `${at}: og:type`,
  );
  assert.equal(
    meta(html, "property", "og:image"),
    `${SITE_URL}/og-default.png`,
    `${at}: og:image should be absolute`,
  );
  assert.equal(
    meta(html, "name", "twitter:card"),
    "summary_large_image",
    `${at}: twitter:card`,
  );
  assert.ok(meta(html, "name", "twitter:title"), `${at}: twitter:title`);
  assert.ok(html.includes(`href="${AUTHOR_URL}"`), `${at}: footer should link to ${AUTHOR_URL}`);

  assert.ok(!titles.has(title), `${at}: title duplicates ${titles.get(title)}`);
  titles.set(title, route);
  assert.ok(
    !descriptions.has(description),
    `${at}: description duplicates ${descriptions.get(description)}`,
  );
  descriptions.set(description, route);
}

// Structured data (PLAN.md, "PR 2"). Every URL on this site must come from
// SITE_URL; the only outside URLs allowed are the maker's site, the licence
// and the cited works.
const LICENSE_URL = "https://creativecommons.org/licenses/by/4.0/";
const EXPECTED_TYPES = [
  [/^\/$/, ["WebSite"]],
  [/^\/(category|type)\//, ["CollectionPage", "BreadcrumbList"]],
  [/^\/framework\//, ["Article", "BreadcrumbList"]],
];
function checkUrls(node, at, key = "") {
  if (Array.isArray(node)) return node.forEach((n) => checkUrls(n, at, key));
  if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node))
      if (k !== "citation") checkUrls(v, at, k);
    return;
  }
  if (["url", "@id", "item", "mainEntityOfPage", "image"].includes(key))
    assert.ok(
      node.startsWith(`${SITE_URL}/`) || node === AUTHOR_URL || node === LICENSE_URL,
      `${at}: JSON-LD ${key} should be on ${SITE_URL}, got ${node}`,
    );
}
let jsonLdPages = 0;
for (const [route, html] of pages) {
  const at = `page ${route}`;
  const canonical = route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`;
  const blocks = [
    ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
  ].map((m) => {
    try {
      return JSON.parse(m[1]);
    } catch {
      assert.fail(`${at}: JSON-LD is not valid JSON`);
    }
  });
  const expected = EXPECTED_TYPES.find(([pattern]) => pattern.test(route))?.[1];
  if (!expected) {
    assert.equal(blocks.length, 0, `${at}: unexpected JSON-LD`);
    continue;
  }
  assert.equal(blocks.length, 1, `${at}: expected one JSON-LD block`);
  jsonLdPages++;
  const [block] = blocks;
  assert.equal(block["@context"], "https://schema.org", `${at}: @context`);
  const nodes = block["@graph"];
  assert.ok(Array.isArray(nodes), `${at}: JSON-LD should be an @graph`);
  const byType = Object.fromEntries(nodes.map((n) => [n["@type"], n]));
  for (const type of expected) assert.ok(byType[type], `${at}: missing ${type}`);
  checkUrls(block, at);

  const crumbs = byType.BreadcrumbList?.itemListElement;
  if (crumbs) {
    crumbs.forEach((c, i) => {
      assert.equal(c.position, i + 1, `${at}: breadcrumb positions`);
      assert.ok(c.name && c.item, `${at}: breadcrumb needs name and item`);
    });
    assert.equal(crumbs.at(-1).item, canonical, `${at}: last breadcrumb is the page`);
  }
  const main = byType.WebSite ?? byType.CollectionPage ?? byType.Article;
  assert.equal(main.url, canonical, `${at}: JSON-LD url should be the canonical`);
  if (byType.CollectionPage) {
    const list = byType.CollectionPage.mainEntity;
    assert.ok(list.itemListElement.length > 0, `${at}: empty ItemList`);
    assert.equal(list.numberOfItems, list.itemListElement.length, `${at}: numberOfItems`);
    for (const item of list.itemListElement)
      assert.ok(
        pages.has(item.url.slice(SITE_URL.length)),
        `${at}: ItemList links to a missing page ${item.url}`,
      );
  }
  if (byType.Article) {
    const article = byType.Article;
    const decode = (t) =>
      t.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
    assert.equal(article.description, decode(meta(html, "name", "description")), `${at}: Article description`);
    assert.ok(article.headline && article.abstract, `${at}: Article needs headline and abstract`);
    assert.equal(article.author?.url, AUTHOR_URL, `${at}: Article author`);
    assert.ok(article.creditText, `${at}: Article creditText from the Sources credits`);
    assert.ok(article.citation.length > 0, `${at}: Article needs at least one citation`);
    for (const c of article.citation)
      assert.ok(c.name && /^https?:\/\//.test(c.url), `${at}: citation needs a name and URL`);
  }
}

// llms.txt lists every entry; llms-full.txt carries every entry's text.
const llms = fs.readFileSync(path.join(OUT, "llms.txt"), "utf8");
const llmsFull = fs.readFileSync(path.join(OUT, "llms-full.txt"), "utf8");
assert.match(llms, /^# PMM Knowledge Base\n\n> /, "llms.txt should open with the title and a > summary");
assert.match(llmsFull, /^# PMM Knowledge Base: full text\n/, "llms-full.txt title");
const entryRoutes = [...pages.keys()].filter((r) => r.startsWith("/framework/"));
for (const route of entryRoutes) {
  assert.ok(llms.includes(`](${SITE_URL}${route}): `), `llms.txt is missing ${route}`);
  assert.ok(llmsFull.includes(`- URL: ${SITE_URL}${route}\n`), `llms-full.txt is missing ${route}`);
}
for (const [, url] of llms.matchAll(/\]\((https?:[^)]+)\)/g)) {
  const route = url.slice(SITE_URL.length);
  assert.ok(
    url.startsWith(SITE_URL) && (pages.has(route) || route === "/llms-full.txt"),
    `llms.txt links to ${url}, which is not a page on this site`,
  );
}

const sitemap = fs.readFileSync(path.join(OUT, "sitemap.xml"), "utf8");
const listed = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const expected = [...pages.keys()]
  .filter((route) => !NOT_IN_SITEMAP.has(route))
  .map((route) => `${SITE_URL}${route}`);
assert.equal(new Set(listed).size, listed.length, "sitemap.xml lists a URL twice");
assert.deepEqual(
  [...listed].sort(),
  [...expected].sort(),
  "sitemap.xml should list every page except /search, and nothing else",
);

const robots = fs.readFileSync(path.join(OUT, "robots.txt"), "utf8");
assert.ok(
  robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`),
  "robots.txt should reference the sitemap",
);
assert.ok(fs.existsSync(path.join(OUT, "og-default.png")), "og-default.png missing from the export");

console.log(
  `PASS: ${pages.size} pages with one h1, unique title and description, canonical and social tags; JSON-LD valid on ${jsonLdPages} pages; llms.txt and llms-full.txt cover all ${entryRoutes.length} entries; sitemap lists ${listed.length} URLs; robots.txt points at it.`,
);
