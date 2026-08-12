# Source Validation Log

**Logged:** 2026-08-12
**Status:** Open. Findings below are flagged, not yet resolved; process and clear each item, then move it to a "Resolved" section or close it out per CLAUDE.md's normal editing workflow (use the `add-kb-entry` skill if a fix touches Type, category, or cross-doc references).

---

## Purpose and method

A full pass was run across every entry in `frameworks/01` through `frameworks/09` and `concepts/gtm-strategy-vs-product-marketing.md`, checking every factual claim, figure, and quote for a traceable source. This log captures what did **not** pass: claims presented as established fact about the real world (a framework's origin, a named real company or person, a market-wide statistic or benchmark, a quote) with no citation, book/article reference, "Further reading" line, or otherwise traceable source attached.

**What was *not* flagged, by design**, per CLAUDE.md's content standard ("Examples must be specific: either name a real company (with real outcomes) or describe a detailed, plausible scenario"):
- Fictional or unnamed illustrative example companies and their invented metrics (e.g. "Ledgerly," "Sentra," "a $1.1B smartphone maker"). These are intentional, non-factual illustrations of how to apply a framework, not claims about the world.
- The how-to-apply / how-to-run steps themselves (these are methodology, not factual assertions).
- "See also" cross-references to other entries in this knowledge base.
- Generic named tools mentioned only as example categories (e.g. "Sawtooth, Qualtrics Conjoint," "Highspot, Seismic") where no specific fact is asserted about the company itself.

**Scope note:** This pass covered `frameworks/` and `concepts/` only, the entries that carry the knowledge base's substantive factual content. It did not cover `quick-reference/` (condensed restatements of the same entries), `templates/`, `GLOSSARY.md`, `ONBOARDING.md`, `decision-trees.md`, or `measurement-guide.md`. If those should be validated too, run a follow-up pass; flag if wanted.

**Severity key:**
- 🔴 **Origin/attribution claim** — names a real person, company, or publication as the creator/source of a framework, with no citation.
- 🟠 **Market statistic or benchmark** — a number or percentage presented as a general fact about the world (not inside a fictional example), with no source.
- 🟡 **Real-world claim or quote** — a specific factual claim about a real, named entity (event, product, quote) used as evidence, with no citation.
- ⚪ **Weak/borderline** — a source exists somewhere nearby but is incomplete, vague, or not directly tied to the specific claim.

---

## frameworks/01-market-customer-understanding.md

1. 🔴 **STP Framework** — no origin attribution or Further Reading anywhere in the entry. STP is commonly credited to Wendell Smith (1956) and popularised by Philip Kotler; neither is named.
2. 🔴 **Complete Product Experience Framework** — no origin attribution or Further Reading for the seven-touchpoint model.
3. 🔴 **Product Development Stage Framework** — no origin attribution or Further Reading; unclear whether this is drawn from an external source or original to this knowledge base.
4. 🟡 **Voice of the Customer (VoC) Programme** — "The practice has roots in total quality management (Griffin and Hauser formalised the term in 1993)." A specific academic/historical claim (Griffin & Hauser, *Marketing Science*, 1993) with no citation line.
5. 🔴 **JTBD Switch Interview Method** — "developed by Bob Moesta and Chris Spiek at The Re-Wired Group." Real people and a real company named as originators, but no book, article, or URL cited.
6. 🔴 **ICP Development Methodology** — no origin attribution or Further Reading.
7. 🟡 **Sean Ellis 40% Test (PMF Survey)** — "Sean Ellis, founder of GrowthHackers and Qualaroo, found across dozens of startups he advised that products crossing roughly 40% 'Very disappointed'..." A specific empirical claim attributed to a real, named person, with no citation (e.g. his original blog post or *Hacking Growth*).

## frameworks/02-positioning-messaging.md

1. 🟡 **Geoffrey Moore's Positioning Statement Framework** — "This 1962 tagline [Avis, 'we try harder'], developed decades before Moore's book, is often cited as an early proof that the format works." A real historical ad-campaign fact used as evidence, with no citation (e.g. the DDB agency campaign).
   - *Not flagged:* the framework's own origin (Moore, *Crossing the Chasm*, 1991/2014) is properly sourced via the "Further reading" line.
2. 🔴 **Command of the Message** — "developed by Force Management." A real, named company credited as originator of a commercially published methodology, with no citation (book, whitepaper, or URL).
- *Not flagged (properly sourced):* April Dunford's 5-Component Positioning Canvas, Jobs-to-be-Done Positioning Framework, Value Proposition Canvas, and Dunford's 10-Step Positioning Process all carry adequate "Further reading" or inline citations. Message Architecture (Messaging House) makes no origin claim, so nothing to source.

## frameworks/03-competitive-strategy.md

1. 🔴 **Product Differentiation Strategy Framework** — "Score each on three criteria (Meaningfulness, Uniqueness, Defensibility, the MUD framework)." Presented as a named, established external framework with no origin, author, or source anywhere in the entry.
2. 🟡 **Perceptual Map (2x2)** — "though the mapping technique itself predates the book [Ries & Trout, *Positioning*, 1981]." An unsupported historical claim, distinct from the (properly cited) Ries/Trout attribution next to it.
- *Not flagged (properly sourced):* Bowman's Strategic Clock (Bowman & Faulkner, 1996, cited) and Category Design (Ramadan, Peterson, Lochhead & Maney, *Play Bigger*, 2016, cited inline).

## frameworks/04-go-to-market-launch.md

1. 🟡 **10-Step PMM Process** — the Example section uses Atlassian as a real, named company with specific claims about its internal process and results ("Atlassian's approach to PMM at scale offers a well-documented, publicly visible illustration..."), with no source (article, talk, case study) cited.
2. 🟠 **Complete GTM Workflow Stages** — "Benchmarks" paragraph: "typical B2B SaaS conversion metrics are: outbound demo conversion of 15% to 20%... sales win rate of 20% to 30%... SQL volume for the Scale phase of 150 to 300 a month... CAC payback under 18 months is typical... under 12 months is strong." A cluster of industry-wide benchmark statistics with no source.
3. 🔴 **T2D3 Framework (B2B SaaS)** — "introduced by SaaS investor Neeraj Agrawal and popularised by venture capitalist Christoph Janz." Real people named as originators, with no citation (no book, article, or blog post named).
4. 🟠 **T2D3 Framework (B2B SaaS)** — "T2D3 is the benchmark most growth-stage SaaS investors implicitly compare a company's trajectory against." General claim about investor behaviour presented as fact, no source.
5. 🟠 **T2D3 Framework (B2B SaaS)** — "a strong T2D3 trajectory typically needs 110%+ NRR by Year 3." Specific benchmark stated as general market fact, not tied to the example, no source.
6. 🟠 **Product-Led Growth (PLG)** — "most PLG products aim for time-to-activation under 15 minutes." General industry benchmark, no source. (Note: the framework's own origin — Wes Bush, *Product-Led Growth*, 2019, plus OpenView Partners' research — is properly cited.)
7. ⚪ **Bullseye Framework (Traction Channel Selection)** — "the framework's central claim, backed by the book's founder interviews, is that most successful early-stage companies grew primarily through one dominant channel." Loosely traceable to the already-cited book (*Traction*, Weinberg & Mares, 2015) but no specific chapter/section named — incomplete rather than missing.
- *Not flagged:* 3-Step Product Marketing Strategy Framework, 7-Step Product Marketing Framework, GTM Motion Model, and Launch Tier Framework had no issues.

## frameworks/05-lifecycle-workflow.md

1. 🟠 **PMM Lifecycle Management Framework** — "The framework exists because PMM work is often described as 'launches and messaging,' which understates the role." Unattributed claim about how the role is commonly perceived.
2. 🟠 **PMM Lifecycle Management Framework** — "Many PMM teams spend 80% of their time on top-of-funnel content and neglect Expansion..." Specific statistic presented as general fact about PMM teams, no source.
3. 🟠 **Go-to-Market Motion Framework** — "because most launches fail not from a bad idea but from poor sequencing and unclear accountability." General claim about why launches fail, no source.
4. 🟠 **Go-to-Market Motion Framework** — "This phase is where most launches lose energy..." Unsupported general claim.
5. 🟠 **Go-to-Market Motion Framework** (Pitfalls) — "Sustaining momentum for 4 to 12 weeks post-launch is where the real commercial impact happens, but it's the phase teams most often under-resource..." Unsupported general claim about team behaviour.
6. 🟠 **Feature Adoption Framework** — "many products languish with powerful capabilities that most users never discover or adopt." General industry-wide claim, no source.
7. 🟠 **Feature Adoption Framework** (Pitfalls) — "Customers won't discover features on their own, no matter how good the feature is." Stated as universal fact, no source.
- Note: none of the three entries in this file carry any origin attribution or Further Reading at all.

## frameworks/06-product-experience-adoption.md

1. 🟠 **Win/Loss Analysis Framework** — "decision-makers are often more candid in a post-decision interview... than they ever were during the sales process itself." General behavioural claim, no source.
2. 🟠 **Win/Loss Analysis Framework** — "a 50% win rate (15 wins from 30 total deals) is strong for a mid-market CRM platform." Market benchmark asserted as fact.
3. 🟠 **Win/Loss Analysis Framework** — "Typical win rate by segment is: SMB 40 to 60%, mid-market 30 to 50%, and enterprise 15 to 35%..." Specific industry-wide statistic, no source.
4. 🟠 **Net Promoter Score (NPS) & Feedback Loop Framework** — "typical SaaS NPS benchmarks are: world-class (above 50), good (40–50), acceptable (30–40), at-risk (below 30)." Industry benchmark, no source. (Note: the framework's own origin, Reichheld's *The Ultimate Question 2.0*, 2011, is properly cited.)
5. 🟠 **Net Promoter Score (NPS) & Feedback Loop Framework** — "enterprise software typically averages NPS 25 to 35, mid-market SaaS 40 to 50, and SMB or self-service products 30 to 45..." Same paragraph, another unsourced segment statistic.
6. 🔴 **Kano Model** — "developed by Noriaki Kano in 1984." Direct origin claim (creator + year), no citation anywhere in the entry.
7. ⚪ **Forrester Customer Advocacy Model** — attributes the model to "Forrester Research['s] published... customer-advocacy maturity research," a real, named research firm, but names no specific report, author, or year — not enough detail to trace.
- *Not flagged:* Customer Onboarding Maturity Framework had no issues.

## frameworks/07-strategy-planning.md

1. 🟠 **PMM Team Scaling Framework** — "Team size roughly tracks revenue: at $40M ARR the team supports a $5M-per-headcount ratio, in line with benchmark data from similarly staged B2B SaaS companies." External benchmark claim, no source cited.
2. ⚪ **Analyst Relations Tiering & Cadence Model** — "documented by a16z, ARInsights, Info-Tech Research Group, and Product Marketing Alliance..." Names four real organisations as sources but no specific article, report title, or link for any of them — untraceable as written.
3. 🔴 **Pragmatic Institute Framework** — "Pragmatic Institute (formerly Pragmatic Marketing) codified a market-driven operating model... organised as a grid of roughly 37 discrete activities..." A real, named company and a specific structural claim ("~37 activities"), with no citation to Pragmatic Institute's own published materials or a year.
- *Not flagged:* Quarterly PMM Planning Framework and Competitive Intelligence & Positioning Update Framework had no issues (competitors and review sites are used only as generic, anonymised categories).

## frameworks/08-pricing-packaging.md

1. 🟠 **Good-Better-Best (GBB) Packaging Framework** — "A common starting ratio is roughly 1:3:7 or 1:2.5:5 (Good:Better:Best), though this varies by market." General market-practice claim, no source.
2. 🟠 **Van Westendorp Price Sensitivity Meter (PSM)** — "...well below the 20% industry benchmark for new insurance product launches." Real-world benchmark used as a comparison point against the fictional example's own number, no source.
3. 🔴 **Van Westendorp Price Sensitivity Meter (PSM)** — the method itself is a real, named methodology (inventor: Peter van Westendorp) with no origin attribution or citation anywhere in the entry.
4. 🟠 **Gabor-Granger Method** — "many practitioners discount 'definitely would buy' to 60-80% of its stated value based on historical calibration." General practitioner-behaviour claim, no source. (The method's namesakes, Gabor and Granger, are also never attributed with a source or year.)
- *Not flagged:* Value Metric / Willingness-to-Pay Framework, Conjoint Analysis, and Usage-Based (Consumption) Pricing Model had no issues.

## frameworks/09-sales-enablement.md

1. 🟡 **Sales Enablement Maturity Model** — "codified across the Sales Enablement Society (since renamed the Revenue Enablement Society), Highspot's own maturity research, and Pragmatic Institute's enablement curriculum." Names three real organisations plus a specific rebrand claim, with no citation, link, or "Further reading" to trace any of it.
2. 🔴 **MEDDIC / MEDDPICC** — "developed at PTC in the 1990s by Jack Napoli and Dick Dunkel." Specific, real-world origin claim (company, decade, two named individuals), no citation anywhere in the entry.
- *Not flagged:* Competitive Battlecard Framework and Buyer's Journey Content Map had no issues.

## concepts/gtm-strategy-vs-product-marketing.md

1. 🟠 "though the two get used interchangeably in most PMM job postings and internal decks." Unattributed claim about industry-wide usage patterns ("most... job postings"), no source.

---

## Summary

| File | Findings |
|---|---|
| 01-market-customer-understanding.md | 7 |
| 02-positioning-messaging.md | 2 |
| 03-competitive-strategy.md | 2 |
| 04-go-to-market-launch.md | 7 |
| 05-lifecycle-workflow.md | 7 |
| 06-product-experience-adoption.md | 7 |
| 07-strategy-planning.md | 3 |
| 08-pricing-packaging.md | 4 |
| 09-sales-enablement.md | 2 |
| concepts/gtm-strategy-vs-product-marketing.md | 1 |
| **Total** | **42** |

By severity: 🔴 origin/attribution claims: 11 · 🟠 market statistics/benchmarks: 22 · 🟡 real-world claims/quotes: 6 · ⚪ weak/borderline: 3

## Suggested next steps (not yet actioned)

1. **Origin/attribution claims (🔴)** are the highest-priority fix: each names a real person, company, or publication as a framework's creator. Track down the actual source (book, article, company publication, interview) and add a "Further reading" or inline citation, following the pattern already used for Moore, Dunford, Osterwalder, and Christensen/Ulwick in `02-positioning-messaging.md`.
2. **Market statistics/benchmarks (🟠)** need either a cited source (industry report, published benchmark study) or should be softened/removed if no defensible source can be found — do not leave a specific percentage standing as fact with nothing behind it.
3. **Real-world claims/quotes (🟡)**, especially the Atlassian case study in `04-go-to-market-launch.md`, need either a citation or should be rewritten to remove the specific real-company claim and use a fictional/anonymised example instead, consistent with how the rest of the knowledge base handles illustration.
4. Once a citation is added for an item, move it here or delete the line, and update this log's summary counts.
