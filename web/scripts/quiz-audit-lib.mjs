/**
 * Shared logic for auditing quiz option sets against the distractor standard
 * in QUIZ-SPEC.md ("Distractor quality"). Used by both `audit-quiz.mjs` (the
 * interactive report) and `verify-content.mjs` (the build-time gate added in
 * batch 10 of QUIZ-REVISION-PLAN.md, once every file cleared the thresholds).
 */

/** Justification connectives. A correct option that explains itself is the
 * single biggest giveaway in the current set: the reasoning belongs in the
 * feedback, so the reader has to supply it themselves to answer. */
export const RATIONALE = /\b(since|because|as the entry|a named (pitfall|trigger)|which is why|so that|in order to|given that|the framework calls for|as this)\b/i;

/** Phrasings that mark an option as a throwaway rather than a real candidate. */
export const THROWAWAY =
  /\b(no consequence|nothing (will|would) (happen|change)|there is no (risk|downside|need)|only fails if|abandon (the|all|positioning)|ignore the|entirely on price|as many as possible|every possible)\b/i;

export const flagNames = [
  "correctLongest",
  "correctDominant",
  "spread",
  "rationaleOnly",
  "throwaway",
  "noNearMiss",
];

export function auditQuestion(q) {
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

/** Collects every quiz question set (entry quizzes, category quizzes, and
 * guides.ts path quizzes) with the file each belongs to, for auditing. */
export function collectQuizSets(content, guides, quizLib) {
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
  for (const category of content
    .getAllCategories()
    .filter((c) => c.quizMarkdown)) {
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
  return sets;
}
