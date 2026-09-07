# Product Marketing Knowledge Base: Polish & Daily Use Plan

**Last Updated:** 2026-09-06
**Status:** All content-creation phases (1 through 4) are now complete, and the quiz feature (Phase 7) is also complete: all 66 entries and all 9 category quizzes are written and live in the web app. The knowledge base has 66 entries across 9 categories plus a concepts area, with full quick-reference cards, a glossary, templates, case studies, a pitfalls deep-dive, a framework selector, decision trees, and a measurement guide. This is now **the single file tracking every open plan and pending action across the repository.** Anything not listed in "Open work" below is either done or not yet decided. Historical candidate-build queues and a superseded quality review were moved to a temporary `archived/` folder on 2026-09-05; its 2026-09-06 re-scan found no remaining references anywhere in the repo, so the folder and its six files were deleted outright rather than kept indefinitely. Their content is not repeated here except where a genuinely open item was carried forward.

---

## Open work (start here)

Everything below is either not started, partially done, or explicitly waiting on a future trigger. Nothing in this section duplicates the archived documents; where an archived plan had open items, they were copied forward here and the source noted.

### Content maintenance (from Phase 5, below)

- [ ] **Quarterly review cycle** (one framework per week, ~7 weeks/quarter). Tooling exists in [FEEDBACK-LOG.md](FEEDBACK-LOG.md); the cycle has never run.
- [ ] **Monthly team feedback session.** Tooling exists in FEEDBACK-LOG.md; no session has been logged yet.
- [ ] **Annual update calendar distribution.** The calendar is documented in FEEDBACK-LOG.md; it has not been distributed to the team.

### Web app: SEO / GEO / AEO (carried forward from the retired IMPROVEMENTS-PLAN-2026-09.md, Workstream 6)

Workstreams 1-5 of that plan are complete (attribution, branding, structural changes, navigation behaviour, content formatting). The full implementation record lived in `archived/IMPROVEMENTS-PLAN-2026-09.md`, deleted 2026-09-06 after its re-scan found nothing depending on it; the summary above is what remains. Workstream 6 was scoped but not built. Ship now (domain-independent):

- [ ] Per-page metadata: entry descriptions drawn from the first sentence of "What it is" (unique, ~155 chars) instead of the current generic template; Open Graph and Twitter card tags without absolute URLs; `og:type=article` for entries.
- [ ] `robots.txt` via `app/robots.ts` (no sitemap reference yet; that waits on the domain move below).
- [ ] Semantic HTML pass: one `h1` per page, `<article>`, `<nav aria-label>`, a skip link, landmark roles.
- [ ] Structured data (JSON-LD) content and structure: `WebSite` + `SearchAction` on the homepage, `BreadcrumbList` on category/entry pages, `Article` per entry with `citation` populated from the Sources block, `CollectionPage` for category/type pages. Build the structure now; the `url`/`@id` fields still need the domain (see below).
- [ ] GEO/AEO answer-shaping: a concise definition sentence at the top of each entry page (surfacing the existing first sentence of "What it is"); visible authorship/provenance line ("Summarised from [originator]; see Sources").

**Deferred until pmmkb.com is live** (do not ship against the temporary `pmmkb.vercel.app` domain): `metadataBase`, canonical URLs, `og:url`, `sitemap.xml`, JSON-LD `url`/`@id` fields, `llms.txt` and `llms-full.txt`. When the domain moves, implement all of these in one pass, reading the domain from a single env var (e.g. `NEXT_PUBLIC_SITE_URL`).

**Explicitly out of scope:** URL restructuring (`/framework/[slug]` for all types), analytics, search console registration, and any paid tooling.

**Acceptance (now):** semantic HTML pass complete; `robots.txt` deployed; unique meta descriptions on all 66 entries. **Acceptance (after the pmmkb.com move):** Lighthouse SEO score 100 on entry/category/home pages; valid JSON-LD; `sitemap.xml` and `llms.txt` deployed with pmmkb.com URLs; canonicals set.

### Web app: open questions (from Phase 6, below)

- [ ] Custom domain (pmmkb.com; can be added to Vercel at any point — see the SEO deferral above, which is gated on this).
- [ ] Analytics (Vercel Analytics for zero-config, or Plausible for privacy-first).
- [ ] Contributor workflow (contributing guide and CI checks, if others will submit entries).
- [ ] Whether to surface `agent-skills/` in the web app or keep them repo-only.

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
- [ ] Annual update calendar distributed; the calendar itself is documented in `FEEDBACK-LOG.md`, distribution to the team is still open

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

**Status:** Scaffolded. Core app running in `web/` with all three route types, sidebar navigation, search, dark/light theme, and mobile responsiveness. All 66 entries statically generated at build time. Ready for design polish and Vercel deployment.

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

- Custom domain (can be added to Vercel at any point)
- Analytics (Vercel Analytics for zero-config, or Plausible for privacy-first)
- Contributor workflow (contributing guide and CI checks, if others will submit entries)
- Whether to surface `agent-skills/` in the web app or keep them repo-only

---

## Notes for Users

- This knowledge base is designed to be **referenced during real work, not studied**. When you face a challenge (e.g., "Sales doesn't understand our positioning"), search BY-SITUATION.md or use the decision tree to find the relevant framework, then apply it.
- **Frameworks are sequences, not standalone.** Most PMM work involves 2-3 frameworks in sequence. Use the cross-links and integration diagrams to understand dependencies.
- **Update as you go.** When a framework works exceptionally well (or fails), note it. These learnings feed the annual refresh cycle.
- **Customise for your context.** These frameworks are designed for B2B SaaS but are adaptable. Add your company's context, examples, and metrics as you use them.
