# Quiz: Product-Led Growth (PLG)

1. A team defines its activation moment as "day 3 of the trial" rather than a specific behavioural action. What does the methodology say is wrong with this definition?
   - **A.** Ground activation in a specific behavioural action, not a time-based proxy like day 3.
   - **B.** Ground activation in behaviour, but skip validating it against churn data.
   - **C.** Base activation purely on whether the user logged in at all.
   - **D.** Activation moments should always be defined by product management alone.

   **Correct answer: A.** The methodology explicitly calls for grounding the activation moment in behavioural data, not a time-based proxy like "day 3," and confirming it against churn data: users who never cross the moment should show materially higher early churn than those who do.

   *Why not B:* This does half the fix: naming a behavioural action without checking it against churn data leaves the definition unverified, so there's no evidence it actually marks the point where value was experienced.

   *Why not C:* Login alone is explicitly named elsewhere as a generic, non-value event that makes every cohort look healthier than it is; the methodology calls for a genuine value-moment, not mere login.

   *Why not D:* PMM explicitly owns the activation and upgrade-path messaging, working alongside product management, which owns instrumentation; activation definition is a joint, evidence-based effort, not solely product's call.

2. A signup flow requires a mandatory onboarding call, several approval steps, and multiple setup screens before a user reaches the product's core value. Signup-to-activation time is unusually long. What does the methodology recommend?
   - **A.** Strip onboarding down to the shortest path to activation.
   - **B.** Remove the approval steps, but keep the mandatory onboarding call in place.
   - **C.** Require a sales call for every new signup, regardless of deal size.
   - **D.** Leave the funnel unchanged; a longer setup does not affect PLG outcomes.

   **Correct answer: A.** The methodology explicitly calls for designing the self-serve funnel around the shortest path to activation, since every extra step is a point where a prospect can leave before ever seeing the product's value; the entry cites a directional target of under 15 minutes to activation as a goal to validate.

   *Why not B:* This removes only some friction: the mandatory onboarding call is itself a human-gated step that keeps the funnel from being self-serve, so the path to activation is still far longer than it needs to be.

   *Why not C:* A mandatory sales call for every signup contradicts PLG's core premise, that the product itself, not a human conversation, does the work of activation for most users.

   *Why not D:* The methodology explicitly ties funnel length to conversion outcomes; a longer, friction-heavy path to activation is treated as a real problem worth fixing, not a neutral factor.

3. A team reports a single blended "trial conversion rate" each month but cannot tell whether the bottleneck is people not activating, activating but never showing a PQL signal, or showing a PQL signal but not converting to paid. What does the methodology recommend?
   - **A.** Measure the funnel in stages: signup-to-activation, activation-to-PQL, and PQL-to-paid.
   - **B.** Split the single number into two stages: overall trial conversion and paid retention.
   - **C.** Replace the blended metric entirely with NPS as the sole measure of funnel health.
   - **D.** Track only the final PQL-to-paid conversion rate, dropping the earlier stages.

   **Correct answer: A.** The methodology explicitly calls for measuring the funnel in stages, not as one blended number, since a single conversion figure hides which specific stage is broken and sends fixes to the wrong team.

   *Why not B:* Two stages still blend the signup-to-activation and activation-to-PQL steps together, so the team still cannot tell whether people are failing to activate or activating without ever showing intent to upgrade.

   *Why not C:* NPS measures sentiment, not funnel-stage conversion; it does not replace the specific signup-to-activation, activation-to-PQL, and PQL-to-paid breakdown the methodology calls for.

   *Why not D:* Tracking only the final stage misses whether the bottleneck is earlier in the funnel (poor activation or a weak PQL signal), which the methodology explicitly wants isolated and diagnosed separately.

4. A PQL signal that reliably predicted upgrades when the product launched has stopped correlating with actual upgrade behaviour as the product has matured and moved upmarket. The team has left the same signal wired in for two years without checking it. What does the methodology recommend?
   - **A.** Re-validate each PQL signal quarterly, retiring any that have lost predictive strength.
   - **B.** Re-validate PQL signals annually, alongside the yearly product roadmap review.
   - **C.** Remove all PQL signals entirely and route every account to a human sales rep.
   - **D.** Only revisit PQL signals if the company undergoes a full rebrand.

   **Correct answer: A.** Letting PQL signals go stale is a named pitfall: a signal that predicted upgrades at launch can stop working as the product matures or the buyer base shifts upmarket, yet teams often leave the same signals wired in for years. The recovery is re-validating each signal quarterly against actual upgrade data and retiring or replacing any that have lost predictive strength.

   *Why not B:* This is the right check on too slow a cadence: the methodology names a quarterly re-validation rhythm specifically because a signal can decay well within a year, especially in a fast-moving product.

   *Why not C:* Removing all signals and routing everyone to sales abandons the self-serve, in-product upgrade path PLG is built around; the fix is re-validating and refreshing signals, not eliminating the automated layer entirely.

   *Why not D:* The methodology ties PQL re-validation to a standing quarterly cadence tied to actual upgrade data, not to an unrelated event like a rebrand.

5. A company strips out all human sales involvement from its PLG motion, including for large accounts whose usage signals (a seat-count spike, an SSO request) clearly indicate they need a human touch. Those larger deals convert poorly through the pure self-serve checkout. What pitfall does this describe?
   - **A.** Define the sales-assist trigger explicitly and route to it consistently.
   - **B.** Add a "contact sales" link to the pricing page, without a defined usage trigger.
   - **C.** This is correct; PLG should never involve any human sales touch.
   - **D.** Re-validate the PQL signals quarterly, since they may have gone stale.

   **Correct answer: A.** Treating PLG as "no sales" rather than "sales where it earns its cost" is a named pitfall: stripping out every human touch, including for accounts whose usage signals clearly warrant it, leaves larger deals to convert or not through a checkout flow never designed for them. The fix is defining the sales-assist trigger explicitly and routing to it consistently.

   *Why not B:* A generic, always-visible link is not the same as a defined trigger: without tying it to the specific usage signals that indicate real complexity, the same large accounts that need proactive outreach are left to find the link themselves.

   *Why not C:* The methodology explicitly treats PLG and sales-assist as complementary layers, not a strict no-human-touch rule; large accounts showing clear signals of complexity are exactly where a sales-assist layer is meant to apply.

   *Why not D:* Nothing in the scenario describes a PQL signal losing predictive power; the issue is that large-account signals are being ignored entirely rather than routed to a human, a different failure mode.
