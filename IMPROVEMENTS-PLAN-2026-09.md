# Improvements Plan: September 2026 Feedback Round

**Logged:** 2026-09-05
**Status:** Approved 2026-09-05. The three open decisions are resolved and folded in below (light-only theme; domain-dependent SEO deferred until the move to pmmkb.com; sources rendered under the entry title). Implementation will span multiple sessions; work through the phases in order.
**Scope:** The web app in `web/` plus a full attribution pass over the knowledge base content. Source of feedback: owner review of the deployed site.

This plan turns the September feedback into six workstreams, sequenced so that content changes (which the web app renders) land before the rendering changes that depend on them. Each workstream lists concrete tasks, files touched, and acceptance criteria.

---

## Current state (verified 2026-09-05)

- The web app is Next.js 16 (App Router, static export) in `web/`, reading `frameworks/*.md` and `concepts/*.md` at build time and splitting on H2 boundaries. 78 static pages: home, 10 categories, 66 entries, 404.
- **Branding today:** Playfair Display + Source Sans 3, stone/amber palette, rounded corners throughout (`rounded-lg`, `rounded-xl`, `rounded-full`), light and dark themes with a toggle. None of this matches the personal site.
- **Website brand (source of truth: `website/site/src/styles/global.css` and build spec section 3):** brand `#569ED0`, brand-alt `#D08856` (used very sparingly), heading `#1C1C1C`, text `#2B2B2B`, backgrounds `#FDFDFB` / `#FAF9F6`, subtle `#B5B5B5`, dark `#1C1C1C` with `#FDFDFB` on it. Fonts: Merriweather (600, 700) for h1/h2, Poppins for h3 and body. The site is light-only.
- **Attribution today:** 18 of 66 entries carry a `**Further reading:**` line; all are text-only citations (author, title, year). There are **zero URLs anywhere in `frameworks/` or `concepts/`**. 48 entries have no reading line at all. SOURCE-VALIDATION-LOG.md records the 2026-08-12 audit that produced the current citations, so much of the research groundwork exists but none of it is linked.
- **Formatting today:** entries use bold inline labels (`**What it is:**` etc.) inside paragraphs, so rendered pages read as a wall of text. `**See also:**` lines name related entries in prose with no links.
- **Navigation today:** breadcrumb, type badge, and title are ordinary in-flow content; nothing is sticky; no back-to-top control; on mobile the fixed hamburger (top-left, `z-50`) overlaps the breadcrumb.
- **Homepage today:** type counts render as pill-shaped bordered spans that look like buttons but are not clickable; a long flat "All Entries" list sits below "Browse by Category".
- **Terminology today:** the tenth category is titled "Concepts (Primers)" in `content.ts`, "Concepts" in the sidebar, and the type badge says "Primer". Inconsistent.

---

## Workstream 1: Attribution (highest priority, largest effort)

The owner's framing: every entry must link to the original material; being respectful and useful to the people who created these frameworks is the point of the exercise.

### 1a. Define the citation standard

Add a short section to CLAUDE.md (Writing Standards) defining a **Sources** block that every entry must carry, replacing the optional `**Further reading:**` line:

- Format: a `**Sources:**` block immediately before `**See also:**`, containing one bullet per source: originator name, work title, year, and a **markdown link** to the most canonical stable URL available.
- Link preference order: the originator's own site or the framework's official page; then the publisher's page for the book; then a stable well-known reference (e.g. the originator's article on their own blog). Never a scraped summary site, never an affiliate link.
- Every entry needs at least one linked source. Where a framework has no single originator (e.g. the MUD differentiation lens), cite the best documented version and say so, matching the precedent already set in SOURCE-VALIDATION-LOG.md.
- Update the Quality Gates checklist: "Every fact... is cited" becomes "cited **with a working link**".

### 1b. Research and link pass over all 66 entries

- For the 18 entries with existing `**Further reading:**` text citations: convert to the Sources format and add verified URLs. The hard research (who created what) is already done and logged.
- For the 48 entries without: research the originator and canonical source per entry (web search), verify each URL resolves, and write the Sources block. SOURCE-VALIDATION-LOG.md's per-entry findings cover part of this list already.
- Batch by category file (nine files plus concepts), committing per file so progress is reviewable.
- Record the pass in SOURCE-VALIDATION-LOG.md as a follow-up section (date, method, per-file link counts).
- Check `agent-skills/ATTRIBUTION.md` afterwards: where a skill cites an entry whose sourcing materially changed, update the skill in the same commit (per CLAUDE.md rule).
- Quick-reference cards: add a single "Source: [name](url)" line per card, mirroring the entry. Lower priority; can trail the main pass.

### 1c. Render attribution prominently in the web app

- **Attribution sits right under the entry title.** Entry pages render the Sources block as a clearly styled section directly beneath the title (originator, work, year, outbound links with `rel="noopener"` and an external-link affordance), before the body begins. The same applies wherever a title-plus-content pattern exists (quick-reference cards once they carry source lines).
- Site footer gains a standing acknowledgement line: the knowledge base summarises frameworks created by their named originators; links in each entry point to the original material.

**Acceptance:** all 66 entries have at least one working outbound link to original material; CLAUDE.md encodes the standard; the web app shows sources on every entry page.

---

## Workstream 2: Branding ✅ Complete (2026-09-05)

Port the personal site's brand into `web/`, adapted for a reference app.

### 2a. Design tokens (`web/src/app/globals.css`)

- Replace the stone/amber palette with the website tokens: brand `#569ED0`, brand-alt `#D08856` (sparingly: one accent per viewport, per the build spec's usage rule), heading `#1C1C1C`, text `#2B2B2B`, bg `#FDFDFB`, bg-secondary/card `#FAF9F6`, subtle `#B5B5B5`.
- **Light-only, matching the website (decided 2026-09-05).** Remove the theme toggle, `theme-provider.tsx`, `theme-toggle.tsx`, the `data-theme` handling, and the entire dark palette (`prefers-color-scheme` block included). One theme, the website's light palette.
- WCAG AA contrast on every combination (the website spec makes this non-negotiable). Note `#569ED0` on `#FDFDFB` fails AA for body-size text; use it for large text, borders, and accents, and use a darkened variant (the website already uses `#457eaa` for link hover) for link text.

### 2b. Rounded corners

- Remove all border radii: strip every `rounded-*` utility (`sidebar.tsx`, `page.tsx` home, category page, `type-badge.tsx`, search) and add a global `border-radius: 0` guard. Square corners everywhere, matching the personal site's flat aesthetic.

### 2c. Typography

Owner's proposed rule, verified against the website and adopted:

- **Navigational pages (home, category, type indexes):** Merriweather for headings, Poppins for subheadings and text. **Confirmed correct:** this is exactly the website's convention (h1/h2 Merriweather 600/700; h3 and body Poppins).
- **Entry pages ("posts"):** Merriweather as body text, Poppins for headings and subheadings. This deliberately inverts the website (serif body for long-form reading, sans headings for scannable section labels). It is an intentional adaptation, not an error.
- Implementation: load Merriweather (400 for entry body, 600, 700) and Poppins (400, 500, 600) via `next/font/google`, replacing Playfair Display and Source Sans 3. Expose as `--font-serif` / `--font-sans` and apply per context in the prose styles.

### 2d. Tags (type badges and any future tag chips)

- Redesign `TypeBadge`: drop the luminescent multi-colour fills. Target the restrained look of Atlas (atlas.attio.com) and fletchpmm.com: small uppercase or small-caps Poppins label, muted single-hue treatment (thin border or very light neutral fill, brand-tinted text), square corners, generous letter-spacing. Still evidently a tag, no longer a highlighter.
- Keep a subtle per-type distinction (e.g. text colour or a small leading dot in a desaturated hue) so types remain scannable in lists, but within the brand palette rather than four saturated Tailwind hues.
- **Make tags clickable:** every type badge links to its type index page (Workstream 3). Hover state per the brand (underline or darkened border). Where a badge sits inside a card that is already a link (category and home lists), restructure the card so the badge is its own link (no nested anchors: split the card into sibling links or lift the badge out of the anchor).

**Acceptance:** no rounded corners anywhere; palette and fonts match the tokens above; AA contrast verified; type badges are links.

**Done as:** `globals.css` tokens replaced with the website palette (`--color-brand` #569ED0, `--color-brand-alt` #D08856, heading #1C1C1C, ink #2B2B2B, bg #FDFDFB/#FAF9F6, subtle #B5B5B5); `--accent` set to the AA-safe darkened link blue (#457eaa) used for all text-weight accents, with raw brand blue reserved for borders/decorative fills. Light-only: `theme-provider.tsx` and `theme-toggle.tsx` deleted, `data-theme`/`prefers-color-scheme` blocks removed from CSS, `layout.tsx` no longer wraps in a theme provider. A global `* { border-radius: 0 !important; }` guard plus a `rounded-*` sweep across every component removes every rounded corner. Fonts switched to Merriweather (`--font-serif`) and Poppins (`--font-sans`) via `next/font/google`; navigational pages (home, category, type index, sidebar) keep serif headings over sans body text, while entry pages invert it (serif `.prose` body, sans `h1`/`.prose h2`/`.prose h3`) per the owner's confirmed rule. `TypeBadge` redesigned as a small square-cornered, uppercase, single-hue Poppins tag that links to its type index page; the home and category cards that used to nest it inside their own link were restructured (badge lifted out as a sibling, category card's title/snippet wrapped in its own inner link) so there are no nested anchors.

---

## Workstream 3: Structural changes ✅ Complete (2026-09-05)

### 3a. Type index pages

- New route `web/src/app/type/[slug]/page.tsx` (slugs: `frameworks`, `methodologies`, `models`, `primers`) rendering all entries of that type as cards (title, category, snippet), grouped or labelled by category to preserve the workflow-stage organisation (a hard rule in CLAUDE.md; never alphabetical-only).
- Each page carries a breadcrumb ("Home / Frameworks") and the sidebar remains, so navigation back to home is always one click.
- Add `getEntriesByType()` to `content.ts` and the routes to `generateStaticParams`.

### 3b. Homepage rework

- Type counts ("29 Frameworks", "26 Methodologies"...) become **plain text** in the intro line (e.g. "66 entries: 29 frameworks, 26 methodologies, 10 models, 1 primer"), not pill shapes, since they describe the repo and are not controls.
- Remove the "All Entries" flat list.
- Add a "Browse by type" row of real, clearly-styled **buttons/links**: "View all frameworks", "View all methodologies", "View all models", "View all primers", linking to the type pages.
- "Browse by Category" stays the visually dominant section, above the type buttons, as the primary wayfinding route.

### 3c. Terminology consistency

- Standardise on: **"Primer"** is the entry type (badge, counts, type page "Primers"); **"Concepts"** is the category (sidebar, category page title, breadcrumbs). Retitle the synthetic category from "Concepts (Primers)" to "Concepts" in `content.ts` and audit every surface (sidebar, home, category page, metadata) for stray variants.
- Sidebar tagline ("66 entries across 9 categories") is wrong on two counts once concepts is a navigable tenth area; compute counts from content rather than hard-coding.

**Acceptance:** four type pages exist and are linked from the homepage buttons and every type badge; homepage counts are plain text; "Concepts"/"Primer" used consistently everywhere; no hard-coded counts.

**Done as:** `content.ts` gained `TYPE_SLUGS`/`getTypeBySlug`/`getAllTypeSlugs`/`getEntriesByType`/`getSiteStats`; new route `web/src/app/type/[slug]/page.tsx` statically generates `/type/frameworks`, `/type/methodologies`, `/type/models`, `/type/primers`, each grouping its entries by category to preserve workflow-stage order. Homepage type counts are now a plain-text sentence in the intro paragraph; the flat "All Entries" list is removed; a "Browse by Type" row of four bordered links (`View all frameworks` etc., with a sparing brand-alt hover accent) sits below "Browse by Category", which remains the dominant section. The synthetic category is titled "Concepts" everywhere (was "Concepts (Primers)" in `content.ts`; the sidebar already said "Concepts"); the sidebar tagline is computed from `getSiteStats()` (now correctly "66 entries across 10 categories") instead of hard-coded text.

---

## Workstream 4: Navigation behaviour ✅ Complete (2026-09-05)

### 4a. Dynamically sticky entry/category header

- On entry and category pages, wrap breadcrumb + type badge/category line + title in a compact sticky header component (client component) that: hides when scrolling down, reappears immediately on any upward scroll, on all viewport sizes. Implementation: `position: sticky` + a scroll-direction hook toggling a transform, or a scroll-driven class; must be cheap (rAF-throttled, passive listeners) and must not jump content.
- The sticky (condensed) state shows a one-line version: breadcrumb path and entry title, small type badge. The full-size title remains in-flow at the top of the article.

### 4b. Back to top

- Minimal floating "back to top" control (small square button, brand-styled, bottom-right) with the same show-on-scroll-up / hide-on-scroll-down behaviour, appearing only after the reader has scrolled past roughly one viewport. Smooth scroll, honouring `prefers-reduced-motion`.

### 4c. Mobile hamburger overlap

- Replace the floating fixed hamburger with a proper mobile top bar: hamburger, site name, and (on entry/category pages) the condensed breadcrumb share one bar that participates in the sticky hide/show behaviour. This removes the overlap by construction rather than nudging offsets.

**Acceptance:** scrolling down hides the header and back-to-top control; any upward scroll reveals both; verified on mobile and desktop widths (Playwright is already a dev dependency; add a viewport check); no overlap between hamburger and breadcrumb at any width.

**Done as:** a shared `useScrollVisibility`/`usePastViewport` pair in `src/lib/scroll.ts` (rAF-throttled, passive-listener scroll tracking) drives every hide/show behaviour. A new `SidebarProvider` context (`sidebar-context.tsx`) holds the mobile drawer's open state and a `mobileSlot` node, replacing the drawer's own local state. `MobileTopBar` is a single global fixed bar (hamburger + site name, `lg:hidden`) that hides on scroll down and reappears on scroll up; the drawer (`sidebar.tsx`) now starts below it (`top-14` on mobile) so the two never overlap. `StickyHeader`, used on category and entry pages, renders its own sticky condensed breadcrumb/title bar on desktop and, on mobile, publishes the same condensed content into `MobileTopBar`'s `mobileSlot` instead of drawing a second bar — hamburger and breadcrumb share one bar as the plan required. `BackToTop` is a floating square button (bottom-right) that appears only past one viewport of scroll and follows the same show-on-scroll-up/hide-on-scroll-down rule, with `prefers-reduced-motion` respected on click. Verified with `npm run build`, `npm run lint`, and a Playwright pass at 1280×900 and 390×800 (scroll-down/scroll-up screenshots at each, plus the mobile drawer open) confirming hide/reveal behaviour and no hamburger/breadcrumb overlap.

---

## Workstream 5: Content formatting on entry pages

### 5a. Section structure

- Extend the markdown pipeline in `content.ts` (remark plugin or a pre-transform) to promote the bold inline labels (`**What it is:**`, `**When to use it:**`, `**Ownership:**`, `**How to apply it:**`, `**How to run it:**`, `**Cadence & ownership:**`, `**Maturity stages:**`, `**How to read it:**`, `**Example:**`, `**Pitfalls:**`, `**Sources:**`, `**See also:**`, plus primer variants) into real section headings (`h2` within the page, since the entry title is the `h1`), each with a stable `id` anchor.
- Style sections for scannability: Poppins headings (per Workstream 2c), clear spacing, Merriweather body. Example and Pitfalls may get a light `#FAF9F6` panel treatment (square-cornered) to break up the page.
- The markdown files stay untouched by this sub-task: the transform happens at render time, so the repo's markdown remains the single source of truth and remains readable on GitHub. (The Sources block from Workstream 1 is a content change and does edit the markdown.)

### 5b. See also links

- Parse `**See also:**` lines: match the leading entry name in each semicolon-separated clause against the entry index (names before any parenthetical), and render matched names as internal links to `/framework/[slug]`, keeping the parenthetical guidance as plain text. Log any unmatched name at build time so drift between prose names and entry titles gets caught.

**Acceptance:** every entry page renders with real, anchored section headings; See also names are internal links; build fails or warns loudly on unmatched See also references.

---

## Workstream 6: SEO / GEO / AEO

Scoped as requested; implementation items in priority order.

**Domain note (decided 2026-09-05):** production is currently pmmkb.vercel.app and will eventually move to pmmkb.com. Anything that bakes absolute URLs into pages or files (canonical URLs, `metadataBase`, `og:url`, `sitemap.xml`, JSON-LD `url`/`@id` fields, `llms.txt` entry URLs) **waits until pmmkb.com is live**, so nothing gets indexed or cited against the temporary domain. The domain-independent items below can ship any time. When the domain move happens, implement the deferred items in one pass and read the domain from a single env var (e.g. `NEXT_PUBLIC_SITE_URL`) so a future change is one-line.

### 6a. Technical SEO foundations

- **Deferred until pmmkb.com:** `metadataBase`, canonical URLs, `og:url`, `sitemap.xml`.
- Per-page metadata (domain-independent, ship now): entry descriptions drawn from the first sentence of "What it is" (unique, ~155 chars) instead of the current generic template; Open Graph and Twitter card tags without absolute URLs; `og:type=article` for entries.
- `robots.txt` via `app/robots.ts` (sitemap reference added later with the domain).
- Semantic HTML pass: one `h1` per page, real heading hierarchy (delivered by Workstream 5a), `<article>`, `<nav aria-label>`, skip link, landmark roles (mirrors the website's non-negotiables).

### 6b. Structured data (JSON-LD)

- `WebSite` with `SearchAction` on the homepage; `BreadcrumbList` on category and entry pages; `Article` (headline, about, isPartOf, citation) per entry, with `citation` populated from the Sources block (Workstream 1 feeds this directly); `CollectionPage` for category and type pages.
- Structure and content can be built now, but the `url`/`@id` fields make this effectively domain-dependent: ship it in the post-domain-move pass alongside canonicals.

### 6c. GEO/AEO (discoverability by AI assistants and answer engines)

- Publish `llms.txt` (site map with one-line descriptions per entry) and `llms-full.txt` (or per-entry `.md` endpoints) so agents can ingest entries cleanly; the markdown source makes this nearly free. Entry URLs make these domain-dependent: defer to the post-domain-move pass.
- Answer-shaped content: the promoted section headings ("What it is", "When to use it") are already question-shaped; add a concise definition sentence at the top of each entry page (the existing first sentence of "What it is", surfaced as a styled summary) so extractors get a self-contained answer.
- Stable anchors per section (from 5a) enable deep links from search and citations from assistants.
- Entry pages should carry visible authorship/provenance ("Summarised from [originator]; see Sources") which both AEO and the attribution goal reward.

### 6d. Explicitly out of scope for this round

- URL restructuring (`/framework/[slug]` for all types is slightly misleading for methodologies, but changing URLs breaks existing links for marginal SEO gain; revisit only alongside a redirect strategy).
- Analytics, search console registration, and any paid tooling (owner-side tasks; the plan only makes the site ready for them).

**Acceptance (now):** semantic HTML pass complete; `robots.txt` deployed; unique meta descriptions on all 66 entries. **Acceptance (after the pmmkb.com move):** Lighthouse SEO score 100 on entry/category/home pages; valid JSON-LD (Rich Results test); `sitemap.xml` and `llms.txt` deployed with pmmkb.com URLs; canonicals set.

---

## Sequencing

1. **Phase 1 (content):** Workstream 1a + 1b (citation standard, then the 66-entry link pass, committed per category file). No app dependency; the largest and most valuable block.
2. **Phase 2 (foundation):** Workstream 2 (tokens, fonts, corners, tag redesign) and 3 (type pages, homepage, terminology) together, since both touch the same pages.
3. **Phase 3 (behaviour):** Workstream 4 (sticky header, back to top, mobile bar) on the redesigned pages.
4. **Phase 4 (rendering + SEO):** Workstream 5 (section promotion, See also links, Sources rendering = 1c) then the domain-independent parts of 6 (semantic HTML, meta descriptions, robots.txt), which depend on 5's heading structure and 1's citations. The domain-dependent parts of 6 form a fifth, later pass once pmmkb.com is live.
5. Each phase ends with `npm run lint` and `npm run build` in `web/`, plus a Playwright viewport smoke check for Phase 3.

## Decisions taken (2026-09-05)

1. **Theme:** light-only, matching the website. Dark mode, the toggle, and the theme provider are removed (Workstream 2a).
2. **Domain:** production is pmmkb.vercel.app for now, moving to pmmkb.com eventually. All absolute-URL SEO work (canonicals, sitemap, JSON-LD URLs, llms.txt) waits for that move; see the domain note in Workstream 6.
3. **Sources placement:** rendered directly under the entry title, before the body (Workstream 1c).
