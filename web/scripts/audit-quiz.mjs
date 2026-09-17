/**
 * Audits every quiz question in the knowledge base for the tells that let a
 * reader pick the correct answer without knowing the material, and for the
 * option-set weaknesses that make a question easy to eliminate rather than
 * think through. See QUIZ-REVISION-PLAN.md for what each flag means and the
 * thresholds the revision is working towards.
 *
 * Usage: npm run audit:quiz            (summary + per-file counts)
 *        npm run audit:quiz -- --list  (also lists every flagged question)
 *        npm run audit:quiz -- --file frameworks/03-competitive-strategy.md
 */
import fs from "node:fs";
import ts from "typescript";
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
const quizLib = load("../src/lib/quiz.ts");

const args = process.argv.slice(2);
const listAll = args.includes("--list");
const fileFilter = args.includes("--file")
  ? args[args.indexOf("--file") + 1]
  : null;

const sets = collectQuizSets(content, guides, quizLib);

const byFile = new Map();
let total = 0;
const totals = Object.fromEntries(flagNames.map((f) => [f, 0]));
let clean = 0;

for (const set of sets) {
  if (fileFilter && set.file !== fileFilter) continue;
  const stats = byFile.get(set.file) ?? {
    total: 0,
    clean: 0,
    ...Object.fromEntries(flagNames.map((f) => [f, 0])),
  };
  for (const q of set.questions) {
    const result = auditQuestion(q);
    total++;
    stats.total++;
    const flagged = flagNames.filter((f) => result.flags[f]);
    if (flagged.length === 0) {
      clean++;
      stats.clean++;
    }
    for (const f of flagged) {
      totals[f]++;
      stats[f]++;
    }
    if (listAll && flagged.length > 0) {
      console.log(
        `\n  ${set.label}\n    ${result.stem.slice(0, 96)}\n` +
          `    correct ${result.lens.correct} chars vs distractors ${result.lens.wrong.join("/")}\n` +
          `    ${flagged.join(", ")}`,
      );
    }
  }
  byFile.set(set.file, stats);
}

const pct = (n) => `${((n / total) * 100).toFixed(0)}%`;
console.log(`\nQuiz audit: ${total} questions\n`);
console.log(`  clean (no flags)          ${String(clean).padStart(4)}  ${pct(clean)}`);
for (const f of flagNames)
  console.log(`  ${f.padEnd(24)} ${String(totals[f]).padStart(4)}  ${pct(totals[f])}`);

console.log("\nBy file (flagged / total, and correct-is-longest rate):\n");
for (const [file, s] of [...byFile].sort()) {
  const flagged = s.total - s.clean;
  console.log(
    `  ${file.padEnd(48)} ${String(flagged).padStart(3)}/${String(s.total).padEnd(3)}` +
      `  longest ${String(Math.round((s.correctLongest / s.total) * 100)).padStart(3)}%`,
  );
}
console.log(
  "\nTarget: correct-is-longest at or under 35% per file, and every question" +
    "\nfree of correctDominant, rationaleOnly, throwaway and noNearMiss.\n",
);
