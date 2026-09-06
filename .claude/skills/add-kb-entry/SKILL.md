---
name: add-kb-entry
description: Use when adding a new framework, methodology, model, or primer to the PMM knowledge base, or retagging an existing entry's Type or category. Walks through every doc that must stay in sync (category file, INDEX.md, README.md, FRAMEWORK-MAP.md, BY-SITUATION.md, and any candidate queue), so nothing is left stale.
---

# Adding or retagging a knowledge base entry

This repo's entries are cross-referenced from several documents. Missing one
of these steps is the most common way the docs drift out of sync, so work
through the list in order every time an entry is added, moved, or retagged.

## 1. Write or edit the entry itself

Put it in the right `frameworks/0N-*.md` category file (or `concepts/` if it's
a primer). Follow CLAUDE.md's Writing Standards and Content Types sections:
declare `**Type:**` under the H2 title, use that type's section order, hit
the word-count target, British English, no em dashes.

Cite every real-world fact as you write it, don't leave it for a later pass:
a framework's origin (who created it, what book/article, what year) needs a
"Further reading" line or an inline citation; any statistic or benchmark
presented as general fact needs a named source or a hedge ("commonly cited
as..."); any named real company, person, or quote needs the same. If the
example is an invented company rather than a sourced real case study, label
it explicitly as fictional on first mention. See
[SOURCE-VALIDATION-LOG.md](../../../SOURCE-VALIDATION-LOG.md) for the
standard and worked examples.

## 2. Write the entry's Quiz section

Every entry needs a `**Quiz:**` section as its last section (after
`**See also:**`): 5 questions, following
[QUIZ-SPEC.md](../../../QUIZ-SPEC.md) exactly — four options per question,
one correct, at least 3 of 5 scenario-based, explanatory feedback on every
option (correct and incorrect), the correct option always written as **A**
in the source (the web app shuffles display order; don't reorder options
yourself), no combination answers ("both A and C") or "all/none of the
above". Draw scenarios and distractors from the entry's own "When to use
it" and "Pitfalls" sections.

Check whether the entry should also appear in its category's existing
`## Category Quiz` (10 questions, at the top of the category file): if the
new entry names a genuinely distinguishing use case not yet covered by an
existing category-quiz question, consider adding or swapping in a question
for it. This isn't mandatory for every new entry, since a category quiz
tests judgement across entries rather than covering each one individually.

## 3. INDEX.md

Add a row to the entry's category table: Entry, Type, one-line Description.
Update the "Last Updated" line at the top with a short note on what changed.

## 4. README.md

- If the category's entry count changed, update the count in the category
  table (`## What's Inside`) and the headline total ("54 Entries Across...").
- Update the "Quality Assurances" status line if it references queue
  completion state.

## 5. FRAMEWORK-MAP.md

- Add the entry to the relevant dependency-matrix section (e.g. "Positioning
  Frameworks (Apply Second)").
- If it introduces a new dependency (builds on, or is built on by, another
  entry), note it there and cross-check the entry's own "See also" section
  matches.
- Only touch "Common Workflow Sequences" if the entry changes a named
  scenario's recommended sequence.

## 6. BY-SITUATION.md

Only if the entry maps to one of the existing numbered situations: add it to
that situation's recommended-frameworks list. Don't force a mapping if none
fits.

## 7. Candidate queues

All prior candidate-build queues (ENRICHMENT-PLAN.md, FRAMEWORK-BACKLOG.md,
EXTERNAL-REPO-GAP-ANALYSIS.md, NEW-SOURCES-GAP-ANALYSIS.md) are closed and
archived to `archived/`. If a new candidate queue is opened in the future,
log it in [PLAN.md](../../../PLAN.md)'s "Open work" section and mark
candidates built there in place; don't delete a candidate from the log once
built.

## 8. Run the Quality Gates checklist

Before finishing, go through CLAUDE.md's "Before Publishing Framework
Changes" checklist, including the cross-doc consistency check this skill just
walked through and the citation / fictional-labelling checks.
