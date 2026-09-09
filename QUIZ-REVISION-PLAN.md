# Quiz Revision Plan

**Status:** Not started. Step 0 (rules, tooling, this plan) is done; batches 1 to 9 are open.
**Last Updated:** 2026-09-09
**Owner doc for:** rewriting all 435 existing quiz questions to the revised distractor standard.
**Read with:** [QUIZ-SPEC.md](QUIZ-SPEC.md) (the standard itself) and CLAUDE.md's "Quiz section (quiz standard)".

A session picking this up should read "The two problems", "The revised standard", and "The worked example", then start at the next unticked batch in "Work programme". Everything needed to do a batch is in this file.

---

## Why this exists

A reader tested the live quizzes and answered more than ten questions correctly in a row without knowing the material, by picking the longest option every time. The questions themselves are sound: the stems are realistic, scenario-led, and drawn from each entry's own "When to use it" and "Pitfalls". The option sets are what fail. They are guessable from shape alone, and the wrong options are too easy to eliminate to make anyone think.

Measured across every question in the repository (`npm run audit:quiz` in `web/`):

| Signal | Count | Share |
| --- | --- | --- |
| Total questions audited | 435 | |
| Correct answer is the longest option | 373 | **86%** |
| Correct answer is more than 25% longer than every distractor | 293 | 67% |
| No distractor within 80% of the correct answer's length | 293 | 67% |
| Option lengths spread more than 40% around the median | 396 | 91% |
| Only the correct option explains its own reasoning | 81 | 19% |
| At least one option no reader would seriously consider | 40 | 9% |
| Questions with no flag at all | 8 | 2% |

Mean correct answer: 156 characters. Mean distractor: 93. Guessing by length beats chance by more than three times, on every file, in every category.

---

## The two problems

### Problem 1: the correct option carries its own justification

This is the mechanical cause of the length tell, and it is nearly universal. The pattern in the current set is that the correct option states the action *and* argues for it, while distractors state only an action:

> **A.** Re-run the STP process, **since a falling win rate and lengthening cycle are named triggers suggesting positioning no longer matches how the market or competitors have moved.**
> **B.** Increase the sales team's discount authority so reps can close deals faster despite the longer cycle.

The bolded clause is the answer to the question. It is doing the reader's thinking for them, and it makes the option 60% longer than its neighbours. It also duplicates the feedback, which already says the same thing at greater length.

**Fix:** options state the claim or action only. Every "since", "because", "a named pitfall", "which is why" clause moves into the feedback, where the reasoning belongs and where the reader meets it *after* committing to an answer.

### Problem 2: no option is close enough to the correct one to be worth weighing

Two thirds of questions have no distractor within 80% of the correct answer's weight, and the wrong options tend to be wrong in obvious ways: a different activity entirely (run ads, discount harder), a claim of no consequence, or a plainly bad practice. A reader eliminates all three without engaging with the framework.

**Fix:** every question gets exactly one **near miss**: an option that is the right family of response, wrong in one specific and nameable way. The reader has to hold the two candidates side by side and find the discriminator; that comparison is the learning. Its feedback then names the discriminator explicitly, which is where most of the teaching value of a question actually sits.

---

## The revised standard

These rules are now in QUIZ-SPEC.md under "Distractor quality" and summarised in CLAUDE.md's quality gate. They apply to every new question as well as to this revision.

1. **Options state the claim or action only.** No self-justifying clause, no reference to the entry ("a named pitfall", "as the framework says"). The reasoning goes in the feedback.
2. **Exactly one near miss per question**, chosen from the taxonomy below.
3. **Length parity.** All four options within ±20% of the question's median option length. No option more than 25% longer than the longest of the others.
4. **No throwaway options.** Every distractor is something a competent but less experienced PMM might genuinely choose, and can be defended in a sentence before the feedback rebuts it.
5. **The near miss's feedback names the discriminator.** Not "this is not the best answer" but the specific thing that separates it from the correct option: the step it skips, the evidence it lacks, the scope it gets wrong.
6. **Per file, the correct answer is the longest option in no more than 35% of questions.** Chance is 25%; the band leaves room for questions where the correct answer is naturally the fullest statement.

### Near-miss taxonomy

Pick the type that fits the situation in the stem. Type 5 is the natural default for category quizzes, which test choosing between entries.

| Type | The near miss is | Discriminator to name in feedback |
| --- | --- | --- |
| 1. Wrong sequence | The right work, done at the wrong point in the order | What has to be settled first, and what breaks if it is not |
| 2. Wrong scope | The right method aimed at too broad or too narrow a slice | Why this situation is a segment problem, not an account problem (or the reverse) |
| 3. Wrong evidence | The right conclusion drawn from internal opinion, a proxy metric, or too small a sample | What evidence would actually support the call |
| 4. Wrong owner or cadence | The right work handed to the wrong function, or run on the wrong rhythm | Who owns the decision here and why the timing matters |
| 5. Adjacent method | A neighbouring entry that answers a genuinely similar but different question | The question each method actually answers |
| 6. Correct but incomplete | Part of the right response, stopping short of the part that matters | What it leaves unresolved |

For type 5, pull the adjacent method from the entry's own "See also" line: those pairings (Van Westendorp against Gabor-Granger, STP against ICP Development, Kano against MaxDiff) are already curated and are exactly the confusions worth testing.

### What does not change

- Stems. They are good, they are scenario-led, and rewriting them is out of scope. Edit a stem only where the revised options need a fact it does not currently give.
- Counts: 5 per entry, 10 per category quiz, 4 options each.
- The **A**-is-always-correct authoring convention. The app shuffles display order (`web/src/lib/quiz.ts`); never reorder options in the markdown to vary the letter.
- Feedback for the correct answer and for the two ordinary distractors, except where text moves in from a trimmed option or a rewritten distractor needs new feedback.
- The scenario-majority rule (3 of 5, 7 of 10) and the Bloom's level 3 to 4 target.

---

## The worked example

`frameworks/01-market-customer-understanding.md`, STP, question 1. Use this as the pattern for the whole revision.

**Before** (correct option 172 characters against 101/126/101; no near miss; the correct option argues its own case):

```
1. Win rates have been falling for two quarters and sales cycles are stretching out, even though the product itself has not changed. What should the PMM do first?
   - **A.** Re-run the STP process, since a falling win rate and lengthening cycle are named triggers suggesting positioning no longer matches how the market or competitors have moved.
   - **B.** Increase the sales team's discount authority so reps can close deals faster despite the longer cycle.
   - **C.** Wait for the next annual planning cycle to review segmentation, since STP is meant to be revisited on a fixed yearly schedule.
   - **D.** Launch a new advertising campaign to generate more top-of-funnel leads and offset the lower win rate.
```

**After** (74/75/68/74 characters; B is a type 1 near miss; every justification has moved into the feedback):

```
1. Win rates have been falling for two quarters and sales cycles are stretching out, even though the product itself has not changed. What should the PMM do first?
   - **A.** Re-run STP to test whether the target segment still matches who is buying.
   - **B.** Rewrite the positioning statement for the segment the team already targets.
   - **C.** Wait for annual planning, when segmentation is scheduled for review.
   - **D.** Raise rep discount authority so the slower deals still close this quarter.

   **Correct answer: A.** A falling win rate and a lengthening cycle with no product change is exactly the trigger STP names: the market or a competitor has moved, and the segmentation the positioning was built on may no longer describe who is actually buying. Start by re-testing the segment, because every downstream message depends on getting that right.

   *Why not B:* This is the right kind of work in the wrong order. Rewriting the statement assumes the segment is still correct, and a sharper statement aimed at the wrong buyer will not recover the win rate. Re-test segmentation and targeting first; the statement is what you rewrite once you know who it is for.

   *Why not C:* STP should be revisited whenever the market, product, or competitive set shifts meaningfully, not only on a fixed annual cadence. Waiting for the calendar to catch up lets the misalignment compound for another two quarters.

   *Why not D:* Discounting treats the symptom deal by deal without addressing why the win rate is falling across the board. If positioning has drifted, the same pattern recurs at a lower price.
```

Note what happened to the near miss's feedback: it went from a generic rebuttal to naming the discriminator ("the right kind of work in the wrong order"). That sentence is the point of the question.

---

## Work programme

435 questions across 11 files. Batches are sized to fit comfortably in one session with room to verify; a batch is a unit of commit.

- [x] **Batch 0. Rules and tooling.** QUIZ-SPEC.md updated with the revised distractor standard and the near-miss taxonomy; CLAUDE.md's quiz quality gate updated; `web/scripts/audit-quiz.mjs` and `npm run audit:quiz` added; this plan written. *(2026-09-09)*
- [ ] **Batch 1. Pilot: `frameworks/05-lifecycle-workflow.md`** (3 entries + category quiz, 25 questions). Smallest file, so the pattern gets settled cheaply. **Stop after this batch and re-read the result end to end.** If the standard needs adjusting, adjust QUIZ-SPEC.md and this plan before batch 2, not after batch 9.
- [ ] **Batch 2. `frameworks/03-competitive-strategy.md`** (5 entries + category quiz, 35) **and `concepts/gtm-strategy-vs-product-marketing.md`** (1 primer, 5). 40 questions.
- [ ] **Batch 3. `frameworks/09-sales-enablement.md`** (5 entries + category quiz, 35) **and the three path quizzes in `web/src/lib/guides.ts`** (15). 50 questions. The path quizzes are TypeScript tuples, not markdown, and their options are already shorter and closer in length; they mostly need a near miss added and one or two throwaways replaced.
- [ ] **Batch 4. `frameworks/06-product-experience-adoption.md`** (7 entries + category quiz, 45).
- [ ] **Batch 5. `frameworks/07-strategy-planning.md`** (7 entries + category quiz, 45).
- [ ] **Batch 6. `frameworks/08-pricing-packaging.md`** (7 entries + category quiz, 45). Type 5 near misses are especially available here: the four pricing-research methods are routinely confused with each other.
- [ ] **Batch 7. `frameworks/01-market-customer-understanding.md`** (8 entries + category quiz, 50). Question 1 of STP is already drafted in "The worked example" above.
- [ ] **Batch 8a. `frameworks/02-positioning-messaging.md`**, first 6 entries + category quiz (40).
- [ ] **Batch 8b. `frameworks/02-positioning-messaging.md`**, remaining 6 entries (30).
- [ ] **Batch 9a. `frameworks/04-go-to-market-launch.md`**, first 6 entries (30).
- [ ] **Batch 9b. `frameworks/04-go-to-market-launch.md`**, remaining 5 entries + category quiz (35).
- [ ] **Batch 10. Lock it in.** Once every file is under the thresholds, promote the audit into the build: call `audit-quiz.mjs`'s checks from `web/scripts/verify-content.mjs` so `npm run test:content` fails on a regression, and note the enforcement in QUIZ-SPEC.md. Do this last; running it earlier just means a red build for the length of the programme.

### How to run a batch

1. `npm --prefix web run audit:quiz -- --list --file <path>` to see every flagged question in the file and why.
2. Work entry by entry, all 5 questions of an entry at a time, with the entry's own "When to use it" and "Pitfalls" sections open. The near miss should come from the entry's material, not invented.
3. For each question: trim the justification out of the correct option, replace the weakest distractor with a near miss from the taxonomy, level the four lengths, then rewrite the near miss's feedback to name the discriminator. Check the other feedback still matches its option.
4. British English, no em dashes, correct option stays as **A**.
5. Verify: `npm --prefix web run audit:quiz -- --file <path>` (correct-is-longest at or under 35%, no `correctDominant`, `rationaleOnly`, `throwaway` or `noNearMiss`), then `npm --prefix web run test:content`, then `npm --prefix web run build`.
6. Tick the batch here, and commit.

### What the audit flags mean

`correctLongest` the correct option is the longest of the four. `correctDominant` it is more than 25% longer than every distractor. `spread` the four options differ by more than 40% of the median length. `rationaleOnly` the correct option explains itself and fewer than two distractors do. `throwaway` an option matches a list of phrasings no reader would pick ("no consequence", "only fails if", "abandon positioning"). `noNearMiss` the closest distractor is under 80% of the correct answer's length, which is a proxy for weight, not for substance: a question can clear it and still lack a real near miss, so the length check never substitutes for reading the option set.

---

## Progress

| File | Questions | Revised | Correct-is-longest |
| --- | --- | --- | --- |
| `frameworks/01-market-customer-understanding.md` | 50 | 0 | 86% |
| `frameworks/02-positioning-messaging.md` | 70 | 0 | 87% |
| `frameworks/03-competitive-strategy.md` | 35 | 0 | 83% |
| `frameworks/04-go-to-market-launch.md` | 65 | 0 | 91% |
| `frameworks/05-lifecycle-workflow.md` | 25 | 0 | 76% |
| `frameworks/06-product-experience-adoption.md` | 45 | 0 | 80% |
| `frameworks/07-strategy-planning.md` | 45 | 0 | 84% |
| `frameworks/08-pricing-packaging.md` | 45 | 0 | 87% |
| `frameworks/09-sales-enablement.md` | 35 | 0 | 89% |
| `concepts/gtm-strategy-vs-product-marketing.md` | 5 | 0 | 100% |
| `web/src/lib/guides.ts` (path quizzes) | 15 | 0 | 87% |
| **Total** | **435** | **0** | **86%** |

Update this table at the end of each batch from the audit output.
