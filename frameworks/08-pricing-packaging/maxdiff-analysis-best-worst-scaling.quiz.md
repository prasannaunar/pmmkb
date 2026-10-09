# Quiz: MaxDiff Analysis (Best-Worst Scaling)

1. A team has 18 candidate features it wants to test in a full Conjoint Analysis study, but recognises this is far more than conjoint can handle rigorously. What should happen first?
   - **A.** Run a MaxDiff Analysis to narrow the 18 items to the genuinely contested few.
   - **B.** Proceed with the 18-item conjoint study, since MaxDiff only comes after conjoint.
   - **C.** Skip both methods and ask internal stakeholders to vote on what matters most.
   - **D.** Run a Van Westendorp study instead, since it reduces feature lists to size.

   **Correct answer: A.** This is exactly MaxDiff's named role: it is the standard pre-study for narrowing a longer feature list down to the genuinely contested few before committing to a full conjoint design, since conjoint's data quality degrades sharply past roughly 6 attributes.

   *Why not B:* This gets the sequence backwards. MaxDiff is specifically positioned as the pre-study that comes before conjoint, not after; proceeding directly with 18 items in a conjoint study is exactly the overload the pre-study is meant to prevent.

   *Why not C:* An internal stakeholder vote reflects opinion, not customer evidence; MaxDiff is specifically valuable because it produces a forced ranking based on actual customer responses rather than internal preference.

   *Why not D:* Van Westendorp answers a whole-product pricing question and does not rank or narrow feature lists at all; it is not the tool for reducing a long list of candidate features.

2. A team runs a rating-scale survey on 15 candidate messaging claims, asking respondents to rate each one's importance from 1 to 5. Nearly every claim scores "somewhat important," and the team cannot distinguish which claims actually matter most. What does this entry suggest instead?
   - **A.** MaxDiff Analysis forces a best-worst choice for real differentiation.
   - **B.** A larger rating-scale survey, since the original sample size was too small.
   - **C.** Conjoint Analysis, since it always replaces a failed rating-scale exercise.
   - **D.** Abandoning quantitative research for a single internal workshop discussion.

   **Correct answer: A.** This is exactly the named problem MaxDiff solves: a rating scale tends to cluster most items at "somewhat important" and fails to differentiate, unlike MaxDiff's forced best-worst choice across repeated subsets, which produces a genuine, differentiated ranking of the full list.

   *Why not B:* More respondents would not fix the underlying issue; a rating scale's tendency to cluster ratings is a structural property of the method itself, not a sample-size problem.

   *Why not C:* This is the adjacent method answering a different question. Conjoint analysis specifically tests feature-and-price trade-offs; it is a heavier, price-focused method, not the natural fix for a rating-scale importance-ranking problem where no price question is involved.

   *Why not D:* Abandoning quantitative research loses the evidence-based ranking a structured method like MaxDiff would provide; the entry recommends switching methods, not abandoning research entirely.

3. A team runs a MaxDiff study, gets a clear importance ranking, and then uses that ranking directly to set the price of the top-ranked feature. What is wrong with this approach?
   - **A.** MaxDiff's importance ranking says nothing about how much customers would pay.
   - **B.** Nothing is wrong; MaxDiff scores are already expressed in currency terms.
   - **C.** The team needed a larger MaxDiff sample size to generate price estimates.
   - **D.** MaxDiff should never be used before any pricing decision under any circumstances.

   **Correct answer: A.** Treating MaxDiff's importance ranking as a price signal is a named pitfall: MaxDiff ranks relative importance with no price ever shown to respondents. The fix is using MaxDiff to decide which items are worth pricing rigorously, then handing the narrowed list to Conjoint Analysis, Van Westendorp, or Gabor-Granger to actually answer the pricing question.

   *Why not B:* MaxDiff scores are relative importance measures (most minus least selected), not currency figures; they carry no price information regardless of scale or sample size.

   *Why not C:* This reaches for more of the right kind of data without fixing the design gap. No amount of additional sample size converts a relative importance score into a price estimate; MaxDiff's survey design never asks about price at all, so scaling up sample size does not add that missing dimension.

   *Why not D:* MaxDiff is explicitly useful before a pricing decision, specifically to narrow which items are worth pricing rigorously with another method; it is a valid and recommended precursor step, just not a pricing method itself.

4. A team wants to prioritise five candidate messaging claims for a Message Architecture refresh and considers running a full MaxDiff study to rank them. What does the entry suggest about this specific use case?
   - **A.** For a five-item list, a simpler direct ranking question gets a comparable answer.
   - **B.** MaxDiff should always be used, since it is more reliable than any simpler method.
   - **C.** Five items is the exact minimum threshold required before MaxDiff can be used.
   - **D.** A rating scale should be used instead, since it beats both MaxDiff and ranking here.

   **Correct answer: A.** Running MaxDiff with too short a candidate list is a named pitfall: MaxDiff's advantage is handling longer lists (10-plus items) that a rating scale would compress into an undifferentiated cluster; for a very short list of four or five items, a simpler direct ranking question gets a comparable answer without the added survey-design overhead.

   *Why not B:* The entry explicitly reserves MaxDiff for lists of roughly 10 items or more; for shorter lists, it recommends a simpler ranking exercise instead, not defaulting to MaxDiff regardless of length.

   *Why not C:* Five items is described as below the threshold where MaxDiff's advantages apply, not a minimum requirement; the entry's guidance is to use direct ranking for lists this short, not MaxDiff.

   *Why not D:* This picks the same family of fix, a simpler survey method, but the wrong one. A rating scale is explicitly named elsewhere as producing poor differentiation, clustering most items at "somewhat important"; direct ranking, not a rating scale, is the recommended alternative for a short list.

5. A MaxDiff study surveys both small-team owners and mid-market operations managers together and reports one blended importance ranking. The two personas' underlying preferences are, in reality, quite different. What risk does the blended reporting create?
   - **A.** A single blended score can average away real persona differences.
   - **B.** MaxDiff's forced-choice design makes it immune to blending different personas.
   - **C.** The risk applies only if fewer than 100 total respondents participated.
   - **D.** The fix is running the exact same blended survey again to check stability.

   **Correct answer: A.** Reading the blended, unsegmented ranking when personas diverge is a named pitfall, illustrated directly in the entry's own example: two personas ranked the same list very differently, and a single blended score can average away a genuine, actionable difference between them, masking priorities that should inform separate messaging or roadmap decisions.

   *Why not B:* The entry explicitly warns that blended scores can mask real, actionable persona-level differences; MaxDiff is not immune to this risk simply because of its forced-choice design.

   *Why not C:* This reaches for the right kind of evidence, sample size, at the wrong threshold. The risk of masking persona differences exists regardless of total respondent count above the minimum; the issue is whether the analysis is segmented, not the overall N.

   *Why not D:* Repeating the same blended survey does not surface the segment-level differences; the fix is scoring separately by persona when the sample allows, not re-running an identically blended study.
