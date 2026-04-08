# PROJECT: Product Marketing Knowledge Base

## Goal

Build a consolidated, structured knowledge base of product marketing 
frameworks. Organised by where they are used in the product marketing 
workflow. Each framework entry includes: what it is, when to use it, 
how to apply it, and a real example.

## Deliverable

A set of markdown files in PROJECTS/pmm-kb/, one per category, plus 
an index file. Readable standalone. Dense with practical content, 
not summaries of summaries.

## Constraints

- LLM budget: $4 total across all cloud API calls
- Exa: use freely for research — this is the primary research tool
- Gemini (free tier): use for long-context synthesis only, once per 
  day maximum, keep prompts tight
- Local models: default for all writing, formatting, and organisation 
  tasks (Llama for general, Phi4 Mini for reasoning, Qwen Coder for 
  structured output)
- Haiku: reserve for final quality pass only — maximum $2 of the $4 
  budget. Do not use for research or drafting.
- Sonnet: do not use

## Model assignment

| Task                        | Model              |
|-----------------------------|--------------------|
| Web research queries        | Exa (not LLM)      |
| Summarising search results  | Llama 3.2 3B local |
| Structured formatting       | Qwen Coder 3B      |
| Multi-source synthesis      | Phi4 Mini local    |
| Long doc synthesis (1/day)  | Gemini 3.1 Pro     |
| Final quality pass          | Haiku (budget: $2) |

---

## Day 1 — Taxonomy and skeleton

**Objective:** Establish the category structure and populate the index. 
Do not write full entries yet.

**Tasks:**

1. Use Exa to search for "product marketing frameworks complete list", 
   "product marketing workflow stages", "PMM toolkit". Run 5–8 searches.

2. Using local model (Phi4 Mini), synthesise the search results into a 
   flat list of frameworks found, grouped loosely by theme.

3. Propose a category structure. Target 6–8 categories. Suggested 
   starting point (adjust based on research):
   - Market & Customer Understanding
   - Positioning & Messaging
   - Go-to-Market & Launch
   - Competitive Intelligence
   - Pricing & Packaging
   - Product Adoption & Retention
   - Sales Enablement
   - Measurement & Feedback

4. For each category, list the frameworks that belong there. Aim for 
   4–8 frameworks per category.

5. Write PROJECTS/pmm-kb/INDEX.md with the full taxonomy. Each entry 
   is one line: framework name, category, one-sentence description.

6. Create empty stub files for each category.

**Spawn as sub-agent:** Yes — one sub-agent per search cluster 
(3 sub-agents in parallel). Each searches, summarises locally, and 
returns a list of frameworks with sources.

---

## Day 2 — Framework research (categories 1–4)

**Objective:** Research and write full entries for the first four 
categories.

**Tasks:**

1. For each framework in categories 1–4, run 2–3 Exa searches:
   - "[framework name] explained"
   - "[framework name] product marketing example"
   - "[framework name] how to apply"

2. For each framework, use local model to draft an entry in this 
   structure:

   ```
   ## [Framework Name]
   
   **What it is:** One paragraph. No jargon.
   
   **When to use it:** Specific triggers — what situation, what 
   stage, what question it answers.
   
   **How to apply it:** Step-by-step or component breakdown. 
   Concrete enough to follow.
   
   **Example:** A real or realistic application. Named company or 
   plausible scenario. Shows the framework in action, not just 
   described.
   
   **Pitfalls:** One or two common mistakes when using this 
   framework.
   ```

3. Use Gemini (one call) to synthesise across the category and check 
   for gaps or overlaps. Pass it the full category draft as input. 
   Ask it to identify: missing frameworks, redundant entries, and 
   any examples that are too generic.

4. Revise based on Gemini output using local model.

**Spawn as sub-agents:** One sub-agent per category (4 in parallel). 
Each handles all research and drafting for its category and returns 
a completed markdown file.

---

## Day 3 — Framework research (categories 5–8)

**Objective:** Same process as Day 2, for the remaining four 
categories.

**Tasks:** Mirror Day 2 exactly. One Gemini call for synthesis. 
Four sub-agents in parallel.

**Additional task:** After sub-agents complete, run a cross-category 
pass with Phi4 Mini locally. Look for frameworks that appear in 
multiple categories and decide whether to consolidate or cross-link.

---

## Day 4 — Index, cross-links, and quality pass

**Objective:** Make the knowledge base coherent and navigable. 
Final quality check.

**Tasks:**

1. Update INDEX.md with final framework list, accurate category 
   assignments, and a one-sentence description for each entry.

2. Add a "See also" line to each framework entry pointing to related 
   frameworks in other categories.

3. Add a second index: PROJECTS/pmm-kb/BY-SITUATION.md. This maps 
   common product marketing situations to the frameworks that apply:
   - "Launching a new product"
   - "Entering a new market"
   - "Repositioning against a competitor"
   - "Reducing churn"
   - "Enabling the sales team"
   - "Pricing a new tier"
   Use Exa to find any situations not already covered. Draft with 
   local model.

4. Run Haiku over the full knowledge base (pass each category file 
   individually to stay within context). Ask it to: fix unclear 
   explanations, flag weak examples, and ensure consistent structure.
   Budget: $2 maximum. If a file passes without major issues, 
   stop early.

5. Apply Haiku's suggestions using local model.

6. Write a one-page PROJECTS/pmm-kb/README.md: what the KB covers, 
   how it is organised, how to use it, when it was last updated.

---

## Completion criteria

- [ ] INDEX.md lists all frameworks with category and description
- [ ] BY-SITUATION.md covers at least 6 situations
- [ ] Every framework has all five sections populated
- [ ] Every example is specific (named company or detailed scenario)
- [ ] No category file exceeds 3,000 words (split if needed)
- [ ] README.md written
- [ ] Total cloud LLM spend under $4

## Progress tracking

Update this file at the end of each day with:
- What was completed
- Any frameworks dropped or added and why
- Actual spend so far
- Any issues encountered
