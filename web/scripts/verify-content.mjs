import fs from "node:fs";
import ts from "typescript";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
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
const editorial = load("../src/lib/editorial.ts");
const guides = load("../src/lib/guides.ts");
const quiz = load("../src/lib/quiz.ts");
const categories = content.getAllCategories();
const entries = content.getAllEntries();
assert.equal(entries.length, 66);
assert.equal(categories.length, 10);
assert.equal(new Set(entries.map((e) => e.slug)).size, 66);
for (const entry of entries) {
  assert.ok(
    editorial.entryGuidance[entry.title],
    `Missing editorial summary: ${entry.title}`,
  );
  const q = quiz.parseQuizMarkdown(
    quiz.extractEntryQuiz(entry.rawMarkdown).quizMarkdown,
    entry.slug,
  );
  assert.equal(q.length, 5, entry.title);
  for (const question of q) {
    assert.equal(question.options.length, 4);
    assert.equal(question.options.filter((o) => o.correct).length, 1);
  }
}
assert.equal(Object.keys(editorial.entryGuidance).length, 66);
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
console.log(
  "PASS: 66 entries, 66 editorial summaries, 330 entry questions, 90 category questions, 15 path questions, and all 12 guide sequences.",
);
