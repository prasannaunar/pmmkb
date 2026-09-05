# Quick Reference: Pricing & Packaging

Condensed one-page summaries. For full detail, pitfalls, and worked examples, see [frameworks/08-pricing-packaging.md](../frameworks/08-pricing-packaging.md). Each card names its primary source; full citations, additional sources, and hedged attributions are documented in that file.

## Contents

1. [Good-Better-Best (GBB) Packaging Framework](#good-better-best-gbb-packaging-framework)
2. [Van Westendorp Price Sensitivity Meter (PSM)](#van-westendorp-price-sensitivity-meter-psm)
3. [Value Metric / Willingness-to-Pay Framework](#value-metric--willingness-to-pay-framework)
4. [Conjoint Analysis](#conjoint-analysis)
5. [Gabor-Granger Method](#gabor-granger-method)
6. [Usage-Based (Consumption) Pricing Model](#usage-based-consumption-pricing-model)
7. [MaxDiff Analysis (Best-Worst Scaling)](#maxdiff-analysis-best-worst-scaling)

---

## Good-Better-Best (GBB) Packaging Framework

**Type:** Framework

**Core concept:** GBB groups your product's features into three value-ascending tiers, usually called Good, Better, and Best. Each tier targets a distinct buyer persona, and features are "fenced" (limited or unlocked) so customers self-select the tier that fits their needs and budget. The middle tier is deliberately the easiest choice; it should capture most purchases.

**When to use it:**
- Launching a new product with no pricing structure yet
- A single flat price is losing deals at both the low and high end
- You have three or more distinct buyer personas with different needs
- Sales is negotiating custom deals with no tier structure to anchor to
- Expansion revenue is flat and there is no clear upgrade path

**Key steps:**
1. Identify 3-5 buyer personas and their budgets, use cases, and buying process.
2. Map features to personas to find "core" versus "premium fence" features.
3. Draft three tiers: Good (core only), Better (anchor tier, most common needs), Best (scale, security, support).
4. Set prices against value received (often roughly 1:3:7 ratio), validated with PSM or Value Metric/WTP data.
5. Choose fences that track real value, not arbitrary limits.
6. Build a comparison table highlighting the middle tier.
7. Test the tiers with 8-10 real prospects before launch, then monitor tier distribution after.

**Apply it:** Sketch a one-page grid with personas as rows and candidate features as columns; mark which persona needs each feature, then group columns into three tiers and draft a price per row.

**Success metrics:**
- Tier distribution close to target split (e.g. 30/50/20 Good/Better/Best)
- Growth in average revenue per user after launch
- Faster deal-close time, especially for the top tier
- Upgrade rate from entry to middle tier over the first year

**Source:** [Pricing strategy guide: 7 types, examples, and how to choose](https://www.paddle.com/resources/pricing-strategy)

---

## Van Westendorp Price Sensitivity Meter (PSM)

**Type:** Framework

**Core concept:** PSM is a survey method that finds the range of prices customers will accept, without ever asking them to name one "right" price. It asks four questions about the same product concept: too cheap, a bargain, getting expensive, and too expensive. Plotting the four answer curves reveals an acceptable price corridor and a point where perceptions of "cheap" and "expensive" cross.

**When to use it:**
- Pricing a genuinely new product with no direct competitor to benchmark
- Validating a price before launch rather than guessing
- Current price feels wrong but the direction to move is unclear
- Setting a defensible anchor price for a GBB middle tier
- Settling an internal pricing disagreement with customer data

**Key steps:**
1. Write a precise, one-paragraph product concept so all respondents price the same thing.
2. Recruit at least 100 representative respondents (50 minimum).
3. Ask the four Van Westendorp questions in fixed order (too cheap, bargain, getting expensive, too expensive).
4. Plot the four cumulative response curves against price.
5. Find the four intersection points: Point of Marginal Cheapness, Point of Marginal Expensiveness, Optimal Price Point, Indifference Price Point.
6. Set the acceptable range as PMC to PME, and anchor on the OPP or IPP, adjusted for margin and strategy.
7. Segment by buyer type and re-run whenever the product concept changes materially.

**Apply it:** Sketch a simple x-y chart on one page with price on the x-axis and four hand-plotted response lines, then mark where they cross to find your working price range.

**Success metrics:**
- Price corridor width (PMC to PME) narrow enough to act on
- Price set inside the corridor, near the Optimal Price Point
- Reduction in price-related quote or deal abandonment after launch (e.g. below industry benchmark)
- Segment-level corridors identified where they diverge meaningfully

**Source:** [Peter H. van Westendorp](https://ana.esomar.org/documents/nss-pricesensitivity-meter-psm-)

---

## Value Metric / Willingness-to-Pay Framework

**Type:** Framework

**Core concept:** This framework sets price around the specific unit of value a customer receives (the "value metric"), such as API calls, transactions, or seats, rather than a flat fee. It defines personas, surveys their willingness to pay, plots the results on a value-versus-willingness-to-pay matrix, and picks the metric that best tracks real usage so price grows naturally as customers get more value.

**When to use it:**
- Current pricing charges for something that does not track actual value received
- Choosing between multiple plausible value metrics for a new product
- Expansion revenue is flat because price has no mechanism to grow with usage
- Rebuilding pricing from scratch (re-platform, new product line, licence-to-subscription shift)
- Feeding persona-level willingness-to-pay data into a GBB exercise

**Key steps:**
1. Define 3-5 personas, noting the outcome each is buying the product to achieve.
2. List candidate value metrics that scale with value, are predictable, and are cheap to measure.
3. Survey willingness to pay per persona per candidate metric (30-50 respondents each).
4. Plot a value-versus-WTP matrix to find best-fit persona clusters.
5. Select the metric that correlates most closely with the value clusters.
6. Align pricing tiers to persona clusters and feed into a GBB structure.
7. Model the revenue impact on existing customers before migrating, and re-survey WTP annually.

**Apply it:** Draw a two-axis grid (value received vertical, willingness to pay horizontal) on one page and plot each persona as a dot, then circle clusters to identify candidate tiers.

**Success metrics:**
- Growth in average revenue per customer after re-pricing
- Reduced churn among previously mispriced (usually smaller) accounts
- Number of existing accounts flagged and protected from bill shock during migration
- Correlation strength between chosen metric and customer-reported value

**Source:** [How to use value metrics to optimize pricing](https://www.paddle.com/blog/value-metrics-pricing)

---

## Conjoint Analysis

**Type:** Methodology

**Core concept:** Conjoint analysis is a trade-off survey that infers how much buyers value individual features and price levels without asking directly. Respondents repeatedly pick their preferred product "bundle" from small sets of feature-and-price combinations, and statistical modelling backs out a value for each feature from the pattern of choices. It is the most rigorous, and most resource-intensive, of the pricing research methods here.

**When to use it:**
- Deciding whether to bundle or unbundle a major feature and need its standalone value
- Building a new product with many candidate features and no price anchor
- Deciding exactly which features justify moving a customer up a tier
- Resolving internal disagreement about which roadmap feature should be premium-only
- You have budget and access to 150+ respondents per segment

**Key steps:**
1. Select 4-6 features and 3-4 price levels each; pre-cut a longer list with a ranking exercise if needed.
2. Choose a choice-based conjoint (CBC) design so respondents pick from small bundle sets.
3. Generate statistically balanced bundles using conjoint software; never hand-build them.
4. Field to 150+ representative respondents per segment, 8-12 choice tasks each, 15-20 minutes total.
5. Estimate part-worth utilities per feature and price level (hierarchical Bayes).
6. Convert part-worths into willingness-to-pay figures per feature.
7. Run a market simulation across candidate packaging scenarios before deciding.
8. Feed results to whoever owns the GBB tier structure.

**Apply it:** Sketch a simple table on one page listing candidate features down the side and three price levels across the top, then note where sales, product, and any early data disagree, to define what the study needs to settle.

**Success metrics:**
- Standalone willingness-to-pay value (in currency) per feature
- Preference-share lift from the winning packaging scenario in simulation
- Upgrade conversion rate change after re-bundling
- Change in deal-cycle length once features map cleanly to buyer needs

**Source:** [R. Duncan Luce and John W. Tukey](https://doi.org/10.1016/0022-2496(64)90015-X)

---

## Gabor-Granger Method

**Type:** Methodology

**Core concept:** Gabor-Granger is a direct pricing method that finds the single price most likely to maximise revenue. Respondents are shown a specific product at a series of rising prices and asked how likely they are to buy at each one, tracing out a demand curve. Multiplying that curve by price and assumed volume produces a revenue curve, and its peak is the recommended price.

**When to use it:**
- You already have a short list of specific candidate prices to choose between
- Van Westendorp has given you a corridor and you need the single best point inside it
- Pricing a single SKU or add-on, not a full tiered structure
- Facing a direct "raise the price or not" decision
- You need a faster, cheaper study than conjoint analysis

**Key steps:**
1. Fix the product concept and pick 5-7 evenly spaced candidate prices.
2. Recruit at least 100 representative respondents (75 minimum).
3. Ask a five-point purchase-intent question at each price in ascending order.
4. Convert responses to a binary "would buy" measure (top two scale points count as yes).
5. Plot cumulative "would buy" percentage against price to get the demand curve.
6. Multiply price by take-up and volume to build the revenue curve, and read off its peak.
7. Sense-check the peak against margin and strategy, and segment by persona.

**Apply it:** Sketch a one-page table with your 5-7 candidate prices as rows and columns for take-up percentage and calculated revenue, then hand-plot the revenue column to spot the peak.

**Success metrics:**
- Take-up percentage at the recommended peak price (flag if under ~20%)
- Post-launch revenue lift from the new price
- Churn increase kept under a pre-agreed ceiling (e.g. under 5 points)
- Segment-level demand curve divergence identified before rollout

**Source:** [André Gabor and C.W.J. Granger](https://www.jstor.org/stable/2552272)

---

## Usage-Based (Consumption) Pricing Model

**Type:** Model

**Core concept:** This model classifies pricing structures along a spectrum from flat fee, through per-seat and tiered usage bands, to fully usage-based (consumption) pricing, based on how tightly the bill tracks actual usage. It gives PMM a shared vocabulary for locating current or proposed pricing on that spectrum and weighing the trade-off between revenue predictability and how closely price tracks the value each customer receives.

**When to use it:**
- Choosing a pricing model for a new product where usage varies widely between customers
- Diagnosing a mismatch where light users feel overcharged or heavy users are under-billed
- Deciding whether to add a usage-based component to an existing subscription
- Explaining a usage-based proposal to stakeholders who default to per-seat thinking
- Benchmarking your model against comparable companies in your category

**Key steps:**
1. Plot your current pricing on the spectrum (flat fee, per-seat, tiered, hybrid, or pure usage-based).
2. Identify the unit that actually grows as a customer gets more value.
3. Name the specific problem a move along the spectrum would solve.
4. Model the revenue-predictability cost of moving toward the variable end.
5. Choose a position on the spectrum, most often a hybrid base fee plus usage overage.
6. Build metering and billing capability before committing to a launch date.
7. Model the transition impact on existing customers and phase in any spikes.
8. Add usage alerts, spend caps, and dashboards so buyers avoid bill shock.

**Apply it:** Draw the five-point spectrum (flat fee to pure usage-based) as a single line on one page, mark where you sit today, mark where the value-scaling unit would place you, and note the predictability trade-off between the two points.

**Success metrics:**
- Churn reduction among previously overcharged small or light-usage customers
- Revenue lift among previously under-billed heavy-usage accounts
- Number of existing accounts flagged and protected from bill spikes during transition
- Support complaints about unexpected bills (target: zero)

**Source:** [Usage-based pricing 101: What it is and strategies to implement it](https://stripe.com/resources/more/usage-based-pricing-101-what-it-is-and-strategies-to-implement-it)

---

## MaxDiff Analysis (Best-Worst Scaling)

**Type:** Methodology

**Core concept:** A trade-off survey method, developed by Jordan Louviere in the early 1990s, that ranks how much respondents value a list of items by repeatedly asking which is most important and which is least important from small rotating subsets. It produces a forced ranking without ever showing a price, making it cheaper and simpler than Conjoint Analysis. MaxDiff answers a narrower question: which items actually matter most. It is the natural first pass before deciding which features are worth pricing rigorously with conjoint.

**When to use it:**
- A long list of candidate features, benefits, or messaging claims needs a forced ranking
- A conjoint study is planned but the feature list is too long (past roughly 6 attributes) to test directly
- Internal teams disagree on which roadmap items or message pillars to prioritise
- You need a respondent-friendly method that avoids Likert-scale clustering at "somewhat important"

**Key steps:**
1. List 10 to 20 candidate items (features, benefits, or messaging claims).
2. Use MaxDiff survey software to generate balanced choice sets of 4 to 5 items each.
3. Present 10 to 15 sets per respondent, asking "most important" and "least important" for each.
4. Recruit at least 100 respondents per persona or segment.
5. Score results by counting "most" minus "least" picks per item across all respondents.
6. Run scoring separately by persona where sample size allows.
7. Feed the ranking into a decision: cut low-priority items, narrow the conjoint list, or lead with the top-ranked pillar.

**Apply it:** Sketch a one-page ranked list of all tested items from highest to lowest importance score, with a persona column alongside, and draw a cut line above the items worth carrying into a conjoint study or a launch.

**Success metrics:**
- Feature list narrowed before a conjoint study (Shiftwell, a fictional company: 12 items to 6)
- Persona-level ranking divergence surfaced (mobile clock-in ranked highest for small-team owners, lowest for mid-market managers in the example)
- Combined research cost lower than a single overloaded conjoint design

**Source:** [Best-Worst Scaling: Theory, Methods and Applications](https://books.google.com/books/about/Best_Worst_Scaling.html?id=UlrHCgAAQBAJ)
