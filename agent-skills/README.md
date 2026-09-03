# Agent Skills for Product Marketing

**Last Updated:** 2026-08-30

Nine product marketing skills packaged in the open [Agent Skills](https://agentskills.io)
format, so an AI agent can run this knowledge base's methods rather than
paraphrase them from general training data.

Each skill encodes the procedure, the evidence gate, and the failure modes from
the corresponding entries in `frameworks/`. The knowledge base entries remain
the reference text a person reads; these skills are the operational version an
agent loads when it is asked to do the work.

---

## Why this is a separate area

Everything in `frameworks/`, `concepts/`, `quick-reference/`, and `templates/`
is written for people. This directory is written for agents, and follows a
different specification (`SKILL.md` files with YAML frontmatter, a `name` and
`description` that control when the skill activates, and bundled assets). It is
not part of the 66-entry count, it is not indexed in `INDEX.md`, and adding a
skill does not follow the `add-kb-entry` checklist. It has its own conventions,
set out below.

---

## The skills

| Skill | Use it when | Built from |
|---|---|---|
| [`pmm-framework-router`](pmm-framework-router/) | A symptom is described but no framework has been named | `decision-trees.md`, `framework-selector.md`, `BY-SITUATION.md` |
| [`icp-definition`](icp-definition/) | The question is who to sell to; leads are poor fit; segments compete for resource | Category 1 |
| [`positioning-development`](positioning-development/) | Nobody can explain what the product is, or the market has changed | Category 2 |
| [`messaging-architecture`](messaging-architecture/) | Positioning is settled but the words are inconsistent | Category 2 |
| [`competitive-battlecard`](competitive-battlecard/) | Sales needs to win against a named competitor | Category 9 |
| [`launch-planning`](launch-planning/) | Something is going to market and the plan is not settled | Categories 4 and 5 |
| [`win-loss-programme`](win-loss-programme/) | Why deals are won or lost is unclear | Category 6 |
| [`pricing-study-design`](pricing-study-design/) | A price or packaging decision needs evidence | Category 8 |
| [`quarterly-pmm-planning`](quarterly-pmm-planning/) | A quarter needs planning, or its scope needs defending | Category 7 |

Start with `pmm-framework-router` when the problem is not yet diagnosed; it
routes to the others.

---

## Installing them

A skill is a directory containing a `SKILL.md` file. Clients discover skills by
scanning a skills directory, so installation is a copy or a symlink.

**Claude Code (this repository only):**

```bash
mkdir -p .claude/skills
ln -s ../../agent-skills/positioning-development .claude/skills/positioning-development
```

**Claude Code (all your projects):**

```bash
cp -r agent-skills/positioning-development ~/.claude/skills/
```

**Everything else:** many agent clients support the format; see the
[client showcase](https://agentskills.io/clients) for the directory each one
scans.

Symlinking keeps the skills in step with this repository. Copying does not, so
re-copy after pulling changes.

**The skills reference knowledge base files by path** (`frameworks/02-positioning-messaging.md`
and similar), relative to the repository root. Install them alongside a
checkout of this repository, or the agent will follow the procedure without
being able to open the underlying entry.

---

## Validating a change

The Agent Skills project publishes a reference validator that checks
frontmatter and naming rules:

```bash
uvx --from git+https://github.com/agentskills/agentskills#subdirectory=skills-ref \
  skills-ref validate agent-skills/positioning-development
```

Run it on every skill you add or edit.

---

## Conventions for adding a skill here

1. **Directory name matches the `name` field.** Lowercase letters, numbers, and
   hyphens; no leading, trailing, or consecutive hyphens.
2. **The `description` decides whether the skill ever runs.** Write it
   imperatively, from the user's intent rather than the skill's mechanics, and
   list the phrasings a PMM would actually use, including ones that never name
   a framework. Under 1024 characters.
3. **Ground it in an existing entry.** Every procedural step should trace to a
   `frameworks/` entry, and the skill should name which. Do not write a skill
   for a method the knowledge base has not researched and cited.
4. **Keep `SKILL.md` under 500 lines.** Long templates and reference material
   go in `assets/` or `references/` and are loaded only when needed.
5. **Include a Gotchas section.** The highest-value content is the corrections
   an agent would otherwise get wrong: the competitive set belongs to the
   customer, a pillar without proof is a slogan, conjoint degrades past six
   attributes.
6. **Follow the repository writing standards** in [CLAUDE.md](../CLAUDE.md):
   British English, no em dashes, no hedging, specific numbers.
7. **Record attribution** in the frontmatter `metadata` block and in
   [ATTRIBUTION.md](ATTRIBUTION.md).
8. **Validate, then update** this README's table.

---

## Attribution and licensing

The format comes from the Agent Skills open standard; the content comes from
this knowledge base and the practitioners its entries cite. Full details,
including which entry and which originating author sits behind each skill, are
in [ATTRIBUTION.md](ATTRIBUTION.md).
