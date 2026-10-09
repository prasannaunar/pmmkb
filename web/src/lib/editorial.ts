import type { Entry } from "./content";

export const cleanTitle = (title: string) =>
  title.replace(/^Category \d+: /, "");
export function plainText(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
/** The two editorial lines shown beside an entry in listings and on its page.
 * Both are authored in the entry's own frontmatter. */
export function guidanceFor(entry: Entry) {
  return { useWhen: entry.useWhen, output: entry.produces };
}
