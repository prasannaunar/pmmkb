/**
 * Keeps the hand-kept copies of the entry list in step with the entries'
 * frontmatter (PLAN.md, "Content modularisation" follow-ups):
 *
 * - renderIndex() rebuilds every table in INDEX.md between its
 *   `<!-- BEGIN generated table: <category slug> ... -->` and
 *   `<!-- END generated table: <category slug> -->` markers. The prose around
 *   the tables stays hand-written.
 * - checkIndexCounts() checks the hand-written totals in INDEX.md.
 * - checkQuickReference() checks each quick-reference/ file has one card per
 *   entry, in the category's order, with the entry's title and type.
 *
 * Used by `npm run generate:index` (writes) and `npm run test:content` (checks).
 */
import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

const MARKER =
  /(<!-- BEGIN generated table: ([\w-]+)\. [^\n]*-->\n)[\s\S]*?(<!-- END generated table: \2 -->)/g;

const cell = (text) => text.replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();

function table(category) {
  return [
    "| Entry | Type | Description |",
    "|-------|------|-------------|",
    ...category.entries.map(
      (e) => `| [${cell(e.title)}](${e.filePath}) | ${e.type} | ${cell(e.description)} |`,
    ),
  ].join("\n");
}

export function renderIndex(text, categories) {
  const bySlug = new Map(categories.map((c) => [c.slug, c]));
  const seen = new Set();
  const out = text.replace(MARKER, (_, begin, slug, end) => {
    const category = bySlug.get(slug);
    assert.ok(category, `INDEX.md has a generated table for unknown category "${slug}"`);
    seen.add(slug);
    return `${begin}${table(category)}\n${end}`;
  });
  for (const c of categories)
    assert.ok(seen.has(c.slug), `INDEX.md has no generated table for "${c.slug}"`);
  return out;
}

const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;

function typeBreakdown(entries) {
  const count = (type) => entries.filter((e) => e.type === type).length;
  return [
    ["Framework", "framework", "frameworks"],
    ["Methodology", "methodology", "methodologies"],
    ["Model", "model", "models"],
    ["Primer", "primer", "primers"],
  ]
    .filter(([type]) => count(type) > 0)
    .map(([type, one, many]) => plural(count(type), one, many))
    .join(", ");
}

export function checkIndexCounts(text, categories) {
  const core = categories.filter((c) => !c.adjacent).flatMap((c) => c.entries);
  const adjacent = categories.filter((c) => c.adjacent).flatMap((c) => c.entries);
  const coreLine = `**Total entries:** ${core.length} core (${typeBreakdown(core)})`;
  assert.ok(text.includes(coreLine), `INDEX.md "Structure Notes" should read: ${coreLine}`);
  const adjacentLine = `plus ${adjacent.length} adjacent entries (${typeBreakdown(adjacent)})`;
  assert.ok(text.includes(adjacentLine), `INDEX.md "Structure Notes" should say: ${adjacentLine}`);
  for (const c of categories) {
    const label = c.adjacent
      ? "Adjacent Disciplines"
      : c.number === 10
        ? "Concepts (Primers)"
        : `Category ${c.number} (${c.title})`;
    const line = `**${label}:** ${plural(c.entries.length, "entry", "entries")}`;
    assert.ok(text.includes(line), `INDEX.md "Completion Status" should read: ${line}`);
  }
}

function quickReferenceFile(category) {
  return `quick-reference/${category.adjacent ? "adjacent-disciplines" : category.slug}.md`;
}

export function checkQuickReference(repoRoot, categories) {
  for (const category of categories) {
    const file = quickReferenceFile(category);
    const absolute = path.join(repoRoot, file);
    assert.ok(fs.existsSync(absolute), `Missing quick-reference file: ${file}`);
    const text = fs.readFileSync(absolute, "utf8");
    const titles = category.entries.map((e) => e.title);

    const cards = text
      .split(/^## /m)
      .slice(1)
      .map((card) => ({
        title: card.slice(0, card.indexOf("\n")).trim(),
        type: card.match(/^\*\*Type:\*\* *(\w+)/m)?.[1],
      }))
      .filter((card) => card.title !== "Contents");
    assert.deepEqual(
      cards.map((c) => c.title),
      titles,
      `${file}: cards should match the entries' titles, in the category's order`,
    );
    cards.forEach((card, i) =>
      assert.equal(
        card.type,
        category.entries[i].type,
        `${file}: "${card.title}" card should say **Type:** ${category.entries[i].type}`,
      ),
    );

    const contents = text.match(/^## Contents\n([\s\S]*?)\n---/m);
    if (contents)
      assert.deepEqual(
        [...contents[1].matchAll(/^(?:\d+\.|-) \[([^\]]+)\]/gm)].map((m) => m[1]),
        titles,
        `${file}: the Contents list should match the cards`,
      );
  }
}
