# Enrichment Plan: Adding Frameworks and Methodologies

**Logged:** 2026-07-21
**Status:** Approved build queue. **All 19 candidates are now built, completing this plan.** All five "High" candidates: A11 Message Architecture and A6 Voice of the Customer Programme (2026-07-21); A17 Competitive Battlecard Framework and A9 Dunford's 10-Step Positioning Process (2026-07-22); A5 the GTM vs PMM primer (2026-07-22). All eight "Medium" candidates: A1 GTM Motion Model (2026-07-22); A2 Product-Led Growth and A7 JTBD Switch Interview Method (2026-07-22); A14 Conjoint Analysis and A18 Buyer's Journey Content Map (2026-07-23); A3 ICP Development Methodology and A8 Kano Model (2026-07-23); A13 Command of the Message (2026-07-24), completing the "Medium" batch. All six "Lower" candidates: A4 Bullseye Framework (2026-07-24); A10 Perceptual Map and A12 Features-Advantages-Benefits (FAB) Ladder (2026-07-25); A15 Gabor-Granger Method and A16 Usage-Based (Consumption) Pricing Model (2026-07-27); **A19 Sales Enablement Maturity Model (2026-07-28), the last candidate, built as the first entry in a new Category 9 (Sales Enablement), `frameworks/09-sales-enablement.md`.** A17 (Competitive Battlecard Framework) and A18 (Buyer's Journey Content Map), originally filed in Category 3 and Category 5 respectively since they were built before Category 9 existed, were consolidated into Category 9 on 2026-07-30 alongside A19 and MEDDIC/MEDDPICC (see PROGRESS.md's 2026-07-30 housekeeping entry). [FRAMEWORK-BACKLOG.md](FRAMEWORK-BACKLOG.md)'s separate queue of 12 candidates from the 2026-07-09 gap analysis is also now fully built.
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

### A1. GTM Motion Model (self-serve / product-led / inside sales / field / partner-channel): ✅ BUILT (2026-07-22)
- **Built as:** Category 4 (Go-to-Market & Launch), `frameworks/04-go-to-market-launch.md`, using the Model template (What it is → When to use it → How to read it → How to apply it → Example → Pitfalls → See also). 1,526 words; cross-linked to the GTM Strategy vs Product Marketing primer, STP, the 3-/7-/10-Step PMM frameworks, Go-to-Market Motion Framework, and T2D3. First entry in the KB to use the Model template.
- **Type:** Model (taxonomy).
- **Originator:** No single author; codified across OpenView, Bessemer Venture Partners, and Winning by Design.
- **What it does:** Classifies the primary ways a company acquires and expands customers, and matches each motion to deal size, sales cycle, and buyer behaviour. Answers "which motion should this product go to market through?" before any launch planning.
- **Proposed home:** Category 4 (Go-to-Market & Launch). Sits upstream of the existing 3-/7-/10-step process frameworks; those describe *how to execute*, this describes *which motion to execute through*.
- **Why it is proven:** Standard vocabulary across growth-stage SaaS and the major VC playbooks for a decade.
- **Overlap/scope note:** Must be positioned as motion *selection*, distinct from the Complete GTM Workflow (which assumes a motion is already chosen). **Build note:** a second, unanticipated overlap surfaced during the build: Category 5 already holds a "Go-to-Market Motion Framework" (launch-execution choreography across channels), whose name is easily confused with this new motion-*selection* model. Resolved by keeping both entries (they answer different questions: which motion, versus how to execute inside it), renaming every shorthand "GTM Motion" reference in FRAMEWORK-MAP.md and BY-SITUATION.md to the existing framework's full name, and cross-referencing both explicitly.

### A2. Product-Led Growth (PLG): ✅ BUILT (2026-07-22)
- **Built as:** Category 4 (Go-to-Market & Launch), `frameworks/04-go-to-market-launch.md`, using the Methodology template (What it is → When to use it → How to run it → Cadence & ownership → Example → Pitfalls → See also). 1,321 words; cross-linked to the GTM Motion Model, Feature Adoption Framework, Customer Onboarding Maturity Framework, and STP.
- **Type:** Methodology.
- **Originator:** Popularised by Wes Bush (*Product-Led Growth*, 2019) and OpenView Partners.
- **What it does:** A go-to-market practice where the product itself drives acquisition, activation, and expansion (free trial or freemium, product-qualified leads, in-product upgrade paths). Run continuously, not as a one-off.
- **Proposed home:** Category 4, or Category 6 (Product Experience & Adoption) given its adoption focus. Recommend Category 4 with strong cross-links to Feature Adoption and Onboarding Maturity.
- **Why it is proven:** Dominant motion for self-serve SaaS (Slack, Calendly, Notion, Figma); extensively documented.
- **Overlap/scope note:** Frame PMM's role specifically (activation messaging, PQL definition, upgrade-path packaging); avoid drifting into product-management territory.

### A3. ICP Development Methodology: ✅ BUILT (2026-07-23)
- **Built as:** Category 1 (Market & Customer Understanding), `frameworks/01-market-customer-understanding.md`, using the Methodology template (What it is → When to use it → How to run it → Cadence & ownership → Example → Pitfalls → See also). 1,479 words; cross-linked to STP, Win/Loss Analysis, Voice of the Customer Programme, and the JTBD Switch Interview Method.
- **Type:** Methodology.
- **Originator:** Converged practice; documented by demandbase, HubSpot, and ABM literature.
- **What it does:** The operational build of an Ideal Customer Profile from firmographic, technographic, and behavioural signals, then its use to focus targeting, messaging, and enablement. A repeatable practice refreshed as the customer base shifts.
- **Proposed home:** Category 1 (Market & Customer Understanding).
- **Overlap/scope note:** STP already defines targeting at a strategic level; this must be framed as the *operational* ICP build (signals, scoring, list-building), not a second segmentation model. **Resolved:** framed explicitly as the layer beneath STP's Targeting step, converting the chosen segment into a weighted, evidence-based account scoring model that sales and marketing operations apply to a specific list, sequential with STP rather than a competing model.

### A4. Bullseye Framework (traction channel selection): ✅ BUILT (2026-07-24)
- **Built as:** Category 4 (Go-to-Market & Launch), `frameworks/04-go-to-market-launch.md`, using the Framework template (What it is → When to use it → How to apply it → Example → Pitfalls → See also). 1,370 words; cross-linked to the GTM Motion Model, the 3-Step Product Marketing Strategy Framework, STP, and Complete GTM Workflow Stages.
- **Type:** Framework.
- **Originator:** Gabriel Weinberg and Justin Mares, *Traction* (2015).
- **What it does:** A structured way to test and pick acquisition channels: brainstorm across 19 channels, rank into an inner/middle/outer ring, run cheap tests, then double down on the one channel that works.
- **Proposed home:** Category 4 (Go-to-Market & Launch).
- **Why it is proven:** Widely taught in startup GTM curricula; a decade of documented use.
- **Overlap/scope note resolved:** Differentiated explicitly from the GTM Motion Model (which selects *how* a company sells: self-serve, PLG, inside sales, field sales, or partner-channel) by framing this framework as the *channel* decision made inside whichever motion the Motion Model selects; also cross-referenced against Complete GTM Workflow Stages, whose Phase 2 already names "identify one primary go-to-market channel" as a step, since this framework is the structured method for making that specific choice.

## Theme 2: GTM vs PMM (a conceptual primer, not a framework)

### A5. "GTM Strategy vs Product Marketing" primer: ✅ BUILT (2026-07-22)
- **Built as:** A new `concepts/` area, `concepts/gtm-strategy-vs-product-marketing.md`, using the Primer template (What it is → Why it matters → Key distinctions → Where PMM fits → See also). 921 words; cross-linked to the GTM Motion Model, the 3-/7-/10-Step PMM frameworks, Complete GTM Workflow Stages, and Quarterly PMM Planning Framework. First entry in the KB to use the Primer template and the first to sit outside the eight workflow categories.
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

### A7. JTBD "Switch" / Timeline Interview Method: ✅ BUILT (2026-07-22)
- **Built as:** Category 1 (Market & Customer Understanding), `frameworks/01-market-customer-understanding.md`, using the Methodology template (What it is → When to use it → How to run it → Cadence & ownership → Example → Pitfalls → See also). 1,327 words; cross-linked to the JTBD Positioning Framework, Voice of the Customer Programme, Win/Loss Analysis Framework, and STP.
- **Type:** Methodology.
- **Originator:** Bob Moesta and Chris Spiek, The Re-Wired Group.
- **What it does:** A specific interview technique for uncovering the real "job" behind a purchase by reconstructing the timeline of a customer's switch from the old solution to the new one. This is the *research method*, distinct from the JTBD *positioning* framework already in Category 2.
- **Proposed home:** Category 1, cross-linked to the existing JTBD Positioning Framework.
- **Overlap/scope note:** Must be clearly differentiated from the existing JTBD entry: that one is about how to position around a job; this is about how to interview to discover it. A good test case for the framework-vs-methodology distinction.

### A8. Kano Model: ✅ BUILT (2026-07-23)
- **Built as:** Category 6 (Product Experience & Adoption), `frameworks/06-product-experience-adoption.md`, using the Framework template (What it is → When to use it → How to apply it → Example → Pitfalls → See also). 1,394 words; cross-linked to STP, Good-Better-Best Packaging Framework, Feature Adoption Framework, and the Voice of the Customer Programme.
- **Type:** Framework.
- **Originator:** Noriaki Kano, 1984.
- **What it does:** Classifies features by their effect on satisfaction (must-be, performance, delighter, indifferent, reverse) so teams prioritise what actually moves customer perception. Useful for PMM in launch messaging and packaging decisions.
- **Proposed home:** Category 1 or Category 6.
- **Category decision:** Built into Category 6, not Category 1, to balance category size (Category 6 held the joint-fewest entries before this build) and because its primary PMM use sits closest to the existing NPS and Win/Loss entries there.
- **Why it is proven:** 40 years of use across product and CX disciplines.

## Theme 4: Positioning

### A9. April Dunford's 10-Step Positioning Process: ✅ BUILT (2026-07-22)
- **Built as:** Category 2 (Positioning & Messaging), `frameworks/02-positioning-messaging.md`, using the Methodology template (What it is → When to use it → How to run it → Cadence & ownership → Example → Pitfalls → See also). 1,380 words; cross-linked to the 5-Component Positioning Canvas, STP, Win/Loss Analysis, and Message Architecture.
- **Type:** Methodology.
- **Originator:** April Dunford, *Obviously Awesome* (2019).
- **What it does:** The step-by-step *process* for arriving at positioning (list competitive alternatives, isolate unique attributes, map to value, find the best-fit market category, capture in a canvas). The KB currently has Dunford's 5-component *canvas* (the output template) but not the process that produces it.
- **Proposed home:** Category 2 (Positioning & Messaging), cross-linked to the existing April Dunford canvas.
- **Overlap/scope note:** This is the clearest example of a methodology that complements an existing framework rather than duplicating it. Built explicitly as "the process that produces the canvas".

### A10. Positioning / Perceptual Map (2x2): ✅ BUILT (2026-07-25)
- **Built as:** Category 3 (Competitive Strategy), `frameworks/03-competitive-strategy.md`, using the Framework template (What it is → When to use it → How to apply it → Example → Pitfalls → See also). 1,507 words; cross-linked to Bowman's Strategic Clock, Product Differentiation Strategy Framework, STP, and April Dunford's 5-Component Positioning Canvas.
- **Type:** Framework.
- **Originator:** Classical marketing (Al Ries and Jack Trout, *Positioning*, 1981; perceptual mapping predates them).
- **What it does:** Plots competitors on two buyer-relevant axes to find open, ownable space. A fast, visual complement to Bowman's Clock (which is price/value specific).
- **Proposed home:** Category 3 (Competitive Strategy) or Category 2.
- **Overlap/scope note resolved:** Differentiated on axis choice, as anticipated: Bowman's Clock is fixed to price versus perceived value and tests whether a competitive strategy is defensible, while the Perceptual Map is axis-agnostic, built fresh each time from whichever two attributes win/loss interviews show buyers actually weigh. Framed as a fast, visual complement run alongside or after the Clock, not a replacement for it.

## Theme 5: Messaging

### A11. Message Architecture / Messaging House: ✅ BUILT (2026-07-21)
- **Built as:** Category 2 (Positioning & Messaging), `frameworks/02-positioning-messaging.md`, using the Framework template (What it is → When to use it → How to apply it → Example → Pitfalls → See also). 1,085 words; cross-linked to Geoffrey Moore, April Dunford, Value Proposition Canvas, and STP.
- **Type:** Framework.
- **Originator:** Converged practice; the "messaging house" and message-hierarchy models are standard across PMM training (Pragmatic Institute, Product Marketing Alliance).
- **What it does:** A hierarchy that turns positioning into usable copy: a top-line value proposition, three to four supporting value pillars, and proof points beneath each. The connective tissue between a positioning statement and campaign copy, which the KB currently jumps over.
- **Proposed home:** Category 2 (Positioning & Messaging).
- **Why it matters:** Fills the gap between the positioning frameworks (Category 2) and go-to-market execution (Category 4). High priority.

### A12. Value Messaging / Features-Advantages-Benefits (FAB) ladder: ✅ BUILT (2026-07-25)
- **Built as:** Category 2 (Positioning & Messaging), `frameworks/02-positioning-messaging.md`, using the Framework template (What it is → When to use it → How to apply it → Example → Pitfalls → See also). 1,479 words; cross-linked to Message Architecture, Value Proposition Canvas, Command of the Message, and Win/Loss Analysis.
- **Type:** Framework.
- **Originator:** Classical sales and marketing technique; formalised in value-selling literature.
- **What it does:** Translates a raw feature into the advantage it creates and the benefit the buyer feels, so messaging leads with outcomes rather than specs.
- **Proposed home:** Category 2, potentially as a section within the Message Architecture entry rather than a standalone framework (decide during build to avoid a thin entry).
- **Build decision:** Built standalone rather than folded into Message Architecture. The ladder operates one level below the messaging house (a per-feature translation discipline, not a hierarchy), and folding it in would have pushed Message Architecture past its word-count gate; framed explicitly as the technique that supplies Message Architecture's proof points and that Command of the Message reuses to quantify a differentiator's value for a specific deal.

### A13. Command of the Message (value-selling messaging discipline): ✅ BUILT (2026-07-24)
- **Built as:** Category 2 (Positioning & Messaging), `frameworks/02-positioning-messaging.md`, using the Methodology template (What it is → When to use it → How to run it → Cadence & ownership → Example → Pitfalls → See also). 1,366 words; cross-linked to Message Architecture, the Competitive Battlecard Framework, Win/Loss Analysis, and Dunford's 10-Step Positioning Process.
- **Type:** Methodology.
- **Originator:** Force Management.
- **What it does:** A discipline for building buyer-centric messaging around required capabilities, differentiators, and quantified value, then embedding it across sales conversations. Bridges messaging and sales enablement.
- **Proposed home:** Category 2 or a new Sales Enablement category (see Theme 7).
- **Category decision:** Built into Category 2, not a new Sales Enablement category; the entry is scoped narrowly to the messaging component PMM authors (required capabilities, differentiators, quantified value), explicitly excluding the deal-qualification and forecasting parts of the full Force Management methodology, which sit outside PMM's remit.
- **Overlap/scope note:** Resolved by framing this entry not as a second messaging hierarchy but as the live-conversation layer that adapts the existing Message Architecture (Messaging House) for a specific rep, deal, and named competitor; written with a clear "PMM's role" framing (PMM authors and owns the value messaging; sales enablement and leadership own training delivery and adoption), consistent with how the backlog treats MEDDIC.

## Theme 6: Pricing and packaging (extends Category 8)

Category 8 currently holds Good-Better-Best, Van Westendorp PSM, and Value Metric/WTP. These extend it with more rigorous research methods and additional packaging models.

### A14. Conjoint Analysis: ✅ BUILT (2026-07-23)
- **Built as:** Category 8 (Pricing & Packaging), `frameworks/08-pricing-packaging.md`, using the Methodology template (What it is → When to use it → How to run it → Cadence & ownership → Example → Pitfalls → See also). 1,514 words; cross-linked to Van Westendorp PSM, Value Metric/WTP, Good-Better-Best Packaging, and STP.
- **Type:** Methodology.
- **Originator:** Paul Green and V. Srinivasan, 1970s.
- **What it does:** A trade-off-based survey method that infers how buyers value individual features and price levels by asking them to choose between bundles. More rigorous (and more resource-intensive) than Van Westendorp.
- **Proposed home:** Category 8 (Pricing & Packaging).
- **Overlap/scope note:** Positioned on the spectrum against Van Westendorp (cheap and fast, whole-product price) and Value Metric/WTP (what to charge for); conjoint answers "how much is each feature worth". Written explicitly as the fourth, most rigorous, and optional step in the pricing-research sequence, feeding per-feature value estimates into Good-Better-Best tier fences.

### A15. Gabor-Granger: ✅ BUILT (2026-07-27)
- **Built as:** Category 8 (Pricing & Packaging), `frameworks/08-pricing-packaging.md`, using the Methodology template (What it is → When to use it → How to run it → Cadence & ownership → Example → Pitfalls → See also). ~1,470 words; cross-linked to Van Westendorp PSM, Value Metric/WTP, Conjoint Analysis, and Good-Better-Best Packaging.
- **Type:** Methodology.
- **Originator:** André Gabor and Clive Granger, 1960s.
- **What it does:** A direct method for finding the revenue-maximising price by testing willingness to buy at ascending price points. Complements Van Westendorp (which finds an acceptable range, not a revenue-optimal point).
- **Proposed home:** Category 8.
- **Overlap/scope note resolved:** Positioned explicitly on the pricing-research spectrum alongside the existing three Category 8 entries: Van Westendorp finds a corridor without naming a single figure twice, Value Metric/WTP chooses what to charge for, Conjoint Analysis isolates per-feature value, and Gabor-Granger answers a narrower, more commercial question: of a short list of specific candidate prices, which one maximises revenue. Built as the faster, cheaper, single-SKU-focused counterpart to Conjoint Analysis, run in one to two weeks without a dedicated data scientist.

### A16. Usage-Based / Consumption Pricing Model: ✅ BUILT (2026-07-27)
- **Built as:** Category 8 (Pricing & Packaging), `frameworks/08-pricing-packaging.md`, using the Model template (What it is → When to use it → How to read it → How to apply it → Example → Pitfalls → See also). ~1,580 words; cross-linked to Value Metric/WTP, Good-Better-Best Packaging, Van Westendorp PSM, and the Gabor-Granger Method. Category 8's first entry to use the Model template.
- **Type:** Model.
- **Originator:** Converged SaaS practice; documented by OpenView and a16z.
- **What it does:** A pricing model where customers pay for what they consume (API calls, compute, seats-in-use) rather than a flat subscription. Covers when it fits, how it interacts with packaging, and its revenue-predictability trade-offs.
- **Proposed home:** Category 8.
- **Overlap/scope note resolved:** Framed as a classification model (a flat-fee-to-consumption spectrum read against revenue predictability versus usage-value correlation), not a competing method to Value Metric/WTP; this entry decides where on the spectrum a pricing structure should sit and whether a hybrid base-fee-plus-overage model fits, while Value Metric/WTP's persona and value-scaling discovery process supplies the usage unit and base-fee data this model needs to apply.

## Theme 7: Sales enablement

Sales enablement is currently only touched tangentially (a step inside the 10-Step process). It is a candidate for its **own category** if two or more of the following are built.

### A17. Competitive Battlecard Framework: ✅ BUILT (2026-07-22)
- **Built as:** Category 3 (Competitive Strategy), `frameworks/03-competitive-strategy.md`, using the Framework template (What it is → When to use it → How to apply it → Example → Pitfalls → See also). 1,278 words; cross-linked to Competitive Intelligence & Positioning Update, Bowman's Strategic Clock, Product Differentiation Strategy Framework, and Win/Loss Analysis.
- **Type:** Framework.
- **Originator:** Converged practice; documented by Crayon, Klue, and Product Marketing Alliance.
- **What it does:** A standard structure for a one-page competitive battlecard (their pitch, our counter, landmines to plant, objection handling, proof points) that sales can use live in a deal.
- **Proposed home:** Category 3 (Competitive Strategy) or a new Sales Enablement category. High priority; directly fills the enablement gap and builds on the existing Competitive Intelligence framework.
- **Category decision:** Built into Category 3, not a new single-entry Sales Enablement category, per the guidance against thin category files. Category 9 (Sales Enablement) stands up once A18 and A19 are also built.

### A18. Buyer's Journey Content Map: ✅ BUILT (2026-07-23)
- **Built as:** Category 5 (Lifecycle & Workflow), `frameworks/05-lifecycle-workflow.md`, using the Framework template (What it is → When to use it → How to apply it → Example → Pitfalls → See also). 1,366 words; cross-linked to PMM Lifecycle Management Framework, Win/Loss Analysis, Competitive Battlecard Framework, and the 10-Step PMM Process.
- **Type:** Framework.
- **Originator:** Converged content-marketing and enablement practice.
- **What it does:** Maps enablement and marketing content to buyer-journey stages (awareness, consideration, decision, and post-sale) so PMM can spot and fill gaps in the collateral sales needs at each stage.
- **Category decision:** Built into Category 5 (Lifecycle & Workflow), not the new Sales Enablement category, since A19 (Sales Enablement Maturity Model) is not yet built; a single-entry Category 9 would repeat the thin-category problem A17 already avoided. Category 9 remains the plan once A19 is also built, at which point A17, A18, and A19 can be reviewed together for whether to consolidate there.

### A19. Sales Enablement Maturity Model: ✅ BUILT (2026-07-28)
- **Built as:** Category 9 (Sales Enablement, new), `frameworks/09-sales-enablement.md`, using the Model template (What it is → When to use it → How to read it → How to apply it → Example → Pitfalls → See also). ~1,540 words; cross-linked to the Competitive Battlecard Framework, the Buyer's Journey Content Map, the 10-Step PMM Process, and Quarterly PMM Planning.
- **Type:** Model.
- **Originator:** Converged practice (Sales Enablement Society, Highspot, Pragmatic Institute).
- **What it does:** A four-stage model for the enablement function (Ad Hoc, Organised, Optimised, Transformative), scored across content governance, training, tooling, and cross-functional integration, that a PMM can use to diagnose where their enablement stands and which dimension to invest in next.
- **Category decision:** Built into a new Category 9 (Sales Enablement), the last of the 19 candidates and the one this plan named as the trigger for standing up the category. A17 (Competitive Battlecard Framework) and A18 (Buyer's Journey Content Map) remain filed in Category 3 and Category 5 respectively, where they were built before Category 9 existed, rather than being moved here: consolidating all three would mean rewriting every existing cross-reference to A17 and A18 across INDEX.md, FRAMEWORK-MAP.md, BY-SITUATION.md, and other frameworks' "See also" sections, for a reorganisation that is cosmetic rather than functional. This deferral is noted explicitly in INDEX.md's Category 9 section for a future session to revisit.

---

## Summary and prioritisation

| # | Candidate | Type | Proposed home | Priority | Gap filled |
|---|-----------|------|---------------|----------|------------|
| A11 | Message Architecture / Messaging House | Framework | Cat 2 | ✅ **Built** | Positioning-to-copy gap |
| A17 | Competitive Battlecard Framework | Framework | Cat 3 | ✅ **Built** | Sales enablement |
| A6 | Voice of the Customer Programme | Methodology | Cat 1 | ✅ **Built** | Continuous VoC |
| A9 | Dunford 10-Step Positioning Process | Methodology | Cat 2 | ✅ **Built** | Positioning process |
| A5 | GTM vs PMM primer | Primer | new concepts/ | ✅ **Built** | Scope clarity |
| A1 | GTM Motion Model | Model | Cat 4 | ✅ **Built** | Motion selection |
| A2 | Product-Led Growth | Methodology | Cat 4 | ✅ **Built** | PLG motion |
| A7 | JTBD Switch Interview Method | Methodology | Cat 1 | ✅ **Built** | VoC research method |
| A14 | Conjoint Analysis | Methodology | Cat 8 | ✅ **Built** | Pricing rigour |
| A18 | Buyer's Journey Content Map | Framework | Cat 5 | ✅ **Built** | Enablement content |
| A3 | ICP Development Methodology | Methodology | Cat 1 | ✅ **Built** | Operational targeting |
| A8 | Kano Model | Framework | Cat 6 | ✅ **Built** | Feature prioritisation |
| A13 | Command of the Message | Methodology | Cat 2 | ✅ **Built** | Value-selling messaging |
| A4 | Bullseye (traction channels) | Framework | Cat 4 | ✅ **Built** | Channel selection |
| A10 | Perceptual Map (2x2) | Framework | Cat 3 | ✅ **Built** | Visual positioning |
| A12 | FAB / Value Messaging ladder | Framework | Cat 2 | ✅ **Built** | Feature-to-benefit |
| A15 | Gabor-Granger | Methodology | Cat 8 | ✅ **Built** | Revenue-optimal price |
| A16 | Usage-Based Pricing Model | Model | Cat 8 | ✅ **Built** | Consumption pricing |
| A19 | Sales Enablement Maturity Model | Model | Cat 9 (new) | ✅ **Built** | Enablement diagnosis |

**All 19 candidates are built.** The priority column recorded the order of work, not whether an entry was included; "Lower" meant "build later", not "maybe".

**First batch (the five "High" candidates): all built.** Message Architecture ✅ (Framework), Competitive Battlecard ✅ (Framework), Voice of the Customer Programme ✅ (Methodology), Dunford 10-Step Positioning Process ✅ (Methodology), and the GTM vs PMM primer ✅ (Primer, built 2026-07-22 in the new `concepts/` area). Together these fill the most-cited gaps and exercise every new content type (Framework, Methodology, Model, and Primer), proving the documentation changes in Part B before the collection grew further.

**Second batch (the eight "Medium" candidates): all built.** A1 GTM Motion Model ✅ (Model, built 2026-07-22 in Category 4), A2 Product-Led Growth ✅ (Methodology, built 2026-07-22 in Category 4), A7 JTBD Switch Interview Method ✅ (Methodology, built 2026-07-22 in Category 1), A14 Conjoint Analysis ✅ (Methodology, built 2026-07-23 in Category 8), A18 Buyer's Journey Content Map ✅ (Framework, built 2026-07-23 in Category 5), A3 ICP Development Methodology ✅ (Methodology, built 2026-07-23 in Category 1), A8 Kano Model ✅ (Framework, built 2026-07-23 in Category 6), and A13 Command of the Message ✅ (Methodology, built 2026-07-24 in Category 2) complete this batch.

**Third batch (the "Lower" candidates): all built.** A4 Bullseye Framework ✅ (Framework, built 2026-07-24 in Category 4), A10 Perceptual Map ✅ (Framework, built 2026-07-25 in Category 3), A12 Features-Advantages-Benefits (FAB) Ladder ✅ (Framework, built 2026-07-25 in Category 2), A15 Gabor-Granger Method ✅ (Methodology, built 2026-07-27 in Category 8), A16 Usage-Based (Consumption) Pricing Model ✅ (Model, built 2026-07-27 in Category 8), and A19 Sales Enablement Maturity Model ✅ (Model, built 2026-07-28 as the new Category 9) complete the batch and the plan.

**New categories stood up:**
- **Sales Enablement** (Category 9) now exists, holding A19, MEDDIC/MEDDPICC, and, as of the 2026-07-30 consolidation, A17 and A18 as well (originally built in Category 3 and Category 5 respectively, before Category 9 existed).
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

## B2. Declare a type on every entry ✅ Done (2026-07-30)

Add a `**Type:**` line to the top of each entry, directly under the H2 title and above "What it is". Backfill the existing 26 entries. Most are Frameworks; the following are more accurately Methodologies and should be re-tagged (not moved): 10-Step PMM Process, 7-Step PMM Framework, 3-Step PMM Strategy, PMM Lifecycle Management, GTM Motion Framework, Complete GTM Workflow Stages, Win/Loss Analysis, Competitive Intelligence & Positioning Update, Feature Adoption, and T2D3. Retagging is a labelling change only; nothing moves category.

**Done as:** all 26 backfilled 2026-07-30; the 16 non-listed entries confirmed Framework, and the 10 listed above fully restructured to the Methodology section template (not just relabelled), since a label without matching section headers would leave them failing CLAUDE.md's own Quality Gate for their declared type.

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

## B5. Update navigation language and counts ✅ Done (2026-07-30)

The repository says "26 frameworks" in README.md, INDEX.md, FRAMEWORK-MAP.md, and PROGRESS.md. As mixed content arrives:
- Change the headline from "26 frameworks" to "26 entries" or "frameworks and methodologies", and report a per-type breakdown (e.g., "24 frameworks, 8 methodologies, 3 models, 2 primers").
- Add a **Type** column to the INDEX.md category tables and the README.md summary table.
- This KB has already suffered one count-drift error (22 vs 26, corrected 2026-07-19). Mixed types raise that risk, so B6 makes counting a checklist step.

**Done as:** the headline breakdown language was already in place from each build since 2026-07-21; the dedicated Type column was added to every INDEX.md category table 2026-07-30, replacing the inline `**Type.**` prefix used as an interim measure since that date.

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

## This plan is complete

All 19 candidates named in Part A are built as of 2026-07-28: A11 Message Architecture, A6 Voice of the Customer Programme, A17 Competitive Battlecard Framework, A9 Dunford's 10-Step Positioning Process, A5 the GTM vs PMM primer, A1 the GTM Motion Model, A2 Product-Led Growth, A7 the JTBD Switch Interview Method, A14 Conjoint Analysis, A18 the Buyer's Journey Content Map, A3 the ICP Development Methodology, A8 the Kano Model, A13 Command of the Message, A4 the Bullseye Framework, A10 the Perceptual Map, A12 the Features-Advantages-Benefits (FAB) Ladder, A15 the Gabor-Granger Method, A16 the Usage-Based (Consumption) Pricing Model, and A19 the Sales Enablement Maturity Model, which stood up the new Category 9. Part B's documentation plan (the four-type vocabulary, per-type templates, the cross-doc consistency checklist) is folded into CLAUDE.md and has been applied to every build in this plan.

**Update (2026-07-30):** Both items that were open for a future session are now complete. The `**Type:**` backfill on the original 26 entries (Part B's B2) is done: 16 were confirmed Framework and 10 were retagged Methodology (10-Step PMM Process, 7-Step PMM Framework, 3-Step PMM Strategy, PMM Lifecycle Management, Go-to-Market Motion Framework, Complete GTM Workflow Stages, Win/Loss Analysis, Competitive Intelligence & Positioning Update, Feature Adoption, and T2D3), each restructured to the Methodology section template (What it is → When to use it → How to run it → Cadence & ownership → Example → Pitfalls → See also). B5's Type column was also added to every INDEX.md table. A source-validation pass ran across all entries added since 2026-04-09 (three parallel research passes; no outright factual errors found, four precision refinements applied; see PROGRESS.md for the full findings). [FRAMEWORK-BACKLOG.md](FRAMEWORK-BACKLOG.md)'s own queue, separate from this plan, is also now fully built as of 2026-07-30.
