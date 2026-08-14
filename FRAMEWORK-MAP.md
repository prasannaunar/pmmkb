# Framework Dependency Map

This document shows how the 66 entries relate to each other and the typical workflow sequence for applying them. The one primer (GTM Strategy vs Product Marketing, in `concepts/`) is a scope explainer rather than an applied step, so it sits outside the dependency matrix below; see its own "See also" section for how it relates to the frameworks here.

---

## Workflow Sequence (Left to Right)

The frameworks are designed to be applied in a logical workflow order:

```
UNDERSTAND MARKET          POSITION & MESSAGE          COMPETE              EXECUTE GTM          MEASURE & ITERATE
    ↓                            ↓                         ↓                      ↓                        ↓
[1. STP]            →    [Geoffrey Moore]      →    [Bowman's Clock]   →  [Complete GTM]  →    [Win/Loss]
  ↓                        ↓                         ↓                         ↓                      ↓
[Product Dev         [April Dunford]         [Product              [3/7/10-Step]        [NPS]
Stage]                  ↓                     Differentiation]         ↓                 ↓
  ↓                   [JTBD]                    ↓                    [T2D3]          [Quarterly
[Complete              ↓                      (validates             ↓               Planning]
Product             [Value Prop              price-value           [Feature            ↓
Experience]         Canvas]                 positioning)          Adoption]       [Competitive
                                                                    ↓              Intelligence]
                                                              [Onboarding
                                                               Maturity]
                                                                ↓
                                                            [PMM Lifecycle]
```

---

## Dependency Matrix

### Foundation Frameworks (Apply First)
These frameworks establish the baseline for all downstream work:

| Framework | Prerequisites | Feeds Into | Purpose |
|-----------|---------------|-----------|---------|
| **STP Framework** | None | All positioning frameworks | Identify and validate target market |
| **Product Dev Stage** | None | Complete GTM Workflow | Align PMM work with product timeline |
| **ICP Development Methodology** | STP (Targeting step) | Sales prospecting, lead scoring, ABM target lists | Operationalise the chosen segment into a weighted, CRM-scored account fit model |
| **Sean Ellis 40% Test** | STP (segment to cut the survey by) | Product's growth-investment decision (product-owned); the segment's positioning and messaging (PMM's supporting role) | Benchmark product-market fit per segment against a 40% "Very disappointed" threshold before scaling growth spend |
| **MAP Model** | STP (segment definitions) + live revenue/retention data per segment | Quarterly PMM Planning, PMM Team Scaling (which segment's remit a new hire is scoped around) | Measure segment size, Analyze segment performance, Prioritize which segments deserve further investment, ranking segments already sold into rather than choosing one in the abstract |

### Positioning Frameworks (Apply Second)
These build on STP to define what you stand for:

| Framework | Prerequisites | Feeds Into | Purpose |
|-----------|---------------|-----------|---------|
| **Geoffrey Moore** | STP | Complete Product Experience | Structured positioning statement |
| **April Dunford** | STP | Product Differentiation | Attribute-based positioning |
| **JTBD** | STP | Value Prop Canvas | Customer outcome-based positioning |
| **Value Prop Canvas** | STP + (one of above) | Messaging frameworks | Map value to customer needs |
| **Message Architecture (Messaging House)** | A validated positioning statement (Geoffrey Moore or April Dunford) | GTM execution, sales enablement, all campaign copy | Turn positioning into a copy hierarchy every asset writes from |
| **Dunford's 10-Step Positioning Process** | Best-fit customers + STP | April Dunford's 5-Component Positioning Canvas, Message Architecture | The research and validation process that produces the canvas |
| **JTBD Switch Interview Method** | Recent buyers (purchased within 1–3 months) | JTBD Positioning Framework, Voice of the Customer Programme | The interview technique that finds the job and the switch trigger the JTBD framework then positions around |
| **Command of the Message** | Message Architecture (Messaging House) | Live sales conversations, sales enablement training, Competitive Battlecard Framework | Adapts the messaging house's core message and pillars into a value-selling structure a rep runs live, built around required capabilities, a named competitor, and quantified business value |
| **Features-Advantages-Benefits (FAB) Ladder** | A feature to translate; ideally a Message Architecture pillar it feeds | Message Architecture proof points, release notes, demo scripts, Command of the Message's quantified value cases | Turns one raw feature into a buyer-tested benefit statement, one level below the messaging house |
| **StoryBrand SB7 Framework** | A validated positioning statement (Geoffrey Moore or April Dunford) to draw the Character and Problem from | Homepage and landing-page copy, founder narratives, video scripts, demo scripts | Casts the customer as the hero and the brand as the guide; the narrative arc a single asset is drafted against, complementing Message Architecture's hierarchy of claims |
| **Message Testing (Message-Market Fit)** | Draft copy from Message Architecture, the FAB Ladder, or StoryBrand SB7 | The version that ships; a logged result for the next test cycle | Tests draft messaging against a verified target-buyer panel for clarity, relevance, and differentiation before it ships, rather than shipping on internal preference |
| **Vertical/Segment Messaging via Buying Trigger** | A validated Message Architecture (core message and pillars locked) + STP (segments to adapt for) | Outbound opens, ad headlines, landing-page hero variants by segment; Buyer's Journey Content Map | Routes each segment's specific buying-trigger event to the one existing pillar that answers it, without rebuilding positioning per segment |
| **Andy Raskin's Strategic Narrative Framework** | A real, verifiable market or category shift to name | Pitch decks, keynotes, category-launch narratives, sales-deck openers | Company or category-level narrative arc (change → winners/losers → promised land → obstacles → magic gifts → proof) that leads with a market shift rather than the product |

### Competitive Frameworks (Apply Third)
These validate positioning against competition:

| Framework | Prerequisites | Feeds Into | Purpose |
|-----------|---------------|-----------|---------|
| **Bowman's Clock** | STP + Positioning | Pricing strategy | Price-value positioning |
| **Product Differentiation** | STP + Positioning | Sales enablement | Competitive differentiation |
| **Perceptual Map (2x2)** | STP (segment to plot for) + Win/Loss (source of buyer-relevant axes) | Product Differentiation, positioning refresh | Plots competitors on two buyer-chosen attributes to reveal open market space |
| **Category Design** | STP + evidence the existing category caps the ceiling (win/loss interviews, Voice of the Customer signal) | A Point of View that reframes the market; Message Architecture (the copy hierarchy the new category writes from) | Multi-year discipline to define, develop, and dominate a new market category rather than compete for share inside an existing one |
| **CI Program Maturity Model** | None (an honest self-assessment plus consumer interviews) | Competitive Intelligence & Positioning Update Framework, Competitive Battlecard Framework and VARS Framework (tells a team whether it can reliably build and sustain them), CI headcount and tooling business cases | Five-stage model (Ad Hoc, Adopting, Impacting, Influencing, Transforming) diagnosing how mature a competitive intelligence function is, the structural sibling of the Sales Enablement Maturity Model |

### Go-to-Market Frameworks (Apply Fourth)
These sequence and execute GTM using positioning:

| Framework | Prerequisites | Feeds Into | Purpose |
|-----------|---------------|-----------|---------|
| **GTM Motion Model** | STP (target segment identified) | 3/7/10-Step PMM, Complete GTM, Product-Led Growth | Select which acquisition motion (self-serve, PLG, inside sales, field sales, partner-channel) the launch is built for, before sequencing it |
| **Product-Led Growth** | GTM Motion Model selects self-serve or PLG | Feature Adoption, Onboarding Maturity | Run the PLG motion: activation moment, product-qualified lead signals, in-product upgrade paths |
| **Account-Based Everything (ABX) / TEAM Framework** | GTM Motion Model selects field sales + ICP Development Methodology (account-fit scoring) | Buyer's Journey Content Map, Competitive Battlecard Framework (Category 9); MEDDIC/MEDDPICC (Category 9) | Run the field-sales motion, PLG's structural mirror: Target (tier a named account universe), Engage (role-specific content per buying-committee role), Activate (route sales on multi-signal intent), Measure (account-level outcomes) |
| **Bullseye Framework** | GTM Motion Model (motion chosen) + STP (target segment) | Complete GTM Workflow Phase 2, Quarterly PMM Planning | Select the single acquisition channel to concentrate budget on, inside the motion already chosen, by cheaply testing several candidates before committing |
| **Launch Tier Framework** | None (a launch ready to be scheduled on the quarterly calendar) | 10-Step PMM Process (which lightweight or full version applies), Complete GTM Workflow Stages (how many phases run), Quarterly PMM Planning (launch calendar and resourcing) | Classifies a launch into Tier 1, 2, or 3 by revenue impact, cross-functional dependency, external visibility, and customer-facing change, so process and lead time match its actual scope |
| **Pre-mortem** | A launch plan ready to ship, ideally Tier 1 per the Launch Tier Framework | The launch go/no-go decision; a ranked, owned risk-mitigation list feeding the final plan | Imagines the launch has already failed to generate concrete, specific failure reasons before it ships, rather than a post-hoc Win/Loss diagnosis after deals close |
| **3-Step PMM** | Positioning | 7-Step PMM | Early-stage simplicity |
| **7-Step PMM** | Positioning | 10-Step PMM | Mid-stage structure |
| **10-Step PMM** | Positioning | Quarterly Planning | Large-team operationalisation |
| **Complete GTM** | Positioning | T2D3 Framework | Phase-based execution |
| **T2D3** | Complete GTM | PMM Team Scaling | Revenue-scaled milestones |

### Activation & Adoption Frameworks (Apply Fifth)
These drive customer adoption post-launch:

| Framework | Prerequisites | Feeds Into | Purpose |
|-----------|---------------|-----------|---------|
| **PMM Lifecycle** | Positioning + GTM | Feature Adoption, NPS | Full customer journey |
| **GTM Motion Framework** | Positioning + GTM | Launch campaigns | Coordinated launches |
| **Feature Adoption** | PMM Lifecycle | NPS | Drive internal product adoption |
| **Onboarding Maturity** | Positioning | Retention metrics | Accelerate time-to-value |
| **Time to Value Framework** | Customer interviews (to find the qualitative "aha moment") + usage/retention data | Customer Onboarding Maturity Framework's milestone design and measurement, Product-Led Growth's activation-moment instrumentation | Breaks "time to value" into Time to First Value and Time to Core Value, plus the activation-rate/TTV and aha-moment/activation-event distinctions, replacing a loosely used phrase with a validated metric set |
| **Forrester Customer Advocacy Model** | NPS (source of Promoters) | Case studies, sales reference calls, Competitive Battlecard Framework proof points | Builds a proactive advocacy practice (Reactive → Identified → Programmatic → Embedded) instead of chasing the same few accounts for every reference |

### Measurement & Optimisation Frameworks (Apply Throughout)
These provide feedback loops to refine all prior work:

| Framework | Prerequisites | Feeds Into | Purpose |
|-----------|---------------|-----------|---------|
| **Win/Loss** | Sales + Positioning | Quarterly Planning | Validate positioning effectiveness |
| **NPS** | Customer base | Quarterly Planning | Measure satisfaction & identify gaps |
| **Competitive Intelligence** | Positioning + Competitive set | Quarterly Planning | Track competitor moves |
| **Voice of the Customer (VoC) Programme** | Customer base + instrumented signal sources (surveys, tickets, calls, reviews, churn) | STP refresh, Positioning, Message Architecture, Roadmap, Quarterly Planning | Continuously synthesise customer signal into decisions; the system that connects Win/Loss and NPS |
| **Kano Model** | STP (segment the survey by) | Roadmap priority, Good-Better-Best tier fences, launch messaging | Classify features by satisfaction effect (must-be, performance, delighter, indifferent, reverse) |
| **RFM Model** | Customer usage/purchase data (recency, frequency, monetary value per account) | Forrester Customer Advocacy Model (Champion segment feeds advocate tracking), Customer Success save-plays, NPS cross-reference | Behavioural segmentation (Champions, At-risk, New/Promising, Hibernating, Loyal-but-low-value) that catches value and engagement shifts NPS's sentiment score alone would miss |

### Strategy & Planning Frameworks (Orchestrate All)
These coordinate and sequence all other frameworks:

| Framework | Prerequisites | Feeds Into | Purpose |
|-----------|---------------|-----------|---------|
| **Playing to Win (Strategic Choice Cascade)** | STP (where-to-play evidence) | Quarterly PMM Planning (translates the cascade's choices into a quarter's initiatives), PMM Team Scaling (capabilities-needed choice informs hiring) | Five cascading, mutually reinforcing strategic choices (winning aspiration, where to play, how to win, capabilities, management systems) that sit above quarterly planning's operational level |
| **Quarterly PMM** | All above | Budget & resource allocation | Prioritise and sequence work |
| **PMM Team Scaling** | Quarterly planning + results | Hiring plan | Grow team with business |
| **Analyst Relations Tiering & Cadence Model** | None (an analyst universe to build and score) | Competitive Intelligence & Positioning Update Framework, Message Architecture (briefing kit content), Quarterly PMM Planning (resourcing the cadence) | Tier analysts by influence and run a minimum briefing cadence per tier, ahead of Magic Quadrant/Wave cycles |
| **Pragmatic Institute Framework** | An existing enablement programme and a launched product/portfolio to audit | Sales Enablement Maturity Model (certification and channel-enablement inputs), Good-Better-Best Packaging Framework (pricing health review's usual output) | Score the narrowed Enablement and Business boxes only; the market, positioning, and launch boxes stay owned by the 10-Step PMM Process and PMM Lifecycle Management Framework |
| **MOVE GTM Diagnostic** | None (an honest, evidence-based self-assessment across four revenue-engine motions) | Quarterly PMM Planning (findings prioritise next quarter's initiatives), Customer Onboarding Maturity Framework (typical Sell/Deliver fix), Feature Adoption Framework (typical Renew/Expand fix) | Locates the company in a fit stage (Problem/Product/Platform-Market Fit), then scores four sequential GTM motions to find which handoff is the binding constraint on growth |

### Pricing & Packaging Frameworks (Apply Alongside Go-to-Market)
Added as Category 8 (2026-07-12 to 2026-07-23); these set and validate price once positioning and segments are defined:

| Framework | Prerequisites | Feeds Into | Purpose |
|-----------|---------------|-----------|---------|
| **Van Westendorp PSM** | STP | Good-Better-Best Packaging | Find the acceptable price corridor with no existing anchor price |
| **Value Metric / WTP** | STP + Value Prop Canvas | Good-Better-Best Packaging | Choose what to charge for and confirm persona-level willingness to pay |
| **MaxDiff Analysis** | A candidate feature/benefit list (typically 10+ items) | Conjoint Analysis (narrows the list before a full study), Good-Better-Best Packaging, Message Architecture pillar prioritisation | Cheap best-worst forced ranking of what customers value most, without price attached; the standard pre-study to cut a long feature list before committing to conjoint |
| **Conjoint Analysis** | STP + (Van Westendorp PSM and/or Value Metric/WTP recommended first; MaxDiff Analysis recommended first if the candidate list exceeds ~6 items) | Good-Better-Best Packaging | Isolate how much each individual feature is worth, feature by feature, to decide which justify a tier upgrade |
| **Gabor-Granger Method** | STP + (Van Westendorp PSM corridor recommended first) | Good-Better-Best Packaging (tier anchor price), a single SKU or add-on price decision | Find the single revenue-maximising price among specific candidate prices, rather than an acceptable range |
| **Usage-Based (Consumption) Pricing Model** | Value Metric / WTP (to identify the value-scaling usage unit) | Good-Better-Best Packaging (usage allowances scaled by tier), billing and metering build | Choose where a pricing structure sits between flat fee and pure consumption, and whether a hybrid base-fee-plus-overage model fits |
| **Good-Better-Best Packaging** | STP + (Van Westendorp PSM and/or Value Metric/WTP and/or Conjoint Analysis and/or Gabor-Granger and/or Usage-Based Pricing Model) | Sales enablement, Quarterly Planning | Structure the price ladder and tiers buyers self-select into |

### Sales Enablement (Category 9)
Consolidated 2026-07-30 to hold all four entries most closely associated with the discipline; the Sales Enablement Maturity Model diagnoses the maturity of the function itself, rather than producing a single point-in-time artefact, while the Battlecard and Content Map are the point-in-time artefacts it diagnoses readiness for:

| Framework | Prerequisites | Feeds Into | Purpose |
|-----------|---------------|-----------|---------|
| **Sales Enablement Maturity Model** | None (an honest self-assessment plus rep interviews) | Competitive Battlecard Framework and Buyer's Journey Content Map (tells a team whether it is ready to build and sustain them), enablement headcount and tooling business cases | Score content governance, training, tooling, and cross-functional integration on a four-stage ladder (Ad Hoc, Organised, Optimised, Transformative) to find the actual bottleneck |
| **MEDDIC / MEDDPICC** | None (a sales-owned qualification discipline); PMM's content draws on the Competitive Battlecard Framework, Command of the Message, and the FAB Ladder | Sales forecasting and deal qualification (sales-owned); PMM's Metrics, Decision Criteria, and Competition content, refreshed on the Battlecard's quarterly cadence | Sales-owned deal-qualification checklist (Metrics, Economic Buyer, Decision Criteria, Decision Process, Paper Process, Identify Pain, Champion, Competition); PMM's supporting role supplies the evidenced content reps need to answer several letters in a live deal |
| **Competitive Battlecard Framework** | Competitive Intelligence (Category 7) + Product Differentiation + Bowman's Clock (Category 3) | Live sales deals, Win/Loss Analysis (Category 6) | One-page field tool for contested deals; consolidated here 2026-07-30 from Category 3 |
| **Buyer's Journey Content Map** | PMM Lifecycle (Category 5) + Win/Loss (Category 6) | Sales enablement, Competitive Battlecard Framework | Audit content against buyer stages and prioritise gaps by revenue impact; consolidated here 2026-07-30 from Category 5 |
| **VARS Framework** | Competitive Battlecard Framework (source of the acknowledgement, reframe, and proof points) | Live competitive sales conversations, rep training and role-play | Four-step live-conversation technique (Validate, Acknowledge, Reframe, Specify) for handling a buyer's direct competitor question without sounding defensive |

---

## Common Workflow Sequences

### Scenario 1: New Product Launch
0. **Launch Tier Framework** (classify the launch as Tier 1, 2, or 3 before committing a lead time or resourcing plan to the rest of this sequence)
1. **Product Dev Stage** (align PMM timeline)
2. **STP** (validate market/segment)
3. **GTM Motion Model** (select which acquisition motion, self-serve, PLG, inside sales, field sales, or partner-channel, this launch is built for; if it selects self-serve or PLG, run **Product-Led Growth** alongside steps 4 onward to build the activation and upgrade-path work the motion depends on; if it selects field sales for a committee-driven deal, run **Account-Based Everything (ABX) / TEAM Framework** alongside steps 4 onward instead, tiering the target account list and building the buying-committee content the motion depends on)
4. **Geoffrey Moore** or **April Dunford** (positioning)
5. **Value Prop Canvas** (map to segment needs)
5a. **Kano Model** (optional; classify the launch feature set by satisfaction effect so the headline in step 6 is a genuine delighter, not a must-be customers already assume)
6. **Message Architecture (Messaging House)** (turn positioning into the copy hierarchy every launch asset writes from)
6a. **Bullseye Framework** (optional; brainstorm and cheaply test candidate acquisition channels within the motion selected in step 3, so Complete GTM Workflow's Phase 2 channel validation starts from a shortlist rather than a guess)
6b. **Features-Advantages-Benefits (FAB) Ladder** (optional; translate the one or two features that map to a Message Architecture pillar into a tested benefit statement before the launch's headline proof points are locked)
6c. **StoryBrand SB7 Framework** (optional; draft the launch homepage or founder narrative as a seven-part story arc drawing its Character and Problem from the positioning set in step 4, so the launch page reads as a story rather than a feature list)
6d. **Message Testing (Message-Market Fit)** (optional, recommended for Tier 1 launches; test the headline or homepage copy produced in steps 6, 6b, and 6c against a verified target-buyer panel before it ships, rather than shipping on internal preference)
6e. **Pre-mortem** (optional, recommended for Tier 1 launches; run once the launch plan is largely built but before execution begins, imagining the launch has already failed to surface concrete failure risks, rank and mitigate the highest-severity ones, and produce an explicit go/no-go recommendation before Complete GTM Workflow's Launch phase starts)
7. **Complete GTM Workflow** (phases)
8. **GTM Motion Framework** (coordinated launch execution within the motion selected in step 3)
9. **Feature Adoption** (drive early usage)
10. **Win/Loss** (validate message resonance)
11. **Quarterly PMM** (refine Q2)

### Scenario 2: Repositioning for New Segment
1. **STP** (validate segment)
2. **ICP Development Methodology** (operationalise the validated segment into a scored account list before sales starts prospecting it)
3. **Dunford's 10-Step Positioning Process** (run the research and validation steps behind the new hypothesis)
4. **JTBD Switch Interview Method** (if the new positioning is framed around a job rather than an attribute, run switch interviews with recent buyers to find the actual triggering event first)
5. **April Dunford** or **JTBD** (capture the new positioning hypothesis)
6. **Bowman's Clock** (validate price-value fit)
6a. **Perceptual Map** (optional; check the new positioning against a second, buyer-chosen pair of attributes Bowman's Clock does not capture, to confirm the white space is real before committing collateral to it)
7. **Win/Loss** (test with target segment)
7a. **Sean Ellis 40% Test** (optional, once usage data exists in the new segment; benchmark product-market fit for the segment against the 40% threshold before further GTM investment scales; product owns the go/no-go, PMM cuts the result by segment and translates it into messaging)
8. **7-Step PMM** (execute with new positioning)
9. **Competitive Intelligence** (monitor competitor response)
10. **Quarterly PMM** (measure impact)

### Scenario 3: Scaling PMM Team
1. **Quarterly PMM** (identify capacity gaps)
2. **PMM Team Scaling** (plan hiring)
3. **10-Step PMM** (document playbook for new hires)
4. **All other frameworks** (assign ownership by role)
5. **Win/Loss + NPS** (feedback for team)

### Scenario 4: Improving Win Rate
0. **Sales Enablement Maturity Model** (optional, run first if enablement material already exists but reps say it is stale or hard to find; diagnoses whether the real gap is content, governance, training, or measurement before building a new battlecard on top of the same broken function)
0a. **Category Design** (optional, run instead of steps 1–6 if win rate is capped by the market category itself, not competitive execution; only warranted when out-executing competitors inside the existing category would still leave a capped ceiling)
1. **Win/Loss Analysis** (diagnose losses)
2. **Competitive Intelligence** (understand competitor messaging)
2a. **Analyst Relations Tiering & Cadence Model** (optional; if analyst reports are cited in these competitive deals, a standing tiered briefing cadence shapes the next report's placement more than a pre-deadline scramble)
3. **Product Differentiation** (validate claimed differentiation)
4. **Geoffrey Moore** or **April Dunford** (refine positioning)
5. **Buyer's Journey Content Map** (confirm content exists at the specific stage deals are stalling, not just that a battlecard exists)
6. **Competitive Battlecard Framework** (equip reps with the counter-position for the specific competitor deals are lost to)
6a. **Command of the Message** (translate the refined positioning and the battlecard's counter-position into a quantified value case reps run live in discovery and proposal conversations against that competitor)
6b. **MEDDIC / MEDDPICC** (optional; if sales is rolling out or refreshing deal qualification, supply the Metrics, Decision Criteria, and Competition content reps need, drawn directly from the battlecard and the quantified value case built in step 6a)
7. **7-Step or 10-Step PMM** (update sales enablement)
8. **Quarterly PMM** (schedule messaging refresh)

### Scenario 5: Pricing a New Tier or Service
1. **Value Proposition Canvas** (understand what each segment values)
2. **STP** (confirm each tier has a distinct target segment)
3. **Van Westendorp PSM** (find the acceptable price corridor)
4. **Value Metric / WTP** (choose what to charge for and validate willingness to pay per persona)
4a. **Usage-Based (Consumption) Pricing Model** (optional; if step 4 shows the current value metric doesn't scale with usage, use this model to decide whether a hybrid base-fee-plus-overage structure fits better than a flat seat fee)
5. **Conjoint Analysis** (optional, higher-rigour step: isolate which individual features justify which tier, when a bundling decision is genuinely contested)
5a. **Kano Model** (optional: confirm must-be features sit in every tier and delighters are reserved for the premium tier, before the fences in step 6 are drawn)
5b. **Gabor-Granger Method** (optional: once the corridor and value metric are set, test ascending prices against purchase intent to find the specific revenue-maximising anchor price for a tier or add-on, rather than relying on the PSM corridor's midpoint alone)
6. **Good-Better-Best Packaging** (structure the tiers and price ladder)
7. **Bowman's Clock** (check the new tier's price-value position against competitors)
8. **Quarterly PMM** (resource the launch of the new tier)

---

## Framework Interactions

### Cross-Cutting Relationships

**Positioning Frameworks** all depend on STP but offer different angles:
- **Geoffrey Moore**: Structured template (best for clarity)
- **April Dunford**: Attribute-weighted (best for multi-segment companies)
- **JTBD**: Outcome-focused (best for fragmented markets or new categories)
- **Value Prop Canvas**: Customer-centric mapping (best for validating market fit)

**PMM Process Frameworks** offer increasing complexity:
- **3-Step**: For early-stage, resource-constrained teams
- **7-Step**: For mid-market growth teams
- **10-Step**: For scaled teams with specialisation

**Measurement Frameworks** feed back into planning:
- **Win/Loss** → Messaging validation
- **NPS** → Product/support/messaging gaps
- **Competitive Intelligence** → Positioning refresh
- **Voice of the Customer (VoC) Programme** → the system that connects Win/Loss, NPS, and support/sales signal into a single synthesis
- All four → Quarterly PMM Planning

**Lifecycle and Activation** frameworks work together:
- **PMM Lifecycle** defines what to message when
- **GTM Motion Model** selects which acquisition motion the launch is built for, before execution begins
- **GTM Motion Framework** shows how to launch messages within that motion, coordinated across channels
- **Feature Adoption** applies lifecycle thinking to product adoption
- **Onboarding Maturity** focuses on critical early lifecycle

---

## Using This Map

### For Practitioners
- **Starting out?** Begin with STP Framework and one positioning framework
- **Scaling?** Move to 7-Step or 10-Step PMM and add specialisation (Win/Loss, Competitive Intelligence)
- **Repositioning?** Start with STP, then Win/Loss, then positioning refresh

### For Teams
- **Product launch team**: Follow "Scenario 1: New Product Launch" above
- **Sales enablement focus**: Emphasise Win/Loss, Product Differentiation, 7-Step PMM
- **Segment PMM**: STP → Positioning → Quarterly PMM → cycle
- **Ops/Analytics focus**: Win/Loss, NPS, Competitive Intelligence, Quarterly PMM

### For Leaders
- **Allocating PMM resources**: Use "PMM Team Scaling" to plan hiring; use "Quarterly PMM" to set priorities
- **Setting PMM goals**: Tie Quarterly PMM OKRs to business goals; use Win/Loss and NPS to validate
- **Evaluating PMM team**: Check that frameworks are applied in logical sequence; measure impact via win rate, deal velocity, NPS

---

## Version History

**2026-08-14 (final three NEW-SOURCES-GAP-ANALYSIS.md builds, closing the queue)**: **CI Program Maturity Model** joins the Competitive Frameworks table (prerequisite: none, an honest self-assessment plus consumer interviews; feeds the Competitive Intelligence & Positioning Update Framework, the Competitive Battlecard Framework and VARS Framework, and CI headcount/tooling business cases) and is added to BY-SITUATION.md's Competing Against Established Players situation as optional step 0b. Re-sourced during the build from the uncited PMA course deck to Klue's Competitive Enablement Maturity Model (2021, developed with SCIP), a five-stage version (Ad Hoc, Adopting, Impacting, Influencing, Transforming) rather than the deck's unverified four-stage split. **Time to Value Framework** joins the Activation & Adoption Frameworks table (prerequisite: customer interviews for the qualitative "aha moment" plus usage/retention data; feeds the Customer Onboarding Maturity Framework's milestone design and Product-Led Growth's activation-moment instrumentation) and is added to BY-SITUATION.md's Reducing Customer Churn situation as an optional aside on step 4. Re-sourced from the PMA deck's unverified TTBV/TTEV/ITTV/LTTV acronym split to the converged, independently documented Time to First Value / Time to Core Value distinction (Lincoln Murphy, Sixteen Ventures). **VARS Framework** joins the Sales Enablement table (prerequisite: the Competitive Battlecard Framework, as the source of its acknowledgement, reframe, and proof-point content; feeds live competitive sales conversations and rep training) and is added to BY-SITUATION.md's Enabling the Sales Team for a New Segment situation as an optional aside on the battlecard step. Sourced to Alex McDonnell, presented via the Competitive Intelligence Alliance's CI: Masters certification programme, independent of the uncited PMA deck. The PM/PMM Collaboration Maturity Model (candidate 7) was researched and rejected: no independent source exists beyond the course deck. This closes NEW-SOURCES-GAP-ANALYSIS.md in full: 6 of 8 candidates built, 2 rejected. Entry count updated 63 → 66.

**2026-08-14 (first three NEW-SOURCES-GAP-ANALYSIS.md builds)**: **MAP Model** joins the Foundation Frameworks table (prerequisite: STP's segment definitions plus live revenue/retention data per segment; feeds Quarterly PMM Planning and PMM Team Scaling's choice of which segment a new hire is scoped around) and is added to BY-SITUATION.md's Scaling the PMM Function situation as optional step 2a. **RFM Model** joins the Measurement & Optimisation Frameworks table (prerequisite: customer usage/purchase data; feeds the Forrester Customer Advocacy Model's Champion-segment tracking, Customer Success save-plays, and cross-referencing against NPS) and is added to BY-SITUATION.md's Reducing Customer Churn situation as optional step 0a, run alongside NPS to catch behavioural at-risk signals sentiment surveys alone would miss. **MaxDiff Analysis** joins the Pricing & Packaging Frameworks table (prerequisite: a candidate feature/benefit list, typically 10+ items; feeds Conjoint Analysis as a pre-study, Good-Better-Best Packaging, and Message Architecture pillar prioritisation) and is added to BY-SITUATION.md's Pricing a New Tier or Service situation as optional step 4b, run before Conjoint Analysis when the candidate list is long. Conjoint Analysis's prerequisite and pitfalls text were updated to reference MaxDiff by name rather than an unlinked aside. Entry count updated 60 → 63.

**2026-08-13 (all 6 EXTERNAL-REPO-GAP-ANALYSIS.md candidates, completing that queue)**: **Vertical/Segment Messaging via Buying Trigger** and **Andy Raskin's Strategic Narrative Framework** join the Positioning Frameworks table (Vertical/Segment Messaging: prerequisite a validated Message Architecture plus STP; feeds outbound opens, ad headlines, and hero-section variants by segment. Raskin: prerequisite a real, verifiable market shift; feeds pitch decks, keynotes, and category-launch narratives). Neither is added to Scenario 1 or 2 below, since this map's shorter scenario list has no dedicated multi-segment-messaging or fundraising-narrative scenario; both are placed against their matching BY-SITUATION.md situations instead (Situation 2 and Situation 1 respectively). **Account-Based Everything (ABX) / TEAM Framework** and **Pre-mortem** join the Go-to-Market Frameworks table (ABX: prerequisite GTM Motion Model selecting field sales plus ICP Development Methodology; feeds Category 9's Buyer's Journey Content Map, Competitive Battlecard Framework, and MEDDIC/MEDDPICC. Pre-mortem: prerequisite a launch plan ready to ship; feeds the launch go/no-go decision) and are built directly into Scenario 1 (New Product Launch): ABX as an alternate path inside step 3, alongside Product-Led Growth, when the GTM Motion Model selects field sales for a committee-driven deal rather than self-serve or PLG; Pre-mortem as new step 6e, run once the launch plan is largely built but before Complete GTM Workflow's Launch phase begins. **Playing to Win (Strategic Choice Cascade)** and **MOVE GTM Diagnostic** join the Strategy & Planning Frameworks table (Playing to Win: prerequisite STP's where-to-play evidence; feeds Quarterly PMM Planning and PMM Team Scaling. MOVE: prerequisite none, an evidence-based self-assessment; feeds Quarterly PMM Planning, Customer Onboarding Maturity Framework, and Feature Adoption Framework). Playing to Win is placed first in its table, above Quarterly PMM Planning, reflecting that it operates a level above the operational planning frameworks it feeds; neither it nor MOVE is forced into Scenarios 1-5 below, since both are standing strategic/diagnostic practices rather than steps inside a single launch or repositioning sequence, consistent with how Analyst Relations Tiering & Cadence Model and Pragmatic Institute Framework were handled in the same table. This completes all 6 approved EXTERNAL-REPO-GAP-ANALYSIS.md candidates (candidate 7, RICE Prioritization, was rejected, not built). Entry count updated 54 → 60.

**2026-07-30 (housekeeping: Category 9 consolidation)**: Moved the Competitive Battlecard Framework and the Buyer's Journey Content Map into the Sales Enablement table (Category 9), consolidated from Category 3 and Category 5 respectively, alongside the Sales Enablement Maturity Model and MEDDIC/MEDDPICC. Every dependency-matrix and scenario reference to either entry is unchanged in substance (their prerequisites and what they feed remain the same); only their category location changed. Total entry count is unaffected (54).

**2026-07-30 (tenth, eleventh, and twelfth FRAMEWORK-BACKLOG.md builds, completing that queue)**: **Analyst Relations Tiering & Cadence Model** and **Pragmatic Institute Framework** join the new Strategy & Planning Frameworks table entries (Analyst Relations: prerequisite none, an analyst universe to build and score; feeds the Competitive Intelligence & Positioning Update Framework, Message Architecture's briefing kit content, and Quarterly PMM Planning's resourcing. Pragmatic Institute: prerequisite an existing enablement programme and a launched product/portfolio to audit; feeds the Sales Enablement Maturity Model's certification inputs and Good-Better-Best Packaging's pricing health review). Analyst Relations Tiering & Cadence Model is now an optional step 2a of the Improving Win Rate scenario, run alongside Competitive Intelligence when analyst reports are cited in competitive deals (and BY-SITUATION.md's matching Competing Against Established Players situation, as step 1a); Pragmatic Institute Framework is noted against BY-SITUATION.md's Measuring PMM Impact & ROI situation as an optional step 4a, since this map's shorter scenario list has no dedicated PMM operating-model scenario. **Sean Ellis 40% Test** joins the Foundation Frameworks table (prerequisite: STP, to cut the survey by segment; feeds the product's growth-investment decision, which stays product-owned, and the segment's positioning and messaging, which is PMM's supporting role) and is now an optional step 7a of the Repositioning for New Segment scenario, run once usage data exists in the new segment (and BY-SITUATION.md's matching Entering a New Market or Segment situation, as step 10a). This completes all 12 FRAMEWORK-BACKLOG.md candidates; entry count updated 51 → 54.

**2026-07-30 (seventh, eighth, and ninth FRAMEWORK-BACKLOG.md builds, next in rank order)**: **Launch Tier Framework** joins the Go-to-Market Frameworks table (prerequisite: none, a launch ready to be scheduled; feeds the 10-Step PMM Process's choice of lightweight or full sequence, Complete GTM Workflow Stages' phase count, and Quarterly PMM Planning's launch calendar) and is now step 0 of the New Product Launch scenario, run before the rest of the sequence to set the launch's lead time and resourcing. **Message Testing (Message-Market Fit)** joins the Positioning Frameworks table (prerequisite: draft copy from Message Architecture, the FAB Ladder, or StoryBrand SB7; feeds the version that ships and a logged result for the next test cycle) and is now an optional step 6d of the New Product Launch scenario, run after Message Architecture, the FAB Ladder, and StoryBrand SB7 to test the launch's headline copy against a verified buyer panel before it ships. **Forrester Customer Advocacy Model** joins the Activation & Adoption Frameworks table (prerequisite: NPS, as the source of Promoters; feeds case studies, sales reference calls, and Competitive Battlecard Framework proof points) and is added to BY-SITUATION.md's Building a Customer Advocacy Programme situation, run immediately after NPS to convert the Promoter list into a managed, tiered advocacy practice rather than an ad hoc one. Entry count updated 48 → 51.

**2026-07-29 (fifth and sixth FRAMEWORK-BACKLOG.md builds, next in rank order)**: **Category Design** joins the Competitive Frameworks table (prerequisite: STP plus evidence, from win/loss and Voice of the Customer signal, that the existing category caps the ceiling; feeds a new Point of View and Message Architecture's copy hierarchy) and is now an optional step 0a of the Improving Win Rate scenario, run instead of the standard competitive-execution steps only when out-executing competitors inside the existing category would not raise the ceiling. **MEDDIC/MEDDPICC** joins the new Sales Enablement table alongside the Sales Enablement Maturity Model (prerequisite: none, a sales-owned qualification discipline; PMM's supporting content draws on the Competitive Battlecard Framework, Command of the Message, and the FAB Ladder) and is now an optional step 6b of the Improving Win Rate scenario, run after Command of the Message to supply the Metrics, Decision Criteria, and Competition content a rep needs to answer the checklist. Built with an explicit "PMM's supporting role" framing, per FRAMEWORK-BACKLOG.md's build condition, since qualification itself is sales-owned. Entry count updated 46 → 48.

**2026-07-28 (nineteenth ENRICHMENT-PLAN.md build, plus first FRAMEWORK-BACKLOG.md build)**: **Sales Enablement Maturity Model** joins a new "Sales Enablement" table as Category 9's first entry (prerequisite: none, an honest self-assessment plus rep interviews; feeds the Competitive Battlecard Framework and Buyer's Journey Content Map, since it tells a team whether it is ready to build and sustain them, plus enablement headcount and tooling business cases) and is now an optional step 0 of the Improving Win Rate scenario, run first when existing enablement material is stale or hard to find. This completes all 19 ENRICHMENT-PLAN.md candidates. **StoryBrand SB7 Framework** joins the Positioning Frameworks table (prerequisite: a validated positioning statement; feeds homepage and landing-page copy, founder narratives, video scripts, and demo scripts) and is now an optional step 6c of the New Product Launch scenario, drafting the launch page as a seven-part story arc alongside the FAB Ladder's benefit-first proof points. Entry count updated 44 → 46.

**2026-07-27 (seventeenth and eighteenth builds)**: Added the seventeenth and eighteenth ENRICHMENT-PLAN.md builds, continuing the "Lower" batch. **Gabor-Granger Method** joins the Pricing & Packaging Frameworks table (prerequisite: STP, with the Van Westendorp PSM corridor recommended first; feeds Good-Better-Best's tier anchor price, or a standalone SKU/add-on price decision) and is now an optional step 5b of the Pricing a New Tier or Service scenario, run after Conjoint Analysis and Kano Model to pick the specific revenue-maximising price rather than relying on the PSM corridor's midpoint alone. **Usage-Based (Consumption) Pricing Model** joins the same table (prerequisite: Value Metric/WTP, to identify the value-scaling usage unit; feeds Good-Better-Best's usage-scaled allowances and the billing/metering build) and is now an optional step 4a, run immediately after Value Metric/WTP when that step shows the current value metric doesn't track usage. Entry count updated 42 → 44. This completes 18 of the 19 ENRICHMENT-PLAN.md candidates; A19 (Sales Enablement Maturity Model) remains.

**2026-07-25 (fifteenth and sixteenth builds)**: Added the fifteenth and sixteenth ENRICHMENT-PLAN.md builds, continuing the "Lower" batch. **Perceptual Map (2x2)** joins the Competitive Frameworks table (prerequisite: STP to choose the segment to plot for, plus Win/Loss as the source of buyer-relevant axes; feeds Product Differentiation and a positioning refresh) and is now an optional step 6a of the Repositioning for New Segment scenario, run alongside Bowman's Clock to check the new positioning against a second, buyer-chosen pair of attributes. **Features-Advantages-Benefits (FAB) Ladder** joins the Positioning Frameworks table (prerequisite: a feature to translate, ideally one that maps to a Message Architecture pillar; feeds Message Architecture proof points, release notes, demo scripts, and Command of the Message's quantified value cases) and is now an optional step 6b of the New Product Launch scenario, run after Message Architecture and Bullseye Framework to test the launch's headline proof points before they are locked. Entry count updated 40 → 42.

**2026-07-24 (thirteenth and fourteenth builds)**: Added the thirteenth and fourteenth ENRICHMENT-PLAN.md builds, completing the "Medium" batch and opening the "Lower" batch. **Command of the Message** joins the positioning frameworks table (prerequisite: Message Architecture; feeds live sales conversations, sales enablement training, and the Competitive Battlecard Framework) and is now step 6a of the Improving Win Rate scenario, run after the battlecard is built to give reps a quantified value case for the specific competitor named in it. **Bullseye Framework** joins the Go-to-Market Frameworks table (prerequisite: the GTM Motion Model, to fix which acquisition motion the channel test operates within, plus STP for the target segment; feeds Complete GTM Workflow's Phase 2 channel validation and Quarterly PMM Planning) and is now an optional step 6a of the New Product Launch scenario, run after Message Architecture and before Complete GTM Workflow so channel testing starts from a tested shortlist rather than habit or opinion. Entry count updated 38 → 40.

**2026-07-23 (eleventh and twelfth builds)**: Added the eleventh and twelfth ENRICHMENT-PLAN.md builds, continuing the "Medium" batch. **ICP Development Methodology** joins the Foundation Frameworks table (prerequisite: STP's Targeting step; feeds sales prospecting, lead scoring, and ABM target lists) and is now step 2 of the Repositioning for New Segment scenario, run immediately after STP validates the segment and before the positioning research process begins. **Kano Model** joins the Measurement & Optimisation Frameworks table (prerequisite: STP, to segment the survey; feeds roadmap priority, Good-Better-Best tier fences, and launch messaging) and is now an optional step 5a in both the New Product Launch scenario (classify the launch feature set before drafting the launch headline) and the Pricing a New Tier or Service scenario (confirm must-be versus delighter placement before drawing tier fences). Entry count updated 36 → 38.

**2026-07-23 (ninth and tenth builds)**: Added the ninth and tenth ENRICHMENT-PLAN.md builds, continuing the "Medium" batch. **Conjoint Analysis** joins the Pricing & Packaging table (prerequisite: STP, with Van Westendorp PSM and/or Value Metric/WTP recommended first; feeds Good-Better-Best Packaging) and is now an optional step 5 of the Pricing a New Tier or Service scenario for contested bundling decisions. **Buyer's Journey Content Map** joins the Activation & Adoption Frameworks table (prerequisite: PMM Lifecycle and Win/Loss Analysis; feeds sales enablement and the Competitive Battlecard Framework) and is now step 5 of the Improving Win Rate scenario, run before the battlecard step to confirm content exists at the stage where deals are stalling. Entry count updated 34 → 36.

**2026-07-22 (seventh and eighth builds)**: Added the seventh and eighth ENRICHMENT-PLAN.md builds, continuing the "Medium" batch. The **JTBD Switch Interview Method** joins the positioning frameworks table (prerequisite: recent buyers, purchased within 1-3 months; feeds the JTBD Positioning Framework and the Voice of the Customer Programme) and is now step 3 of the Repositioning for New Segment scenario, run before capturing the new positioning hypothesis when the hypothesis is job-based rather than attribute-based. **Product-Led Growth** joins the Go-to-Market Frameworks table (prerequisite: the GTM Motion Model selects self-serve or PLG; feeds Feature Adoption and Onboarding Maturity) and is noted as a parallel track inside step 3 of the New Product Launch scenario. Entry count updated 32 → 34.

**2026-07-22 (fifth and sixth builds)**: Added the fifth and sixth ENRICHMENT-PLAN.md builds. The **GTM Motion Model** joins the Go-to-Market Frameworks table as the new first entry (prerequisite: STP; feeds the 3/7/10-Step PMM frameworks and Complete GTM Workflow) and is now step 3 of the New Product Launch scenario, run before positioning so the launch is built for the right acquisition motion. Renamed the existing "GTM Motion" references to "GTM Motion Framework" throughout this map to distinguish it clearly from the new GTM Motion Model: the Framework choreographs a single launch's cross-channel execution; the Model selects which acquisition motion (self-serve, PLG, inside sales, field sales, partner-channel) a company or launch runs through in the first place. The **GTM Strategy vs Product Marketing primer** (`concepts/gtm-strategy-vs-product-marketing.md`) is not added to the dependency matrix, since a primer is a scope explainer rather than an applied step; it is noted at the top of this document instead. Entry count updated 30 → 32.

**2026-07-22 (third and fourth builds)**: Added the third and fourth ENRICHMENT-PLAN.md builds to the map. Dunford's 10-Step Positioning Process joins the positioning frameworks (prerequisite: best-fit customers and STP; feeds the 5-Component Positioning Canvas and Message Architecture) and is now step 2 of the Repositioning for New Segment scenario. The Competitive Battlecard Framework joins the competitive frameworks (prerequisite: Competitive Intelligence, Product Differentiation, and Bowman's Clock; feeds live sales deals and Win/Loss Analysis) and is now step 5 of the Improving Win Rate scenario. Entry count updated 28 → 30.

**2026-07-21**: Added the first two ENRICHMENT-PLAN.md builds to the map. Message Architecture (Messaging House) joins the positioning frameworks (prerequisite: a validated positioning statement; feeds GTM execution and sales enablement) and is now step 5 of the New Product Launch scenario. The Voice of the Customer (VoC) Programme joins the measurement and optimisation frameworks as the system that connects Win/Loss and NPS. Entry count updated 26 → 28.

**2026-07-19**: Added Category 8 (Pricing & Packaging) to the dependency matrix and a new "Pricing a New Tier or Service" scenario; corrected the framework count to 26 (this map had not been updated since the three Category 8 frameworks were added between 2026-07-12 and 2026-07-18, and the repository-wide total was separately found to have been miscounted at 22 due to Product Differentiation Strategy Framework being double-listed in Category 2 and Category 3; see PROGRESS.md).

**2026-04-09**: Initial framework map created based on 19-framework knowledge base. Includes dependency matrix, common scenarios, and workflow guidance.

