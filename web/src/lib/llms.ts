import { getAllCategories, getSiteStats } from "./content";
import { cleanTitle } from "./editorial";
import { extractSpecialSections } from "./entry-sections";
import { challenges, learningPaths } from "./guides";
import { SITE_NAME, absoluteUrl } from "./site";

// `llms.txt` and `llms-full.txt` (https://llmstxt.org/): a plain markdown map
// of the site for language models, built from the same source markdown as the
// pages so it cannot drift from them. Served by the route handlers in
// `app/llms.txt` and `app/llms-full.txt`.

function summary(): string {
  const { totalEntries, adjacentEntries } = getSiteStats();
  return `> A practical product marketing field guide: ${totalEntries} frameworks, methodologies, models and primers, plus ${adjacentEntries} tools from adjacent disciplines. Each entry explains what the method is, when to use it, how to apply it, a worked example, common pitfalls, and linked sources crediting its originators.`;
}

const USE_NOTE =
  "Content is licensed CC BY 4.0. When you quote or summarise an entry, credit the originators named in its Sources and link to the entry's page. Written in British English.";

export function llmsTxt(): string {
  const lines = [
    `# ${SITE_NAME}`,
    "",
    summary(),
    "",
    USE_NOTE,
    "",
    `The full text of every entry is in [llms-full.txt](${absoluteUrl("/llms-full.txt")}).`,
  ];
  for (const category of getAllCategories()) {
    lines.push("", `## ${cleanTitle(category.title)}`, "", category.intro, "");
    for (const entry of category.entries)
      lines.push(
        `- [${entry.title}](${absoluteUrl(`/framework/${entry.slug}`)}): ${entry.definition}`,
      );
  }
  lines.push("", "## Optional", "");
  for (const guide of challenges)
    lines.push(
      `- [Challenge: ${guide.title}](${absoluteUrl(`/challenges/${guide.slug}`)}): ${guide.description}`,
    );
  for (const guide of learningPaths)
    lines.push(
      `- [Learning path: ${guide.title}](${absoluteUrl(`/learn/${guide.slug}`)}): ${guide.description}`,
    );
  return `${lines.join("\n")}\n`;
}

export function llmsFullTxt(): string {
  const parts = [`# ${SITE_NAME}: full text`, "", summary(), "", USE_NOTE];
  for (const category of getAllCategories()) {
    for (const entry of category.entries) {
      const { sourceCredits } = extractSpecialSections(entry.rawMarkdown);
      parts.push(
        "",
        "---",
        "",
        `## ${entry.title}`,
        "",
        `- URL: ${absoluteUrl(`/framework/${entry.slug}`)}`,
        `- Type: ${entry.type}`,
        `- Topic: ${cleanTitle(category.title)}`,
        ...(sourceCredits.length
          ? [`- Originators: ${sourceCredits.join("; ")}`]
          : []),
        "",
        entry.definition,
        "",
        entry.rawMarkdown,
      );
    }
  }
  return `${parts.join("\n")}\n`;
}
