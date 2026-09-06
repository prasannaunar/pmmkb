# Quiz Specification for PMMKB

**Status:** Approved specification, build not started.
**Last Updated:** 2026-09-06

This is the source-of-truth spec for the quiz feature described in PLAN.md's Phase 7. If a build session runs out of room partway through, resume from here rather than re-deriving the requirements; update the "Build progress" section at the bottom as work lands.

---

## Purpose

Quizzes exist to reinforce and retain the knowledge in the entry or category they sit under, so the reader finishes confident enough to take a framework, methodology, or model and implement it in their own work. They test whether the reader can recognise when to use something, apply it to a realistic situation, or diagnose what went wrong when it was misapplied. They are not a certification and not meant to catch the reader out on mundane detail.

---

## Counts

- **5 questions** per entry (framework, methodology, model, primer).
- **10 questions** per category (cross-framework judgment, not per-entry recall).

---

## Placement and design

- Embedded at the end of the page the quiz belongs to (entry page or category page).
- Must feel natively part of the page: same typography, colour palette, and spacing as the surrounding content.
- No separate "quiz mode", no pop-up or modal, no route change.

---

## Cognitive level

Target Bloom's Taxonomy levels 3 and 4 (Apply and Analyse). Avoid pure recall ("What are the five components of X?"). Test whether the reader can recognise when to use a framework, apply it to a realistic situation, or diagnose what went wrong when it was misapplied.

**Rule of thumb:** if a question can be answered by scanning a heading or bullet list without understanding the content, rewrite it.

---

## Question format

- Multiple choice, four options per question.
- One clearly correct answer; three plausible distractors.
- No "all of the above", "none of the above", or combination answers ("both A and C").

---

## Scenario-based stems

- At least **3 of 5** questions per entry, and **at least 7 of 10** per category, must be scenario-based.
- Present a realistic PMM situation in the stem, then ask the reader to choose the best course of action, identify the most likely cause of a problem, or select the most appropriate framework.
- Draw scenarios from the situations described in the entry's "When to use it" and "Pitfalls" sections.

Example stem pattern: *"A B2B SaaS company has just lost three competitive deals in a row to a new entrant. The sales team reports that prospects keep citing the competitor's messaging around speed of deployment. Which step should the PMM prioritise first?"*

---

## Distractor quality

- Distractors should reflect real misconceptions or common mistakes professionals actually make, not absurd or obviously wrong options.
- Where possible, draw distractors from the entry's "Pitfalls" section.
- Every distractor should be a defensible-sounding action a less experienced PMM might genuinely choose.
- Keep all four options similar in length, grammatical structure, and level of detail.

---

## Explanatory feedback

- Every answer, correct or incorrect, gets a brief explanation (2-3 sentences).
- Correct answers: reinforce why it is right and connect it back to the entry's core principle.
- Incorrect answers: explain why the option falls short and point the reader toward the reasoning that leads to the correct answer. Never just say "incorrect."

---

## Category quizzes: cross-framework judgment

- The distinguishing skill is not knowing what a single framework does, but knowing which one to reach for in a given situation, and why.
- At least half the 10 questions must present a situation and ask the reader to select the right framework, methodology, or model from that category.
- The remainder can go deeper into individual entries, but must stay at Apply or Analyse level.

---

## Tone

Professional but not stiff. Match the knowledge base voice: clear, direct, grounded in practice. Avoid academic phrasing ("Which of the following best exemplifies...") in favour of natural professional language ("What should the PMM do next?").

---

## What to avoid

- Definitions, dates, names of originators, or the number of steps in a process.
- Negative phrasing ("Which of the following is NOT...").
- Trick questions where two options are technically correct but one is "more correct." If a question needs that level of hair-splitting, it is testing the wrong thing.

---

## Deployment note: answer order

In the source markdown, the correct option is always written as **A** for every question, across every entry and category quiz. This is deliberate: it makes the content faster to write and review at the authoring stage. **The web app must randomise option order per question at render or session time** (e.g. shuffle the four options client-side before display, tracking which shuffled position maps to the correct answer) so a reader never sees "the answer is always A" as a pattern. This is a rendering-layer requirement, not a content-authoring one; do not reorder options in the markdown itself. Tracked in "Build progress" below and must be included whenever the web app wiring (still deferred) is scoped.

---

## Style rules (consistent with the rest of the knowledge base)

- **Progress indicator, not a score.** Show something like "4 of 5" or a simple progress bar, not a pass/fail grade. The goal is self-assessment and learning, framed as a check rather than a test.
- **Retry without penalty.** Readers can retake freely; no attempt limit, no penalty for retrying. Repeated retrieval attempts with feedback between them are one of the strongest drivers of long-term retention.
- Written in British English, no em dashes, matching CLAUDE.md's writing standards throughout question text, stems, options, and feedback.

---

## Implementation decisions (settled 2026-09-06)

1. **Where quizzes live in the source of truth.** Settled: a new `**Quiz:**` bold-label section inside each entry's existing markdown, placed as the last section (after `**See also:**`), matching the existing bold-label convention (`**What it is:**`, `**Sources:**`, etc.) rather than an H3 heading. Each question is a numbered list item containing the stem, four lettered options (`- **A.** ...` through `- **D.**`), a `**Correct answer: X.**` paragraph with reinforcing feedback, then three `*Why not X:*` paragraphs, one per incorrect option, in letter order. The web app's parser (`web/src/lib/content.ts`) will need extending to recognise and extract this block separately from prose when quiz rendering is built; that extension has not been done yet (content-only phase, see below).
2. **Category quiz placement.** Settled: a `## Category Quiz` H2 section at the very top of each category markdown file (`frameworks/0X-*.md`), before the first entry's H2, separated by the same `---` rule used between entries. Uses the same numbered-list question format as entry quizzes.
3. **Web app interactivity.** Deferred. This build pass is content-only: quiz markdown is written and structurally validated (correct answer + option counts) but not yet wired into the web app's parser or rendered with client-side state. Tracked as open work below.
4. **Which entries first.** Sequencing by category. Category 3 (Competitive Strategy) built first as the pilot, chosen because it has all three non-primer types (Framework, Methodology, Model) in one category.
5. **Quality gate integration.** Still open; not yet added to CLAUDE.md's publishing checklist or the `add-kb-entry` skill. Revisit once the format has been used across more than one category and any format issues have surfaced.

---

## Build progress

- [x] Decide open implementation questions above (source-of-truth format, category quiz file location; web app interactivity deferred).
- [x] **Category 3: Competitive Strategy — done (2026-09-06).** All 5 entries have a 5-question `**Quiz:**` section; 10-question `## Category Quiz` at the top of `frameworks/03-competitive-strategy.md`. 35 questions total.
- [x] **Category 1: Market & Customer Understanding — done (2026-09-06).** All 8 entries (STP, Complete Product Experience, Product Development Stage, Voice of the Customer, JTBD Switch Interview, ICP Development, Sean Ellis 40% Test, MAP Model) have a 5-question quiz; 10-question Category Quiz at the top of `frameworks/01-market-customer-understanding.md`. 50 questions total.
- [x] **Category 2: Positioning & Messaging — done (2026-09-06).** All 12 entries have a 5-question quiz; 10-question Category Quiz at the top of `frameworks/02-positioning-messaging.md`. 70 questions total.
- [ ] Category 4: Go-to-Market & Launch (11 entries) — not started.
- [x] **Category 5: Lifecycle & Workflow — done (2026-09-06).** All 3 entries (PMM Lifecycle Management, Go-to-Market Motion, Feature Adoption) have a 5-question quiz; 10-question Category Quiz at the top of `frameworks/05-lifecycle-workflow.md`. 25 questions total.
- [x] **Category 6: Product Experience & Adoption — done (2026-09-06).** All 7 entries have a 5-question quiz; 10-question Category Quiz at the top of `frameworks/06-product-experience-adoption.md`. 45 questions total.
- [x] **Category 7: Strategy & Planning — done (2026-09-06).** All 7 entries have a 5-question quiz; 10-question Category Quiz at the top of `frameworks/07-strategy-planning.md`. 45 questions total.
- [x] **Category 8: Pricing & Packaging — done (2026-09-06).** All 7 entries have a 5-question quiz; 10-question Category Quiz at the top of `frameworks/08-pricing-packaging.md`. 45 questions total.
- [x] **Category 9: Sales Enablement — done (2026-09-06).** All 5 entries have a 5-question quiz; 10-question Category Quiz at the top of `frameworks/09-sales-enablement.md`. 35 questions total.
- [ ] `concepts/gtm-strategy-vs-product-marketing.md` (the one Primer) — 5-question quiz only, no category quiz (concepts is not one of the 9 workflow categories).
- [ ] Wire quiz content into the web app (`content.ts` parser extension, rendering component, session-only state, progress indicator, retry, **client-side option-order randomisation per question** since the source markdown always writes the correct option as A) once content build is far enough along to be worth the engineering investment, or sooner if the user wants to validate rendering against the Category 3 pilot first.
- [ ] Update CLAUDE.md quality gates and `add-kb-entry` skill once the format is proven across more than one category.
