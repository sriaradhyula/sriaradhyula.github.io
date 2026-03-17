---
title: "Spec-Kit: Scaffolding Projects with AI Coding Assistants"
date: 2026-03-17 10:00:00 -0700
categories: [Engineering, AI-Assisted Development]
tags: [spec-kit, claude-code, cursor, spec-driven-development, agentic-ai]
description: >-
  How GitHub's spec-kit provides spec-driven scaffolding for AI coding assistants
  like Claude Code and Cursor, and how we adopted it in the CAIPE project.
pin: true
mermaid: true
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

```mermaid
flowchart LR
    A["Idea"] --> B["/speckit.specify"]
    B --> C["spec.md<br/><i>what & why</i>"]
    C --> D["/speckit.plan"]
    D --> E["plan.md<br/><i>how</i>"]
    E --> F["/speckit.tasks"]
    F --> G["tasks.md<br/><i>execution order</i>"]
    G --> H["/speckit.implement"]
    H --> I["Source Code<br/>+ Tests"]
    I --> J["PR Review"]

    style A fill:#4a9eff,color:#fff
    style I fill:#22c55e,color:#fff
    style J fill:#f59e0b,color:#fff
```

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

### Bug Handling Tiers

The constitution classifies bugs by their relationship to specifications:

```mermaid
flowchart TD
    BUG["Bug Discovered"] --> Q1{"Does a spec<br/>cover this behavior?"}
    Q1 -->|Yes| Q2{"Does code match<br/>the spec?"}
    Q1 -->|No| Q3{"Is it an<br/>edge case?"}

    Q2 -->|No| T1["Tier 1: Spec Violation<br/>Fix the code"]
    Q2 -->|Yes| T3["Not a bug — works as specified"]

    Q3 -->|Yes| T2["Tier 2: Spec Gap<br/>Update spec, then fix code"]
    Q3 -->|No| T3B["Tier 3: Design Flaw<br/>New spec via /speckit.specify"]

    style T1 fill:#22c55e,color:#fff
    style T2 fill:#f59e0b,color:#fff
    style T3B fill:#ef4444,color:#fff
```

### Agent Autonomy Levels

The constitution defines progressive autonomy levels, inspired by [The 8 Levels of Agentic Engineering](https://www.bassimeledath.com/blog/levels-of-agentic-engineering):

```mermaid
graph LR
    L1["L1: Tab Complete"] --> L2["L2: Agent IDE"]
    L2 --> L3["L3: Context Engineering"]
    L3 --> L4["L4: Compounding Engineering"]
    L4 --> L5["L5: MCP & Skills"]
    L5 --> L6["L6: Harness Engineering"]
    L6 --> L7["L7: Background Agents"]

    style L6 fill:#4a9eff,color:#fff,stroke:#2563eb,stroke-width:3px
```

> CAIPE targets **Level 6** (Harness Engineering) — agents have access to live data and feedback loops, while humans work on the system itself.
{: .prompt-info }

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

```mermaid
flowchart TB
    subgraph Templates [".specify/templates/commands/"]
        T1["specify.md"]
        T2["plan.md"]
        T3["tasks.md"]
        T4["implement.md"]
        T5["constitution.md"]
    end

    subgraph Cursor [".cursor/commands/"]
        C1["speckit.specify.md"]
        C2["speckit.plan.md"]
        C3["speckit.tasks.md"]
        C4["speckit.implement.md"]
        C5["speckit.constitution.md"]
    end

    subgraph Claude [".claude/commands/"]
        CL1["speckit.specify.md"]
        CL2["speckit.plan.md"]
        CL3["speckit.tasks.md"]
        CL4["speckit.implement.md"]
        CL5["speckit.constitution.md"]
    end

    T1 --> C1 & CL1
    T2 --> C2 & CL2
    T3 --> C3 & CL3
    T4 --> C4 & CL4
    T5 --> C5 & CL5

    style Templates fill:#6366f1,color:#fff
    style Cursor fill:#22c55e,color:#fff
    style Claude fill:#f59e0b,color:#fff
```

### Cursor

Cursor reads commands from `.cursor/commands/`. When you type `/speckit.specify add user authentication`, Cursor loads the `speckit.specify.md` command file and follows its structured workflow — creating branches, generating specs, running validation.

### Claude Code

Claude Code reads commands from `.claude/commands/`. The same spec-kit commands are available as slash commands. Claude Code also reads `CLAUDE.md` at the repo root, which typically references the constitution and quality gates.

A typical `CLAUDE.md` ties everything together:

```yaml
# CLAUDE.md (repo root)

## Git Workflow
- Branch naming: `prebuild/<type>/<description>`
- Conventional Commits + DCO required on every commit
- DCO: `Signed-off-by: Your Name <your@email.com>`
- Always create PRs with `gh pr create`

## Quality Gates
- `make lint`           # Ruff linting (Python)
- `make test`           # All tests
- `make caipe-ui-tests` # UI Jest tests
```

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

## What Generated Code Looks Like

When `/speckit.implement` runs, it produces code that traces back to the spec. Here's an example of a LangGraph agent generated from a CAIPE spec:

```python
# ai_platform_engineering/agents/pagerduty/graph.py
# Generated from: docs/docs/specs/087-pagerduty-agent/spec.md

from langgraph.graph import StateGraph, END
from langgraph.checkpoint.memory import MemorySaver
from typing import TypedDict, Annotated


class PagerDutyState(TypedDict):
    """State for the PagerDuty agent graph."""
    messages: Annotated[list, "Chat messages"]
    incident_id: str | None
    incident_data: dict | None
    action_result: str | None


def create_pagerduty_graph() -> StateGraph:
    """Build the PagerDuty agent execution graph.

    Spec acceptance criteria:
    - AC-1: Incidents are retrievable by ID
    - AC-2: Response includes severity, status, assignee
    - AC-3: Query completes in under 2 seconds
    """
    builder = StateGraph(PagerDutyState)

    builder.add_node("parse_request", parse_request)
    builder.add_node("fetch_incident", fetch_incident)
    builder.add_node("format_response", format_response)

    builder.set_entry_point("parse_request")
    builder.add_edge("parse_request", "fetch_incident")
    builder.add_edge("fetch_incident", "format_response")
    builder.add_edge("format_response", END)

    return builder.compile(checkpointer=MemorySaver())
```

And the corresponding test, derived directly from the spec's acceptance criteria:

```python
# tests/test_pagerduty_agent.py
import pytest
from unittest.mock import AsyncMock, patch


@pytest.mark.asyncio
async def test_fetch_incident_by_id():
    """AC-1: Incidents are retrievable by ID."""
    graph = create_pagerduty_graph()
    result = await graph.ainvoke({
        "messages": [],
        "incident_id": "P12345",
    })
    assert result["incident_data"] is not None
    assert result["incident_data"]["id"] == "P12345"


@pytest.mark.asyncio
async def test_incident_response_fields():
    """AC-2: Response includes severity, status, and assignee."""
    graph = create_pagerduty_graph()
    result = await graph.ainvoke({
        "messages": [],
        "incident_id": "P12345",
    })
    data = result["incident_data"]
    assert "severity" in data
    assert "status" in data
    assert "assignee" in data
```

> Every test function traces back to an acceptance criterion in the spec. If the spec changes, the tests change first — **Red-Green-Refactor** is enforced by the constitution.
{: .prompt-tip }

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

## The Full Picture

Here's how all the pieces fit together — from the `.specify/` institutional memory through to deployed code:

```mermaid
flowchart TB
    subgraph Memory [".specify/ — Institutional Memory"]
        CONST["CONSTITUTION.md"]
        ARCH["ARCHITECTURE.md"]
        TEST["TESTING.md"]
        SKILLS["SKILLS.md"]
        TMPL["templates/"]
    end

    subgraph Workflow ["Spec-Driven Workflow"]
        SPEC["spec.md<br/>What & Why"]
        PLAN["plan.md<br/>How"]
        TASKS["tasks.md<br/>Execution Order"]
        CODE["Source Code<br/>+ Tests"]
    end

    subgraph Tools ["AI Coding Assistants"]
        CC["Claude Code"]
        CU["Cursor"]
    end

    subgraph CI ["Quality Gates"]
        LINT["make lint"]
        UTEST["make test"]
        UITEST["make caipe-ui-tests"]
    end

    Memory -->|"Loaded at session start"| Tools
    Tools -->|"/speckit.specify"| SPEC
    SPEC -->|"/speckit.plan"| PLAN
    PLAN -->|"/speckit.tasks"| TASKS
    TASKS -->|"/speckit.implement"| CODE
    CODE --> CI
    CI -->|"Pass"| PR["Pull Request"]
    CONST -.->|"Constitution check"| PLAN

    style Memory fill:#6366f1,color:#fff
    style Workflow fill:#059669,color:#fff
    style CI fill:#dc2626,color:#fff
```

## Why This Matters

As AI coding assistants become central to engineering workflows, the bottleneck shifts from **writing code** to **maintaining intent**. Spec-kit addresses this by:

- Making specifications the durable artifact (code is regenerable)
- Giving AI agents a constitution to follow across sessions
- Standardizing the workflow so it works with any AI tool
- Providing quality gates that catch drift before it ships

The spec is the spec. The code is just one possible output.

---

*For more on spec-kit, see the [GitHub repo](https://github.com/github/spec-kit) and the [spec-driven development methodology](https://github.com/github/spec-kit/blob/main/spec-driven.md). For the CAIPE project that uses this approach, see [cnoe-io/ai-platform-engineering](https://github.com/cnoe-io/ai-platform-engineering).*
