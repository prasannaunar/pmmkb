---
name: icp-definition
description: "Use when the question is who to sell to: leads are poor fit, sales chases everything, marketing and sales disagree about the target, a new segment is being considered, resourcing has to be split between segments, or someone asks for an ICP, ideal customer profile, target segment, buyer persona, account tiering, or lead scoring criteria. Runs segmentation and targeting, then builds a weighted, CRM-scored fit model from closed-won and closed-lost evidence, and ranks existing segments against each other when resourcing is contested."
metadata:
  author: "PMM Knowledge Base maintainers (github.com/prasannaunar/pmmkb)"
  kb-source: "frameworks/01-market-customer-understanding.md"
  frameworks: "Segmentation-Targeting-Positioning (STP); ICP Development Methodology; MAP Model (Measure, Analyze, Prioritize); JTBD Switch Interview Method"
  format-spec: "Agent Skills open format, agentskills.io/specification"
  attribution: "See agent-skills/ATTRIBUTION.md"
  version: "1.0"
  last-updated: "2026-08-30"
---

# ICP definition

Two different questions hide behind "who is our customer?". Segmentation and
targeting choose a strategic segment; an ICP ranks specific accounts inside it.
Answer them in that order, and do not run the second as a second segmentation.

Paths below are relative to the knowledge base root. Full entries are in
`frameworks/01-market-customer-understanding.md`.

## Step 0: Which question is being asked?

- **No agreed target at all, or entering a new market:** start with STP.
  Segment the market, evaluate segments on size, growth, fit, and
  accessibility, and choose one to target.
- **Target segment agreed but account quality is poor:** skip to the ICP build
  below. Take the chosen segment as scope and narrow inside it.
- **Several segments already served and resourcing is contested:** use the MAP
  Model (Measure, Analyze, Prioritize) to rank existing segments against each
  other on measured size and performance, so the split rests on evidence rather
  than on whichever segment was pitched loudest.

## Building the ICP

1. **Take the target segment as the starting scope**, for example mid-market
   fintech at 100 to 1,000 employees. Narrow from there; do not re-segment.
2. **Pull the evidence base.** Export closed-won and closed-lost deals from the
   past 12 to 24 months, ideally 50 to 100 accounts. For each, gather
   firmographic data (industry, employee count, revenue band, geography),
   technographic data (which adjacent tools they already run), and behavioural
   data (what they engaged with, how they first made contact, how long the
   cycle ran).
3. **Isolate what separates wins from losses.** Compare won accounts against
   lost and never-progressed accounts on every attribute. Look for attributes
   that appear disproportionately in wins: if accounts already running a
   specific complementary tool close three times more often, that tool is a
   strong-fit signal.
4. **Build a weighted score.** Weight each signal by how strongly it predicted
   a win, heavier on firmographic and technographic fit and lighter on softer
   behavioural signals unless the data says otherwise. Group scores into three
   or four fit tiers: Tier A prioritise, Tier B standard cadence, Tier C
   deprioritise.
5. **Validate on a holdout set.** Score accounts the model never saw, ideally
   the most recent quarter's closed deals, and check that Tier A actually
   closed faster and at a higher rate than Tier C. If it did not, fix the
   weighting before rolling out.
6. **Operationalise it.** Push the score into the CRM and marketing automation
   platform as a field on every account and lead, so outreach and inbound
   routing follow the model without manual judgement.
7. **Add the human layer.** Firmographics say which accounts to work; switch
   interviews say why they bought. Interview a handful of Tier A customers on
   the timeline of their switch to find the triggering event, and record it;
   that trigger is what segment messaging routes against later.

## Gotchas

- **An ICP built only from wins finds correlations, not causes.** Big customers
  in your best vertical closed partly because that is where the sales team
  spent its time. Compare against losses and never-progressed accounts, or the
  model just describes past effort allocation.
- **Do not skip the holdout validation.** A model fitted to historical deals
  will always look predictive on those deals. Untested scores pushed into the
  CRM lose sales' trust the first time a Tier C account closes big.
- **An ICP is not a persona.** The ICP describes the account; the persona
  describes the human who signs and the human who uses. Both are needed, and
  conflating them produces messaging aimed at nobody.
- **Refresh at least annually.** Product changes, competitor moves, and new
  segments all shift what predicts a win. A three-year-old fit model quietly
  misroutes every lead.
- **Excluding a segment is the point.** An ICP that does not deprioritise
  anything is a description of the total addressable market and will not change
  a single outreach decision.
- **Sales has to agree before the score routes anything.** A model imposed on
  reps gets ignored. Walk them through the win/loss comparison that produced
  the weights.

## Output

Deliver the completed scorecard (`assets/icp-scorecard.md`): the segment
chosen and why, the signals with their weights and the win-rate evidence behind
each, the tier thresholds, the holdout validation result, the CRM field
definition, the explicit out-of-scope list, and the refresh date.

## See also

`positioning-development` (the segment work here feeds its step 5),
`messaging-architecture` (buying triggers route to pillars),
`win-loss-programme` (the evidence base for step 3),
`pricing-study-design` (the ICP defines who to recruit to a pricing study).

## Attribution

Derived from the STP Framework, ICP Development Methodology, MAP Model, and
JTBD Switch Interview Method entries in
`frameworks/01-market-customer-understanding.md`, which carry the full
citations. Skill format follows the Agent Skills open specification. See
[ATTRIBUTION.md](../ATTRIBUTION.md).
