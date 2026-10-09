# Quiz: RFM Model (Recency, Frequency, Monetary Value)

1. A customer scored a 9 on last quarter's NPS survey but has not logged in for 60 days. The team assumes this account remains healthy because of the high sentiment score. What would the RFM model add to this picture?
   - **A.** A behavioural check that sentiment data alone misses.
   - **B.** Nothing useful; NPS is a sufficient signal on its own for account health.
   - **C.** Confirmation the account is a Champion, since NPS determines RFM classification.
   - **D.** RFM is only relevant for accounts with a low NPS score, not this one.

   **Correct answer: A.** This is exactly the model's stated complementary value: RFM measures behaviour, not feeling, so a customer sliding on Recency despite a high past NPS score is a red flag that sentiment data alone will not catch until, and unless, the next survey is answered.

   *Why not B:* NPS reflects how a customer feels, not what they are currently doing; the described 60-day login gap is a behavioural signal RFM is specifically built to catch that NPS alone misses.

   *Why not C:* RFM is scored independently from NPS, using Recency, Frequency, and Monetary value; a high past NPS score does not itself determine RFM classification, and this account's declining Recency likely places it in a different, more concerning segment.

   *Why not D:* RFM's value applies regardless of NPS level; the model specifically calls out cross-referencing a high-sentiment account against its behavioural data as a way to catch anomalies like this one.

2. A customer historically had high Frequency and high Monetary value, but Recency has dropped sharply, with no login in the last two months. Which RFM segment does this describe, and what should happen?
   - **A.** At-risk; this is the clearest, most urgent save-play candidate.
   - **B.** Hibernating/Lost; the account needs only a low-cost win-back campaign.
   - **C.** Champions; high historical Frequency and Monetary value always qualify.
   - **D.** Loyal but low-value; route the account to an upsell or expansion nurture.

   **Correct answer: A.** This is precisely the At-risk definition: low Recency combined with historically high Frequency and Monetary value. It is named as the clearest, most urgent save-play candidate, since the account was engaged and valuable until recently, meaning something specific changed and a proactive outreach is warranted quickly.

   *Why not B:* Hibernating/Lost describes accounts with both low Recency and low Frequency, long absent and rarely engaged regardless of value; this account's historically high Frequency and Monetary value place it in the more urgent At-risk segment instead.

   *Why not C:* Champions require high Recency as well as high Frequency and Monetary value; a sharp recent drop in Recency moves the account out of Champion status into At-risk, since current Recency is a required dimension, not an optional one.

   *Why not D:* Loyal but low-value describes high Recency and Frequency with low Monetary value; this account's profile, a Recency drop combined with high historical value, does not match that segment's definition.

3. A team applies fixed thresholds, "purchased in the last 30 days counts as recent", across both a high-frequency self-serve product and a low-frequency, annual-contract enterprise product. What problem does this create?
   - **A.** Fixed, universal thresholds misclassify most of the customer set.
   - **B.** There is no problem; a fixed 30-day threshold is the model's standard definition.
   - **C.** The issue only affects the Monetary dimension, not Recency.
   - **D.** Apply an even shorter fixed threshold, such as 7 days, uniformly across both.

   **Correct answer: A.** This is the named pitfall: a fixed, universal cut-off misclassifies most of the base when applied across products with very different natural purchase or engagement cadences. The fix is deriving Recency, Frequency, and Monetary thresholds from quintiles of the company's own customer distribution, recalculated periodically.

   *Why not B:* The model explicitly rejects a single fixed universal threshold; quintiles derived from the company's own base, not an absolute day count, are the recommended scoring method.

   *Why not C:* The problem described is specifically about Recency's definition varying by product cadence; the same quintile-based principle applies to Frequency and Monetary value as well, but the scenario's issue is squarely about Recency.

   *Why not D:* Shortening the fixed threshold does not solve the underlying issue, that a single absolute cut-off cannot fit products with fundamentally different natural cadences; the fix is using relative, base-derived quintiles instead of any fixed number.

4. A company runs RFM segmentation once, six months ago, and has not updated it since, even though several accounts have since shifted from Champion toward At-risk. What does the model recommend?
   - **A.** Automate scoring on a recurring cadence and track segment migration.
   - **B.** Continue using the original segmentation; RFM segments are meant to stay stable.
   - **C.** Only re-run the segmentation once a customer has fully churned.
   - **D.** Segment migration isn't something the model is designed to track.

   **Correct answer: A.** Running the segmentation once and never refreshing it is a named pitfall: a static snapshot misses exactly the migration between segments, a Champion sliding toward At-risk, that the model exists to catch early. The fix is automating scoring at least monthly and specifically tracking migration over time.

   *Why not B:* RFM segments are explicitly meant to shift as customer behaviour changes; treating them as stable once calculated defeats the model's core purpose of catching behavioural change early.

   *Why not C:* Waiting for full churn to confirm classification is far too late; the model's value is identifying the At-risk shift while a save-play still has a chance of succeeding, well before actual cancellation.

   *Why not D:* The model explicitly states that tracking segment migration over time is more useful than either static label alone; this is a core, stated feature of applying RFM well, not something outside its design.

5. A customer marketing team wants to know which segment should receive advocacy asks and which should receive a save-play, but is currently sending the same lifecycle email to every customer regardless of behaviour. What does the model recommend?
   - **A.** Assign a distinct action per RFM segment, matched to each one's behaviour.
   - **B.** Keep sending the same email to everyone; RFM applies only to churn prediction.
   - **C.** Send advocacy asks to every RFM segment equally, regardless of profile.
   - **D.** Route all customers, regardless of segment, into a single win-back campaign.

   **Correct answer: A.** The model explicitly assigns a distinct action per segment, Champions for advocacy and early access, At-risk for urgent Customer Success outreach within a defined window, Hibernating for low-cost automated win-back, precisely so different behavioural profiles get treatment matched to their actual situation.

   *Why not B:* This treats RFM's scope too narrowly. The model is explicitly used to trigger different treatment for different value tiers in customer marketing and lifecycle messaging, including advocacy asks and save-plays, not only for churn prediction.

   *Why not C:* Advocacy asks are meant to go to Champions specifically, not every segment; sending them universally ignores the model's core purpose of matching action to actual customer value and engagement.

   *Why not D:* A universal win-back campaign wastes effort on Champions who need advocacy engagement, not re-activation, and misapplies the Hibernating-specific low-touch treatment to accounts that don't need it.
