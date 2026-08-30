---
name: pmm-framework-router
description: "Use when someone brings a product marketing problem, symptom, or goal but has not named a framework: we keep losing deals to a competitor, the new tier is not converting, leadership wants a pricing recommendation, sales says the pitch is not landing, we launch in six weeks. Triages the symptom into a situation, returns the ordered framework sequence from the PMM knowledge base, and hands off to the specialist PMM skill that runs it. Use it even when the request never mentions frameworks, product marketing, or positioning by name."
metadata:
  author: "PMM Knowledge Base maintainers (github.com/prasannaunar/pmmkb)"
  kb-source: "decision-trees.md; framework-selector.md; BY-SITUATION.md; FRAMEWORK-MAP.md"
  format-spec: "Agent Skills open format, agentskills.io/specification"
  attribution: "See agent-skills/ATTRIBUTION.md"
  version: "1.0"
  last-updated: "2026-08-30"
---

# PMM framework router

Route a described symptom to the right framework sequence before any work starts.
Picking the wrong starting framework is the most expensive mistake in this
knowledge base: a messaging rewrite will not fix a positioning problem, and a
launch plan built before the launch is tiered burns cross-functional goodwill.

All file paths below are relative to the knowledge base root (the repository
that contains `frameworks/`, `BY-SITUATION.md`, and this `agent-skills/`
directory).

## Procedure

1. **Establish the symptom, not the requested solution.** People usually ask
   for the artefact they think they need ("write me a battlecard") rather than
   the problem ("win rate against one competitor fell from 48% to 31% last
   quarter"). Ask what changed, when, and what number moved. Do not skip this
   for a confidently worded request; a confident request is the most common
   source of a mis-routed one.
2. **Place the symptom on the master tree.** Read `decision-trees.md` and walk
   its three branches: something new is launching, something that used to work
   has stopped working, or a team, budget, or leadership question. The tree
   ends at a numbered situation, not at a framework.
3. **Pull the full sequence for that situation** from `BY-SITUATION.md`. That
   file gives the ordered entries, not just one. Where the goal and constraints
   are clear but the situation is not, use `framework-selector.md` instead; it
   selects by business goal, timeline, and data already held.
4. **Check the prerequisites in `FRAMEWORK-MAP.md`** before recommending a
   starting point. Several entries depend on a settled output from another one
   (see Gotchas). If the prerequisite is missing, the sequence starts there.
5. **Hand off to the specialist skill** in the table below, or, where no skill
   covers it, name the specific entry file and section to open.
6. **State the sequence, the first step, and what evidence is needed** before
   anything is drafted. If the evidence does not exist yet (no win/loss data,
   no customer interviews), say so; the fix is usually a research step, not a
   writing step.

## Symptom to skill routing

| What is described | Route to | Underlying entries |
|---|---|---|
| Losing deals to a named competitor; reps improvising against a rival | `competitive-battlecard` | Competitive Battlecard Framework, VARS, Win/Loss (`frameworks/09-sales-enablement.md`) |
| Losing deals but no idea why; win rate dropping; churn with no clear cause | `win-loss-programme` | Win/Loss Analysis Framework (`frameworks/06-product-experience-adoption.md`) |
| Nobody can explain what the product is; conflicting internal pitches; new segment or category | `positioning-development` | Dunford canvas and 10-step, Moore statement, JTBD (`frameworks/02-positioning-messaging.md`) |
| Positioning is settled but copy is inconsistent across web, deck, and email | `messaging-architecture` | Message Architecture, FAB Ladder, Message Testing (`frameworks/02-positioning-messaging.md`) |
| A launch is coming; scope, timeline, or resourcing is unclear | `launch-planning` | Launch Tier Framework, Complete GTM Workflow, Pre-mortem (`frameworks/04-go-to-market-launch.md`) |
| Pricing or packaging decision; a new tier; a price rise | `pricing-study-design` | Van Westendorp, Gabor-Granger, Conjoint, MaxDiff, GBB (`frameworks/08-pricing-packaging.md`) |
| Who should we sell to; leads are poor fit; sales chasing everything | `icp-definition` | STP, ICP Development Methodology, MAP Model (`frameworks/01-market-customer-understanding.md`) |
| Too much work, unclear priorities, a quarter to plan | `quarterly-pmm-planning` | Quarterly PMM Planning, Playing to Win, MOVE (`frameworks/07-strategy-planning.md`) |
| Adoption of a shipped feature is flat | No skill; open Feature Adoption Framework | `frameworks/05-lifecycle-workflow.md` |
| Which acquisition channel to fund | No skill; open Bullseye Framework, after GTM Motion Model | `frameworks/04-go-to-market-launch.md` |
| Analyst pressure ahead of a Wave or Magic Quadrant | No skill; open Analyst Relations Tiering & Cadence Model | `frameworks/07-strategy-planning.md` |
| Which function actually owns this work | No skill; open the GTM vs product marketing primer | `concepts/gtm-strategy-vs-product-marketing.md` |

## Gotchas

- **Messaging requests are usually positioning problems.** If two people in the
  company describe the product differently, no amount of copy work will fix it.
  Route to `positioning-development` first and say why.
- **A battlecard request with no win/loss evidence is premature.** The card's
  counter-positions have to come from what buyers actually said, not from an
  internal view of the competitor. Run `win-loss-programme` first, or scope the
  card to the one competitor where evidence already exists.
- **Tier the launch before planning it.** The Launch Tier Framework decides how
  much process a launch warrants. Skipping it is how a routine update absorbs a
  six-week cross-functional cycle.
- **"Set a price" is at least two questions.** Discovering an acceptable range
  (Van Westendorp) and choosing a revenue-maximising point inside it
  (Gabor-Granger) are different studies. Route through `pricing-study-design`
  rather than picking a method from the symptom alone.
- **Do not stack more than three entries on one problem.** `BY-SITUATION.md`
  sequences are deliberately ordered; recommend the first two or three steps
  and the evidence gate between them, not the whole list at once.
- **Ownership varies by company stage.** Several of these decisions sit with
  Finance, Sales, or a CEO at scale and with a solo PMM at an earlier stage.
  Check the entry's Ownership or Cadence and ownership section before telling
  anyone the work is theirs.

## Output

Return, in this order: the situation identified, the ordered sequence (two or
three steps), the first action and who does it, the evidence gate that has to
pass before step two, and the specialist skill to load next. Keep it short
enough to act on immediately; the detail lives in the entry files.

## Attribution

Routing logic is derived from `decision-trees.md`, `framework-selector.md`,
`BY-SITUATION.md`, and `FRAMEWORK-MAP.md` in this knowledge base. Skill format
follows the Agent Skills open specification. See
[ATTRIBUTION.md](../ATTRIBUTION.md).
