# Decision Trees: Which Framework Should I Use Right Now?

A fast triage tool. Answer two or three branching questions and land on the situation, scenario, and first framework to open; then jump to [BY-SITUATION.md](BY-SITUATION.md) or [FRAMEWORK-MAP.md](FRAMEWORK-MAP.md) for the full sequence.

**How this differs from BY-SITUATION.md:** BY-SITUATION.md assumes you already know which of the nine situations you're in and gives you the full framework sequence for it. This document is for the moment before that; when you only know the symptom (sales are losing deals, a customer is threatening to leave, leadership wants a number) and haven't yet worked out which situation you're actually facing. Each branch below ends by pointing at the matching situation, not by repeating its framework list.

---

## Master Tree

```
What's driving the work right now?
│
├─ A new product, market, segment, or price point is being launched
│   └─ See Branch 1: Something New Is Launching
│
├─ Something that used to work has stopped working
│   └─ See Branch 2: Something Is Broken
│
└─ A team, budget, or leadership question, not a single deal or launch
    └─ See Branch 3: Team, Budget, or Reporting Question
```

---

## Branch 1: Something New Is Launching

```
What's new?
│
├─ A product or feature
│   └─ → Situation 1: Launching a New Product (BY-SITUATION.md)
│      First open: Launch Tier Framework, to size the effort before anything else
│
├─ A market, geography, or customer segment
│   └─ Do you already have a working positioning that might carry over?
│      ├─ No, this segment is unlike anything sold before
│      │   └─ → Situation 2: Entering a New Market or Segment (BY-SITUATION.md)
│      │      First open: Product Development Stage Framework, to validate the problem exists here
│      └─ Yes, but you're not certain it will resonate
│          └─ → Situation 2: Entering a New Market or Segment (BY-SITUATION.md)
│             First open: Segmentation–Targeting–Positioning Framework, step 2 onward
│
└─ A pricing tier or packaging change
    └─ → Situation 6: Pricing a New Tier or Service (BY-SITUATION.md)
       First open: Value Proposition Canvas, to anchor price in perceived value before anything is drafted
```

---

## Branch 2: Something Is Broken

```
What broke?
│
├─ Deals are being lost
│   └─ Lost to a named competitor, or lost to "no decision" / internal confusion?
│      ├─ Lost to a named competitor
│      │   └─ Is this a market you're newly entering, or one you've competed in for a while?
│      │      ├─ Newly entering        → Situation 2: Entering a New Market or Segment
│      │      └─ Established market    → Situation 3: Competing Against Established Players
│      │         First open: Competitive Intelligence & Positioning Update Framework
│      └─ Lost to confusion, stalled deals, or reps improvising
│          └─ Do marketing, sales, and product each describe the offer differently?
│             ├─ Yes → Situation 8: Recovering from Messaging Misalignment
│             │      First open: Complete Product Experience Framework, to audit the seven touchpoints
│             └─ No, the pitch is consistent but reps lack tools for this segment
│                    → Situation 5: Enabling the Sales Team for a New Segment
│
├─ Customers are leaving (churn, downgrades, non-renewal)
│   └─ Is it concentrated in the first 90 days, or later in the lifecycle?
│      ├─ First 90 days   → Situation 4: Reducing Customer Churn
│      │                     First open: Customer Onboarding Maturity Framework
│      └─ Later, established accounts
│          └─ → Situation 4: Reducing Customer Churn
│             First open: Net Promoter Score (NPS) & Feedback Loop Framework, to segment and find the pattern first
│
└─ Messaging or positioning feels stale, even without a specific broken deal
    └─ Has a competitor, market shift, or internal rebrand happened since it was last set?
       ├─ Yes → Situation 8: Recovering from Messaging Misalignment
       └─ No, it's just been a while
              → Situation 3: Competing Against Established Players, step 1
                 (run Competitive Intelligence as a refresh, not a crisis response)
```

---

## Branch 3: Team, Budget, or Reporting Question

```
What's the question?
│
├─ "What is PMM actually delivering?" (leadership is asking for a number)
│   └─ → Situation 10: Measuring PMM Impact & ROI (BY-SITUATION.md)
│      First open: Win / Loss Analysis Framework, to attribute wins to specific messaging
│
├─ "I can't keep doing this all myself" (solo PMM, growing scope)
│   └─ → Situation 9: Scaling the PMM Function (BY-SITUATION.md)
│      First open: GTM Strategy vs Product Marketing primer, to confirm what's genuinely PMM's gap to fill
│
├─ "We want happy customers doing more of our selling for us"
│   └─ → Situation 7: Building a Customer Advocacy Programme (BY-SITUATION.md)
│      First open: Net Promoter Score (NPS) & Feedback Loop Framework, to find who your promoters already are
│
└─ "We need a plan for next quarter, not a one-off fix"
    └─ Open the Quarterly PMM Planning Framework (`frameworks/07-strategy-planning.md`) directly and use
       [templates/quarterly-planning-template.md](templates/quarterly-planning-template.md) to link each goal
       to the frameworks above that apply to it
```

---

## Still Not Sure Which Branch You're In?

Ask, in order:

1. **Is something launching, or something breaking?** If neither, it's probably Branch 3.
2. **If something's breaking, can you name the moment it started?** A specific lost deal, a churn spike, a rebrand. If yes, that moment usually tells you which leaf in Branch 2 applies.
3. **If you genuinely can't tell**, start with Win / Loss Analysis (if you have live deals to interview) or NPS & Feedback Loop (if you have an existing customer base); both are diagnostic first steps that will point you at the right situation once you see the data.

For the full framework sequence once you've landed on a situation, go to [BY-SITUATION.md](BY-SITUATION.md). For how frameworks feed into one another once you're mid-sequence, see [FRAMEWORK-MAP.md](FRAMEWORK-MAP.md).
