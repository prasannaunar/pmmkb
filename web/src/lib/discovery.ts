import { getSearchIndex } from "./content";
import { challenges, learningPaths, resolveSteps } from "./guides";
export function getDiscoveryIndex() {
  return [
    ...getSearchIndex(),
    ...challenges.map((g) => ({
      title: g.title,
      slug: `challenge-${g.slug}`,
      type: "Guide" as const,
      categoryTitle: "Solve a challenge",
      categorySlug: "",
      snippet: g.description,
      content: `${g.description} ${g.outcome} ${resolveSteps(g)
        .map((s) => s.item.title)
        .join(" ")}`,
      href: `/challenges/${g.slug}`,
    })),
    ...learningPaths.map((g) => ({
      title: g.title,
      slug: `path-${g.slug}`,
      type: "Learning path" as const,
      categoryTitle: "Learning paths",
      categorySlug: "",
      snippet: g.description,
      content: `${g.description} ${g.outcome}`,
      href: `/learn/${g.slug}`,
    })),
  ];
}
