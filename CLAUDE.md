# CLAUDE.md: Working Principles for PMM Knowledge Base Development

**Last Updated:** 2026-08-13

---

## Project Overview

This repository contains a structured, practically-oriented knowledge base of product marketing frameworks and methodologies. It comprises 54 entries across 9 categories, plus a `concepts/` area for primers, each with clear applications, real-world examples, and common pitfalls.

**Primary Use Case:** A reference guide for product marketing professionals to apply proven frameworks to day-to-day challenges; positioning, go-to-market strategy, competitive intelligence, and customer advocacy.

**Target Users:** Product marketing managers, PMMs scaling from solo to team roles, and cross-functional stakeholders seeking PMM guidance.

For how PMMs, team leads, and new joiners use this repository day-to-day, see README.md. This file covers content standards and editing rules only.

---

## Writing Standards

### Language & Tone

- **Write in British English.** Use British spelling (colour, organisation, realise) and conventions. No exceptions.
- **Avoid em dashes entirely.** Do not use em dashes (`—`) or double hyphens (`--`) as replacements. Use a semicolon, a colon, or split into two sentences instead. No exceptions.
  - ❌ *"Positioning is the anchor—it shapes all downstream messaging."*
  - ✅ *"Positioning is the anchor; it shapes all downstream messaging."*

### Framework Structure

Each framework entry must include (in order):

1. **Framework Title** (H2 heading)
2. **What it is** (paragraph explaining the framework, no jargon)
3. **When to use it** (bullet list of specific triggers and contexts)
4. **How to apply it** (numbered steps, detailed enough to follow; structure may vary by framework type)
5. **Example** (realistic, specific scenario; named company or detailed context, not generic)
6. **Pitfalls** (2–3 common mistakes with explanation)

### Content Types

The knowledge base began as a collection of frameworks. As it grows it also holds methodologies, models, and primers. Every entry declares one **Type** on a `**Type:**` line directly under its H2 title. The four types are:

- **Framework:** a structured model or template you apply to a specific decision or artefact, with a clear input and output. Examples: STP, Value Proposition Canvas, Good-Better-Best.
- **Methodology:** a repeatable practice or process you run over time (continuously or as a project), often with cadence, roles, and iteration. Examples: Win/Loss Analysis, Voice of the Customer, conjoint analysis.
- **Model:** a descriptive map or taxonomy that helps you classify a situation rather than produce an artefact. Examples: Kano Model, GTM Motion Model, a maturity model.
- **Primer:** an explainer that builds understanding but is not something you "apply". Example: a "GTM strategy vs product marketing" explainer.

Each type uses its own section order:

- **Framework:** What it is → When to use it → **Ownership** → How to apply it → Example → Pitfalls → See also.
- **Methodology:** What it is → When to use it → **How to run it** → **Cadence & ownership** → **Maturity stages** (optional) → Example → Pitfalls → See also.
- **Model:** What it is → When to use it → **Ownership** → **How to read it** → How to apply it → Example → Pitfalls → See also.
- **Primer:** What it is → Why it matters → **Key distinctions** → **Where PMM fits** → See also. No "How to apply it" and no Example/Pitfalls required.

**Ownership** (Framework and Model types; Methodology covers the same ground inside "Cadence & ownership") is one short paragraph naming who typically owns the decision/output versus who typically executes it, and noting that this shifts with company stage: a solo or founding PMM commonly owns outright what a specialised team hands off to Sales, RevOps, or a CEO once the company scales. This is not a hedge; it is a factual note on how ownership redistributes as headcount grows, matching the pattern already used in Methodology entries' "Cadence & ownership" sections (see T2D3 Framework or MEDDIC/MEDDPICC for the target voice).

Frameworks, methodologies, and models keep the 1000–1500 word target. Primers may run shorter (500–1000 words). Methodologies, models, and primers live in the same eight workflow categories as frameworks, tagged by type; only primers may sit in a separate `concepts/` area, because they are not applyable. See [ENRICHMENT-PLAN.md](ENRICHMENT-PLAN.md) for the full rationale and the roadmap of candidate additions.

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

### PMM vs GTM Scope

This is a product marketing knowledge base, not a go-to-market knowledge base. GTM is the company's strategic plan for selling (typically CEO/CRO-owned, spanning sales, marketing, and customer success); product marketing is one function that drives specific parts of that plan and contributes to the rest. The two overlap heavily, so scope decisions use a deliberately narrow test rather than "is this GTM-adjacent":

- **Inclusion test:** a candidate becomes a full entry if a PMM could plausibly be the one running it and producing its output, at some stage of company maturity, even if another function signs off on the result. Operating a study or process is enough; final approval authority is not required.
- **Exclusion test:** if PMM's role is input-only into something another function owns end-to-end by default (sales comp design, paid media mix modelling, CS health-score/renewal playbooks), it does not get a full entry. It may still get a short "PMM's role in X" note inside the owning function's framework, or a mention in a primer, but not a standalone 6-section (or equivalent) treatment.
- **Ownership varies by stage, and that is a feature, not an exception.** A framework can pass the inclusion test even where a specialised team usually owns it at scale, provided a solo or founding PMM plausibly owns it outright at an earlier stage. Document that variance in the entry's Ownership field (Framework, Model) or Cadence & ownership section (Methodology) rather than excluding the entry or pretending ownership is fixed.
- **Category 4's name ("Go-to-Market & Launch") is intentionally broad**, because launches and GTM motion selection are where PMM's contribution is heaviest; entries there still have to clear the inclusion test above like anywhere else, they are not exempt because the category is GTM-flavoured.
- **When assessing a new candidate**, ask "who runs this," not "does this relate to selling the product." Almost everything in commercial software relates to selling the product; the KB's boundary is who does the work, not which department's OKRs the work ladders up to.

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
├── GLOSSARY.md                  # PMM terminology (45+ terms)
├── ONBOARDING.md                # Role-based onboarding playbook for new PMM team members
├── FEEDBACK-LOG.md              # Monthly feedback session and annual review cadence log
├── FRAMEWORK-MAP.md             # Dependency map and workflow scenarios
├── decision-trees.md            # Symptom-to-situation triage tool (branching questions, not full sequences)
├── measurement-guide.md         # Baseline metric, cadence, and owner per entry, plus a roll-up dashboard template
├── FRAMEWORK-BACKLOG.md         # Candidate frameworks pending build (2026-07-09 gap analysis)
├── ENRICHMENT-PLAN.md           # Approved build queue of further frameworks and methodologies (2026-07-21)
├── SOURCE-VALIDATION-LOG.md     # Citation audit record: findings and resolutions (2026-08-12)
├── product-marketing-kb-task.md # Original task specification (reference)
│
├── frameworks/                  # Framework, methodology, and model files by workflow category
│   ├── 01-market-customer-understanding.md
│   ├── 02-positioning-messaging.md
│   ├── 03-competitive-strategy.md
│   ├── 04-go-to-market-launch.md
│   ├── 05-lifecycle-workflow.md
│   ├── 06-product-experience-adoption.md
│   ├── 07-strategy-planning.md
│   ├── 08-pricing-packaging.md
│   └── 09-sales-enablement.md
│
├── concepts/                    # Primers; explainers that are not something you "apply"
│   └── gtm-strategy-vs-product-marketing.md
│
├── quick-reference/              # One-page condensed cards per entry, mirroring frameworks/ by category
│   ├── 01-market-customer-understanding.md
│   ├── 02-positioning-messaging.md
│   ├── 03-competitive-strategy.md
│   ├── 04-go-to-market-launch.md
│   ├── 05-lifecycle-workflow.md
│   ├── 06-product-experience-adoption.md
│   ├── 07-strategy-planning.md
│   ├── 08-pricing-packaging.md
│   ├── 09-sales-enablement.md
│   └── concepts-primers.md
│
└── templates/                   # Working templates for quarterly planning, campaigns, and enablement
    ├── quarterly-planning-template.md
    ├── campaign-brief-template.md
    ├── sales-enablement-audit.md
    ├── weekly-standup-template.md
    └── competitive-intelligence-tracker.md
```

Not yet created: `case-studies/`, `archived/`. See PLAN.md for the roadmap; don't assume they exist.

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
- [ ] Word count is 1000–1500 words per framework (500–1000 for primers)
- [ ] Metrics and numbers are specific, not vague
- [ ] **Type declared** (Framework / Methodology / Model / Primer) and the entry follows that type's section template (see "Content Types")
- [ ] **Ownership stated** (Framework/Model: dedicated Ownership section; Methodology: inside Cadence & ownership) naming who typically owns the decision versus who executes, and how that shifts with company stage. Also passes the "PMM vs GTM Scope" inclusion test before being added at all (see "Content Principles").
- [ ] **Cross-doc consistency checklist run** when an entry is added or retagged; use the `add-kb-entry` skill, which lists every file that needs updating
- [ ] **Every fact, figure, quote, or attribution is cited.** Any claim about a real person, company, publication, or market statistic (a framework's origin, a named individual's finding, a benchmark presented as general fact) needs a source: a "Further reading" line, an inline citation with author/title/year, or a named report. If no defensible source exists, soften the claim (e.g. "commonly cited," "a widely held practitioner view") rather than stating it as fact. See [SOURCE-VALIDATION-LOG.md](SOURCE-VALIDATION-LOG.md) for the standard this follows and worked examples of both citations and hedged rewrites.
- [ ] **Fictional example companies are explicitly labelled as fictional.** An invented company used to illustrate a framework (as opposed to a real, verifiably-sourced case study) must say so in its first mention, e.g. "a fictional B2B SaaS company called X" or "X, a fictional Y." Don't leave an invented name unlabelled, even if the scenario is clearly illustrative to the author; a future reader may not know.

### Before Publishing Templates

- [ ] Template has been tested by at least one team member
- [ ] Instructions are clear and include an example or sample output
- [ ] Template reduces time to apply a framework (measure: before / after)

### Before Publishing Case Studies

- [ ] Outcomes are quantified (not "improved" but "improved by 35%")
- [ ] Timeline is clear (not "eventually" but "within 6 months")
- [ ] Company name or detailed enough context that it's believable

---

## Maintenance Cadence

Weekly, monthly, quarterly, and annual review cadences are tracked in PROGRESS.md, not here. Frameworks are organised by workflow stage (understand market → position → go to market → measure), not alphabetically; this is a hard rule, reflected in INDEX.md and BY-SITUATION.md.

Propose changes to this file via a commit to CLAUDE.md with clear justification in the commit message.
