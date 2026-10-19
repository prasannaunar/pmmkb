---
title: "Outcome-Driven Innovation (ODI)"
slug: "outcome-driven-innovation-odi"
type: Methodology
order: 55
use_when: "You need to know which customer outcomes are important but poorly satisfied, and which segments share them, before choosing targets or positioning."
produces: "A ranked list of underserved and overserved outcomes, with outcome-based segments to target and position against."
description: "Tony Ulwick's method for scoring which customer outcomes are underserved or overserved, then segmenting buyers by their unmet needs."
definition: "Outcome-Driven Innovation (ODI) is Tony Ulwick's method for rating customers' desired outcomes on importance and satisfaction to find which are underserved, and which segments share them."
---

# Outcome-Driven Innovation (ODI)

**What it is:** A quantitative research method, developed by Tony Ulwick and brought to a wide audience by his 2002 *Harvard Business Review* article "Turn Customer Input into Innovation", that measures which parts of a customer's job are badly served. It starts from the job the customer is trying to get done, breaks that job into steps, and writes the measures customers use to judge success at each step as **desired outcome statements**. A survey then asks a large sample of customers to rate every outcome on how important it is and how satisfied they are with current solutions. A simple formula turns those two ratings into an **opportunity score**, and a cluster analysis groups customers by which outcomes are underserved for them. Outcome-Driven Innovation is a registered trademark of Ulwick's consultancy, Strategyn, which sells it as a service; this entry teaches the method as Ulwick has published it.

ODI sits beside several entries in this knowledge base and answers a different question from each:
- **JTBD Switch Interview Method** finds, qualitatively, why people switched; ODI measures which outcomes are unmet and for whom.
- **Jobs-to-be-Done Positioning Framework** uses Ulwick's job statement to position a product; ODI supplies the measured evidence.
- **Kano Model** classifies *features* by their effect on satisfaction; ODI rates *outcomes*, which outlast features.
- **MaxDiff Analysis** ranks relative importance only; ODI adds satisfaction, so it shows the gap.
- **Dan Olsen's Importance vs Satisfaction Framework** (*The Lean Product Playbook*, 2015) is a lightweight variant of the scoring for product teams. ODI's outcome-based segmentation, and its use in targeting and positioning, make it a PMM method rather than a backlog tool.

**When to use it:**
- **Choosing which segment to target** in STP, when firmographic segments all look similar and you need to know which buyers have the most unmet needs.
- **Positioning keeps leading with features competitors match**, and you need evidence of which outcomes customers rate as important and poorly satisfied.
- **Entering a crowded market**, where finding an underserved segment is the only credible way in.
- **Planning a low-cost or simplified offer**, and you need proof that a segment is overserved and would accept less for a lower price.
- **Product and PMM disagree about priorities**, and a quantified customer read would settle it faster than more debate.

**How to run it:**
1. **Define the job executor and the core job.** Name who is trying to get the job done and write the job as a verb plus an object, free of any solution: "agree and sign a commercial contract", not "use contract software".
2. **Build a job map.** Break the job into its steps, using Ulwick's universal sequence as a checklist: define, locate, prepare, confirm, execute, monitor, modify and conclude. Interview 15 to 30 executors to fill it in.
3. **Write desired outcome statements.** Each has four parts: a **direction** (minimise or increase), a **metric** (time, likelihood, number), an **object** (what is being controlled) and a **clarifier** (the context). Example: "Minimise the time it takes to find the approved version of a clause during a negotiation." Strategyn reports that a market typically yields 50 to 150 statements. Remove any statement that names a feature or a solution.
4. **Survey a large sample.** Ask each respondent to rate every outcome for importance and for current satisfaction on a five-point scale. Strategyn cites samples of 180 to 3,000 respondents; plan for at least 100 per segment you expect to find, or the segmentation step will not hold.
5. **Calculate opportunity scores.** Convert each rating to a 0 to 10 score (the share of respondents giving the top two points, divided by ten). Then apply Ulwick's formula: **opportunity = importance + max(importance minus satisfaction, 0)**. The floor at zero stops a well-satisfied outcome from scoring below its importance. Scores run from 0 to 20.
6. **Read the scores.** Published sources do not fix one set of cut-offs. Practitioner summaries of Ulwick's work commonly treat scores above 10 as worth pursuing, above 12 as strong and above 15 as extreme. An outcome is overserved where satisfaction is higher than importance.
7. **Segment by unmet outcomes.** Cluster respondents on their opportunity scores, not demographics, to find groups with distinct sets of underserved outcomes. Profile each segment by size, firmographics and current solution so sales can find it.
8. **Turn findings into decisions.** PMM uses the result three ways: lead positioning and messaging with the target segment's top underserved outcomes; choose which outcome-based segment to target; and flag overserved segments for a simpler, cheaper offer, the opening a low-cost or disruptive entrant would use.

**Cadence & ownership:** At scale, product or strategy usually owns the innovation and roadmap decisions ODI informs, while PMM or a customer insights team commonly runs the study, owns the segmentation output, and owns the positioning that follows. A founding or solo PMM may run it end to end, often with a survey vendor for fieldwork and a freelance analyst for the clustering. A full study takes 8 to 12 weeks. Run one major study every one to three years per market, and refresh it after a major market shift: a new category entrant, a pricing model change, or a move into a new segment.

**Maturity stages:**
- **Lightweight:** Olsen-style importance and satisfaction scores for 20 to 30 outcomes. Useful for prioritising; too small to segment.
- **Full study:** a complete job map, 50 or more outcome statements, a sample large enough to cluster, and named outcome-based segments.
- **Embedded:** segments carried into CRM and ICP scoring, and the study refreshed on a set cycle.

**Example:** Clausewise, a fictional B2B SaaS contract management company selling to in-house legal teams, had positioning built around "AI-powered contract review", the same claim as five competitors. Its win rate had fallen from 27% to 21% in a year (all figures are illustrative). The PMM ran an ODI study. Twenty interviews produced a job map of eight steps and 84 outcome statements, and a survey went to 460 in-house lawyers and legal operations leads. Across the full sample, the highest score was 13.1, for "minimise the time it takes to find the approved version of a clause during a negotiation" (importance 8.6, satisfaction 4.1). Clustering found three segments. A high-volume sales contracts segment (38% of respondents) had 14 outcomes above 12, most about speed and version control. A complex negotiation segment (27%) cared most about risk visibility. A light-touch segment (35%) was overserved on most outcomes, with satisfaction above importance on 51 of 84. Clausewise targeted the high-volume segment, rebuilt its homepage and demo around "close sales contracts without hunting for the right clause", and launched a cheaper starter tier for the light-touch segment. Over the next two quarters, win rate in the target segment rose to 31%, and the starter tier added 140 new customers in six months.

**Pitfalls:**
- **Writing solutions as outcomes.** "Have an AI clause library" is a feature, not an outcome, and rating it tells you only whether people like that feature. Recovery: check every statement has a direction, a metric, an object and a clarifier, and rewrite any that a different product could not also satisfy.
- **Too small a sample for segmentation.** A survey of 80 respondents can rank outcomes but cannot support a stable cluster analysis, so the segments it shows are noise. Recovery: size the sample for the number of segments you expect, at least 100 each, before fieldwork starts.
- **Reading only the average scores.** Averages blend underserved and overserved customers, so a segment with a strong unmet need can disappear into a middling score. Recovery: always segment by opportunity scores before choosing targets or messages, and report scores per segment.
- **Treating the output as a feature list.** Handing product a ranked list and stopping there wastes the segmentation and positioning value. Recovery: tie every high-scoring outcome to a target segment, a message and a proof point before the readout.

**Sources:** Tony Ulwick; Strategyn; Dan Olsen
- Anthony W. (Tony) Ulwick, ["Turn Customer Input into Innovation"](https://hbr.org/2002/01/turn-customer-input-into-innovation), *Harvard Business Review* (2002), introducing outcome statements and the opportunity formula.
- Tony Ulwick, [*What Customers Want: Using Outcome-Driven Innovation to Create Breakthrough Products and Services*](https://strategyn.com/what-customers-want/), McGraw-Hill (2005), the full book-length method.
- Tony Ulwick, [*Jobs to Be Done: Theory to Practice*](https://anthonyulwick.com/2016/10/25/jobs-to-be-done-from-theory-to-practice/), Idea Bite Press (2016), with a [free online edition](https://jobs-to-be-done-book.com/), covering the job map and segmentation.
- Strategyn, ["The Innovation Process: A Step-by-Step Guide"](https://strategyn.com/outcome-driven-innovation-process/) (2024), the consultancy's description of the process, with typical outcome counts and sample sizes.
- Dan Olsen, [*The Lean Product Playbook*](https://www.wiley.com/en-us/The+Lean+Product+Playbook%3A+How+to+Innovate+with+Minimum+Viable+Products+and+Rapid+Customer+Feedback-p-9781118960875), Wiley (2015), which presents the Importance versus Satisfaction Framework.

**See also:** JTBD Switch Interview Method (the qualitative research that finds the job; ODI measures its outcomes); Jobs-to-be-Done Positioning Framework (Category 2; turns the core job and its underserved outcomes into a position); Segmentation–Targeting–Positioning (STP) Framework (outcome-based segments feed the targeting choice); MaxDiff Analysis (Best-Worst Scaling) (Category 8; ranks relative importance without a satisfaction gap); Kano Model (Category 6; classifies features, rather than outcomes, by their effect on satisfaction).
