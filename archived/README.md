# Archived Documents

**Archived:** 2026-09-05
**Status:** Pending re-scan before deletion. Do not delete these files yet; see "Start here next session" below.

This folder holds documents that no longer serve an active purpose in the
repository: closed candidate-build queues and a superseded quality-review
snapshot. They are historical record, not live workflow inputs. None of
them are referenced by any skill, template, or route that generates the
website; they were checked against every cross-reference in the repo before
being moved (see each entry below).

This is **not** the `archived/` folder CLAUDE.md's "Archive, don't delete"
principle describes for retired *frameworks*. No framework, methodology,
model, or primer has been archived. This folder is for planning and review
documents only.

All pending, non-archived plans and actions for the repository now live in
one place: **[PLAN.md](../PLAN.md)**. If you are looking for open work, start
there, not here.

---

## What's here and why

| File | Why archived |
|---|---|
| `FRAMEWORK-BACKLOG.md` | Candidate-build queue logged 2026-07-09. Fully built as of 2026-07-30 (all 12 candidates). No open items. |
| `ENRICHMENT-PLAN.md` | Candidate-build queue logged 2026-07-21. Fully built as of 2026-07-28, with its documentation follow-through (Part B) completed 2026-07-30. No open items. |
| `EXTERNAL-REPO-GAP-ANALYSIS.md` | Candidate-build queue logged 2026-08-13, sourced from a scan of 14 external GitHub repos. Fully resolved same day: 6 built, 1 rejected. No open items. |
| `NEW-SOURCES-GAP-ANALYSIS.md` | Candidate-build queue logged 2026-08-14, sourced from the PMA Advanced course index and calven.ai. Closed same day: 6 built, 2 rejected. No open items. |
| `IMPROVEMENTS-PLAN-2026-09.md` | September 2026 web-app feedback plan. Workstreams 1-5 are complete; Workstream 6 (SEO/GEO/AEO) had open and domain-deferred items, which have been carried forward into [PLAN.md](../PLAN.md)'s "Open work" section rather than left stranded in a closed-looking plan file. |
| `foundational-review.md` | A one-off quality audit dated 2026-04-09, scoped to the KB's original 19 frameworks. The KB has since grown to 66 entries across 9 categories plus a concepts area; this review does not cover roughly 70% of current content and was never part of the repository structure CLAUDE.md documents. Its two corrective findings (T2D3 and JTBD attribution) were actioned at the time and are superseded by the fuller SOURCE-VALIDATION-LOG.md audit (2026-08-12) and its 2026-09-05 Sources-block follow-up, which remain live at the repository root. |

## Cross-references updated when these moved

Several documents cited these files by name as historical record (dated
changelog entries in `FRAMEWORK-MAP.md` and `INDEX.md`, a `SOURCE-VALIDATION-LOG.md`
trigger note, a scope note in `frameworks/03-competitive-strategy.md`). Those
are prose mentions of what happened on a given date, not paths that need to
resolve, so they were left as-is. The following **did** contain working
markdown links or active instructions pointing at these files, and were
updated to either link into `archived/` or point at the new consolidated
location:

- `CLAUDE.md` — repository structure listing and the Content Types rationale
  link.
- `INDEX.md` — three links in the "Progress against README goals" section.
- `.github/pull_request_template.md` — the candidate-queue checklist item.
- `.claude/skills/add-kb-entry/SKILL.md` — step 6 ("Candidate queues").
- `FEEDBACK-LOG.md` — the "New Framework Proposals" section's pointer to
  where a recurring gap graduates to.

## Start here next session

**Before deleting anything in this folder**, re-scan the repository for any
reference to these six filenames that was missed in the 2026-09-05 pass
(`grep -rn "FRAMEWORK-BACKLOG\|ENRICHMENT-PLAN\|EXTERNAL-REPO-GAP-ANALYSIS\|NEW-SOURCES-GAP-ANALYSIS\|IMPROVEMENTS-PLAN-2026-09\|foundational-review" --include="*.md" .` from the repo root, excluding this folder itself), confirm nothing depends on these files still existing at any path, and confirm PLAN.md's "Open work" section still accurately reflects Workstream 6 of the retired improvements plan. If both check out clean, these six files can be deleted. If in doubt, leave them archived rather than deleting.
