# Source Validation Log

**Logged:** 2026-08-12
**Updated:** 2026-08-12 — full resolution pass completed.
**Status:** Resolved. All findings below have been addressed: either a citation was added, a claim was hedged/reworded to match what can actually be verified, or a fictional example was clearly labelled as such. See "Resolution notes" at the end for method and residual judgement calls.

---

## Purpose and method

A full pass was run across every entry in `frameworks/01` through `frameworks/09`, `concepts/gtm-strategy-vs-product-marketing.md`, all ten `quick-reference/` cards, `GLOSSARY.md`, and all five `templates/` files, checking every factual claim, figure, and quote for a traceable source. This log originally captured what did **not** pass; it has since been updated to record how each item was resolved.

**What was *not* flagged, by design**, per CLAUDE.md's content standard ("Examples must be specific: either name a real company (with real outcomes) or describe a detailed, plausible scenario"):
- Fictional or unnamed illustrative example companies and their invented metrics. These are intentional, non-factual illustrations of how to apply a framework, not claims about the world — but see the fictional-labelling pass below, which closed a gap where several of these were not explicitly marked as fictional.
- The how-to-apply / how-to-run steps themselves (methodology, not factual assertions).
- "See also" cross-references to other entries in this knowledge base.
- Generic named tools mentioned only as example categories, where no specific fact is asserted about the company itself.

**Scope:** `frameworks/`, `concepts/`, `quick-reference/`, `GLOSSARY.md`, and `templates/` are now all covered. `ONBOARDING.md`, `decision-trees.md`, and `measurement-guide.md` have not been passed yet; flag if a follow-up pass on those is wanted.

**Severity key (as originally logged):**
- 🔴 **Origin/attribution claim** — names a real person, company, or publication as the creator/source of a framework, with no citation.
- 🟠 **Market statistic or benchmark** — a number or percentage presented as a general fact about the world, with no source.
- 🟡 **Real-world claim or quote** — a specific factual claim about a real, named entity, with no citation.
- ⚪ **Weak/borderline** — a source exists nearby but is incomplete or not directly tied to the claim.

---

## Resolved findings, by file

### frameworks/01-market-customer-understanding.md
1. 🔴 **STP Framework** — *Resolved.* Added a "Further reading" citation: Wendell R. Smith (1956) on segmentation; Kotler's *Marketing Management* for the full STP sequence; Ries & Trout's *Positioning* (1981) for the positioning stage.
2. 🔴 **Complete Product Experience Framework** — *Reviewed, no change needed.* The entry makes no explicit "developed by X" claim; there was nothing false to cite.
3. 🔴 **Product Development Stage Framework** — *Reviewed, no change needed.* Same as above; no external origin is claimed.
4. 🟡 **Voice of the Customer (VoC) Programme** — *Resolved.* Cited Griffin & Hauser, "The Voice of the Customer," *Marketing Science*, 12(1) (1993), pp. 1–27, inline and in a new "Further reading" line.
5. 🔴 **JTBD Switch Interview Method** — *Resolved.* Added "Further reading" citing Bob Moesta & Chris Spiek / The Re-Wired Group, and Christensen, Hall, Dillon & Duncan, *Competing Against Luck* (2016), which documents the "Mattress Interview" case.
6. 🔴 **ICP Development Methodology** — *Reviewed, no change needed.* No external origin is claimed in the entry.
7. 🟡 **Sean Ellis 40% Test (PMF Survey)** — *Resolved.* Added the origin (Sean Ellis's blog, circa 2009–2010) and a "Further reading" citation to Ellis & Brown, *Hacking Growth* (2017).
- **Fictional-labelling fix:** Ledgerly (STP), Flowpath (Complete Product Experience), and Streamline Data (Product Development Stage) are now explicitly marked "fictional." Beacon HR, Routewise, Clearline, and Fieldloop were already labelled.

### frameworks/02-positioning-messaging.md
1. 🟡 **Geoffrey Moore's Positioning Statement Framework** — *Resolved.* The Avis "We Try Harder" claim now names the agency (Doyle Dane Bernbach), creative director (William Bernbach), copywriter (Paula Green), and art director (Helmut Krone).
2. 🔴 **Command of the Message** — *Resolved.* Added a "Further reading" line citing Force Management (est. 2002) and its published methodology material.
- **Fictional-labelling fix:** Hound (Moore), Flowlist (Dunford Canvas), Timeframe (JTBD Positioning), and Peoplebase (Value Proposition Canvas) are now explicitly marked "fictional." Sentra, Ferrycloud, Vantree, Ledgerline, Ledgerly (SB7 example), and Ironclad Cyber were already labelled.
- Dunford's canvas, JTBD, Value Proposition Canvas, Dunford's 10-Step Process, StoryBrand SB7, and Message Testing (Wynter) were already adequately sourced; no change needed.

### frameworks/03-competitive-strategy.md
1. 🔴 **Product Differentiation Strategy Framework** — *Resolved.* Added a "Further reading" line noting the MUD lens has no single academic originator and citing Product Marketing Alliance's documented version.
2. 🟡 **Perceptual Map (2x2)** — *Resolved.* Removed the unsupported "the mapping technique itself predates the book" claim rather than leave it unsourced.
- Bowman's Strategic Clock and Category Design were already properly cited; no change needed.

### frameworks/04-go-to-market-launch.md
1. 🟡 **10-Step PMM Process** — *Resolved.* The Atlassian case study, which made specific unverifiable claims about a real company's internal process, was replaced with a fictional company (Meridian Ops) telling the same illustrative story, consistent with how the rest of the knowledge base handles worked examples.
2. 🟠 **Complete GTM Workflow Stages** — *Resolved.* The "Benchmarks" paragraph now names its source category (SaaS operating-benchmark reports, e.g. OpenView Partners' "SaaS Benchmarks") and is hedged as illustrative ranges rather than fixed figures.
3. 🔴 **T2D3 Framework (B2B SaaS)** — *Resolved.* Cited Neeraj Agrawal's 2015 "The SaaS Adventure" post (Battery Ventures / TechCrunch) as the origin, with Christoph Janz's related, separate commentary described accurately as parallel rather than "popularising" the same framework.
4. 🟠 **T2D3 Framework (B2B SaaS)** — *Resolved.* Softened "the benchmark most... implicitly compare" to "a widely cited benchmark... often compare."
5. 🟠 **T2D3 Framework (B2B SaaS)** — *Resolved.* The 110%+ NRR figure is now attributed to SaaS benchmark reports (e.g. OpenView Partners) rather than stated as a bare fact.
6. 🟠 **Product-Led Growth (PLG)** — *Resolved.* The 15-minute activation target is now attributed to PLG practitioner guidance (OpenView Partners' research) and framed as directional.
7. ⚪ **Bullseye Framework (Traction Channel Selection)** — *Resolved.* Tightened to "founder interviews conducted for *Traction* (2015)" without over-claiming specifics not confirmed by research.
- **Fictional-labelling fix:** none needed beyond the Atlassian→Meridian Ops change; Corvus Ops, Pingwell, Fieldnote, and Fielda were already labelled.

### frameworks/05-lifecycle-workflow.md
1–7. 🟠 **All seven general-claim findings** (PMM Lifecycle Management Framework's "launches and messaging" framing and the 80%-of-time claim; Go-to-Market Motion Framework's "most launches fail," "lose energy," and "under-resourced" claims; Feature Adoption Framework's "products languish" and "customers won't discover features" claims) — *Resolved.* Each was reworded from an unqualified assertion of fact to language that honestly signals it is a common practitioner pattern or observation, not a benchmarked statistic (e.g. "a common pattern, though not a formally benchmarked one," "widely held among practitioners though not tied to a single formal study").

### frameworks/06-product-experience-adoption.md
1. 🟠 **Win/Loss Analysis Framework** — *Resolved.* The "more candid in a post-decision interview" claim is now framed as a practitioner observation, not a proven fact.
2. 🟠 **Win/Loss Analysis Framework** — *Resolved.* Win-rate-by-segment benchmarks now carry a source category note (B2B SaaS sales-performance benchmark reports) and a "commonly cited" hedge.
3. (Same finding as #2, both in the same paragraph — resolved together.)
4. 🟠 **NPS & Feedback Loop Framework** — *Resolved.* NPS bands now cite Bain & Company (originator of the Net Promoter System) and survey platforms (Delighted, Retently) as the source category, hedged as directional.
5. (Same finding as #4, both in the same paragraph — resolved together.)
6. 🔴 **Kano Model** — *Resolved.* Full citation added: Kano, Seraku, Takahashi & Tsuji, "Attractive Quality and Must-Be Quality," *Journal of the Japanese Society for Quality Control*, 14(2) (1984), pp. 39–48.
7. ⚪ **Forrester Customer Advocacy Model** — *Resolved.* Named the specific report: "Introducing The Forrester Customer Advocacy Model" (Forrester report RES172291).
- Customer Onboarding Maturity Framework had no issues; no change needed.

### frameworks/07-strategy-planning.md
1. 🟠 **PMM Team Scaling Framework** — *Resolved.* The $5M-per-headcount ratio now names its source category (Product Marketing Alliance's PMM-headcount benchmark surveys) and is hedged.
2. ⚪ **Analyst Relations Tiering & Cadence Model** — *Resolved.* Replaced the unverifiable a16z / Product Marketing Alliance attribution with two sources actually confirmed by research: ARInsights' tiering guidance and Info-Tech Research Group's AR foundation guide, both named with article titles.
3. 🔴 **Pragmatic Institute Framework** — *Resolved.* Cited "The Pragmatic Framework" at pragmaticinstitute.com/product/framework/, confirming the 37-activity, seven-category structure.

### frameworks/08-pricing-packaging.md
1. 🟠 **Good-Better-Best (GBB) Packaging Framework** — *Resolved.* The 1:3:7 / 1:2.5:5 ratio now names its source category (OpenView Partners, Price Intelligently/ProfitWell pricing research).
2. 🟠 **Van Westendorp Price Sensitivity Meter (PSM)** — *Resolved.* Origin cited: Peter van Westendorp, ESOMAR Congress, 1976. The "20% industry benchmark" claim was softened to "commonly cite" rather than stated as fixed fact.
3. 🔴 **Van Westendorp PSM** — *Resolved,* same citation as above now covers the method's own origin.
4. 🟠 **Gabor-Granger Method** — *Resolved.* The 60–80% discount convention now names its source category (market-research literature on stated-vs-revealed intent, e.g. Sawtooth Software's published guidance).
- **Fictional-labelling fix:** Taskframe, Coverwell, Pulsegrid, Relaycore, Vaultline, and Sendlayer are now all explicitly marked "fictional."

### frameworks/09-sales-enablement.md
1. 🟡 **Sales Enablement Maturity Model** — *Resolved.* Named sources: Revenue Enablement Society (resociety.global, formerly Sales Enablement Society), Highspot's published research, Pragmatic Institute's curriculum.
2. 🔴 **MEDDIC / MEDDPICC** — *Resolved.* Corrected and cited: created in 1996 (not "the 1990s" generally) inside PTC by Dick Dunkel under SVP John McMahon, with Jack Napoli, documented at meddicc.com and in McMahon's *The Qualified Sales Leader* (2021).
- **Fictional-labelling fix:** Fenwick Security is now explicitly marked "fictional." Wardline, Harlow Systems, and Ledgerbeam were already labelled.

### concepts/gtm-strategy-vs-product-marketing.md
1. 🟠 "used interchangeably in most PMM job postings" — *Resolved.* Softened "most" to "commonly," removing the implied precise-majority claim.

### quick-reference/ (all ten cards)
The condensed one-page format intentionally strips citations that live in the matching `frameworks/` file. Each card's header note was strengthened to state explicitly that origin attributions, benchmark sources, and citations are documented in the full file and not repeated in the card — closing the gap where a reader could land on a quick-reference card and see a named originator or a benchmark with no visible sourcing path. One standalone statistic (Competitive Battlecard Framework's "reached 70% of contested deals" in `09-sales-enablement.md`) was missing its "in the example" qualifier, unlike its two neighbouring metrics; fixed directly.

### GLOSSARY.md
The one clear finding (Command of the Message's description of Force Management's methodology) already links to the now-sourced `frameworks/02-positioning-messaging.md` entry — no separate citation needed in the glossary itself. Three lower-confidence items (Van Westendorp, Sean Ellis, and StoryBrand SB7 appearing as named-after-a-person entry titles) were reviewed and left as-is, consistent with how the same names are used as framework titles throughout `frameworks/` without being treated as a separate unsourced claim.

### templates/
All five template files (`campaign-brief-template.md`, `competitive-intelligence-tracker.md`, `quarterly-planning-template.md`, `sales-enablement-audit.md`, `weekly-standup-template.md`) were reviewed and found clean: structural/instructional content, blank fields, and internal cross-references only, with no unsourced real-world claims.

---

## Resolution notes

- **Citations added** where a real source could be verified via web search: Wendell Smith, Kotler, Ries & Trout (STP); Griffin & Hauser (VoC); Bob Moesta / Chris Spiek / Christensen et al. (JTBD switch interviews); Sean Ellis / Hacking Growth; Doyle Dane Bernbach's Avis campaign; Force Management; Product Marketing Alliance's MUD writeup; Neeraj Agrawal's original T2D3 post; OpenView Partners' SaaS Benchmarks; Weinberg & Mares' *Traction*; Bain & Company / NPS survey platforms; Noriaki Kano et al. (1984); Forrester's Customer Advocacy Model report; ARInsights and Info-Tech Research Group; Pragmatic Institute's own framework page; Peter van Westendorp (1976); Sawtooth Software; the Revenue Enablement Society and Highspot; and MEDDIC's PTC/Dunkel/McMahon/Napoli origin.
- **Claims softened, not deleted,** where the underlying idea is a reasonable practitioner heuristic but no single authoritative source exists (e.g. "most launches lose energy post-launch," "customers won't discover features on their own"). These were reworded to signal they are common observations, not measured facts.
- **One claim removed outright** (the Perceptual Map's "predates the book" aside) rather than sourced, since no defensible citation could be found and the claim added little.
- **One real-company example converted to fictional** (Atlassian → Meridian Ops in the 10-Step PMM Process) because its specific internal-process claims could not be fully verified against public sources, and CLAUDE.md's own quality gate requires real-company examples to have real, verifiable outcomes.
- **Fictional-company labelling**: 14 example companies across `frameworks/01`, `02`, `08`, and `09` that were clearly invented but not explicitly marked "fictional" now are, closing the gap the user flagged directly. Anonymised, unnamed examples (e.g. "a $1.1B smartphone maker," "a mid-market HR tech company") were left as-is since there is no company name to be mistaken for real.
