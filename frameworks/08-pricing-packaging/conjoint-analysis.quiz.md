# Quiz: Conjoint Analysis

1. Sales wants a specific premium feature restricted to Enterprise only, while product argues it should be available to everyone regardless of tier, and neither side has evidence for their position. Which method resolves this?
   - **A.** Conjoint Analysis isolates each persona's price value for the feature.
   - **B.** Van Westendorp Price Sensitivity Meter settles the dispute fastest.
   - **C.** Gabor-Granger Method is designed for deciding which tier a feature belongs in.
   - **D.** Usage-Based Pricing Model classifies which features should be usage-metered.

   **Correct answer: A.** This is exactly conjoint analysis's named use case: an internal dispute about which roadmap feature should be premium-only, with genuine disagreement about which one buyers would actually pay more for, resolved by isolating each feature's standalone value to each persona, in price terms, independent of internal opinion, through the bundle-choice methodology.

   *Why not B:* This is the adjacent method answering a different question. Van Westendorp is genuinely fast, but it settles a whole-product pricing question, not which individual feature justifies moving a customer up a tier; it does not isolate feature-level value at all.

   *Why not C:* Gabor-Granger finds the revenue-optimising price for a single SKU or product; it does not isolate the value of individual features within a bundle.

   *Why not D:* The Usage-Based Pricing Model classifies how pricing tracks usage broadly; it has no mechanism for resolving a dispute about a specific feature's tier placement.

2. A team runs a conjoint study, gets part-worth utility estimates for four features, and immediately treats the exact dollar figures as guaranteed real-world pricing outcomes without any further validation. What pitfall does this describe?
   - **A.** Treating part-worth utilities as an exact price, not a directional signal.
   - **B.** Testing too many attributes or price levels, so respondents disengage.
   - **C.** Skipping the market simulation and reading part-worths feature by feature.
   - **D.** This is not a pitfall; part-worths are designed to be used as final prices.

   **Correct answer: A.** Treating part-worth utilities as an exact price rather than a directional signal is a named pitfall: a part-worth model estimates relative preference under survey conditions, not a guarantee of real buyer behaviour with a real budget. The fix is validating the winning scenario with a smaller live pricing test before full rollout.

   *Why not B:* This scenario does not describe an overloaded survey design; it describes over-trusting the resulting estimates as literal, guaranteed prices, a separate, later-stage pitfall.

   *Why not C:* This is a related but distinct mistake. Skipping the simulation misses how features interact across a whole bundle; the scenario here is treating a single feature's numbers as certain fact, which happens whether or not a simulation was ever run.

   *Why not D:* The entry is explicit that part-worths require validation through simulation and live testing before being treated as reliable real-world prices; direct, unvalidated use is exactly the named pitfall.

3. A team looks at each feature's standalone part-worth value individually and decides on a bundling strategy without ever running a full-scenario simulation. What risk does this create?
   - **A.** A bundle optimal feature by feature can still lose once buyers see the whole package.
   - **B.** Individual part-worths always sum cleanly to predict how a full bundle performs.
   - **C.** The risk only matters with fewer than four features being bundled.
   - **D.** The fix is testing more price levels per feature, not running a simulation.

   **Correct answer: A.** Skipping the market simulation and reading part-worths feature by feature is a named pitfall: looking at standalone values in isolation misses how features interact, and a bundle optimal feature by feature can still lose to a different combination once buyers evaluate the whole package and its total price.

   *Why not B:* The entry explicitly warns that features interact in ways individual part-worths do not capture; summing them individually does not reliably predict how a full bundle performs against buyers.

   *Why not C:* The interaction risk applies regardless of how many features are being considered; even a small number of features can interact in ways a feature-by-feature read misses.

   *Why not D:* This treats a data-quality fix as a substitute for the missing step. More price levels sharpen each feature's own estimate but say nothing about how features interact; only the step 8 simulation tests full bundle scenarios against each other.

4. A team wants to test 15 candidate features in a single conjoint study to save time, rather than narrowing the list first. What does the methodology suggest?
   - **A.** Run a smaller pre-study, such as MaxDiff, to cut the list to features still in question.
   - **B.** Proceed directly with all 15 features, since attribute count does not affect performance.
   - **C.** Reduce the sample size instead of the feature count, to compensate for the longer list.
   - **D.** Skip choice-based conjoint entirely and use a simple ranking survey for all 15 features.

   **Correct answer: A.** Testing too many attributes overwhelms respondents and degrades data quality; the methodology's explicit recovery is running a smaller pre-study, like MaxDiff Analysis, a cheaper best-worst ranking method, to narrow the list to roughly 6 or fewer genuinely contested features before designing the full conjoint.

   *Why not B:* The methodology explicitly caps recommended attributes at roughly 4 to 6; beyond that, response quality degrades sharply as respondents start satisficing, so more attributes is not a neutral trade-off.

   *Why not C:* This adjusts the wrong lever. Sample size affects statistical confidence, not the respondent fatigue and satisficing caused by too many attributes; the fix is narrowing the feature list itself, not the number of respondents answering it.

   *Why not D:* Switching to a simple ranking survey loses the price-trade-off structure that makes conjoint analysis specifically useful for pricing decisions; the recommended fix is a MaxDiff pre-study, not abandoning conjoint's design entirely.

5. A conjoint study is run using hand-built bundles the research team assembled themselves, rather than a randomised design generated by conjoint software. What is the risk?
   - **A.** A non-randomised design confounds features, making the part-worth estimates unusable.
   - **B.** Hand-built bundles work as well as software-generated ones with an experienced team.
   - **C.** The risk applies only to the price attribute, not to the other tested features.
   - **D.** Hand-built bundles are fine as long as the sample exceeds 150 respondents per segment.

   **Correct answer: A.** The methodology explicitly warns against hand-building bundles: a non-randomised design confounds the features with each other, since each feature and price level needs to appear often enough, and in enough balanced combinations, for the statistical model to isolate its individual effect.

   *Why not B:* The methodology explicitly calls for using conjoint software (Sawtooth, Qualtrics Conjoint, or similar) to generate a statistically balanced design regardless of the team's experience; hand-building bundles is named as a specific risk to avoid, not a skill gap to close.

   *Why not C:* Confounding from a non-randomised design affects the ability to isolate any feature's or the price attribute's individual effect; the risk is not limited to price alone.

   *Why not D:* This reaches for the right kind of fix, more data, at the wrong problem. A larger sample size does not fix a confounded, non-randomised bundle design; the underlying statistical problem is in how the bundles were constructed, not how many respondents saw them.
