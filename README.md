# crossfit-claude-skills

A **standalone, open-source** repository of [Claude Agent Skills](https://docs.claude.com)
for CrossFit / functional-fitness coaching. It is the source of truth for the
CrossFit skill content that [Skill Me](https://skillme.dev) ingests into its
Supabase catalog and serves over MCP.

> **Not an official CrossFit, LLC product.** This independent skill repository is
> not endorsed, sponsored, approved, or certified by CrossFit, LLC or its
> affiliates. The **CrossFit Trainer Pack** name and the CrossFit® badges/art are
> used under the maintainer's CrossFit Affiliate and Trainer license (a licensed
> CrossFit affiliate and CF-L2 trainer in good standing). See
> [DISCLAIMER.md](DISCLAIMER.md) and [docs/branding-and-trademarks.md](docs/branding-and-trademarks.md).

This repo is **fully self-contained**: there is no parent, sibling, monorepo, or
shared-core dependency. Clone it alone and you have everything needed to install,
validate, evaluate, and seed the CrossFit catalog.

## What's inside

- **27 skills** under [`skills/`](skills/) — each a single `SKILL.md` with worked
  `examples/` and an `evals/` suite. They cover programming, scaling, movement
  progression and fault analysis, assessment, class delivery and onboarding,
  coaching-level nutrition, injury-aware adaptation, and competition and
  credential preparation.
- A **pack manifest** ([`manifest.json`](manifest.json)) and generated
  **catalog seed** ([`skill-inventory.json`](skill-inventory.json),
  [`seed/seed.sql`](seed/seed.sql)).
- Stable **domain references** ([`references/`](references/)) the skills load on
  demand.
- **Validation, build, and eval tooling** ([`scripts/`](scripts/)).
- Full **docs** ([`docs/`](docs/)).

## Install the skills (via Skill Me MCP)

The Skill Me MCP server is live at `https://skillshelf-ten.vercel.app/api/mcp`.
Once connected in a Claude client:

- **Whole pack:** `install_pack` with slug **`crossfit-coaching`** (the
  CrossFit Trainer Pack).
- **One skill:** `install_skill` with a slug, e.g. `crossfit-workout-designer`.
- Browse with `browse_packs` / `browse_skills`; confirm with `get_active_skills`.

You can also read any skill directly at `skills/<id>/SKILL.md`. See
[docs/installation.md](docs/installation.md).

## The 27 skills

| Skill | What it does |
| --- | --- |
| `crossfit-pack-router` | Routes ambiguous/multi-part requests to the narrowest skill. |
| `crossfit-workout-designer` | Designs one complete workout from stimulus backward. |
| `crossfit-programming-cycle-builder` | Builds balanced multiweek programming. |
| `crossfit-programming-auditor` | Audits existing programming; ranks findings by severity. |
| `crossfit-adaptive-training-plan-manager` | Updates the next period after real results (without stacking misses). |
| `crossfit-specialty-cycle-builder` | Focused single-quality blocks with interference control. |
| `crossfit-stimulus-and-scaling-coach` | Scales a chosen workout to preserve its stimulus. |
| `crossfit-movement-progression-builder` | Develops a skill over weeks (prerequisites → retest). |
| `crossfit-movement-fault-analyzer` | Diagnoses faults from observation only. |
| `crossfit-coaching-cue-generator` | Prioritized, multi-type coaching cues. |
| `crossfit-equipment-substitution-engine` | Pattern/demand-preserving equipment swaps. |
| `crossfit-athlete-assessment` | Full athlete profile, limiters, priorities, tests. |
| `crossfit-weakness-prioritizer` | Ranks what to fix (root vs symptom vs distraction). |
| `crossfit-benchmark-and-testing-builder` | Minimum useful test battery + retest schedule. |
| `crossfit-mobility-assessment-and-programmer` | Classifies a position limitation; short targeted plan. |
| `crossfit-athlete-progress-report` | Progress report from logged data + next priorities. |
| `crossfit-class-plan-builder` | Minute-by-minute class plan from a workout. |
| `crossfit-class-logistics-and-floor-manager` | Heats/stations/space/equipment logistics. |
| `crossfit-foundations-and-onramp-builder` | Onboarding / on-ramp course. |
| `crossfit-population-adaptation-coach` | Adapts for beginners/masters/youth/postpartum (with scope limits). |
| `crossfit-nutrition-habit-coach` | Coaching-level nutrition habits (no MNT / ED treatment). |
| `crossfit-injury-aware-workout-adapter` | Modifies around pain/restrictions without diagnosing. |
| `crossfit-competition-preparation-planner` | Macro competition peaking plan. |
| `crossfit-competition-workout-strategist` | Strategy for a released workout (standards-aware). |
| `crossfit-rules-and-standards-advisor` | Interprets user-supplied current rules (versioned). |
| `crossfit-credential-preparation-coach` | Credential/judging study prep (original material only). |
| `crossfit-coach-performance-reviewer` | Evidence-based review of a coach's delivery. |

See [PACK.md](PACK.md) for the human-readable catalog and routing guide.

## Develop / validate / seed

```bash
npm install
npm run validate   # frontmatter + structure + links + trigger precision + sources
npm run build      # regenerate skill-inventory.json + seed/seed.sql
npm run evals      # eval harness (27 skills, structural + coverage)
npm run check      # all of the above
npm test           # smoke tests
```

Apply [`seed/seed.sql`](seed/seed.sql) to the Skill Me Supabase project to seed
the catalog (idempotent upsert). See [docs/installation.md](docs/installation.md)
and [docs/architecture.md](docs/architecture.md).

## Safety & limitations

These skills produce **coaching-level** content for education and planning. They
do not diagnose, provide medical/rehab care, prescribe medication, treat eating
disorders, override clinicians, or guarantee outcomes. Every coaching skill
applies the [safety-and-referral framework](references/safety-and-referral.md)
proportionately and refers red-flag symptoms (including rhabdomyolysis warning
signs, emphasized for high-volume CrossFit training) to qualified professionals.
See [docs/safety-and-scope.md](docs/safety-and-scope.md).

## License

[MIT](LICENSE). Contributions welcome — see [CONTRIBUTING.md](CONTRIBUTING.md).
