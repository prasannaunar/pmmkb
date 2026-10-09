import type { Metadata } from "next";
import { SITE_NAME } from "./site";

// Shared by every page so canonical, Open Graph and Twitter tags cannot drift
// apart. A page that sets `openGraph` or `twitter` replaces the layout's whole
// object rather than merging with it, so each page must go through here.
const SHARE_IMAGE = {
  url: "/og-default.png",
  width: 1200,
  height: 630,
  alt: "PMM Knowledge Base: a field guide for product marketing practice",
};

interface PageSeo {
  /** Page title without the site suffix, which the layout template adds. */
  title: string;
  description: string;
  /** Site-relative path, with no trailing slash except for the homepage. */
  path: string;
  /** `article` for entry pages, `website` for everything else. */
  type?: "website" | "article";
  /** Use the title as written, without the " | PMM Knowledge Base" suffix. */
  absoluteTitle?: boolean;
}

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  absoluteTitle = false,
}: PageSeo): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    // Relative paths resolve against `metadataBase` in the root layout.
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: SITE_NAME,
      locale: "en_GB",
      title: fullTitle,
      description,
      url: path,
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [SHARE_IMAGE.url],
    },
  };
}

/** What each entry type means, for type-page descriptions (CLAUDE.md, "Content Types"). */
export const TYPE_DEFINITIONS = {
  Framework: "structured models you apply to a specific decision",
  Methodology: "repeatable practices you run over time",
  Model: "maps that help you classify a situation",
  Primer: "explainers that build understanding",
} as const;
