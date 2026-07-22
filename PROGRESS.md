# Progress Log: PMM Knowledge Base Development

**Project Start Date:** Unknown (pre-2026-04-08)
**Repository Organization Date:** 2026-04-08
**Current Status:** Knowledge base content complete and consistency-reviewed (34 entries: 28 frameworks, 4 methodologies, 1 model, and 1 primer, all British English and quality-gate compliant); the first eight ENRICHMENT-PLAN.md candidates are now built: Message Architecture and Voice of the Customer Programme (2026-07-21); the Competitive Battlecard Framework and Dunford's 10-Step Positioning Process (2026-07-22); the GTM Strategy vs Product Marketing primer and GTM Motion Model, completing the "High" batch and opening the "Medium" batch (2026-07-22); and the JTBD Switch Interview Method and Product-Led Growth, continuing the "Medium" batch (2026-07-22); polish and operational integration phase ongoing

---

## Completed Work

### Knowledge Base Content (✅ Complete)

**Phase 1: Taxonomy & Skeleton**
- [x] Completed Exa research on product marketing frameworks
- [x] Synthesised search results into framework list
- [x] Established 7-category structure
- [x] Created INDEX.md with full taxonomy

**Phase 2–3: Framework Research & Writing**
- [x] 19 frameworks written across all 7 categories
- [x] Each framework includes: What it is, When to use it, How to apply it, Example, Pitfalls
- [x] All examples are specific and realistic
- [x] Cross-references between frameworks noted

**Categories & Framework Counts:**
1. Market & Customer Understanding: 3 frameworks ✅
2. Positioning & Messaging: 5 frameworks ✅
3. Competitive Strategy: 2 frameworks ✅
4. Go-to-Market & Launch: 5 frameworks ✅
5. Lifecycle & Workflow: 3 frameworks ✅
6. Product Experience & Adoption: 3 frameworks ✅
7. Strategy & Planning: 3 frameworks ✅

**Total: 19 frameworks**

### Repository Organization (✅ Complete)

- [x] Created `/frameworks/` folder
- [x] Moved all category files into frameworks folder
- [x] Kept INDEX.md and task file at root level
- [x] Updated directory structure for clarity

### Documentation (✅ Complete)

- [x] Created PLAN.md: 5-phase roadmap for polish and operational integration
- [x] Created PROGRESS.md (this file): tracking progress and next steps
- [x] CLAUDE.md: Ground rules file

---

## Completed: Quality Check & Enhancement (2026-04-09)

### Foundational Quality Review (✅ Complete)
- [x] Created comprehensive foundational-review.md
- [x] Validated all 19 frameworks against web sources
- [x] Verified attribution for 13 established frameworks
- [x] Identified 2 attribution errors (fixed: T2D3, JTBD)
- [x] Verified 5 book publication dates (Moore 1991, Dunford 2019, Osterwalder 2014, Reichheld 2003, Bowman 1996)

### High Priority Fixes (✅ Complete)
- [x] Fixed T2D3 attribution: Neeraj Agrawal (originator) + Christoph Janz (populariser)
- [x] Added Tony Ulwick credit to JTBD Framework as originator
- [x] Spot-checked publication dates for 5+ established frameworks

### Medium Priority Improvements (✅ Complete)
- [x] Added cross-framework references to all 19 frameworks (2–3 per framework)
- [x] Expanded pitfalls with actionable recovery steps in 3 frameworks:
  - 3-Step PMM Strategy: Segment focus and interview recovery guidance
  - Complete Product Experience: Audit and prioritisation approach
  - Quarterly PMM Planning: Scoring methods and tracking dashboard
- [x] Created dependency map showing framework relationships

### Low Priority Improvements (✅ Complete)
- [x] Added metrics benchmarks to 3 frameworks (NPS, Complete GTM, Win/Loss)
- [x] Created FRAMEWORK-MAP.md with dependency matrix and workflow scenarios
- [x] Added Further Reading sections to 6 established frameworks:
  - Geoffrey Moore (Crossing the Chasm)
  - April Dunford (Obviously Awesome)
  - JTBD (Christensen & Ulwick works)
  - Value Proposition Canvas (Osterwalder)
  - Bowman's Clock (Bowman & Faulkner)
  - NPS (Reichheld)

---

## Current Phase: Polish & Integration Preparation

### Immediate Deliverables (Week of 2026-04-08)

1. **CLAUDE.md** (✅ Complete)
   - Ground rules: no em dashes, British English, semicolon usage
   - Framework curation principles
   - Update schedule and version control

2. **BY-SITUATION.md** (✅ Complete)
   - Maps common PMM situations to relevant frameworks
   - Cross-reference decision paths

3. **README.md Enhancement** (✅ Complete)
   - Full navigation, quick-start guide, and key documents index

### Phase 1 Deliverables (Weeks 2–3)

- [ ] Quick-reference cards for all 19 frameworks (1-page summaries)
- [ ] GLOSSARY.md with PMM terminology
- [ ] Framework cross-links verification (each framework links to 2–3 related frameworks)
- [ ] Dependency mapping (which frameworks must precede others)

### Phase 2 Deliverables (Weeks 4–5)

- [ ] Quarterly planning template (links business goals to frameworks)
- [ ] Campaign brief template (includes framework checklist)
- [ ] Sales enablement audit checklist (validates completeness)
- [ ] Competitive intelligence monthly tracker

### Phase 3 Deliverables (Weeks 6–9)

- [ ] Extended case studies for 5–6 key frameworks
- [ ] Pitfalls deep-dive document or sections
- [ ] Integration decision tree (situation → framework sequence)
- [ ] Measurement & reporting guide

### Phase 4 Deliverables (Weeks 10–11)

- [ ] Weekly standup template
- [ ] Onboarding playbook for new PMM team members
- [ ] Framework selection flowchart/decision tree

### Ongoing (Post-Week 11)

- [ ] Monthly feedback loop from PMM team
- [ ] Quarterly review cycle (1 framework per week)
- [ ] Annual update calendar

---

## Known Issues & Notes

### Issues Resolved
- ✅ Placeholder README.md updated in next steps
- ✅ Files organized into logical folder structure

### Issues Pending Resolution
- ⏳ Quick-reference cards, GLOSSARY.md, and templates/ still not started (see Operational Readiness Metrics below)
- ⏳ Framework backlog (see below) needs team review before any candidate is built out
- ⏳ Public release readiness items (see below) need action before the repo goes public

### Assumptions & Trade-offs
- Using Haiku budget reserved in original plan; actual quality pass deferred until phase is complete
- BY-SITUATION.md to be created without additional Gemini calls; instead, curated by hand using existing content
- Framework examples are realistic but not all from named companies (per original task constraints)

---

## Public Release Readiness: Findings (Logged 2026-07-09)

Repository is currently private. Reviewed for what's needed before any public browsing/app is stood up. No app exists yet (see below); these are content/process findings to action before publishing, not urgent fixes.

### No public site exists yet
- No GitHub Pages config, static site generator (MkDocs/Docusaurus/Jekyll), `package.json`, or `.github/workflows/`. The repo is Markdown files only; there is no reading experience beyond a raw file browser.
- Action: decide whether to build a public site (e.g. MkDocs/Docusaurus + GitHub Pages) before "public" is meaningful.

### Content issues to fix before going public
- [x] **Fabricated claim about real companies:** `frameworks/01-market-customer-understanding.md` (Product Development Stage Framework example) stated a fictional "data infrastructure startup" had "Phase 3 beta customers (Uber, Stripe)", falsely implying Uber and Stripe were customers of a made-up company. Fixed 2026-07-19: replaced with fictional companies ("RouteFlow", "LedgerPay") consistent with the rest of the scenario.
- [ ] **`product-marketing-kb-task.md` exposes build process** (e.g. "$4 total LLM budget", local-model routing, "Sonnet: do not use"). Not sensitive, but undercuts the KB's credibility if presented as authoritative guidance. Exclude from public view or reframe as a "how this was built" methodology note.
- [ ] **`foundational-review.md` is internal QA/audit content** (attribution checks, "appears custom/internal" notes). Keep out of the public-facing surface, or fold key points into a short public "methodology" section.
- [ ] **Attribution clarity:** several of the 26 frameworks are custom/internal with no named originator, sitting alongside established, attributed frameworks (Moore, Dunford, Reichheld, etc.). Before publishing, clearly mark which frameworks are original to this KB vs. externally sourced, so attribution isn't misread.

### Checked, no issues found
- No secrets, API keys, credentials, or PII (emails, etc.) in any file.
- No prompt-injection or hidden-instruction content in any file (explicitly scanned for jailbreak-style patterns).

---

## ENRICHMENT-PLAN.md Build: Seventh and Eighth Candidates (Logged 2026-07-22)

Continued building the "Medium"-priority batch from [ENRICHMENT-PLAN.md](ENRICHMENT-PLAN.md), following the priority order (highest first, resolving each candidate's overlap/scope note before writing).

- **A7 JTBD Switch Interview Method** built as Category 1's fifth entry (`frameworks/01-market-customer-understanding.md`, 1,327 words, Methodology template: What it is → When to use it → How to run it → Cadence & ownership → Example → Pitfalls → See also). Differentiated explicitly from the existing Jobs-to-be-Done Positioning Framework in Category 2: that framework is what to do with a job once you know it; this entry is the research method (a timeline interview walking backwards from the purchase moment) that finds the job and its triggering event in the first place. The existing JTBD framework already named "switch interviews" as its validation technique in passing; this entry is the fully worked-out version of that step.
- **A2 Product-Led Growth** built as Category 4's seventh entry (`frameworks/04-go-to-market-launch.md`, 1,321 words, Methodology template: What it is → When to use it → How to run it → Cadence & ownership → Example → Pitfalls → See also). Positioned explicitly as the practice sibling of the existing GTM Motion Model: that model decides whether PLG fits a product's deal size and buyer complexity; this entry is the ongoing practice of running PLG once it does (activation moment, product-qualified lead signals, in-product upgrade paths, and a sales-assist layer for accounts whose usage signals warrant it).
- Ran the cross-doc consistency checklist for both: INDEX.md (rows added with Type inline; counts 32 → 34; Cat 1 4 → 5, Cat 4 6 → 7; Structure Notes, Completion Status, and Next Steps updated), README.md (headline "34 entries", summary table, version block, new-additions line), FRAMEWORK-MAP.md (both added to the dependency matrix; JTBD Switch Interview Method inserted as step 3 of the Repositioning for New Segment scenario with later steps renumbered; Product-Led Growth noted as a parallel track inside step 3 of the New Product Launch scenario; version history), BY-SITUATION.md (JTBD Switch Interview Method inserted into Situation 2; Product-Led Growth inserted into Situation 1), ENRICHMENT-PLAN.md (both marked Built; summary table and status header updated), and this file.
- Total entries: 32 → 34 (28 frameworks, 4 methodologies, 1 model, 1 primer).

---

## ENRICHMENT-PLAN.md Build: Fifth and Sixth Candidates (Logged 2026-07-22)

Completed the "High"-priority batch from [ENRICHMENT-PLAN.md](ENRICHMENT-PLAN.md) and opened the "Medium" batch, following the priority order (highest first, resolving each candidate's overlap/scope note before writing).

- **A5 GTM Strategy vs Product Marketing primer** built as the first entry in a new `concepts/` area (`concepts/gtm-strategy-vs-product-marketing.md`, 921 words, Primer template: What it is → Why it matters → Key distinctions → Where PMM fits → See also). This is the first entry in the KB to use the Primer template and the first to live outside the eight workflow categories, per ENRICHMENT-PLAN.md B4 (primers are not applyable, so they get a `concepts/` home instead of a category). It closes out the "High" batch: all five originally-flagged "High" candidates (Message Architecture, Voice of the Customer Programme, Competitive Battlecard Framework, Dunford's 10-Step Positioning Process, and this primer) are now built.
- **A1 GTM Motion Model** built as Category 4's sixth entry (`frameworks/04-go-to-market-launch.md`, 1,526 words, Model template: What it is → When to use it → How to read it → How to apply it → Example → Pitfalls → See also), the first "Medium"-priority candidate and the first entry in the KB to use the Model template. It classifies the five acquisition motions (self-serve, PLG, inside sales, field sales, partner-channel) by deal size and buyer complexity. Resolved a naming collision flagged during the build, not in the original ENRICHMENT-PLAN.md overlap note: Category 5 already holds a "Go-to-Market Motion Framework" (launch-execution choreography across channels), a different concept from this motion-*selection* model. Renamed every reference to the existing framework to its full name, "GTM Motion Framework", across FRAMEWORK-MAP.md and BY-SITUATION.md so the two are never confused under a shared "GTM Motion" shorthand, and cross-referenced both entries explicitly in each other's "See also".
- Ran the cross-doc consistency checklist for both: INDEX.md (Category 4 row count 5 → 6; new "Concepts (Primers)" section and table; Structure Notes and Completion Status updated; counts 30 → 32), README.md (headline "32 entries", summary table with a Concepts row, version block, new-additions line, "Each Entry Includes" section updated to note the four per-type templates), FRAMEWORK-MAP.md (GTM Motion Model added to the Go-to-Market Frameworks dependency table and to Scenario 1; existing "GTM Motion" mentions renamed to "GTM Motion Framework"; primer noted as out-of-scope for the dependency matrix; version history), BY-SITUATION.md (GTM Motion Model inserted into Situations 1 and 2; primer inserted into Situation 9), ENRICHMENT-PLAN.md (both marked Built; summary table and status header updated), and this file.
- Total entries: 30 → 32 (28 frameworks, 2 methodologies, 1 model, 1 primer).

---

## ENRICHMENT-PLAN.md Build: Third and Fourth Candidates (Logged 2026-07-22)

Continued building the "High"-priority batch from [ENRICHMENT-PLAN.md](ENRICHMENT-PLAN.md), following the priority order (highest first, resolving each candidate's overlap/scope note before writing).

- **A17 Competitive Battlecard Framework** built as Category 3's third entry (`frameworks/03-competitive-strategy.md`, 1,278 words, Framework template). Placed in Category 3 rather than a new single-entry Sales Enablement category, since only this one A17 candidate is built so far; a dedicated Category 9 remains the plan once A18 and A19 are also built (per ENRICHMENT-PLAN.md's guidance against thin category files). Differentiated explicitly from the existing Competitive Intelligence & Positioning Update Framework: that framework is the ongoing monitoring process, this is the one-page field artefact sales uses live in a deal.
- **A9 Dunford's 10-Step Positioning Process** built as Category 2's sixth entry (`frameworks/02-positioning-messaging.md`, 1,380 words, Methodology template: What it is → When to use it → How to run it → Cadence & ownership → Example → Pitfalls → See also). Differentiated explicitly from the existing April Dunford's 5-Component Positioning Canvas: the canvas is the output template, this entry is the research and validation process that produces it.
- Ran the cross-doc consistency checklist for both: INDEX.md (rows added with Type inline; counts 28 → 30; Cat 2 5 → 6, Cat 3 2 → 3), README.md (headline "30 entries", summary table, version block, new-additions line), FRAMEWORK-MAP.md (both added to the dependency matrix; Dunford process inserted into the Repositioning for New Segment scenario; Battlecard inserted into the Improving Win Rate scenario; version history), BY-SITUATION.md (Dunford process into Situations 2; Battlecard into Situations 3 and 5), ENRICHMENT-PLAN.md (both marked Built), and this file.
- Total entries: 28 → 30 (28 frameworks, 2 methodologies). Remaining "High" batch item: A5, the GTM vs PMM primer, which also requires standing up the first `concepts/` area and exercising the Primer template for the first time.

---

## Framework Backlog: Gap Analysis (Logged 2026-07-09)

Deep research identified 12 proven, replicable frameworks not currently in the KB, ranked and detailed in [FRAMEWORK-BACKLOG.md](FRAMEWORK-BACKLOG.md). Headline findings:

- **Pricing & Packaging had zero coverage** and was the clearest gap. Three independently well-established candidates (Good-Better-Best Packaging, Van Westendorp Price Sensitivity Meter, Value Metric/WTP Framework) justified a new 8th category.
- Thinner gaps in sales enablement, customer advocacy, analyst relations, and message testing have one strong candidate each.
- Two candidates (MEDDIC/MEDDPICC, Sean Ellis 40% Test) are sales/product-owned rather than PMM-native; flagged for a scope decision rather than automatic inclusion.
- One candidate (Pragmatic Institute Framework) has meaningful overlap with existing frameworks and needs a duplication check per CLAUDE.md's "no duplicate concepts" rule.

**Update (2026-07-12):** The top-ranked candidate, Good-Better-Best Packaging, has been built out as Category 8's first framework (`frameworks/08-pricing-packaging.md`). The remaining 11 candidates, including the other two Pricing & Packaging candidates, are still a proposal for team review, not an action queue, per CLAUDE.md ("Add new frameworks only if a gap is identified by the team").

**Update (2026-07-18):** The third and final top-ranked Pricing & Packaging candidate, the Value Metric / Willingness-to-Pay Framework, has been built out as Category 8's third framework (`frameworks/08-pricing-packaging.md`). This closes out the Pricing & Packaging gap identified in the 2026-07-09 analysis; all three independently-established candidates (GBB, Van Westendorp PSM, Value Metric/WTP) are now in the knowledge base. The remaining 9 candidates are still a proposal for team review, not an action queue.

---

## Metrics & Health Checks

### Content Quality Metrics (Baseline & Updates)
- Number of entries: 34 ✅ (26 as of 2026-07-19; +2 on 2026-07-21 with Message Architecture in Category 2 and the Voice of the Customer Programme in Category 1; +2 on 2026-07-22 with the Competitive Battlecard Framework in Category 3 and Dunford's 10-Step Positioning Process in Category 2; +2 later on 2026-07-22 with the GTM Strategy vs Product Marketing primer in the new `concepts/` area and the GTM Motion Model in Category 4; +2 later still on 2026-07-22 with the JTBD Switch Interview Method in Category 1 and Product-Led Growth in Category 4. Of the 34, 28 are tagged/treated as frameworks, 4 as methodologies, 1 as a model, and 1 as a primer; the 10 existing entries that are really methodologies, per ENRICHMENT-PLAN.md B2, are not yet retagged)
- Entries with all required sections populated for their type: 34/34 ✅ (100%; all eight new entries follow the Framework, Methodology, Model, and Primer templates respectively)
- Entries with specific (named or detailed scenario) examples: 33/34 ✅ (the primer does not require an example per CLAUDE.md's Primer template; the other 33 all carry one)
- Entries within the word target (1000-1500 for frameworks/methodologies/models, 500-1000 for primers): 34/34 ✅ (100%; Message Architecture 1,085 words, VoC Programme 1,114 words, Competitive Battlecard Framework 1,278 words, Dunford's 10-Step Positioning Process 1,380 words, GTM Strategy vs Product Marketing primer 921 words, GTM Motion Model 1,526 words, JTBD Switch Interview Method 1,327 words, Product-Led Growth 1,321 words)
- Entries with cross-references to other entries: 34/34 ✅ (100%; all eight new entries carry four or more See-also links)
- Frameworks with Further Reading sections (established only): 6/6 ✅ (100%)
- Entries with metrics benchmarks or explicit success metrics: 34/34 ✅ (100%; all eight new entries name explicit success metrics or measures)
- Entries with actionable pitfall recovery steps: 33/34 ✅ (the primer carries no Pitfalls section per CLAUDE.md's Primer template; the other 33 each carry pitfalls with recovery steps)
- Entries validated against web sources: 19/34 ✅ (the 19 original frameworks were validated 2026-04-09; the 15 added since, Category 8's 3 pricing frameworks, the Product Differentiation recount, and the 8 entries added 2026-07-21/22, have not had a separate source-validation pass)
- Attribution accuracy verified: 19/19 of the original set ✅ (100%; 2 errors fixed 2026-04-09); Category 8 and the 2026-07-21/22 entries are converged-practice or single-sourced, cited inline (Message Architecture: Pragmatic Institute / PMA; VoC: Griffin & Hauser 1993; Competitive Battlecard: converged practice, Crayon/Klue/PMA; Dunford's 10-Step Process: April Dunford, *Obviously Awesome*, 2019; GTM Motion Model: converged practice, OpenView/Bessemer/Winning by Design; JTBD Switch Interview Method: Bob Moesta and Chris Spiek, The Re-Wired Group; Product-Led Growth: Wes Bush, *Product-Led Growth*, 2019, and OpenView Partners) rather than uniformly attributed to a single named originator; the GTM vs PMM primer is an original KB explainer with no external originator to attribute
- Em dashes in entry content: 0/34 ✅ (fixed 2026-07-19; all eight new entries written em-dash-free)
- British English spelling compliance: 34/34 ✅ (all eight new entries written in British English)

### Operational Readiness Metrics (Target)
- Quick-reference cards created: 0/19 ⏳ (target: 19/19)
- Templates created: 0/4 ⏳ (target: 4 templates)
- Onboarding guide exists: No ⏳ (target: Yes)
- Feedback loop established: No ⏳ (target: Monthly)

### Maintenance Metrics (Target)
- Frameworks reviewed annually: 0/19 ⏳
- New frameworks added based on team feedback: 0 ⏳

---

## Team Notes

### For PMM Teams Using This KB
- **Start with INDEX.md** to understand what frameworks are available
- **Use BY-SITUATION.md** (once created) to find frameworks for your current challenge
- **Read the framework fully** before applying; examples are not prescriptive but illustrative
- **Document your application:** What did you learn? What worked? What would you change? Share in monthly sync.

### For PMM Managers / Team Leads
- Framework adoption should be reflected in quarterly planning
- Reserve time for "framework application" in sprints; don't assume team will apply frameworks ad hoc
- Use feedback loop to identify which frameworks are most valuable to your context
- Consider tailoring quick-reference cards to your team's specific workflows

---

## Timeline Summary

| Phase | Dates | Status |
|-------|-------|--------|
| Knowledge base writing | Pre-2026-04-08 | ✅ Complete |
| Repository organization | 2026-04-08 | ✅ Complete |
| PLAN.md & PROGRESS.md | 2026-04-08 | ✅ Complete |
| CLAUDE.md | 2026-04-08 | 🔄 In progress |
| Phase 1: Polish & structure | Weeks 2–3 | ⏳ Pending |
| Phase 2: Templates & tooling | Weeks 4–5 | ⏳ Pending |
| Phase 3: Extensions & cases | Weeks 6–9 | ⏳ Pending |
| Phase 4: Workflows & onboarding | Weeks 10–11 | ⏳ Pending |
| Ongoing maintenance | Continuous | ⏳ Pending |

---

## Next Session Priorities

0. **Build out [ENRICHMENT-PLAN.md](ENRICHMENT-PLAN.md) (logged 2026-07-21; build approved; 8 of 19 built).** All five "High" candidates are done: A11 Message Architecture (Category 2), A6 Voice of the Customer Programme (Category 1), A17 Competitive Battlecard Framework (Category 3), A9 Dunford's 10-Step Positioning Process (Category 2), and A5 the GTM Strategy vs Product Marketing primer (new `concepts/` area). Three "Medium" candidates are also done: A1 GTM Motion Model (Category 4), A2 Product-Led Growth (Category 4), and A7 JTBD Switch Interview Method (Category 1). The remaining 11 candidate frameworks and methodologies (conjoint analysis, buyer's journey content map, ICP development, Kano model, Command of the Message, and the six "Lower" candidates) will be built and added to the system, starting with A14 Conjoint Analysis, working top-down through the rest of the "Medium" then "Lower" priority tiers; the priority column in the plan is the build order, not a filter. Stand up a new Category 9 (Sales Enablement) once A18 and A19 join A17 there. Still outstanding from Part B: the `**Type:**` backfill on the original 26 entries and the Type-column rollout across all INDEX.md and README.md tables (the eight new entries are typed in their files and inline in INDEX.md).
1. **Build the remaining 9 FRAMEWORK-BACKLOG.md candidates (approved 2026-07-21).** All are now approved to build alongside the enrichment queue. Three carry a build condition: MEDDIC/MEDDPICC and the Sean Ellis 40% Test are written with an explicit "PMM's supporting role" framing, and the Pragmatic Institute Framework is narrowed to its non-overlapping contribution. Category placements for the thin single-candidate themes are resolved in FRAMEWORK-BACKLOG.md ("Scope questions: resolved").
2. Resolve the two open scope questions from the backlog: whether to include sales/product-owned frameworks (MEDDIC, Sean Ellis 40% Test) with a "PMM supporting role" framing, and whether Pragmatic Institute Framework duplicates existing lifecycle frameworks
3. Run a source-validation and attribution pass on the 7 frameworks added since the 2026-04-09 review (Category 8's three pricing frameworks, plus confirm Product Differentiation Strategy Framework's attribution now that its category placement is corrected), matching the rigour applied to the original 19
4. Decide how to handle `product-marketing-kb-task.md` and `foundational-review.md` for public visibility ahead of any public release (see Public Release Readiness findings above)
5. Begin Phase 1 deliverables: quick-reference cards (0/26) and GLOSSARY.md

---

## Version History

- **2026-07-22 (build, seventh and eighth)**: Built the seventh and eighth [ENRICHMENT-PLAN.md](ENRICHMENT-PLAN.md) candidates, continuing the "Medium" batch. **A7 JTBD Switch Interview Method** added to Category 1 (`frameworks/01-market-customer-understanding.md`, 1,327 words) using the Methodology template (What it is → When to use it → How to run it → Cadence & ownership → Example → Pitfalls → See also); it is the interview technique (walking backwards from the purchase moment to find the specific triggering event and the four forces of push, pull, anxiety, and habit) that produces the job the existing JTBD Positioning Framework then positions around, explicitly differentiated as research method versus positioning output. **A2 Product-Led Growth** added to Category 4 (`frameworks/04-go-to-market-launch.md`, 1,321 words) using the Methodology template; it is the ongoing practice of running the PLG motion the GTM Motion Model identifies as a fit, covering activation-moment definition, product-qualified lead signal instrumentation, in-product upgrade paths, and a sales-assist layer for accounts whose usage signals warrant it. Ran the cross-doc consistency checklist: INDEX.md (Category 1 4 → 5, Category 4 6 → 7; counts 32 → 34), README.md (headline "34 entries", summary table, version block, new-additions line), FRAMEWORK-MAP.md (both added to the dependency matrix; JTBD Switch Interview Method inserted as step 3 of the Repositioning for New Segment scenario with later steps renumbered; Product-Led Growth noted inside step 3 of the New Product Launch scenario; version history), BY-SITUATION.md (JTBD Switch Interview Method into Situation 2, Product-Led Growth into Situation 1), ENRICHMENT-PLAN.md (both marked ✅ Built; summary table and status header updated), and this file. Total entries: 32 → 34 (28 frameworks, 4 methodologies, 1 model, 1 primer).
- **2026-07-22 (build, fifth and sixth)**: Built the fifth and sixth [ENRICHMENT-PLAN.md](ENRICHMENT-PLAN.md) candidates, completing the "High" batch and opening the "Medium" batch. **A5 GTM Strategy vs Product Marketing primer** added as the first entry in a new `concepts/` area (`concepts/gtm-strategy-vs-product-marketing.md`, 921 words) using the Primer template (What it is → Why it matters → Key distinctions → Where PMM fits → See also); it is the first primer and the first entry outside the eight workflow categories, per ENRICHMENT-PLAN.md B4. **A1 GTM Motion Model** added to Category 4 (`frameworks/04-go-to-market-launch.md`, 1,526 words) using the Model template (What it is → When to use it → How to read it → How to apply it → Example → Pitfalls → See also); it classifies the five acquisition motions (self-serve, PLG, inside sales, field sales, partner-channel) by deal size and buyer complexity. During the build, found and resolved a naming collision not flagged in the original ENRICHMENT-PLAN.md overlap note: Category 5's existing "Go-to-Market Motion Framework" (launch-execution choreography) shares a near-identical name with this new motion-*selection* model; renamed every shorthand reference to the existing framework to its full name across FRAMEWORK-MAP.md and BY-SITUATION.md, and cross-referenced both entries explicitly. Ran the cross-doc consistency checklist: INDEX.md (Category 4 5 → 6; new Concepts section; counts 30 → 32), README.md (headline "32 entries", summary table with a Concepts row, version block, new-additions line, "Each Entry Includes" section generalised beyond frameworks), FRAMEWORK-MAP.md (GTM Motion Model added to the dependency matrix and Scenario 1; "GTM Motion" renamed to "GTM Motion Framework" throughout; primer noted as out of scope for the matrix; version history), BY-SITUATION.md (GTM Motion Model into Situations 1 and 2; primer into Situation 9), ENRICHMENT-PLAN.md (both marked Built), and this file. Total entries: 30 → 32 (28 frameworks, 2 methodologies, 1 model, 1 primer).
- **2026-07-22 (build, third and fourth)**: Built the third and fourth [ENRICHMENT-PLAN.md](ENRICHMENT-PLAN.md) candidates, continuing the "High" batch. **A17 Competitive Battlecard Framework** added to Category 3 (`frameworks/03-competitive-strategy.md`, 1,278 words) using the Framework template; it is the one-page field artefact (competitor pitch, counter-position, landmines, objection responses, proof points) sales uses live in a deal, explicitly differentiated from the existing Competitive Intelligence & Positioning Update Framework (the ongoing monitoring process that feeds the card). Placed in Category 3 rather than a new single-entry Sales Enablement category, per ENRICHMENT-PLAN.md's guidance against thin category files; Category 9 remains planned once A18 and A19 are built alongside it. **A9 Dunford's 10-Step Positioning Process** added to Category 2 (`frameworks/02-positioning-messaging.md`, 1,380 words) using the Methodology template (What it is → When to use it → How to run it → Cadence & ownership → Example → Pitfalls → See also); it is the research and validation process (best-fit customers → competitive alternatives → unique attributes → value → segment → category → pitch → alignment) that produces the existing 5-Component Positioning Canvas, explicitly framed as process versus output template. Ran the cross-doc consistency checklist: INDEX.md (rows added with Type noted inline; counts 28 → 30; Cat 2 5 → 6, Cat 3 2 → 3), README.md (headline "30 entries", summary table, version block, new-additions line), FRAMEWORK-MAP.md (both added to the dependency matrix; Dunford process inserted into the Repositioning for New Segment scenario; Battlecard inserted into the Improving Win Rate scenario; version history), BY-SITUATION.md (Dunford process into Situation 2, Battlecard into Situations 3 and 5), ENRICHMENT-PLAN.md (both marked ✅ Built), and this file. Total entries: 28 → 30 (28 frameworks, 2 methodologies).
- **2026-07-21 (build)**: Built the first two [ENRICHMENT-PLAN.md](ENRICHMENT-PLAN.md) candidates, exercising two content types. **A11 Message Architecture (Messaging House)** added to Category 2 (`frameworks/02-positioning-messaging.md`, 1,085 words) using the Framework template; it fills the positioning-to-copy gap with a core-message / value-pillars / proof-points hierarchy. **A6 Voice of the Customer (VoC) Programme** added to Category 1 (`frameworks/01-market-customer-understanding.md`, 1,114 words) using the Methodology template (How to run it → Cadence & ownership → Maturity stages); it is the continuous-listening sibling of NPS and Win/Loss. Both carry a `**Type:**` label, the first entries in the KB to do so. Ran the cross-doc consistency checklist: INDEX.md (rows added with Type noted inline; counts 26 → 28; Cat 1 3 → 4, Cat 2 4 → 5), README.md (headline "28 entries", summary table, version block, new-additions line), FRAMEWORK-MAP.md (both added to the dependency matrix; Message Architecture inserted into the New Product Launch scenario; VoC added to the measurement feedback loop; version history), BY-SITUATION.md (Message Architecture into Situation 8, VoC into Situation 4), ENRICHMENT-PLAN.md (both marked ✅ Built), and this file. Total entries: 26 → 28 (27 frameworks, 1 methodology). Deferred (tracked): the `**Type:**` backfill on the original 26 entries and the full Type-column rollout across the navigation tables (ENRICHMENT-PLAN.md B2/B5).
- **2026-07-21**: Logged [ENRICHMENT-PLAN.md](ENRICHMENT-PLAN.md), a forward-looking plan to enrich the KB with further frameworks and, deliberately, *methodologies* (Voice of the Customer programme, JTBD Switch interview method, Dunford 10-step positioning process, message architecture, FAB/value messaging, Command of the Message, GTM motion model, product-led growth, ICP development, Bullseye channels, Kano model, conjoint analysis, Gabor-Granger, usage-based pricing, competitive battlecards, buyer's-journey content map, enablement maturity model, and a GTM-vs-PMM primer). The plan does not repeat the 2026-07-09 FRAMEWORK-BACKLOG.md candidates. Its second half is a documentation plan for keeping a framework-first KB consistent as methodologies arrive: a four-type vocabulary (Framework / Methodology / Model / Primer), per-type section templates, a `**Type:**` label on every entry, a rule to keep methodologies inside the existing workflow categories (only primers get a separate `concepts/` area), navigation-count language changes, and a cross-doc consistency checklist. Applied the governing parts now: added a "Content Types" subsection and the per-type templates to CLAUDE.md, added the Type declaration and cross-doc checklist to CLAUDE.md's Quality Gates, and pointed README.md, INDEX.md, FRAMEWORK-BACKLOG.md, and this file at the plan. **The build is approved: all 19 candidates will be built and added to the system, worked top-down from the "High" batch.** The nine remaining FRAMEWORK-BACKLOG.md candidates (from the 2026-07-09 gap analysis) were also approved to build in the same session; their four open scope questions are resolved in FRAMEWORK-BACKLOG.md, with three candidates (MEDDIC, Sean Ellis 40% Test, Pragmatic Institute) carrying a framing/narrowing build condition. That brings the approved-but-unbuilt total to 28 entries across the two queues. No entry content was written in this session; the next sessions build both queues.
- **2026-07-19**: Full consistency review of all 26 frameworks. Fixed two hard rule violations that had been present since the original content was written: 22 em dashes across 7 of 8 category files (CLAUDE.md requires zero), and widespread American spelling throughout (organize/prioritize/customize/behavior/center and similar, converted to organise/prioritise/customise/behaviour/centre). Expanded all 19 originally-written frameworks from their previous 398-735 word range up to the CLAUDE.md 1000-1500 word quality gate, adding deeper "How to apply it" steps, richer examples with named success metrics, and a third pitfall with recovery guidance where only two existed; Category 8's 3 frameworks (already compliant) were left as-is bar a light check. Fixed a content accuracy issue: the Product Development Stage Framework example named Uber and Stripe as "beta customers" of a fictional startup, falsely implying a real relationship; replaced with fictional company names. Fixed a repository-wide framework count error: every navigation doc (README.md, INDEX.md, FRAMEWORK-MAP.md) claimed 22 total frameworks, but Product Differentiation Strategy Framework was listed in both Category 2 and Category 3 while physically living only in Category 3 (`frameworks/03-competitive-strategy.md`); the correct total is 26 (Category 2 corrected to 4, Category 3 confirmed at 2). Updated FRAMEWORK-MAP.md, which had not been touched since Category 8 was added, to include the three pricing frameworks in the dependency matrix and a new "Pricing a New Tier or Service" scenario. Added a missing Success Metrics section to BY-SITUATION.md's Situation 9 for consistency with the other nine situations.
- **2026-07-18**: Built the Value Metric / Willingness-to-Pay Framework as the third entry in Category 8 (Pricing & Packaging), the last of the three top-ranked candidates from the 2026-07-09 backlog analysis. Added to `frameworks/08-pricing-packaging.md` (1,379 words, full 6-section structure); updated INDEX.md, README.md, BY-SITUATION.md (Situation 6), FRAMEWORK-BACKLOG.md, and PROGRESS.md to reflect the addition. Total frameworks: 21 → 22. Pricing & Packaging gap now closed against the 2026-07-09 analysis.
- **2026-07-15**: Built the Van Westendorp Price Sensitivity Meter (PSM) as the second entry in Category 8 (Pricing & Packaging), the next-ranked candidate from the 2026-07-09 backlog analysis. Added to `frameworks/08-pricing-packaging.md` (1,198 words, full 6-section structure); updated INDEX.md, README.md, BY-SITUATION.md (Situation 6), FRAMEWORK-BACKLOG.md, and PROGRESS.md to reflect the addition. Total frameworks: 20 → 21.
- **2026-07-12**: Built the Good-Better-Best (GBB) Packaging Framework as the first entry in a new Category 8 (Pricing & Packaging), the clearest gap identified in the 2026-07-09 backlog analysis. Added `frameworks/08-pricing-packaging.md` (1,084 words, full 6-section structure); updated INDEX.md, README.md, BY-SITUATION.md (Situation 6), and FRAMEWORK-BACKLOG.md to reflect the addition. Total frameworks: 19 → 20.
- **2026-07-09**: Logged public release readiness findings (content issues to fix before the repo goes public; no secrets or prompt-injection content found). Completed deep-research gap analysis and logged a 12-framework backlog in FRAMEWORK-BACKLOG.md, headlined by a Pricing & Packaging gap with zero current coverage.
- **2026-04-09**: Comprehensive quality check completed. Validation, attribution fixes, cross-references added to all 19 frameworks, pitfalls expanded, dependency map created, metrics benchmarks and further reading added. foundational-review.md documenting all findings.
- **2026-04-08**: Repository organised, PLAN.md and PROGRESS.md created, Claude file in progress
