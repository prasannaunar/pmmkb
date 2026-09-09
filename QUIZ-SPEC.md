# Quiz Specification for PMMKB

**Status:** Feature complete and live in the web app (rendering, click-to-reveal feedback, progress indicator, Retry, deterministic answer-order shuffle) for all 66 entries and all 9 category quizzes. **The distractor standard was tightened on 2026-09-09** after the existing questions proved answerable by picking the longest option; see "Distractor quality" below for the current rules and [QUIZ-REVISION-PLAN.md](QUIZ-REVISION-PLAN.md) for the batch programme bringing the 435 existing questions up to them.
**Last Updated:** 2026-09-09

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

**Revised 2026-09-09.** The original rules below were right but unenforced, and the 435 questions written against them are guessable: in 86% of them the correct answer is the longest option, and picking the longest one answers correctly more than three times as often as chance. The rules that follow make the standard specific enough to check, by hand and by script. Existing questions are being brought up to it batch by batch; see [QUIZ-REVISION-PLAN.md](QUIZ-REVISION-PLAN.md).

- Distractors should reflect real misconceptions or common mistakes professionals actually make, not absurd or obviously wrong options.
- Where possible, draw distractors from the entry's "Pitfalls" section.
- Every distractor should be a defensible-sounding action a less experienced PMM might genuinely choose, and should be defensible in a sentence before the feedback rebuts it.

### Options state the claim only

An option gives the action or the claim. It never argues for itself. No "since...", "because...", "a named pitfall", "as the framework says": that reasoning belongs in the feedback, where the reader meets it after committing to an answer. A correct option that explains why it is correct has answered the question for the reader, and is the single biggest reason the current set is guessable by length.

- ❌ *"Re-run the STP process, since a falling win rate and lengthening cycle are named triggers suggesting positioning no longer matches how the market or competitors have moved."*
- ✅ *"Re-run STP to test whether the target segment still matches who is buying."*

### One near miss per question

Every question carries exactly one distractor that is the right family of response, wrong in one specific and nameable way. The reader has to hold it against the correct answer and find the discriminator; that comparison is where the learning happens. The other two distractors stay as ordinary plausible-but-wrong options.

Choose the near miss's type from the situation in the stem. Type 5 is the natural default for category quizzes, which test choosing between entries.

| Type | The near miss is | Discriminator to name in feedback |
| --- | --- | --- |
| 1. Wrong sequence | The right work, done at the wrong point in the order | What has to be settled first, and what breaks if it is not |
| 2. Wrong scope | The right method aimed at too broad or too narrow a slice | Why this is a segment problem, not an account problem (or the reverse) |
| 3. Wrong evidence | The right conclusion drawn from internal opinion, a proxy metric, or too small a sample | What evidence would actually support the call |
| 4. Wrong owner or cadence | The right work handed to the wrong function, or run on the wrong rhythm | Who owns the decision here and why the timing matters |
| 5. Adjacent method | A neighbouring entry that answers a genuinely similar but different question | The question each method actually answers |
| 6. Correct but incomplete | Part of the right response, stopping short of the part that matters | What it leaves unresolved |

For type 5, take the adjacent method from the entry's own "See also" line: those pairings (Van Westendorp against Gabor-Granger, STP against ICP Development, Kano against MaxDiff) are already curated, and are exactly the confusions worth testing.

The near miss's feedback must name the discriminator. Not "this is not the best answer" but the specific thing that separates it from the correct option: the step it skips, the evidence it lacks, the scope it gets wrong.

### Length parity

- All four options within ±20% of that question's median option length.
- No option more than 25% longer than the longest of the other three.
- Across a category file, the correct answer is the longest option in no more than 35% of questions. Chance is 25%; the band leaves room for questions where the correct answer is genuinely the fullest statement.

Keep all four options similar in grammatical structure and level of detail, not just in length: four actions, or four diagnoses, not one of each.

### Checking it

`npm run audit:quiz` in `web/` reports these signals per question and per file, and `--list` shows every flagged question with its option lengths and flags. Run it on any file whose quiz you add to or edit.

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
- Trick questions where two options are technically correct but one is "more correct." If a question needs that level of hair-splitting, it is testing the wrong thing. A near miss is not this: it is genuinely wrong, for a reason the feedback can name in a sentence.

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
3. **Web app interactivity.** Done (2026-09-06). See `web/src/lib/quiz.ts` (parser + deterministic per-question option shuffle), `web/src/components/quiz-section.tsx` (client component: click-to-reveal feedback, progress indicator, Retry), and the wiring into `web/src/lib/content.ts`, `web/src/lib/entry-sections.ts`, `web/src/app/framework/[slug]/page.tsx`, and `web/src/app/category/[slug]/page.tsx`.
4. **Which entries first.** Sequencing by category. Category 3 (Competitive Strategy) built first as the pilot, chosen because it has all three non-primer types (Framework, Methodology, Model) in one category.
5. **Quality gate integration.** Still open; not yet added to CLAUDE.md's publishing checklist or the `add-kb-entry` skill. Revisit once the format has been used across more than one category and any format issues have surfaced.

---

## Build progress

- [x] Decide open implementation questions above (source-of-truth format, category quiz file location; web app interactivity deferred).
- [x] **Category 3: Competitive Strategy — done (2026-09-06).** All 5 entries have a 5-question `**Quiz:**` section; 10-question `## Category Quiz` at the top of `frameworks/03-competitive-strategy.md`. 35 questions total.
- [x] **Category 1: Market & Customer Understanding — done (2026-09-06).** All 8 entries (STP, Complete Product Experience, Product Development Stage, Voice of the Customer, JTBD Switch Interview, ICP Development, Sean Ellis 40% Test, MAP Model) have a 5-question quiz; 10-question Category Quiz at the top of `frameworks/01-market-customer-understanding.md`. 50 questions total.
- [x] **Category 2: Positioning & Messaging — done (2026-09-06).** All 12 entries have a 5-question quiz; 10-question Category Quiz at the top of `frameworks/02-positioning-messaging.md`. 70 questions total.
- [x] **Category 4: Go-to-Market & Launch — done (2026-09-06).** All 11 entries (3-Step, 7-Step, 10-Step PMM frameworks, Complete GTM Workflow Stages, T2D3, GTM Motion Model, Product-Led Growth, ABX/TEAM, Bullseye, Launch Tier Framework, Pre-mortem) have a 5-question quiz; 10-question Category Quiz at the top of `frameworks/04-go-to-market-launch.md`. 65 questions total — the largest category.
- [x] **Category 5: Lifecycle & Workflow — done (2026-09-06).** All 3 entries (PMM Lifecycle Management, Go-to-Market Motion, Feature Adoption) have a 5-question quiz; 10-question Category Quiz at the top of `frameworks/05-lifecycle-workflow.md`. 25 questions total.
- [x] **Category 6: Product Experience & Adoption — done (2026-09-06).** All 7 entries have a 5-question quiz; 10-question Category Quiz at the top of `frameworks/06-product-experience-adoption.md`. 45 questions total.
- [x] **Category 7: Strategy & Planning — done (2026-09-06).** All 7 entries have a 5-question quiz; 10-question Category Quiz at the top of `frameworks/07-strategy-planning.md`. 45 questions total.
- [x] **Category 8: Pricing & Packaging — done (2026-09-06).** All 7 entries have a 5-question quiz; 10-question Category Quiz at the top of `frameworks/08-pricing-packaging.md`. 45 questions total.
- [x] **Category 9: Sales Enablement — done (2026-09-06).** All 5 entries have a 5-question quiz; 10-question Category Quiz at the top of `frameworks/09-sales-enablement.md`. 35 questions total.
- [x] **`concepts/gtm-strategy-vs-product-marketing.md` (the one Primer) — done (2026-09-06).** 5-question quiz added; no category quiz, per the decision above (concepts is not one of the 9 workflow categories).

**Content build total: 66 entries × 5 questions (330) + 9 category quizzes × 10 questions (90) = 420 questions, all written and structurally validated (correct-answer count, option count, no combination answers, whitespace-clean).**

- [x] **Wire quiz content into the web app — done (2026-09-06).** Verified with `next build` (all 84 static pages), a scripted parser check (420/420 questions valid, exactly one correct option and full feedback each), and an interactive Playwright pass (click reveals feedback, progress updates, summary and Retry appear once all answered, Retry clears state).
- [x] **Update CLAUDE.md quality gates and `add-kb-entry` skill — done (2026-09-06).** New entries and category files now require a quiz section as part of the standard publishing checklist; see CLAUDE.md's "Quiz section (quiz standard)" and the `add-kb-entry` skill's updated checklist.

---

### Next: the distractor revision (opened 2026-09-09)

The content build above is complete and stays complete; what follows is a quality pass over the same 435 questions, not more of them. The option sets are guessable (correct answer is the longest option 86% of the time) and the distractors are too light to make a reader think. The standard was tightened on 2026-09-09; the questions have not been rewritten yet.

- [x] **Batch 0: rules and tooling (2026-09-09).** "Distractor quality" above rewritten; CLAUDE.md's quiz standard and quality gate updated; `add-kb-entry` skill updated; `web/scripts/audit-quiz.mjs` and `npm run audit:quiz` added.
- [ ] **Batches 1 to 10: rewrite the option sets, file by file.** Tracked in [QUIZ-REVISION-PLAN.md](QUIZ-REVISION-PLAN.md), which holds the evidence, the near-miss taxonomy, a before/after worked example, the batch list, and the progress table. **Start there**, at batch 1 (`frameworks/05-lifecycle-workflow.md`, the pilot).
- [ ] **Enforcement**, last: fold the audit thresholds into `web/scripts/verify-content.mjs` so `npm run test:content` fails on a regression. Deliberately deferred to the end of the programme so the build is not red throughout it.
