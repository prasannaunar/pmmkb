import type { MetadataRoute } from "next";
import {
  getAllCategories,
  getAllEntries,
  getAllTypeSlugs,
  getEntriesByType,
  getTypeBySlug,
  latestUpdated,
  type Entry,
} from "@/lib/content";
import { challenges, learningPaths, resolveSteps, type Guide } from "@/lib/guides";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

// Every indexable page. /search is left out: it is a tool, not a document.
// lastModified comes from the entries' `updated` frontmatter: an entry page
// uses its own date, and a listing page the latest date among the entries it
// lists. Never the build time, which would tell crawlers every page changed on
// every deploy. /privacy has no honest date source, so it carries none.
export default function sitemap(): MetadataRoute.Sitemap {
  const allEntries = getAllEntries();
  const guideEntries = (guides: Guide[]): Entry[] =>
    guides.flatMap((g) => resolveSteps(g).map((s) => s.item));

  const pages: { path: string; updated?: string }[] = [
    { path: "/", updated: latestUpdated(allEntries) },
    { path: "/topics", updated: latestUpdated(allEntries) },
    { path: "/challenges", updated: latestUpdated(guideEntries(challenges)) },
    { path: "/learn", updated: latestUpdated(guideEntries(learningPaths)) },
    { path: "/privacy" },
    ...getAllCategories().map((c) => ({
      path: `/category/${c.slug}`,
      updated: latestUpdated(c.entries),
    })),
    ...getAllTypeSlugs().map((slug) => {
      const type = getTypeBySlug(slug);
      return {
        path: `/type/${slug}`,
        updated: type ? latestUpdated(getEntriesByType(type)) : undefined,
      };
    }),
    ...allEntries.map((e) => ({
      path: `/framework/${e.slug}`,
      updated: e.updated,
    })),
    ...challenges.map((g) => ({
      path: `/challenges/${g.slug}`,
      updated: latestUpdated(guideEntries([g])),
    })),
    ...learningPaths.map((g) => ({
      path: `/learn/${g.slug}`,
      updated: latestUpdated(guideEntries([g])),
    })),
  ];
  return pages.map(({ path, updated }) => ({
    url: absoluteUrl(path),
    ...(updated ? { lastModified: updated } : {}),
  }));
}
