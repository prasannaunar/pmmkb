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

## Style rules (consistent with the rest of the knowledge base)

- **Progress indicator, not a score.** Show something like "4 of 5" or a simple progress bar, not a pass/fail grade. The goal is self-assessment and learning, framed as a check rather than a test.
- **Retry without penalty.** Readers can retake freely; no attempt limit, no penalty for retrying. Repeated retrieval attempts with feedback between them are one of the strongest drivers of long-term retention.
- Written in British English, no em dashes, matching CLAUDE.md's writing standards throughout question text, stems, options, and feedback.

---

## Open implementation questions (not yet decided)

These need a decision before or during build; they are not part of the content spec above but will shape it:

1. **Where quizzes live in the source of truth.** The markdown files (`frameworks/*.md`, `concepts/*.md`) are the single source of truth parsed at build time by the web app (see PLAN.md Phase 6). Quizzes could be: (a) a new section within each markdown entry, parsed like the rest; (b) a parallel JSON/YAML file per entry; (c) a central quiz bank file. Given "embedded at the end of their respective pages" and "natively part of the page," and given the existing markdown-is-source-of-truth pattern, embedding as a markdown section per entry is the leading option, but needs confirming against how the web app's parser (`web/src/lib/content.ts`) would need to change to extract a structured Q&A block rather than prose.
2. **Category quiz placement.** Category markdown files (`frameworks/0X-*.md`) contain multiple entries; a 10-question category quiz needs to live at the category-page level, not inside any one entry's markdown. This likely means a separate source file per category quiz (e.g. `quizzes/0X-category-name.md` or similar), since it doesn't belong inside any single entry file.
3. **Web app interactivity.** The web app is currently a static, read-only view layer (Next.js, statically generated). Quiz state (selected answer, "4 of 5" progress, retry) needs client-side interactivity (React state, sessionStorage per Phase 7 sketch in PLAN.md) layered onto otherwise-static pages. No server-side persistence, no accounts.
4. **Which entries first.** 66 entries x 5 questions = 330 entry-level questions, plus 9 categories x 10 = 90 category-level questions (420 total). This is a large content-writing effort; may need to be sequenced (e.g. by category) across multiple sessions rather than attempted in one pass.
5. **Quality gate integration.** Whether quiz authoring gets added to the "Before Publishing Framework Changes" checklist in CLAUDE.md (e.g. "quiz present, 5 questions, correct scenario/recall ratio, feedback on every option") and to the `add-kb-entry` skill's checklist for new entries going forward.

---

## Build progress

- [ ] Decide open implementation questions above (source-of-truth format, category quiz file location, web app interactivity approach).
- [ ] Pilot: write quizzes for one entry and one category end-to-end, including web app rendering, to validate the format before scaling to all 66 entries + 9 categories.
- [ ] Scale to remaining entries, by category.
- [ ] Update CLAUDE.md quality gates and `add-kb-entry` skill once the format is proven.

_No entries or categories have quizzes yet as of this spec's creation._
