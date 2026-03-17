# Blog Post Quality Checklist: Spec-Kit Scaffolding with AI Coding Assistants

**Purpose**: Validate the spec-kit blog post against constitution writing standards, Chirpy conventions, and content quality requirements.
**Created**: 2026-03-17
**Feature**: `_posts/2026-03-17-spec-kit-scaffolding-with-ai-coding-assistants.md`

## Chirpy Front Matter Compliance

- [ ] CHK001 Does the front matter include all required fields (title, date, categories, tags, description)? [Completeness, Constitution §II]
- [ ] CHK002 Is `date` set to UTC midnight (`+0000`) to avoid future-post filtering? [Clarity, Constitution §II]
- [ ] CHK003 Are `categories` exactly two levels deep (`[Domain, Subdomain]`)? [Consistency, Constitution §II]
- [ ] CHK004 Are all `tags` lowercase and hyphenated, with 3–7 entries? [Consistency, Constitution §II]
- [ ] CHK005 Is `description` a 1–2 sentence SEO summary using `>-` block scalar? [Completeness, Constitution §II]
- [ ] CHK006 Is `mermaid: true` set given that the post contains Mermaid diagrams? [Completeness, Constitution §II]

## Writing Quality

- [ ] CHK007 Does every section earn its place, or are there sections that restate what others already cover? [Clarity, Constitution §III]
- [ ] CHK008 Is the writing in active voice throughout, free of filler phrases like "it is worth noting"? [Clarity, Constitution §III]
- [ ] CHK009 Are code examples minimal and self-explanatory without requiring framework-specific knowledge? [Clarity, Constitution §III]
- [ ] CHK010 Are Mermaid diagrams simple enough to render legibly on typical screen widths? [Clarity, Constitution §III]
- [ ] CHK011 Is the target audience (platform engineers, AI practitioners) consistently addressed? [Consistency, Constitution §III]

## Content Accuracy and Attribution

- [ ] CHK012 Are all external projects (spec-kit, CAIPE, Chirpy) linked to their canonical source on first mention? [Completeness, Constitution §IV]
- [ ] CHK013 Are all technical claims about spec-kit verifiable against the official repo? [Completeness, Constitution §IV]
- [ ] CHK014 Does the post avoid over-promoting personal projects (CAIPE) at the expense of reader learning? [Consistency, Constitution §IV]
- [ ] CHK015 Is the OpenAI harness engineering reference in the conclusion linked and accurately summarized? [Completeness, Constitution §IV]
- [ ] CHK016 Does the `.specify/` directory structure shown in the post match the actual spec-kit structure? [Completeness, Gap]

## Simplicity and YAGNI

- [ ] CHK017 Are there diagrams that merely restate what the surrounding text already says? [Clarity, Constitution §V]
- [ ] CHK018 Does the "Full Picture" Mermaid diagram add value beyond what the preceding sections explain? [Clarity, Constitution §V]
- [ ] CHK019 Are all sections necessary, or could any be merged or removed without loss? [Completeness, Constitution §V]

## Chirpy Formatting

- [ ] CHK020 Do all fenced code blocks include a language identifier (`python`, `markdown`, `text`, `bash`, `yaml`, `mermaid`)? [Consistency, Constitution §VI]
- [ ] CHK021 Are Chirpy prompt callouts (`.prompt-tip`, `.prompt-info`) used correctly with proper syntax? [Consistency, Constitution §VI]
- [ ] CHK022 Are heading levels consistent — `##` for major sections, `###` for subsections, with no skipped levels? [Consistency, Constitution §VI]
- [ ] CHK023 Do all tables include proper header separators? [Consistency, Constitution §VI]

## Link Integrity

- [ ] CHK024 Do all external links resolve (spec-kit repo, CAIPE repo, Claude Code docs, Cursor site, harness engineering post)? [Completeness, Quality Gate §2]
- [ ] CHK025 Are internal cross-references (e.g., "more on this below") followed by the referenced content? [Consistency, Gap]

## Scenario Coverage

- [ ] CHK026 Does the post address what happens when a reader has no prior experience with AI coding assistants? [Coverage, Gap]
- [ ] CHK027 Are limitations or trade-offs of spec-kit acknowledged, or is it presented uncritically? [Coverage, Gap]
- [ ] CHK028 Does the "Getting Started" section provide enough detail for a reader to actually adopt spec-kit? [Completeness]

## Notes

- Check items off as completed: `[x]`
- Add comments or findings inline
- Items are numbered sequentially for easy reference
