# Category 6: Product Experience & Adoption

## Customer Onboarding Maturity Framework

**Type:** Framework.

**What it is:** A model that defines product marketing's role in ensuring customers successfully activate and adopt a product after purchase. It spans customer education (how people learn to use the product), enablement (whether sales and support have the tools to help customers), and feedback loops (customer success signalling product marketing about adoption blockers). Onboarding maturity ranges from self-service, where customers figure it out alone, to fully supported, with dedicated onboarding teams, training, and consulting. The framework treats onboarding as a product marketing responsibility, not purely a support or customer success function, because the messaging a customer receives in their first 30 days shapes whether they ever reach full value.

**When to use it:**
- To design or improve the onboarding experience for new customers
- When measuring time-to-first-value is critical, especially for self-serve or SMB products
- To identify where customers get stuck and what messaging or content can help unstick them
- When deciding between self-serve, guided, or fully-supported onboarding models
- During product scoping to ensure onboarding requirements are designed in from the start, not treated as an afterthought
- When churn analysis shows a disproportionate number of cancellations happen within the first 90 days

**Ownership:** At a scaled company with a specialised PMM team, the Head of Product Marketing owns the milestone definitions and the messaging or content built for each intervention, while the Head of Customer Success owns day-to-day execution of onboarding outreach and the drop-off data that feeds the audit. Product leadership (a VP Product or Head of Product) has final say on any fix that requires a UX or product change rather than a content or outreach fix. At a solo or founding-PMM stage, the founding PMM owns the full cycle, defining milestones, running the audit, and coordinating whatever support or sales resource exists, because there is no separate CS function to hand execution to yet.

**How to apply it:**
1. **Define onboarding milestones:** What needs to happen for a new customer to feel successful? Usually: (1) account created, (2) data imported or connected, (3) first workflow completed, (4) team invited, (5) integration with existing tools, (6) advanced features explored. Validate this list with at least five customers who have already succeeded, since the milestones you assume matter aren't always the ones that actually predict retention.
2. **Audit the current state:** Where do customers get stuck? Track drop-off rates at each milestone using product analytics, and interview customers who churned early to understand the moment they gave up and why. Aim to interview at least 8 to 10 churned customers per quarter to get a reliable pattern rather than a single anecdote.
3. **Design interventions:** For each high-friction milestone, design a targeted intervention: in-app guidance, an email sequence, a help centre article, a webinar, sales or support outreach, or an onboarding specialist for higher-value accounts. Match the intervention's cost to the account's value; a fully staffed onboarding call makes sense for an enterprise account but not for a $20-a-month self-serve user.
4. **Document onboarding paths:** Different customer types may need different onboarding journeys. Map separate paths for self-serve (SMB), guided (mid-market), and fully-supported (enterprise), and be explicit about what triggers a customer into each path, such as deal size, employee count, or plan tier.
5. **Measure and iterate:** Track time-to-milestone, activation rate at each step, and the correlation between onboarding speed and long-term retention and NPS. A customer who reaches milestone 3 in week 1 is more likely to stay than one who takes 4 weeks, so use this data to prioritise which milestone to fix first.
6. **Coordinate across teams:** Ensure product (makes onboarding easy), support (helps when customers get stuck), sales (sets accurate expectations before the deal closes), and marketing (promotes successful case studies) are all aligned on the same milestone definitions. Misaligned expectations set during the sales process are one of the most common causes of poor onboarding scores.
7. **Revisit the maturity model annually:** As the product adds features and the customer base shifts (for example, moving upmarket), the milestones and interventions that worked last year may no longer reflect the fastest path to value. Re-validate the milestone list at least once a year.

**Example:**

A data analytics SaaS company with 3,000 new signups per quarter measures its onboarding maturity:

- **Milestone 1 (Account created):** 100% complete, as this happens automatically at signup.
- **Milestone 2 (Data connected):** 65% complete. Issue: the data connection UI is confusing, with unclear field mapping. Intervention: an in-app walkthrough plus a two-minute video tutorial lifts completion to 80%.
- **Milestone 3 (First dashboard built):** 40% complete. Issue: the template gallery is hidden behind a secondary menu. Intervention: an email sequence plus an in-app suggestion lifts completion to 65%.
- **Milestone 4 (Team invited):** 25% complete. Issue: the team invitation flow doesn't explain why inviting teammates matters. Intervention: sales outreach for mid-market accounts and in-app messaging for SMB accounts lifts completion to 50%.
- **Milestone 5 (Integration connected):** 15% complete. Issue: the Salesforce integration documentation is outdated and references a deprecated API. Intervention: updated docs plus a live webinar lift completion to 35%.
- **Final activation rate:** 35% of new customers reach full activation across all five milestones within 30 days, up from an original baseline of 15% before any interventions.

The correlation data made the business case undeniable: customers who activate within 30 days have 85% 12-month retention, while those who don't reach activation within 90 days have only 45% 12-month retention. Based on this, the company shifted one customer success headcount from reactive support to proactive onboarding outreach for mid-market accounts stuck at milestone 4, and within two quarters milestone 4 completion rose further to 62%, with a corresponding 6-point lift in 12-month retention for that segment.

How to know it worked: rising activation rate at each milestone quarter over quarter, a shrinking time-to-first-value, and a demonstrable correlation between activation speed and 12-month retention that finance and leadership accept as a forecasting input.

**Pitfalls:**
- **Ignoring the product.** If the product experience itself is confusing, no amount of documentation or messaging will fix it. Onboarding content can't overcome bad product design. Recovery: If more than one intervention fails to move a milestone's completion rate, treat it as a signal to escalate a product or UX fix rather than writing a third tutorial.
- **One-size-fits-all onboarding.** A startup needs to get productive within days, while an enterprise customer can tolerate, and often expects, a multi-month deployment. Applying the same email sequence to both wastes the SMB customer's patience and undersells the enterprise customer's need for hands-on support. Recovery: Map distinct onboarding paths by segment before building content, and set different time-to-value targets for each.
- **Measuring the wrong metrics.** "Completed onboarding" is not the same as "will stay and pay." A customer can tick every milestone box without ever finding real value. Recovery: Always pair milestone completion data with a retention or expansion outcome, and drop any milestone from the model that doesn't correlate with a downstream business result after two quarters of data.

**See also:** Complete Product Experience Framework (onboarding is one critical touchpoint among seven); STP Framework (tailor onboarding to different segment types); NPS Framework (correlate onboarding experience with long-term customer satisfaction); Time to Value Framework (breaks this framework's "time-to-first-value" milestone metric into a validated, evidenced sub-metric set).

---

## Win/Loss Analysis Framework

**Type:** Methodology.

**What it is:** A systematic process for analysing why customers buy (wins) and why they choose competitors (losses). Unlike surveys, win/loss analysis involves structured interviews with decision-makers to uncover the real reasons behind purchase decisions. Insights inform positioning, messaging, competitive strategy, and product development priorities. The discipline rests on a widely shared practitioner observation, rather than a single formal study: decision-makers tend to be more candid in a post-decision interview, once the sales pressure is off, than they were during the sales process itself.

**When to use it:**
- Quarterly, as part of competitive intelligence and positioning refinement
- After major losses to high-value accounts, to understand why the deal was lost
- When win rates are declining and it's unclear whether the cause is positioning, pricing, product, or sales execution
- When entering a new market or launching against a new competitive feature
- To inform sales enablement, by identifying which objections deals are lost on most often
- Before a major pricing or packaging change, to establish a baseline of current win and loss drivers

**How to run it:**
1. **Identify the sample:** Interview 10 to 20 recent wins and 10 to 20 recent losses from the past 30 to 90 days. Mix deal sizes and customer segments so the findings aren't skewed by a single account type, and avoid only interviewing the easiest customers to reach.
2. **Conduct interviews:** Use a semi-structured format, not a survey, so the interviewer can follow up on interesting answers. Ask:
   - What problems were you trying to solve?
   - What options did you evaluate, and how did you first hear about each one?
   - What was the primary reason you chose us, or a competitor?
   - What almost stopped the deal from happening at all?
   - What surprised you about our product compared with the competitor's?
   - Looking back, is there anything we could have shown or explained earlier that would have changed your timeline or decision?
3. **Analyse patterns:** Look for recurring themes rather than one-off comments. Common loss reasons include "too expensive," "competitor already integrated with Salesforce," "implementation timeline too long," and "positioning confused us." A theme mentioned by only one buyer is an anecdote; a theme mentioned by five or more is a pattern worth acting on.
4. **Segment by decision-maker:** CFOs tend to buy on price and ROI, CTOs on architecture and scalability, and CMOs on ease of use. Analyse wins and losses separately by role so the resulting messaging changes target the right buyer with the right argument.
5. **Update strategy:** Refine messaging, competitive positioning, pricing, product roadmap priorities, and the sales playbook based on the insights. Assign an owner and a deadline to each recommended change so the analysis doesn't stall at the recommendation stage.
6. **Track over time:** Run win/loss analysis quarterly. Have loss reasons changed? Is the updated messaging resonating better? Is a product gap widening or closing? Keep a running log so trends across quarters are visible, not just a single quarter's snapshot.
7. **Close the loop with sales:** Share findings with the sales team within two weeks of completing the analysis, ideally in a live session where reps can ask questions, since sales buy-in is what turns insights into changed behaviour on live deals.

**Cadence & ownership:** PMM owns the interview programme, the pattern analysis, and the resulting recommendations; sales supplies the deal list and participates in the close-the-loop session, and product leadership consumes findings that affect roadmap priority. Run the full cycle quarterly as the standing cadence, with sample selection (step 1) refreshed each time from the prior 30 to 90 days of closed deals. Treat a major loss to a high-value account, a declining win rate with no clear cause, or a pending pricing or packaging change as triggers for an off-cycle round, in addition to the quarterly rhythm.

**Example:**

A CRM platform analyses 30 deals (15 wins, 15 losses) in Q1:

**Wins:**
- Primary reason: 9 of 15 wins cited "easy to customise without code" versus competitors that required a development team.
- Secondary reason: 7 cited "existing Zapier integrations saved us 4 weeks" versus competitors with a limited integration ecosystem.
- Tertiary reason: 5 praised support responsiveness, specifically citing a sub-two-hour first response time during the trial.

**Losses:**
- Primary reason: 8 of 15 losses chose Salesforce because "it's what our enterprise parent company mandates," a decision made above the buyer's authority.
- Secondary reason: 5 lost to HubSpot because "an all-in-one marketing and CRM platform was easier than integrating two separate tools."
- Tertiary reason: 4 cited that the competitor's total cost of ownership was 30% lower over a three-year term.
- Surprise finding: 3 losses mentioned "we didn't know you could do X," meaning the product already had the capability, but messaging never surfaced it during the evaluation.

**Actions taken:**
- Messaging shift: lead with "no-code customisation" in the first sales call to differentiate clearly from Salesforce's developer-heavy approach.
- Content: develop a comparison guide, "Zapier integrations as a native alternative to custom development," to directly counter HubSpot's all-in-one argument.
- Sales enablement: build a short script to address "enterprise mandate for Salesforce" objections, positioning the product as a complement rather than a replacement.
- Product messaging: surface the integration and customisation examples that the three surprised losses didn't know existed, adding them to the standard demo script within two weeks.
- Pricing review: analyse why HubSpot's total cost of ownership came in 30% lower, checking whether the gap is driven by list pricing, the pricing model's structure, or implementation time.

Twelve weeks after these actions, the team ran a smaller follow-up sample of 10 deals and found zero losses citing "didn't know you could do X," confirming the messaging fix had closed that specific gap.

**Benchmarks:** These are illustrative ranges commonly cited in B2B SaaS sales-performance benchmark reports (for example, those published by sales-methodology vendors and RevOps analyst firms), not a single authoritative figure; validate against your own segment and category before treating them as a target. For context, a 50% win rate (15 wins from 30 total deals) would be strong for a mid-market CRM platform. Commonly cited win rate ranges by segment are roughly: SMB 40 to 60%, mid-market 30 to 50%, and enterprise 15 to 35%, reflecting the longer sales cycles and larger buying committees at the top end. In this example, losing 8 deals to "enterprise mandate" is a normal, largely unavoidable pattern rather than a messaging problem, but losing 3 deals because customers didn't know about existing features is fixable within 30 days through better demo scripting and sales messaging.

**Pitfalls:**
- **Asking leading questions.** A question like "Why didn't you choose us because of our great support?" will bias the answer toward what the interviewer wants to hear. Recovery: Use open-ended questions and have someone outside the deal team, ideally a PMM or a third-party researcher, conduct the interview so the buyer feels safe being candid.
- **Analysing losses but not wins.** You learn as much from why customers buy as from why they don't, and a losses-only analysis produces a defensive, gap-focused strategy rather than a balanced one. Recovery: Always interview an equal or near-equal number of wins and losses in every cycle, even when losses feel more urgent.
- **Not following up.** Collecting data and not acting on it wastes the time of every customer interviewed and erodes their willingness to participate next time. Recovery: Commit publicly, inside the company, to updating positioning, messaging, and the sales playbook within 2 weeks of completing the analysis, and report back on what changed.

**See also:** Competitive Intelligence & Positioning Update Framework (use win/loss findings to inform quarterly competitive analysis); Product Differentiation Strategy Framework (validate whether your claimed differentiation actually drives wins); Quarterly PMM Planning Framework (win/loss insights should feed quarter-over-quarter strategic planning).

---

## Net Promoter Score (NPS) & Feedback Loop Framework

**Type:** Framework.

**What it is:** A framework for using customer feedback, especially NPS, CSAT, and open-ended interviews, to inform product marketing strategy. PMM uses NPS to identify brand advocates (Promoters) and detractors (Detractors), gathers the reasons behind their sentiment, and closes the loop by addressing root causes in product, support, messaging, or pricing. NPS on its own is just a number; the framework's value comes from pairing the score with qualitative follow-up and a defined action for every segment of respondent.

**When to use it:**
- Quarterly, or after major product releases, to capture sentiment shifts
- To identify which customer segments have the highest and lowest NPS, and why
- When NPS is declining, to diagnose whether the cause is a product issue, a support issue, or a messaging or expectation-setting issue
- To recruit advocates for case studies, testimonials, and referral programmes
- To identify at-risk accounts (Detractors) before they churn
- When building the business case for an investment in product or support, since NPS trends give a leading indicator that predates churn and revenue impact

**Ownership:** At a scaled company with a specialised PMM team, the Head of Product Marketing owns the segmentation, theme analysis, and the resulting messaging or roadmap recommendations, while the Head of Customer Success owns the Detractor and Passive outreach itself, since that requires an existing account relationship PMM doesn't hold. Survey design and cadence decisions typically sit with whichever of the two functions administers the survey tool; in most scaled organisations that's Customer Success. At a solo or founding-PMM stage, the founding PMM owns the entire loop, from sending the survey through to following up with individual Detractors, because there is no separate CS team yet.

**How to apply it:**
1. **Send the NPS survey:** Ask one question: "How likely are you to recommend us to a peer, on a scale of 0 to 10?" with an optional follow-up: "Why?" Keep the survey to just these two questions; response rates drop sharply once a survey asks for more than a minute of a customer's time.
2. **Segment the responses:** Categorise respondents into Promoters (9 to 10), Passives (7 to 8), and Detractors (0 to 6). Calculate NPS as the percentage of Promoters minus the percentage of Detractors, ignoring Passives in the calculation itself while still reading their comments.
3. **Analyse by segment:** Is NPS different across customer segments, industries, company sizes, or use cases? If NPS for Enterprise is 60 but SMB is 20, these segments need fundamentally different strategies, not a single blended response.
4. **Identify themes:** Read every piece of open-ended feedback rather than skimming a sample. Are Detractors unhappy about product gaps, pricing, support speed, or unmet expectations set during the sales process? Are Promoters citing specific features, customer success relationships, or ease of use? Tag each comment by theme so the volume of each issue is countable.
5. **Close the loop:**
   - **Detractors:** Have support or customer success reach out individually, understand the issue, and resolve it where possible. If it's a product gap, escalate to the product team with the customer's specific comment attached, not a paraphrase.
   - **Passives:** Identify what would move them into the Promoter category. Often it's a single missing feature or a single unresolved support ticket, so a targeted outreach can convert a meaningful share of this group.
   - **Promoters:** Ask for a case study, a testimonial, or a referral. Invite them to a customer advisory board or an early-access beta programme, since Promoters are also your best source of product feedback for what to build next.
6. **Track and trend:** Monitor NPS monthly or quarterly, not just as an annual snapshot. Which initiatives, whether product, support, or marketing, correlate with NPS improvements? Keep a simple change log alongside the NPS trend line so cause and effect stay visible over time.
7. **Report NPS alongside a leading business metric:** Pair the NPS trend with a metric like renewal rate or expansion revenue when reporting to leadership, since a rising NPS score alone can be a hard sell without a link to commercial outcomes.

**Example:**

A SaaS accounting tool measures Q1 NPS across its base of 12,000 active customers:

- **Overall NPS:** 45, which is reasonable but not exceptional for the category.
- **By segment:**
  - Mid-market (100 to 500 employees): NPS 60, firmly in Promoter territory.
  - SMB (10 to 99 employees): NPS 15, a clear Detractor-leaning segment.
  - Enterprise (500-plus employees): NPS 50, largely Passive.
- **SMB Detractor feedback:** "Too complex, too expensive, support is slow, doesn't work well for freelancers."
- **Mid-market Promoter feedback:** "Seamless QuickBooks integration, fast support, perfect for our size."
- **Enterprise Passive feedback:** "Does what we need but integrations are limited, and pricing is high for the value at our scale."

**Actions taken:**
- **SMB strategy:** Launch a "Lite" tier that is simplified and lower-priced, partner with a freelancer community for distribution, and add live chat support to address response-time complaints.
- **Enterprise strategy:** Develop a public integration roadmap and offer consulting support for custom implementations to move Passives toward Promoter status.
- **Support:** Address SMB support speed through additional hiring, better ticket routing, and chatbot automation for common first-response questions.
- **Measurement:** Recheck NPS in Q2 specifically for the SMB segment to see whether the Lite tier and support changes move the needle.

By Q2, SMB NPS rose from 15 to 31 following the Lite tier launch and the chat support rollout, while mid-market and Enterprise NPS held steady, confirming the interventions were correctly targeted rather than a general market shift.

**Benchmarks:** These bands are commonly cited in NPS benchmark reports from Bain & Company (originators of the Net Promoter System) and survey platforms such as Delighted and Retently, though exact cut-offs vary by publisher; treat them as a directional reference, not a fixed standard. For context, typical SaaS NPS bands cited in this literature are roughly: world-class (NPS above 50), good (40 to 50), acceptable (30 to 40), and at-risk (below 30). A mid-market NPS of 60 is world-class by that reading; an SMB score of 15 and an Enterprise score of 50 suggest the two segments need very different strategies rather than a single company-wide initiative. By segment, commonly cited averages are roughly: enterprise software 25 to 35, mid-market SaaS 40 to 50, and SMB or self-service products 30 to 45, so compare your own segment scores against the right band rather than a single blended industry average.

**Pitfalls:**
- **Obsessing over the number.** A 45 NPS is useful context, but the insights behind it matter more than the score itself, and teams that fixate on moving the number by a point or two often miss the underlying issue. Recovery: Report NPS alongside its top three qualitative themes every time, so the conversation stays on root causes rather than the number in isolation.
- **No follow-up.** If Detractors report that support is slow and the issue isn't fixed, NPS won't improve no matter how many surveys are sent. Recovery: Assign an owner to every major Detractor theme within one week of the survey closing, with a target date for a visible fix.
- **Assuming all Detractors will churn.** Some Detractors are highly engaged but critical precisely because they care about the product succeeding. Recovery: Segment Detractors by usage and tenure before writing them off; a heavy, long-tenured user who scores low is often your best source of specific, fixable feedback and can become a Promoter once heard.

**Further reading:** Fred Reichheld, *The Ultimate Question 2.0* (2011). Reichheld's definitive guide to the Net Promoter System, which extends beyond the metric to a complete management philosophy centred on customer loyalty. Bain & Company's Net Promoter System resources are also excellent for implementation details.

**See also:** STP Framework (segment NPS by customer segment to identify which segments need different strategies); Customer Onboarding Maturity Framework (correlate onboarding experience to NPS outcomes); Feature Adoption Framework (tie feature adoption rates to NPS improvements); RFM Model (a behavioural complement to NPS's sentiment signal; cross-reference the two to catch a Champion account with declining sentiment or an At-risk account still scoring well on NPS).

---

## Kano Model

**Type:** Framework.

**What it is:** A model, developed by Noriaki Kano together with Nobuhiku Seraku, Fumio Takahashi, and Shinichi Tsuji, and published as "Attractive Quality and Must-Be Quality," *Journal of the Japanese Society for Quality Control*, 14(2) (1984), pp. 39–48, that classifies product features by how they affect customer satisfaction, rather than by how much effort they take to build. It sorts features into five categories: **Must-be** (basic expectations that cause dissatisfaction if missing but generate no delight if present, such as a login that works), **Performance** (features where more is simply better and satisfaction rises linearly with how well they are delivered, such as sync speed), **Delighters** (unexpected features that create disproportionate satisfaction precisely because customers did not expect them, such as a support agent solving a problem before the customer noticed it), **Indifferent** (features customers do not care about either way), and **Reverse** (features that actively reduce satisfaction for some customers, such as added complexity a simplicity-focused segment does not want). The insight that makes Kano useful for PMM is that these categories are not fixed: a delighter today (fast sync) becomes a must-be tomorrow, once competitors match it. Kano gives PMM a shared vocabulary with product for a question roadmap debates usually argue past each other on: not "is this feature good?" but "which of these five effects does it have on satisfaction, and does our launch messaging match that effect?"

**When to use it:**
- **Launch messaging is leading with the wrong feature.** A team about to headline a launch with a must-be feature (something customers assume is already there) will underwhelm; Kano flags that the headline should be the delighter instead.
- **The roadmap is a flat list with no sense of which items move satisfaction and which just remove complaints.** Kano forces a distinction between fixing dissatisfaction (must-be) and creating advocacy (delighters), which are different jobs with different payoffs.
- **A packaging or Good-Better-Best tier decision needs to decide which features are baseline versus premium.** Must-be features belong in every tier; delighters are strong candidates for a premium tier precisely because their absence is not felt as a loss.
- **NPS or churn feedback keeps citing missing basics that the team assumed were "solved" years ago.** This is the clearest sign a feature has quietly moved from delighter or performance into must-be territory, and needs re-prioritising as a retention risk, not a nice-to-have.
- **Competitive parity is eroding a delighter's impact.** If competitors have shipped an equivalent to a feature that used to differentiate you, Kano gives PMM the language to flag it as reclassified, and route messaging and roadmap attention accordingly.

**Ownership:** At a scaled company with a specialised PMM team, the Head of Product Marketing owns running the survey, the segmentation, and translating the classification into launch messaging, while final decision rights on which features actually get built or resourced sit with the VP Product or Head of Product, since Kano output is an input to roadmap prioritisation, not a roadmap in itself. The two functions should agree the feature list together before the survey goes out, so the classification answers a question product actually needs answered. At a solo or founding-PMM stage, the founding PMM typically runs the survey and shares the results directly with the founder or whoever holds the product decision, since there is no separate product organisation to hand it to.

**How to apply it:**
1. **List the candidate features.** Gather the roadmap items, recent releases, or a mix of both that need classifying, typically 10 to 20 at a time so a survey stays a manageable length for respondents.
2. **Write a paired question for each feature.** For every feature, ask two versions of the same question: a functional form ("How would you feel if this feature were present?") and a dysfunctional form ("How would you feel if this feature were absent?"), each answered on a five-point scale from "I like it" to "I dislike it".
3. **Survey a representative sample of the target segment.** Aim for at least 30 to 50 responses per segment if the finding needs to hold up for a launch or roadmap decision; fewer than that produces a directional read only.
4. **Cross-tabulate the paired answers using the standard Kano evaluation table.** Plot each respondent's functional and dysfunctional answers against the standard Kano scoring grid, which maps every combination of the two answers to one of the five categories (Must-be, Performance, Delighter, Indifferent, Reverse, plus a Questionable category for internally inconsistent answers that should be discarded or re-asked). Most survey platforms with a Kano template automate this step.
5. **Classify each feature by its most common category across respondents.** A feature is not always unanimous; report the category the plurality of respondents landed on, and note if a meaningful segment (for example, power users versus new users) classified it differently, since that split is itself a useful finding for segmented messaging.
6. **Translate the classification into roadmap and messaging decisions.** Must-be features get resourced defensively (fix gaps fast, do not headline them). Performance features get resourced proportionally to their measured impact on satisfaction. Delighters get protected from being cut for schedule pressure and get the launch headline. Indifferent features get deprioritised unless they unlock a must-be or performance feature. Reverse features get flagged to the segment they harm, sometimes meaning they should be optional or hidden behind a setting rather than removed outright for everyone.
7. **Re-run the exercise periodically, not once.** Kano categories drift as the market and competitors move; a feature classified 18 months ago should not be assumed to still hold the same classification, particularly for anything that started as a delighter.

**Example:** Fictional expense-management SaaS company Ledgerpoint ran a Kano survey on 14 candidate features ahead of its annual roadmap planning cycle, sampling 180 customers split across its SMB and mid-market segments. Receipt photo capture, assumed by the product team to be a strong selling point, classified as a clear Must-be: 92% of respondents said they would be dissatisfied without it, and only 8% said they would be pleased to have it, confirming customers now expect it as table stakes rather than a differentiator. Automatic policy-violation flagging, buried on page two of the roadmap as a "nice to have", classified as a strong Delighter for the mid-market segment (61% "like it" if present, only 9% "dislike it" if absent) but Indifferent for SMB, where most companies had no formal expense policy to violate. Multi-currency support classified as Performance: satisfaction rose in a roughly straight line with how many currencies were supported, with no ceiling effect. Armed with this, the roadmap was resequenced: receipt capture reliability bugs were escalated as a retention risk rather than a feature request, since a must-be failing is a dissatisfaction driver; policy-violation flagging was pulled forward and became the headline of the next mid-market-focused release, with messaging built specifically for that segment rather than a blanket launch; and multi-currency investment was scoped to "good enough to be competitive" rather than "as many currencies as possible", since Performance features have a proportional, not urgent, payoff. Two quarters after the policy-violation flagging launch, mid-market NPS rose from 34 to 47, while SMB NPS, correctly untouched by a feature classified as Indifferent for that segment, held flat at 38, confirming the segmented read had been the right call.

**Pitfalls:**
- **Treating a Delighter as a Must-be and over-investing to "perfect" it.** Once a feature is correctly classified as a delighter, there is a temptation to keep polishing it indefinitely. Recovery: check whether the feature shows performance-style linear returns in follow-up surveys; if gains are flattening, redirect the investment toward a genuine must-be gap instead.
- **Running the survey once and assuming the classification is permanent.** A feature that drove real differentiation two years ago may have quietly become a must-be as competitors caught up, while the roadmap still treats it as a headline feature. Recovery: re-run the Kano survey on key differentiating features at least annually, and treat any Delighter approaching a 12 to 18 month age without a re-check as due for reclassification.
- **Sampling one segment and generalising to the whole customer base.** A feature that delights power users can be entirely indifferent, or even a mild negative, for a simpler-use-case segment, and averaging the two together erases both findings. Recovery: always segment the Kano analysis by the same customer segments STP already defined, and report classifications per segment rather than as a single blended result.

**See also:** STP Framework (Category 1; segment the Kano survey by the same target segments STP defined, since classification often differs by segment); Good-Better-Best (GBB) Packaging Framework (Category 8; must-be features belong in every tier, delighters are strong candidates for a premium tier); Feature Adoption Framework (Category 5; once a feature ships, adoption data is a second, behavioural check on whether the Kano classification held); Voice of the Customer (VoC) Programme (Category 1; VoC verbatims complaining about a "missing basic" are an early behavioural signal that a feature has drifted from delighter into must-be).

---

## Forrester Customer Advocacy Model

**Type:** Model.

**What it is:** A staged model for building a proactive customer advocacy practice rather than treating advocacy as an ad hoc byproduct of whichever happy customer marketing remembers to ask when a case study is due. Forrester Research publishes customer-advocacy maturity research (notably report RES172291, behind a paywall); this entry adapts that research tradition into a four-stage ladder rather than reproducing Forrester's model verbatim. It reads advocacy activity along four dimensions: how systematically advocates are identified and segmented, how broad the menu of asks is, whether the same small pool is repeatedly over-used, and whether advocacy is instrumented into the customer lifecycle or bolted on reactively. Plotting a company against those four dimensions places it on a four-stage ladder: **Reactive** (advocacy is chased only when a specific asset is due, with no tracking of who has already been asked), **Identified** (NPS and win/loss data are used to systematically find and segment Promoters, with a lightweight tracking system so the same three accounts are not approached for everything), **Programmatic** (a formal, tiered programme exists with a menu of asks scaled by effort and a matched reward, run on a defined cadence by a named owner), and **Embedded** (advocacy is triggered automatically at lifecycle moments, its contribution to pipeline and win rate is measured, and it has its own budget justified by that measurement). Most companies with genuinely happy customers still sit at Reactive, because a high NPS score is often mistaken for an advocacy programme, when nobody has actually built the system that turns satisfied customers into a reliable asset.

**When to use it:**
- **Marketing only ever finds a customer reference "just in time" for a specific ask**, and the same handful of accounts get approached repeatedly because they are the ones everyone remembers.
- **NPS identifies plenty of Promoters, but nobody has a system for turning that list into active, willing advocates.** A long list of high scorers with no tracked follow-up is a Reactive-stage symptom, not an advocacy programme.
- **Sales asks for a reference matched to a specific prospect's industry or use case**, and there is no reliable way to find one beyond asking around the team from memory.
- **Leadership wants a case study or reference library built**, but there is no process to keep it fresh as advocates change roles, get promoted, or churn.
- **You are deciding whether advocacy needs a dedicated owner** (a customer marketing hire) or can keep being a shared, informal responsibility; the model gives a defensible read on how much unmanaged risk (advocate fatigue, a stale reference library) the current approach is carrying.

**Ownership:** At a scaled company with a specialised PMM team, a dedicated Head of Customer Marketing (or a Customer Advocacy Manager reporting into that role) owns the model outright: the audit, the tracking system, the ask menu, and the lifecycle instrumentation. The Head of Customer Success supplies the renewal and usage-milestone triggers and helps nominate candidates, but doesn't own the programme itself. At a solo or founding-PMM stage, the founding PMM owns every stage of the ladder personally, since a dedicated customer marketing hire doesn't yet exist to take over identification, ask-menu design, and outreach.

**How to read it:** Treat the four stages as a ladder a company climbs deliberately, not a checklist to complete all at once, and diagnose the current stage honestly rather than assuming a programme's name reflects its actual maturity. Score against the four dimensions: **identification and segmentation** (systematic process, or same names from memory), **ask-menu breadth** (scaled by effort and reward), **fatigue management** (tracking of ask frequency), and **lifecycle instrumentation** (triggered by events, or chased reactively). A company scoring low on all four is Reactive; well on identification alone is Identified; well on identification, ask-menu breadth, and fatigue management but with no lifecycle trigger is Programmatic; well across all four, with a measured pipeline and win-rate contribution, is Embedded.

**How to apply it:**
1. **Audit the last two or three quarters of advocacy activity.** Count how many times a customer was approached for a reference, quote, or case study, and how many distinct accounts were involved. A high ratio of asks to distinct accounts is the clearest single signal of Reactive-stage advocate fatigue risk.
2. **Cross-reference NPS Promoters and win/loss interview subjects against that audit**, and build a tracking system (a CRM field or shared spreadsheet) recording who has been asked, for what, and when, to enforce an agreed annual cap.
3. **Build a tiered ask menu scaled by effort and matched to a reward.** Low-effort asks (a public review, a short quote) earn a small thank-you; medium-effort asks (a written case study, a website logo) earn co-marketing exposure; high-effort asks (a reference call, a speaking slot) earn meaningful recognition such as an executive advisory board seat.
4. **Assign a named owner**, typically a customer marketing role or a PMM with that explicit scope, to run the programme on a defined cadence, for example a quarterly nomination cycle sourced from customer success plus an always-open self-nomination form.
5. **Instrument advocacy into lifecycle moments** rather than waiting for a marketing need to surface one: trigger a nurture step at a renewal, a usage milestone, or a strongly positive support interaction, so candidates surface continuously rather than only when someone goes looking.
6. **Measure the programme's contribution** by tracking reference-assisted win rate, case-study-sourced pipeline, and advocate account retention or expansion against the wider base, and use that data to justify the investment needed to move from Programmatic toward Embedded.
7. **Re-audit at least annually.** A programme can slide back toward Reactive quietly if its named owner moves roles or the tracking system falls out of use during a busy quarter, and the model's value comes from catching that regression early, not from a one-off diagnosis.

**Example:** Clearway, a fictional B2B payments company, had run a purely Reactive advocacy motion for two years: whenever sales needed a reference for an enterprise deal, or marketing needed a quote for a launch, someone in PMM messaged the same four long-tenured customers, because they were the names everyone remembered. An audit run against this model found those four accounts had absorbed 90% of every advocacy ask over the two years, despite the company's own NPS data separately identifying 62 Promoters in the wider customer base who had simply never been approached. Two of the four repeatedly-asked accounts had stopped responding to requests entirely by the time of the audit. PMM cross-referenced the NPS Promoter list against account tier and industry, built a tracking sheet, and introduced a three-tier ask menu: a G2 review (gift card), a case study (co-marketing exposure), and a reference call (advisory board invitation). Customer success was briefed to nominate a candidate at every renewal scoring Promoter on the post-renewal NPS survey. Within two quarters, the active advocate pool grew from 4 accounts to 23, average reference-call response time fell from 9 days to 2 days, and deals that used a reference closed at a 14-point higher win rate, the evidence that justified budgeting the programme as a formal customer marketing responsibility the following year.

**Pitfalls:**
- **Treating NPS Promoter status alone as proof of advocacy willingness.** A Promoter who privately loves the product may have no interest in, or even a company policy against, public advocacy, and assuming otherwise both over-targets uninterested accounts and under-uses genuinely willing customers who scored lower on NPS for unrelated reasons. Recovery: always confirm willingness directly with a simple opt-in question before adding an account to the tracked advocate pool, rather than inferring consent from a high NPS score alone.
- **Advocate fatigue from over-relying on the same small, easy-to-remember pool.** Clearway's original four-account pattern is the common failure mode: the same names get asked because they are top of mind, not because they are the best-matched or most willing advocates available. Recovery: cap asks per account per year (two to three is a reasonable default), track the cap explicitly in the system built in step 2, and route new requests to under-used advocates first.
- **Running the programme with no measurement, so it never earns a dedicated budget or survives a headcount review.** An advocacy programme that cannot point to a pipeline or win-rate number looks like a nice-to-have the first time budgets tighten. Recovery: track reference-assisted win rate and advocate-sourced pipeline from the programme's first quarter, even informally, so there is evidence ready the moment its value is questioned.

**See also:** Net Promoter Score (NPS) & Feedback Loop Framework (Category 6; the initial source of Promoters this model segments into a managed advocate pool); PMM Lifecycle Management Framework (Category 5; names Advocacy as a lifecycle stage, of which this model is the operational build-out); Win/Loss Analysis Framework (Category 6; a source of strong advocate candidates and the language that becomes case-study copy); Competitive Battlecard Framework (Category 9; a mature advocacy programme is a source of proof points a battlecard can cite in a live deal).

---

## RFM Model (Recency, Frequency, Monetary Value)

**Type:** Model.

**What it is:** A customer-segmentation model, no single named originator but a decades-old staple of database and direct marketing dating to at least the 1990s, well before any single vendor codified it, that classifies customers along three behavioural dimensions: Recency (how recently did they last engage or purchase), Frequency (how often do they engage or purchase), and Monetary value (how much revenue do they represent). Scoring every customer on the three dimensions, usually on a simple 1–5 scale each, produces a segment for every customer that behavioural sentiment metrics alone cannot: NPS tells you how a customer *feels*; RFM tells you how valuable and how at-risk they *behaviourally are*, right now, based on what they actually do rather than what they say. The two are complementary, not competing: a customer can score high on NPS while quietly sliding on Recency, a red flag NPS alone will not catch until the next survey cycle, if the customer even responds to it.

**When to use it:**
- **Retention or customer success resource is spread evenly across the customer base**, with no systematic way to tell which accounts most need an intervention right now versus which are safely engaged.
- **Advocacy or reference requests keep going to the same small pool of long-tenured customers**, because there is no behavioural signal identifying newer high-value, high-engagement accounts as candidates.
- **Churn is rising and the team needs to find at-risk accounts before they cancel**, rather than after, when a save-play is far less likely to succeed.
- **NPS data alone is not distinguishing "genuinely valuable and engaged" customers from "scored a 9 on a survey six months ago and has not logged in since."** RFM is the behavioural check the sentiment score is missing.
- **A customer marketing or lifecycle-messaging programme needs to trigger different treatment for different value tiers**, rather than sending the same email to every account regardless of how active or valuable they are.

**Ownership:** At a scaled company with a specialised PMM team, Customer Success or RevOps typically owns pulling and maintaining the underlying usage, purchase, and engagement data feeding the model, while PMM or a customer marketing function owns translating the resulting segments into action: which segment gets an advocacy ask, which gets a save-play, which gets an expansion pitch. The save-play execution itself, actually reaching out to a declining-Recency account, sits with Customer Success, not PMM. At a solo or founding-PMM stage, the founding PMM typically pulls the data directly from the CRM or product analytics tool and runs the full segmentation and outreach personally, since no dedicated CS or RevOps function yet exists to split the work with.

**How to read it:** Score every customer 1 (worst) to 5 (best) on each of the three dimensions independently, using quintiles of your own customer base as the cut points rather than fixed universal thresholds, since what counts as "recent" or "high value" varies enormously by product and price point. Combine the three scores (as a simple three-digit code, or a single composite average) to place each customer into a segment:

- **Champions (high R, high F, high M):** Recently active, frequent, high-value. Your best advocacy and expansion candidates.
- **At-risk (low R, high F, high M):** Historically frequent and valuable, but Recency has dropped. The clearest, most urgent save-play candidates, since they were engaged and valuable until recently, meaning something specific changed.
- **New/Promising (high R, low F, variable M):** Recently active but with limited history to judge Frequency or Monetary value yet. Candidates for a structured onboarding or activation push, not yet advocacy asks.
- **Hibernating/Lost (low R, low F, any M):** Long absent and rarely engaged, regardless of how valuable they once were. Deprioritise for active outreach; a low-cost, low-touch win-back campaign is the usual treatment, not a resource-intensive save-play.
- **Loyal but low-value (high R, high F, low M):** Frequently engaged but representing limited revenue. Strong candidates for an expansion or upsell motion, since engagement is not the barrier, price tier or feature adoption likely is.

Read the distribution across segments, not just any single customer's placement, to judge the health of the base as a whole: a customer base with a large and growing At-risk segment is an early warning the sentiment metrics may not yet show.

**How to apply it:**
1. **Pull the underlying data.** For every customer, gather the date of last meaningful engagement or purchase (Recency), the count of purchases or active-usage events over a defined window, typically the trailing 12 months (Frequency), and total or annualised revenue (Monetary value).
2. **Score each dimension independently on a 1–5 scale**, using quintiles within your own customer base as the cut points, so the scoring reflects your actual distribution rather than an arbitrary universal threshold that may not fit your business.
3. **Assign each customer to a named segment** using the combined RFM score, following the segment definitions above or a variant tailored to your business.
4. **Cross-reference against NPS or CSAT where available.** A Champion with a low NPS score, or an At-risk customer with a historically high NPS score, is a specific, actionable anomaly worth a closer look before any automated segment-based outreach fires.
5. **Assign a distinct action per segment.** Champions get advocacy asks and early access to new features; At-risk gets a proactive outreach from Customer Success within a defined window (for example, five business days of moving into the segment); Hibernating gets a low-cost automated win-back sequence rather than a resource-intensive personal outreach; Loyal-but-low-value gets an expansion or upsell nurture.
6. **Automate the segment assignment on a recurring cadence** once the model is validated, so RFM segments update as customer behaviour changes rather than reflecting a stale snapshot from months earlier.
7. **Track segment migration over time**, not just a single snapshot; a customer moving from Champion to At-risk is the actionable signal, more useful than either static label alone.

**Example:** Fictional B2B expense-management platform Ledgerway had a customer marketing programme built almost entirely around tenure: customers over two years old received advocacy requests, everyone else received generic onboarding emails. Applying an RFM model to its 4,200-account base for the first time, PMM found several long-tenured accounts had drifted into the At-risk segment (high historical Frequency and Monetary value, but Recency scores in the bottom quintile, no login in over 60 days) despite still being the ones receiving advocacy requests. Meanwhile, a cluster of newer accounts, onboarded within the previous six months, had already scored as Champions, high Recency and Frequency, strong early revenue signal, but had never been considered for an advocacy ask under the tenure-based rule. PMM rebuilt the customer marketing programme around RFM segments instead of tenure: Champions (287 accounts, including many newer customers previously overlooked) were routed into the advocacy programme; the 94 accounts newly identified as At-risk were flagged to Customer Success for proactive outreach within five business days. Within one quarter, the At-risk outreach recovered 61% of flagged accounts back to active engagement, and the newly identified Champion pool produced 34% more advocacy participants than the old tenure-based list had ever generated, without any increase in the total number of customers approached.

**Pitfalls:**
- **Using fixed, universal thresholds instead of quintiles from your own base.** A "recent" purchase for a low-frequency annual-contract enterprise product looks very different from "recent" for a high-frequency self-serve product, and applying the same absolute cut-off (for example, "purchased in the last 30 days") across both misclassifies most of the base. Recovery: always derive Recency, Frequency, and Monetary thresholds from quintiles of your own customer distribution, recalculated periodically as the base grows or shifts.
- **Treating RFM as a replacement for sentiment data rather than a complement to it.** RFM measures behaviour, not feeling; a customer can score as a Champion behaviourally while being quietly frustrated and one bad support interaction away from churning. Recovery: cross-reference RFM segments against NPS or CSAT where available, and treat a mismatch between the two, high RFM but low sentiment, as a specific priority for outreach, not a data error to ignore.
- **Running the segmentation once and never refreshing it.** A static RFM snapshot from six months ago misses exactly the migration between segments, a Champion sliding toward At-risk, that the model exists to catch early. Recovery: automate the scoring on a recurring cadence (at minimum monthly) once the initial model is validated, and specifically track segment migration, not just a point-in-time snapshot.

**See also:** Net Promoter Score (NPS) & Feedback Loop Framework (a complementary sentiment signal to cross-reference against RFM's behavioural segments); Forrester Customer Advocacy Model (RFM's Champion segment is a natural feed into that model's Identified and Programmatic advocate-tracking stages); Win/Loss Analysis Framework (a qualitative check on why an At-risk segment is declining, once RFM has identified it).

---

## Time to Value Framework

**Type:** Model.

**What it is:** A model that breaks the single, often loosely used phrase "time to value" into distinct, measurable sub-metrics, so a team stops treating "how fast do customers get value" as one vague number and starts tracking the specific point that number actually describes. The core distinction, closely associated with Lincoln Murphy's customer success writing at Sixteen Ventures and now converged practice across customer-success and product-led-growth literature (Gainsight, ProfitWell, and others publish comparable definitions), is between **Time to First Value (TTFV)**, the moment a customer first experiences a genuine, specific benefit, and **Time to Core Value**, the later point at which product usage becomes a sustained pattern that actually predicts renewal, not just a single good first session. A related pair of distinctions sharpens both: **Activation rate versus time to value** (activation rate measures how many customers reach a value milestone; time to value measures how fast the ones who do get there), and the **"aha moment" versus the activation event** (the aha moment is the emotional, qualitative instant a customer feels the product's value; the activation event is the specific, measurable, in-product action that stands in as a proxy for that feeling, since a feeling itself cannot be logged in analytics). The Customer Onboarding Maturity Framework already names "time-to-first-value" as a milestone metric to track; this model is the sub-metric breakdown that framework's measurement step assumes but does not itself define.

**When to use it:**
- **"Time to value" is used loosely across the team, with sales, product, and customer success each meaning something slightly different by it.** This model gives a shared, precise vocabulary before the metric is used in a business case or a board update.
- **Activation rate looks healthy but retention still lags, or vice versa.** Separating "how many reach value" from "how fast" often reveals the two are moving independently and need different fixes.
- **A defined activation event exists in the analytics but retention data suggests it is the wrong proxy for the real aha moment.** This is the clearest sign the activation event needs re-validating against actual qualitative customer feedback, not just usage logs.
- **Customers report an early "aha" moment in interviews, but usage does not become a sustained pattern afterward.** This signals a gap between Time to First Value and Time to Core Value: a real early win exists, but nothing in the product experience carries it forward into habitual use.
- **You are setting or defending an onboarding-speed target and need the Customer Onboarding Maturity Framework's milestones to map to a specific, named sub-metric**, rather than a single blended "time to value" number that different teams read differently.

**Ownership:** At a scaled company with a specialised PMM team, the Head of Product Marketing typically partners with Product and Customer Success to define and agree the activation event and the Core Value threshold, since both require product-usage data neither function holds alone; PMM's specific contribution is translating the resulting metrics into onboarding messaging and the milestones a self-serve or sales-assisted funnel is built around. Customer Success or Product Analytics usually owns instrumenting and reporting the actual TTFV and Time to Core Value numbers on an ongoing basis. At a solo or founding-PMM stage, the founding PMM typically defines the activation event directly with the founder or a product lead and tracks the resulting numbers personally, since no dedicated analytics or CS function yet exists to own the reporting.

**How to apply it:**
1. **Define the aha moment qualitatively first, through customer interviews, not analytics.** Ask recent activated customers what specifically made them think "this is going to work for me," in their own words, before choosing a quantitative proxy for it; skipping this step risks anchoring the activation event on whatever is easiest to log rather than what customers actually describe as the moment of value.
2. **Choose the activation event as the closest measurable proxy for that aha moment.** The event should be specific and unambiguous in the product's usage data (a report generated, a first successful sync, an invited teammate accepting), not a vague composite like "logged in three times."
3. **Measure Time to First Value as the elapsed time from signup to that activation event**, segmented by acquisition channel, plan tier, or persona where the sample allows; a self-serve trial signup and a sales-assisted enterprise onboarding will have structurally different TTFV even for the same product.
4. **Separately define and measure Time to Core Value**, the point at which usage becomes a sustained, repeating pattern, validated against actual retention data rather than assumed. Test candidate definitions (for example, "used the core workflow in 3 of the last 4 weeks") against which customers in that pattern actually renewed, and pick the definition that correlates most strongly with real retention.
5. **Track activation rate and time to value as two separate numbers, not one blended metric.** A rising activation rate with flat or worsening TTFV means more customers eventually get there but more slowly; a falling activation rate with fast TTFV among those who do activate means the product works well once someone gets going but is losing people before that point. Each diagnosis points to a different fix.
6. **Feed the validated activation event and Core Value threshold into onboarding design and messaging.** Give the Customer Onboarding Maturity Framework's milestone list a concrete, evidenced Time to First Value target to design interventions against, and use the Core Value threshold to decide when a customer has genuinely "arrived" rather than guessing.
7. **Re-validate the activation event and Core Value threshold periodically, not just once.** As the product adds features or the customer base shifts, the specific action that best predicts long-term retention can change; an activation event chosen two years ago on old usage patterns can quietly stop correlating with what actually predicts renewal today.

**Example:** Fictional expense-management SaaS company Ledgerfast tracked a single blended "time to value" metric, defined loosely as "time to first login after data import," and had spent two quarters trying to improve it without any effect on retention. Applying this model, PMM ran 12 interviews with recently activated customers and found the qualitative aha moment was not the first login at all; it was the first time a customer saw an auto-categorised expense report save them from manually sorting receipts, typically several days after the first login. PMM redefined the activation event as "first auto-categorised report viewed" and measured Time to First Value against that instead: median TTFV came in at 4.2 days, far later than the "first login" metric the team had been optimising, which explained why speeding up login had not moved retention. Separately, examining twelve months of usage and renewal data, PMM found customers who viewed at least three auto-categorised reports in their first 30 days renewed at 84%, versus 41% for customers below that threshold, and set that as the Time to Core Value definition. With both metrics now distinct and validated, onboarding was redesigned to accelerate the path to the first auto-categorised report (cutting median TTFV from 4.2 days to 1.6 days by pre-populating a sample report during signup) and to nudge customers toward the three-report Core Value threshold through a targeted email sequence in weeks two and three. Two quarters later, 90-day retention rose from 61% to 74%, a result the old blended "time to first login" metric had given the team no way to diagnose or act on.

**Pitfalls:**
- **Treating time to first login, or another easy-to-log event, as the activation event without validating it against real customer language.** A convenient analytics event is not automatically the aha moment; Ledgerfast's original "first login" metric is the common failure pattern, where the team optimises a number that turns out to be unrelated to what customers actually describe as the point of value. Recovery: always start from step 1's qualitative interviews before choosing the quantitative proxy, and re-validate the choice if retention data does not move when the metric does.
- **Blending Time to First Value and Time to Core Value into one number.** Reporting a single "time to value" figure hides whether the problem is customers never reaching value at all (an activation-rate problem) or reaching an early win but never developing a lasting usage pattern (a Core Value problem), and the two require entirely different fixes. Recovery: always report the two metrics separately, alongside activation rate, rather than collapsing them into one headline figure.
- **Setting the Core Value threshold from a guess rather than from retention data.** A round-sounding definition ("used it weekly for a month") that has never been checked against who actually renewed can systematically mislead the team about whether customers have genuinely adopted the product. Recovery: always test candidate Core Value definitions against real renewal outcomes, as in step 4, before adopting one as the standing metric.

**Further reading:** Lincoln Murphy, Sixteen Ventures, has published extensively on Time to First Value as a customer success and onboarding metric (sixteenventures.com); the distinction is now converged practice across customer-success and product-led-growth literature, including Gainsight's and ProfitWell's published onboarding-metrics guidance.

**See also:** Customer Onboarding Maturity Framework (this model's activation event and Core Value threshold give concrete, evidenced targets to that framework's milestone-design and measurement steps); Product-Led Growth (Category 4; the PQL and activation-moment instrumentation that methodology depends on is the same activation event this model defines and validates); Net Promoter Score (NPS) & Feedback Loop Framework (a complementary sentiment check on whether reaching the defined Core Value threshold actually correlates with higher satisfaction); RFM Model (Frequency, one of RFM's three dimensions, is often the same usage-pattern signal this model's Core Value threshold is built from).
