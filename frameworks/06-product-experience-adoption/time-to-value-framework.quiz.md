# Quiz: Time to Value Framework

1. A team has spent two quarters trying to improve "time to first login after data import," believing it is the key onboarding metric, but retention has not moved at all. What does the model suggest they should check first?
   - **A.** Whether the activation event was ever validated against real customer language.
   - **B.** Whether the login page has a technical bug preventing logins entirely.
   - **C.** Whether to replace the metric with Monetary value instead.
   - **D.** Whether sales is setting inaccurate expectations during the deal.

   **Correct answer: A.** Treating an easy-to-log event as the activation event without validating it against real customer language is a named pitfall, and matches the model's own worked example: "first login" turned out to be unrelated to what customers actually described as the moment of value. The fix is starting from qualitative interviews before choosing the quantitative proxy, and re-validating if retention does not move.

   *Why not B:* A technical bug is not indicated by the scenario; the issue described is that improving the metric had no effect on retention, which points to the metric itself being the wrong proxy, not a functional defect in the login flow.

   *Why not C:* Monetary value is an RFM dimension, unrelated to identifying the correct activation event or aha moment; abandoning the metric for an unrelated one does not address the validation gap.

   *Why not D:* Sales expectation-setting is a separate onboarding concern; the specific problem described, two quarters of effort on a metric with no retention impact, points to activation-event validation, which this model directly addresses.

2. A team reports one blended "time to value" number to leadership. Activation rate has been falling while, among those who do activate, speed to activation has actually improved. What is hidden by reporting a single blended figure?
   - **A.** Two different problems: early drop-off despite a fast path once started.
   - **B.** Nothing; a single blended number always captures both dynamics accurately.
   - **C.** Activation rate and speed to activation are the same metric and can't diverge.
   - **D.** This is only a reporting-format issue, not one that changes the fix.

   **Correct answer: A.** Blending Time to First Value and activation rate is a named pitfall: a falling activation rate with fast TTFV among those who do activate means the product works well once someone gets going but is losing people before that point, a diagnosis that a single blended number obscures and that calls for a different fix than a slow-TTFV problem would.

   *Why not B:* The model explicitly warns that a single blended figure hides which of two distinct problems is occurring; it does not capture both dynamics equally well in one number.

   *Why not C:* The model treats activation rate (how many reach value) and time to value (how fast) as two independently moving numbers that can diverge, precisely why they must be tracked separately.

   *Why not D:* This is a diagnostic problem, not merely a formatting one; the fix each pattern calls for, addressing early drop-off versus addressing overall speed, differs materially, so the blended report actively misdirects action.

3. A team defines its Core Value threshold as "used the core workflow weekly for a month" because it sounds like reasonable, sustained engagement, without checking whether customers who hit that pattern actually renew at a higher rate. What is the risk?
   - **A.** The threshold may not actually predict retention without testing.
   - **B.** "Weekly for a month" is inherently a valid measure of sustained usage.
   - **C.** The risk applies only to Time to First Value, not Core Value.
   - **D.** Make the threshold stricter, such as daily usage for two months, untested.

   **Correct answer: A.** Setting the Core Value threshold from a guess rather than from retention data is a named pitfall: an untested, round-sounding definition can systematically mislead the team about genuine adoption. The fix is testing candidate definitions against actual renewal outcomes and picking the one that correlates most strongly, exactly as the model's own example does.

   *Why not B:* A definition sounding reasonable does not make it predictive; the model specifically warns against this kind of unvalidated assumption, since only real renewal data can confirm whether a pattern actually correlates with retention.

   *Why not C:* The model applies the same validation discipline to Core Value as it does elsewhere; Core Value specifically needs testing against real renewal outcomes, not an exemption from validation.

   *Why not D:* Making the threshold stricter without testing against renewal data repeats the same unvalidated-guess problem; the fix is testing against actual outcomes, not adjusting the guess's difficulty.

4. Customer interviews reveal a clear, specific early "aha" moment, but usage data shows most customers never develop the sustained usage pattern that predicts renewal. What gap does this describe?
   - **A.** A gap between Time to First Value and Time to Core Value that needs closing.
   - **B.** Evidence the interviews were flawed and should be disregarded.
   - **C.** A sign the activation event is wrong and needs replacing immediately.
   - **D.** A pricing problem; an early win with no continued use signals price is too high.

   **Correct answer: A.** This is exactly the named gap the model describes: an early aha moment reaching Time to First Value does not guarantee the product experience carries customers forward into the sustained, repeating pattern that Time to Core Value measures; the two need to be tracked and addressed separately.

   *Why not B:* The interviews are not necessarily flawed; they may accurately capture a genuine early win. The issue is a separate, later-stage gap in sustaining that win into ongoing usage, not a flaw in the qualitative research itself.

   *Why not C:* A real aha moment being reported in interviews suggests the activation event is doing its job as a proxy for Time to First Value; this option correctly senses something needs fixing but points at the wrong stage. The actual gap described is downstream, in reaching Core Value, not in the initial activation event's validity.

   *Why not D:* Nothing in the scenario points to price as the cause; the described pattern is specifically about product experience failing to sustain engagement after an early win, which the model frames as a Core Value gap, not a pricing signal.

5. A product's activation event was chosen and validated two years ago. Since then, the product has added several major new capabilities and shifted its typical customer profile. The team still uses the original activation event unchanged. What does the model recommend?
   - **A.** Re-validate the activation event and Core Value threshold periodically.
   - **B.** Keep the original event permanently; a validated event needs no revisiting.
   - **C.** Replace the event only if the Onboarding Maturity milestone list has also changed.
   - **D.** Wait for a churn crisis before reconsidering the activation event.

   **Correct answer: A.** The model explicitly calls for re-validating the activation event and Core Value threshold periodically, not just once, since an event chosen on old usage patterns can quietly stop correlating with what actually predicts renewal today as the product and customer base shift.

   *Why not B:* The model is explicit that this correlation can change over time as the product adds features or the customer base shifts; treating an early validation as permanent risks tracking a metric that no longer reflects real value.

   *Why not C:* Re-validation is tied to product and customer-base changes generally, not conditioned specifically on the onboarding milestone list changing first; either can independently warrant a re-check.

   *Why not D:* Waiting for a churn crisis is reactive; the model's guidance is a periodic, proactive re-validation, so drift is caught before it manifests as a retention problem severe enough to be called a crisis.
