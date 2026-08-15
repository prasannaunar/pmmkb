# STP Framework: Case Study

> **Framework source:** [Segmentation-Targeting-Positioning (STP) Framework](../frameworks/01-market-customer-understanding.md) | **Category:** 1: Market & Customer Understanding

---

## Claravue Repositions for Data Engineering Teams

**Framework:** STP Framework | **Category:** 1: Market & Customer Understanding
**Company:** Claravue, a fictional Series B data observability platform with 140 employees and approximately $12M ARR

### Before state

Claravue sold its data observability product to "data teams" broadly, a positioning choice inherited from its earliest pitch deck and never revisited. Sales pursued any company with a data stack: analytics teams at mid-market retailers, data science groups at fintechs, infrastructure engineers at enterprise software firms, and platform teams at healthcare companies. The result was predictable but poorly diagnosed. Win rate across the pipeline sat at 17%, below the mid-market SaaS benchmark range of 30 to 50% commonly cited in sales-performance reports. Sales cycles averaged 62 days, with wide variance: some deals closed in three weeks, others dragged past 90 days with no resolution. CAC had climbed to $14,200, and the marketing team could not explain why paid campaigns that generated volume were not generating revenue.

The founding PMM suspected the problem was not execution but targeting. Different "data teams" had fundamentally different buying triggers, budgets, and evaluation criteria, yet Claravue's messaging tried to speak to all of them with one value proposition: "full-stack data observability."

### Framework applied

**Step 1: Segmentation.** PMM pulled 14 months of CRM data covering 320 closed deals (84 won, 236 lost or stalled) and combined it with 24 customer interviews. Four candidate segments emerged based on firmographic and behavioural data: data engineering teams at Series B to D SaaS companies (50 to 500 employees), enterprise analytics teams at companies above 2,000 employees, data science teams at fintechs, and platform teams at healthcare organisations. After consolidation, PMM reduced these to three distinct segments, merging the healthcare and fintech groups into a single "regulated-industry data teams" segment because their buying behaviour was nearly identical: long procurement cycles, mandatory security reviews, and compliance-driven evaluation criteria.

**Step 2: Targeting.** PMM scored the three segments on size, growth rate, competitive intensity, and fit. Data engineering teams at growth-stage SaaS companies scored highest: the segment had a TAM of approximately 4,200 companies in the UK and US, was growing at roughly 18% year over year as companies matured their data stacks, had relatively low competitive intensity (the two leading incumbents focused on enterprise), and showed the strongest fit with Claravue's current product, which excelled at pipeline-level observability but lacked the audit and compliance features the regulated-industry segment required. The enterprise analytics segment was large but fiercely competitive, with three well-funded incumbents. PMM recommended a single primary segment: data engineering at growth-stage SaaS.

**Step 3: Positioning.** PMM drafted a new positioning statement: "For data engineering teams at fast-scaling SaaS companies who lose hours debugging broken pipelines, Claravue is the observability platform that surfaces pipeline failures before downstream teams notice. Unlike enterprise monitoring tools built for ops teams, Claravue is designed for the engineers who actually build and maintain the data stack." The statement deliberately narrowed from "full-stack data observability" to a specific problem (broken pipelines) and a specific buyer (the engineer, not the analytics consumer).

**Step 4: Validate and refine.** PMM tested the statement in 14 interviews: 6 recent wins, 4 recent losses, and 4 prospects who had not yet engaged. Ten of the 14 described the "debugging broken pipelines" pain unprompted, and several used the exact phrase "before anyone downstream notices" without being led to it. One interviewee corrected the team's language: "We don't call it observability, we call it pipeline monitoring," a finding that led to the statement's category frame being revised from "observability platform" to "pipeline monitoring platform" for this segment.

**Step 5: Align operations.** PMM updated ICP scoring in the CRM to weight data-engineering job titles and SaaS-company firmographics. Sales was briefed on two new discovery questions tied to the chosen segment: "How many data pipelines does your team maintain?" and "What happens today when a pipeline breaks overnight?" The product roadmap was reviewed jointly with the VP Product, deprioritising a compliance-audit feature requested by the regulated-industry segment in favour of pipeline alerting improvements.

**Step 6: Monitor and revisit.** PMM set up segment-level dashboards tracking win rate, sales cycle length, CAC, and NPS for the primary segment specifically, reviewed monthly.

### Results

Within two quarters of the repositioning:

- Win rate in the primary segment rose from 17% (the blended pre-STP figure) to 31%.
- Average sales cycle shortened from 62 days to 38 days, because discovery calls no longer spent 20 minutes establishing whether the product was relevant to the prospect's specific data-team type.
- CAC dropped from $14,200 to $8,600, driven partly by more efficient paid targeting (ads now spoke to a specific buyer rather than "data teams" generically) and partly by shorter cycles reducing the cost of each closed deal.
- NPS in the primary segment climbed from 29 to 48, as the customers now arriving were a better fit for the product's actual strengths.

### What they would do differently

The team would have run step 4's validation interviews before finalising the positioning statement's language, not after a first draft. The "pipeline monitoring" category reframe surfaced late enough that early sales collateral had already been printed with "observability platform" and needed reprinting. Starting validation at the same time as the first positioning draft, rather than sequentially, would have caught the language mismatch two weeks earlier and saved a round of collateral rework.

Second, PMM would have explicitly communicated the deprioritisation of the regulated-industry segment to the three sales reps who had been building pipeline there. Two reps continued pursuing healthcare prospects for several weeks after the repositioning, unaware the segment had been formally deprioritised, creating awkward conversations when marketing support for those deals quietly disappeared. Step 5's operational alignment should have included a direct conversation with every rep affected, not just a team-wide briefing.
