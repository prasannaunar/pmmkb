import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { load } from "./load-ts.mjs";
import { auditQuestion, collectQuizSets, flagNames } from "./quiz-audit-lib.mjs";
import { checkIndexCounts, checkQuickReference, renderIndex } from "./index-lib.mjs";
const content = load("../src/lib/content.ts");
const guides = load("../src/lib/guides.ts");
const quiz = load("../src/lib/quiz.ts");
const sections = load("../src/lib/entry-sections.ts");
const categories = content.getAllCategories();
const entries = content.getAllEntries();
// 71 core entries in 10 categories, plus the adjacent-disciplines collection
// (see CLAUDE.md, "The `adjacent/` area"), which the headline counts exclude.
const stats = content.getSiteStats();
assert.equal(stats.totalEntries, 71);
assert.equal(stats.categoryCount, 10);
assert.equal(stats.adjacentEntries, 5);
assert.equal(entries.length, 76);
assert.equal(categories.length, 11);
assert.equal(new Set(entries.map((e) => e.slug)).size, 76);
// Layout: the loader already throws on a missing or malformed field, a slug
// that differs from its file name, or a body that does not open with the
// title. These checks cover what it cannot see from one file at a time.
const repoRoot = path.join(import.meta.dirname, "..", "..");
for (const category of categories) {
  const orders = category.entries.map((e) => e.order);
  assert.equal(
    new Set(orders).size,
    orders.length,
    `Duplicate order values in ${category.slug}`,
  );
  const dir = category.entries[0].filePath.replace(/\/[^/]+$/, "");
  const entrySlugs = new Set(category.entries.map((e) => e.slug));
  for (const file of fs.readdirSync(path.join(repoRoot, dir))) {
    if (!file.endsWith(".quiz.md") || file === "_category.quiz.md") continue;
    assert.ok(
      entrySlugs.has(file.replace(/\.quiz\.md$/, "")),
      `Quiz file with no entry: ${dir}/${file}`,
    );
  }
}
// Meta descriptions: one complete sentence each, unique, sized for search results.
const descriptions = new Map();
for (const entry of entries) {
  assert.ok(
    entry.description.length >= 50 && entry.description.length <= 160,
    `description must be 50 to 160 characters (${entry.description.length}): ${entry.filePath}`,
  );
  assert.ok(
    /[.!?]$/.test(entry.description),
    `description must end with a full stop: ${entry.filePath}`,
  );
  assert.ok(
    !descriptions.has(entry.description),
    `Duplicate description: ${entry.filePath} and ${descriptions.get(entry.description)}`,
  );
  descriptions.set(entry.description, entry.filePath);
}
// Definitions: one "X is Y" sentence each, unique, short enough to lead the page.
const definitions = new Map();
for (const entry of entries) {
  const { definition, filePath } = entry;
  assert.ok(
    definition.length >= 60 && definition.length <= 220,
    `definition must be 60 to 220 characters (${definition.length}): ${filePath}`,
  );
  assert.ok(/\.$/.test(definition), `definition must end with a full stop: ${filePath}`);
  assert.ok(
    !/[a-z0-9)][.!?] [A-Z]/.test(definition.slice(0, -1)),
    `definition must be one sentence: ${filePath}`,
  );
  assert.ok(/ (is|are) /.test(definition), `definition should say what the entry is ("X is ..."): ${filePath}`);
  assert.ok(!/—|--/.test(definition), `definition must not use em dashes: ${filePath}`);
  assert.ok(
    !definitions.has(definition),
    `Duplicate definition: ${filePath} and ${definitions.get(definition)}`,
  );
  definitions.set(definition, filePath);
}
for (const entry of entries) {
  assert.ok(entry.useWhen && entry.produces, `Missing use_when/produces: ${entry.title}`);
  assert.ok(
    entry.quizMarkdown,
    `Missing quiz file: ${entry.filePath.replace(/\.md$/, ".quiz.md")}`,
  );
  const { sourcesMarkdown, sourceCredits } = sections.extractSpecialSections(
    entry.rawMarkdown,
  );
  assert.ok(sourcesMarkdown, `Missing Sources block: ${entry.title}`);
  assert.ok(
    sourceCredits.length > 0,
    `Missing credits on the **Sources:** line: ${entry.title}`,
  );
  for (const name of sourceCredits)
    assert.ok(
      !/[[\]()*]|\bhttp/.test(name) && name.length <= 40,
      `Credit should be a bare name: ${entry.title} -> ${name}`,
    );
  const q = quiz.parseQuizMarkdown(entry.quizMarkdown, entry.slug);
  assert.equal(q.length, 5, entry.title);
  for (const question of q) {
    assert.equal(question.options.length, 4);
    assert.equal(question.options.filter((o) => o.correct).length, 1);
  }
}
assert.equal(categories.filter((c) => c.quizMarkdown).length, 10);
for (const c of categories.filter((c) => c.quizMarkdown))
  assert.equal(
    quiz.parseQuizMarkdown(c.quizMarkdown, c.slug).length,
    10,
    c.title,
  );
for (const guide of [...guides.challenges, ...guides.learningPaths])
  assert.equal(guides.resolveSteps(guide).length, guide.steps.length);
for (const guide of guides.learningPaths) {
  const q = guides.pathQuiz(guide);
  assert.equal(q.questions.length, 5);
  assert.equal(q.reviews.length, 5);
  for (const question of q.questions) {
    assert.equal(question.options.length, 4);
    assert.equal(question.options.filter((o) => o.correct).length, 1);
    assert.ok(question.options.every((o) => o.feedback.length > 20));
  }
}
// Quiz distractor standard (QUIZ-SPEC.md, "Distractor quality"; enforced
// from batch 10 of QUIZ-REVISION-PLAN.md, once every file cleared it).
const requiredCleanFlags = flagNames.filter((f) => f !== "correctLongest" && f !== "spread");
const byFile = new Map();
for (const set of collectQuizSets(content, guides, quiz)) {
  const stats = byFile.get(set.group) ?? { total: 0, correctLongest: 0 };
  for (const q of set.questions) {
    const result = auditQuestion(q);
    stats.total++;
    if (result.flags.correctLongest) stats.correctLongest++;
    for (const f of requiredCleanFlags)
      assert.ok(
        !result.flags[f],
        `Quiz question flagged ${f} in ${set.file} (${set.label}): "${result.stem.slice(0, 90)}"`,
      );
  }
  byFile.set(set.group, stats);
}
for (const [file, stats] of byFile)
  assert.ok(
    stats.correctLongest / stats.total <= 0.35,
    `${file}: correct-is-longest at ${Math.round((stats.correctLongest / stats.total) * 100)}%, over the 35% ceiling`,
  );

// INDEX.md's tables are generated from frontmatter; its counts and the
// quick-reference cards are hand-written, so check them against the entries.
const indexPath = path.join(repoRoot, "INDEX.md");
const indexText = fs.readFileSync(indexPath, "utf8");
assert.equal(
  indexText,
  renderIndex(indexText, categories),
  "INDEX.md is out of date with the entries' frontmatter: run `npm run generate:index` in web/",
);
checkIndexCounts(indexText, categories);
checkQuickReference(repoRoot, categories);

console.log(
  "PASS: 71 core and 5 adjacent entries with valid frontmatter, source credits and quiz files, 380 entry questions, 100 category questions, 15 path questions, and all 12 guide sequences; INDEX.md and quick-reference/ match the entries.",
);
