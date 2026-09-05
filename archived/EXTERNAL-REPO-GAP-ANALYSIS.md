# External Repo Gap Analysis: Candidates Sourced from GitHub

**Logged:** 2026-08-13
**Status:** ✅ **Fully built as of 2026-08-13.** All 6 approved candidates below were written up the same day they were approved, following the CLAUDE.md structure and the full Quality Gates checklist (source citation, Ownership or Cadence & ownership field, fictional-example labelling, cross-doc consistency). Candidate 7 (RICE Prioritization) remains rejected; see its entry below.
**See also:** [FRAMEWORK-BACKLOG.md](FRAMEWORK-BACKLOG.md) and [ENRICHMENT-PLAN.md](ENRICHMENT-PLAN.md), the two prior candidate queues (both fully built). This document follows the same ranked-candidate format. It also assumes the "PMM vs GTM Scope" north-star and the Ownership-field requirement added to CLAUDE.md on 2026-08-13; every candidate below has already been screened against both.

---

## Why this research happened

The repo owner asked for a scan of the broader GitHub ecosystem covering PMM and PMM-adjacent functions (GTM, growth, sales), to see whether external practitioner sources reveal frameworks this KB is missing. Two things shaped how this was run:

1. **This KB documents PMM frameworks, not "AI skills."** Most of the source repos are Claude/LLM skill libraries (prompt wrappers for an AI agent to execute a task). The research explicitly did not evaluate those repos as skill libraries or recommend importing their format; it mined them for the underlying named, citable, human-run methodology (if any) sitting behind each skill file, exactly as this KB would document any other framework.
2. **The existing "no duplicate concepts" and citation rules did the heavy filtering.** Of ~211 individual skill files sampled across the largest repo alone, the overwhelming majority were either generic prompt wrappers with no distinct methodology, proprietary in-repo acronym systems invented by the repo's own author with no external originator, or straightforward re-implementations of frameworks already in this KB (Dunford's canvas, Van Westendorp, Good-Better-Best, Launch Tiers, ICP, JTBD, Category Design, StoryBrand, VoC). None of those are listed as candidates below; they're the reason the candidate list is short relative to the volume of source material.

**Sources scanned (14 repos):**

| Repo | Stars | Link | Yield |
|---|---|---|---|
| ronakganatra/awesome-marketing | 405 | https://github.com/ronakganatra/awesome-marketing | 0 (curated links list; everything named either duplicates the KB or fails citation) |
| growthack88/growth-marketing-os | 79 | https://github.com/growthack88/growth-marketing-os | 0 (single-source, author-invented, non-PMM) |
| mkhsu2002/EC-Designer | 56 | https://github.com/mkhsu2002/EC-Designer | 0 (code tool, no named framework, performance-marketing creative, out of scope) |
| matteotitta/claude-code-marketing-quickstart | 46 | https://github.com/matteotitta/claude-code-marketing-quickstart | 0 (uncredited subset of genesys-skills below) |
| matteotitta/genesys-skills | 30 | https://github.com/matteotitta/genesys-skills | **2 candidates** (of 211 files sampled) |
| yannickYamo/skills | 20 | https://github.com/yannickYamo/skills | **1 candidate** (rest is a well-cited product management, not PMM, operating model) |
| BiaAhmed/product-marketing-portfolio | 8 | https://github.com/BiaAhmed/product-marketing-portfolio | 0 (portfolio website template, no strategy content) |
| stefanoskarakasis/Product-Marketing-Skills | 5 | https://github.com/stefanoskarakasis/Product-Marketing-Skills | **2 candidates** (+1 weak/optional) |
| adam-lagerhausen/b2b-marketing-skills | 5 | https://github.com/adam-lagerhausen/b2b-marketing-skills | 0 (duplicates or uncitable in-repo tagline attribution) |
| memex-lab/product-launch-video-skill | 5 | https://github.com/memex-lab/product-launch-video-skill | 0 (creative/production tooling, not a PMM-run strategic framework) |
| "evidence-based-copywriting" / "house-style" | — | not located | Could not verify these repos exist under the names given; GitHub search was rate-limited during this pass. Re-supply exact owner/URL if they should be checked. |
| swan-gtm/gtm-skills | — | https://github.com/swan-gtm/gtm-skills | **1 candidate** (borderline; mostly sales/outbound) |
| KarlRaf/gtm-starter-kit | — | https://github.com/KarlRaf/gtm-starter-kit | 0 (proprietary ICP scoring, duplicates existing entry; rest is sales-ops) |
| emilyjans/marketing-skills | — | https://github.com/emilyjans/marketing-skills | 0 (aggregator/directory; local content is uncredited generic marketing-ops/PR) |
| aaron-he-zhu/aaron-marketing-skills | — | https://github.com/aaron-he-zhu/aaron-marketing-skills | 0 (120 skills, all either duplicate existing entries or are the author's own uncredited acronym system) |

---

## Ranked candidates

### 1. Vertical/Segment Messaging via Buying Trigger — ✅ **BUILT (2026-08-13)**
- **Built as:** Category 2 (Positioning & Messaging), `frameworks/02-positioning-messaging.md`, using the Framework template. ~1,580 words; cross-linked to Message Architecture (Messaging House), STP, Command of the Message, and the Buyer's Journey Content Map.
- **Source:** matteotitta/genesys-skills (30★), `skills/primitives/product-marketing/strategy/vertical-messaging/SKILL.md`
- **Originator/lineage:** Diane Wiredu, founder of Lion Words (lionwords.com), a practicing B2B/SaaS messaging strategist. Credited by name in the source file; confirmed as a real, independently documented practitioner via web search.
- **What it does:** Adapts an already-locked core messaging library across market segments/verticals without rebuilding it from scratch. For each segment, identifies the specific buying-trigger event, routes the buyer to one leading message pillar from the existing core message, and writes a short entry-point message. Produces a segment-to-pillar routing map.
- **Proposed home:** Category 2 (Positioning & Messaging). **Type: Framework.**
- **Why it's a genuine gap:** Distinct from Message Architecture (Messaging House), which builds the core message, and from STP, which selects the segment. This is specifically the segment-adaptation layer, keyed to a buying-trigger event rather than a static persona or vertical label. Nothing in the existing 54 covers this.
- **Inclusion-test:** Pass. A PMM plausibly owns this exercise and produces the routing map directly.
- **Confidence:** High.

### 2. Andy Raskin's Strategic Narrative Framework — ✅ **BUILT (2026-08-13)**
- **Built as:** Category 2 (Positioning & Messaging), `frameworks/02-positioning-messaging.md`, using the Framework template. ~1,770 words; cross-linked to StoryBrand SB7 Framework, Category Design, Message Architecture (Messaging House), and Command of the Message. The Ownership section carries the scoping caveat flagged below: PMM owns the launch/category narrative by default, the investor-facing version is typically CEO/founder-led.
- **Source:** matteotitta/genesys-skills (30★), `skills/research/expert-pov/SKILL.md` (cited in its "OBI frameworks" reference table)
- **Originator/lineage:** Andy Raskin, strategic narrative consultant. Codified in his 2016 essay "The Greatest Sales Deck I've Ever Seen" (2M+ views); widely cited and taught since (Lenny's Newsletter and multiple public case studies).
- **What it does:** A narrative-construction method for a company/product story: name a big change in the world, cast winners and losers, reveal a "promised land," identify obstacles, offer "magic gifts" (capabilities), then prove it with evidence. Leads with an external market shift rather than the product itself.
- **Proposed home:** Category 2 (Positioning & Messaging), with a cross-reference into Category 4 (Go-to-Market & Launch). **Type: Framework.**
- **Why it's a genuine gap:** Distinct from StoryBrand SB7 (customer-as-hero structure) and Command of the Message (live sales-conversation framework). Raskin's is a market-change/company-narrative arc, most associated with pitch decks, fundraising narratives, and category-defining launch narratives.
- **Inclusion-test:** Pass, with a caveat worth the curator's attention: this framework is traditionally associated more with CEO/founder fundraising narrative than day-to-day PMM output. It clears the bar because a PMM plausibly owns the launch/category narrative deck at most companies, but confirm that framing explicitly in the Ownership section if built, rather than implying PMM always leads it.
- **Confidence:** High, with a scoping caveat.

### 3. Playing to Win (Strategic Choice Cascade) — ✅ **BUILT (2026-08-13)**
- **Built as:** Category 7 (Strategy & Planning), `frameworks/07-strategy-planning.md`, as the new first entry in that file, using the Framework template. ~1,660 words; cross-linked to Quarterly PMM Planning Framework, Pragmatic Institute Framework, STP, and PMM Team Scaling Framework.
- **Source:** stefanoskarakasis/Product-Marketing-Skills (5★), cited in README.md credits (not implemented as a working skill in the repo, cited as inspiration/further-reading only)
- **Originator/lineage:** A.G. Lafley (former P&G CEO) and Roger L. Martin, *Playing to Win: How Strategy Really Works* (Harvard Business Review Press, 2013). Well-documented, widely taught strategy framework.
- **What it does:** A five-question cascade (winning aspiration, where to play, how to win, capabilities needed, management systems) that forces explicit, mutually reinforcing strategic choices, rather than a list of disconnected goals.
- **Proposed home:** Category 7 (Strategy & Planning). **Type: Framework.**
- **Why it's a genuine gap:** Not a synonym of the Quarterly PMM Planning Framework or the Pragmatic Institute Framework, both of which are operational/tactical. This sits a level above them, at strategic-choice architecture.
- **Inclusion-test:** Pass. A PMM plausibly leads or co-leads a "where to play / how to win" exercise for a product line or segment, even where the exec team signs off on the final answer.
- **Confidence:** High.

### 4. Pre-mortem (Gary Klein) — ✅ **BUILT (2026-08-13)**
- **Built as:** Category 4 (Go-to-Market & Launch), `frameworks/04-go-to-market-launch.md`, as the new last entry, using the Framework template. ~1,525 words; cross-linked to the Launch Tier Framework, Win/Loss Analysis Framework, 10-Step PMM Process, and Complete GTM Workflow Stages. Built into Category 4 (the curator's-call alternative, generic Category 7 placement, was not used, since the launch-specific framing read more naturally alongside the Launch Tier Framework).
- **Source:** stefanoskarakasis/Product-Marketing-Skills (5★), `pmm-execution/skills/pre-mortem/SKILL.md`, also credited by name in README.md
- **Originator/lineage:** Gary Klein, cognitive psychologist. Published as "Performing a Project Premortem," *Harvard Business Review*, September 2007. Well-established, frequently cited risk-identification technique.
- **What it does:** A structured exercise run before a major launch or initiative: generate concrete failure narratives by imagining the initiative has already failed, classify the risks by severity, assign owners and mitigations, and produce a go/no-go recommendation.
- **Proposed home:** Category 4 (Go-to-Market & Launch), alongside the Launch Tier Framework, or Category 7 (Strategy & Planning) if framed generically rather than launch-specific; curator's call on which reads more naturally. **Type: Framework.**
- **Why it's a genuine gap:** Distinct from Win/Loss Analysis (post-hoc). Nothing in the existing 54 covers pre-launch failure-mode analysis.
- **Inclusion-test:** Pass. A PMM plausibly facilitates a pre-mortem ahead of a Tier 1 launch, even if engineering/product leadership supplies the failure scenarios.
- **Confidence:** High.

### 5. Account-Based Everything (ABX) / TEAM Framework — ✅ **BUILT (2026-08-13)**
- **Built as:** Category 4 (Go-to-Market & Launch), `frameworks/04-go-to-market-launch.md`, placed immediately after Product-Led Growth per the build-sequencing note below, using the Methodology template. ~1,635 words; cross-linked to the GTM Motion Model, Product-Led Growth, ICP Development Methodology, Buyer's Journey Content Map, Competitive Battlecard Framework, and MEDDIC/MEDDPICC.
- **Source:** yannickYamo/skills (20★), `skills/abx-strategy/SKILL.md`
- **Originator/lineage — corrected by the 2026-08-13 addendum research:** the citable source is **Sangram Vajre and Eric Spett, *ABM is B2B.: Why B2B Marketing and Sales is Broken and How to Fix It*** (Ideapress Publishing, 2019), not the *MOVE* book. This is where the TEAM framework (Target, Engage, Activate, Measure) is actually documented; Vajre is also co-founder of Terminus and author of the earlier *Account-Based Marketing For Dummies* (2016). Build from the book's TEAM structure directly. **Drop the source skill file's uncredited sub-tools** (PURE scoring, "Bet Board," the 5-motion DETECT→EXPAND model) — confirmed via this research pass to be the repo author's own inventions layered on top of Vajre's real method, with no external citation of their own.
- **What it does:** A GTM approach for complex B2B sales (small addressable account universe, high deal size, multi-stakeholder buying committees): select and tier target accounts, engage the full buying committee in a coordinated way, activate sales on accounts showing intent, and measure success against account-level business outcomes rather than lead-volume vanity metrics.
- **Verdict (2026-08-13 addendum):** **Include, reframed as a Methodology, not a Model.** The open overlap question against the GTM Motion Model is resolved: GTM Motion Model classifies "field sales" as the motion for high-ACV, high-complexity, committee-driven deals, but it doesn't operationalise *how* to run that motion once selected, in the same way the existing **Product-Led Growth (PLG)** entry operationalises the self-serve/PLG motion the Model identifies. TEAM/ABX fills the exact parallel gap on the enterprise side: it is the "how to run it" methodology for the motion GTM Motion Model already names, not a competing taxonomy. This also resolves the Category 4 vs Category 9 question: build it in **Category 4, immediately following Product-Led Growth**, as its structural mirror; cross-reference Category 9 (Buyer's Journey Content Map, Competitive Battlecard Framework) since account-level content and battlecards feed the Engage step.
- **Proposed home:** Category 4 (Go-to-Market & Launch). **Type: Methodology** (revised from Model).
- **Inclusion-test:** Pass. PMM commonly owns account tiering criteria, messaging, and content strategy for the Target and Engage steps; execution of outbound sequencing and rep-level activation sits with sales/SDR, consistent with how PLG already splits ownership with product management.
- **Confidence:** High (upgraded from Medium — the citation is now solid and the overlap question is resolved).

### 6. MOVE GTM Diagnostic (4-Question GTM Framework) — ✅ **BUILT (2026-08-13)**
- **Built as:** Category 7 (Strategy & Planning), `frameworks/07-strategy-planning.md`, as the new last entry, using the Model template. ~1,690 words; cross-linked to the GTM Motion Model, Account-Based Everything (ABX) / TEAM Framework (the entry's text explicitly flags the two distinct Vajre-authored source books, per the sequencing note below), 10-Step PMM Process, Quarterly PMM Planning Framework, Customer Onboarding Maturity Framework, and Feature Adoption Framework.
- **Source:** swan-gtm/gtm-skills, `skills/sangram-vajre/move-gtm-diagnostic/SKILL.md`
- **Originator/lineage — confirmed by the 2026-08-13 addendum research:** **Sangram Vajre and Bryan Brown, *MOVE: The 4-Question Go-to-Market Framework*** (Lioncrest Publishing, 2021). The earlier citation gap (co-author and publisher unconfirmed) is now resolved. Note this is a *different* Vajre book from candidate 5's source (*ABM is B2B.*, co-written with Eric Spett) — the two are related in authorship and theme but are separate, separately citable works; do not conflate them when writing the entry's "Originator" line.
- **What it does:** A four-question GTM health diagnostic (Market, Operations, Velocity, Expansion), first locating the company in one of three fit stages (Problem-Market Fit / Product-Market Fit / Platform-Market Fit), then identifying which of four GTM motions is broken (make/sell, sell/deliver, deliver/renew, renew/expand) and sequencing fixes.
- **Verdict (2026-08-13 addendum):** **Include.** Citation now clears the bar. It remains structurally distinct from the GTM Motion Model (which classifies acquisition motion type, a company-shape question) and the 10-Step PMM Process (execution steps) — MOVE is a stage-aware health diagnostic that flags *where the GTM engine itself is broken*, a distinct question none of the 9 existing Category 4 entries answer.
- **Proposed home:** Category 7 (Strategy & Planning), alongside the Quarterly PMM Planning Framework and Pragmatic Institute Framework, both of which are also diagnostic/scoring instruments run on a standing cadence. **Type: Model.**
- **Inclusion-test:** Borderline pass, unchanged from initial logging. Typically run at CEO/RevOps level; frame the Ownership section honestly, a senior PMM plausibly leads or co-runs the diagnostic as an input to quarterly planning, but does not own the resulting resourcing decisions.
- **Confidence:** Medium-high (upgraded from Medium-low — the only blocker, citation, is now resolved; the residual caution is the Ownership framing, not sourcing).

### 7. RICE Prioritization — ❌ **Rejected**
- **Source:** stefanoskarakasis/Product-Marketing-Skills (5★), `pmm-execution/skills/prioritization-frameworks/SKILL.md`, bundled with no in-repo attribution alongside ICE, Kano, and MoSCoW
- **Originator/lineage — confirmed by the 2026-08-13 addendum research:** **Sean McBride**, then a product manager on Intercom's growth team, designed RICE (Reach × Impact × Confidence ÷ Effort) to bring objectivity to feature-prioritisation debates. Published directly on Intercom's own blog ("RICE: Simple prioritization for product managers"). This is a solid, single-originator, company-published citation, on par with how the KB already cites OpenView's and ProfitWell's blog posts for GBB and Value Metric/WTP — **the citation gap is fully resolved.**
- **Verdict (2026-08-13 addendum):** **Reject anyway.** Resolving the citation removes one objection but not the real one: RICE's canonical use, in its own origin story and in every source surveyed, is a Product Management tool for ranking roadmap/feature work, not a PMM-run process producing a PMM-owned output. It fails the inclusion test on ownership grounds, not sourcing grounds. It would also sit uncomfortably close to two existing entries: the Kano Model (feature classification by satisfaction impact, Category 6) and the Quarterly PMM Planning Framework's own prioritisation step (Category 7) already cover the adjacent ground a full RICE entry would encroach on, risking CLAUDE.md's "no duplicate concepts under different names" rule.
- **Recommended alternative:** if a future PMM planning entry needs it, add RICE as a one-line cross-reference or aside inside the Quarterly PMM Planning Framework's "How to apply it" step ("teams borrowing a scoring model for campaign prioritisation often adapt RICE; see Intercom's original write-up"), not a standalone 6-section entry. This matches the Hybrid inclusion test decided earlier: adjacent-but-not-owned practices get a short note, not full treatment.
- **Confidence:** High confidence in the rejection. This is now a settled no, not an open question.

---

## Repos yielding nothing extractable (checked, not candidates)

Documented for the record so this ground doesn't get re-researched:

- **ronakganatra/awesome-marketing** — a links list; every named framework either duplicates the KB (Obviously Awesome, StoryBrand, PLG, ICP, JTBD, Usage-Based Pricing, Category Design) or fails the citation/single-source bar (GACC Marketing Brief: one newsletter post; Channel/Offer Fit: one blogger; North Star Metric and Flywheel Model: diffuse, cross-functional, not PMM-owned; OKRs: universal, not PMM-specific).
- **growthack88/growth-marketing-os** — two "framework" files, both invented by the repo's own author for e-commerce/content-ops use, single-source, not PMM.
- **mkhsu2002/EC-Designer** — an image-generation code tool; the underlying "Hook → Problem → Solution → Features → Trust → CTA" ad structure is unattributed and sits in performance-marketing creative production, not PMM.
- **matteotitta/claude-code-marketing-quickstart** — a smaller, uncredited copy of genesys-skills' PMM skill set; nothing not already covered (better-sourced) by candidates 1-2 above.
- **BiaAhmed/product-marketing-portfolio** — a website template for showcasing a PMM's own work; no framework content.
- **adam-lagerhausen/b2b-marketing-skills** — every skill either duplicates an existing entry (VoC, Dunford's positioning, Launch Tiers, Category Design) or cites only an unverifiable in-repo tagline ("ADI Marketing") with no book/consultancy trail.
- **memex-lab/product-launch-video-skill** — a Remotion-based video-production tool; standard creative-production intake, not a PMM-run strategic framework.
- **"evidence-based-copywriting" / "house-style"** — could not locate either repo under the names given; GitHub search was rate-limited during this research pass. Re-supply the exact owner/URL if these should be checked in a follow-up.
- **KarlRaf/gtm-starter-kit** — proprietary, uncredited ICP scoring (duplicates the existing ICP Development Methodology); the rest is outbound/sales-ops execution, out of scope.
- **emilyjans/marketing-skills** — a directory/aggregator, not primarily original content; its local files are generic, unattributed marketing-ops/PR playbooks. Its README also lists product-marketing-adjacent skill *names* attributed to other GitHub users (coreyhaines31, zubair-trabzada) whose actual repos were not in scope for this pass and would need separate research.
- **aaron-he-zhu/aaron-marketing-skills** — 120 skills, all either operationalising an already-covered framework (Dunford's canvas, Launch Tiers, GBB, Message Architecture) under the author's own proprietary acronym system, or citing nothing beyond passing credit to community heuristics that don't meet the citation bar.

---

## Notes for whoever builds this queue

**Final build queue (6 approved, all built 2026-08-13, in the ranked order below):**

| # | Candidate | Category | Type | Originator | Status |
|---|---|---|---|---|---|
| 1 | Vertical/Segment Messaging via Buying Trigger | 2 | Framework | Diane Wiredu (Lion Words) | ✅ Built |
| 2 | Andy Raskin's Strategic Narrative Framework | 2 | Framework | Andy Raskin | ✅ Built |
| 3 | Playing to Win (Strategic Choice Cascade) | 7 | Framework | Lafley & Martin | ✅ Built |
| 4 | Pre-mortem | 4 | Framework | Gary Klein | ✅ Built |
| 5 | Account-Based Everything (ABX) / TEAM Framework | 4 | Methodology | Vajre & Spett | ✅ Built |
| 6 | MOVE GTM Diagnostic | 7 | Model | Vajre & Brown | ✅ Built |

**Candidate 7 (RICE Prioritization) is rejected**, not merely deferred; see its entry above for the reasoning (ownership fit, not citation, was the blocker) and the recommended lightweight cross-reference alternative. That lightweight cross-reference inside the Quarterly PMM Planning Framework was not added in this pass; it remains open for a future session to action if desired.

**Build sequencing note:** candidates 5 and 6 both trace to Sangram Vajre but cite two different books (*ABM is B2B.* for 5, *MOVE* for 6); both entries' text explicitly flags this and cites the two books independently rather than conflating them. Candidate 5 was built directly after Product-Led Growth in `frameworks/04-go-to-market-launch.md`, per this note, leaning on PLG's existing "operationalises a GTM Motion Model motion" framing as its structural template.

- **This queue is fully built and closed.** All 6 approved candidates ran the full CLAUDE.md Quality Gates checklist (British English, no em dashes, the matching type template with an Ownership or Cadence & ownership field, a sourced citation for every origin claim, a fictional example company explicitly labelled as such, actionable Pitfalls, at least two cross-references) and the cross-doc consistency checklist (INDEX.md, README.md, FRAMEWORK-MAP.md, BY-SITUATION.md) via the `add-kb-entry` skill.
- **Not yet done for these 6 entries:** quick-reference cards, GLOSSARY.md terms, and a measurement-guide.md row, none of which are covered by the `add-kb-entry` skill's checklist.
