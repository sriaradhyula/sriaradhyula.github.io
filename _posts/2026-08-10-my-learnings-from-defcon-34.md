---
title: "My learnings from DEFCON 34"
date: 2026-08-10 00:00:00 -0500
categories: [Security, Conferences]
tags: [defcon, cybersecurity, agentic-ai, red-teaming, ai-security]
description: >-
  Lessons from DEF CON and cybersecurity in the agentic era.
image:
  path: /assets/img/posts/defcon-34/linkedin-preview.png
  alt: DEF CON 34 badge, SAO, and lanyard
pin: true
---

<div class="row row-cols-1 row-cols-md-2 g-4 mb-4">
  <figure class="col mb-0">
    <a href="/assets/img/posts/defcon-34/entry-way.jpeg">
      <img class="img-fluid rounded" src="/assets/img/posts/defcon-34/entry-way.jpeg" alt="DEF CON 34 entryway" loading="lazy">
    </a>
    <figcaption class="text-center mt-2">DEF CON entryway.</figcaption>
  </figure>
  <figure class="col mb-0">
    <a href="/assets/img/posts/defcon-34/previous-years-logos.jpeg">
      <img class="img-fluid rounded" src="/assets/img/posts/defcon-34/previous-years-logos.jpeg" alt="Previous years' DEF CON logos" loading="lazy">
    </a>
    <figcaption class="text-center mt-2">Previous years' logos.</figcaption>
  </figure>
</div>

This was my first DEF CON, and it blew away my expectations. Every technical conference has its strengths and weaknesses. Most are educational, and some can be overwhelming, but DEF CON was by far the most technically rewarding and personally fulfilling conference I have attended.

At DEF CON, “hacking” is used in its broadest sense. There is enough technical “eye candy” to satisfy my tinkerer brain with things like lock picking, soldering components onto badge add-ons (SAOs), learning about vehicle and satellite hacking, robotics, wireless security, AI Red teaming, Agentic Security and so much more. At the conference, I found my people, these are the folks that get excited by the same topics, tools, and hacks that excite me.

In the ramblings below, I wrote down a few of my observations from a small lens of what I could experience at a vast conference. It will probably take me another month or longer to [watch the recordings](https://media.defcon.org/), read other view points like this one, digest the material, internalize what I learned, and put it to good use.

## TL;DR

- One of the clearest themes I heard at the AI Village was the urgency of securing agents within and cross enterprise boundaries, securing MCP tools, and securing agent actions. Our [poster on securing cross-enterprise AI agents](https://aivillage.org/posters/securing-cross-enterprise-ai-agents/) felt especially relevant in this multi-agent and cross-enterprise world.
- Listening to various talks & demos and in my conversations with peers, there is a general consensus that the agentic era of adversarial attacks is already here. Red, blue, and purple teaming are all becoming increasingly agentic.
- After attending the panel [**The Defender’s Dilemma: Releasing Dual-Use AI Models as Capabilities Climb**](https://hackertracker.app/defcon34/content/67734), AI models can be dual-use (offense and defense). Frontier Cyber models are great, but there is uneven accessibility. Open-weight models like Qwen, Kimi, GLM, etc. will democratize both offensive and defensive capabilities, but they also lower barriers for attackers. Organizations need a strategy to on how they plan to defend at agentic scale.
- In one of the Red team village tactic workshops, I learned that frontier models do not need to be specialized cyber models to find common vulnerabilities or potential zero-days. With the right skills, tools, context, and validation loop, I found that general-purpose models (Opus 4.8, GPT 5.6 Sol) can be remarkably capable, although some frontier models now have guardrails that block offensive/defensive queries.
- Prompts, skills, tool calls, and agent memory can all be poisoned and should be treated as part of the software supply chain. In one of the talks, the presenter discussed skill poisoning especially when they are chained with many off the shelf skills. A malicious skill can influence later tools, establish command-and-control behavior, or poison an agent’s memory without leaving a traditional binary signature.
- **Agent integrity** requires much more than authorization at an MCP or tool boundary. Agent Identity, user intent, delegation, authorization, and auditability must survive the entire chain of action.
- I left convinced that application developers, infrastructure engineers, SREs, and defenders need to be educated with offensive-security techniques. Security has always been everyone’s responsibility, even more so in agentic era.
- ***This is simultaneously the most exciting and the most frightening time to work in computer security.***

## AI Village

<div class="row row-cols-1 row-cols-md-2 g-4 mb-4">
  <figure class="col mb-0">
    <a href="/assets/img/posts/defcon-34/ai-village.jpeg">
      <img class="img-fluid rounded" src="/assets/img/posts/defcon-34/ai-village.jpeg" alt="AI Village at DEF CON 34" loading="lazy">
    </a>
    <figcaption class="text-center mt-2">AI Village at DEF CON 34.</figcaption>
  </figure>
  <figure class="col mb-0">
    <a href="/assets/img/posts/defcon-34/agntcy-identity-working-group.jpeg">
      <img class="img-fluid rounded" src="/assets/img/posts/defcon-34/agntcy-identity-working-group.jpeg" alt="AGNTCY Identity Working Group team at AI Village" loading="lazy">
    </a>
    <figcaption class="text-center mt-2">
      AGNTCY Identity Working Group team that presented at AI Village at DEF CON 34:
      <a href="https://www.linkedin.com/in/sarah-evans-9456173/">Sarah Evans</a> (Dell) on left,
      <a href="https://www.linkedin.com/in/amrithalalk/">Amritha Lal</a> (AWS) second from left,
      <a href="https://www.linkedin.com/in/singh-manish-k/">Manish Singh</a> (Datum) second from right,
      and me on the right.
    </figcaption>
  </figure>
</div>

First, a big shout-out to our poster team at the AI Village. It was wonderful to meet several members of the [AGNTCY](https://spec.identity.agntcy.org/docs/intro/) Identity Working Group in person, exchange ideas, demonstrate our work, and plan future collaboration.

Our [Securing Cross-Enterprise AI Agents](https://aivillage.org/posters/securing-cross-enterprise-ai-agents/) poster demonstration explored requests between agents operating in different organizational identity domains. We used Client ID Metadata (CIMD), ID-JAG and Token Exchange to ask a fundamental question: how can an agent carry its identity, delegated authority, and user intent across an organizational boundary while ensuring the resulting access is appropriately downscoped. Checkout our demo @[github](https://github.com/agntcy/agent-identity-demos)

<video class="w-100 rounded mb-4" autoplay loop muted playsinline controls preload="metadata">
  <source src="/assets/img/posts/defcon-34/agent-identity-demo.mp4" type="video/mp4">
  Your browser does not support embedded videos.
</video>

At AI Village and the conference at large, there were several talks and conversations centered around **model provenance, guardrails, RAG poisoning, prompt injection, MCP security, app security, and network security**

## [The Defender’s Dilemma: Releasing Dual-Use AI Models as Capabilities Climb](https://hackertracker.app/defcon34/content/67734)

**Panelists:** [Emanuel Gawrieh](https://hackertracker.app/defcon34/people/68972), [Jason Clinton](https://hackertracker.app/defcon34/people/68971), [Bruce Schneier](https://hackertracker.app/defcon34/people/67390), [Heather Adkins](https://hackertracker.app/defcon34/people/68973)

The panel sharpened the ongoing debate over access to open-weight models. The same capabilities that help defenders can also enable vulnerability discovery, surveillance, censorship, and offensive operations and no single organization controls how those capabilities are released or used. Model access is therefore not merely a technical decision; it is also a governance, legal, regulatory, and geopolitical one.

The discussion was especially timely in light of [OpenAI’s disclosure of the Hugging Face security incident](https://www.youtube.com/watch?v=87DyyMV0kCY&t=2s). It reinforced my view that this is simultaneously the most exciting and the most frightening time to work in computer security.

## Skills are part of the software supply chain

One of the most important themes for me was the risk from malicious or poisoned agent skills. We are downloading and composing skills from many sources, much as we adopted open-source libraries and container images, but skills are often natural-language instructions rather than conventional binaries and hard to scan for vulnerability signatures.

<figure class="mb-4 notion-media">
  <a href="/assets/img/posts/defcon-34/malskills-demo-lab-defcon34.jpg">
    <img class="img-fluid rounded" src="/assets/img/posts/defcon-34/malskills-demo-lab-defcon34.jpg" alt="Nur Gucu presenting MalSkill Lab at DEF CON 34" loading="lazy">
  </a>
  <figcaption class="text-center mt-2">
    Nur “BurritoTheNurrito” Gucu presenting
    <a href="https://defcon.org/html/defcon-34/dc-34-demolabs.html#content_66513"><em>MalSkill Lab: Hands-On Natural Language Malware in AI Agent Orchestration Systems</em></a>
    at DEF CON 34.
  </figcaption>
</figure>

Nur Gucu’s Demo Lab made this risk tangible. The premise was simple and unsettling: an AI agent trusts the skills in its directory, so what happens when one of those skills is lying? The demonstration showed natural-language malware embedded in agent skill systems; no binary, shell instructions, or traditional malware signature, just English instructions executing with the agent’s tool and operating system access.

The lab demonstrated three escalating attack patterns:

- **Buried instruction:** a malicious sentence hidden inside an otherwise legitimate skill causes data exfiltration when the skill runs.
- **Chain attack:** several individually benign-looking skills create an exfiltration path only when orchestrated together; no single skill appears malicious because the composition itself is the weapon.
- **Persistent ghost:** a skill writes malicious behavior into agent memory so the behavior can survive file deletion and session restarts.

The chain attack stood out to me because it exposes the limits of reviewing skills one file at a time. A malicious outcome can emerge from the interaction among innocent looking instructions, adapters, policies, memory, and tools. Progressive disclosure makes skills efficient, but it can also make the complete behavior harder for a user or even the model to inspect at once.

The open-source [**MalSkills repository**](https://github.com/nuryslyrt/malskills) makes the idea reproducible with benign and planted examples, a proof collector, and a detector under development. The defensive side of the Demo Lab covered skill-integrity verification, capability-based sandboxing, orchestration-graph analysis, and runtime behavioral monitoring.

Tools such as the open-source [Cisco AI Defense Skill Scanner](https://github.com/cisco-ai-defense/skill-scanner) are beginning to apply static analysis, behavioral data-flow analysis, and semantic analysis to agent skills. These approaches may help identify known or probable risks, but they cannot establish that a skill is safe; human review, threat modeling, least privilege, and runtime controls remain necessary.

## Red Team Village

<div class="row row-cols-1 row-cols-md-2 g-4 mb-4">
  <figure class="col mb-0">
    <a href="/assets/img/posts/defcon-34/red-team-village-1.jpeg">
      <img class="img-fluid rounded" src="/assets/img/posts/defcon-34/red-team-village-1.jpeg" alt="The Red Team Village at DEF CON 34" loading="lazy">
    </a>
    <figcaption class="text-center mt-2">The Red Team Village at DEF CON 34.</figcaption>
  </figure>
  <figure class="col mb-0">
    <a href="/assets/img/posts/defcon-34/red-team-village-2.jpeg">
      <img class="img-fluid rounded" src="/assets/img/posts/defcon-34/red-team-village-2.jpeg" alt="A presentation in the Red Team Village at DEF CON 34" loading="lazy">
    </a>
  </figure>
</div>

I spent much of lot of time in the Red Team Village because it resonated with me at the intersection of Security and Agentic.

My read from the talks is that traditional tools penetration testing not disappearing but agents are becoming an orchestration and reasoning layer over those tools. Frontier models already understand how many established security tools work. Given an authorized target and appropriate context, an agent can map a codebase, select tools, generate probes, interpret results, and coordinate follow-up investigations.

Autonomous penetration testing with agent swarms is becoming a reality. The human researcher remains essential for defining scope, validating evidence, assessing impact, and preventing unsafe actions, but the breadth and speed of testing can increase dramatically.

This also changes what “good” penetration testing looks like. Checklist-driven, point-in-time testing is not enough. Effective testing must think like an adversary, explore unexpected paths, and produce reproducible evidence showing whether a suspected weakness is actually exploitable.

I believe penetration testing should be a [continuous loop](https://sriaradhyula.github.io/posts/engineers-write-the-rules-agents-run-the-ship-loop/), not a semiannual event. As systems and attack paths change, authorized agents can continuously test them in controlled environments and return evidence to engineers, while humans define scope, approve sensitive actions, and review the results.

### Agent-assisted vulnerability research

At a Red Team Village workshop called **Vulnpocalypse**, I worked with a custom skill authored by **Chris Haller** that uses frontier models to hunt for vulnerabilities and potential zero-days. A well-designed skill can guide a model through source-code mapping, trust-boundary analysis, hypothesis generation, testing, and the collection of reproducible evidence.

I experimented with this approach against our code and upstream dependencies. The exercise gave me useful insight into how frontier models can support vulnerability research, while reinforcing the importance of validating their analysis within the relevant code paths and trust boundaries.

A model-generated finding is only a hypothesis. Establishing a credible vulnerability requires reproducible evidence, a clear assessment of impact, and careful validation against the actual code path.

### Exposed AI infrastructure and credentials

Another demonstration showed how researchers could discover publicly exposed model gateways and credentials leaked onto the internet. Misconfigured LiteLLM-style endpoints could effectively provide strangers with access to someone else’s model infrastructure. Leaked API tokens could remain usable long after they were accidentally committed or shared.

The important lesson was not the specific scanner. It was that AI infrastructure needs the same disciplined exposure management we expect from cloud infrastructure:

- Continuously inventory public endpoints.
- Search authorized repositories and artifacts for leaked credentials.
- Rotate credentials and prefer short-lived tokens.
- Apply rate limits, authentication, and narrowly scoped authorization.
- Test from an adversary’s perspective rather than relying only on configuration reviews.

Any offensive tooling must be reviewed and run only in an isolated environment against explicitly authorized targets.

## Conference badges and SAOs

<figure class="mb-4 notion-media">
  <a href="/assets/img/posts/defcon-34/badges-saos.jpg">
    <img class="img-fluid rounded" src="/assets/img/posts/defcon-34/badges-saos.jpg" alt="DEF CON badge with SAOs" loading="lazy">
  </a>
  <figcaption class="text-center mt-2">DEF CON badge with add-ons from AI Village and one I made. SAOs are “shitty add-ons” in DEF CON terminology.</figcaption>
</figure>

DEF CON badge is not merely an entrance credential. It is an extensible circuit board with a camera and QR scanner, powered by batteries and designed for interaction with other attendees. It changes behavior as people connect, scan, and explore it, and its expansion pins allow SAOs to be attached. It is a wonderful learn and hack on to these boards.

### Learning to solder

<div class="row row-cols-1 row-cols-md-2 g-4 mb-4 notion-media">
  <figure class="col mb-0">
    <a href="/assets/img/posts/defcon-34/hardware-hacking-village.jpg">
      <img class="img-fluid rounded" src="/assets/img/posts/defcon-34/hardware-hacking-village.jpg" alt="Hardware Hacking Village and Solder Skills Village" loading="lazy">
    </a>
    <figcaption class="text-center mt-2">The Hardware Hacking Village and Solder Skills Village.</figcaption>
  </figure>
  <div class="col">
    <figure>
      <a href="/assets/img/posts/defcon-34/solder-workshop.jpg">
        <img class="img-fluid rounded" src="/assets/img/posts/defcon-34/solder-workshop.jpg" alt="Soldering components onto an SAO" loading="lazy">
      </a>
      <figcaption class="text-center mt-2">I soldered components onto an SAO.</figcaption>
    </figure>
    <figure class="mb-0">
      <a href="/assets/img/posts/defcon-34/soldered-sao.jpeg">
        <img class="img-fluid rounded" src="/assets/img/posts/defcon-34/soldered-sao.jpeg" alt="Finished SAO attached to a DEF CON badge" loading="lazy">
      </a>
      <figcaption class="text-center mt-2">Final product after attaching it to the badge.</figcaption>
    </figure>
  </div>
</div>

I attended a soldering workshop and assembled a simple expansion board containing components such as resistors, LEDs, and a capacitor. I had always wanted to learn this skill, and the [volunteers](https://www.youtube.com/watch?v=Fy-3P8v5e8g) made it approachable. What impressed me was not just the hardware, but the generosity of people willing to sit with a beginner and teach the craft.

## Hacking beyond software

<div class="row row-cols-1 row-cols-md-3 g-4 mb-4 notion-media notion-media-wide">
  <figure class="col mb-0">
    <a href="/assets/img/posts/defcon-34/truck-hacking.jpg">
      <img class="img-fluid rounded" src="/assets/img/posts/defcon-34/truck-hacking.jpg" alt="A semi-truck for hands-on vehicle security research" loading="lazy">
    </a>
    <figcaption class="text-center mt-2">A full semi-truck available for hands-on vehicle security research.</figcaption>
  </figure>
  <figure class="col mb-0">
    <a href="/assets/img/posts/defcon-34/wifi-pineapple.jpg">
      <img class="img-fluid rounded" src="/assets/img/posts/defcon-34/wifi-pineapple.jpg" alt="WiFi Pineapple display" loading="lazy">
    </a>
    <figcaption class="text-center mt-2">A WiFi Pineapple display illustrating wireless reconnaissance and authorized testing.</figcaption>
  </figure>
  <figure class="col mb-0">
    <a href="/assets/img/posts/defcon-34/deepfake-green-screen.jpg">
      <img class="img-fluid rounded" src="/assets/img/posts/defcon-34/deepfake-green-screen.jpg" alt="Real-time deepfake demonstration with a green screen" loading="lazy">
    </a>
    <figcaption class="text-center mt-2">An on-device, real-time deepfake demonstration using a green screen.</figcaption>
  </figure>
</div>

At DEF CON, “hacking” is used in its broadest sense: deeply understanding how something works, questioning its assumptions, and discovering how it can be made to behave differently. The villages covered vehicles, satellites, wireless networks, physical systems, robotics, maritime systems, gaming, 3D printers and much more.

## Physical security and lock picking

<div class="row row-cols-1 row-cols-md-2 g-4 mb-4 notion-media">
  <figure class="col mb-0">
    <a href="/assets/img/posts/defcon-34/physical-security-village.jpg">
      <img class="img-fluid rounded" src="/assets/img/posts/defcon-34/physical-security-village.jpg" alt="Physical Security Village" loading="lazy">
    </a>
    <figcaption class="text-center mt-2">The Physical Security Village.</figcaption>
  </figure>
  <figure class="col mb-0">
    <a href="/assets/img/posts/defcon-34/lockpick-village.jpg">
      <img class="img-fluid rounded" src="/assets/img/posts/defcon-34/lockpick-village.jpg" alt="Lockpick Village" loading="lazy">
    </a>
    <figcaption class="text-center mt-2">The Lockpick Village—another reminder that security is not only digital.</figcaption>
  </figure>
</div>

<div class="row row-cols-1 row-cols-md-2 g-4 mb-4 notion-media">
  <figure class="col mb-0">
    <a href="/assets/img/posts/defcon-34/lock-picks-display.jpg">
      <img class="img-fluid rounded" src="/assets/img/posts/defcon-34/lock-picks-display.jpg" alt="Lock-picking tools and instruction" loading="lazy">
    </a>
    <figcaption class="text-center mt-2">Lock-picking tools and hands-on instruction.</figcaption>
  </figure>
  <figure class="col mb-0">
    <a href="/assets/img/posts/defcon-34/toool-lockpickers.jpg">
      <img class="img-fluid rounded" src="/assets/img/posts/defcon-34/toool-lockpickers.jpg" alt="TOOOL lock-picking workshop" loading="lazy">
    </a>
    <figcaption class="text-center mt-2">TOOOL — The Open Organisation Of Lockpickers. I joined a lock-picking workshop purely for fun and was able to pick the most rudimentary lock.</figcaption>
  </figure>
</div>

<figure class="mb-4 notion-media">
  <a href="/assets/img/posts/defcon-34/eff-tech-trivia.png">
    <img class="img-fluid rounded" src="/assets/img/posts/defcon-34/eff-tech-trivia.png" alt="EFF Tech Trivia event" loading="lazy">
  </a>
  <figcaption class="text-center mt-2">I have long respected the <a href="https://supporters.eff.org/donate/VirtualVegas--D">Electronic Frontier Foundation</a> for its work on privacy, digital rights, and free expression. I am grateful to my impromptu trivia teammates for coming together and having a blast at the trivia organized by EFF. I am glad I stayed for it.</figcaption>
</figure>

## What I am taking back

My biggest takeaway is that security is increasing going agentic both at scale and speed.

For infrastructure and SRE teams, it is no longer sufficient to wait for a conventional penetration test and remediate a checklist of findings. We should understand how modern attackers use frontier models, understand the same techniques within authorized environments, and build those lessons into continuous defensive loops.

For many DevSecOps team, that means investing in:

- Security focused agent skills.
- Strong identity and delegation across agent boundaries.
- Per-action authorization, downscoping, and auditability.
- Detection of prompt, skill, memory, and tool-chain poisoning.

DEF CON reminded me that learning the attacker’s craft is not separate from defense. It is how defenders stay one step ahead.

---

***Last but not least, I also came away deeply appreciative of the DEF CON community. The speakers and volunteers created a welcoming environment for learning, experimentation, and collaboration. DEF CON truly takes a village, and I am grateful to everyone who brought it together.***

## References

- [**DEF CON media archive**](https://media.defcon.org/) — conference recordings and media.
- [**Securing Cross-Enterprise AI Agents**](https://aivillage.org/posters/securing-cross-enterprise-ai-agents/) — our AI Village poster and demonstration on identity, delegation, token exchange, and downscoping across organizational boundaries.
- [**AGNTCY Identity documentation**](https://spec.identity.agntcy.org/docs/intro/) — identity specifications and background for the cross-enterprise agent work.
- [**AGNTCY agent identity demos**](https://github.com/agntcy/agent-identity-demos) — source code and demonstrations referenced in the AI Village section.
- [**The Defender’s Dilemma: Releasing Dual-Use AI Models as Capabilities Climb**](https://hackertracker.app/defcon34/content/67734) — the panel that informed my handwritten notes on dual-use AI, open-weight models, capability release, governance, and misuse.
- [**OpenAI’s disclosure of the Hugging Face security incident**](https://www.youtube.com/watch?v=87DyyMV0kCY&t=2s) — additional context for the discussion of frontier-model security and agentic attacks.
- [**MalSkill Lab: Hands-On Natural Language Malware in AI Agent Orchestration Systems**](https://defcon.org/html/defcon-34/dc-34-demolabs.html#content_66513) — Nur “BurritoTheNurrito” Gucu’s official DEF CON 34 Demo Lab description.
- [**MalSkills**](https://github.com/nuryslyrt/malskills) — open-source examples of natural-language malware planted in agent skill systems.
- [**ORPHEUS**](https://github.com/nuryslyrt/ORPHEUS) — the open-source multi-skill orchestration framework referenced by the MalSkill Demo Lab.
- [**Cisco AI Defense Skill Scanner**](https://github.com/cisco-ai-defense/skill-scanner) — a best-effort scanner for identifying probable risks in agent skills.
- [**Engineers Write the Rules, Agents Run the Ship: The Loop**](https://sriaradhyula.github.io/posts/engineers-write-the-rules-agents-run-the-ship-loop/) — my article on continuous agent-operated engineering loops.
- [**DEF CON volunteers video**](https://www.youtube.com/watch?v=Fy-3P8v5e8g) — the video linked in the discussion of the volunteer community.
