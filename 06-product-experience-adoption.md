# Category 6: Product Experience & Adoption

## Customer Onboarding Maturity Framework

**What it is:** A model that defines product marketing's role in ensuring customers successfully activate and adopt a product after purchase. It spans customer education (how people learn to use the product), enablement (sales and support have the tools to help customers), and feedback loops (customer success signals product marketing of adoption blockers). Onboarding maturity ranges from self-service (customers figure it out alone) to fully supported (dedicated onboarding teams, training, consulting).

**When to use it:**
- To design or improve onboarding experience for new customers
- When measuring time-to-first-value is critical (especially for self-serve or SMB products)
- To identify where customers get stuck and what messaging or content can help unstuck them
- When deciding between self-serve, guided, or fully-supported onboarding models
- During product scoping to ensure onboarding requirements are designed, not afterthoughts

**How to apply it:**
1. **Define Onboarding Milestones:** What needs to happen for a new customer to feel successful? Usually: (1) Account created, (2) Data imported/connected, (3) First workflow completed, (4) Team invited, (5) Integration with existing tools, (6) Advanced features explored.
2. **Audit Current State:** Where do customers get stuck? Track drop-off rates at each milestone. Interview customers who churned early.
3. **Design Interventions:** For each high-friction milestone, design an intervention: in-app guidance, email sequence, help center article, webinar, sales/support outreach, or onboarding specialist.
4. **Document Onboarding Paths:** Different customer types may need different onboarding. Map paths for self-serve (SMB), guided (mid-market), and fully-supported (enterprise).
5. **Measure & Iterate:** Track time-to-milestone, activation rate at each step, and correlation to long-term retention and NPS. A customer who reaches milestone 3 in week 1 is more likely to stay than one who takes 4 weeks.
6. **Coordinate:** Ensure product (makes onboarding easy), support (helps when stuck), sales (sets expectations), and marketing (promotes successful case studies) are all aligned.

**Example:**

A data analytics SaaS measures onboarding maturity:

- **Milestone 1 (Account Created):** 100% complete (all signups)
- **Milestone 2 (Data Connected):** 65% complete → issue: data connection UI is confusing. Intervention: in-app walkthrough + video tutorial → lifts to 80%
- **Milestone 3 (First Dashboard Built):** 40% complete → issue: template gallery is hidden. Intervention: email sequence + in-app suggestion → lifts to 65%
- **Milestone 4 (Team Invited):** 25% complete → issue: team invitation doesn't explain why it matters. Intervention: sales outreach for mid-market, in-app messaging for SMB → lifts to 50%
- **Milestone 5 (Integration Connected):** 15% complete → issue: Salesforce integration doc is outdated. Intervention: update docs, host webinar → lifts to 35%
- **Final activation rate:** 35% of new customers reach full activation (all 5 milestones) within 30 days. Correlation: customers who activate within 30 days have 85% 12-month retention; those who don't reach activation within 90 days have 45% 12-month retention.

**Pitfalls:**
- **Ignoring the product:** If the product experience itself is confusing, no amount of documentation will fix it. Onboarding messaging can't overcome bad product design.
- **One-size-fits-all onboarding:** A startup needs to get productive in days; an enterprise can afford a 3-month deployment. Map different onboarding experiences to different customer types.
- **Measuring wrong metrics:** "Completed onboarding" is not the same as "will stay and pay." Correlate onboarding milestones to retention and lifetime value.

---

## Win/Loss Analysis Framework

**What it is:** A systematic process for analyzing why customers buy (wins) and why they choose competitors (losses). Unlike surveys, win/loss analysis involves structured interviews with decision-makers to uncover the real reasons behind purchase decisions. Insights inform positioning, messaging, competitive strategy, and product development priorities.

**When to use it:**
- Quarterly, as part of competitive intelligence and positioning refinement
- After major losses to high-value accounts (why did we lose the deal?)
- When win rates are declining (is it our positioning, pricing, product, or sales execution?)
- When entering a new market or launching a competitive feature
- To inform sales enablement (what objections do we lose on most?)

**How to apply it:**
1. **Identify Sample:** Interview 10–20 recent wins and 10–20 recent losses (past 30–90 days). Mix deal sizes and customer segments.
2. **Conduct Interviews:** Semi-structured, not surveys. Ask:
   - What problems were you trying to solve?
   - What options did you evaluate?
   - What was the primary reason you chose us (or a competitor)?
   - What almost stopped the deal?
   - What surprised you about [our product] vs. [competitor]?
3. **Analyze Patterns:** Look for themes. Common loss reasons: "Too expensive," "Competitor already integrated with Salesforce," "Implementation timeline too long," "Positioning confused us."
4. **Segment by Decision-Maker:** CFOs buy on price and ROI; CTOs buy on architecture and scalability; CMOs buy on ease-of-use. Analyze win/loss separately by role.
5. **Update Strategy:** Refine messaging, competitive positioning, pricing, product roadmap, and sales playbook based on insights.
6. **Track Over Time:** Run win/loss analysis quarterly. Have loss reasons changed? Is messaging resonating better? Is a product gap widening or closing?

**Example:**

A CRM platform analyzes 30 deals (15 wins, 15 losses) in Q1:

**Wins:**
- Primary reason: 9 of 15 wins cited "Easy to customize without code" vs. competitors requiring development teams
- Secondary reason: 7 cited "Existing Zapier integrations saved us 4 weeks" vs. competitors with limited integration ecosystem
- Tertiary: 5 praised support responsiveness

**Losses:**
- Primary reason: 8 of 15 losses chose Salesforce because "It's what our enterprise parent company mandates"
- Secondary: 5 lost to HubSpot because "All-in-one marketing + CRM was easier than integrating two platforms"
- Tertiary: 4 cited "Their total cost of ownership was 30% lower"
- Surprise: 3 losses mentioned "We didn't know you could do X" (product exists, messaging didn't surface it)

**Actions:**
- Messaging shift: Lead with "No-code customization" to differentiate from Salesforce's developer-heavy approach
- Content: Develop comparison guide "Zapier Integrations as Native Alternative to Custom Development" to counter HubSpot's all-in-one argument
- Sales enablement: Script to address "Enterprise mandate for Salesforce" (position as complement, not replacement)
- Product messaging: Surface integration and customization examples that losses didn't know about
- Pricing review: Analyze why HubSpot's TCO is 30% lower; is it marketing, our pricing model, or implementation time?

**Pitfalls:**
- **Asking leading questions:** "Why didn't you choose us because of our great support?" will bias the answer. Ask open-ended questions.
- **Analyzing loses but not wins:** You learn as much from why customers buy as from why they don't. Understand both.
- **Not following up:** Collecting data and not acting on it wastes time. Update positioning, messaging, and sales playbooks within 2 weeks of analysis.

---

## Net Promoter Score (NPS) & Feedback Loop Framework

**What it is:** A framework for using customer feedback (especially NPS, CSAT, and open-ended interviews) to inform product marketing strategy. PMM uses NPS to identify brand advocates (Promoters) and detractors (Detractors), gathers reasons for their sentiment, and closes the loop by addressing root causes (product, support, messaging, or pricing issues).

**When to use it:**
- Quarterly or after major product releases
- To identify which customer segments have highest/lowest NPS and why
- When NPS is declining—diagnose whether it's a product issue, support issue, or messaging/expectation-setting issue
- To recruit advocates for case studies, testimonials, and referral programs
- To identify at-risk accounts (Detractors) before they churn

**How to apply it:**
1. **Send NPS Survey:** Ask one question: "How likely are you to recommend us to a peer on a scale of 0–10?" with an optional follow-up: "Why?"
2. **Segment:** Categorize respondents into Promoters (9–10), Passives (7–8), and Detractors (0–6). Calculate NPS = % Promoters - % Detractors.
3. **Analyze By Segment:** Is NPS different for different customer segments, industries, company sizes, or use cases? If NPS for Enterprise is 60 but SMB is 20, these segments need different strategies.
4. **Identify Themes:** Read open-ended feedback. Are Detractors unhappy about product, pricing, support, or unmet expectations? Are Promoters citing specific features, customer success, or ease-of-use?
5. **Close the Loop:**
   - **Detractors:** Have support reach out, understand the issue, resolve if possible. If it's a product gap, escalate to product team.
   - **Passives:** Identify what would make them Promoters. Often it's one missing feature or one support issue.
   - **Promoters:** Ask for a case study, testimonial, or referral. Invite to customer advisory board or beta program.
6. **Track & Trend:** Monitor NPS monthly or quarterly. Is it improving? Which initiatives (product, support, marketing) correlate with NPS improvements?

**Example:**

SaaS accounting tool measures Q1 NPS:

- **Overall NPS:** 45 (reasonable but not great)
- **By segment:**
  - Mid-market (100–500 employees): NPS 60 (Promoters)
  - SMB (10–99 employees): NPS 15 (Detractors)
  - Enterprise (500+): NPS 50 (Passives)
- **SMB Detractor Feedback:** "Too complex, too expensive, support is slow, doesn't work well for freelancers"
- **Mid-market Promoter Feedback:** "Seamless Quickbooks integration, fast support, perfect for our size"
- **Enterprise Passive Feedback:** "Does what we need but integrations are limited, pricing is high"

**Actions:**
- **SMB strategy:** Launch "Lite" tier (simplified, lower price), partner with freelancer community, add chat support
- **Enterprise strategy:** Develop integration roadmap, consult on custom implementations
- **Support:** Address SMB support speed by hiring, routing, or chatbot automation
- **Measurement:** Recheck NPS in Q2 to see if SMB segment improves

**Pitfalls:**
- **Obsessing over the number:** A 45 NPS is useful context, but the insights matter more than the score. Focus on themes and root causes.
- **No follow-up:** If Detractors report that support is slow, and you don't fix it, NPS won't improve.
- **Assuming all detractors will churn:** Some Detractors are highly engaged but critical. Listen, improve, and they may become Promoters.
