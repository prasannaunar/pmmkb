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
