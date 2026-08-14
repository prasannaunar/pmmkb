# New Sources Gap Analysis: PMA Advanced Course + calven.ai

**Logged:** 2026-08-14
**Status:** Queue closed 2026-08-14. Six of eight candidates built (MAP Model, RFM Model, MaxDiff Analysis, CI Program Maturity Model, VARS Framework, Time to Value Framework); two rejected (Competitive Advantage Moat Test, PM/PMM Collaboration Maturity Model). No candidates remain open.
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

### 4. CI Program Maturity Model — ✅ **BUILT (2026-08-14)**
- **Built as:** Category 3 (Competitive Strategy), `frameworks/03-competitive-strategy.md`, using the Model template. ~1,570 words; cross-linked to the Sales Enablement Maturity Model, Competitive Intelligence & Positioning Update Framework, Competitive Battlecard Framework, and Bowman's Strategic Clock.
- **Sourcing resolved:** The gate on this candidate (find a source beyond the uncited PMA deck) was cleared. Built citing Klue's *Competitive Enablement Maturity Model* (2021), developed with SCIP (Strategic and Competitive Intelligence Professionals) from the Klue/SCIP 2021 Competitive Enablement Report, five stages: Ad Hoc, Adopting, Impacting, Influencing, Transforming. Independent corroboration that CI maturity models converge on the same underlying dimensions came from a 2023 systematic review in the *Journal of Intelligence Studies in Business*, which surveyed fourteen published CI maturity models. The PMA deck's own four-stage version (Early/Developing/Mature/Optimized) was not used; the entry builds from the better-sourced five-stage Klue/SCIP version instead, adapted rather than reproduced verbatim, in the same spirit as the KB's existing Forrester Customer Advocacy Model.
- **What it does:** A five-stage model diagnosing how mature a competitive intelligence function is, scored across repository/process, distribution to sales, cross-functional reach, and measurement.
- **Why it's a genuine gap:** Confirmed. Category 3 previously had no maturity model at all; every other function-maturity entry in the KB (Sales Enablement, Customer Advocacy) had one.

### 5. Time to Value Framework — ✅ **BUILT (2026-08-14)**
- **Built as:** Category 6 (Product Experience & Adoption), `frameworks/06-product-experience-adoption.md`, using the Model template. ~1,600 words; cross-linked to the Customer Onboarding Maturity Framework, Product-Led Growth, NPS & Feedback Loop Framework, and the RFM Model.
- **Sourcing resolved:** As flagged, the PMA deck's specific four-way acronym split (TTBV/TTEV/ITTV/LTTV) was not independently corroborated anywhere and was not used. Built instead on the well-documented, converged industry distinction between Time to First Value (TTFV) and Time to Core Value, closely associated with Lincoln Murphy's customer-success writing at Sixteen Ventures, plus the activation-rate-versus-time-to-value and aha-moment-versus-activation-event distinctions, both of which are converged practice across customer-success and PLG literature (Gainsight, ProfitWell).
- **What it does:** Breaks "time to value" into TTFV and Time to Core Value, plus the activation-rate/TTV and aha-moment/activation-event distinctions, so a team stops treating the phrase as one vague number.
- **Why it's a genuine gap:** Confirmed. The Onboarding Maturity Framework already named "time-to-first-value" as a metric without breaking it into sub-types; this entry supplies that breakdown with a validated methodology for choosing the activation event and Core Value threshold.

### 6. VARS Framework (Validate, Acknowledge, Reframe, Specify) — ✅ **BUILT (2026-08-14)**
- **Built as:** Category 9 (Sales Enablement), `frameworks/09-sales-enablement.md`, using the Framework template. ~1,400 words; cross-linked to the Competitive Battlecard Framework, CI Program Maturity Model, Win/Loss Analysis Framework, and Command of the Message.
- **Sourcing resolved:** Independent sourcing found. VARS is documented on the Competitive Intelligence Alliance's site ("How to Deliver Competitive Intelligence to Sales and Customer Success"), credited as material presented by Alex McDonnell as part of the Alliance's CI: Masters certification programme, an identifiable practitioner and a named, independent organisation, not calven.ai or the PMA deck. This clears the citation gate the candidate was originally held on.
- **What it does:** A four-step live-conversation technique for handling a buyer's direct competitor question: Validate their concern, Acknowledge the competitor's real strength, Reframe the problem, Specify a concrete proof point.
- **Why it's a genuine gap:** Confirmed. The Competitive Battlecard Framework is the prepared content; nothing in the KB documented the delivery technique for using it live without sounding defensive.

### 7. PM/PMM Collaboration Maturity Model — ❌ **Rejected (researched 2026-08-14)**
- **Source:** PMA Advanced, Module 17 (Cross-functionality). No source cited in the deck.
- **Research finding:** Extensive independent searching (targeted queries for the PMA deck's specific stage names, "ambiguous roles," "tentative collaboration," "working relationship," "true partnership," against Reforge, Product Marketing Alliance, Productschool, and general web search) found no independent source for this specific four-stage model anywhere. Real content exists on the general PM/PMM relationship (role differentiation, why the partnership matters), and separately on generic product-management maturity models, but nothing ties the two together into a named, staged maturity model matching the PMA deck's terminology.
- **Why it's rejected:** This is the same failure mode as the PMMC Framework, rejected earlier in this document: a course-proprietary model with no external originator and no independent corroboration. CLAUDE.md's citation rule requires a defensible source for a named framework's origin; none exists here beyond the course itself.
- **Recommended alternative:** if a future entry needs to cover the PM/PMM relationship, the material already exists as context inside this KB's PMM Team Scaling Framework (Category 7) and the GTM Strategy vs Product Marketing primer's ownership map; a short cross-reference there is more defensible than a standalone, uncited maturity model.
- **Confidence:** High confidence in the rejection.

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
| 4 | CI Program Maturity Model | Model | Cat 3 | High (resolved) | ✅ Built 2026-08-14 |
| 5 | Time to Value Framework | Model | Cat 6 | High (resolved) | ✅ Built 2026-08-14 |
| 6 | VARS Framework | Framework | Cat 9 | High (resolved) | ✅ Built 2026-08-14 |
| 7 | PM/PMM Collaboration Maturity Model | Model | Cat 7 | — | ❌ Rejected 2026-08-14 |
| 8 | Competitive Advantage Moat Test | Framework | Cat 3 | — | ❌ Rejected 2026-08-14 |

**Queue closed 2026-08-14.** All eight candidates resolved: six built, two rejected. Every "sourcing gate" candidate cleared it by locating an independent source beyond the PMA deck (Klue/SCIP for candidate 4, Lincoln Murphy/Sixteen Ventures plus converged CS/PLG literature for candidate 5, the Competitive Intelligence Alliance/Alex McDonnell for candidate 6), except candidate 7, where extensive searching found no independent source at all, and candidate 8, rejected for ownership fit and duplication rather than citation. No candidates remain open in this document.
