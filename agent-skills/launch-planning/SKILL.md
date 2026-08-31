---
name: launch-planning
description: "Use when a product, feature, tier, or rebrand is going to market and the plan is not settled: how much process this launch warrants, what the timeline and dependencies are, who owns which channel, what could go wrong, and how success is measured. Triggers include launch plan, launch brief, GTM plan, launch checklist, release comms, launch tiering, and go/no-go. Sizes the launch first (Tier 1/2/3), then builds the motion, runs a pre-mortem, and sets the measurement baseline. Use it even when the request is just for a launch announcement or timeline."
metadata:
  author: "PMM Knowledge Base maintainers (github.com/prasannaunar/pmmkb)"
  kb-source: "frameworks/04-go-to-market-launch.md; frameworks/05-lifecycle-workflow.md; measurement-guide.md"
  frameworks: "Launch Tier Framework (Tier 1/2/3); Go-to-Market Motion Framework; Pre-mortem; 10-Step PMM Process; GTM Motion Model"
  format-spec: "Agent Skills open format, agentskills.io/specification"
  attribution: "See agent-skills/ATTRIBUTION.md"
  version: "1.0"
  last-updated: "2026-08-30"
---

# Launch planning

Size the launch before planning it. Applying the same six-week cross-functional
process to a routine UI update and to a new product line is the single most
common launch failure, and it fails in both directions at once.

Paths below are relative to the knowledge base root. Full entries are in
`frameworks/04-go-to-market-launch.md` (Launch Tier Framework, Pre-mortem) and
`frameworks/05-lifecycle-workflow.md` (Go-to-Market Motion Framework).

## Step 1: Tier the launch

Score the launch high, medium, or low against four criteria. Use a fast,
consistent read, not a numeric formula.

| Criterion | Question |
|---|---|
| Revenue impact | Does this open new revenue, change pricing, or affect renewals? |
| Cross-functional dependency | How many teams have to change what they do? |
| External visibility | Will press, analysts, or the wider market notice? |
| Customer-facing change magnitude | How much does the customer's experience change? |

The dominant score sets the tier:

- **Tier 1** (major, cross-functional, externally visible): the full motion
  below, a pre-mortem, analyst and press outreach, a full enablement cycle, and
  the longest lead time.
- **Tier 2** (significant, single-team-led): a trimmed motion, sales briefing
  and enablement assets, no analyst cycle, moderate lead time.
- **Tier 3** (minor, routine): release note and in-app notice. Essentially
  nothing beyond that. Expect Tier 3 to be the largest bucket in a healthy,
  fast-shipping product organisation.

Communicate the tier to stakeholders at the same meeting the launch enters the
calendar, so nobody discovers the level of support two weeks out. Gate tier
assignment through one owner. Re-score if scope changes materially.

## Step 2: Build the motion (Tier 1 and Tier 2)

1. **Define the launch narrative** and test it with three to five customers or
   prospects before building anything. If it does not land in a five-minute
   conversation, it will not land in a press release. Draw the narrative from
   the messaging house rather than writing fresh copy.
2. **Design the three phases.** Pre-launch (four to eight weeks prior:
   awareness, thought leadership, two or three referenceable customers lined
   up); launch week (website, email, sales kickoff, press, social, and customer
   comms all live within 24 to 48 hours); post-launch (four to twelve weeks of
   content, case studies, webinars, and sales plays).
3. **Assign a named owner per channel:** website, email, paid, content,
   partnerships, press, social, enablement. Publish the list.
4. **Map dependencies.** Website before email. Sales training before outreach.
   Content before paid promotion. Make the sequence visible so a slip in one
   workstream shows its knock-on effects.
5. **Set sync points:** daily fifteen-minute standups pre-launch, weekly
   post-launch, standing agenda of shipped, blocked, next.
6. **Write the rollback plan** before launch week: what happens if an
   integration slips or a partner pulls out, and what the fallback narrative
   is.

## Step 3: Run a pre-mortem (Tier 1, and Tier 2 with real revenue exposure)

1. Assemble the team actually running the launch plus genuine sceptics. On a
   cohesive team, assign someone the designated dissenter role explicitly.
2. State the premise as fact, not possibility: "It is [three to six] months
   from now. This launch has failed completely." The already-happened framing
   is what produces the effect; "what could go wrong?" does not.
3. Everyone writes failure reasons individually and silently for five to ten
   minutes, before any discussion.
4. Go round the group, one reason each in turn, recorded without debate.
5. Cluster into five to ten distinct failure themes, keeping the specific
   detail that made each useful.
6. Score each theme high, medium, or low on severity and likelihood, and rank.
7. Assign a named owner and a dated mitigation to every top-ranked risk. "Watch
   this" is not a mitigation.
8. Decide explicitly whether any risk, alone or combined, warrants delaying,
   rescoping, or cancelling, and escalate that to the go/no-go owner.

## Step 4: Set the measurement baseline

Record the pre-launch baseline for every metric before launch week, and commit
to a 90-day read. Click-through numbers arrive within days; sales cycle
compression and average selling price uplift take a quarter or more. See
`measurement-guide.md` for the baseline metric, cadence, and owner per entry.

## Gotchas

- **Eight Tier 1 launches in one quarter means the scoring is wrong.** Use the
  tier distribution itself as a sense check on the calendar.
- **Post-launch is where launches die.** The four-to-twelve-week phase loses
  energy because nobody owns it. Name that owner during planning, not after
  launch week.
- **A pre-mortem run as a group discussion produces nothing.** The silent
  individual write-down first is what stops the most senior voice anchoring
  everyone else's list. Do not compress the two steps.
- **Do not write launch copy before positioning and messaging are settled.**
  A launch is the most expensive place to discover the pitch does not work.
- **Teams undersell scope to dodge process, and oversell it to get visibility.**
  Both distort the calendar, which is why one owner gates tier assignment
  against the criteria rather than against the argument.
- **A rescoped launch keeps its original tier unless someone re-scores it.**
  Adding a pricing change to a routine feature update changes the tier.

## Output

Deliver the completed launch brief (`assets/launch-brief.md`): tier and the
scores behind it, narrative, phase plan with dates, channel owners, dependency
map, sync cadence, rollback plan, pre-mortem risk register with owners and
dates, and the metric baseline with the 90-day read scheduled.

## See also

`messaging-architecture` (the narrative source), `positioning-development`
(the prerequisite when the launch enters a new segment or category),
`quarterly-pmm-planning` (tier distribution feeds resourcing),
`competitive-battlecard` (enablement for a competitively exposed launch).

## Attribution

Derived from the Launch Tier Framework and Pre-mortem entries in
`frameworks/04-go-to-market-launch.md` and the Go-to-Market Motion Framework in
`frameworks/05-lifecycle-workflow.md`, which carry the full citations (the
pre-mortem technique is attributed there to Gary Klein). Skill format follows
the Agent Skills open specification. See [ATTRIBUTION.md](../ATTRIBUTION.md).
