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

// The public repository the content lives in, and the branch Vercel deploys.
export const REPO = {
  url: "https://github.com/prasannaunar/pmmkb",
  branch: "main",
};

/** GitHub's editor for a repo-relative file, such as an entry's `filePath`. */
export function editOnGitHubUrl(filePath: string): string {
  return `${REPO.url}/edit/${REPO.branch}/${filePath}`;
}

/** Absolute URL for a site path such as "/framework/pre-mortem". */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

// Google Tag Manager container ID. Set NEXT_PUBLIC_GTM_ID in Vercel (Production
// only); it is inlined at build time, so while it is unset no banner or tag
// renders and preview builds send no data. See components/analytics.tsx.
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
