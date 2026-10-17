# Product Marketing Knowledge Base: Polish & Daily Use Plan

**Last Updated:** 2026-10-15 (SEO PR 2 built: JSON-LD, `llms.txt`, definition lede; unused layout components deleted; INDEX.md tables generated and quick-reference cards checked; "Edit on GitHub" links; owner decisions on analytics, contributors, agent skills and content maintenance logged under "Decisions log"; 2026-10-10: dark mode and header theme toggle added; 2026-10-09: SEO/GEO PR 1 built: canonicals, social tags, sitemap, descriptions, "Made by" link; owner actions listed at the top of Open work)
**Status:** All content-creation phases (1 through 4) are now complete, and the quiz feature (Phase 7) is also complete: all entries and category quizzes are written and live in the web app. The knowledge base has 68 core entries across 9 categories plus a concepts area, and (since 2026-10-15) 5 adjacent entries in `adjacent/` counted separately, with full quick-reference cards, a glossary, templates, case studies, a pitfalls deep-dive, a framework selector, decision trees, and a measurement guide. This is now **the single file tracking every open plan and pending action across the repository.** Anything not listed in "Open work" below is either done or not yet decided. Historical candidate-build queues and a superseded quality review were moved to a temporary `archived/` folder on 2026-09-05; its 2026-09-06 re-scan found no remaining references anywhere in the repo, so the folder and its six files were deleted outright rather than kept indefinitely. Their content is not repeated here except where a genuinely open item was carried forward.

---

## Open work (start here)

Everything below is either not started, partially done, or explicitly waiting on a future trigger. Nothing in this section duplicates the archived documents; where an archived plan had open items, they were copied forward here and the source noted.

### Owner actions (things only you can do)

Everything here needs your access to Vercel, Google, Bing or DNS. Tick them off as you go; Claude will keep the list current.

- [x] **After SEO PR 1 deploys, check the `pmmkb.vercel.app` redirect.** Confirmed by the owner on 2026-10-15: `pmmkb.vercel.app` redirects to www.pmmkb.com, so the host-matched rule in the root `vercel.json` stays as it is.
- [ ] **Verify www.pmmkb.com in Google Search Console.** Either add a Domain property with the DNS TXT record Google gives you (no code change), or add a URL-prefix property, choose the "HTML tag" method, and set the token (the `content` value only) as `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in the Vercel project's environment variables, then redeploy. The site already renders the tag when the variable is set.
- [ ] **Submit the sitemap** `https://www.pmmkb.com/sitemap.xml` in Search Console once verified, then run URL Inspection on the homepage and one entry page and click "Request indexing".
- [ ] **Verify in Bing Webmaster Tools.** Importing the property from Search Console is quickest. Otherwise use the meta tag method and set the token as `NEXT_PUBLIC_BING_SITE_VERIFICATION` in Vercel. Submit the same sitemap.
- [ ] **Check a share preview** after deploy: paste https://www.pmmkb.com/ and one entry URL into LinkedIn's Post Inspector (or a Slack message). Expect the blue-topped "PMM Knowledge Base" card and the entry's own description. LinkedIn caches previews, so use the inspector's refresh.
- [ ] **Check the reciprocal link on prasannaunar.com.** The `/projects/` page should link to `https://www.pmmkb.com/` (not the old vercel.app address). This site now links back from the footer ("Made by Prasanna").
- [ ] **Update prasannaunar.com's headline figures** after the 2026-10-15 additions merge: the `/projects/` page and its `llms.txt` (repo `prasannaunar/website`) should say 68 entries across 9 categories (plus 5 adjacent entries, if the page lists them), and 465 quiz questions if a quiz count is shown.
- [x] **Decide whether to go ahead with SEO PR 2.** Approved 2026-10-15; built (see below).
- [ ] **After SEO PR 2 deploys, run Google's [Rich Results Test](https://search.google.com/test/rich-results)** on https://www.pmmkb.com/framework/pre-mortem and one category page. Expect "Breadcrumbs" and "Article" detected with no errors. The build checks the JSON-LD's shape, but the validator could not be reached from Claude's environment. Then open https://www.pmmkb.com/llms.txt and confirm it lists the entries.
- [x] **Review the 73 `definition` sentences.** Reviewed and verified on 2026-10-17 against each entry's "What it is" and Sources, at the owner's request. All 73 meet the length, uniqueness, "X is Y" and no-em-dash rules. Eight were corrected. Six used a type word that contradicted the entry's `type` (Bowman's Strategic Clock, Complete Product Experience, Product Development Stage, PMM Team Scaling, PMM Lifecycle Management, Customer Onboarding Maturity). Playing to Win now names all five choices rather than stopping at the third. The GTM primer now says product marketing contributes to and frequently orchestrates the GTM plan, as its body does. Four entry bodies that opened "A model" against a different type were aligned to match, and a co-author's name in the Kano Model was corrected (Nobuhiko Seraku).
- [x] **Decide the Kano Model's type.** Decided by the owner on 2026-10-17: it is a Model, matching CLAUDE.md's "Content Types". Retagged with the `add-kb-entry` skill: `type: Model`, a new "How to read it" section (the five categories moved there from "What it is"), the definition, quick-reference card and INDEX.md updated, and the totals recounted to 28 frameworks and 11 models.

### Decisions log (2026-10-15 session)

Work done this session, all on branch `claude/loving-gauss-n71kau`:

- [x] Deleted the unused `sidebar.tsx`, `sticky-header.tsx`, `mobile-top-bar.tsx` and `sidebar-context.tsx`, and the `--bg-sidebar` colour token.
- [x] SEO PR 2 built: JSON-LD, `llms.txt` and `llms-full.txt`, and a definition lede on entry pages (see "PR 2" below).
- [x] INDEX.md tables generated from frontmatter, and quick-reference cards checked against the entries (see "Content modularisation" follow-ups).
- [x] "Edit on GitHub" link on every entry page.

Owner decisions:

- `pmmkb.vercel.app` redirect confirmed working; no change needed.
- Analytics will be Google Analytics, set up in a new session (see "Web app: open questions").
- No contributor workflow for now.
- `agent-skills/` stay out of the web app.
- Content maintenance (quarterly reviews, feedback sessions, calendar) to be set up later.
- prasannaunar.com changes will be handled separately (see Owner actions).

Still pending: every unticked Owner action above (Search Console, sitemap submission, Bing, share preview, prasannaunar.com link and figures, Rich Results Test), GA setup, and the deferred content maintenance.

### Candidate review: external template and resource lists ✅ Built (2026-10-15)

A review of four external lists for candidate entries, run against CLAUDE.md's curation bar ("proven, replicable") and the PMM vs GTM inclusion test. Every source reviewed, with the verdict on each item, is in [SOURCES-EXPLORED.md](SOURCES-EXPLORED.md); this section logs the candidates and their outcome. Built candidates stay listed here, per the add-kb-entry skill.

**Built as core entries (Category 1, counted in the 68):**

- [x] **TAM/SAM/SOM Market Sizing** (Methodology). Three entries told readers to size a market (STP, the 10-Step PMM Process, the Product Development Stage Framework) but none explained how. PMMs commonly run it; passes the inclusion test.
- [x] **Concept Testing** (Methodology). Assessed as a clear-cut core entry rather than adjacent: PMMs commonly run the study (the inclusion test says operating a study is enough), it is a long-established research method, and it is distinct from Message Testing (it tests whether customers want the offer, not which words describe it). Product keeps the build decision, which the entry's "Cadence & ownership" says.

**Built in the new `adjacent/` area (Adjacent Disciplines, counted separately):**

- [x] **BCG Growth-Share Matrix** (Model) and **Ansoff Matrix** (Model): portfolio and growth-direction tools; leadership owns the decision, PMM supplies market and customer evidence.
- [x] **Porter's Five Forces** (Model) and **Business Model Canvas** (Framework): the two further business-strategy candidates recommended in the review.
- [x] **Cialdini's Principles of Persuasion** (Model). Assessed as not clear-cut for the core: it is a lens from behavioural science rather than a method a PMM runs, and copywriting, demand generation, growth and sales all apply it. Added to `adjacent/` per the owner's instruction for non-clear-cut candidates.
- [x] **The area itself:** `adjacent/` folder (slug `adjacent`, number 11) with a 10-question category quiz, web app support (loader, "PMM's role" section label, headline counts that exclude it, sidebar and category picks), its own rules in CLAUDE.md ("The `adjacent/` area"), and a quick-reference file.

**Reviewed and not added:**

- **SWOT analysis:** noted in `adjacent/_category.md`, the Porter's Five Forces entry and SOURCES-EXPLORED.md, but not a standalone entry: disputed origin, and widely criticised for producing lists rather than decisions.
- **Paweł Huryn's Product Frameworks Compendium:** paywalled after its first section; the visible nine are product-management prioritisation tools. Left as is, per the owner's decision; no subscription workaround attempted.
- **Single-practitioner frameworks** (Yi Lin Pei's PMM Research Tactics Matrix, Matthew Reeves' Differentiator Scorecard): fail the "proven, replicable" bar.
- **Content, social and demand generation templates** (most of the Reddit list): execution templates owned by other functions; fail both tests.

**Open follow-ups:** none. Pick up any fresh candidate review in a new session and add its sources to SOURCES-EXPLORED.md.

### Quiz revision ✅ Complete (2026-09-16)

All 435 quiz questions across all 11 sources have been rewritten to the tightened distractor standard: self-justifying correct options trimmed, one taxonomy-driven near miss added per question, and option lengths levelled. Overall correct-is-longest fell from 86% to 27%, with zero `correctDominant`, `rationaleOnly`, `throwaway`, or `noNearMiss` flags anywhere in the repository. The standard is now enforced by `npm run test:content` (`web/scripts/quiz-audit-lib.mjs` plus an assertion block in `web/scripts/verify-content.mjs`), so a regression or a new question that doesn't meet the bar fails the build. Full batch-by-batch record in [QUIZ-REVISION-PLAN.md](QUIZ-REVISION-PLAN.md); the standard itself is in QUIZ-SPEC.md's "Distractor quality" section.

### Content maintenance (from Phase 5, below)

**Deferred by the owner (2026-10-15):** to be set up later. None of the three items below should start until the owner asks.

- [ ] **Quarterly review cycle** (one framework per week, ~7 weeks/quarter). Tooling exists in [FEEDBACK-LOG.md](FEEDBACK-LOG.md); the cycle has never run.
- [ ] **Monthly team feedback session.** Tooling exists in FEEDBACK-LOG.md; no session has been logged yet.
- [ ] **Annual update calendar distribution.** The calendar is documented in FEEDBACK-LOG.md; it has not been distributed to the team.

### Content modularisation ✅ Complete (2026-10-09)

Each category was a single large markdown file holding every entry and every quiz (quizzes were about half the text), with the entry summaries and category introductions kept in `web/src/lib/editorial.ts` and matched by exact title. Now each category is a folder: `_category.md` and `_category.quiz.md`, then one `<slug>.md` (YAML frontmatter plus prose) and one `<slug>.quiz.md` per entry. The primers collection, `concepts/`, has the same shape. Page addresses come from the stored `slug`, so a title can change without moving a URL. The web app discovers folders and files at build time and fails the build, naming the file, on malformed frontmatter. Format and field rules are in CLAUDE.md ("Entry file format").

Verified as a no-op for readers: the 66 entries, 10 categories, all quizzes, summaries and the search index were compared before and after, and the full static export (524 files) was diffed against a build of the previous layout. The only difference is the search index no longer carrying the `Type: X.` prefix on each entry's text, now that the type lives in frontmatter.

Follow-ups, both done 2026-10-15:

- [x] Generate the INDEX.md tables and check `quick-reference/` cards against entry frontmatter, so those hand-kept copies cannot drift. ✅ Done 2026-10-15: `npm run generate:index` in `web/` rebuilds each table from frontmatter (title linked to the entry file, type, and the `description` sentence, which replaces the old hand-written Description column), and `test:content` fails on a stale table, a wrong total or category count, or a quick-reference card that is missing, out of order, or has the wrong title or type. The check found and fixed three drifts: Category Design and CI Program Maturity Model cards in the wrong order, the MOVE GTM Diagnostic card under a shortened title, and the Kano Model card typed as a Model (the entry is a Framework).
- [x] Use `filePath` to add an "Edit on GitHub" link to entry pages. ✅ Done 2026-10-15: the link sits in the entry page's closing line and opens GitHub's editor on `main` (`REPO` and `editOnGitHubUrl()` in `web/src/lib/site.ts`); `test:seo` checks every entry page has one pointing at a file that exists.

### Dark mode ✅ Complete (2026-10-10)

The site now has a light and a dark theme with a toggle in the header (next to the Menu control on mobile). The saved choice wins, otherwise the system setting applies, and it is set before first paint so there is no flash. Palette and rules are in CLAUDE.md ("Live site") and `web/README.md`.

Verified: an automated contrast audit of 84 pages (entries, categories, learning paths, topic types, 404) in dark mode at 390px and 1280px found no text below WCAG AA and no horizontal scroll; the quiz (start, answered, summary), search results, category filters and the open mobile menu were audited in dark mode too. `npm run lint`, `test:content` and `test:seo` pass. Two supporting changes: text on the orange quiz buttons and badge now uses a fixed dark ink (`--on-brand-alt`) so it stays readable when `--text-primary` turns light, and answered-but-unselected quiz options are dimmed less in both themes (opacity 0.8, was 0.55) so they stay readable.

Light mode text blue: the accent and the Framework type colour were `#457eaa`, 4.28:1 on cream and 3.97:1 on the blue-tinted panels, under AA for small text (eyebrows, text links, active nav). Both are now `#3a6f99` (at least 4.6:1 on every surface they sit on). The decorative brand blue `#569ed0` (rules and the wordmark divider) is unchanged. Also fixed: the entry page's "On this page" list showed `&#x26;` for "&" ("Cadence &#x26; ownership") because only `&amp;` was decoded; headings now go through `decodeEntities()` in `web/src/lib/html.ts`.

### Web app: SEO / GEO / AEO (carried forward from the retired IMPROVEMENTS-PLAN-2026-09.md, Workstream 6)

Workstreams 1-5 of that plan are complete (attribution, branding, structural changes, navigation behaviour, content formatting); the record lived in `archived/IMPROVEMENTS-PLAN-2026-09.md`, deleted 2026-09-06. Workstream 6 is **next in line**, now unblocked by the custom domain (https://www.pmmkb.com/, live 2026-10-08). The canonical origin lives in one place, `SITE_URL` in `web/src/lib/site.ts`; read every absolute URL from it, never hard-code the domain.

**Sequencing.** The content modularisation (below) has shipped, so entries have stable `slug`s and per-entry frontmatter. PR 1 is built (2026-10-09); PR 2 is built (2026-10-15).

**Audit of the live site before PR 1 (2026-10-09).** Done already: `robots.txt` (2026-09-25), `metadataBase`, apex redirect to `www`, unique descriptions on entry pages, one `h1`, skip link, landmarks, labelled navs, breadcrumbs, `<article>`. Missing: `sitemap.xml` and `llms.txt` (both 404), canonical tags, Open Graph and Twitter tags, any JSON-LD, type-page descriptions. Every page was also reachable at `pmmkb.vercel.app` (HTTP 200) and with or without a trailing slash.

**PR 1: metadata foundation ✅ Built (2026-10-09), awaiting merge**

- [x] `web/src/lib/seo.ts` helper used by every page: `alternates.canonical`, `og:url`, Open Graph and Twitter card tags from `SITE_URL`; `og:type=article` on entries; `en_GB` locale. `<html lang="en-GB">`.
- [x] A default 1200 by 630 share image, `web/public/og-default.png`, in the site's own fonts and palette. Per-entry images are not generated.
- [x] Entry descriptions: a required `description` frontmatter field on all 66 entries, hand-written, 123 to 160 characters, unique, one sentence. They are not literally the first sentence of "What it is", because 50 of the 66 first sentences run past 160 characters (the longest is over 1,000). `test:content` enforces length, ending full stop and uniqueness.
- [x] Descriptions on category and type pages, and a homepage description with the live entry count.
- [x] `app/sitemap.ts` (96 URLs: everything except `/search`) and a `Sitemap:` line in `app/robots.ts`.
- [x] `pmmkb.vercel.app` redirect, as a host-matched permanent redirect in the root `vercel.json` (needs the post-deploy check under Owner actions).
- [x] "Made by [Prasanna](https://www.prasannaunar.com/)" link in the site footer, `rel="author"`. The name and URL live in `AUTHOR` in `web/src/lib/site.ts` for reuse in PR 2's structured data. There is no About page; the footer is the about-style area.
- [x] Search Console and Bing verification tokens render from `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and `NEXT_PUBLIC_BING_SITE_VERIFICATION` when set, so verification needs no code change.
- [x] `npm run test:seo` (`web/scripts/verify-seo.mjs`, run after a build): on all 97 built pages checks one `h1`, a unique title and description, the canonical, `og:*` and `twitter:*` tags, `lang`, the author link; checks the sitemap lists exactly the indexable pages; checks `robots.txt` references it.
- [x] Semantic HTML pass: verified rather than changed. All 97 pages have exactly one `h1`. An earlier note that the sidebar's `h1` caused duplicates was wrong: `sidebar.tsx`, `sticky-header.tsx` and `mobile-top-bar.tsx` are not imported anywhere, so they are dead code and never render.

Measured on the static export served locally (Lighthouse, SEO category): 100 on the homepage, a category page (`/category/02-positioning-messaging`), an entry page (`/framework/pre-mortem`) and a type page (`/type/frameworks`).

Small notes: the homepage canonical is written without a trailing slash (`https://www.pmmkb.com`), which is the same URL as the sitemap's `https://www.pmmkb.com/`. Trailing-slash duplicates (`/x/` as well as `/x`) are handled by canonicals rather than a redirect.

Follow-up: delete the three unused layout components listed above. ✅ Done 2026-10-15, along with `sidebar-context.tsx` (used only by them) and the `--bg-sidebar` colour token.

**PR 2: structured data and answer-engine shaping ✅ Built (2026-10-15)**

- [x] JSON-LD (`web/src/lib/structured-data.ts`, rendered by `<JsonLd>`): `WebSite` on the homepage (no `SearchAction`); `CollectionPage` with an `ItemList` and a `BreadcrumbList` on category and type pages; `Article` with a `BreadcrumbList` on entry pages. All `url`/`@id` fields from `SITE_URL`. One deliberate change from the plan: the credited originators are not listed as the `Article`'s authors, because they did not write the summary. The site's maker (`AUTHOR`) is the author and publisher; the originators go in `creditText` (from the credits line) and their works in `citation` (from the Sources links).
- [x] `llms.txt` (site summary, a section per category listing every entry with its definition, and challenges and learning paths under "Optional") and `llms-full.txt` (the full text of every entry, about 700 KB), generated at build time from the source markdown by route handlers (`web/src/lib/llms.ts`).
- [x] A visible definition sentence at the top of each entry page, from a new hand-written `definition` frontmatter field on all 73 entries (60 to 220 characters, one "X is Y" sentence, checked by `test:content`). It replaces the lede that repeated the "What you will work towards" line. The existing credits line now reads "Summarised from [originators] · View sources".
- [x] `test:seo` now checks the JSON-LD on 89 pages (valid JSON, the expected types, every URL on `SITE_URL`, breadcrumbs ending at the page, `ItemList` links that resolve, an `Article` with citations and credits) and that `llms.txt` and `llms-full.txt` cover every entry.

Not added: `datePublished`/`dateModified` on `Article` (recommended by Google, not required). The build has no reliable date source; Vercel builds use a shallow git clone.

**Explicitly out of scope:** URL restructuring (`/framework/[slug]` for all types), analytics, and any paid tooling.

**Acceptance:** Lighthouse SEO score 100 on home, category and entry pages (met for PR 1); JSON-LD passes Google's Rich Results Test; `sitemap.xml` and `llms.txt` live with `https://www.pmmkb.com` URLs; canonicals on every page; `pmmkb.vercel.app` redirects to the custom domain.

### Web app: open questions (from Phase 6, below)

- [x] Custom domain: live at https://www.pmmkb.com/ since 2026-10-08 (apex redirects to www). This unblocked the domain-dependent SEO items above.
- [ ] **Analytics: Google Analytics (GA4).** Decided 2026-10-15; to be set up in a new session. Points to settle then: the GA4 measurement ID belongs in a Vercel environment variable (in the pattern of `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`), so nothing loads while it is unset and preview builds do not report; GA sets cookies, so UK and EU visitors need a consent banner (or GA's consent mode) before it loads; and the script must not break the static export or the theme script that runs before first paint. Check `npm run test:seo` and both themes afterwards.
- [x] **Contributor workflow: not now.** Decided 2026-10-15. Revisit only if other people start submitting entries; `test:content` and `test:seo` already exist as the checks a CI workflow would run.
- [x] **`agent-skills/` stay repo-only.** Decided 2026-10-15: do not surface them in the web app.

---

## Objectives

1. Refine knowledge base for real-world day-to-day application by PMMs
2. Create integration points with quarterly planning and campaign work
3. Establish a maintenance and update cadence
4. Build practical tooling and reference materials for quick lookups

---

## Phase 1: Quality Polish & Structure (Weeks 1–2)

### 1.1 Framework Cross-Linking
- Add a "See also" section to each framework pointing to related frameworks in other categories
- Create a dependency map; e.g., "Segmentation-Targeting-Positioning (STP) must precede Value Proposition Canvas"
- Link frameworks by workflow stage: awareness → consideration → purchase → adoption → expansion

**Deliverable:** Updated framework files with cross-links; visual workflow diagram

### 1.2 Create Situation-Based Index (BY-SITUATION.md)
Map common PMM situations to frameworks that apply:
- Launching a new product
- Entering a new market
- Competing against established players
- Reducing customer churn
- Enabling the sales team for new segment
- Pricing a new tier or service
- Building a customer advocacy program
- Recovering from messaging misalignment
- Scaling a PMM function

**Deliverable:** `/pmm-kb/BY-SITUATION.md` with 8–10 situations and recommended frameworks for each

### 1.3 Create Quick-Reference Cards
Build one-page summaries for each framework with:
- Core concept (3–4 sentences)
- When to use (bullets)
- Key steps (numbered)
- One-page template for applying the framework
- Success metrics

**Deliverable:** PDF or Markdown cheat sheets in `/pmm-kb/quick-reference/`

### 1.4 Add Glossary
- Consolidate PMM terminology used throughout the knowledge base
- Link to where each term is explained
- Add definitions for industry terms (ICP, TAM, CAC payback, NPS, etc.)

**Deliverable:** `/pmm-kb/GLOSSARY.md`

---

## Phase 2: Integration & Tooling (Weeks 3–4)

### 2.1 Quarterly Planning Template
Create a template that:
- Links business goals to the frameworks most relevant to achieving them
- Shows estimated effort per framework application
- Provides a checklist for "did we apply this framework?"

**Deliverable:** `/pmm-kb/templates/quarterly-planning-template.md`

### 2.2 Campaign Brief Template
Design a template that:
- References relevant positioning/messaging frameworks
- Includes competitor analysis checklist (Competitive Intelligence framework)
- Links to win/loss insights needed before briefing
- Includes segment-specific messaging requirements

**Deliverable:** `/pmm-kb/templates/campaign-brief-template.md`

### 2.3 Sales Enablement Audit Checklist
Create a checklist against the 10-Step PMM Process to ensure nothing falls through cracks:
- Market sizing and segmentation documented? ✓
- Win/loss analysis conducted? ✓
- Positioning statement tested? ✓
- Message architecture built? ✓
- Sales collateral created? ✓

**Deliverable:** `/pmm-kb/templates/sales-enablement-audit.md`

### 2.4 Monthly Competitive Intelligence Tracker
Template for:
- Monthly scan checklist (website, pricing, features, press, G2, sales intel)
- Quarterly deep-dive template
- Competitive matrix update schedule
- When to escalate (competitor move requiring response)

**Deliverable:** `/pmm-kb/templates/competitive-intelligence-tracker.md`

---

## Phase 3: Practical Extensions (Weeks 5–8)

### 3.1 Real-World Case Studies
For 5–6 frameworks, add a second, longer case study showing:
- Before state: what the company was doing wrong
- Framework applied: step-by-step walkthrough
- Results: measurable outcomes (win rate, NPS, revenue impact)
- What they'd do differently next time

**Focus frameworks:** STP, Value Proposition Canvas, Win/Loss Analysis, 10-Step PMM, Complete GTM Workflow

**Deliverable:** Updated framework files with extended examples

### 3.2 Common Pitfalls Deep Dives
For the most frequently used frameworks (STP, Positioning, Go-to-Market, Competitive), add:
- Historical examples of companies that made each pitfall (named if possible)
- How the pitfall compounds over time
- Early warning signs that you're falling into the trap
- Recovery playbook if already stuck

**Deliverable:** `/pmm-kb/pitfalls-deep-dive.md` or expanded pitfall sections in each framework

### 3.3 Integration Decision Tree ✅ Complete (2026-08-01)
Create a flowchart or decision tree:
- "I'm entering a new market" → STP → Customer Onboarding Maturity → Win/Loss Analysis
- "Sales productivity is down" → Win/Loss → Competitive Intelligence → Sales Enablement (10-Step)
- "Customer churn is rising" → NPS & Feedback Loop → Feature Adoption → Lifecycle Management

**Deliverable:** [`decision-trees.md`](decision-trees.md); a symptom-to-situation triage tool with branching questions across three top-level entry points (something new launching, something broken, a team/budget/reporting question), pointing into BY-SITUATION.md's nine situations rather than duplicating their framework sequences

### 3.4 Measurement & Reporting Guide ✅ Complete (2026-08-02)
Map each framework to:
- Key metrics to track before applying the framework
- Success metrics to measure after application
- Reporting cadence (monthly, quarterly, annual)
- Dashboard/reporting template

**Deliverable:** [`measurement-guide.md`](measurement-guide.md); a baseline-metric, cadence, and owner for all 54 entries plus the primer, organised by category and cross-referencing each quick-reference card's existing success metrics rather than repeating them, plus a seven-metric roll-up dashboard template that most entries feed into

---

## Phase 4: Day-to-Day Workflows (Weeks 9–10)

### 4.1 Weekly Standup Briefing
Create a 5-minute briefing format:
- "What framework should we apply this week?"
- "What framework are we waiting to use until we have data?"
- "What framework-driven deliverable is due?"

**Deliverable:** `/pmm-kb/templates/weekly-standup-template.md`

### 4.2 Onboarding Playbook
Guide for a new PMM team member:
- "Start here if you're assigned to positioning"
- "Start here if you're assigned to sales enablement"
- "Start here if you're assigned to competitive intelligence"
- "Start here if you're assigned to customer advocacy"

**Deliverable:** `/pmm-kb/ONBOARDING.md`

### 4.3 Framework Selection Flowchart
Decision tree: "Given my situation, which framework should I use?"
Input: Business goal, timeline, available data
Output: Recommended framework or framework sequence

**Deliverable:** `/pmm-kb/framework-selector.md` (text version) or digital tool

---

## Phase 5: Continuous Maintenance

### 5.1 Quarterly Review Cycle
- Review one framework per week (7 weeks/quarter)
- Has the framework held up to use? Is it still relevant?
- Are there new examples or case studies to add?
- Have pitfalls evolved?
- Update as needed

### 5.2 Annual Update Schedule
- January: Review all competitive positioning frameworks; update with new competitive dynamics
- April: Review go-to-market frameworks based on Q1 launches; incorporate learnings
- July: Review sales enablement frameworks; update with new tools/processes
- October: Review customer adoption frameworks based on quarterly customer feedback

### 5.3 Feedback Loop
- Solicit feedback from PMM team monthly: "Which framework did you use? What worked? What didn't?"
- Capture lessons learned from campaigns, launches, and win/loss analysis
- Add new frameworks if a repeated gap emerges (e.g., "we need a framework for X")
- Archive or retire frameworks that aren't being used

---

## Success Criteria

**Phase 1 Complete:**
- [x] All frameworks have cross-links to related frameworks
- [x] BY-SITUATION.md covers 8–10 common situations
- [x] Quick-reference cards for all entries (54 entries plus the primer, across `quick-reference/`; built 2026-07-31, mirroring `frameworks/` by category)
- [x] Glossary includes 20+ PMM terms (45+ terms across 6 themes plus an acronym table; built 2026-07-31)

**Phase 2 Complete:**
- [x] Quarterly planning template created (`templates/quarterly-planning-template.md`; not yet tested against a live quarter)
- [x] Campaign brief template includes framework checklist (`templates/campaign-brief-template.md`)
- [x] Sales enablement audit checklist created (`templates/sales-enablement-audit.md`)
- [x] Competitive intelligence tracker template created (`templates/competitive-intelligence-tracker.md`)

**Phase 3 Complete:**
- [x] 5 frameworks expanded with deeper case studies (`case-studies/`; STP, Value Proposition Canvas, Win/Loss Analysis, 10-Step PMM Process, Complete GTM Workflow; built 2026-08-15)
- [x] Pitfalls deep-dive document created (`pitfalls-deep-dive.md`; 9 deep-dive sections across STP, positioning, GTM execution, and competitive strategy; built 2026-08-15)
- [x] Decision trees or integration guide completed (`decision-trees.md`; built 2026-08-01)
- [x] Measurement & reporting guide created (`measurement-guide.md`; built 2026-08-02)

**Phase 4 Complete:**
- [x] Weekly standup template created (`templates/weekly-standup-template.md`; not yet used in a live standup)
- [x] Onboarding playbook created (`ONBOARDING.md`; role-based reading lists and a first-30-days plan)
- [x] Framework selection flowchart created (`framework-selector.md`; structured selection matrix by business goal, timeline, and data availability, with Quick Start table and links to full BY-SITUATION.md sequences)

**Ongoing Maintenance:** tracked as the canonical checklist in "Open work" at the top of this file; kept here too as part of the Phase 4 success-criteria record. Tick both copies together.
- [ ] Quarterly review cycle scheduled (one framework per week); tooling to log it exists (`FEEDBACK-LOG.md`), cycle has not yet run
- [ ] Feedback loop established (monthly team feedback); tooling to log it exists (`FEEDBACK-LOG.md`), first session has not yet run
- [ ] Annual update calendar distributed; the calendar itself is documented in `FEEDBACK-LOG.md`, distribution to the team is still open. *(All three items deferred by the owner on 2026-10-15; see "Content maintenance" under Open work.)*

---

## Resource Allocation

**Estimated Effort:**
- Phase 1: 3–4 person-weeks (quality polish, structure)
- Phase 2: 3–4 person-weeks (templates, tooling)
- Phase 3: 4–5 person-weeks (case studies, decision trees)
- Phase 4: 2–3 person-weeks (workflows, onboarding)
- **Total:** 12–16 person-weeks to full operational readiness

**Ongoing (Monthly):**
- 2–3 hours for feedback collection and updates
- 4–5 hours for quarterly reviews (spread across quarter)

---

## Next Steps (Immediate)

These items from the original plan are complete:
1. ~~Create BY-SITUATION.md~~ ✅
2. ~~Build quick-reference cards~~ ✅
3. ~~Create quarterly planning template~~ ✅
4. ~~Establish feedback loop tooling~~ ✅ (FEEDBACK-LOG.md created; first live session pending)
5. ~~Document framework usage frequency~~ (deferred; requires live usage data)

---

## Phase 6: Web App (Next)

**Status:** Scaffolded. Core app running in `web/` with all three route types, sidebar navigation, search, dark/light theme, and mobile responsiveness. All 66 entries statically generated at build time. Ready for design polish and Vercel deployment. *(Historical status. The app is now deployed on Vercel and live at https://www.pmmkb.com/.)*

The knowledge base is being deployed as a web app for public consumption.

### Decisions captured (2026-09-03)

- **Stack:** Next.js 16 (App Router), deployed on Vercel
- **Design direction:** Editorial / magazine feel; strong serif typography, generous whitespace, reading-optimised
- **Content loading:** Parse existing category markdown files at build time, splitting on H2 boundaries to extract individual entries. The markdown files remain the single source of truth; the app is a read-only view layer.
- **Licence:** CC BY 4.0

### Core routes

- `/` homepage with category overview and situation-based entry points
- `/category/[slug]` for category listing pages
- `/framework/[slug]` for individual entry pages

### Design system scope

- Editorial typography (serif display, complementary body face)
- Colour palette with dark/light theme support
- Sidebar navigation with category tree
- Client-side search (likely Fuse.js over a pre-built index)
- Quick-reference card layout
- Responsive, mobile-first (this is a reference tool; phone readability matters)

### Scaffold built (2026-09-03)

- **App location:** `web/` directory (Next.js 16.3, TypeScript, Tailwind CSS v4)
- **Typography:** Playfair Display (serif display headings) + Source Sans 3 (body)
- **Content parsing:** `src/lib/content.ts` reads `frameworks/*.md` and `concepts/*.md` at build time, splits on H2 boundaries, extracts Type tags, and generates slugs; markdown remains the single source of truth
- **Routes built:** `/` (homepage with category grid, type counts, and full entry listing), `/category/[slug]` (10 category pages with entry cards and snippets), `/framework/[slug]` (66 individual entry pages with breadcrumb navigation and rendered prose)
- **Search:** Client-side Fuse.js fuzzy search over all entries (Ctrl+K shortcut), searching title, snippet, and category
- **Theme:** System/light/dark toggle with CSS custom properties, persisted to localStorage
- **Sidebar:** Category tree navigation with active-state highlighting, collapsible on mobile with hamburger menu
- **Static generation:** All pages pre-rendered via `generateStaticParams`; production build generates 78 HTML pages (homepage, 10 categories, 66 entries, 404)

### Phase 7: Quiz Feature — complete (2026-09-06)

Layered on top of the stable web app. No user accounts, no gating, no personalisation. Full content specification: [QUIZ-SPEC.md](QUIZ-SPEC.md).

- **Content:** 5 questions per entry, 10 per category quiz; 420 questions total across all 66 entries and all 9 category quizzes. Apply/Analyse level, scenario-based majority, four-option multiple choice with explanatory feedback on every option, written directly into each entry's `**Quiz:**` section and each category file's `## Category Quiz` section.
- **Data model:** no separate JSON or database; quizzes live in the same markdown files as everything else and are parsed at build time (`web/src/lib/quiz.ts`), consistent with "markdown is the single source of truth."
- **Rendering:** `QuizSection` (`web/src/components/quiz-section.tsx`), a client component on both the entry page and the category page. Three-stage flow: a start screen inviting the reader to test their knowledge, a one-question-at-a-time carousel (click an option to reveal correct/incorrect state and feedback inline, then "Next question"/"See results"), and a results screen with a final score and a Retry button that returns to the start screen; any number of retries, no account, no persistence between visits (plain in-memory component state, reset on page reload). Visually distinguished from the surrounding entry content with its own accent colour (`--quiz-accent`, the existing brand-alt terracotta, otherwise unused in entry body content) on the panel border, progress bar, buttons, and a "Quiz" label chip in the header (2026-09-07 redesign).
- **Answer-order shuffling:** the correct option is always written as A in the source markdown (an authoring convenience); the parser shuffles each question's options with a deterministic per-question seed, so the shuffle is stable across server and client renders (no hydration mismatch) without ever landing the correct answer on the same letter every time.
- This is now the standing quality bar for new entries too: see CLAUDE.md's "Quiz section (quiz standard)" and the `add-kb-entry` skill.

### Open questions

Also tracked in "Open work" at the top of this file.

- Custom domain: done, https://www.pmmkb.com/ (2026-10-08)
- Analytics (Vercel Analytics for zero-config, or Plausible for privacy-first)
- Contributor workflow (contributing guide and CI checks, if others will submit entries)
- Whether to surface `agent-skills/` in the web app or keep them repo-only

---

## Notes for Users

- This knowledge base is designed to be **referenced during real work, not studied**. When you face a challenge (e.g., "Sales doesn't understand our positioning"), search BY-SITUATION.md or use the decision tree to find the relevant framework, then apply it.
- **Frameworks are sequences, not standalone.** Most PMM work involves 2-3 frameworks in sequence. Use the cross-links and integration diagrams to understand dependencies.
- **Update as you go.** When a framework works exceptionally well (or fails), note it. These learnings feed the annual refresh cycle.
- **Customise for your context.** These frameworks are designed for B2B SaaS but are adaptable. Add your company's context, examples, and metrics as you use them.
