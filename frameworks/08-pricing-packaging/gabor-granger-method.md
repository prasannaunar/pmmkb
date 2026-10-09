---
title: "Gabor-Granger Method"
slug: "gabor-granger-method"
type: Methodology
order: 50
use_when: "You need to test purchase intent at specific price points."
produces: "A demand and revenue view across candidate prices."
---

# Gabor-Granger Method

**What it is:** A direct pricing research method that finds the price most likely to maximise revenue by asking respondents, at a series of ascending price points, whether they would buy the product at each one. Each respondent sees a specific price for a specific product concept and answers a simple purchase-intent question (definitely would buy, probably would buy, might or might not, probably would not, definitely would not); the price moves upward through a fixed sequence until the method has traced out a demand curve: the percentage of respondents willing to buy at each price point. Multiplying that percentage by the price itself, and by an assumed volume, produces a revenue curve, and the price at the peak of that curve is the Gabor-Granger recommended price. Where Van Westendorp answers "what range of prices will customers tolerate" without naming a specific figure twice, Gabor-Granger answers a narrower, more commercially direct question: of the prices we could actually charge, which one makes us the most money.

**When to use it:**
- You have a small number of specific candidate prices already on the table (from a roadmap, a competitor's list price, or an internal debate) and need to choose between them, rather than discover an open-ended range
- Van Westendorp has already given you an acceptable corridor, and you need to pick the single revenue-optimising point inside it
- You're pricing a product with a known or assumable purchase volume, so a price-times-demand curve is meaningful; the method works less well when volume is highly unpredictable
- Setting the price for a single SKU, add-on, or feature, rather than designing a whole tiered structure
- Facing a straightforward "raise the price or not" decision and need direct evidence of the demand response
- You need a faster, cheaper study than conjoint analysis, and the decision doesn't require isolating the value of individual features

**How to run it:**
1. **Fix the product concept and the candidate price points.** Write the same one-paragraph concept description used in any pricing study (see Van Westendorp Price Sensitivity Meter), and choose five to seven prices spanning a realistic range, evenly spaced (for example, $19, $29, $39, $49, $59, $69). Anchor the range using whatever internal data exists: current price, competitor prices, or the Van Westendorp corridor if you have already run it.
2. **Recruit a representative sample.** Aim for at least 100 respondents matching your target buyer profile; below roughly 75 respondents the resulting demand curve is too noisy to read confidently.
3. **Ask the purchase-intent question at each price, in ascending sequence.** Show each respondent the concept at the lowest price first and ask: "How likely are you to buy this product at $X?" using a five-point scale from definitely would buy to definitely would not. Move to the next, higher price and repeat, continuing until the respondent reaches "definitely would not" or the price ceiling. Ascending sequencing avoids anchoring respondents high before they have seen the actual range.
4. **Convert the scale to a binary "would buy" measure.** Treat "definitely would buy" and "probably would buy" as a yes; treat the bottom three responses as a no. This is a standard, defensible cut; document it so the analysis is repeatable.
5. **Plot cumulative "would buy" percentage against price.** The result is a standard downward-sloping demand curve: the percentage of respondents willing to buy falls as price rises.
6. **Multiply through to a revenue curve.** For each price point, multiply the price by the cumulative "would buy" percentage, as a proxy for demand, and by your assumed addressable volume. Plot the resulting revenue curve against price.
7. **Read off the peak.** The price at which the revenue curve peaks is the Gabor-Granger recommended price. Note the percentage of respondents still willing to buy at that price; a very low take-up at the peak, under roughly 20%, signals the sample or concept needs revisiting before you commit.
8. **Sense-check against margin and strategy.** Gabor-Granger optimises stated purchase intent, not actual behaviour or your cost base; adjust the recommended price against your margin target, competitive response, and whether you are prioritising revenue or volume before finalising.
9. **Segment by persona if your sample spans more than one.** Run separate demand and revenue curves per segment where your sample allows, with a minimum of roughly 50 per segment; a single blended curve can hide a segment that would pay meaningfully more or less.

**Cadence & ownership:** PMM typically commissions Gabor-Granger studies alongside a research vendor or an in-house insights team when pricing a specific product, feature, or add-on. Unlike conjoint analysis, the statistical lift is simple enough, a demand curve and a revenue multiplication, that PMM can often run the analysis directly in a spreadsheet without a dedicated data scientist. Run it as a discrete study ahead of a specific pricing decision (a new SKU, a price increase, an add-on launch), not as a continuous programme. Budget one to two weeks end to end for fielding and analysis, materially faster than conjoint analysis; re-run whenever the product concept, competitive landscape, or cost base shifts meaningfully, and always immediately before a planned price increase to confirm it does not cross a demand cliff the last study did not test.

**Example:**

Fictional backup and disaster-recovery SaaS vendor Vaultline is deciding whether to raise the price of its single "Pro" plan add-on, currently $15/month per protected server, to fund new ransomware-detection features. Leadership is split between a modest increase to $19 and a larger jump to $25 that better reflects the new feature's engineering cost.

Vaultline runs a Gabor-Granger study with 240 respondents drawn from its existing customer base and lookalike prospects, testing six ascending price points: $15, $19, $22, $25, $29, and $35. The cumulative "would buy" curve shows 78% would buy at $15 (the current price, as expected), falling to 61% at $19, 52% at $22, 39% at $25, 24% at $29, and 11% at $35. Multiplying each price by its take-up percentage and Vaultline's assumed addressable base of 40,000 protected servers produces a revenue curve that peaks at $22, not at either of leadership's two original proposals.

Vaultline sets the new price at $22/month, just below the modelled peak to leave headroom against a slightly more conservative volume assumption, and segments the data by company size before finalising: enterprise respondents (500+ employees) show only a 6-point take-up drop between $22 and $29, while SMB respondents drop 24 points over the same range, confirming that enterprise accounts have materially more room to absorb the increase. Vaultline phases the increase, holding SMB accounts at $19 for 12 months while moving new enterprise contracts straight to $25. Within two quarters, the price change lifts add-on attach-rate revenue by 31% with a churn increase of only 2 points, well inside the 5-point ceiling leadership had set as the trigger to roll the increase back.

**Pitfalls:**
- **Treating stated purchase intent as a guarantee of actual behaviour.** Respondents answering a hypothetical question about a hypothetical price tend to overstate their true willingness to buy, particularly at low prices where saying yes costs them nothing. Recovery: apply a conservatism discount to the top-box responses, a practice documented in market-research literature on stated-versus-revealed purchase intent (survey and conjoint-analysis providers such as Sawtooth Software publish guidance in this range); a commonly used starting discount is 60-80% of the stated "definitely would buy" value, calibrated against your own category's historical accuracy where you have it, and validate the recommended price with a smaller live test, an actual price change on a subset of new customers or a specific cohort, before rolling it out fully.
- **Assuming a flat, unsegmented demand curve when the sample spans very different buyer types.** A single blended revenue curve can point to a price that undershoots what your highest-value segment would pay while still being too high for your most price-sensitive segment, as the example above shows. Recovery: always segment by persona or firmographic band when your sample size allows, and consider a segmented or tiered price rather than a single number if the curves diverge meaningfully.
- **Testing too narrow or poorly anchored a price range.** If your five to seven price points do not bracket the true revenue-maximising price, because all the candidates cluster too low or too high, the "peak" you find is just the edge of your test range, not the actual optimum. Recovery: anchor your range using the Van Westendorp corridor if you have one, or run a quick pilot with a wider spread first to confirm the true peak sits inside your candidate prices before fielding the full study.

**Sources:** André Gabor; C.W.J. Granger; Sawtooth Software
- André Gabor and C.W.J. Granger, ["Price as an Indicator of Quality: Report on an Enquiry"](https://www.jstor.org/stable/2552272), *Economica* (1966)
- Sawtooth Software, ["Gabor-Granger Pricing Method: Definition, How It Works, Examples, and More"](https://sawtoothsoftware.com/resources/blog/posts/gabor-granger-pricing-method) (accessed 2026), documenting current market-research practice for running the method and treating stated purchase intent

**See also:** Van Westendorp Price Sensitivity Meter (run first to find the acceptable price corridor; Gabor-Granger then finds the specific revenue-optimising point inside it); Value Metric / Willingness-to-Pay Framework (use when the question is what to charge for, not which specific price to charge); Conjoint Analysis (use instead when the decision is about which individual features justify a price change, not a single SKU's price); Good-Better-Best (GBB) Packaging Framework (feed the recommended price into a tier's anchor price where relevant).
