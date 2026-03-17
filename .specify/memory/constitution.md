<!-- Sync Impact Report
  Version change: N/A → 1.0.0 (initial ratification)
  Added sections: All (initial constitution)
  Templates requiring updates: ✅ No updates needed (templates are generic)
  Follow-up TODOs: None
-->

# sriaradhyula.github.io Constitution

## Core Principles

### I. Specifications as the Source of Truth

All blog posts and content changes begin with a specification. The spec
defines the topic, audience, key points, and acceptance criteria before
any writing begins. Drafts serve the specification — not the other way
around.

### II. Chirpy Theme Conventions (NON-NEGOTIABLE)

Every post MUST use valid Chirpy front matter. Required fields:

- `title` — descriptive, concise title in quotes
- `date` — format `YYYY-MM-DD 00:00:00 +0000` (UTC midnight to avoid
  future-post filtering)
- `categories` — exactly two levels: `[Domain, Subdomain]`
- `tags` — lowercase, hyphenated, 3–7 tags
- `description` — 1–2 sentence SEO summary using `>-` block scalar

Optional fields: `pin: true`, `mermaid: true`, `math: true`, `image`.

Posts MUST be placed in `_posts/` with filename `YYYY-MM-DD-<slug>.md`.

### III. Writing Quality Standards

- Write in a clear, technical-but-accessible voice aimed at platform
  engineers and AI practitioners.
- Use active voice. Avoid filler phrases ("it is worth noting that").
- Every section MUST earn its place — remove sections that don't add
  value to the reader.
- Code examples MUST be minimal and self-explanatory. Prefer simple
  functions over framework-specific constructs unless the framework
  is the topic.
- Mermaid diagrams MUST be simple enough to render legibly. Prefer
  bullet lists or tables when a diagram would be overly complex.

### IV. Content Accuracy and Attribution

- All technical claims MUST be verifiable. Link to primary sources
  (official docs, repos, blog posts) rather than making unsupported
  assertions.
- When referencing external projects, link to the canonical source on
  first mention.
- When referencing personal projects (CAIPE, CNOE SIG), provide context
  but do not over-promote — the reader's learning comes first.

### V. Simplicity and Avoiding Over-Engineering

Write exactly what the specification requires — no more. YAGNI applies
to blog content just as it does to code:

- Do not add sections "for completeness" if they don't serve the reader.
- Do not include diagrams that restate what the text already says.
- Do not add code examples longer than necessary to illustrate the point.

### VI. Chirpy-Specific Formatting

- Use Chirpy prompt callouts (`> ... {: .prompt-tip }`,
  `.prompt-info`, `.prompt-warning`, `.prompt-danger`) for asides.
- Use `##` for major sections, `###` for subsections. Do not skip
  heading levels.
- Fenced code blocks MUST include a language identifier.
- Tables MUST have header separators.
- External links with `target="_blank"` MUST include
  `rel="noopener noreferrer"`.

## Git Workflow

- Commit directly to `main` for blog content (single-author repo).
- Use Conventional Commits: `docs:` for posts and content,
  `feat:` for site features, `fix:` for corrections, `chore:` for
  config and maintenance.
- Sign every commit with DCO:
  `Signed-off-by: Sri Aradhyula <sraradhy@cisco.com>`

## Quality Gates

Before publishing any post:

1. Front matter validates against Chirpy requirements.
2. All links resolve (no broken URLs).
3. Code examples are syntactically valid.
4. Mermaid diagrams render without errors.
5. Post renders correctly with `bundle exec jekyll serve`.

## Spec-Driven Blog Workflow

Blog posts follow a lightweight adaptation of the spec-kit workflow:

1. `/speckit.specify` — define the topic, audience, key takeaways,
   and outline.
2. `/speckit.plan` — research sources, select examples, plan structure.
3. `/speckit.tasks` — break into writing tasks (sections, diagrams,
   code examples).
4. `/speckit.implement` — draft, review, and publish.

## Governance

This constitution governs all content and configuration changes to
`sriaradhyula.github.io`. Amendments require updating this document
with a version bump and a clear rationale.

**Version**: 1.0.0 | **Ratified**: 2026-03-17 | **Last Amended**: 2026-03-17
