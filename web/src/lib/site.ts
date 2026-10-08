// Canonical production origin. pmmkb.com redirects to www.pmmkb.com, so the
// www host is canonical. Override with NEXT_PUBLIC_SITE_URL for previews.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pmmkb.com"
).replace(/\/$/, "");
