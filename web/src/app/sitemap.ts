import type { MetadataRoute } from "next";
import { getAllCategories, getAllEntries, getAllTypeSlugs } from "@/lib/content";
import { challenges, learningPaths } from "@/lib/guides";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

// Every indexable page. /search is left out: it is a tool, not a document.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/topics",
    "/challenges",
    "/learn",
    ...getAllCategories().map((c) => `/category/${c.slug}`),
    ...getAllTypeSlugs().map((slug) => `/type/${slug}`),
    ...getAllEntries().map((e) => `/framework/${e.slug}`),
    ...challenges.map((g) => `/challenges/${g.slug}`),
    ...learningPaths.map((g) => `/learn/${g.slug}`),
  ];
  return paths.map((path) => ({ url: absoluteUrl(path) }));
}
