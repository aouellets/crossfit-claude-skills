# Skill Authoring Standards (Skill Me)

Every skill in this repo follows this standard. Validation enforces the
structural parts; reviewers enforce the rest. Read this before adding or editing
a skill.

## File layout

```
skills/<id>/
  SKILL.md            # required
  examples/           # ≥3 worked examples (one concern each)
  evals/
    cases.json        # ≥10 eval prompts + ≥1 adversarial case
    rubric.md
    expected-behaviors.md
```

The `<id>` (folder name) is the catalog **slug**: `lowercase-hyphenated`,
globally unique across the repo. Only include subdirectories a skill needs, but
every skill needs `SKILL.md`, `examples/`, and `evals/`.

## Frontmatter

```yaml
---
name: Display Title In Title Case
description: <front-loaded trigger condition, third person>
---
```

- `name` — human display title, Title Case.
- `description` — **the primary triggering surface** in `browse_skills` and
  `get_active_skills`. It must, in the third person:
  1. front-load **when** Claude should load the skill;
  2. name the **user language / phrasing** that signals it;
  3. state the **inputs** it expects;
  4. state what it **excludes** (non-goals at a glance);
  5. name **which sibling skill owns the request** when adjacent.
  - Trigger-precise. Never "Helps with CrossFit." `validate:triggers` rejects
    vague descriptions and duplicate names.

## Body (`SKILL.md`) — required sections

Write imperative prose (you are instructing Claude). Include, in order:

1. **`# Display Title`** heading.
2. **Purpose / when this owns the request** — one or two lines.
3. **Workflow** — the steps Claude follows to produce the output.
4. **Inputs** — **required** vs. **optional**, explicitly separated.
5. **Non-goals** — explicit exclusions (what this skill does *not* do).
6. **Default output** — the structured contract this skill returns by default
   (reuse the contracts in [evaluation-methodology.md](evaluation-methodology.md)
   and the references where the type matches).
7. **Safety & scope** — apply
   [../references/safety-and-referral.md](../references/safety-and-referral.md)
   proportionately; name the red flags relevant to this skill.
8. **Incomplete information** — how to proceed when data is missing: always
   return a clearly labeled **provisional** answer with conservative defaults,
   ask only for fields that materially change the output, and **never fabricate
   athlete data**.
9. **Related Skills and Routing** — when this skill owns the request, when it
   collaborates (and what context passes between skills), and when another skill
   takes precedence. Resolve known overlaps explicitly.

Keep `SKILL.md` operational and concise. Push large, stable domain material into
`references/` and load it on demand (link with relative paths like
`../../references/<file>.md`).

## Output quality bar

Outputs must be specific, measurable, internally consistent, appropriate to the
athlete and phase, realistic in the available time, explicit about missing data
and assumptions, free of fabricated standards/credentials and false certainty,
and useful without major rewriting. Use concrete prescriptions (duration, sets,
reps, loading, %1RM/RPE, rest, cues, progression/regression criteria, retest
dates). Avoid: generic motivation, random movement combinations, excessive
caveats, false precision, treating soreness as proof, intensity as a substitute
for programming logic, automatic maximal testing, diagnosing faults from
insufficient evidence, and assuming a regression preserves stimulus.

## Trademark & non-affiliation

Capitalize CrossFit (capital C, capital F); never use it as a verb; never label
the skill/pack/repo official, certified, or endorsed. See
[branding-and-trademarks.md](branding-and-trademarks.md).

## Internal links

Use relative links to references and sibling skills so `validate:links` can verify
them. From `skills/<id>/SKILL.md`, references are at `../../references/<file>.md`.
