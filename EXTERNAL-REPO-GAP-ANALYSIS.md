# External Repo Gap Analysis: Candidates Sourced from GitHub

**Logged:** 2026-08-13
**Status:** 🔲 **Research complete, nothing built yet.** This is a candidate queue only, produced by a research pass across 14 public GitHub repos (mostly AI-skill/prompt collections for marketing and GTM). Vetting, sequencing, and the actual write-ups happen in a future session, per CLAUDE.md's "Add new frameworks only if a gap is identified" rule and its full Quality Gates checklist (source citation, Ownership field, cross-doc consistency).
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

### 1. Vertical/Segment Messaging via Buying Trigger
- **Source:** matteotitta/genesys-skills (30★), `skills/primitives/product-marketing/strategy/vertical-messaging/SKILL.md`
- **Originator/lineage:** Diane Wiredu, founder of Lion Words (lionwords.com), a practicing B2B/SaaS messaging strategist. Credited by name in the source file; confirmed as a real, independently documented practitioner via web search.
- **What it does:** Adapts an already-locked core messaging library across market segments/verticals without rebuilding it from scratch. For each segment, identifies the specific buying-trigger event, routes the buyer to one leading message pillar from the existing core message, and writes a short entry-point message. Produces a segment-to-pillar routing map.
- **Proposed home:** Category 2 (Positioning & Messaging). **Type: Framework.**
- **Why it's a genuine gap:** Distinct from Message Architecture (Messaging House), which builds the core message, and from STP, which selects the segment. This is specifically the segment-adaptation layer, keyed to a buying-trigger event rather than a static persona or vertical label. Nothing in the existing 54 covers this.
- **Inclusion-test:** Pass. A PMM plausibly owns this exercise and produces the routing map directly.
- **Confidence:** High.

### 2. Andy Raskin's Strategic Narrative Framework
- **Source:** matteotitta/genesys-skills (30★), `skills/research/expert-pov/SKILL.md` (cited in its "OBI frameworks" reference table)
- **Originator/lineage:** Andy Raskin, strategic narrative consultant. Codified in his 2016 essay "The Greatest Sales Deck I've Ever Seen" (2M+ views); widely cited and taught since (Lenny's Newsletter and multiple public case studies).
- **What it does:** A narrative-construction method for a company/product story: name a big change in the world, cast winners and losers, reveal a "promised land," identify obstacles, offer "magic gifts" (capabilities), then prove it with evidence. Leads with an external market shift rather than the product itself.
- **Proposed home:** Category 2 (Positioning & Messaging), with a cross-reference into Category 4 (Go-to-Market & Launch). **Type: Framework.**
- **Why it's a genuine gap:** Distinct from StoryBrand SB7 (customer-as-hero structure) and Command of the Message (live sales-conversation framework). Raskin's is a market-change/company-narrative arc, most associated with pitch decks, fundraising narratives, and category-defining launch narratives.
- **Inclusion-test:** Pass, with a caveat worth the curator's attention: this framework is traditionally associated more with CEO/founder fundraising narrative than day-to-day PMM output. It clears the bar because a PMM plausibly owns the launch/category narrative deck at most companies, but confirm that framing explicitly in the Ownership section if built, rather than implying PMM always leads it.
- **Confidence:** High, with a scoping caveat.

### 3. Playing to Win (Strategic Choice Cascade)
- **Source:** stefanoskarakasis/Product-Marketing-Skills (5★), cited in README.md credits (not implemented as a working skill in the repo, cited as inspiration/further-reading only)
- **Originator/lineage:** A.G. Lafley (former P&G CEO) and Roger L. Martin, *Playing to Win: How Strategy Really Works* (Harvard Business Review Press, 2013). Well-documented, widely taught strategy framework.
- **What it does:** A five-question cascade (winning aspiration, where to play, how to win, capabilities needed, management systems) that forces explicit, mutually reinforcing strategic choices, rather than a list of disconnected goals.
- **Proposed home:** Category 7 (Strategy & Planning). **Type: Framework.**
- **Why it's a genuine gap:** Not a synonym of the Quarterly PMM Planning Framework or the Pragmatic Institute Framework, both of which are operational/tactical. This sits a level above them, at strategic-choice architecture.
- **Inclusion-test:** Pass. A PMM plausibly leads or co-leads a "where to play / how to win" exercise for a product line or segment, even where the exec team signs off on the final answer.
- **Confidence:** High.

### 4. Pre-mortem (Gary Klein)
- **Source:** stefanoskarakasis/Product-Marketing-Skills (5★), `pmm-execution/skills/pre-mortem/SKILL.md`, also credited by name in README.md
- **Originator/lineage:** Gary Klein, cognitive psychologist. Published as "Performing a Project Premortem," *Harvard Business Review*, September 2007. Well-established, frequently cited risk-identification technique.
- **What it does:** A structured exercise run before a major launch or initiative: generate concrete failure narratives by imagining the initiative has already failed, classify the risks by severity, assign owners and mitigations, and produce a go/no-go recommendation.
- **Proposed home:** Category 4 (Go-to-Market & Launch), alongside the Launch Tier Framework, or Category 7 (Strategy & Planning) if framed generically rather than launch-specific; curator's call on which reads more naturally. **Type: Framework.**
- **Why it's a genuine gap:** Distinct from Win/Loss Analysis (post-hoc). Nothing in the existing 54 covers pre-launch failure-mode analysis.
- **Inclusion-test:** Pass. A PMM plausibly facilitates a pre-mortem ahead of a Tier 1 launch, even if engineering/product leadership supplies the failure scenarios.
- **Confidence:** High.

### 5. Account-Based Everything (ABX)
- **Source:** yannickYamo/skills (20★), `skills/abx-strategy/SKILL.md`
- **Originator/lineage:** Sangram Vajre, co-founder of Terminus, author of *Account-Based Marketing For Dummies* (2016) and the follow-up ABX work; popularised the ABM → ABX shift and the TEAM (Target, Engage, Activate, Measure) operationalising model. This overarching category is defensibly citable. Caveat: the skill file itself doesn't cite Vajre by name, and several sub-tools inside it (PURE scoring, "Bet Board," a 5-motion DETECT→EXPAND model) appear to be the repo author's own uncredited constructs layered on top of the real ABX category, not part of Vajre's documented method. Only the overarching account-based motion concept would be citable; the sub-tools would need to be dropped or re-sourced.
- **What it does:** A GTM model for complex B2B sales (small addressable account universe, high deal size, multi-stakeholder buying committees) that replaces the funnel with account-level signal detection, buying-committee mapping, and coordinated multi-channel engagement per target account.
- **Proposed home:** Category 4 (Go-to-Market & Launch) or Category 9 (Sales Enablement). **Type: Model.**
- **Why it might be a gap:** The existing GTM Motion Model classifies motions generally (PLG, sales-led, partner-channel, etc.) but doesn't document the account-based motion specifically as its own entry.
- **Open question before building:** Confirm with the curator whether ABX earns a standalone entry or becomes a documented variant inside the existing GTM Motion Model, since the two cover overlapping ground (motion selection) at a similar altitude.
- **Inclusion-test:** Pass, medium confidence. PMM commonly co-owns ABM account tiering, messaging, and content strategy; execution (ads, SDR sequencing) sits with demand gen/sales.
- **Confidence:** Medium — real citable core concept, but needs an overlap decision and a rewrite that drops the uncredited sub-tools.

### 6. MOVE GTM Diagnostic (4-Question GTM Framework)
- **Source:** swan-gtm/gtm-skills, `skills/sangram-vajre/move-gtm-diagnostic/SKILL.md`
- **Originator/lineage:** Sangram Vajre again (same originator as candidate 5), from his WSJ-bestselling book *MOVE*. Co-author and publisher/year could not be confirmed from the files fetched during this pass — **flag and verify this citation independently before building.**
- **What it does:** A four-question GTM health diagnostic (Market, Operations, Velocity, Expansion), first locating the company in one of three fit stages (Problem-Market Fit / Product-Market Fit / Platform-Market Fit), then identifying which of four GTM motions is broken (make/sell, sell/deliver, deliver/renew, renew/expand) and sequencing fixes.
- **Proposed home:** Category 7 (Strategy & Planning) or Category 4 (Go-to-Market & Launch). **Type: Model.**
- **Why it might be a gap:** Distinct from the GTM Motion Model (classifies motion type) and the 10-Step PMM Process (execution steps); MOVE is a stage-aware diagnostic that flags where the GTM engine itself is broken, which no existing entry does.
- **Inclusion-test:** Borderline pass. Typically run at CEO/RevOps level; a senior PMM plausibly leads or co-runs it as part of quarterly planning, but this is a thinner PMM-ownership case than most of the entries above it.
- **Confidence:** Medium-low — citation needs firming up (co-author, publisher, year) before this clears the KB's sourcing bar; if the same book/author also anchors candidate 5, consider researching and building both together, since a single verified source would clear both.

### 7. RICE Prioritization *(optional, weakest candidate)*
- **Source:** stefanoskarakasis/Product-Marketing-Skills (5★), `pmm-execution/skills/prioritization-frameworks/SKILL.md`, bundled with no in-repo attribution alongside ICE, Kano, and MoSCoW
- **Originator/lineage:** Commonly attributed to Sean McBride at Intercom (a 2016 Intercom blog post introducing Reach × Impact × Confidence ÷ Effort). Reasonably documented externally, but not cited anywhere in the source repo itself — would need independent sourcing (Intercom's own post) before use.
- **What it does:** A scoring formula for ranking competing initiatives or features by expected impact versus cost.
- **Proposed home:** Category 7 (Strategy & Planning). **Type: Framework.**
- **Why it's a weak candidate:** Not a duplicate of Kano (which classifies feature type, not initiative priority), but it sits closer to general product-management practice than PMM-specific practice — closer to a shared PM/PMM tool than a PMM-owned output.
- **Inclusion-test:** Borderline. Include only if the curator judges PMM's use of RICE (prioritising campaigns/launches, not roadmap features) is distinct enough from Product's use of it to earn its own entry, and only after sourcing the Intercom citation independently.
- **Confidence:** Low. Optional; likely the first cut if the queue needs trimming.

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

- **Sourcing follow-ups needed before building candidates 5 and 6:** both trace to Sangram Vajre; one verified citation pass (confirming the MOVE book's full publication details, and separating Vajre's actual TEAM/ABX model from the yannickYamo repo author's uncredited PURE/Bet Board additions) would clear the bar for both at once.
- **Candidate 7 (RICE) is optional.** Cut it first if the build queue needs to stay tight; it's the thinnest PMM-ownership case and the only one requiring a citation not found in any source repo.
- **No entries from this queue should be added without running the full CLAUDE.md Quality Gates checklist**, same as any other addition: British English, no em dashes, the four-type structure with the Ownership field, a real Example (fictional companies labelled as such), actionable Pitfalls, at least two cross-references, and the cross-doc consistency checklist (INDEX.md, README.md, FRAMEWORK-MAP.md, BY-SITUATION.md, PROGRESS.md) via the `add-kb-entry` skill.
- **This queue does not need to be exhausted in one pass.** Candidates 1-4 are the strong, clean additions; 5-7 carry open questions (overlap, citation, or PMM-ownership scoping) that a curator should resolve deliberately rather than waving through.
