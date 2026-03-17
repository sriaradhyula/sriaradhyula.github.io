---
title: "Spec-Kit: Scaffolding Projects with AI Coding Assistants"
date: 2026-03-17 10:00:00 -0700
categories: [Engineering, AI-Assisted Development]
tags: [spec-kit, claude-code, cursor, spec-driven-development, agentic-ai]
description: >-
  How GitHub's spec-kit provides spec-driven scaffolding for AI coding assistants
  like Claude Code and Cursor, and how we adopted it in the CAIPE project.
pin: true
---

## The Problem: AI Assistants Without Context

AI coding assistants like [Claude Code](https://docs.anthropic.com/en/docs/claude-code) and [Cursor](https://cursor.sh) are powerful — but they work best when they understand the **intent** behind your project, not just the code. Without guardrails, they tend to:

- Generate code that drifts from the original design
- Make inconsistent architectural choices across sessions
- Skip quality gates that your team requires
- Over-engineer solutions or add unrequested features

What if there was a way to give AI assistants a **constitution**, a **specification workflow**, and **institutional memory** — so every session starts with shared context?

That's exactly what [spec-kit](https://github.com/github/spec-kit) does.

## What Is Spec-Kit?

**Spec-kit** is a [Spec-Driven Development](https://github.com/github/spec-kit/blob/main/spec-driven.md) (SDD) framework from GitHub. It provides a structured workflow where **specifications are the source of truth** and code is the output.

At its core, spec-kit gives you:

1. **A `.specify/` directory** — the institutional memory of your project
2. **A constitution** — governing principles that all agents and engineers must follow
3. **Templates** — for specs, plans, tasks, and checklists
4. **Slash commands** — that work in both Claude Code and Cursor

The key insight is that AI assistants are **first-class contributors**. The `.specify/` directory is designed to be read by both humans and AI agents at the start of every session.

## The Spec-Driven Workflow

Spec-kit defines a four-phase pipeline that takes you from idea to production code:

```text
/speckit.specify <description>   → spec.md    (what and why)
/speckit.plan <tech choices>     → plan.md    (how)
/speckit.tasks                   → tasks.md   (execution order)
/speckit.implement               → source code + tests
```

### Phase 1: Specify

You describe a feature in natural language. The `/speckit.specify` command generates a `spec.md` that focuses on **what** users need and **why** — no implementation details.

```markdown
## User Stories
- As a platform engineer, I want to query incident status
  so that I can triage without switching tools.

## Acceptance Criteria
- [ ] Incidents are retrievable by ID
- [ ] Response includes severity, status, and assignee
- [ ] Query completes in under 2 seconds
```

The command automatically:
- Creates a numbered feature branch (`prebuild/feat/<###-feature-name>`)
- Generates a spec from your description
- Runs a quality validation checklist (completeness, clarity, measurability)
- Limits ambiguity markers to at most 3 critical questions

### Phase 2: Plan

`/speckit.plan` translates the spec into a technical implementation plan. It:

- Checks the plan against the **constitution** (more on this below)
- Generates `research.md` to resolve unknowns
- Produces `data-model.md` and API contracts
- Updates agent context files so the AI remembers tech choices

### Phase 3: Tasks

`/speckit.tasks` breaks the plan into a dependency-ordered, parallelizable task list:

```markdown
- [ ] T001 Create project structure per implementation plan
- [ ] T005 [P] Implement auth middleware in src/middleware/auth.py
- [ ] T012 [P] [US1] Create User model in src/models/user.py
- [ ] T014 [US1] Implement UserService in src/services/user_service.py
```

Tasks marked `[P]` can run in parallel. Tasks tagged `[US1]`, `[US2]` map back to user stories. The format is strict — every task has an ID, a description, and a file path.

### Phase 4: Implement

`/speckit.implement` executes tasks phase by phase, following TDD (tests before code), respecting dependencies, and marking tasks complete as it goes.

## The Constitution: Governing Principles for Agents

The most powerful concept in spec-kit is the **constitution**. It lives at `.specify/CONSTITUTION.md` and defines non-negotiable principles that every AI agent session must follow.

Here's a real example from the [CAIPE project](https://github.com/cnoe-io/ai-platform-engineering):

```markdown
### I. Specifications as the Source of Truth
All development begins with a specification. Code serves the
specification — not the other way around.

### VII. Test-First Quality Gates (NON-NEGOTIABLE)
No production code ships without passing its defined quality gates.
Tests are derived from specifications, not written after implementation.

### X. Simplicity and Avoiding Over-Engineering
Implement exactly what the specification requires — no more.
YAGNI applies to both engineers and agents.
```

The constitution also defines:
- **Branching conventions** (`prebuild/<type>/<description>`)
- **Commit style** (Conventional Commits + DCO sign-off)
- **Bug handling tiers** (spec violation vs. spec gap vs. design flaw)
- **Agent autonomy levels** (from tab-complete to background agents)

When `/speckit.plan` runs, it performs a **constitution check** — verifying that the implementation plan doesn't violate any governing principles.

## Directory Structure

Here's what `.specify/` looks like in practice:

```text
.specify/
├── CONSTITUTION.md            # Governing principles
├── ARCHITECTURE.md            # High-level architecture
├── TESTING.md                 # Quality gates and test strategy
├── SKILLS.md                  # Skills inventory and conventions
├── SPECS.md                   # Specs and plans conventions
├── CHANGELOG.md               # Version history
├── memory/
│   └── constitution.md        # Symlink → ../CONSTITUTION.md
├── templates/
│   ├── constitution-template.md
│   ├── spec-template.md
│   ├── plan-template.md
│   ├── tasks-template.md
│   ├── checklist-template.md
│   └── commands/              # Canonical slash command sources
│       ├── specify.md
│       ├── plan.md
│       ├── tasks.md
│       ├── implement.md
│       └── constitution.md
└── scripts/                   # Automation scripts
```

The `templates/commands/` directory contains the **canonical source** for slash commands. These are then copied to `.cursor/commands/speckit.*.md` (for Cursor) and `.claude/commands/speckit.*.md` (for Claude Code).

## How It Works with Claude Code and Cursor

### Cursor

Cursor reads commands from `.cursor/commands/`. When you type `/speckit.specify add user authentication`, Cursor loads the `speckit.specify.md` command file and follows its structured workflow — creating branches, generating specs, running validation.

### Claude Code

Claude Code reads commands from `.claude/commands/`. The same spec-kit commands are available as slash commands. Claude Code also reads `CLAUDE.md` at the repo root, which typically references the constitution and quality gates.

### Both Get the Same Context

Because the commands are **generated from the same templates** in `.specify/templates/commands/`, both tools follow identical workflows. The constitution, templates, and scripts are shared. This means:

- Switching between Claude Code and Cursor mid-project is seamless
- Both agents produce specs in the same format
- Quality gates are enforced consistently
- The institutional memory in `.specify/` is always the single source of truth

## Additional Commands

Beyond the core four-phase workflow, spec-kit includes:

| Command | Purpose |
|---------|---------|
| `/speckit.constitution` | Create or amend the project constitution |
| `/speckit.clarify` | Ask up to 5 targeted questions to reduce spec ambiguity |
| `/speckit.checklist` | Generate "unit tests for requirements" — validate spec quality |
| `/speckit.analyze` | Non-destructive cross-artifact consistency analysis |
| `/speckit.taskstoissues` | Convert tasks.md into GitHub Issues with dependencies |

The `/speckit.checklist` command is particularly interesting — it treats your **requirements as code** and generates checklist items that test whether the requirements themselves are complete, clear, and measurable:

```markdown
- [ ] CHK001 Are error handling requirements defined for all API
      failure modes? [Completeness]
- [ ] CHK002 Is 'fast loading' quantified with specific timing
      thresholds? [Clarity, Spec §NFR-2]
- [ ] CHK003 Are hover state requirements consistent across all
      interactive elements? [Consistency]
```

## How This Blog Was Scaffolded

This very blog site (`sriaradhyula.github.io`) was set up using Claude Code with the spec-kit methodology in mind:

1. **Created the repo** from the [chirpy-starter](https://github.com/cotes2020/chirpy-starter) template
2. **Configured** `_config.yml` with site metadata, Giscus comments (backed by GitHub Discussions), and analytics
3. **Wrote this post** by reading the spec-kit documentation directly from the source repo

The entire setup — repo creation, theme selection, configuration, and this blog post — was done in a single Claude Code session, demonstrating how AI assistants can bootstrap non-trivial projects when given the right context and workflow.

## Getting Started

To adopt spec-kit in your own project:

1. **Create the `.specify/` directory** with a constitution:

   ```bash
   # In Claude Code or Cursor:
   /speckit.constitution
   ```

2. **Define your principles** — what's non-negotiable? Testing requirements? Commit conventions? Security constraints?

3. **Start your first feature**:

   ```bash
   /speckit.specify add user authentication with OAuth2
   /speckit.plan using Python, FastAPI, and PostgreSQL
   /speckit.tasks
   /speckit.implement
   ```

4. **Copy commands** to both `.claude/commands/` and `.cursor/commands/` so your team can use either tool.

## Why This Matters

As AI coding assistants become central to engineering workflows, the bottleneck shifts from **writing code** to **maintaining intent**. Spec-kit addresses this by:

- Making specifications the durable artifact (code is regenerable)
- Giving AI agents a constitution to follow across sessions
- Standardizing the workflow so it works with any AI tool
- Providing quality gates that catch drift before it ships

The spec is the spec. The code is just one possible output.

---

*For more on spec-kit, see the [GitHub repo](https://github.com/github/spec-kit) and the [spec-driven development methodology](https://github.com/github/spec-kit/blob/main/spec-driven.md). For the CAIPE project that uses this approach, see [cnoe-io/ai-platform-engineering](https://github.com/cnoe-io/ai-platform-engineering).*
