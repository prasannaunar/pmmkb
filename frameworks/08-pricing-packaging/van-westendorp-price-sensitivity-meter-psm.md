---
title: "Van Westendorp Price Sensitivity Meter (PSM)"
slug: "van-westendorp-price-sensitivity-meter-psm"
type: Framework
order: 20
use_when: "You need to explore the price range buyers perceive as acceptable."
produces: "A survey-based view of price perception."
description: "Peter van Westendorp's four-question survey finds the range of prices customers will accept, without asking them to name a single 'right' price."
---

# Van Westendorp Price Sensitivity Meter (PSM)

**What it is:** A survey method, developed by Dutch economist Peter van Westendorp and first presented as "NSS-Price Sensitivity Meter (PSM): A New Approach to Study Consumer Perception of Price" at the 1976 ESOMAR Congress, that finds the range of prices customers will accept for a product, without asking them to name a single "right" price. Respondents answer four questions about the same product concept: at what price would it be so cheap you'd doubt its quality, so cheap it's a bargain, starting to get expensive, and so expensive you wouldn't consider it. Plotting the four response curves against each other produces a price corridor (the range most customers accept) and an indifference price point (where "expensive" and "cheap" perceptions cross). Unlike frameworks that group features into tiers, PSM answers a narrower, earlier question: what should this product cost at all, before you decide how to package it.

**When to use it:**
- Setting the price for a genuinely new product or service with no direct competitor to benchmark against
- Validating a price point before committing to it in a launch, rather than guessing or copying a competitor's list price
- You suspect your current price is off but don't know which direction, or by how much, to move it
- Preparing to set the price ladder for a Good-Better-Best structure and need a defensible anchor price for the middle tier
- Facing internal disagreement (sales wants it cheaper, finance wants it dearer) and need customer data to settle the debate
- Testing price sensitivity across different customer segments before a regional or vertical-specific launch

**Ownership:** PMM designs and runs the survey, defines the product concept, and analyses the resulting corridor; this is operator work PMM owns outright, whether or not PMM makes the final call on price. The output, an acceptable price range rather than a single figure, typically feeds a decision owned by Finance, a VP Product, or a pricing committee at scale, since it must be weighed against margin targets and strategy. A solo or founding PMM usually owns both the study and the resulting price decision, absent a separate function to hand it to.

**How to apply it:**
1. **Define the exact product concept.** Write a one-paragraph description of precisely what respondents are pricing: the specific feature set, service level, and use case. If the concept is vague, respondents will price different things in their heads and the corridor will be meaningless.
2. **Recruit a representative sample.** Aim for at least 100 respondents who match your actual target buyer profile (same company size, role, and budget authority you'd sell to in production). Fewer than 50 responses produces a corridor too noisy to act on.
3. **Ask the four Van Westendorp questions in this order,** using the exact product concept from step 1:
   - "At what price would you consider this product to be so expensive that you would not consider buying it?" (Too Expensive)
   - "At what price would you consider this product starting to get expensive, so that it's not out of the question, but you'd have to give some thought to buying it?" (Expensive/Getting Expensive)
   - "At what price would you consider this product to be a bargain; a great buy for the money?" (Cheap/Bargain)
   - "At what price would you consider this product to be priced so low that you'd feel the quality couldn't be very good?" (Too Cheap)
4. **Plot the four cumulative response curves** on a single chart with price on the x-axis and cumulative percentage of respondents on the y-axis. Plot "Too Cheap" and "Expensive" as cumulative percentage answering at or below each price; plot "Too Expensive" and "Cheap" as cumulative percentage answering at or above each price.
5. **Identify the four intersection points:**
   - **Point of Marginal Cheapness (PMC):** where "Too Cheap" crosses "Expensive"; below this, too many people doubt quality
   - **Point of Marginal Expensiveness (PME):** where "Too Expensive" crosses "Cheap"; above this, too many people reject the price outright
   - **Optimal Price Point (OPP):** where "Too Cheap" crosses "Too Expensive"; the price at which the fewest people object on either side
   - **Indifference Price Point (IPP):** where "Cheap" crosses "Expensive"; the price the median respondent perceives as neither cheap nor expensive
6. **Set your acceptable price range as PMC to PME**, and use the OPP or IPP as your working anchor, adjusted for your margin targets and strategic goals (e.g., aggressive market entry might justify pricing near the PMC).
7. **Segment the analysis by buyer type** if your sample spans multiple personas (SMB vs. enterprise, for example). Different segments often produce meaningfully different corridors; a single blended corridor can mask a segment that would pay significantly more.
8. **Re-run PSM whenever the product concept changes materially** (a major new feature, a shift in positioning, entry into a new market) since the corridor is tied to the specific concept respondents evaluated, not the product in the abstract.

**Example:**

Fictional insurtech startup Coverwell is preparing to launch a usage-based car insurance product and has no direct comparable to benchmark against; existing competitors sell traditional annual policies, not a pay-per-mile model. Internally, the pricing debate is stuck: the CFO wants to price at $0.09/mile to hit margin targets, while sales argues customers will balk above $0.06/mile.

Coverwell runs a Van Westendorp survey with 220 respondents who match its target profile (drivers under 8,000 miles/year, aged 25–55, currently paying for traditional annual cover). The four curves produce a Point of Marginal Cheapness of $0.04/mile, a Point of Marginal Expensiveness of $0.11/mile, and an Optimal Price Point of $0.075/mile, meaning the fewest respondents object at that price. The Indifference Price Point comes in at $0.08/mile.

Coverwell sets its launch price at $0.079/mile, just inside the OPP and comfortably within the $0.04–$0.11 corridor; this beats the CFO's original target while addressing sales' concern that $0.09/mile would sit close to the rejection threshold. Segmenting the data further, Coverwell finds respondents in its lowest-mileage bracket (under 4,000 miles/year) have a corridor $0.02/mile higher across all four points, so it flags this group as a candidate for a future higher-mileage-inclusive tier. Within the first two quarters post-launch, price-related quote abandonment sits at 8%, well below the roughly 20% abandonment rate that industry sources such as insurtech benchmarking reports commonly cite for new insurance product launches, and Coverwell attributes the difference directly to pricing inside a validated corridor rather than an internally debated guess.

**Pitfalls:**
- **Testing an underspecified or overly abstract concept.** If respondents aren't shown a concrete, specific product description, they price wildly different mental products and the resulting corridor is unusable. Recovery: pilot the four questions with 5–10 respondents first and check their open-ended comments to confirm they understood the exact concept being priced; refine the description before running the full sample.
- **Treating the Optimal Price Point as the final price without margin or strategy input.** PSM tells you what customers will tolerate; it says nothing about your cost base, competitor moves, or margin targets. Recovery: use the corridor (PMC to PME) as the boundary of acceptable prices, then set the actual price using cost, margin, and strategic goals (e.g., land-and-expand pricing near the PMC, premium positioning near the PME) as a second step, not as part of the survey itself.
- **Ignoring segment differences by blending all respondents into one corridor.** A single corridor across SMB and enterprise buyers, or across regions with different purchasing power, averages away real differences and can leave money on the table with high-willingness-to-pay segments or price out budget-constrained ones. Recovery: run the analysis separately by segment whenever your sample size allows (minimum ~50 respondents per segment), and consider segment-specific pricing or tiers if the corridors diverge meaningfully.

**Sources:** Peter H. van Westendorp
- Peter H. van Westendorp, ["NSS: Price Sensitivity Meter (PSM): A New Approach to Study Consumer Perception of Price"](https://ana.esomar.org/documents/nss-pricesensitivity-meter-psm-), ESOMAR Congress (1976)

**See also:** Good-Better-Best (GBB) Packaging Framework (use PSM to validate the anchor price before building the tier ladder); Value Proposition Canvas (understand what drives willingness to pay before running the survey); Segmentation–Targeting–Positioning (STP) Framework (define the buyer segments to sample and analyse separately).
