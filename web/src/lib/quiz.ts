/**
 * Parses the `**Quiz:**` sections authored in the knowledge base's markdown
 * (see QUIZ-SPEC.md) into structured questions the QuizSection component can
 * render interactively.
 *
 * Source convention: a numbered list where each item is
 *   N. <stem>
 *      - **A.** <option>
 *      - **B.** <option>
 *      - **C.** <option>
 *      - **D.** <option>
 *
 *      **Correct answer: A.** <feedback>
 *
 *      *Why not B:* <feedback>
 *      *Why not C:* <feedback>
 *      *Why not D:* <feedback>
 *
 * The correct option is always written as A in the source (an authoring
 * convenience). Display order is shuffled deterministically per question so
 * a reader never sees "the answer is always A" as a pattern, while still
 * rendering identically between server and client (no hydration mismatch).
 */

export interface QuizOption {
  text: string;
  correct: boolean;
  feedback: string;
}

export interface QuizQuestion {
  number: number;
  stem: string;
  options: QuizOption[];
}

const OPTION_LETTERS = ["A", "B", "C", "D"] as const;
type Letter = (typeof OPTION_LETTERS)[number];

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return h >>> 0;
}

/** Deterministic PRNG (mulberry32) so shuffles are stable across server and
 * client renders without needing client-only randomness. */
function mulberry32(seed: number): () => number {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const rand = mulberry32(seed);
  const result = arr.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const QUESTION_START = /^(\d{1,2})\.\s+(.*)$/;
const OPTION_LINE = /^-\s*\*\*([A-D])\.\*\*\s*(.+)$/;
const CORRECT_LINE = /\*\*Correct answer:\s*([A-D])\.\*\*\s*([\s\S]*?)(?=\n\s*\*Why not [A-D]:|\n*$)/;
const WHY_NOT_LINE = /\*Why not ([A-D]):\*\s*([\s\S]*?)(?=\n\s*\*Why not [A-D]:|\n*$)/g;

/**
 * Parses a raw quiz markdown block (the text following a `**Quiz:**` label
 * or inside a `## Category Quiz` section) into structured questions.
 * `seedKey` should be a stable identifier (e.g. the entry or category slug)
 * so the deterministic per-question shuffle differs across pages.
 */
export function parseQuizMarkdown(markdown: string, seedKey: string): QuizQuestion[] {
  const lines = markdown.split("\n");
  const chunks: string[][] = [];
  let current: string[] = [];

  for (const line of lines) {
    if (QUESTION_START.test(line)) {
      if (current.length) chunks.push(current);
      current = [line];
    } else if (current.length) {
      current.push(line);
    }
  }
  if (current.length) chunks.push(current);

  return chunks
    .map((chunkLines, idx) => {
      const stemMatch = chunkLines[0].match(QUESTION_START);
      const stem = stemMatch ? stemMatch[2].trim() : "";

      const rawOptions = new Map<Letter, string>();
      for (const line of chunkLines.slice(1)) {
        const m = line.trim().match(OPTION_LINE);
        if (m) rawOptions.set(m[1] as Letter, m[2].trim());
      }

      const text = chunkLines.join("\n");
      const correctMatch = text.match(CORRECT_LINE);
      const correctLetter = (correctMatch?.[1] as Letter | undefined) ?? "A";
      const correctFeedback = correctMatch ? correctMatch[2].trim() : "";

      const distractorFeedback = new Map<Letter, string>();
      for (const m of text.matchAll(WHY_NOT_LINE)) {
        distractorFeedback.set(m[1] as Letter, m[2].trim());
      }

      const options: QuizOption[] = OPTION_LETTERS.filter((l) => rawOptions.has(l)).map(
        (letter) => ({
          text: rawOptions.get(letter) ?? "",
          correct: letter === correctLetter,
          feedback: letter === correctLetter
            ? correctFeedback
            : distractorFeedback.get(letter) ?? "",
        })
      );

      const seed = hashString(`${seedKey}::${idx}::${stem.slice(0, 40)}`);

      return {
        number: idx + 1,
        stem,
        options: seededShuffle(options, seed),
      };
    })
    .filter((q) => q.stem && q.options.length === 4);
}

/** Pulls a `**Quiz:**` section (always the final section of an entry) out of
 * an entry's markdown, leaving the remaining body for the section pipeline. */
export function extractEntryQuiz(markdown: string): {
  body: string;
  quizMarkdown: string | null;
} {
  const lines = markdown.split("\n");
  const quizIdx = lines.findIndex((l) => l.trim() === "**Quiz:**");
  if (quizIdx === -1) return { body: markdown, quizMarkdown: null };

  const body = lines.slice(0, quizIdx).join("\n").trimEnd();
  const quizMarkdown = lines.slice(quizIdx + 1).join("\n").trim();
  return { body, quizMarkdown: quizMarkdown || null };
}

/** Pulls a leading `## Category Quiz` section out of a category file's raw
 * content, before the file is split into entries, so it is never mistaken
 * for an entry itself. */
export function extractCategoryQuiz(fileContent: string): {
  content: string;
  quizMarkdown: string | null;
} {
  const lines = fileContent.split("\n");
  const headingIdx = lines.findIndex((l) => l.trim() === "## Category Quiz");
  if (headingIdx === -1) return { content: fileContent, quizMarkdown: null };

  let endIdx = lines.findIndex((l, i) => i > headingIdx && l.trim() === "---");
  if (endIdx === -1) endIdx = lines.length;

  const quizMarkdown = lines.slice(headingIdx + 1, endIdx).join("\n").trim();
  const content = [...lines.slice(0, headingIdx), ...lines.slice(endIdx + 1)].join("\n");
  return { content, quizMarkdown: quizMarkdown || null };
}
