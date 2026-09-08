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
```

The build exports the site to `out/`; serve that directory with a static server for a production preview. Vercel continues to use the repository's existing deployment configuration.

## Content and discovery

- `frameworks/` and `concepts/` remain the source of truth for the 66 entries, their 330 entry quiz questions, and the nine 10-question category quizzes. The Concepts collection has its entry quiz but no category quiz in the source.
- `/topics` exposes every category. Each category offers curated starting points above its complete, initially unfiltered entry list.
- `/challenges` offers nine situation guides; `/learn` offers three learning paths with five additional scenario questions each.
- `src/lib/editorial.ts` contains summaries and topic introductions. Update the title-keyed summary when an entry is renamed or added.
- `src/lib/guides.ts` defines challenge sequences, learning paths and their scenario quizzes. References resolve against exact entry titles and fail validation when they drift.
- `/search` and homepage search cover titles, summaries, article bodies, challenges and learning paths. Entry quiz answers are excluded from the search index.
- Existing entry, category and type URLs remain stable. `?path=` retains learning-path context between entries without requiring an account or saving progress.

Article pages retain the full source content while adding section links, an overview, explanatory visuals for selected frameworks, connected reading, practical prompts, quizzes and source attribution.

## Regression checks

`npm run test:content` checks entry/category counts, editorial coverage, unique entry URLs, all quiz counts and answer structures, and every guide reference. When intentionally expanding the library, update the expected counts together with the relevant source and editorial data.
