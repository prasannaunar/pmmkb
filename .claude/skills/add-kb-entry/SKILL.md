---
name: add-kb-entry
description: Use when adding a new framework, methodology, model, or primer to the PMM knowledge base, or retagging an existing entry's Type or category. Walks through every doc that must stay in sync (category file, INDEX.md, README.md, FRAMEWORK-MAP.md, BY-SITUATION.md, PROGRESS.md, and any candidate queue), so nothing is left stale.
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

## 2. INDEX.md

Add a row to the entry's category table: Entry, Type, one-line Description.
Update the "Last Updated" line at the top with a short note on what changed.

## 3. README.md

- If the category's entry count changed, update the count in the category
  table (`## What's Inside`) and the headline total ("54 Entries Across...").
- Update the "Quality Assurances" status line if it references queue
  completion state.

## 4. FRAMEWORK-MAP.md

- Add the entry to the relevant dependency-matrix section (e.g. "Positioning
  Frameworks (Apply Second)").
- If it introduces a new dependency (builds on, or is built on by, another
  entry), note it there and cross-check the entry's own "See also" section
  matches.
- Only touch "Common Workflow Sequences" if the entry changes a named
  scenario's recommended sequence.

## 5. BY-SITUATION.md

Only if the entry maps to one of the existing numbered situations: add it to
that situation's recommended-frameworks list. Don't force a mapping if none
fits.

## 6. PROGRESS.md

Add a dated line to the version history noting what was built, and update the
entry-count breakdown (frameworks / methodologies / models / primers) at the
top of the file if the totals changed.

## 7. Candidate queues

If the entry came from ENRICHMENT-PLAN.md or FRAMEWORK-BACKLOG.md, mark that
candidate `✅ BUILT (YYYY-MM-DD)` in place; don't delete the entry from the
queue file.

## 8. Run the Quality Gates checklist

Before finishing, go through CLAUDE.md's "Before Publishing Framework
Changes" checklist, including the cross-doc consistency check this skill just
walked through.
