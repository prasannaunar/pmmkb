# Attribution: Agent Skills for Product Marketing

**Last Updated:** 2026-08-30

This directory combines two separately attributable things: an open format
maintained by a third party, and product marketing methods that belong to the
practitioners and authors who developed them.

---

## 1. The format

**Agent Skills**, an open specification for packaging agent capabilities as a
directory containing a `SKILL.md` file.

- **Source repository:** [github.com/agentskills/agentskills](https://github.com/agentskills/agentskills)
- **Documentation:** [agentskills.io](https://agentskills.io), including the
  [specification](https://agentskills.io/specification) and the skill-creation
  guides on best practices, optimising descriptions, evaluating skills, and
  using scripts
- **Origin:** the format was originally developed by
  [Anthropic](https://www.anthropic.com/), released as an open standard, and is
  now open to contributions from the wider ecosystem
- **Licensing:** code in that repository is licensed under Apache-2.0;
  documentation is licensed under
  [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)
- **Consulted at:** commit `69ef37e`, retrieved 2026-08-30

**What was taken:** the file and directory structure, the frontmatter field
definitions and their constraints, the progressive-disclosure model
(`SKILL.md` under 500 lines, detail in `assets/` and `references/`), and the
authoring guidance those docs set out, in particular writing descriptions
imperatively from user intent, providing defaults rather than menus, and
carrying a Gotchas section of environment-specific corrections.

**What was not taken:** no text, code, or example skill from that repository is
reproduced here. Every `SKILL.md` in this directory was written for this
knowledge base. The reference validator (`skills-ref`) is used as a tool, not
vendored.

---

## 2. The content

Every skill is derived from entries in this knowledge base, which carry the
full citations for the underlying method. Where a skill compresses an entry,
the entry is authoritative.

| Skill | Knowledge base entries | Originators credited in those entries |
|---|---|---|
| `pmm-framework-router` | `decision-trees.md`, `framework-selector.md`, `BY-SITUATION.md`, `FRAMEWORK-MAP.md` | Navigation logic original to this knowledge base |
| `icp-definition` | STP Framework, ICP Development Methodology, MAP Model, JTBD Switch Interview Method (`frameworks/01-market-customer-understanding.md`) | Wendell R. Smith; Philip Kotler; Al Ries and Jack Trout; Tamara Grominsky (MAP Model, PMM Camp); Bob Moesta and Chris Spiek (switch interviews) |
| `positioning-development` | Dunford's 10-Step Positioning Process, 5-Component Positioning Canvas, Moore's Positioning Statement, JTBD Positioning (`frameworks/02-positioning-messaging.md`) | April Dunford, *Obviously Awesome* (2019); Geoffrey Moore, *Crossing the Chasm*; Clayton Christensen and Michael Raynor; Tony Ulwick |
| `messaging-architecture` | Message Architecture (Messaging House), FAB Ladder, Message Testing, Vertical/Segment Messaging via Buying Trigger, StoryBrand SB7 (`frameworks/02-positioning-messaging.md`) | Message testing popularised as "message-market fit" by Wynter; Donald Miller, *Building a StoryBrand* (2017) |
| `competitive-battlecard` | Competitive Battlecard Framework, VARS Framework (`frameworks/09-sales-enablement.md`); Competitive Intelligence & Positioning Update Framework (`frameworks/07-strategy-planning.md`); CI Program Maturity Model (`frameworks/03-competitive-strategy.md`) | Alex McDonnell, via the Competitive Intelligence Alliance (VARS); Klue and SCIP (CI maturity) |
| `launch-planning` | Launch Tier Framework, Pre-mortem (`frameworks/04-go-to-market-launch.md`); Go-to-Market Motion Framework (`frameworks/05-lifecycle-workflow.md`) | Gary Klein (pre-mortem) |
| `win-loss-programme` | Win/Loss Analysis Framework (`frameworks/06-product-experience-adoption.md`); JTBD Switch Interview Method, Voice of the Customer Programme (`frameworks/01-market-customer-understanding.md`) | Abbie Griffin and John R. Hauser (Voice of the Customer); Bob Moesta and Chris Spiek |
| `pricing-study-design` | Value Metric / Willingness-to-Pay, Van Westendorp PSM, Gabor-Granger, Conjoint Analysis, MaxDiff Analysis, Good-Better-Best Packaging, Usage-Based Pricing Model (`frameworks/08-pricing-packaging.md`) | Peter van Westendorp; André Gabor and Clive Granger; Jordan J. Louviere and George Woodworth (best-worst scaling) |
| `quarterly-pmm-planning` | Quarterly PMM Planning Framework, Playing to Win, MOVE GTM Diagnostic, PMM Team Scaling Framework (`frameworks/07-strategy-planning.md`) | A.G. Lafley and Roger Martin (Playing to Win); Sangram Vajre and Bryan Brown (MOVE) |

The originator column is a pointer, not a citation. Full citations, including
titles, publishers, and years, live in the "Further reading" line of each entry
in `frameworks/`, and any hedged or contested attribution is recorded in
[SOURCE-VALIDATION-LOG.md](../SOURCE-VALIDATION-LOG.md).

---

## 3. Templates in `assets/`

Every template bundled with a skill (positioning canvas, messaging house,
message matrix, battlecard, launch brief, win/loss interview guide, ICP
scorecard) was written for this knowledge base from the procedure in the
corresponding entry. They are not reproductions of any third party's template,
and none carries a proprietary format. Where a template implements a named
author's structure, for example the Moore-style positioning statement or the
Dunford canvas components, the entry it came from carries the citation.

---

## 4. How to attribute this work onward

If you reuse these skills outside this repository, keep the `metadata` block in
each `SKILL.md` intact and carry this file with them. It is the only record of
which method belongs to whom.
