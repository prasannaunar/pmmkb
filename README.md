# Product Marketing Knowledge Base

A structured, practical reference of 66 product marketing frameworks and methodologies; organised by workflow stage, indexed by situation. Built for product marketing professionals who need to apply proven methods to real challenges: positioning, go-to-market strategy, competitive intelligence, pricing, and customer advocacy.

Licensed under [CC BY 4.0](LICENSE). Contributions welcome.

---

## Quick Start

1. **Find your situation** in [BY-SITUATION.md](BY-SITUATION.md) or use the [decision trees](decision-trees.md) if you are not sure which situation fits
2. **Read the entry** from the [INDEX](INDEX.md) or directly from the category file in `/frameworks/`
3. **Apply the steps** from the "How to apply it" section with your own data and context
4. **Measure the outcome** using the success metrics included in each entry
5. **Grab the quick-reference card** from [quick-reference/](quick-reference/) when you need a one-page refresher

Not sure where to start? Skim the [framework selector](framework-selector.md) for a matrix by business goal, timeline, and data availability.

---

## What's Inside

### 66 Entries Across 9 Categories

Each entry declares a **Type** (Framework, Methodology, Model, or Primer) and follows a structured template. See [CLAUDE.md](CLAUDE.md) for what each type means.

| # | Category | Entries | File |
|---|----------|---------|------|
| 1 | Market & Customer Understanding | 8 | `frameworks/01-market-customer-understanding.md` |
| 2 | Positioning & Messaging | 12 | `frameworks/02-positioning-messaging.md` |
| 3 | Competitive Strategy | 5 | `frameworks/03-competitive-strategy.md` |
| 4 | Go-to-Market & Launch | 11 | `frameworks/04-go-to-market-launch.md` |
| 5 | Lifecycle & Workflow | 3 | `frameworks/05-lifecycle-workflow.md` |
| 6 | Product Experience & Adoption | 7 | `frameworks/06-product-experience-adoption.md` |
| 7 | Strategy & Planning | 7 | `frameworks/07-strategy-planning.md` |
| 8 | Pricing & Packaging | 7 | `frameworks/08-pricing-packaging.md` |
| 9 | Sales Enablement | 5 | `frameworks/09-sales-enablement.md` |
| — | Concepts (primers) | 1 | `concepts/gtm-strategy-vs-product-marketing.md` |

See [INDEX.md](INDEX.md) for the full taxonomy with type and description for every entry.

---

## How to Navigate

### By Situation

**Use [BY-SITUATION.md](BY-SITUATION.md) if you are dealing with:**
- Launching a new product
- Entering a new market
- Competing against established players
- Reducing customer churn
- Enabling the sales team for a new segment
- Pricing a new tier or service
- Building a customer advocacy programme
- Recovering from messaging misalignment
- Scaling your PMM function

### By Role

- **Positioning PMM:** Start with Category 2, then Category 1 for foundational research
- **Sales Enablement PMM:** Start with Category 9, then Category 4 for launch enablement
- **Segment PMM:** Start with Category 1, then Category 2 for segment-specific positioning
- **Product PMM:** Start with Category 5, then Category 6 for adoption and retention
- **Strategy / Planning:** Start with Category 7; use entries to structure quarterly work

### By Workflow Stage

Categories are ordered by workflow stage: understand your market (1) → position and message (2) → assess the competition (3) → go to market (4) → manage the lifecycle (5) → drive adoption (6) → plan and measure (7) → price and package (8) → enable sales (9).

---

## Each Entry Includes

**Frameworks** follow six standard sections:
1. **What it is**: a clear explanation, no jargon
2. **When to use it**: specific triggers and contexts
3. **Ownership**: who typically owns vs executes, and how that shifts with company stage
4. **How to apply it**: step-by-step instructions detailed enough to follow
5. **Example**: a realistic, specific scenario showing the entry in action
6. **Pitfalls**: common mistakes and how to avoid or recover from them

Methodologies, Models, and Primers each follow their own section template. See [CLAUDE.md](CLAUDE.md) for all four.

Every entry is designed to be **read standalone**, but entries often build on one another. Cross-references and the [dependency map](FRAMEWORK-MAP.md) show how they connect.

---

## Reference Materials

| Document | What it does |
|----------|-------------|
| [INDEX.md](INDEX.md) | Full taxonomy; every entry with type and description |
| [FRAMEWORK-MAP.md](FRAMEWORK-MAP.md) | Dependency map showing entry relationships and workflow sequences |
| [BY-SITUATION.md](BY-SITUATION.md) | Maps your challenge to the entries that apply |
| [decision-trees.md](decision-trees.md) | Branching questions when you are not sure which situation fits |
| [framework-selector.md](framework-selector.md) | Selection matrix by business goal, timeline, and data availability |
| [measurement-guide.md](measurement-guide.md) | Baseline metric, cadence, and owner for every entry |
| [GLOSSARY.md](GLOSSARY.md) | PMM terminology; 50+ terms grouped by theme |
| [quick-reference/](quick-reference/) | One-page condensed cards for every entry |
| [templates/](templates/) | Working templates for planning, campaigns, enablement, and CI tracking |
| [case-studies/](case-studies/) | Extended walkthroughs: STP, Value Proposition Canvas, Win/Loss, 10-Step PMM, GTM |
| [ONBOARDING.md](ONBOARDING.md) | Role-based onboarding playbook for new PMM team members |
| [agent-skills/](agent-skills/) | Nine PMM methods packaged as [Agent Skills](https://agentskills.io) for AI agents |
| [PLAN.md](PLAN.md) | Roadmap for polish and integration |
| [CLAUDE.md](CLAUDE.md) | Writing standards and content principles |

---

## Using the Knowledge Base

### In Quarterly Planning
Link each business goal to the entries most relevant to achieving it. The [quarterly planning template](templates/quarterly-planning-template.md) is designed for this.

### In Campaign Briefs
Reference positioning and go-to-market entries (Categories 2 and 4) in your campaign briefs. The [campaign brief template](templates/campaign-brief-template.md) includes a framework checklist.

### In Sales Enablement
Start with the Sales Enablement Maturity Model (Category 9) to diagnose where your function stands, then pull from Categories 3 and 4 for competitive strategy and launch execution.

### In Win/Loss Analysis
Use the Win/Loss Analysis entry (Category 1) to structure interviews; feed insights back into positioning and competitive intelligence.

### With an AI Agent
[agent-skills/](agent-skills/) packages nine methods as Agent Skills, the open format most AI coding and work agents read. Install a skill directory and the agent runs the procedure with evidence gates and known failure modes, rather than improvising from training data. Start with `pmm-framework-router` when you know the symptom but not the framework. See [agent-skills/README.md](agent-skills/README.md) for installation.

---

## Contributing

This knowledge base follows strict content standards documented in [CLAUDE.md](CLAUDE.md):

- **British English** throughout (spelling and conventions)
- **No em dashes**; semicolons and shorter sentences used instead
- **Specific, realistic examples** (not generic case studies)
- **Actionable pitfalls** with recovery steps
- **Measurable success criteria** (not vague outcomes)
- **Every claim cited** to a published source; fictional example companies labelled as such

See [SOURCE-VALIDATION-LOG.md](SOURCE-VALIDATION-LOG.md) for the citation audit standard.

### Proposing Changes

- **Found an error?** Open a PR with a clear justification.
- **Framework missing?** If you repeatedly encounter a challenge none of these entries address, propose it. Document the gap, the pattern, and your solution. If it holds up over 2-3 applications, it belongs here.
- **Content standard questions?** See [CLAUDE.md](CLAUDE.md) for the full working principles and quality gates.

---

## About

This knowledge base consolidates product marketing frameworks used across real product launches, go-to-market planning, competitive strategy, and customer adoption work. It is organised by workflow stage to mirror how PMMs actually work, and indexed by situation to support quick lookups during day-to-day challenges.

It is not a textbook. It is a reference guide you return to repeatedly as you face real problems. Every entry is here because it works; every example is here because it shows real execution.

**Total:** 66 entries (29 frameworks, 26 methodologies, 10 models, 1 primer) across 9 categories.
