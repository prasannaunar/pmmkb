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

/** Justification connectives. A correct option that explains itself is the
 * single biggest giveaway in the current set: the reasoning belongs in the
 * feedback, so the reader has to supply it themselves to answer. */
const RATIONALE = /\b(since|because|as the entry|a named (pitfall|trigger)|which is why|so that|in order to|given that|the framework calls for|as this)\b/i;

/** Phrasings that mark an option as a throwaway rather than a real candidate. */
const THROWAWAY =
  /\b(no consequence|nothing (will|would) (happen|change)|there is no (risk|downside|need)|only fails if|abandon (the|all|positioning)|ignore the|entirely on price|as many as possible|every possible)\b/i;

const flagNames = [
  "correctLongest",
  "correctDominant",
  "spread",
  "rationaleOnly",
  "throwaway",
  "noNearMiss",
];

function auditQuestion(q) {
  const correct = q.options.find((o) => o.correct);
  const wrong = q.options.filter((o) => !o.correct);
  const lens = q.options.map((o) => o.text.length);
  const cLen = correct.text.length;
  const maxWrong = Math.max(...wrong.map((o) => o.text.length));
  const sorted = [...lens].sort((a, b) => a - b);
  const median = (sorted[1] + sorted[2]) / 2;

  return {
    stem: q.stem,
    lens: { correct: cLen, wrong: wrong.map((o) => o.text.length) },
    flags: {
      // The correct answer is the longest option on the page.
      correctLongest: cLen >= Math.max(...lens),
      // ...and long enough that length alone picks it out.
      correctDominant: cLen > maxWrong * 1.25,
      // The four options are not comparable in length.
      spread: (Math.max(...lens) - Math.min(...lens)) / median > 0.4,
      // Only the correct option explains itself.
      rationaleOnly:
        RATIONALE.test(correct.text) &&
        wrong.filter((o) => RATIONALE.test(o.text)).length < 2,
      // At least one option no reader would seriously consider.
      throwaway: wrong.some((o) => THROWAWAY.test(o.text)),
      // No distractor close enough in weight to be a real near miss.
      noNearMiss: maxWrong < cLen * 0.8,
    },
  };
}

const sets = [];
for (const entry of content.getAllEntries()) {
  const md = quizLib.extractEntryQuiz(entry.rawMarkdown).quizMarkdown;
  sets.push({
    file:
      entry.categorySlug === "concepts-primers"
        ? "concepts/gtm-strategy-vs-product-marketing.md"
        : `frameworks/${entry.categorySlug}.md`,
    label: entry.title,
    questions: quizLib.parseQuizMarkdown(md ?? "", entry.slug),
  });
}
for (const category of content.getAllCategories().filter((c) => c.quizMarkdown)) {
  sets.push({
    file: `frameworks/${category.slug}.md`,
    label: `${category.title} (category quiz)`,
    questions: quizLib.parseQuizMarkdown(category.quizMarkdown, category.slug),
  });
}
for (const guide of guides.learningPaths) {
  sets.push({
    file: "web/src/lib/guides.ts",
    label: `${guide.title} (path quiz)`,
    questions: guides.pathQuiz(guide).questions,
  });
}

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
