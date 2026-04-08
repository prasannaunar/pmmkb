# CLAUDE.md: Working Principles for PMM Knowledge Base Development

**Last Updated:** 2026-04-08

---

## Project Overview

This repository contains a structured, practically-oriented knowledge base of product marketing frameworks. It comprises 19 frameworks across 7 categories, each with clear applications, real-world examples, and common pitfalls.

**Primary Use Case:** A reference guide for product marketing professionals to apply proven frameworks to day-to-day challenges; positioning, go-to-market strategy, competitive intelligence, and customer advocacy.

**Target Users:** Product marketing managers, PMMs scaling from solo to team roles, and cross-functional stakeholders seeking PMM guidance.

---

## Writing Standards

### Language & Tone

- **Write in British English.** Use British spelling (colour, organisation, realise) and conventions.
- **Avoid em dashes entirely.** Do not use em dashes (`—`) or double hyphens (`--`) as replacements.
- **Use semicolons where em dashes would fit.** For example:
  - ❌ *"The framework has three steps—awareness, consideration, and purchase."*
  - ✅ *"The framework has three steps; awareness, consideration, and purchase."*
  - ✅ *"The framework has three steps. These are: awareness, consideration, and purchase."*
- **Structure sentences to avoid em dashes naturally.** Break complex sentences into two or use colons.
  - ❌ *"Positioning is the anchor—it shapes all downstream messaging."*
  - ✅ *"Positioning is the anchor. It shapes all downstream messaging."*
  - ✅ *"Positioning is the anchor; it shapes all downstream messaging."*

### Framework Structure

Each framework entry must include (in order):

1. **Framework Title** (H2 heading)
2. **What it is** (paragraph explaining the framework, no jargon)
3. **When to use it** (bullet list of specific triggers and contexts)
4. **How to apply it** (numbered steps, detailed enough to follow; structure may vary by framework type)
5. **Example** (realistic, specific scenario; named company or detailed context, not generic)
6. **Pitfalls** (2–3 common mistakes with explanation)

### Language Guidelines

- **Clarity over complexity.** Use simple words. Define jargon on first use.
- **Avoid hedging language.** Say "Use this when..." not "This might be helpful if..."; say "Track X metric" not "Consider tracking X metric"
- **Use active voice.** "The PMM develops positioning" not "Positioning is developed by the PMM"
- **Specific over generic.** "Reduce sales cycle by 30%" not "improve efficiency"
- **Numbers and proof.** Include realistic metrics, percentages, timelines. Not "many customers" but "65% of customers"

### Content Standards

- **Examples must be specific.** Either name a real company (with real outcomes) or describe a detailed, plausible scenario (not a generic case study)
- **Pitfalls must be actionable.** Explain the mistake, why it matters, and how to recover or prevent it
- **Cross-references must link frameworks.** When one framework builds on another, note it: "See also: [Framework Name]"
- **Word count per framework: 1000–1500 words.** Avoid exceeding 3000 words per category file

---

## Content Principles

### Framework Curation

- **Include only proven, replicable frameworks.** If a framework is only used by one company or hasn't held up over years, exclude it.
- **Mix tactical and strategic.** Balance operational frameworks (e.g., "10-Step PMM Process") with strategic ones (e.g., "STP Framework")
- **Prioritise real-world use.** A framework's value lies in its application, not its elegance. Awkward but proven beats polished but untested.
- **No duplicate concepts under different names.** If two frameworks solve the same problem differently, choose one or explicitly show the differences.

### Updates & Additions

- **Update frameworks quarterly.** After each quarter, review frameworks most frequently used by the team. Do they still hold up? Do examples need refreshing?
- **Add new frameworks only if a gap is identified by the team.** Don't add frameworks preemptively. Add them when you discover something the knowledge base doesn't cover.
- **Archive, don't delete.** If a framework stops being used, move it to an `archived/` folder with a note on why. Future teams may find it relevant.
- **Version frameworks.** Track changes in a changelog within each framework file if updates are significant.

### Practical Orientation

- **Every framework must answer: "When should I apply this?"** Not just "what is it?"
- **Every framework must include: "What could go wrong?"** Knowing pitfalls prevents costly mistakes
- **Every framework must show: "How do I know it worked?"** Success metrics make applications measurable

---

## Repository Structure

```
/pmmkb/
├── README.md                    # Overview, navigation, quick start
├── INDEX.md                     # Full taxonomy of all frameworks
├── BY-SITUATION.md              # Situation-to-framework mapper
├── PLAN.md                      # Roadmap for polish and integration
├── PROGRESS.md                  # Progress tracking and team notes
├── CLAUDE.md                    # This file; working principles
├── GLOSSARY.md                  # PMM terminology (in progress)
├── product-marketing-kb-task.md # Original task specification (reference)
│
├── frameworks/                  # Framework files by category
│   ├── 01-market-customer-understanding.md
│   ├── 02-positioning-messaging.md
│   ├── 03-competitive-strategy.md
│   ├── 04-go-to-market-launch.md
│   ├── 05-lifecycle-workflow.md
│   ├── 06-product-experience-adoption.md
│   └── 07-strategy-planning.md
│
├── templates/                   # Reusable templates (in progress)
│   ├── quarterly-planning-template.md
│   ├── campaign-brief-template.md
│   ├── sales-enablement-audit.md
│   └── weekly-standup-template.md
│
├── quick-reference/             # One-page framework summaries (in progress)
│   ├── stp-framework-card.md
│   ├── positioning-canvas-card.md
│   └── ... (one per framework)
│
├── case-studies/                # Extended real-world examples (in progress)
│   └── deep-dive-case-studies.md
│
└── archived/                    # Deprecated frameworks (future use)
```

---

## Workflow for Using This Repository

### For Individual PMMs

1. **Face a problem** ("Our win rate is declining")
2. **Use BY-SITUATION.md** to find relevant frameworks
3. **Read the framework** (expect 10–15 minutes)
4. **Apply the "How to apply it" section** with your data
5. **Measure the outcome** against the success metrics listed
6. **Share the result** in monthly team feedback (what worked; what didn't)

### For Team Leads & Managers

1. **In quarterly planning:** Reference PLAN.md phases to integrate framework work
2. **Use templates** (campaign briefs, audit checklists, planning templates) to embed frameworks into process
3. **Track framework usage** (which frameworks are actually being used?)
4. **Monthly feedback loop:** Ask team: "What frameworks did you use? What worked?"
5. **Annual refresh:** Review top frameworks based on team feedback; add new frameworks if gaps emerge

### For New Team Members

1. **Start with README.md** (overview and structure)
2. **Read your role's onboarding section** (e.g., "Sales enablement PMM" → recommended frameworks)
3. **Choose one framework to apply** in your first week
4. **Ask senior PMM for feedback** on application
5. **Once comfortable, expand** to broader framework usage

---

## Quality Gates

### Before Publishing Framework Changes

- [ ] Language is British English (check spelling, conventions)
- [ ] No em dashes or double hyphens; all complex sentences restructured
- [ ] Framework follows the standard 6-section structure
- [ ] "What it is" is jargon-free (read aloud; ask if a non-PMM would understand)
- [ ] "How to apply" is detailed enough to follow without extra research
- [ ] Example is specific (not generic) and realistic
- [ ] Pitfalls are actionable (not just "watch out"; include recovery steps)
- [ ] At least 2 cross-references to related frameworks
- [ ] Word count is 1000–1500 words per framework
- [ ] Metrics and numbers are specific, not vague

### Before Publishing Templates

- [ ] Template has been tested by at least one team member
- [ ] Instructions are clear and include an example or sample output
- [ ] Template reduces time to apply a framework (measure: before / after)

### Before Publishing Case Studies

- [ ] Outcomes are quantified (not "improved" but "improved by 35%")
- [ ] Timeline is clear (not "eventually" but "within 6 months")
- [ ] Company name or detailed enough context that it's believable

---

## Maintenance Schedule

### Weekly
- Monitor team Slack/email for framework questions or usage
- Note any frameworks repeatedly referenced or requested

### Monthly (30-minute team sync)
- Ask: "What frameworks did you use this month?"
- Capture: What worked? What didn't? What's missing?
- Log insights in PROGRESS.md

### Quarterly (after each quarter ends)
- Review the top 3 frameworks used that quarter
- Do examples still resonate? Do they need updating?
- Are pitfalls still relevant? Any new ones?
- Update framework files if needed

### Annually (January)
- Full pass over all 19 frameworks
- Check: Are they still being used? Do they still hold up?
- Update examples with new case studies from past year
- Deprecate frameworks with zero usage (move to archived/)
- Add new frameworks if team identified gaps
- Refresh PROGRESS.md with year-end summary

---

## Decision Log

**Decision: No em dashes or double hyphens**
- *Why:* British English convention discourages em dashes; semicolons and shorter sentences are clearer
- *Implementation:* Review all existing frameworks for em dashes and convert them
- *Exception:* None; this is a hard rule

**Decision: British English throughout**
- *Why:* Consistency; audience includes global PMMs; British conventions are formal and precise
- *Implementation:* Spell checker set to British English
- *Exception:* None; this is a hard rule

**Decision: Frameworks organised by workflow stage, not alphabetically**
- *Why:* PMMs follow a workflow (understand market → position → go to market → measure); frameworks should mirror this flow
- *Implementation:* Index and BY-SITUATION.md explicitly show workflow sequences
- *Exception:* None; this supports usability

---

## Contact & Feedback

This document is version-controlled. Propose changes via a commit to CLAUDE.md with clear justification in the commit message.

For questions on framework curation, content quality, or process, open an issue in this repository.
