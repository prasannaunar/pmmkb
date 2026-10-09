/**
 * Checks the built site in `out/` for the on-page SEO the plan in PLAN.md
 * ("Web app: SEO / GEO / AEO") promises: one h1, a unique title and meta
 * description, a canonical URL on the www origin, Open Graph and Twitter tags,
 * a sitemap listing exactly the indexable pages, and a robots.txt that points
 * at it. Reads the static export, so run it after the build.
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
  `PASS: ${pages.size} pages with one h1, unique title and description, canonical and social tags; sitemap lists ${listed.length} URLs; robots.txt points at it.`,
);
