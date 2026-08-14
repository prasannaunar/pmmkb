# New Sources Gap Analysis: PMA Advanced Course + calven.ai

**Logged:** 2026-08-14
**Status:** Candidates 1–3 (MAP Model, RFM Model, MaxDiff Analysis) built 2026-08-14. Candidate 8 (Competitive Advantage Moat Test) researched and rejected 2026-08-14, not merely deferred; see its entry below. Candidates 4–7 remain queued.
**See also:** [FRAMEWORK-BACKLOG.md](FRAMEWORK-BACKLOG.md), [ENRICHMENT-PLAN.md](ENRICHMENT-PLAN.md), and [EXTERNAL-REPO-GAP-ANALYSIS.md](EXTERNAL-REPO-GAP-ANALYSIS.md), the three prior candidate queues (all fully built). This document follows the same ranked-candidate format and assumes the "PMM vs GTM Scope" north-star and the Ownership-field requirement already in CLAUDE.md.

---

## Why this research happened

The repo owner supplied two new sources to scan for gaps: an index of every named framework/methodology/model/primer referenced across the "Product Marketing Certified: Advanced" course (Modules 1–20, plus the Course Pack and template files), and calven.ai's public resources page. Both were screened against the existing 60 entries and the fully-built prior queues using the same rules that shaped every earlier pass:

1. **The inclusion/exclusion test decides ownership fit, not topical relevance.** A candidate becomes a full entry only if a PMM could plausibly run it and produce its output at some company stage, even if another function signs off.
2. **The citation rule decides whether a candidate can be built at all.** CLAUDE.md requires a defensible source for any named framework's origin. Several course-deck items are the course provider's own uncredited proprietary system (the same failure mode that sank RICE Prioritization in EXTERNAL-REPO-GAP-ANALYSIS.md, and PMMC Framework here) or a single vendor's marketing page with no named originator (calven.ai's rubric-style items).
3. **"No duplicate concepts under different names."** Most of the calven.ai page and a large share of the PMA index restate frameworks already in the KB (Message Architecture, Value Proposition Canvas, the Competitive Battlecard Framework, Van Westendorp, GBB, Conjoint Analysis) under different labels; these are not repeated below.

Full source material: the uploaded "Frameworks and Models Index — PMA Advanced Course" file, and a fetch of calven.ai/resources (a thin marketing page; treat its "frameworks" as vendor copy, not independently verified methodology, until a builder corroborates them).

---

## Ranked candidates

### 1. MAP Model (Measure → Analyze → Prioritize) — ✅ **BUILT (2026-08-14)**
- **Source:** PMA Advanced, Module 7 (Segmentation), attributed to Tamara Grominsky, Founder of PMM Camp.
- **Originator/lineage:** Named, identifiable practitioner; PMM Camp is a real, independently documented PMM training brand.
- **What it does:** A three-stage method for finding the best customers to double down on: measure segment volume, analyse segment performance (revenue, retention, expansion), then prioritise which segments are worth further investment.
- **Proposed home:** Category 1 (Market & Customer Understanding). **Type: Methodology.**
- **Why it's a genuine gap:** STP tells you how to segment and target in the abstract; nothing in the existing 60 tells you how to rank segments you already have data on against each other. Distinct from the ICP Development Methodology, which scores individual accounts against a fixed profile rather than ranking segments.
- **Inclusion-test:** Pass. A PMM plausibly owns this analysis and the resulting prioritisation call.
- **Confidence:** High.

### 2. RFM Model (Recency, Frequency, Monetary value) — ✅ **BUILT (2026-08-14)**
- **Source:** PMA Advanced, Module 16 (Retention).
- **Originator/lineage:** No single named originator in the PMA deck, but RFM is a decades-old, independently documented direct-marketing and retention-analytics staple (traceable to database-marketing literature from the 1990s onward, well before any single vendor).
- **What it does:** Segments customers by how recently they engaged, how often, and how much value they represent, to separate valuable/at-risk customers from the rest of the base for retention and advocacy targeting.
- **Proposed home:** Category 6 (Product Experience & Adoption), alongside NPS, Win/Loss, and Kano. **Type: Model.**
- **Why it's a genuine gap:** The KB's retention coverage currently runs through NPS/CSAT sentiment and the Forrester Customer Advocacy Model's stage-based maturity; nothing classifies customers by behavioural value the way RFM does, which is the standard input for deciding who gets an advocacy ask versus a save-play.
- **Inclusion-test:** Pass. PMM plausibly runs RFM segmentation to feed advocacy/reference targeting even where CS or RevOps owns the resulting save-play execution.
- **Confidence:** High.

### 3. MaxDiff Analysis (Best-Worst Scaling) — ✅ **BUILT (2026-08-14)**
- **Source:** PMA Advanced, Module 12 (Pricing); also referenced in passing inside the KB's own existing Conjoint Analysis entry's pitfalls section (`frameworks/08-pricing-packaging.md:186`) as a pre-study technique, but never documented as its own method.
- **Originator/lineage:** Jordan Louviere (with Woodworth), early 1990s; a well-established discrete-choice research technique used widely in market research since.
- **What it does:** Presents respondents with sets of features/attributes and asks which is most and least valuable, repeated across sets, to produce a forced-ranking of what customers value most without the cost of a full conjoint study.
- **Proposed home:** Category 8 (Pricing & Packaging), rounding out the existing pricing-research spectrum (Van Westendorp → Value Metric/WTP → Conjoint Analysis → Gabor-Granger). **Type: Methodology.**
- **Why it's a genuine gap:** The KB's own Conjoint Analysis entry already gestures at MaxDiff as a cheaper alternative without documenting it; this closes that internal cross-reference into a real entry rather than a pitfalls-section aside.
- **Inclusion-test:** Pass. Same ownership profile as the KB's existing Conjoint Analysis and Gabor-Granger entries.
- **Confidence:** High.

### 4. CI Program Maturity Model
- **Source:** PMA Advanced, Module 5 (Competitive Intelligence). No source cited in the deck.
- **Originator/lineage:** Not independently sourced in the course material. Structurally identical to maturity-model conventions used across the CI/competitive-intelligence vendor space (Klue, Crayon, SCIP — the Strategic and Competitive Intelligence Professionals association publish comparable stage models), but a builder must locate and cite an external, converged source before writing this up, the same bar the existing Sales Enablement Maturity Model met (cited to Sales Enablement Society, Highspot, Pragmatic Institute) rather than a single course deck.
- **What it does:** A four-stage model (Early → Developing → Mature → Optimized) describing how a competitive intelligence function matures, scored across process, tooling, and cross-functional distribution.
- **Proposed home:** Category 3 (Competitive Strategy), the direct structural sibling of the Sales Enablement Maturity Model in Category 9. **Type: Model.**
- **Why it's a genuine gap:** Category 3 has no maturity model at all; every other function-maturity entry in the KB (Sales Enablement, Customer Advocacy) has one.
- **Inclusion-test:** Pass, conditional on sourcing. Do not build directly off the PMA deck alone; corroborate with SCIP or a named vendor source first, or this repeats the PMMC Framework rejection below.
- **Confidence:** Medium — gated on finding a citable source independent of the course.

### 5. Time to Value Framework (TTBV, TTEV, ITTV, LTTV)
- **Source:** PMA Advanced, Module 13 (Metrics). No source cited in the deck.
- **Originator/lineage:** Not independently sourced in the course material. "Time to value" as a general SaaS onboarding concept is extremely well documented (Gainsight, Totango, ProfitWell); the specific four-way split (Time to Basic/First/Initial/Last Value) is less commonly seen as a named, converged industry framework and needs corroboration.
- **What it does:** Breaks "time to value" into four measurable sub-metrics tracking how quickly a customer reaches different value milestones after purchase.
- **Proposed home:** Category 6 (Product Experience & Adoption), alongside the Customer Onboarding Maturity Framework. **Type: Model.**
- **Why it's a genuine gap:** The Onboarding Maturity Framework already names "time-to-first-value" as a metric but doesn't break it into sub-types; this would formalise that.
- **Inclusion-test:** Pass, conditional on sourcing. A builder should verify the four-way split against an independent source or simplify to the well-documented single "time to value" metric with a citation, rather than presenting the four-part acronym set as an established industry standard on the PMA deck's authority alone.
- **Confidence:** Medium — gated on finding a citable source independent of the course.

### 6. VARS Framework (Validate, Acknowledge, Reframe, Specify)
- **Source:** PMA Advanced, Module 5 (Competitive Intelligence). No source cited in the deck.
- **Originator/lineage:** Not independently sourced in the course material.
- **What it does:** A four-step conversational technique for handling live customer questions about competitors: validate the question, acknowledge the competitor, reframe the comparison on your own terms, and specify your differentiated proof point.
- **Proposed home:** Category 9 (Sales Enablement), as the live-conversation counterpart to the Competitive Battlecard Framework (content) already there. **Type: Framework.**
- **Why it's a genuine gap:** The Battlecard Framework is the artefact; nothing in the KB documents the conversational technique for using it in the room.
- **Inclusion-test:** Pass, conditional on sourcing. This is uncited in its only known source; a builder must find independent corroboration (sales-methodology literature on objection reframing uses similar four-step patterns, e.g. Feel-Felt-Found) before building, or risk repeating the PMMC Framework problem below.
- **Confidence:** Medium-low — gated on finding a citable source independent of the course.

### 7. PM/PMM Collaboration Maturity Model
- **Source:** PMA Advanced, Module 17 (Cross-functionality). No source cited in the deck.
- **Originator/lineage:** Not independently sourced in the course material.
- **What it does:** A four-stage model (Ambiguous roles → Tentative collaboration → Working relationship → True partnership) describing how the Product Management/Product Marketing relationship matures at a company.
- **Proposed home:** Category 7 (Strategy & Planning), alongside the PMM Team Scaling Framework. **Type: Model.**
- **Why it's a genuine gap:** No cross-functional maturity model exists anywhere in the KB; every other maturity model here is single-function (Sales Enablement, Customer Advocacy, and the proposed CI Program Maturity Model above).
- **Inclusion-test:** Pass, conditional on sourcing. Same gate as candidates 4-6: verify against something beyond the course deck (e.g. published PM/PMM operating-model content from Reforge, Pragmatic Institute, or a named practitioner) before building.
- **Confidence:** Medium-low — gated on finding a citable source independent of the course.

### 8. Competitive Advantage Moat Test — ❌ **Rejected (researched 2026-08-14)**
- **Source:** calven.ai/resources (vendor marketing page).
- **Originator/lineage:** calven.ai itself has no named originator or visible methodology beyond a page description. Independent research found two legitimate, well-documented traditions behind the underlying "moat" concept: Warren Buffett's economic moat, as documented by Morningstar and in Pat Dorsey, *The Little Book That Builds Wealth* (2008); and Hamilton Helmer, *7 Powers: The Foundations of Business Strategy* (2016), which explicitly frames itself as a durability test (does a structural power survive a competitor actively trying to arbitrage it away?). Both are real and citable, so the original citation concern is solvable.
- **What it does:** An assessment for separating genuinely defensible competitive advantages ("moats") from superficial differentiators that a competitor can copy quickly.
- **Why it's rejected, not just gated on sourcing:** The blocker turned out to be ownership fit and duplication, not citation, the same reasoning that sank RICE Prioritization in EXTERNAL-REPO-GAP-ANALYSIS.md. Buffett/Morningstar's version is a financial-analysis tool (sustained ROIC above WACC over 10+ years), Finance/IR-owned, not something PMM runs. Helmer's 7 Powers operates at whole-business-model strategy (scale economies, network effects, cornered resources), overlapping two entries already in the KB, Category Design and Playing to Win, both of which already sit at that strategic-choice altitude. Most importantly, the actual PMM-relevant job either version would do for a single claimed differentiator, testing whether it survives a competitor trying to copy it, is already built: the existing Product Differentiation Strategy Framework's MUD (Meaningful, Unique, Defensible) scoring has a dedicated Defensibility criterion and a named step 8 stress-test ("ask specifically how a well-resourced competitor could copy the differentiator within twelve months"), with a matching pitfall and recovery. A standalone Moat Test entry would restate that Defensibility axis under different terminology, which CLAUDE.md's "no duplicate concepts under different names" rule exists to block.
- **Recommended alternative:** implemented 2026-08-14. Product Differentiation Strategy Framework's "Further reading" now cites Buffett/Morningstar and Helmer directly as the broader moat literature its Defensibility criterion draws on, plus a short note explaining why a standalone Moat Test entry was considered and rejected. This matches the recommended-alternative pattern used for RICE: a cross-reference inside the framework that already does the job, not a new entry.
- **Inclusion-test:** Fail (ownership fit and duplication, not citation).
- **Confidence:** High confidence in the rejection. This is now a settled no, not an open question.

---

## Rejected — not standalone entries (glossary coverage added instead, see GLOSSARY.md)

These were screened out under the inclusion/exclusion test or the citation rule, matching the reasoning already established for RICE Prioritization in EXTERNAL-REPO-GAP-ANALYSIS.md. Where the KB had no coverage of the underlying term at all, a short definition was added to GLOSSARY.md instead of a full entry (see that file's changelog-equivalent, its "Contributing a Term" section, for the standing convention this follows).

- **RICE, ICE Method** (PMA Mod. 2, 4) — Prioritization scoring models owned by Product/Roadmapping by default; same ownership-fit rejection as RICE Prioritization in EXTERNAL-REPO-GAP-ANALYSIS.md. Added to GLOSSARY.md.
- **PMMC Framework** (PMA Mod. 3) — The course provider's own uncredited proprietary lifecycle model; fails the citation rule outright (single-source, no external originator), the same reason growthack88/growth-marketing-os's frameworks were rejected in EXTERNAL-REPO-GAP-ANALYSIS.md. Not added anywhere; too thin and vendor-specific even for a glossary line.
- **GROW model** (PMA Mod. 15) — Sales-coaching framework, sales-manager owned by default, not PMM. Added to GLOSSARY.md as an adjacent term given Category 9 (Sales Enablement) already exists.
- **Gartner Magic Quadrant, Forrester Wave, Gartner Hype Cycle** (PMA Mod. 6, 11) — The analyst's product, not something PMM runs; the existing Analyst Relations Tiering & Cadence Model already covers PMM's actual job around them, and the KB's own entries reference "Magic Quadrant/Wave cycles" without ever defining the terms. Added to GLOSSARY.md.
- **SWOT Analysis, PESTLE Analysis** (PMA Mod. 7, 9, 11) — Generic strategic-analysis tools, not PMM-specific enough for a standalone entry, but both are referenced or illustrated inside existing KB entries (Battlecard Framework's pitfalls mentions "SWOT tables") without definition. Added to GLOSSARY.md.
- **Power-Interest Matrix** (PMA Mod. 11) — Generic stakeholder-management tool, not PMM-owned or PMM-specific. Added to GLOSSARY.md given cross-functional stakeholder work recurs throughout Category 7 and 9.
- **Buyer Persona, Buying Center Model** (PMA Mod. 4, 18) — Well-established B2B terms the KB uses implicitly (ICP Development Methodology assumes personas exist) without ever defining either. Added to GLOSSARY.md.
- **Churn rate formula, Sales velocity formula, Customer Retention Cost (CRC), CES (Customer Effort Score)** (PMA Mod. 9, 13, 15, 16) — Standard named metrics/formulas referenced in course context that parallel metrics already in GLOSSARY.md's Metrics & Financial Terms group (NRR, GRR, Win rate) but weren't themselves defined. Added to GLOSSARY.md.
- **Price Waterfall, Cost-Plus Pricing, Penetration Pricing, Price Skimming, Freemium Pricing, Dynamic Pricing, Price Elasticity of Demand** (PMA Mod. 12) — Pricing-strategy vocabulary distinct from the KB's existing pricing-research methodologies (Van Westendorp, Conjoint, Gabor-Granger, which are about *how to find* a price, not named pricing *strategies*). None rise to a standalone 1000+ word entry on their own (each is a single well-known concept, not a repeatable process with steps), but the KB uses "pricing strategy" language without ever naming these. Added to GLOSSARY.md as a new Pricing Strategy Types sub-group.
- **Message Map, Messaging Framework, Value Proposition Template, Competitor Analysis Template, Battle Card, 5-Test Rubric, 4-Type Framework** (calven.ai) — Restate Message Architecture, Value Proposition Canvas, and the Competitive Battlecard Framework already in the KB under different labels ("no duplicate concepts under different names"). Already fully covered; no glossary action needed.
- **Retention vs Loyalty distinction** (PMA Mod. 16, sourced to Noah Fleming) — A named conceptual distinction, not a process; too thin for a standalone entry but genuinely useful given NPS, Win/Loss, and the Forrester Customer Advocacy Model all sit in this territory without ever separating the two terms. Added to GLOSSARY.md.
- **A/B Testing, Mixed-Methods Approach, Cluster analysis, Boolean Search Operators, Substitution/Income Effect** — Generic research/statistics/search vocabulary, not PMM-specific and not referenced anywhere in the KB's own text. Left out of the glossary entirely; adding every general research or economics term surfaced by a source would drift the glossary away from "terms this knowledge base uses" per its own contributing convention.

---

## Summary table

| # | Candidate | Type | Proposed home | Confidence | Status |
|---|---|---|---|---|---|
| 1 | MAP Model | Methodology | Cat 1 | High | ✅ Built 2026-08-14 |
| 2 | RFM Model | Model | Cat 6 | High | ✅ Built 2026-08-14 |
| 3 | MaxDiff Analysis | Methodology | Cat 8 | High | ✅ Built 2026-08-14 |
| 4 | CI Program Maturity Model | Model | Cat 3 | Medium (sourcing gate) | Queued |
| 5 | Time to Value Framework | Model | Cat 6 | Medium (sourcing gate) | Queued |
| 6 | VARS Framework | Framework | Cat 9 | Medium-low (sourcing gate) | Queued |
| 7 | PM/PMM Collaboration Maturity Model | Model | Cat 7 | Medium-low (sourcing gate) | Queued |
| 8 | Competitive Advantage Moat Test | Framework | Cat 3 | — | ❌ Rejected 2026-08-14 |

**Build order recommendation:** candidates 1–3, built 2026-08-14. Candidates 4–7 remain queued and need a builder to locate a citation beyond the PMA deck before writing, same standard the existing Sales Enablement Maturity Model and every other entry in this KB already meets. Candidate 8 is a settled no; see its entry above for why, and see the cross-reference now added to Product Differentiation Strategy Framework's "Further reading" instead.
