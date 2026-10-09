# PMM Knowledge Base: Web App

An editorial field guide built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4. The existing Merriweather/Poppins typography and brand palette are shared across the reading and discovery experiences.

## Development and checks

Use Node.js 22.12 or later. Run these commands from `web/`:

```bash
npm ci
npm run dev
npm run lint
npm run test:content
npm run build
npm run test:seo   # after the build; checks the exported pages
```

The build exports the site to `out/`; serve that directory with a static server for a production preview. Vercel continues to use the repository's existing deployment configuration. Production is live at **https://www.pmmkb.com/** (the apex `pmmkb.com` redirects to `www`). The canonical origin is defined once as `SITE_URL` in `src/lib/site.ts` (overridable with `NEXT_PUBLIC_SITE_URL`); use it for any absolute URL rather than hard-coding the domain.

The export writes each route as `<route>.html` (for example `framework/pmm-team-scaling-framework.html`). The root `vercel.json` sets `cleanUrls: true` so Vercel serves those files at extensionless URLs such as `/framework/pmm-team-scaling-framework`. Without it every route except `/` returns a 404 on Vercel. Unknown URLs render `src/app/not-found.tsx`, which uses the site layout and theme; Next's built-in 404 forces a black background in dark mode, which made the page unreadable.

## Content and discovery

- `frameworks/` and `concepts/` remain the source of truth for the 66 entries, their 330 entry quiz questions, and the nine 10-question category quizzes. Each category is a folder; each entry is a `<slug>.md` with YAML frontmatter plus a sibling `<slug>.quiz.md`, and `_category.md` / `_category.quiz.md` hold the category's own details and quiz. The Concepts collection has its entry quizzes but no category quiz. `src/lib/content.ts` discovers the folders at build time, so adding or editing a file needs no code change, and it fails the build with the file name when frontmatter is missing or malformed.
- `/topics` exposes every category. Each category offers curated starting points above its complete, initially unfiltered entry list.
- `/challenges` offers nine situation guides; `/learn` offers three learning paths with five additional scenario questions each.
- Each entry's summary lines (`use_when`, `produces`) and meta `description` and each category's introduction (`intro`) live in the frontmatter of the file they describe, so a rename or addition touches one file. `src/lib/editorial.ts` holds only text helpers.
- `src/lib/guides.ts` defines challenge sequences, learning paths and their scenario quizzes. References resolve against exact entry titles and fail validation when they drift.
- `/search` and homepage search cover titles, summaries, article bodies, challenges and learning paths. Entry quiz answers are excluded from the search index.
- Existing entry, category and type URLs remain stable. `?path=` retains learning-path context between entries without requiring an account or saving progress.

Article pages retain the full source content while adding section links, an overview, explanatory visuals for selected frameworks, connected reading, practical prompts, quizzes and source attribution.

## SEO and sharing

- Every page builds its metadata with `pageMetadata()` in `src/lib/seo.ts`: title, description, canonical URL, Open Graph and Twitter tags. Canonicals and image URLs resolve against `SITE_URL`. Entry pages use their frontmatter `description` and `og:type=article`.
- `src/app/sitemap.ts` lists every indexable page (everything except `/search`); `src/app/robots.ts` points to it.
- `public/og-default.png` is the 1200 by 630 share image used by every page. It was rendered from a small HTML card in the site's own fonts; to change it, re-render at the same size and replace the file.
- The footer links to the maker's site (`AUTHOR` in `src/lib/site.ts`).
- To verify the site in Google Search Console or Bing Webmaster Tools by meta tag, set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` or `NEXT_PUBLIC_BING_SITE_VERIFICATION` in the Vercel project's environment variables and redeploy. Nothing renders while they are unset.
- `vercel.json` redirects `pmmkb.vercel.app` to `https://www.pmmkb.com`; see PLAN.md for how to check it after a deploy.

## Regression checks

`npm run test:content` checks entry/category counts, frontmatter and quiz-file coverage, unique entry URLs and orders, orphaned quiz files, all quiz counts and answer structures, and every guide reference. When intentionally expanding the library, update the expected counts together with the relevant source and editorial data.

`npm run test:seo` (run after `npm run build`) checks the exported site: one `h1`, a unique title and description, the canonical and social tags, the footer link, a sitemap that lists exactly the indexable pages, and a `robots.txt` that references it.
