# Category 8: Pricing & Packaging

## Good-Better-Best (GBB) Packaging Framework

**What it is:** A pricing structure that groups product features into three value-ascending tiers, commonly labelled Good, Better, and Best (or Starter, Growth, Enterprise). Each tier is built for a distinct buyer persona and fences features so that customers self-select the tier that matches their needs and budget. The middle tier is deliberately positioned as the default choice; it typically captures the majority of purchases because it balances value and price without requiring the buyer to negotiate.

**When to use it:**
- Launching a new product or service and need a pricing structure from scratch
- Your current single-price plan is losing deals at both ends (too expensive for small buyers, too basic for large ones)
- You have three or more distinct buyer personas with different needs and willingness to pay
- Sales is manually negotiating custom deals because there's no clear tier structure to anchor against
- You're preparing to introduce a new pricing tier (see also: BY-SITUATION.md, "Pricing a New Tier or Service")
- Expansion revenue (upsell, upgrade) is flat and you need a clearer upgrade path

**How to apply it:**
1. **Identify your buyer personas.** List the distinct customer types you sell to, typically 3–5. For each, note company size, budget, primary use case, and decision-making process (self-serve, single approver, procurement committee).
2. **Map features and needs to personas.** For each feature, ask: which persona needs this to get value? Which persona would pay more to get it? Build a feature-by-persona grid. Features needed by all personas become "core"; features needed by only the largest, most complex buyers become "premium fences."
3. **Draft three tiers.** Group features so each tier is a clear step up:
   - **Good (entry tier):** Core functionality only. Targets price-sensitive or small buyers. Should be genuinely usable, not crippled, or it damages trust and word-of-mouth.
   - **Better (middle tier):** Core plus the features that address the most common friction point for your primary target segment. This is your anchor tier; design it to be the "obvious right choice" for most buyers.
   - **Best (top tier):** Everything in Better, plus features for scale, security, compliance, or dedicated support that larger or more sophisticated buyers require.
4. **Set the price ladder.** A common starting ratio is roughly 1:3:7 or 1:2.5:5 (Good:Better:Best), though this varies by market. Price each tier against the value the persona receives, not against your cost to deliver it. Validate with the Value Metric / Willingness-to-Pay approach or a Van Westendorp Price Sensitivity Meter survey if you have the resource to run one.
5. **Choose your fences carefully.** A "fence" is the specific feature or limit that separates tiers (seat count, API calls, support SLA, advanced integrations, SSO). Good fences track directly with the value a buyer receives; poor fences feel arbitrary and generate support complaints ("why can't I just pay for that one feature?").
6. **Design the comparison table.** Buyers compare tiers side by side before they read anything else. Lead with outcomes ("automated reporting," "dedicated account manager"), not raw feature names. Highlight the middle tier visually ("Most Popular") to nudge default selection.
7. **Test with real prospects.** Before shipping, walk 8–10 target buyers across your personas through the three tiers and ask which they'd choose and why. Listen for confusion about what's included or objections to the fences; adjust before launch.
8. **Monitor tier distribution after launch.** Track what percentage of new customers choose each tier. If the majority default to Good, your Better tier isn't compelling enough or is priced too high relative to its value. If nobody chooses Best, your top-tier fences may not matter to your buyers, or you haven't built enough enterprise-only value into it.

**Example:**

Project management SaaS company Taskframe restructures pricing ahead of a Series B raise. Previously, they sold a single $29/user/month plan, which meant they were losing small teams (too expensive for 3-person startups) and losing enterprise deals (missing SSO, audit logs, and dedicated support that procurement required).

Taskframe builds three tiers:
- **Starter ($12/user/month):** Task management, up to 3 projects, community support. Targets teams of 2–10.
- **Growth ($29/user/month):** Unlimited projects, reporting dashboards, integrations (Slack, Google Drive), email support with 24-hour SLA. Targets teams of 10–100; positioned as "Most Popular."
- **Enterprise ($59/user/month, custom above 500 seats):** Everything in Growth, plus SSO/SAML, audit logs, a dedicated customer success manager, and a 99.9% uptime SLA. Targets teams of 100+ with procurement and security requirements.

Within two quarters of launch: 35% of new customers choose Starter, 52% choose Growth, and 13% choose Enterprise, an even split against Taskframe's target distribution of 30/50/20. Average revenue per user increases 22% because mid-market customers who previously negotiated a flat $29 rate now often add Growth-tier reporting add-ons, and 60% of Starter customers upgrade to Growth within their first year as their teams grow past 10 users. Enterprise deals, previously stuck for months in ad hoc negotiation, close 40% faster because procurement can see SSO and audit logs listed as included features rather than a custom add-on to negotiate.

**Pitfalls:**
- **Cost-plus pricing instead of value-based pricing.** Setting tier prices based on what it costs you to deliver each feature set, rather than what the persona in that tier is willing to pay, leaves money on the table in Best and prices out buyers in Good. Recovery: run a Value Metric / Willingness-to-Pay exercise (see also: Value Proposition Canvas) for each persona before finalising prices, and revisit pricing every 2–3 quarters as your customer mix shifts.
- **Crippling the entry tier to force upgrades.** Making Good so limited that it's unusable (e.g., a 1-project cap) frustrates genuine small-buyer use cases and generates public complaints that damage word-of-mouth, particularly in self-serve or product-led-growth motions. Recovery: test Good with real small-team users before launch; it should solve their core job completely, just without the scale or advanced features larger buyers need.
- **Too many fences, unclear differentiation.** Splitting 20 features across three tiers with no clear logic makes buyers stall on the comparison table instead of choosing. Recovery: limit each tier's differentiators to 3–5 headline items that map directly to a persona's biggest pain point; move minor feature differences into a detailed comparison page rather than the primary pricing table.

**See also:** Value Proposition Canvas (map what each persona values before assigning it to a tier); Segmentation–Targeting–Positioning (STP) Framework (define the personas that GBB tiers are built around); Product Differentiation Strategy Framework (ensure tier fences reflect genuine differentiation, not arbitrary limits); Van Westendorp Price Sensitivity Meter (validate the price ladder with real customer data before finalising tiers).

---

## Van Westendorp Price Sensitivity Meter (PSM)

**What it is:** A survey method that finds the range of prices customers will accept for a product, without asking them to name a single "right" price. Respondents answer four questions about the same product concept: at what price would it be so cheap you'd doubt its quality, so cheap it's a bargain, starting to get expensive, and so expensive you wouldn't consider it. Plotting the four response curves against each other produces a price corridor (the range most customers accept) and an indifference price point (where "expensive" and "cheap" perceptions cross). Unlike frameworks that group features into tiers, PSM answers a narrower, earlier question: what should this product cost at all, before you decide how to package it.

**When to use it:**
- Setting the price for a genuinely new product or service with no direct competitor to benchmark against
- Validating a price point before committing to it in a launch, rather than guessing or copying a competitor's list price
- You suspect your current price is off but don't know which direction, or by how much, to move it
- Preparing to set the price ladder for a Good-Better-Best structure and need a defensible anchor price for the middle tier
- Facing internal disagreement (sales wants it cheaper, finance wants it dearer) and need customer data to settle the debate
- Testing price sensitivity across different customer segments before a regional or vertical-specific launch

**How to apply it:**
1. **Define the exact product concept.** Write a one-paragraph description of precisely what respondents are pricing: the specific feature set, service level, and use case. If the concept is vague, respondents will price different things in their heads and the corridor will be meaningless.
2. **Recruit a representative sample.** Aim for at least 100 respondents who match your actual target buyer profile (same company size, role, and budget authority you'd sell to in production). Fewer than 50 responses produces a corridor too noisy to act on.
3. **Ask the four Van Westendorp questions in this order,** using the exact product concept from step 1:
   - "At what price would you consider this product to be so expensive that you would not consider buying it?" (Too Expensive)
   - "At what price would you consider this product starting to get expensive, so that it's not out of the question, but you'd have to give some thought to buying it?" (Expensive/Getting Expensive)
   - "At what price would you consider this product to be a bargain; a great buy for the money?" (Cheap/Bargain)
   - "At what price would you consider this product to be priced so low that you'd feel the quality couldn't be very good?" (Too Cheap)
4. **Plot the four cumulative response curves** on a single chart with price on the x-axis and cumulative percentage of respondents on the y-axis. Plot "Too Cheap" and "Expensive" as cumulative percentage answering at or below each price; plot "Too Expensive" and "Cheap" as cumulative percentage answering at or above each price.
5. **Identify the four intersection points:**
   - **Point of Marginal Cheapness (PMC):** where "Too Cheap" crosses "Expensive"; below this, too many people doubt quality
   - **Point of Marginal Expensiveness (PME):** where "Too Expensive" crosses "Cheap"; above this, too many people reject the price outright
   - **Optimal Price Point (OPP):** where "Too Cheap" crosses "Too Expensive"; the price at which the fewest people object on either side
   - **Indifference Price Point (IPP):** where "Cheap" crosses "Expensive"; the price the median respondent perceives as neither cheap nor expensive
6. **Set your acceptable price range as PMC to PME**, and use the OPP or IPP as your working anchor, adjusted for your margin targets and strategic goals (e.g., aggressive market entry might justify pricing near the PMC).
7. **Segment the analysis by buyer type** if your sample spans multiple personas (SMB vs. enterprise, for example). Different segments often produce meaningfully different corridors; a single blended corridor can mask a segment that would pay significantly more.
8. **Re-run PSM whenever the product concept changes materially** (a major new feature, a shift in positioning, entry into a new market) since the corridor is tied to the specific concept respondents evaluated, not the product in the abstract.

**Example:**

Insurtech startup Coverwell is preparing to launch a usage-based car insurance product and has no direct comparable to benchmark against; existing competitors sell traditional annual policies, not a pay-per-mile model. Internally, the pricing debate is stuck: the CFO wants to price at $0.09/mile to hit margin targets, while sales argues customers will balk above $0.06/mile.

Coverwell runs a Van Westendorp survey with 220 respondents who match its target profile (drivers under 8,000 miles/year, aged 25–55, currently paying for traditional annual cover). The four curves produce a Point of Marginal Cheapness of $0.04/mile, a Point of Marginal Expensiveness of $0.11/mile, and an Optimal Price Point of $0.075/mile, meaning the fewest respondents object at that price. The Indifference Price Point comes in at $0.08/mile.

Coverwell sets its launch price at $0.079/mile, just inside the OPP and comfortably within the $0.04–$0.11 corridor; this beats the CFO's original target while addressing sales' concern that $0.09/mile would sit close to the rejection threshold. Segmenting the data further, Coverwell finds respondents in its lowest-mileage bracket (under 4,000 miles/year) have a corridor $0.02/mile higher across all four points, so it flags this group as a candidate for a future higher-mileage-inclusive tier. Within the first two quarters post-launch, price-related quote abandonment sits at 8%, well below the 20% industry benchmark for new insurance product launches, and Coverwell attributes the difference directly to pricing inside a validated corridor rather than an internally debated guess.

**Pitfalls:**
- **Testing an underspecified or overly abstract concept.** If respondents aren't shown a concrete, specific product description, they price wildly different mental products and the resulting corridor is unusable. Recovery: pilot the four questions with 5–10 respondents first and check their open-ended comments to confirm they understood the exact concept being priced; refine the description before running the full sample.
- **Treating the Optimal Price Point as the final price without margin or strategy input.** PSM tells you what customers will tolerate; it says nothing about your cost base, competitor moves, or margin targets. Recovery: use the corridor (PMC to PME) as the boundary of acceptable prices, then set the actual price using cost, margin, and strategic goals (e.g., land-and-expand pricing near the PMC, premium positioning near the PME) as a second step, not as part of the survey itself.
- **Ignoring segment differences by blending all respondents into one corridor.** A single corridor across SMB and enterprise buyers, or across regions with different purchasing power, averages away real differences and can leave money on the table with high-willingness-to-pay segments or price out budget-constrained ones. Recovery: run the analysis separately by segment whenever your sample size allows (minimum ~50 respondents per segment), and consider segment-specific pricing or tiers if the corridors diverge meaningfully.

**See also:** Good-Better-Best (GBB) Packaging Framework (use PSM to validate the anchor price before building the tier ladder); Value Proposition Canvas (understand what drives willingness to pay before running the survey); Segmentation–Targeting–Positioning (STP) Framework (define the buyer segments to sample and analyse separately).

---

## Value Metric / Willingness-to-Pay Framework

**What it is:** A four-step method for setting a defensible price by tying it to the specific unit of value a customer receives, rather than to a flat seat fee or a guess. The "value metric" is that unit (API calls, transactions processed, storage used, seats, revenue managed); the right one scales naturally with the value a customer gets, so price grows with usage instead of being negotiated tier by tier. The framework defines personas, surveys their willingness to pay (WTP), plots the results in a value/WTP matrix, and aligns pricing tiers to what each persona is actually willing to pay for the value they receive. Where the Van Westendorp Price Sensitivity Meter answers "what should this cost overall," this framework answers a different question: "what should we charge for, and how should price scale as usage grows."

**When to use it:**
- Your current pricing charges for something (seats, a flat monthly fee) that doesn't track with the value customers actually get, so heavy users and light users pay the same
- You're choosing a value metric for a new product and have more than one plausible candidate (per-seat, per-usage, per-outcome)
- Expansion revenue is flat because there's no natural mechanism for price to grow as a customer's usage or value grows
- You're rebuilding pricing entirely (a re-platform, a new product line, a shift from perpetual licence to subscription) and need to choose a value metric from scratch, not just adjust an existing one
- Sales keeps hearing "we'd pay more if it scaled with our usage" or, conversely, "we're paying for capacity we don't use"
- You need to feed a defensible price ladder into a Good-Better-Best packaging exercise and don't yet have persona-level willingness-to-pay data

**How to apply it:**
1. **Define your personas.** List the distinct buyer types you sell to (typically 3–5), same as you would for GBB. For each, note company size, primary use case, and, critically, what outcome they're buying the product to achieve; this outcome is where a good value metric usually hides.
2. **List candidate value metrics.** Brainstorm every unit that could plausibly anchor price: per-seat, per-transaction, per-GB stored, per-active-user, per-outcome (e.g., per successful delivery, per resolved ticket). A good candidate satisfies three tests: it scales with the value the customer receives, it's easy for the customer to predict and understand, and it's cheap for you to measure and bill accurately.
3. **Survey willingness to pay per persona.** For each persona, and for each strong candidate value metric, ask a structured WTP question set (a Van Westendorp-style four-question set works well here, run separately per persona and per candidate metric). Aim for a minimum of 30–50 respondents per persona; fewer produces a WTP estimate too noisy to price against.
4. **Plot the value/WTP matrix.** Chart each persona's willingness to pay against the actual value they receive (measured in the outcome that matters to them; revenue influenced, hours saved, tickets resolved). Personas that cluster high on both axes are your best-fit customers and should anchor your primary pricing tier; personas high on value but low on WTP may need a different packaging approach (lower touch, self-serve) rather than a price cut.
5. **Select the value metric that best fits the matrix.** Choose the candidate metric from step 2 that correlates most closely with where personas land on the value axis. If per-seat pricing shows almost no correlation with the value/WTP clusters but per-transaction volume does, per-transaction is the stronger metric even if per-seat is easier to bill today.
6. **Align tiers to persona clusters.** Map each persona cluster from the matrix to a tier or plan, setting the value metric's price (e.g., $0.02 per transaction, tiered volume discounts above 100,000/month) so that each persona's typical usage lands inside a price they've already told you they'll pay. Feed this directly into a Good-Better-Best structure if you're using one.
7. **Model revenue impact before switching.** Before migrating an existing customer base to a new value metric, model what each existing customer would pay under the new metric versus their current bill. Flag anyone whose bill would jump materially so you can grandfather, phase in, or proactively explain the change; a value metric change that spikes existing customers' bills overnight is a churn risk, not a pricing win.
8. **Re-survey WTP annually or after a major product change.** Willingness to pay drifts as the product, competitive landscape, and customer expectations shift; treat the matrix as a living input, not a one-time exercise.

**Example:**

DevOps monitoring platform Pulsegrid charges a flat $500/month per team, regardless of how many servers or how much log volume a team monitors. A 5-person team monitoring 20 servers pays the same as a 5-person team monitoring 2,000 servers, and the company's biggest customers are its least profitable: heavy users consume far more infrastructure cost without paying more, while several small teams have churned after outgrowing a plan that didn't flex with their needs.

Pulsegrid runs the framework across four personas: solo developers, small startups (under 20 servers), mid-market platform teams (20–500 servers), and enterprise infrastructure teams (500+ servers, often with compliance requirements). It tests three candidate value metrics through WTP surveys with 40 respondents per persona: per-seat, per-server-monitored, and per-GB-of-logs-ingested.

The value/WTP matrix shows per-server-monitored correlates most strongly with perceived value across all four personas; teams consistently describe value in terms of "how much of our infrastructure is covered," not seat count or log volume. Enterprise teams show high WTP ($15–25 per server/month) and high value (compliance risk avoided, incident response time cut); solo developers show low WTP (under $2 per server/month) but also monitor far fewer servers, so a low per-server rate still produces a viable, if small, plan for them.

Pulsegrid rebuilds pricing around a per-server-monitored metric: $3/server/month for solo/startup tiers (minimum $29/month), $8/server/month for platform teams with volume discounts above 200 servers, and custom enterprise pricing starting at $15/server/month with compliance add-ons. Before launch, Pulsegrid models the switch against its existing 340 customers and finds 45 accounts (mostly heavy users on the old flat plan) would see bills more than double; it grandfathers these accounts onto their existing rate for 12 months with a migration incentive. Within three quarters of the new metric going live, average revenue per customer increases 34%, driven almost entirely by mid-market and enterprise accounts whose bills now track their actual server count, while solo/startup churn drops 18% because their bills fell relative to the old flat $500 minimum.

**Pitfalls:**
- **Choosing a value metric that's easy to bill but doesn't track value.** Per-seat pricing is simple to implement but frequently has weak correlation with the actual value customers receive, particularly for infrastructure, data, or automation products where value scales with usage, not headcount. Recovery: weight the value/WTP correlation from step 5 above ease of billing; a small one-time engineering cost to bill a better metric accurately is usually worth it against years of mispriced revenue.
- **Switching value metrics without modelling the impact on existing customers.** A new metric that happens to double a subset of existing customers' bills overnight, with no warning, reads as a bait-and-switch and drives churn and public complaints, even if the new metric is genuinely fairer. Recovery: always run the step 7 revenue-impact model before any migration, grandfather or phase in affected accounts, and communicate the change and its rationale directly rather than let customers discover it on their invoice.
- **Surveying WTP once and treating it as permanent.** Willingness to pay shifts as competitors reprice, as your product adds value, or as customers' own budgets change; a WTP matrix built two years ago may no longer reflect what personas will actually pay today. Recovery: re-run the WTP survey (step 8) at least annually, or immediately after a competitor materially changes their pricing or you ship a feature that changes your core value proposition.

**See also:** Good-Better-Best (GBB) Packaging Framework (use the value metric and persona clusters from this framework as the input for tier design); Van Westendorp Price Sensitivity Meter (use its four-question structure to run the WTP survey in step 3); Value Proposition Canvas (identify the outcome each persona buys for, which anchors the value axis of the matrix); Segmentation–Targeting–Positioning (STP) Framework (define the personas surveyed in step 1).
