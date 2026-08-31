---
name: positioning-development
description: "Use when developing, refreshing, or stress-testing product positioning: nobody can explain what the product is, two teams pitch it differently, a competitor has repositioned, the product is entering a new segment or category, or someone asks for a positioning statement, positioning canvas, or category decision. Runs the evidence-first positioning process (best-fit customers, true competitive alternatives, unique attributes, value, segment, category) and produces a validated positioning canvas plus a positioning statement. Use it before any messaging, website copy, or launch narrative work."
metadata:
  author: "PMM Knowledge Base maintainers (github.com/prasannaunar/pmmkb)"
  kb-source: "frameworks/02-positioning-messaging.md; frameworks/01-market-customer-understanding.md"
  frameworks: "April Dunford 10-Step Positioning Process and 5-Component Canvas; Geoffrey Moore positioning statement; Jobs-to-be-Done; JTBD Switch Interview"
  format-spec: "Agent Skills open format, agentskills.io/specification"
  attribution: "See agent-skills/ATTRIBUTION.md"
  version: "1.0"
  last-updated: "2026-08-30"
---

# Positioning development

Positioning is a substance decision, not a wording decision. The output is a
canvas the company argues over and settles, then compresses into a statement.
Anyone who starts by drafting the sentence has skipped the work.

Paths below are relative to the knowledge base root. The full entries are in
`frameworks/02-positioning-messaging.md` (April Dunford's 5-Component
Positioning Canvas, Dunford's 10-Step Positioning Process, Geoffrey Moore's
Positioning Statement Framework, Jobs-to-be-Done Positioning Framework).

## Before starting: is positioning actually the problem?

Run this only when the substance is unsettled. Signals that it is: two internal
teams describe the product differently, buyers cannot restate what it does,
win/loss interviews show buyers comparing you to the wrong alternatives, or a
new segment, acquisition, or competitor entry has changed what "the
alternative" means. If positioning is settled and only the copy is
inconsistent, stop and use the `messaging-architecture` skill instead.

## Procedure

1. **Gather the evidence base.** Interview 8 to 12 of the happiest best-fit
   existing customers, not a hypothetical persona. Ask what almost stopped them
   buying, what they compared you to, and what they would tell a peer. If
   win/loss data already exists (`win-loss-programme`), mine it first; do not
   commission new research to re-learn what a closed-loss log already says.
2. **List true competitive alternatives.** Use the alternatives customers name,
   including "do nothing" and the manual workaround. The CRM's competitor list
   is a different thing and is not the input here.
3. **Isolate genuinely unique attributes.** List every attribute, then cut
   anything a credible alternative on the list also has. What survives is
   unique; the rest is merely good.
4. **Map each attribute to value.** For each one ask: what does this let the
   customer do or feel that they could not before? An attribute with no
   traceable value is engineering, not positioning.
5. **Determine who cares most.** Identify the segment that ranks this exact
   value set as its top buying criteria. Work backwards from the value, not
   forwards from a demographic definition of a market.
6. **Choose the market category.** Pick the frame of reference that makes the
   value obvious with the least explanation. Test at least two candidates: an
   established category the buyer already understands, and a narrower or
   adjacent one. Creating a new category is a multi-year commitment; if that is
   genuinely on the table, read Category Design in
   `frameworks/03-competitive-strategy.md` before choosing it.
7. **Add a trend only if a real one exists.** A genuine regulation change, cost
   pressure, or behaviour shift adds urgency. A manufactured trend destroys
   credibility. Skipping this step is a valid outcome.
8. **Validate cold with 5 to 8 target customers.** Present the positioning
   without preamble and ask them to describe, unprompted, what the product does
   and why it would matter to them. If their answer does not match the intent,
   return to step 3 or step 5. Do not proceed to a wording fix.
9. **Fill the canvas, then compress to a statement.** Complete
   `assets/positioning-canvas.md`. Only then write the Moore-style statement:
   "For [target customer] who [statement of need], the [product] is a
   [category] that [key benefit]. Unlike [primary alternative], our product
   [primary differentiation]."
10. **Align the organisation.** Brief sales, product, and support on the
    settled canvas as a brief, not a script. Positioning that lives only in a
    document does not change what a rep says on a call.

## Validation gate

Do not hand positioning to messaging until all four are true:

- [ ] Every unique attribute survives the "a credible alternative has this too" cut
- [ ] Every attribute traces to a value a customer stated in their own words
- [ ] Five or more target customers restated the positioning back accurately, cold
- [ ] The category choice was tested against at least one alternative frame

## Gotchas

- **The competitive set belongs to the customer.** Buyers routinely compare you
  to a spreadsheet, an internal tool, or an adjacent category the sales team
  never logs. Positioning written against the CRM's vendor list argues with a
  competitor the buyer was never considering.
- **Unique is not the same as valuable.** A unique attribute nobody asked for
  is a curiosity. Score every attribute on both uniqueness and stated
  importance, and keep only what scores on both.
- **Validation is not a preference test.** Asking "does this sound good?"
  produces polite agreement. Ask them to say what the product does, in their
  words, after hearing it once.
- **Do not position for the broadest addressable market.** The segment that
  cares most about this specific value set is smaller than the market the board
  deck describes, and it is the one the positioning is written for.
- **A merger, acquisition, or major product expansion invalidates step 3.**
  Unique attributes change when the product changes; re-run the cut rather than
  editing the old canvas.
- **Positioning that cannot survive a competitor quoting it accurately is not
  finished.** Test each claim by asking whether the strongest alternative could
  say the same sentence word for word.

## Output

Deliver the completed canvas (`assets/positioning-canvas.md`), the compressed
positioning statement, the evidence log (who was interviewed, what they said,
what was cut and why), and the named open questions. Hand off to
`messaging-architecture` only once the validation gate passes.

## See also

`messaging-architecture` (the next step, once this is settled),
`icp-definition` (the segment work that feeds step 5),
`competitive-battlecard` (deal-level use of the differentiation settled here),
`win-loss-programme` (the recurring evidence source for steps 1 and 2).

## Attribution

Derived from the Dunford, Moore, and Jobs-to-be-Done entries in
`frameworks/02-positioning-messaging.md`, which carry the full citations. Skill
format follows the Agent Skills open specification. See
[ATTRIBUTION.md](../ATTRIBUTION.md).
