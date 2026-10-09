import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { auditQuestion, collectQuizSets, flagNames } from "./quiz-audit-lib.mjs";
const load = createRequire(import.meta.url);
load.extensions[".ts"] = (mod, file) =>
  mod._compile(
    ts.transpileModule(fs.readFileSync(file, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
        esModuleInterop: true,
      },
    }).outputText,
    file,
  );
const content = load("../src/lib/content.ts");
const guides = load("../src/lib/guides.ts");
const quiz = load("../src/lib/quiz.ts");
const sections = load("../src/lib/entry-sections.ts");
const categories = content.getAllCategories();
const entries = content.getAllEntries();
assert.equal(entries.length, 66);
assert.equal(categories.length, 10);
assert.equal(new Set(entries.map((e) => e.slug)).size, 66);
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
assert.equal(categories.filter((c) => c.quizMarkdown).length, 9);
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

console.log(
  "PASS: 66 entries with valid frontmatter, source credits and quiz files, 330 entry questions, 90 category questions, 15 path questions, and all 12 guide sequences.",
);
