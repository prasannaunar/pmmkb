# Enrichment Plan: Adding Frameworks and Methodologies

**Logged:** 2026-07-21
**Status:** Approved build queue. Every candidate in this plan will be built and added to the knowledge base. **Two of the five "High" candidates are now built (2026-07-21): A11 Message Architecture and A6 Voice of the Customer Programme.** The remaining 17 are queued; this document is the pick-up point. A future session should continue from the "High" batch, work through the candidates in the priority order below, and build each one out following the standards in CLAUDE.md.
**Relationship to other docs:** This plan sits alongside [FRAMEWORK-BACKLOG.md](FRAMEWORK-BACKLOG.md). The backlog logged 12 framework candidates in 2026-07-09 (three now built). This plan does not repeat those. It adds a further set of candidates with a deliberate emphasis on **methodologies**, not just frameworks, and it sets out how the documentation should evolve so methodologies sit consistently in a knowledge base that until now has been framework-first.

---

## Why this plan exists

The knowledge base contains 26 entries, and every one of them is described as a "framework". In practice, several are really *methodologies*: repeatable practices you run continuously or as a project (the 10-Step PMM Process, PMM Lifecycle Management, T2D3, Win/Loss Analysis). Calling everything a "framework" hides a useful distinction and makes the KB harder to navigate as it grows.

A review of the repository against the disciplines a product marketing function actually owns found two things:

1. **Coverage gaps.** Whole practices that a PMM team relies on daily are absent or only touched tangentially: Voice of the Customer as an ongoing programme, go-to-market motion selection, the positioning *process* (as opposed to a positioning template), message architecture, sales enablement content, and the more rigorous pricing research methods.
2. **A structural gap.** The KB has no vocabulary for the difference between a *framework* (a model or template you apply to a decision) and a *methodology* (a practice you run over time). Adding methodologies without fixing this would make the collection inconsistent.

This plan addresses both. Part A proposes the content to add. Part B proposes how to document it so the collection stays consistent.

Everything proposed here respects the CLAUDE.md curation rules: proven and replicable only, no duplicate concepts under different names, and practical orientation (each entry must answer "when do I apply this?", "what could go wrong?", and "how do I know it worked?").

---

# Part A: Candidate frameworks and methodologies

Candidates are grouped by the themes the request called out. Each is tagged by **type** (Framework, Methodology, Model, or Primer; see Part B for definitions), with its originator, what it does, a proposed home, why it is proven, and any overlap or scope note that a builder must resolve before writing it up.

Candidates already logged in FRAMEWORK-BACKLOG.md (StoryBrand SB7, MEDDIC/MEDDPICC, Category Design, Launch Tier, Wynter Message Testing, Forrester Customer Advocacy, Analyst Relations Tiering, Pragmatic Institute, Sean Ellis 40% Test) are **not** repeated here; where one is the natural neighbour of a candidate below, it is cross-referenced.

## Theme 1: GTM strategy

### A1. GTM Motion Model (self-serve / product-led / inside sales / field / partner-channel)
- **Type:** Model (taxonomy).
- **Originator:** No single author; codified across OpenView, Bessemer Venture Partners, and Winning by Design.
- **What it does:** Classifies the primary ways a company acquires and expands customers, and matches each motion to deal size, sales cycle, and buyer behaviour. Answers "which motion should this product go to market through?" before any launch planning.
- **Proposed home:** Category 4 (Go-to-Market & Launch). Sits upstream of the existing 3-/7-/10-step process frameworks; those describe *how to execute*, this describes *which motion to execute through*.
- **Why it is proven:** Standard vocabulary across growth-stage SaaS and the major VC playbooks for a decade.
- **Overlap/scope note:** Must be positioned as motion *selection*, distinct from the Complete GTM Workflow (which assumes a motion is already chosen).

### A2. Product-Led Growth (PLG)
- **Type:** Methodology.
- **Originator:** Popularised by Wes Bush (*Product-Led Growth*, 2019) and OpenView Partners.
- **What it does:** A go-to-market practice where the product itself drives acquisition, activation, and expansion (free trial or freemium, product-qualified leads, in-product upgrade paths). Run continuously, not as a one-off.
- **Proposed home:** Category 4, or Category 6 (Product Experience & Adoption) given its adoption focus. Recommend Category 4 with strong cross-links to Feature Adoption and Onboarding Maturity.
- **Why it is proven:** Dominant motion for self-serve SaaS (Slack, Calendly, Notion, Figma); extensively documented.
- **Overlap/scope note:** Frame PMM's role specifically (activation messaging, PQL definition, upgrade-path packaging); avoid drifting into product-management territory.

### A3. ICP Development Methodology
- **Type:** Methodology.
- **Originator:** Converged practice; documented by demandbase, HubSpot, and ABM literature.
- **What it does:** The operational build of an Ideal Customer Profile from firmographic, technographic, and behavioural signals, then its use to focus targeting, messaging, and enablement. A repeatable practice refreshed as the customer base shifts.
- **Proposed home:** Category 1 (Market & Customer Understanding).
- **Overlap/scope note:** STP already defines targeting at a strategic level; this must be framed as the *operational* ICP build (signals, scoring, list-building), not a second segmentation model. Resolve the overlap explicitly or fold it into an STP "See also".

### A4. Bullseye Framework (traction channel selection)
- **Type:** Framework.
- **Originator:** Gabriel Weinberg and Justin Mares, *Traction* (2015).
- **What it does:** A structured way to test and pick acquisition channels: brainstorm across 19 channels, rank into an inner/middle/outer ring, run cheap tests, then double down on the one channel that works.
- **Proposed home:** Category 4 (Go-to-Market & Launch).
- **Why it is proven:** Widely taught in startup GTM curricula; a decade of documented use.

## Theme 2: GTM vs PMM (a conceptual primer, not a framework)

### A5. "GTM Strategy vs Product Marketing" primer
- **Type:** Primer (explainer; nothing to "apply").
- **What it does:** Explains the difference between go-to-market strategy (a company-wide, cross-functional plan spanning product, sales, marketing, and success) and product marketing (a function that contributes to and often orchestrates GTM but does not own all of it). Includes a simple ownership map: where PMM owns, contributes, and supports across a GTM plan.
- **Proposed home:** A new `concepts/` (or `primers/`) area, or a CONCEPTS.md at root. This is the first entry that is explanatory rather than applyable, and it is the concrete reason Part B proposes a "Primer" content type.
- **Why it matters:** The request called this out directly. It also clarifies the scope of the whole KB (why some practices are "PMM's supporting role" rather than PMM-owned), which recurs in the backlog's scope questions about MEDDIC and the Sean Ellis test.

## Theme 3: Voice of the Customer

### A6. Voice of the Customer (VoC) Programme: ✅ BUILT (2026-07-21)
- **Built as:** Category 1 (Market & Customer Understanding), `frameworks/01-market-customer-understanding.md`, using the Methodology template (What it is → When to use it → How to run it → Cadence & ownership → Maturity stages → Example → Pitfalls → See also). 1,114 words; cross-linked to NPS, Win/Loss, STP, and the Complete Product Experience Framework.
- **Type:** Methodology.
- **Originator:** Roots in Total Quality Management (Griffin & Hauser, 1993); modern SaaS practice converged across product and CX literature.
- **What it does:** A continuous listening system that gathers customer signal from surveys, interviews, reviews, support tickets, sales calls, and churn, then routes it into positioning, roadmap, and messaging decisions. This is the ongoing-practice sibling of the point-in-time NPS and Win/Loss frameworks already in the KB.
- **Proposed home:** Category 1 (Market & Customer Understanding) or Category 6. Recommend Category 1, cross-linked to NPS and Win/Loss.
- **Overlap/scope note:** NPS and Win/Loss are *inputs* to a VoC programme; the entry must position VoC as the system that connects them, not a competing survey method.

### A7. JTBD "Switch" / Timeline Interview Method
- **Type:** Methodology.
- **Originator:** Bob Moesta and Chris Spiek, The Re-Wired Group.
- **What it does:** A specific interview technique for uncovering the real "job" behind a purchase by reconstructing the timeline of a customer's switch from the old solution to the new one. This is the *research method*, distinct from the JTBD *positioning* framework already in Category 2.
- **Proposed home:** Category 1, cross-linked to the existing JTBD Positioning Framework.
- **Overlap/scope note:** Must be clearly differentiated from the existing JTBD entry: that one is about how to position around a job; this is about how to interview to discover it. A good test case for the framework-vs-methodology distinction.

### A8. Kano Model
- **Type:** Framework.
- **Originator:** Noriaki Kano, 1984.
- **What it does:** Classifies features by their effect on satisfaction (must-be, performance, delighter, indifferent, reverse) so teams prioritise what actually moves customer perception. Useful for PMM in launch messaging and packaging decisions.
- **Proposed home:** Category 1 or Category 6.
- **Why it is proven:** 40 years of use across product and CX disciplines.

## Theme 4: Positioning

### A9. April Dunford's 10-Step Positioning Process
- **Type:** Methodology.
- **Originator:** April Dunford, *Obviously Awesome* (2019).
- **What it does:** The step-by-step *process* for arriving at positioning (list competitive alternatives, isolate unique attributes, map to value, find the best-fit market category, capture in a canvas). The KB currently has Dunford's 5-component *canvas* (the output template) but not the process that produces it.
- **Proposed home:** Category 2 (Positioning & Messaging), cross-linked to the existing April Dunford canvas.
- **Overlap/scope note:** This is the clearest example of a methodology that complements an existing framework rather than duplicating it. Build it explicitly as "the process that produces the canvas".

### A10. Positioning / Perceptual Map (2x2)
- **Type:** Framework.
- **Originator:** Classical marketing (Al Ries and Jack Trout, *Positioning*, 1981; perceptual mapping predates them).
- **What it does:** Plots competitors on two buyer-relevant axes to find open, ownable space. A fast, visual complement to Bowman's Clock (which is price/value specific).
- **Proposed home:** Category 3 (Competitive Strategy) or Category 2.
- **Overlap/scope note:** Check against Bowman's Clock (Category 3); differentiate on axis choice (Bowman is fixed to price vs perceived value; perceptual maps use any two buyer-chosen attributes).

## Theme 5: Messaging

### A11. Message Architecture / Messaging House: ✅ BUILT (2026-07-21)
- **Built as:** Category 2 (Positioning & Messaging), `frameworks/02-positioning-messaging.md`, using the Framework template (What it is → When to use it → How to apply it → Example → Pitfalls → See also). 1,085 words; cross-linked to Geoffrey Moore, April Dunford, Value Proposition Canvas, and STP.
- **Type:** Framework.
- **Originator:** Converged practice; the "messaging house" and message-hierarchy models are standard across PMM training (Pragmatic Institute, Product Marketing Alliance).
- **What it does:** A hierarchy that turns positioning into usable copy: a top-line value proposition, three to four supporting value pillars, and proof points beneath each. The connective tissue between a positioning statement and campaign copy, which the KB currently jumps over.
- **Proposed home:** Category 2 (Positioning & Messaging).
- **Why it matters:** Fills the gap between the positioning frameworks (Category 2) and go-to-market execution (Category 4). High priority.

### A12. Value Messaging / Features-Advantages-Benefits (FAB) ladder
- **Type:** Framework.
- **Originator:** Classical sales and marketing technique; formalised in value-selling literature.
- **What it does:** Translates a raw feature into the advantage it creates and the benefit the buyer feels, so messaging leads with outcomes rather than specs.
- **Proposed home:** Category 2, potentially as a section within the Message Architecture entry rather than a standalone framework (decide during build to avoid a thin entry).

### A13. Command of the Message (value-selling messaging discipline)
- **Type:** Methodology.
- **Originator:** Force Management.
- **What it does:** A discipline for building buyer-centric messaging around required capabilities, differentiators, and quantified value, then embedding it across sales conversations. Bridges messaging and sales enablement.
- **Proposed home:** Category 2 or a new Sales Enablement category (see Theme 7).
- **Overlap/scope note:** Vendor-originated methodology; include with a clear "PMM's role" framing (PMM authors the value messaging; sales executes it), consistent with how the backlog treats MEDDIC.

## Theme 6: Pricing and packaging (extends Category 8)

Category 8 currently holds Good-Better-Best, Van Westendorp PSM, and Value Metric/WTP. These extend it with more rigorous research methods and additional packaging models.

### A14. Conjoint Analysis
- **Type:** Methodology.
- **Originator:** Paul Green and V. Srinivasan, 1970s.
- **What it does:** A trade-off-based survey method that infers how buyers value individual features and price levels by asking them to choose between bundles. More rigorous (and more resource-intensive) than Van Westendorp.
- **Proposed home:** Category 8 (Pricing & Packaging).
- **Overlap/scope note:** Position on the spectrum against Van Westendorp (cheap and fast, whole-product price) and Value Metric/WTP (what to charge for); conjoint answers "how much is each feature worth".

### A15. Gabor-Granger
- **Type:** Methodology.
- **Originator:** André Gabor and Clive Granger, 1960s.
- **What it does:** A direct method for finding the revenue-maximising price by testing willingness to buy at ascending price points. Complements Van Westendorp (which finds an acceptable range, not a revenue-optimal point).
- **Proposed home:** Category 8.

### A16. Usage-Based / Consumption Pricing Model
- **Type:** Model.
- **Originator:** Converged SaaS practice; documented by OpenView and a16z.
- **What it does:** A pricing model where customers pay for what they consume (API calls, compute, seats-in-use) rather than a flat subscription. Covers when it fits, how it interacts with packaging, and its revenue-predictability trade-offs.
- **Proposed home:** Category 8.

## Theme 7: Sales enablement

Sales enablement is currently only touched tangentially (a step inside the 10-Step process). It is a candidate for its **own category** if two or more of the following are built.

### A17. Competitive Battlecard Framework
- **Type:** Framework.
- **Originator:** Converged practice; documented by Crayon, Klue, and Product Marketing Alliance.
- **What it does:** A standard structure for a one-page competitive battlecard (their pitch, our counter, landmines to plant, objection handling, proof points) that sales can use live in a deal.
- **Proposed home:** Category 3 (Competitive Strategy) or a new Sales Enablement category. High priority; directly fills the enablement gap and builds on the existing Competitive Intelligence framework.

### A18. Buyer's Journey Content Map
- **Type:** Framework.
- **Originator:** Converged content-marketing and enablement practice.
- **What it does:** Maps enablement and marketing content to buyer-journey stages (awareness, consideration, decision, and post-sale) so PMM can spot and fill gaps in the collateral sales needs at each stage.
- **Proposed home:** New Sales Enablement category, or Category 5 (Lifecycle & Workflow).

### A19. Sales Enablement Maturity Model
- **Type:** Model.
- **Originator:** Converged practice (Sales Enablement Society, Highspot, Pragmatic Institute).
- **What it does:** A crawl/walk/run model for the enablement function (ad hoc, organised, optimised, transformative) that a PMM can use to diagnose where their enablement stands and what to build next.
- **Proposed home:** New Sales Enablement category, or Category 7 (Strategy & Planning).

---

## Summary and prioritisation

| # | Candidate | Type | Proposed home | Priority | Gap filled |
|---|-----------|------|---------------|----------|------------|
| A11 | Message Architecture / Messaging House | Framework | Cat 2 | ✅ **Built** | Positioning-to-copy gap |
| A17 | Competitive Battlecard Framework | Framework | Cat 3 / new Sales Enablement | **High** | Sales enablement |
| A6 | Voice of the Customer Programme | Methodology | Cat 1 | ✅ **Built** | Continuous VoC |
| A9 | Dunford 10-Step Positioning Process | Methodology | Cat 2 | **High** | Positioning process |
| A5 | GTM vs PMM primer | Primer | new concepts/ | **High** | Scope clarity |
| A1 | GTM Motion Model | Model | Cat 4 | Medium | Motion selection |
| A2 | Product-Led Growth | Methodology | Cat 4 | Medium | PLG motion |
| A7 | JTBD Switch Interview Method | Methodology | Cat 1 | Medium | VoC research method |
| A14 | Conjoint Analysis | Methodology | Cat 8 | Medium | Pricing rigour |
| A18 | Buyer's Journey Content Map | Framework | new Sales Enablement | Medium | Enablement content |
| A3 | ICP Development Methodology | Methodology | Cat 1 | Medium | Operational targeting |
| A8 | Kano Model | Framework | Cat 1 / 6 | Medium | Feature prioritisation |
| A13 | Command of the Message | Methodology | Cat 2 | Medium | Value-selling messaging |
| A4 | Bullseye (traction channels) | Framework | Cat 4 | Lower | Channel selection |
| A10 | Perceptual Map (2x2) | Framework | Cat 3 | Lower | Visual positioning |
| A12 | FAB / Value Messaging ladder | Framework | Cat 2 | Lower | Feature-to-benefit |
| A15 | Gabor-Granger | Methodology | Cat 8 | Lower | Revenue-optimal price |
| A16 | Usage-Based Pricing Model | Model | Cat 8 | Lower | Consumption pricing |
| A19 | Sales Enablement Maturity Model | Model | new Sales Enablement | Lower | Enablement diagnosis |

All 19 candidates will be built. The priority column sets the order of work, not whether an entry is included; "Lower" means "build later", not "maybe". Work top-down from the "High" batch.

**First batch (the five "High" candidates):** Message Architecture ✅, Competitive Battlecard, Voice of the Customer Programme ✅, Dunford 10-Step Positioning Process, and the GTM vs PMM primer. Together these fill the most-cited gaps, exercise every new content type (Framework, Methodology, Model, and Primer), and prove the documentation changes in Part B before the collection grows further. Message Architecture (Framework) and Voice of the Customer (Methodology) are built as of 2026-07-21, exercising the Framework and Methodology templates; Competitive Battlecard (Model or Framework), the Dunford process (Methodology), and the GTM vs PMM primer (Primer) remain in the batch.

**New categories to stand up as their entries are built:**
- **Sales Enablement** (a new Category 9) to house A17, A18, and A19.
- **Voice of the Customer** stays inside Category 1 (Market & Customer Understanding); A6 and A7 are tagged there rather than given a single-theme category, consistent with the guidance against thin category files.

---

# Part B: Documentation plan (keeping the KB consistent as methodologies arrive)

The KB has been consistent because every entry is a framework with the same six sections. Adding methodologies, models, and primers breaks that uniformity unless the documentation gives them a place. The following changes keep the collection coherent. They are the prerequisite work: **a future session should apply Part B before, or alongside, building the first Part A candidate.**

## B1. Define a content-type vocabulary

Introduce four content types and define them once, in CLAUDE.md and the (still to be created) GLOSSARY.md:

- **Framework:** a structured model or template you apply to a specific decision or artefact. Has a clear input and output. Examples: STP, Value Proposition Canvas, Good-Better-Best.
- **Methodology:** a repeatable practice or process you run over time (continuously or as a project), often involving cadence, roles, and iteration. Examples: Win/Loss Analysis, Voice of the Customer, the Dunford positioning process, conjoint analysis.
- **Model:** a descriptive map or taxonomy that helps you classify a situation rather than produce an artefact. Examples: GTM Motion Model, Kano Model, a maturity model.
- **Primer:** an explainer that builds understanding but is not something you "apply" (no "How to apply it" step). Example: the GTM vs PMM primer.

This vocabulary is the backbone of every other change below.

## B2. Declare a type on every entry

Add a `**Type:**` line to the top of each entry, directly under the H2 title and above "What it is". Backfill the existing 26 entries. Most are Frameworks; the following are more accurately Methodologies and should be re-tagged (not moved): 10-Step PMM Process, 7-Step PMM Framework, 3-Step PMM Strategy, PMM Lifecycle Management, GTM Motion Framework, Complete GTM Workflow Stages, Win/Loss Analysis, Competitive Intelligence & Positioning Update, Feature Adoption, and T2D3. Retagging is a labelling change only; nothing moves category.

## B3. A methodology section template (alongside the framework one)

The six-section framework structure mostly transfers, but methodologies need process, cadence, and often maturity. Document both templates in CLAUDE.md:

**Framework entry (unchanged):** What it is → When to use it → How to apply it → Example → Pitfalls → See also.

**Methodology entry (variant):** What it is → When to use it → **How to run it** (process steps) → **Cadence & ownership** (who runs it, how often, what triggers a cycle) → **Maturity stages** (optional; crawl/walk/run) → Example → Pitfalls → See also.

**Model entry:** What it is → When to use it → **How to read it** (the axes/categories and what each means) → How to apply it (the decision it informs) → Example → Pitfalls → See also.

**Primer entry:** What it is → Why it matters → **Key distinctions** → **Where PMM fits** → See also. No "How to apply it", no Example/Pitfalls required.

Word-count guidance (1000-1500 words) still applies to Frameworks, Methodologies, and Models. Primers may be shorter (500-1000 words); note this exception in CLAUDE.md.

## B4. Where methodologies live

**Keep methodologies inside the existing eight workflow categories, tagged by type.** Do not create a separate `methodologies/` tree. The KB's organising principle (CLAUDE.md decision log) is workflow stage, not content type; splitting frameworks and methodologies into separate silos would break that and force readers to look in two places for one workflow stage. A VoC methodology belongs in "Market & Customer Understanding" next to the STP framework, because that is where the reader is standing when they need it.

Primers are the exception: they are not applyable and do not belong in a workflow category. Give them a `concepts/` directory (or a single CONCEPTS.md) so readers do not expect a "How to apply it".

## B5. Update navigation language and counts

The repository says "26 frameworks" in README.md, INDEX.md, FRAMEWORK-MAP.md, and PROGRESS.md. As mixed content arrives:
- Change the headline from "26 frameworks" to "26 entries" or "frameworks and methodologies", and report a per-type breakdown (e.g., "24 frameworks, 8 methodologies, 3 models, 2 primers").
- Add a **Type** column to the INDEX.md category tables and the README.md summary table.
- This KB has already suffered one count-drift error (22 vs 26, corrected 2026-07-19). Mixed types raise that risk, so B6 makes counting a checklist step.

## B6. A cross-doc consistency checklist

Codify, in CLAUDE.md's Quality Gates, the full set of docs that must be updated whenever an entry is added or retagged, so nothing drifts:
- [ ] The category file (entry written to the correct template for its type)
- [ ] Type declared and matching the entry's structure
- [ ] INDEX.md (row added, with Type column)
- [ ] README.md (summary table and headline count/breakdown)
- [ ] FRAMEWORK-MAP.md (dependencies and any new workflow scenario)
- [ ] BY-SITUATION.md (if the entry maps to a situation)
- [ ] PROGRESS.md (version-history entry and metrics)
- [ ] This plan and FRAMEWORK-BACKLOG.md (mark the candidate built)

## B7. CLAUDE.md additions

Fold B1-B6 into CLAUDE.md as durable standards:
- A "Content Types" subsection under Writing Standards (the four definitions).
- The three additional section templates (Methodology, Model, Primer) next to the existing framework structure.
- A rule: "Every entry declares a Type. Methodologies, models, and primers use their own section template."
- The primer word-count exception.
- The cross-doc consistency checklist added to Quality Gates.

## B8. Consider renaming FRAMEWORK-BACKLOG.md later

Once methodologies are an accepted part of the KB, `FRAMEWORK-BACKLOG.md` and this `ENRICHMENT-PLAN.md` cover overlapping ground under framework-centric names. A future session may consolidate them into a single `BACKLOG.md` (candidates) once the first batch is built. Not now; renaming before the vocabulary is in use would only add churn.

---

## How a future session should use this document

1. **Do Part B first (or alongside).** Add the content-type vocabulary and templates to CLAUDE.md before building an entry, so the first methodology is written to a documented standard rather than inventing one. (The four-type vocabulary and templates are already in CLAUDE.md as of 2026-07-21; verify and extend as needed.)
2. **Build in priority order, starting with the "High" batch** in the Part A summary table. Every candidate is in scope; the priority column is the sequence, not a filter.
3. **Resolve the overlap/scope note** for that candidate before writing (several candidates deliberately sit next to an existing entry and must be differentiated, not duplicated, per CLAUDE.md).
4. **Write to the correct template for the type**, hit the word-count gate, British English, no em dashes.
5. **Run the B6 checklist** so every navigation doc and count stays consistent.
6. **Mark the candidate built here and in FRAMEWORK-BACKLOG.md**, and log it in PROGRESS.md.

The gap these candidates fill has been confirmed and the build is approved: all 19 will be added to the knowledge base. Two are built as of 2026-07-21 (A11 Message Architecture, A6 Voice of the Customer Programme); 17 remain. This plan is the build queue, worked top-down from the "High" batch, until every entry is built.
