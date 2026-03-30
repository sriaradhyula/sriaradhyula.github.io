---
title: "Software Engineering in the Agentic Era: Discipline Is the Multiplier"
date: 2026-03-29 00:00:00 +0000
categories: [Engineering, Agentic AI]
tags: [agentic-ai, sdlc, platform-engineering, harness-engineering, spec-driven-development, software-engineering]
description: >-
  Agents don't know the intent of what is being created nor can define the quality
  of the outcome. Humans do. But humans need to enable agents to create disciplined
  software. A practitioner's principles on where the SDLC is heading in the agentic era.
pin: true
mermaid: true
---

*Agents don't know the intent of what is being created nor can define the quality of the outcome. Humans do. But humans need to enable agents to create disciplined software.*

---

## The Discipline That Prepared Us for This Moment

Back in grad school, Software Engineering was one of my favorite courses. It is now taught as a complete graduate program at my [alma mater](https://academics.utdallas.edu/fact-sheets/ecs/ms-software-engineering/), and for good reason. That course and my professional experience taught me the discipline between coding for fun and a rigorous, process-driven approach to releasing complex software. Think of a manufacturing plant or an assembly line: inputs are defined, quality is measured at every stage, and the final product ships because the *system* works like a clockwork. A well-oiled software engineering organization runs like clockwork: release managers and program managers deciding what goes into a release and what gets cut, bugs ruthlessly scrubbed daily as release dates approach and quality gates rigorously automated and vetted. I have seen my share of that clockwork in large production systems, and I have never stopped appreciating it.

Software Engineering, as the name suggests, is the **engineering optimization** of software: process-driven, disciplined, systematic. And here is what excites me most about the agentic era: the principles that make software engineering a discipline — specification, verification, quality gates, feedback loops, supply chain integrity — are not threatened by AI agents writing code. They are **more important than ever**. The question is how we evolve that discipline to match the extraordinary speed at which agentic coding is reshaping the SDLC.

That is the conversation I want to have in this post. Not vibe coding. Not weekend prototypes. Those tools will provide a solid start for rapid prototyping and quick proof-of-concepts. But for any company where software is the product, where longevity matters, where teams need to collaborate and maintain what they ship: **how do we make agentic software development secure, sustainable, team-based, and enterprise-grade?**

At a recent meetup with software engineering leaders, the energy around this question was palpable. There is consensus that SDLC loops driven by agentic AI will become commonplace in near future, and the smartest leaders in the room were already asking the right follow-up: *How do we put business problems ahead of coding speed? How do we organize teams around this? Where does more code actually create more value, and where does discipline create more value?* These are exactly the right questions, and they are engineering questions, not hype questions.

Everyone has a vantage point shaped by where they sit. Mine spans nearly two decades across the full stack of software delivery — from real-time embedded systems and test automation to cloud infrastructure, SRE, platform engineering, and now agentic AI platforms. I have built things, led teams, and sat in rooms with both business leaders shaping strategy and engineers shipping under pressure.

What follows are principles I have derived as informed by experience, grounded in what I am seeing across the industry, about where Software Engineering, Platform Engineering, and the SDLC are heading. I am leaning in on this shift, not just because the technology is impressive (though it is), but because I believe the discipline of software engineering has prepared us for exactly this moment.

---

## Principle 1: Agentic Coding Is a Paradigm Shift, Not Just Another Automation


In every prior software industry shift: Waterfall to Agile, monoliths to microservices, on-premises to cloud, the rise of DevOps, the emergence of Platform Engineering, human engineers were always the principal authors of software artifacts. CI/CD tooling improved, test automation increased, end user feedback cycles accelerated. Yet throughout all of it, humans wrote the code, reviewed the code, and decided what to ship.

The move from Waterfall to Agile brought iterative cycles and tight feedback loops. This shift happened alongside the explosion of cloud-native and SaaS models, making scalability, resilience, and continuous delivery the new cornerstones. Out of that convergence came the [12 Factor App methodology](https://www.12factor.net/): twelve pragmatic rules for portable, maintainable cloud-era systems. DevOps followed, dissolving the wall between dev and ops. Platform Engineering is the latest iteration of that evolution, giving teams self-service platforms and paved paths so engineers could focus on solving business problems rather than managing infrastructure.

Each transition was real. None displaced the human as the author of the code. In the agentic era, that assumption is being tested. Consider the early experiments that hint at what is coming:

[OpenAI's Harness Engineering team](https://openai.com/index/harness-engineering/) ran an internal experiment where three engineers built a internal beta application with over a million lines of code, with zero manually written code, by driving Codex agents through pull requests and CI workflows. They averaged 3.5 PRs per engineer per day over five months. It is early, and the approach has clear limitations, but their takeaway is worth sitting with: the engineer's primary job shifted from writing code to designing environments, specifying intent, and building feedback loops.

[Anthropic's agent teams experiment](https://www.anthropic.com/engineering/building-c-compiler) explored what happens when you give 16 parallel Claude instances a single goal: build a C compiler from scratch. Over nearly 2,000 sessions and $20,000 in API costs, the agents produced a 100,000-line Rust compiler that can build the Linux kernel on x86, ARM, and RISC-V. The researcher's takeaway was not about the compiler itself. It was about what he learned designing harnesses for long-running autonomous agents: how to write tests that keep agents on track, how to structure parallel work, and where the approach hits its ceiling. These are unsolved problems, but the fact that they are now *tractable* problems is the shift.

[Stripe's Minions](https://www.infoq.com/news/2026/03/stripe-autonomous-coding-agents/) coding agents now produce over 1,300 merged pull requests per week, supporting code that processes over $1 trillion in annual payment volume. A developer posts a task in Slack; the agent writes the code, passes CI, and opens a PR. All code is human-reviewed but contains no human-written code. Stripe's core design pattern is what they call "blueprints": orchestration flows that alternate between fixed, deterministic code nodes and open-ended agent loops.


[Cloudflare's Vinext project](https://blog.cloudflare.com/how-we-rebuilt-next-js-with-ai-in-one-week/) rebuilt a Next.js-compatible runtime in one week using agent-driven development, shipping with over 1,700 tests and 380 end-to-end tests at a total API cost of approximately $1,100. The quality was not the result of exceptional code review. It was the result of a test harness the agents could not escape.

[GitHub's Squad project](https://github.blog/ai-and-ml/github-copilot/how-squad-runs-coordinated-ai-agents-inside-your-repository/) is exploring repository-native orchestration: specialist agents work inside your repo that coordinate in parallel, loading shared team decisions and project history from committed files. It is early-stage and evolving, but the direction is clearly moving towards agentic coding loop.

_None of these are solved problems. Every team is still learning and discovering new failure modes. But they share a common thread: the engineer's job has shifted from writing code to designing the systems that make agent-written code reliable, validated, and conformant to organizational and industry standards._

> **Key takeaway:** The shift is not that humans are less important. It is that where humans add value has fundamentally moved — from authoring artifacts to designing the systems that govern them.

## Principle 2: Humans Own Product Intent. Humans Own Quality Outcomes. Agents Own Implementation.

This is the most important principle in this entire piece, and it is the one I want every engineering leader to internalize.

AI agents are extraordinarily capable code generators. But they do not know **why** you are building something. They do not understand the business outcome you are optimizing for. They do not know whether the feature you are asking them to build is the right feature, or whether it will create regulatory exposure, or whether it conflicts with a strategic decision of your product.

**Humans own product intent. Humans own quality outcomes. Agents own implementation.**

This framing is liberating, not limiting. It means the engineering discipline shifts upstream, to the work that has always been the hardest and most valuable part of software engineering: understanding the problem deeply, defining what success looks like, specifying constraints clearly enough that machines can operate within them, and verifying that the output meets the standard.

[Spec-Driven Development (SDD)](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html) is the emerging methodology that brings order to the agentic era. Instead of using AI coding agents merely as autocomplete on steroids, SDD elevates the specification itself to the primary, human-authored artifact; code is then generated from these specifications as a byproduct. Tools like [GitHub's spec-kit](https://github.com/github/spec-kit)operationalize this idea, offering a structured, four-phase workflow: specify, plan, tasks, and implement—while providing integration across 22+ agent platforms. In practice, we have adopted spec-kit workflows in our projects using the `.specify/` directory, constitution files, and slash commands; see my detailed write-up: [Spec-Kit: Scaffolding Projects with AI Coding Assistants](https://sriaradhyula.github.io/posts/spec-kit-scaffolding-with-ai-coding-assistants/). Across open-source communities I collaborate with, such as [CNOE's ai-platform-engineering](https://github.com/cnoe-io/ai-platform-engineering), spec-driven patterns are now the default for orchestrating agent work in platform engineering and beyond.


> **Key takeaway:** Your most important investment will be in better specifications, better acceptance criteria, better architectural decision records, and better feedback loops.

---

## Principle 3: Humans Define the Guardrails. Agents Do the Work.

Agents will do exactly what their guardrails allow. An agent session without encoded standards is a session operating without your organization's hard-won judgment about what good looks like. The most valuable thing you can encode is not syntax rules. It is organizational intelligence.

**Tests and acceptance criteria.** When code is generated at machine speed, your test suite is your immune system. Unit tests, integration tests, property-based tests, mutation testing, static analysis, security scanning: these are not overhead. They are the quality signal that closes the loop. Every failed test is a feedback signal that makes the next agent run better. Acceptance criteria must be explicit enough that the gap between "agent thinks it is done" and "it is actually done" is verifiable by a machine.

**Architectural constraints.** Agents need to know what they cannot do as much as what they can. Encode your architectural decision records as linter rules, structural tests, and harness constraints. If your organization has decided against a particular framework, data access pattern, or dependency, make that constraint mechanical, not conversational.

**Organizational standards encoded as skills.** Agent platforms like Claude Code support custom skills and AGENTS.md files that encode reusable procedures. Package your organization's coding standards, preferred patterns, deployment processes, and review checklists as agent-callable skills. An agent that knows your org's standards before it starts is not just more productive; it is conformant to organizational and industry standards from the first line it generates.

**Non-functional requirements and trade-offs.** Database migrations, schema changes, backward compatibility, data integrity, latency budgets, cost modeling: these are the decisions that keep production systems alive. Agents do not have the judgment to make these trade-offs. Encode your NFR expectations into acceptance criteria and harness constraints, and humans define the boundaries.

**Security posture and threat modeling.** The agentic era demands that threat modeling be applied to the development process itself, not just the software being built. Your build pipeline, your agent configuration, and your MCP server connections are all part of your threat surface. Tools like Cisco's [mcp-scanner](https://github.com/cisco-ai-defense/mcp-scanner) and [skill-scanner](https://github.com/cisco-ai-defense/skill-scanner) help audit your agent tooling surface for vulnerabilities before they become attack vectors.

> **Key takeaway:** An agent operating without encoded standards is an agent operating without your organization's judgment. Encode everything that matters: standards, patterns, constraints, security rules. The guardrails you fail to encode are the mistakes your agents will make at scale.

---

## Principle 4: The SDLC Is Evolving Again, Into the Agentic Development Lifecycle

The evolution is well documented:

1. **Waterfall**: Sequential, predictable, brittle. Worked when requirements were stable and change was expensive.
2. **Agile**: Iterative, adaptive, human-centric. Worked when the bottleneck was feedback loops between humans.
3. **DevOps**: Continuous delivery, infrastructure as code, shift-left testing. Worked when the bottleneck was the wall between dev and ops.
4. **Platform Engineering**: Golden paths, self-service infrastructure, internal developer platforms. Worked when the bottleneck was cognitive load and toil imposed on application teams by platform complexity.

```mermaid
flowchart LR
    W["📋 Waterfall<br/>Plan-driven<br/>sequential"]
    AG["🔄 Agile<br/>Iterative<br/>human-centric"]
    DV["🚀 DevOps<br/>Continuous delivery<br/>shift-left"]
    PE["🛤️ Platform Eng<br/>Golden paths<br/>self-service"]
    CB["💬 Chatbot &<br/>Coding Agents<br/>AI-assisted<br/>individual"]
    AU["🤖 Autonomous<br/>Coding Agents<br/>Spec-driven<br/>team-scale"]
    GT["🏭 Gas Town<br/>Parallel multi-agent<br/>full autonomy"]
    AD["⚙️ ADLC<br/>Harness-guided<br/>ship loops"]

    W --> AG --> DV --> PE --> CB --> AU --> GT --> AD

    style W fill:#495057,color:#fff
    style AG fill:#1864ab,color:#fff
    style DV fill:#0c8599,color:#fff
    style PE fill:#2f9e44,color:#fff
    style CB fill:#6741d9,color:#fff
    style AU fill:#3b5bdb,color:#fff
    style GT fill:#e8590c,color:#fff
    style AD fill:#1d3557,color:#fff,stroke:#ffd60a,stroke-width:3px
```

Each transition from left to right shortened the feedback loop between intent and working software. The first four stages kept the human as the primary author of every artifact. The right half flips that assumption. Most teams in 2026 are somewhere between Chatbot/Coding Agents and Autonomous Coding Agents — the ADLC is the disciplined methodology that governs how you operate anywhere in that right half, and Gas Town represents what the far right of the spectrum looks like in practice today.

Agentic development does not just shorten the loop further. It introduces an **inner loop** where agents iterate autonomously within the guardrails set by humans.

I am calling this the **Agentic Development Lifecycle (ADLC)**. Its defining characteristics:

**[Spec-Driven Development](https://github.com/github/spec-kit) replaces task-driven development.** The primary artifact shifts from code to specifications. The insight is that specs are not a return to Waterfall, because when the cost of regenerating code from an updated spec drops to nearly zero, the economics change completely. You can iterate on specifications at the speed of thought rather than the speed of typing.

**The human becomes the architect, not the bricklayer.** The word "Engineering" means making trade-offs and design choices. In the ADLC, the engineer's output is intent, constraints, and verification — not implementation. As one practitioner [put it](https://embracingenigmas.substack.com/p/exploring-gas-town): "The limiting factor is how quickly you can feed ideas and specifications into the system."

**Ship loops become the heartbeat.** Taking a leaf from MLOps and LLM fine-tuning: think of software as a continuous loop that needs to be trained and validated until the desired outcomes are achieved or the maximum allowable budget is reached. Each iteration through the specify-execute-verify-deliver cycle refines the output. The agent is not a one-shot generator; it is a participant in a convergence loop.

```mermaid
flowchart TD
    S["📋 Specify<br/>Intent · constraints<br/>acceptance criteria"] --> E["🤖 Execute<br/>Agent produces code,<br/>tests, docs, IaC"]
    E --> V["✅ Verify<br/>Lint · unit tests<br/>security · arch gates"]
    V -->|"Fail → harness learns"| E
    V -->|Pass| D["🚀 Deliver<br/>CD pipeline +<br/>observability"]
    D --> O["👁 Observe<br/>Production signals<br/>runtime feedback"]
    O --> S
    style S fill:#1d3557,color:#fff
    style D fill:#1d3557,color:#fff
    style O fill:#2d6a4f,color:#fff
```

> **Key takeaway:** Map your current delivery process against the ADLC loop. Identify the weakest link — specification clarity, verification coverage, or feedback latency — and invest there first.

---

## Principle 5: There Is a Spectrum — From Chatbot Coding to Gas Town. Know Where You Are.

One of the most useful framings I have encountered is thinking of agentic software development not as a binary state — either you have AI or you don't — but as a **spectrum of maturity**.

At one end: **chatbot-based agentic coding**. A developer opens a chat interface, pastes code, asks for changes, copies the result back. Useful for individual productivity. Genuinely helpful. But not a paradigm shift — the human is still the primary author, and the feedback loop still runs through the developer's fingers.

At the other end: **[Gas Town](https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04)**. A multi-agent orchestrator coordinating 20 to 30 autonomous Claude Code instances in parallel, with a merge queue that batches requests, runs verification gates, and merges to main using a bisecting queue. Code at machine speed, around the clock. The Kubernetes analogy is apt: both systems coordinate unreliable workers toward persistent goals, separating control logic from ephemeral execution. This is a genuine paradigm shift in what it means to produce software.

**The Agentic Development Lifecycle occupies the critical middle of that spectrum** — the zone where teams have moved beyond single-session productivity tools but have not yet built the infrastructure for fully autonomous multi-agent orchestration. It is characterized by:

- **Human-authored specifications** as the primary engineering artifact
- **Single or small-scale agent sessions** executing against those specs, within defined harnesses
- **CI-gated verification** closing the loop on every agent run
- **Human review** of agent-produced PRs before merge

Moving along the spectrum is not inevitable — it is a deliberate engineering and organizational investment:

| Stage | What You Build | What Unlocks Next |
|---|---|---|
| Chatbot Coding | Better prompts, context hygiene | Structured specs and harnesses |
| **ADLC** | **Specs, harnesses, CI gates, human review** | **Parallel agent infrastructure** |
| Gas Town | Merge queues, worktree orchestration, autonomous verification | Fully autonomous ship loops |

The important insight: **you do not need to reach Gas Town to capture enormous value.** The ADLC — specify, execute, verify, deliver — is already a step change in team-scale productivity. Gas Town is the horizon. The ADLC is the immediate opportunity for most organizations in 2026.

This framing also clarifies where to invest. Optimizing for individual developer productivity (chatbot end)? Invest in better prompts and context. Optimizing for team-scale agentic delivery (ADLC)? Invest in specifications, harnesses, and CI gates. Building toward autonomous multi-agent orchestration (Gas Town end)? Invest in parallelism infrastructure, merge queues, and human-in-the-loop escalation paths.

> **Key takeaway:** Place your team honestly on the spectrum. The gap between where most teams think they are and where they actually are is the biggest risk. Make only the investment that unlocks the next stage — and be honest about the gap between where you are and where the marketing says you are.

---

## Principle 6: Harness Engineering Is the Discipline That Makes Quality and Speed Coexist

Nobody wants inferior, insecure software delivered at machine speed. When agents generate code faster than humans can review it, quality cannot live in the review queue. It has to live in the harness.

[Cloudflare's Vinext project](https://blog.cloudflare.com/how-we-rebuilt-next-js-with-ai-in-one-week/) is perhaps the most striking recent demonstration. Built with agent-driven development, the project shipped with over 1,700 tests and 380 end-to-end tests at a total API cost of approximately $1,100. The quality was not the result of exceptional code review. It was the result of a test suite the agents could not escape.

[Stripe's Minions architecture](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) reinforces the same principle at production scale. Every Minion runs in a sandboxed VM with no production access. A three-tier feedback loop: local linters in under 5 seconds, selective CI running only relevant tests, and a pragmatic cap of two retry attempts before flagging a human. The design thesis: "putting LLMs into contained boxes compounds into system-wide reliability."

[Anthropic's C compiler experiment](https://www.anthropic.com/engineering/building-c-compiler) demonstrated the same dynamic. Tests were the harness. When tests were clear and incremental, agents converged. When tests were vague, agents drifted.

The discipline is [Harness Engineering](https://openai.com/index/harness-engineering/), formalized by OpenAI's experiments: "anytime you find an agent makes a mistake, you take the time to engineer a solution such that the agent never makes that mistake again." [Martin Fowler's analysis at Thoughtworks](https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html) identifies three categories: context engineering (curated knowledge bases), architectural constraints (enforced by linters and structural tests), and entropy management (agents that periodically clean cruft and fix documentation drift).

The key insight: a good harness makes agents **more capable**, not just more controlled. [LangChain's coding agent improved from 52.8% to 66.5% on Terminal Bench 2.0](https://www.ignorance.ai/p/the-emerging-harness-engineering), jumping from Top 30 to Top 5, by changing nothing about the model. Same model. Different harness. Dramatically better results.

For platform engineering teams, this is a direct extension of the golden path concept. Today's service templates and scaffolding become tomorrow's harnesses, with custom linters, structural tests, context documentation, and feedback loops baked in. The platform team's job shifts from "build the CI pipeline" to "build the system that makes agents produce reliable software at scale."

> **Key takeaway:** Every agent mistake fixed by hand should be encoded into the harness. A good harness makes agents more capable, not just more controlled. The model is not the variable — the harness is.

---

## Principle 7: Platform Engineering Owns the Ship Loop

Ship loops — the continuous cycle from specification through agent execution, verification, and delivery — are where platform engineering becomes the backbone of agentic development.

In the agentic era, **custom software is cheap.** Historically, enterprise CI/CD pipelines have always been custom. Each organization layers its own compliance gates, internal registry integrations, deployment approval workflows, and cost-control hooks on top of whatever OSS toolchain it uses. That customization has been expensive; it required dedicated platform engineers to write and maintain the glue. When agents can generate that glue at negligible marginal cost, the calculus changes: ship loops can be deeply customized to an enterprise's unique constraints, compliance requirements, and tooling ecosystem using a mix of open-source, proprietary, and purpose-built components. The platform team's job is no longer primarily "pick a supported tool and wrangle it." It is **designing and specifying the ship loop itself**, then letting agents build and maintain the connective tissue.

Steve Yegge's [Gas Town](https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04) project illustrates the frontier: a multi-agent orchestrator coordinating 20 to 30 Claude Code instances in parallel, with a merge queue that batches requests, runs verification gates, and merges to main using a bisecting queue. The [Kubernetes analogy is apt](https://cloudnativenow.com/features/gas-town-what-kubernetes-for-ai-coding-agents-actually-looks-like/): both systems coordinate unreliable workers toward persistent goals, separating control logic from ephemeral execution.

[Bassim Eledath's "8 Levels of Agentic Engineering"](https://www.bassimeledath.com/blog/levels-of-agentic-engineering) framework captures the progression teams are experiencing, from tab-complete autocomplete through context engineering, compounding engineering, MCP and skills integration, harness engineering, background agents, and ultimately autonomous agent teams. Most teams are between levels 3 and 5. The jump to levels 6 through 8 is a phase transition that requires rethinking team structure, not just tooling. The [12 Factor Agents](https://github.com/humanlayer/12-factor-agents) methodology codifies the engineering principles that make this scaling work: own your prompts, own your context window, own your control flow.

> **Key takeaway:** Redesign your platform team's charter around one question: does our ship loop — from spec to production — require human intervention to move forward? Every manual step is a bottleneck to eliminate.

---

## Principle 8: Security Is Not Optional. It Is Paramount.

The agentic era introduces attack surfaces that most organizations are not prepared for. To understand why, start with a framing that every enterprise engineer already knows: **blackboxes**.

### Agents Create Blackboxes. Enterprises Already Know How to Handle Them — Mostly.

When an agent writes a module, a service, or a library, the engineer reviewing the PR may understand what it does at a high level — inputs, outputs, the happy path — but the internal logic is often a blackbox in the same sense that a third-party npm package or a Maven dependency is a blackbox. You did not write it. You did not fully audit it. You are trusting it.

The blackbox can be small: an agent-generated utility function, a generated component library, an integration adapter. Or it can be large: an entire service, a generated data pipeline, a full subsystem. The scale varies. The trust problem is the same.

This is not new. Enterprises have been consuming blackboxes for decades. Every Node.js project has thousands of transitive dependencies. Every Java service pulls in hundreds of Maven artifacts. The OSS ecosystem is built on the shared assumption that widely-used, community-reviewed packages are safe enough to depend on. An entire industry — dependency scanning, SBOM generation, license auditing, vulnerability management, software composition analysis — grew up to manage that risk. That industry is mature, well-tooled, and hard-won.

Recent supply chain incidents are a reminder of what the cost of complacency looks like. Log4Shell exposed the fragility of deeply nested transitive dependencies hiding inside trusted frameworks. The XZ Utils backdoor demonstrated that a patient attacker could compromise a widely-trusted open-source project through social engineering over years. Dozens of npm typosquatting and dependency confusion attacks have shown that the attack surface of the package ecosystem is vast and actively exploited. [IBM's X-Force](https://newsroom.ibm.com/2026-02-25-ibm-2026-x-force-threat-index-ai-driven-attacks-are-escalating-as-basic-security-gaps-leave-enterprises-exposed) reported a nearly 4x increase in large supply chain compromises since 2020, with AI-powered coding tools accelerating the trend.

**Agents introduce a new tier of blackbox risk that sits above the OSS layer.** Unlike OSS packages, agent-generated code:

- Has no community review history or CVE database tracking its known vulnerabilities
- Has no maintainer to issue patches when a flaw is discovered
- Was produced by a model that may have been influenced by training data containing known-vulnerable patterns
- May introduce *new* OSS dependencies — including typosquatted packages, outdated packages with CVEs, or license-incompatible libraries — without flagging any of it unless the harness requires it

And unlike a single npm package, an agent session may generate hundreds of modules across a codebase — each one a potential vector.

### Disciplined Platform Engineering Extends Supply Chain Security to Agent-Generated Artifacts

The tooling already exists. The discipline is applying it consistently:

**Agent provenance and SBOM.** Every agent-generated component should carry provenance metadata: which model generated it, with what harness version, against what spec, at what commit. This is agent SBOM, and it is the foundation of auditability. Without it, you cannot answer the question "which of our modules were produced by an agent session that used a compromised context file?" — and that question will eventually be asked.

**Signing and verification.** Apply [Sigstore](https://www.sigstore.dev/) and [SLSA](https://slsa.dev/) provenance attestations to agent-generated artifacts the same way you would to build artifacts. An agent-produced library that cannot be traced to a verified harness run should not reach production.

**Policy enforcement at CI.** OPA, Cedar, or OpenFGA policies that govern what agent-generated code is allowed to do — which APIs it can call, which data it can access, which external dependencies it can introduce — enforced at CI time, not at runtime. [Coding agents widen the supply chain attack surface](https://securityboulevard.com/2026/03/coding-agents-widen-your-supply-chain-attack-surface/) through prompt injection, toolchain poisoning, and hallucinated dependencies; policy gates are the mechanical check that the harness cannot skip.

**Dependency hygiene for agent-introduced packages.** Every dependency an agent introduces as part of its output should pass through the same ingestion process as any other third-party dependency: SCA scan, license check, known-CVE review. Do not let agents bypass the vetting process that applies to every other package in your dependency tree.

**Periodic re-audit.** Unlike human-written code where a PR review is a one-time event, agent-generated code should be subject to periodic re-audit as the threat landscape evolves. A module generated six months ago by an agent unaware of a newly-discovered vulnerability class is a liability. Treat it like an OSS dependency: track it, scan it, patch it.

The parallel to OSS supply chain security is the most useful mental model for engineering leaders. Enterprises learned — through Log4Shell, through XZ Utils, through painful incidents that made the headlines — to treat their dependency trees as part of their security posture. The same discipline, extended to agent-generated artifacts, is what makes agentic software production-safe at enterprise scale.

### The Broader Agentic Attack Surface

Beyond the supply chain, the [OWASP Top 10 for Agentic Applications 2026](https://www.practical-devsecops.com/owasp-top-10-agentic-applications/) identifies additional risks that are being exploited now: Agent Goal Hijack, Tool Misuse, Identity and Privilege Abuse, and Memory Poisoning. [Cisco's State of AI Security 2026](https://blogs.cisco.com/ai/cisco-state-of-ai-security-2026-report) found only 29% of organizations prepared to secure their agentic deployments.

**Agents operate with broader system permissions than humans typically do.** An agent with terminal access and stored credentials is not the same risk profile as a chatbot in a browser tab.

**Threat modeling must become a first-class engineering artifact.** The [MAESTRO framework](https://cloudsecurityalliance.org/blog/2025/02/06/agentic-ai-threat-modeling-framework-maestro) from the Cloud Security Alliance provides a structured, layer-by-layer approach to the full threat surface.

Security-aware software engineering means enforcing least-privilege for every agent session, treating agent configuration as code, building human-in-the-loop checkpoints for actions with financial or security impact, and monitoring agent behavior for anomalies the same way you monitor production services.

Security cannot be bolted on after agents are in production. It must be designed into the harness from day one.

> **Key takeaway:** Apply your existing supply chain discipline to agent-generated code: provenance metadata, SBOM, Sigstore attestations, and SCA scans on every dependency an agent introduces. Before any agent-generated component reaches production, answer three questions: where did it come from, what dependencies did it introduce, and what can it access? If you cannot answer all three, your harness is incomplete.

---

## Principle 9: Roles Are Normalizing, and New Disciplines Are Emerging

The traditional sharp role boundaries — frontend engineer, backend engineer, DevOps engineer, QA engineer — made sense when the primary constraint was specialized knowledge needed to produce artifacts in each domain. When agents can produce artifacts across domains, the boundaries blur. This is not a threat. It is a **normalization** that unlocks a different kind of specialization.

New competencies are emerging that every engineer needs: harness engineering (designing constraints and feedback loops), context engineering (curating the information environment agents operate within), and specification writing (expressing intent with the precision of a requirements document but the iterability of a conversation).

**Team topology is shifting too.** The [Team Topologies](https://teamtopologies.com/) model — stream-aligned teams, platform teams, enabling teams, complicated subsystem teams — remains the right lens, but what each team *does* is changing. Stream-aligned teams are shifting from "write features" to "specify features and review agent-produced implementations." Platform teams are shifting from "build golden paths" to "build harnesses that make agents walk the golden path automatically." Enabling teams are shifting from "coach on practices" to "coach on specification quality and harness design."

The platform team restructuring is the most concrete near-term change. In a pre-agentic world, a platform team maintained the scaffolding, the service templates, the CI pipeline, and coached application teams on how to use them. In an agentic world, that same team designs and maintains the harnesses — the CLAUDE.md constitutions, the architectural constraint linters, the structural test suites — that channel every agent session toward compliant, reliable output. The golden path does not disappear; it gets encoded into the harness so that agents cannot deviate from it even if prompted to.

Concretely, new specializations are emerging:

- **Harness Engineer**: Designs and maintains the constraint systems, linters, and feedback loops that shape agent behavior. The CI/CD engineer of the agentic era.
- **Specification Author**: Translates business requirements into unambiguous, testable specs that agents can act on. Part product manager, part systems analyst, part technical writer.
- **Agent Reviewer**: Reviews agent-produced PRs with an eye toward correctness, security, and architectural fit — not line-by-line reading, but pattern recognition and acceptance criteria validation.

The [Shopify experience](https://www.firstround.com/ai/shopify) is instructive. They are scaling their intern program dramatically because interns are AI centaurs: they use tools natively, have a beginner's mindset, and push the entire team forward. Shopify's CTO is on the internal leaderboard for highest Cursor token spend. The message is clear: this is not about replacing engineers. It is about elevating what engineering means.

> **Key takeaway:** The engineer who thrives in the agentic era is not the fastest coder; it is the clearest thinker: the one who can specify intent precisely, design constraints that hold, and verify that the output meets the standard. Role boundaries built around artifact production are dissolving. What is emerging is specialization around system design: harness engineers, specification authors, agent reviewers. These are not new job titles; they are the natural evolution of engineering craft. The most valuable engineers will be the ones who make agents more capable through better harnesses, clearer specs, and tighter feedback loops. That is a different skill than writing code, and it needs to be developed deliberately.

---

## Where We Go From Here

**Budget-based development will replace story-point estimation.** When agents generate code, the cost unit shifts from developer-hours to compute-hours plus human-review-hours. Estimation becomes a function of specification complexity and harness quality, not team velocity. The practical shape of this: a "spec complexity budget" that estimates how many agent iterations a feature is likely to require based on the clarity and completeness of the spec, the maturity of the relevant harness, and the integration surface area involved. Teams with mature harnesses and high-quality specs will converge in fewer loops at lower compute cost. Teams with immature harnesses or vague specs will burn budget on rework. The budget is the accountability mechanism that makes specification quality a measurable engineering output — not a soft skill.

**Ship loops and deploy feedback loops will be everywhere.** Every agentic development workflow will converge on some version of this pattern: specify, execute, verify, deliver, observe, repeat. The open-source communities working on this, including projects like [CNOE's ai-platform-engineering](https://github.com/cnoe-io/ai-platform-engineering), are already building the shared infrastructure to make these loops the default mode of operation.

**"Coding is dead" is wrong. "Coding as the primary output of engineering" is evolving.** Engineers will still write code: harness code, constraint code, verification code, glue code. But the bulk of application logic will be generated. The engineering value shifts upstream (specification, architecture, trade-offs) and downstream (verification, observability, security).

**Think of the [Software Factory](https://factory.strongdm.ai/) as the destination.** Not rows of agents churning out code. A carefully designed system of specifications, constraints, feedback loops, and quality gates — with agents as the execution layer and humans as the architects, auditors, and decision-makers.

---

## A Final Thought

I started my career developing real-time media algorithms for Cisco Telepresence, where every millisecond of audio/video latency was budgeted and every RTP packet mattered. I built test automation frameworks before "shift-left" was a phrase anyone used. I architected cloud infrastructure across AWS, Azure, and GCP, led SRE teams across four countries, and built a HIPAA-compliant healthcare platform as a startup CTO. Through all of it, the constant was the same: the systems that shipped reliably were the ones where the engineering discipline was strongest, not where the code was cleverest.

This shift is different. Not because the technology is more impressive, though it is. But because it challenges the fundamental identity of what it means to be a software engineer. For two decades, our value was inextricably linked to our ability to write code. In the agentic era, our value shifts to our ability to **think clearly about systems**, to **specify intent precisely**, to **design constraints that channel power toward purpose**, and to **verify that the output meets the standard**.

That is not a diminishment of the craft. It is an elevation of it.

The vibe coders will build prototypes. The software engineers will build products. The difference, as it has always been, is discipline.

How we practice software engineering will keep changing — and in the agentic era, that change is happening fast. Tools, workflows, and even what we optimize for day to day will look different year to year. What should not change is the underlying discipline: clear intent, measured quality, honest verification, and the stubborn rigor that turns experiments into something you can ship and sustain. The assembly line gets new machines; the requirement for a working system does not.

---

*[Sri Aradhyula](https://sriaradhyula.github.io/) is an AI Agentic Platform Engineering Architect at Cisco Outshift, a contributor to open-source agentic AI projects including CNOE and AGNTCY, and chair of the Agentic AI SIG within the CNOE community. Views are his own.*

---

### References

- [Harness Engineering: Leveraging Codex in an Agent-First World](https://openai.com/index/harness-engineering/) (OpenAI, 2026)
- [Building a C Compiler with a Team of Parallel Claudes](https://www.anthropic.com/engineering/building-c-compiler) (Anthropic, 2026)
- [How Squad Runs Coordinated AI Agents Inside Your Repository](https://github.blog/ai-and-ml/github-copilot/how-squad-runs-coordinated-ai-agents-inside-your-repository/) (GitHub, 2026)
- [Stripe Engineers Deploy Minions, Autonomous Agents Producing Thousands of Pull Requests Weekly](https://www.infoq.com/news/2026/03/stripe-autonomous-coding-agents/) (InfoQ, 2026)
- [The Shape of the Thing](https://www.oneusefulthing.org/p/the-shape-of-the-thing) (Ethan Mollick, 2026)
- [AI Coding Agents Are Fueling a Productivity Panic in Tech](https://www.bloomberg.com/news/articles/2026-02-26/ai-coding-agents-like-claude-code-are-fueling-a-productivity-panic-in-tech) (Bloomberg, 2026)
- [The 8 Levels of Agentic Engineering](https://www.bassimeledath.com/blog/levels-of-agentic-engineering) (Bassim Eledath, 2026)
- [Welcome to Gas Town](https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04) (Steve Yegge, 2026)
- [12 Factor Agents](https://github.com/humanlayer/12-factor-agents) (HumanLayer/Dex Horthy)
- [StrongDM Attractor NLSpec](https://github.com/strongdm/attractor) and [Software Factory](https://factory.strongdm.ai/)
- [Spec-Driven Development with Claude Code](https://agentfactory.panaversity.org/docs/General-Agents-Foundations/spec-driven-development) (Agent Factory, 2026)
- [GitHub spec-kit](https://github.com/github/spec-kit)
- [The Emerging "Harness Engineering" Playbook](https://www.ignorance.ai/p/the-emerging-harness-engineering) (2026)
- [Harness Engineering (Thoughtworks Analysis)](https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html) (Birgitta Bockeler, 2026)
- [Shopify CEO AI Memo](https://www.cnbc.com/2025/04/07/shopify-ceo-prove-ai-cant-do-jobs-before-asking-for-more-headcount.html) (CNBC, 2025)
- [From Memo to Movement: Shopify's Cultural Adoption of AI](https://www.firstround.com/ai/shopify) (First Round Review, 2026)
- [OWASP Top 10 for Agentic Applications 2026](https://www.practical-devsecops.com/owasp-top-10-agentic-applications/)
- [State of AI Security 2026](https://blogs.cisco.com/ai/cisco-state-of-ai-security-2026-report) (Cisco)
- [IBM X-Force Threat Intelligence Index 2026](https://newsroom.ibm.com/2026-02-25-ibm-2026-x-force-threat-index-ai-driven-attacks-are-escalating-as-basic-security-gaps-leave-enterprises-exposed)
- [MAESTRO: Agentic AI Threat Modeling Framework](https://cloudsecurityalliance.org/blog/2025/02/06/agentic-ai-threat-modeling-framework-maestro) (Cloud Security Alliance)
- [Coding Agents Widen Your Supply Chain Attack Surface](https://securityboulevard.com/2026/03/coding-agents-widen-your-supply-chain-attack-surface/) (Security Boulevard, 2026)
- [Gas Town: What Kubernetes for AI Coding Agents Actually Looks Like](https://cloudnativenow.com/features/gas-town-what-kubernetes-for-ai-coding-agents-actually-looks-like/) (Cloud Native Now, 2026)
- [CNOE AI Platform Engineering](https://github.com/cnoe-io/ai-platform-engineering)
- [How We Rebuilt Next.js with AI in One Week](https://blog.cloudflare.com/how-we-rebuilt-next-js-with-ai-in-one-week/) (Cloudflare, 2026)
- [mcp-scanner](https://github.com/cisco-ai-defense/mcp-scanner) (Cisco AI Defense)
- [skill-scanner](https://github.com/cisco-ai-defense/skill-scanner) (Cisco AI Defense)

---

### Additional reading

[StrongDM's Attractor](https://factory.strongdm.ai/products/attractor) takes this further. It is a non-interactive coding agent designed for use in a [Software Factory](https://factory.strongdm.ai/). Instead of publishing a product, they published an [NLSpec (Natural Language Spec)](https://github.com/strongdm/attractor) for how to build your own. Attractor pipelines are directed graphs defined in Graphviz DOT syntax, where nodes are tasks, edges are transitions, and the execution engine traverses them deterministically until convergence or termination conditions are met. As [Ethan Mollick observed](https://www.oneusefulthing.org/p/the-shape-of-the-thing), the particular details of StrongDM's Software Factory matter less than the fact that such radical experimentation into how we work is now not only possible, but likely necessary.
