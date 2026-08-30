---
name: pricing-study-design
description: "Use when a price or packaging decision needs evidence: setting a price for a new product or tier, deciding whether to raise prices, choosing what to charge for (seats, usage, outcomes), deciding which features belong in which tier, or settling an internal argument between sales and finance about price. Also use when someone asks for a pricing survey, willingness to pay research, Van Westendorp, Gabor-Granger, conjoint, MaxDiff, or good-better-best packaging. Picks the right study for the decision rather than defaulting to one method, designs it, and turns the result into a packaging recommendation."
metadata:
  author: "PMM Knowledge Base maintainers (github.com/prasannaunar/pmmkb)"
  kb-source: "frameworks/08-pricing-packaging.md"
  frameworks: "Value Metric / Willingness-to-Pay; Van Westendorp Price Sensitivity Meter; Gabor-Granger Method; Conjoint Analysis; MaxDiff Analysis; Good-Better-Best Packaging; Usage-Based Pricing Model"
  format-spec: "Agent Skills open format, agentskills.io/specification"
  attribution: "See agent-skills/ATTRIBUTION.md"
  version: "1.0"
  last-updated: "2026-08-30"
---

# Pricing study design

"Set a price" is at least three separate decisions: what you charge for, what
the acceptable range is, and which point inside it you pick. Each needs a
different study. Reaching for a familiar method before naming the decision is
how teams end up with a well-run study that answers the wrong question.

Paths below are relative to the knowledge base root. Full entries are in
`frameworks/08-pricing-packaging.md`.

## Step 1: Name the decision, then pick the method

| The actual decision | Method | Why this one |
|---|---|---|
| What unit do we charge for? | Value Metric / Willingness-to-Pay | Fixes the metric before any number is tested; a price on the wrong unit cannot be rescued by a better number |
| Which of these many features or benefits do buyers even care about? | MaxDiff (best-worst scaling) | Forced ranking of a long list, no price attached; the standard pre-study before conjoint |
| What price range is acceptable for something with no comparable? | Van Westendorp PSM | Returns a corridor and an indifference point without asking anyone to name a price |
| Which single price inside a known range maximises revenue? | Gabor-Granger | Tests purchase intent at ascending points; needs an assumable purchase volume for the demand curve to mean anything |
| Which features justify moving a customer up a tier, and what is each worth? | Conjoint analysis | Infers per-feature willingness to pay from trade-offs; degrades past roughly six attributes |
| How do we structure the tiers we have decided on? | Good-Better-Best packaging | Three value-ascending tiers fenced by feature and persona |
| Flat fee, per seat, or consumption? | Usage-Based (Consumption) Pricing Model | Trades revenue predictability against usage-value correlation, and guides the hybrid base-plus-overage choice |

Common sequences: value metric, then Van Westendorp, then Gabor-Granger inside
the resulting corridor. Or MaxDiff to narrow a long feature list, then conjoint
on the survivors, then Good-Better-Best to build the tiers.

## Step 2: Design the study

1. **Define the concept precisely.** Respondents price what they understand.
   A vague concept produces a wide, useless corridor. Write the concept
   description as the buyer would encounter it, not as an internal spec.
2. **Recruit to the ICP, and screen properly.** Respondents must be people who
   would actually buy this, in the right role, at the right company profile.
   Existing customers alone will anchor low; a general panel will answer for a
   product they will never buy. Segment the sample so results can be read per
   persona, since willingness to pay varies far more by persona than by an
   average.
3. **Size the sample to the method.** Van Westendorp and Gabor-Granger work at
   roughly 100 to 200 qualified respondents per segment; conjoint needs more
   because it estimates per-attribute utilities; MaxDiff is the cheapest and
   most respondent-friendly of the set.
4. **Pilot with five respondents** before fielding. If anyone asks what a
   question means, the wording will corrupt the data at scale.
5. **Field, then analyse per segment before you look at the pooled result.**
   A pooled corridor that no individual segment holds is an artefact of
   averaging, not a finding.

## Step 3: Turn the result into a recommendation

State the corridor or point, the segments it holds for, the assumptions behind
it, and what it does not tell you. Then translate into packaging: which tier
carries which capability, what fences each tier (feature, persona, or usage),
and what the expected upgrade path is. Route the recommendation to whoever owns
the decision, which is often Finance, a VP Product, or a pricing committee at
scale, and a solo or founding PMM outright at an earlier stage.

## Gotchas

- **Stated willingness to pay overstates actual willingness to pay.** Every
  method here measures intent, not behaviour. Treat outputs as a bounded range
  to decide within, never as a forecast, and validate with a live test where
  possible.
- **Van Westendorp gives a corridor, not a price.** Teams routinely report the
  indifference point as "the price". It is the point where equal numbers call
  the product cheap and expensive, and it is an anchor for the middle tier, not
  a decision.
- **Gabor-Granger needs candidate prices already on the table.** Running it
  with no prior range produces a survey about arbitrary numbers.
- **Conjoint past six attributes degrades.** Respondents satisfice on long
  designs. Run MaxDiff first to cut the list to the genuinely contested few.
- **Cannibalisation is the packaging risk nobody surveys for.** A new middle
  tier that most existing top-tier customers would happily drop to is a
  revenue cut dressed as a packaging improvement. Model the migration before
  committing.
- **A price study cannot settle a positioning problem.** If buyers do not
  understand what the product does, they will price it as a commodity. Check
  that positioning is settled before commissioning research.
- **Existing customers price the product they already have.** For a new tier or
  a repositioned product, they are the wrong panel, or at best one segment
  inside a wider one.

## Output

Deliver the decision statement, the method chosen and why the alternatives were
not, the study design (concept text, screening criteria, sample size per
segment), the results read per segment, the price or corridor recommendation
with its assumptions, the packaging structure, and the named decision owner.

## See also

`positioning-development` (the prerequisite for pricing a repositioned
product), `icp-definition` (defines who to recruit), `win-loss-programme`
(surfaces the price themes worth studying), `launch-planning` (a pricing change
is rarely a Tier 3 launch).

## Attribution

Derived from the pricing entries in `frameworks/08-pricing-packaging.md`, which
carry the full citations (including Van Westendorp, Gabor and Granger, and
Louviere and Woodworth for best-worst scaling). Skill format follows the Agent
Skills open specification. See [ATTRIBUTION.md](../ATTRIBUTION.md).
