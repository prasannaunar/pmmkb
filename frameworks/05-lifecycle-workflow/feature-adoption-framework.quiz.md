# Quiz: Feature Adoption Framework

1. A team ships a genuinely useful feature, publishes a release note, and assumes usage will grow naturally as customers discover it. Thirty days later, adoption sits at 5%. What does the framework say went wrong?
   - **A.** Assumed customers would discover it without a campaign.
   - **B.** The feature itself must be flawed at a 5% rate.
   - **C.** The release note should have been longer and more technical.
   - **D.** Wait a full year before assessing adoption.

   **Correct answer: A.** This is the named "if we build it, they will come" pitfall: customers rarely discover features on their own no matter how good they are, and the fix is treating every meaningful release as its own go-to-market motion, with a segment plan, campaign, and success metric, not just a changelog entry.

   *Why not B:* This jumps to a conclusion the framework says to check first: low adoption after a passive release does not by itself indicate a flawed feature, since the diagnostic step, interviewing non-adopters, is what actually reveals whether the barrier is discoverability, complexity, or unclear value.

   *Why not C:* A longer, more technical release note does not solve a discoverability problem; the framework calls for active, targeted campaign channels (in-app messaging, segmented email, enablement content), not a denser passive announcement.

   *Why not D:* The framework recommends setting an adoption target and measuring within a defined near-term window (for example 60 days), not waiting a full year before evaluating whether a launch succeeded.

2. A team sends one generic email to its entire customer base announcing a new feature, without distinguishing between power users and casual users. Response rates are lower than expected for both groups. What pitfall does this illustrate?
   - **A.** One-size-fits-all messaging sent to the whole base.
   - **B.** Launching without any onboarding tutorial.
   - **C.** Not a pitfall; a unified message is more efficient.
   - **D.** The email should have gone in the general newsletter.

   **Correct answer: A.** This is the named "one-size-fits-all messaging" pitfall: a single generic message underperforms for both power users and beginners, who respond to different framing. The fix is splitting the campaign into at least two segments, which the framework notes typically doubles response rates for the modest extra effort.

   *Why not B:* This is a real named pitfall, but the wrong stage: launching without onboarding is about customers not understanding how to use a feature once they've noticed it, while this scenario is an undifferentiated-messaging problem before anyone gets that far.

   *Why not C:* The framework explicitly recommends segmenting messaging by user type; treating a single blended message as more efficient ignores the evidence that segmented campaigns perform meaningfully better.

   *Why not D:* The framework specifically warns against bundling feature announcements into a general newsletter, where they tend to get ignored; a standalone, targeted email is the recommended approach instead.

3. A feature shows strong activation, 40% of users try it at least once, but only 8% are still using it after 90 days. What does this pattern most likely indicate?
   - **A.** A usability problem, not an awareness problem.
   - **B.** The campaign messaging was ineffective and needs revising.
   - **C.** The feature should be deprecated at this retention rate.
   - **D.** The activation number is unreliable and needs re-measuring.

   **Correct answer: A.** The framework is explicit: a feature with high activation but low retention usually signals a usability problem, not an awareness problem, since the messaging clearly succeeded in getting people to try it at least once; something in the experience itself is likely causing people to stop.

   *Why not B:* This blames the wrong stage of the funnel: strong activation (40%) shows the messaging worked well enough to drive first use, so the gap that needs explaining sits in the product experience, not the campaign that drove initial trial.

   *Why not C:* A retention gap is a diagnostic signal to investigate the usability issue, not an automatic verdict that the feature has no value; the framework calls for iteration, not deprecation, as the first response.

   *Why not D:* Nothing in the scenario suggests a measurement error; the framework treats this activation-versus-retention split as a meaningful and interpretable signal in its own right.

4. A feature was built specifically in response to one customer's escalated request. Usage data six months later shows that same customer is still the only one using it. What should the team do?
   - **A.** Run the Feature Adoption cycle rather than assume it failed.
   - **B.** Remove the feature, since a single-user feature has failed.
   - **C.** Do nothing further, since the requesting customer is served.
   - **D.** Send one unsegmented email and consider the matter closed.

   **Correct answer: A.** The methodology explicitly names this exact situation, a feature built for one customer's request with usage data showing only that customer uses it, as a trigger to run the adoption cycle: understand the barrier, segment potential users, and build a real campaign, not a sign the feature has already failed.

   *Why not B:* The framework treats this as an adoption gap to diagnose and address, not automatic grounds for removal; the underlying barrier (discoverability, complexity, unclear value to others) has not yet been investigated.

   *Why not C:* Serving the original requester does not mean the investment is fully realised if the feature could benefit a broader segment; the framework calls for actively investigating whether that broader value exists.

   *Why not D:* This is a real part of the toolkit taken half-way: an email is one channel the framework uses, but an unsegmented one skips the research and segmentation steps the cycle actually calls for before any message goes out.

5. A team runs an adoption campaign, monitors results for one week, sees limited lift, and concludes the feature has no real adoption potential. What does the framework suggest they should have done first?
   - **A.** Run at least two rounds of message testing before concluding.
   - **B.** Accept the one-week result as final and move on.
   - **C.** Skip iteration and discuss deprecating the feature instead.
   - **D.** Rerun the identical campaign unchanged for another week.

   **Correct answer: A.** The framework calls for testing different messaging, simplifying the feature, or providing more training, running at least two rounds of message testing, before concluding the feature itself, rather than the messaging, is the underlying problem.

   *Why not B:* A single week is not treated as a definitive verdict; the framework calls for iteration on messaging across multiple rounds before drawing a conclusion about the feature's potential.

   *Why not C:* Jumping to a deprecation conversation skips the iteration step entirely; the framework's guidance is to test and refine the campaign first, since the messaging itself may be the fixable variable.

   *Why not D:* This repeats the same experiment rather than running a new one: rerunning an unchanged campaign does not test a new hypothesis about what might work better, which is the actual point of the iteration step.
