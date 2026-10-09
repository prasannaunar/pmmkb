// Canonical production origin. pmmkb.com redirects to www.pmmkb.com, so the
// www host is canonical. Override with NEXT_PUBLIC_SITE_URL for previews.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pmmkb.com"
).replace(/\/$/, "");

export const SITE_NAME = "PMM Knowledge Base";

// The person behind the site. Linked from the footer so readers, search
// engines and answer engines can connect this site to its maker's own site.
export const AUTHOR = {
  name: "Prasanna",
  url: "https://www.prasannaunar.com/",
};

/** Absolute URL for a site path such as "/framework/pre-mortem". */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}
