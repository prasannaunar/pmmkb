---
title: "Value Proposition Canvas"
slug: "value-proposition-canvas"
type: Framework
order: 40
use_when: "You need to connect what your product offers to a specific customer's jobs, pains and gains."
produces: "A map of customer needs and the value your product delivers."
---

# Value Proposition Canvas

**What it is:** A framework co-created by Alexander Osterwalder that maps a product's value proposition against a specific customer segment's needs, pains, and gains. The canvas consists of two halves: the customer profile (what jobs, pains, and gains matter to them) and the value map (what features, pain relievers, and gain creators your product offers). Positioning emerges from the fit between what you offer and what the segment needs. Where Jobs-to-be-Done focuses on identifying the single job a customer is trying to accomplish, the Value Proposition Canvas goes a layer further: it maps every pain and gain attached to that job and checks, item by item, whether the product actually addresses each one, which makes it as useful an audit tool as it is a positioning tool.

**When to use it:**
- During product development, to ensure your roadmap aligns with customer jobs and pain points
- When defining positioning for different customer segments (B2B vs. B2C, enterprise vs. SMB, etc.)
- To identify messaging angles you haven't explored: gaps between what you offer and what customers care about
- When repositioning or launching to a new segment
- As a shared tool for cross-functional alignment on customer value (product, marketing, sales, support)
- Before a roadmap prioritisation exercise, to check whether planned features actually map to a documented pain or gain rather than an internal assumption
- When win/loss data shows deals lost to "good enough" incumbents, a signal the value map may be over-indexed on features customers don't rate as pains or gains

**Ownership:** At a scaled company, a Head of Product Marketing owns the completed canvas, typically co-building the customer profile half with a Product Manager or UX researcher and retaining sole ownership of the value map and fit analysis. A solo or founding PMM builds both halves alone, drawing on their own customer conversations rather than a separate research function. Where the fit analysis feeds roadmap prioritisation, Product Management should review it jointly with PMM before it changes roadmap priority, since each function carries evidence the other lacks.

**How to apply it:**
1. **Profile Your Customer:**
   - **Jobs:** What does this segment try to accomplish? (functional, emotional, social jobs). Source these from interviews and support transcripts rather than internal assumptions; teams that write the customer profile from their own mental model of the customer consistently overestimate how much customers care about the product category itself, as opposed to the job behind it.
   - **Pains:** What obstacles, frustrations, or risks prevent them from achieving their jobs? Separate pains by severity: a mild annoyance and a business-critical risk both count as "pains" but deserve very different weight.
   - **Gains:** What outcomes or benefits would make the job easier or more valuable? Include both required gains (table stakes the customer expects) and unexpected gains (delighters that exceed expectation); the two need different messaging treatment.

2. **Map Your Value Proposition:**
   - **Features/Products:** What do you build or offer? List these plainly, without adjectives, so the mapping in the next step stays honest.
   - **Pain Relievers:** Which of your features directly address customer pains? For each, write the mechanism, not just the claim: "automated invoice reminders" is a feature; "removes the two hours per week finance spends chasing late payments" is a pain reliever.
   - **Gain Creators:** Which of your features create outcomes customers want? Apply the same mechanism discipline as pain relievers.

3. **Analyse the Fit:**
   - Does each major customer pain have a corresponding pain reliever? If not, you have a gap.
   - Does each customer gain have a corresponding gain creator? If not, you're under-delivering.
   - Are there features you offer that don't address any customer pain or gain? These are noise; deprioritise them, or at minimum keep them out of primary messaging even if they stay in the product.
   - Score the fit for each pain and gain (strong, partial, none) so gaps are visible at a glance, and revisit the lowest-scoring items first in the next roadmap cycle.

4. **Refine Messaging:** Prioritise messaging around pain relievers and gain creators that matter most to the segment. Avoid talking about features that don't map to customer needs, even if they were expensive to build; internal pride in a feature is not a reason to lead with it externally.

5. **Iterate:** As you learn more about customer needs, update the canvas. Share updates with product and sales to keep teams aligned. Treat the canvas as a living document tied to a cadence (quarterly is typical), not a one-off workshop output that gets filed away after the initial positioning exercise.

6. **Validate the fit with customers directly:** Show the completed canvas, or the resulting messaging drawn from it, to five to eight target customers and ask them to point out anything that feels exaggerated or anything important that's missing. This catches internal blind spots before they reach a website or sales deck.

**Example:**

Peoplebase, a fictional SaaS HR tool for mid-market startups, had grown to 200 customers largely through inbound demand but was starting to lose competitive deals to larger incumbents; win/loss interviews showed prospects describing Peoplebase as "a nice-to-have, not essential," despite strong product reviews. The team ran a Value Proposition Canvas to find out why.

For a SaaS HR tool targeting mid-market startups:

**Customer Profile:**
- **Jobs:** Hire fast without HR overhead; stay compliant with employment laws; retain good people
- **Pains:** Manual onboarding is slow and inconsistent; compliance mistakes are expensive; employees feel deprioritised; high turnover costs money
- **Gains:** Quick, standardised onboarding; peace of mind on compliance; employees feel valued; lower turnover; HR can focus on strategy, not paperwork

**Value Proposition:**
- **Features:** Automated onboarding, document templates, compliance checklists, employee handbook builder, feedback loops
- **Pain Relievers:** Onboarding automation reduces time-to-productivity by 50%; compliance checklists eliminate costly mistakes; feedback tools reduce turnover
- **Gain Creators:** Employees get a better first-week experience; HR spends less time on paperwork, more on culture; founders sleep better knowing they're compliant

**Fit Analysis:**
- All major pains addressed: strong fit on 4 of 4 documented pains
- All major gains created: strong fit on 5 of 5 documented gains
- No wasted features: all five core features mapped to at least one pain or gain, though the feedback-loop feature scored only a partial fit against retention, since it surfaced problems but did not yet help managers act on them

**Messaging Priority:** Lead with automation and compliance (biggest pains), then retention (biggest gain). Don't emphasise analytics: it's nice-to-have, not core to this segment's job.

Peoplebase rewrote its homepage and top-of-funnel sales deck to lead with the compliance and onboarding-time pain relievers rather than a generic feature tour, and moved the analytics dashboard, previously the hero screenshot, to a secondary page. Within one quarter, homepage-to-trial conversion rose from 3.1% to 4.6%, and sales-qualified leads citing "compliance risk" as their top concern in discovery calls closed at a 38% rate versus 24% for leads who didn't mention it, confirming the pain reliever the team chose to lead with was in fact the one driving purchase decisions. The partial-fit gap on the feedback-loop feature fed directly into the next quarter's roadmap, which added manager action prompts to close it.

**Pitfalls:**
- **Assuming one canvas fits all segments.** A startup and an enterprise have different jobs, pains, and gains, so messaging written to satisfy both at once tends to default to generic language that undersells the fit for either. Recovery: build a distinct canvas per segment you actively sell to, and route messaging and sales collateral by segment rather than maintaining one shared version.
- **Putting features in the canvas instead of outcomes.** "Dashboard" is not a pain reliever; "See your hiring funnel at a glance" is. A canvas full of feature names looks complete but tells you nothing about fit, because it never tests whether the feature addresses a documented pain or gain. Recovery: for every entry in the value map, require a linked pain or gain; entries with no link get removed or investigated as a possible roadmap gap.
- **Ignoring misalignment.** If 50% of your features don't address customer pains or gains, that's a signal to cut features or refocus on different customers. Unmapped features still cost engineering time to maintain and clutter messaging with claims that don't move the buying decision. Recovery: review the fit analysis at each quarterly product review and treat a growing list of unmapped features as a prioritisation red flag.

**Sources:** Alexander Osterwalder; Yves Pigneur; Gregory Bernarda; Alan Smith
- Alexander Osterwalder, Yves Pigneur, Gregory Bernarda & Alan Smith, [*Value Proposition Design: How to Create Products and Services Customers Want*](https://www.strategyzer.com/library/value-proposition-design-book-summary), Strategyzer (2014)

**See also:** STP Framework (segment and target before building the canvas so you design the right value proposition for the right audience); Jobs-to-be-Done Positioning Framework (identify the core job first, then map it to the customer profile's functional, emotional, and social needs); April Dunford's 5-Component Positioning Canvas (alternative approach that focuses on attributes and competitive set).
