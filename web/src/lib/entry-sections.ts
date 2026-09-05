import type { Entry } from "./content";

export interface ExtractedSections {
  body: string;
  sourcesMarkdown: string | null;
  seeAlsoText: string | null;
}

/**
 * Pulls the Sources bullet list and the See also line out of an entry's
 * markdown so they can be rendered as their own components (Sources
 * directly under the title, See also with real internal links), leaving
 * the remaining body for the generic section pipeline.
 */
export function extractSpecialSections(markdown: string): ExtractedSections {
  const lines = markdown.split("\n");
  const toRemove = new Set<number>();

  const sourcesIdx = lines.findIndex((l) => l.trim() === "**Sources:**");
  let sourcesMarkdown: string | null = null;
  if (sourcesIdx !== -1) {
    toRemove.add(sourcesIdx);
    const bullets: string[] = [];
    let i = sourcesIdx + 1;
    while (i < lines.length && lines[i].trim().startsWith("-")) {
      bullets.push(lines[i]);
      toRemove.add(i);
      i++;
    }
    sourcesMarkdown = bullets.join("\n") || null;
  }

  const seeAlsoIdx = lines.findIndex((l) => l.trim().startsWith("**See also:**"));
  let seeAlsoText: string | null = null;
  if (seeAlsoIdx !== -1) {
    toRemove.add(seeAlsoIdx);
    const match = lines[seeAlsoIdx].trim().match(/^\*\*See also:\*\*\s*(.*)$/);
    seeAlsoText = match ? match[1].trim() : null;
  }

  const body = lines.filter((_, i) => !toRemove.has(i)).join("\n");
  return { body, sourcesMarkdown, seeAlsoText };
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/\s+/g, " ")
    .replace(/\.$/, "")
    .trim();
}

const GENERIC_SUFFIXES = new Set([
  "framework",
  "methodology",
  "model",
  "programme",
  "primer",
  "method",
  "canvas",
  "process",
]);

function stripGenericSuffix(s: string): string {
  const words = s.split(" ");
  const last = words[words.length - 1];
  return GENERIC_SUFFIXES.has(last) ? words.slice(0, -1).join(" ").trim() : s;
}

function stem(title: string): string {
  const noParens = title.replace(/\([^)]*\)/g, " ");
  return stripGenericSuffix(normalize(noParens));
}

/** Maps an entry's title, its "stem" (suffix/parenthetical stripped), and any
 * acronym-based short form (e.g. "STP Framework" for "...(STP) Framework")
 * to its slug, so See also references written in shorthand still resolve. */
function buildEntryLookup(entries: Entry[]): Map<string, string> {
  const map = new Map<string, string>();
  for (const entry of entries) {
    map.set(normalize(entry.title), entry.slug);
    map.set(stem(entry.title), entry.slug);

    const acronymMatch = entry.title.match(/\(([A-Za-z]{2,8})\)/);
    if (acronymMatch) {
      const acronym = acronymMatch[1];
      const suffix = entry.title.slice(acronymMatch.index! + acronymMatch[0].length).trim();
      map.set(normalize(acronym), entry.slug);
      if (suffix) {
        map.set(normalize(`${acronym} ${suffix}`), entry.slug);
        map.set(normalize(`${acronym} ${stripGenericSuffix(normalize(suffix))}`), entry.slug);
      }
    }
  }
  return map;
}

export interface SeeAlsoItem {
  name: string;
  guidance: string | null;
  slug: string | null;
}

/** Splits on `delimiter` only outside of parentheses, since a clause's
 * own guidance parenthetical may contain the delimiter (e.g. "; "). */
function splitTopLevel(text: string, delimiter: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let current = "";
  for (const ch of text) {
    if (ch === "(") depth++;
    else if (ch === ")") depth--;
    if (ch === delimiter && depth === 0) {
      parts.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  parts.push(current);
  return parts;
}

/** Splits "Name (guidance, possibly (with nested parens))" from the end,
 * finding the paren that matches the clause's final closing paren. */
function splitTrailingParenthetical(clause: string): { name: string; guidance: string | null } {
  if (!clause.endsWith(")")) return { name: clause, guidance: null };
  let depth = 0;
  for (let i = clause.length - 1; i >= 0; i--) {
    const ch = clause[i];
    if (ch === ")") depth++;
    else if (ch === "(") {
      depth--;
      if (depth === 0) {
        return {
          name: clause.slice(0, i).trim(),
          guidance: clause.slice(i + 1, clause.length - 1).trim() || null,
        };
      }
    }
  }
  return { name: clause, guidance: null };
}

/**
 * Parses a "See also" line's semicolon-separated clauses into entry
 * references. Each clause is "Name (guidance)"; the guidance is optional.
 * Unmatched names are returned with slug: null so the caller can warn.
 */
export function parseSeeAlso(text: string, entries: Entry[]): SeeAlsoItem[] {
  const lookup = buildEntryLookup(entries);

  return splitTopLevel(text, ";")
    .map((raw) => raw.trim())
    .filter(Boolean)
    .map((clause) => {
      const cleaned = clause.replace(/\.$/, "").trim();
      const { name, guidance } = splitTrailingParenthetical(cleaned);
      const slug = lookup.get(normalize(name)) ?? lookup.get(stem(name)) ?? null;
      return { name, guidance, slug };
    });
}
