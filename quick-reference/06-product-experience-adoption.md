# Quick Reference: Product Experience & Adoption

Condensed one-page summaries. For full detail, pitfalls, and worked examples, see [frameworks/06-product-experience-adoption.md](../frameworks/06-product-experience-adoption.md). Origin attributions, benchmark sources, and citations for the claims below are documented in that file, not repeated here.

## Contents

- [Customer Onboarding Maturity Framework](#customer-onboarding-maturity-framework)
- [Win/Loss Analysis Framework](#winloss-analysis-framework)
- [Net Promoter Score (NPS) & Feedback Loop Framework](#net-promoter-score-nps--feedback-loop-framework)
- [Kano Model](#kano-model)
- [Forrester Customer Advocacy Model](#forrester-customer-advocacy-model)
- [RFM Model (Recency, Frequency, Monetary Value)](#rfm-model-recency-frequency-monetary-value)
- [Time to Value Framework](#time-to-value-framework)

---

## Customer Onboarding Maturity Framework

**Type:** Framework

**Core concept:** This framework defines product marketing's role in helping new customers succeed after purchase. It covers education (how customers learn the product), enablement (whether sales and support can help them), and feedback loops (how customer success signals blockers back to PMM). Onboarding ranges from self-service to fully supported, and the messaging a customer receives in their first 30 days shapes whether they ever reach full value.

**When to use it:**
- Designing or improving new-customer onboarding
- Measuring time-to-first-value, especially for self-serve or SMB products
- Diagnosing where customers get stuck
- Choosing between self-serve, guided, and fully-supported models
- Churn analysis shows early cancellations concentrated in the first 90 days

**Key steps:**
1. Define onboarding milestones and validate them with customers who already succeeded.
2. Audit the current state: track drop-off per milestone and interview churned customers.
3. Design interventions matched to friction points and account value.
4. Document separate onboarding paths for SMB, mid-market, and enterprise.
5. Measure time-to-milestone and its correlation with retention and NPS.
6. Coordinate milestone definitions across product, support, sales, and marketing.
7. Revisit the whole model at least annually.

**Apply it:** Sketch a single-page milestone table with columns for milestone, completion rate, blocker identified, intervention, and resulting completion rate; add a segment column (self-serve / guided / supported) to keep paths distinct.

**Success metrics:**
- Rising activation rate at each milestone quarter over quarter
- Shrinking time-to-first-value
- Correlation between activation speed and 12-month retention (example: 85% retention if activated within 30 days versus 45% if not activated within 90 days)

---

## Win/Loss Analysis Framework

**Type:** Methodology

**Core concept:** Win/loss analysis is a structured interview process that uncovers the real reasons customers choose you or a competitor. Unlike surveys, it uses candid, post-decision conversations with decision-makers, once sales pressure is off, to surface insights that inform positioning, messaging, competitive strategy, and product priorities.

**When to use it:**
- Quarterly, as part of competitive intelligence and positioning refinement
- After major losses to high-value accounts
- When win rates decline and the cause is unclear
- Entering a new market or facing a new competitive feature
- Before a major pricing or packaging change

**Key steps:**
1. Sample 10 to 20 recent wins and 10 to 20 recent losses across segments.
2. Run semi-structured interviews on problems, options considered, decision drivers, and near-derailments.
3. Analyse for recurring themes, not one-off comments.
4. Segment findings by decision-maker role (CFO, CTO, CMO).
5. Turn insights into owned, deadlined changes to messaging, pricing, roadmap, and sales playbook.
6. Track trends by repeating the cycle quarterly.
7. Close the loop with sales within two weeks, ideally live.

**Apply it:** Build a one-page grid with rows for each interviewed deal and columns for outcome, primary reason, secondary reason, and buyer role, then tally recurring themes at the bottom to spot patterns worth acting on.

**Success metrics:**
- Number of deals citing each win/loss theme (a pattern needs five or more mentions)
- Win rate by segment against benchmark (for example, SMB 40 to 60%, enterprise 15 to 35%)
- Reduction in a specific loss theme in a follow-up sample (example: a messaging fix took "didn't know you could do X" losses to zero)

---

## Net Promoter Score (NPS) & Feedback Loop Framework

**Type:** Framework

**Core concept:** This framework turns customer feedback, especially NPS, into product marketing action. It classifies respondents as Promoters, Passives, or Detractors, gathers the reasons behind each score, and closes the loop by fixing root causes in product, support, messaging, or pricing. A score alone is just a number; the value comes from pairing it with qualitative follow-up and a defined action per segment.

**When to use it:**
- Quarterly or after major releases, to capture sentiment shifts
- Identifying which segments have the highest and lowest NPS, and why
- Diagnosing a declining NPS trend
- Recruiting advocates for case studies and referrals
- Spotting at-risk Detractor accounts before they churn

**Key steps:**
1. Send a two-question survey: recommendation likelihood (0 to 10) and an open "why?".
2. Segment into Promoters (9 to 10), Passives (7 to 8), Detractors (0 to 6); calculate NPS as %Promoters minus %Detractors.
3. Analyse NPS by customer segment, industry, or use case.
4. Tag open-ended feedback by theme to count issue volume.
5. Close the loop: resolve Detractor issues individually, target Passives with a single fix, ask Promoters for case studies or referrals.
6. Trend NPS monthly or quarterly against a change log of initiatives.
7. Report NPS alongside a business metric such as renewal or expansion revenue.

**Apply it:** Sketch a one-page table with rows for each segment (Promoter, Passive, Detractor) and columns for score band, top themes, and the specific closed-loop action assigned to that segment.

**Success metrics:**
- Overall NPS against benchmark (world-class above 50, good 40 to 50, acceptable 30 to 40, at-risk below 30)
- NPS by segment (example: SMB rose from 15 to 31 after a targeted fix)
- Owner assigned to every major Detractor theme within one week of survey close

---

## Kano Model

**Type:** Model

**Core concept:** Developed by Noriaki Kano in 1984, this model classifies product features by how they affect satisfaction, not by build effort. Features fall into five categories: Must-be (basic expectations that disappoint if missing), Performance (satisfaction rises the more you deliver), Delighters (unexpected features that create disproportionate satisfaction), Indifferent (customers do not care), and Reverse (some customers dislike them). Categories drift over time as competitors catch up, so a delighter today can become a must-be tomorrow.

**When to use it:**
- Launch messaging is about to headline a must-be feature instead of a delighter
- The roadmap is a flat list with no sense of which items drive satisfaction versus just remove complaints
- Deciding which features belong in a baseline versus premium packaging tier
- NPS or churn feedback cites "missing basics" that were assumed solved
- A delighter's impact is eroding because competitors shipped an equivalent

**Key steps:**
1. List 10 to 20 candidate features to classify.
2. Write a paired functional/dysfunctional question for each feature on a five-point scale.
3. Survey at least 30 to 50 respondents per segment.
4. Cross-tabulate paired answers on the standard Kano scoring grid.
5. Classify each feature by its plurality category, noting segment splits.
6. Translate classification into roadmap and messaging decisions.
7. Re-run the exercise periodically, since classifications drift.

**Apply it:** Draft a one-page table listing each candidate feature with columns for functional/dysfunctional survey scores, resulting Kano category, and segment, then sort by category to decide what gets defensive resourcing versus a launch headline.

**Success metrics:**
- Percentage split of "like it" versus "dislike it" responses defining each category (example: 92% dissatisfied without a must-be feature)
- Segment-specific NPS movement tied to a reclassified feature's launch (example: mid-market NPS rose from 34 to 47 after a delighter launch, while an untouched segment held flat)
- Age of a feature's last Kano check, flagged for re-survey past 12 to 18 months

---

## Forrester Customer Advocacy Model

**Type:** Model

**Core concept:** This is a four-stage maturity ladder, adapted from Forrester's advocacy maturity research, for building a proactive customer advocacy practice instead of chasing references ad hoc. It scores a company on four dimensions: how systematically advocates are identified, how broad the menu of asks is, whether the same accounts are over-used, and whether advocacy is built into the customer lifecycle. The stages run Reactive, Identified, Programmatic, and Embedded.

**When to use it:**
- Marketing only ever finds a reference "just in time," repeatedly tapping the same accounts
- NPS surfaces plenty of Promoters but nobody tracks or activates them
- Sales needs a reference matched to a prospect's industry with no reliable way to find one
- Leadership wants a case study library with no process to keep it current
- Deciding whether advocacy needs a dedicated owner

**How to read it:** Score the company against four dimensions: identification and segmentation, ask-menu breadth, fatigue management, and lifecycle instrumentation. Weak on all four is Reactive; strong on identification alone is Identified; strong on identification, breadth, and fatigue management but no lifecycle trigger is Programmatic; strong across all four with measured pipeline impact is Embedded.

**Key steps:**
1. Audit recent advocacy activity for the ratio of asks to distinct accounts.
2. Cross-reference NPS Promoters and win/loss subjects into a tracking system.
3. Build a tiered ask menu scaled by effort and matched to reward.
4. Assign a named owner running the programme on a defined cadence.
5. Instrument advocacy into lifecycle moments such as renewals and milestones.
6. Measure reference-assisted win rate and advocate-sourced pipeline.
7. Re-audit at least annually to catch regression toward Reactive.

**Apply it:** Sketch a one-page scorecard with the four dimensions as rows, a current-stage rating per dimension, and a single next action per row to move the programme up the ladder.

**Success metrics:**
- Ratio of advocacy asks to distinct accounts used (a high ratio signals fatigue risk)
- Size of the active advocate pool (example: grew from 4 to 23 accounts in two quarters)
- Reference-assisted win rate uplift (example: 14 points higher than deals without a reference)

---

## RFM Model (Recency, Frequency, Monetary Value)

**Type:** Model

**Core concept:** RFM classifies customers along three behavioural dimensions: Recency (how recently they last engaged), Frequency (how often they engage), and Monetary value (how much revenue they represent). Scoring every customer 1 to 5 on each dimension, using quintiles from your own base, produces segments NPS alone cannot: a customer can score high on NPS while quietly sliding on Recency, a red flag sentiment metrics will not catch until the next survey cycle.

**When to use it:**
- Retention resource is spread evenly with no systematic way to identify at-risk accounts
- Advocacy requests keep going to the same small pool instead of newly identified high-value customers
- NPS data alone does not distinguish "genuinely engaged" from "scored 9 six months ago and has not logged in since"
- A lifecycle-messaging programme needs to trigger different treatment for different value tiers

**Key steps:**
1. Pull date of last engagement, event count over a trailing window, and total revenue per customer.
2. Score each dimension 1 to 5 using quintiles within your own customer base.
3. Assign each customer to a named segment: Champions, At-risk, New/Promising, Hibernating, or Loyal-but-low-value.
4. Cross-reference against NPS or CSAT where available; flag mismatches for closer review.
5. Assign a distinct action per segment (advocacy asks for Champions, proactive outreach for At-risk, expansion nurture for Loyal-but-low-value).
6. Automate scoring on a recurring cadence, at minimum monthly.
7. Track segment migration over time as the primary actionable signal.

**Apply it:** Build a one-page segment dashboard with columns for customer, R/F/M scores, segment name, assigned action, and migration since last refresh; flag any Champion-to-At-risk migration for immediate outreach.

**Success metrics:**
- Recovery rate of At-risk accounts after proactive outreach (Ledgerway, a fictional company: 61% returned to active)
- Advocacy participants from the Champion segment versus old tenure-based pool (34% more in the example)
- Share of the base scored and actioned on a recurring cadence

---

## Time to Value Framework

**Type:** Model

**Core concept:** This model breaks the loosely used phrase "time to value" into distinct, measurable sub-metrics. The core distinction, closely associated with Lincoln Murphy's customer success writing, is between Time to First Value (TTFV), the moment a customer first experiences a genuine benefit, and Time to Core Value, the later point at which usage becomes a sustained pattern predicting renewal. It also separates the "aha moment" (the qualitative feeling of value) from the activation event (the measurable in-product action used as a proxy).

**When to use it:**
- "Time to value" is used loosely, with sales, product, and CS each meaning something different
- Activation rate looks healthy but retention still lags, or vice versa
- A defined activation event exists but retention data suggests it is the wrong proxy for the real aha moment
- Customers report an early win in interviews but usage does not become a sustained pattern

**Key steps:**
1. Define the aha moment qualitatively through customer interviews, not analytics.
2. Choose the activation event as the closest measurable proxy for that aha moment.
3. Measure TTFV as elapsed time from signup to that activation event, segmented by channel and tier.
4. Separately define and measure Time to Core Value, validated against actual retention data.
5. Track activation rate and time to value as two separate numbers, not one blended metric.
6. Feed the validated activation event and Core Value threshold into onboarding design and messaging.
7. Re-validate both periodically as the product and customer base evolve.

**Apply it:** Sketch a two-row table (TTFV and Time to Core Value) with columns for the event definition, current median time, and the retention correlation each is validated against.

**Success metrics:**
- Median TTFV improvement (Ledgerfast, a fictional company: 4.2 days to 1.6 days)
- 90-day retention shift after redesigning onboarding around the validated metrics (61% to 74% in the example)
- Correlation strength between the Core Value threshold and actual renewal rates (84% versus 41% in the example)
