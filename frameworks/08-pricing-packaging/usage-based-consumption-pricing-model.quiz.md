# Quiz: Usage-Based (Consumption) Pricing Model

1. A company's smallest customers feel overcharged by a flat monthly fee, while its heaviest users cost far more to serve than they pay. Leadership wants to know whether moving toward usage-based pricing would help, and by how much. What should the team do first, according to this model?
   - **A.** Name the specific problem a move to usage-based pricing would solve.
   - **B.** Move immediately to pure usage-based pricing, since it maximises both axes at once.
   - **C.** Skip diagnosis and start building the metering infrastructure right away.
   - **D.** Adopt per-seat pricing instead, since it is the simplest structure to bill accurately.

   **Correct answer: A.** The model's third step is diagnosing the specific problem a move would solve, heavy users under-billed relative to cost to serve, small buyers priced out by a high floor, or flat expansion revenue; this scenario names exactly such symptoms, which is the necessary first step before considering any specific structural change, since a move with no nameable symptom should not happen.

   *Why not B:* The model is explicit that no point on the spectrum maximises both revenue predictability and usage-value correlation simultaneously; that trade-off is the central judgement the model exists to make explicit, not something pure usage-based pricing resolves.

   *Why not C:* This is the right later step, done too early. Metering infrastructure is a critical build, but the model calls for diagnosing the actual problem and choosing a position on the spectrum first, before committing to the specific infrastructure a chosen model would require.

   *Why not D:* Per-seat pricing is explicitly named as poorly correlated with value where usage scales with infrastructure or output rather than headcount, which is exactly the mismatch described in this scenario.

2. A team decides to move to usage-based pricing and sets a launch date six weeks out, assuming the billing team can adapt the existing flat-fee invoicing system in time. What does the model warn is the most common failure in this kind of transition?
   - **A.** Underestimating the metering and billing infrastructure needed for real-time invoicing.
   - **B.** Choosing a usage unit that is too easy for customers to predict and control.
   - **C.** Communicating the change too far in advance of the actual launch date.
   - **D.** Setting the base fee too low relative to the usage allowance included.

   **Correct answer: A.** The model explicitly names this as the most common cause of a usage-based pricing launch slipping by a quarter or more, or shipping with billing errors that damage trust: underestimating the engineering lift required for accurate, near-real-time metering and variable invoicing.

   *Why not B:* The model actually warns against the opposite, choosing a unit customers cannot predict or control, since that reads as punitive; ease of prediction and control is a goal, not a risk, for the chosen unit.

   *Why not C:* Communicating a pricing change well in advance is explicitly recommended, not a risk; the model warns against under-communicating and causing invoice shock, the opposite problem.

   *Why not D:* This is a real design decision handled at the wrong scale. Base fee and allowance calibration matters, but it is a smaller, correctable miscalibration; the model names the infrastructure build itself, not the fee level, as the most common cause of a launch failing.

3. A company chooses to meter a background process invisible to the customer as its usage-based billing unit, reasoning it accurately reflects infrastructure cost. Customers begin filing complaints about unpredictable bills. What pitfall does this describe?
   - **A.** Choosing a usage unit customers cannot predict or control.
   - **B.** Moving to usage-based pricing without adequate metering infrastructure.
   - **C.** Under-communicating the change, fixed by sending an email before launch.
   - **D.** This is expected, since usage metrics always feel unpredictable to customers.

   **Correct answer: A.** Choosing a usage unit customers cannot predict or control is a named pitfall: if the unit driving the bill is invisible to the buyer, such as a background process or an automatically retried API call, usage-based pricing reads as punitive rather than fair. The fix is choosing a unit the customer directly initiates and can see in real time, or metering a more visible proxy unit instead.

   *Why not B:* The problem described is specifically about unit visibility and predictability, not whether the underlying metering infrastructure itself is technically accurate or capable; the complaints stem from the customer's inability to see or control the metered unit.

   *Why not C:* This is correct but incomplete. An email notification does not fix an inherently invisible or uncontrollable unit; the deeper fix is choosing a different, visible unit, and communication alone leaves that root cause untouched.

   *Why not D:* The model explicitly treats unpredictability as avoidable through a specific, correctable choice, a visible, customer-controlled unit, not as an inevitable feature of all usage-based pricing.

4. A finance team is evaluating a proposed move from flat-fee to pure usage-based pricing and is concerned about forecasting reliability for an upcoming funding round. What does the model say this concern reflects?
   - **A.** The revenue-predictability axis, one of the model's two axes for evaluating positions.
   - **B.** An unfounded concern, since usage-based pricing always improves predictability.
   - **C.** A concern that applies only to per-seat pricing, not to usage-based models.
   - **D.** A problem with no bearing on which spectrum position a company should choose.

   **Correct answer: A.** Revenue predictability is one of the model's two core axes; moving toward the fully variable end of the spectrum increases usage-value correlation but decreases how confidently finance can forecast next quarter's revenue, exactly the trade-off finance's concern reflects.

   *Why not B:* The model explicitly states the opposite: usage-based pricing decreases revenue predictability compared with flat-fee or per-seat models, precisely because bills vary with a business cycle the company does not control.

   *Why not C:* This names a real axis but scopes it too narrowly. Revenue predictability applies across the whole spectrum, not only to per-seat pricing; it is one of the two axes used to evaluate any pricing position, flat fee through pure usage-based.

   *Why not D:* The model explicitly names revenue predictability as a central, deciding factor, frequently the reason a company chooses a hybrid model over a pure usage-based move even when correlation would improve.

5. A company settles on a hybrid model, a base fee covering an included usage allowance plus overage billed on top, rather than moving to pure usage-based pricing. What does this choice typically reflect, according to the model?
   - **A.** The dominant real-world pattern for balancing predictability with usage correlation.
   - **B.** A failure to commit, since only pure usage-based pricing solves a value mismatch.
   - **C.** An approach that eliminates the need for any usage metering infrastructure.
   - **D.** A temporary stopgap that should be replaced with pure usage-based pricing within a year.

   **Correct answer: A.** The model explicitly names the hybrid position, a base fee plus usage overage, as the dominant real-world pattern for companies needing some revenue predictability while still tracking heavy usage, reflecting the deliberate trade-off between the two axes rather than a compromise to be corrected.

   *Why not B:* A hybrid model is presented as a legitimate, common, and often optimal choice on the spectrum, not a failure to commit; the model explicitly frames it as solving real problems while managing the predictability trade-off.

   *Why not C:* A hybrid model still requires metering the usage portion past the included allowance; it does not eliminate the need for metering infrastructure, only reduces its scope relative to pure usage-based pricing.

   *Why not D:* This treats a deliberate position as a placeholder. The model does not frame hybrid pricing as a temporary stopgap with an expiry date; it is presented as an often-permanent choice made for its specific balance of predictability and correlation, not a step on the way to pure usage-based.
