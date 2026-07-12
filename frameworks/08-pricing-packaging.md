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

**See also:** Value Proposition Canvas (map what each persona values before assigning it to a tier); Segmentation–Targeting–Positioning (STP) Framework (define the personas that GBB tiers are built around); Product Differentiation Strategy Framework (ensure tier fences reflect genuine differentiation, not arbitrary limits).
