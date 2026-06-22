# Architecture

This repository is a **content + tooling** repo. It produces no runtime service.
Its job is to author, validate, and package CrossFit coaching skills into a form
the [Skill Me](https://skillme.dev) catalog can ingest and serve over MCP.

## Layers

```
SKILL.md (frontmatter + body)        ← human-authored source of truth (per skill)
references/*.md                      ← stable domain frameworks, loaded on demand
   │  build:inventory
   ▼
skill-inventory.json                 ← generated: pack + skills + metadata
   │  build:seed
   ▼
seed/seed.sql                        ← generated: idempotent upsert into Skill Me DB
```

`manifest.json` is the human-authored pack definition (the 27 skill IDs, routing
guide, safety behavior, non-affiliation notice). `validate-*` scripts gate the
source; `build-*` scripts derive the generated artifacts; `run-evals` exercises
the per-skill eval suites.

## Why standalone

This repo has **no** parent, sibling, monorepo, or shared-core dependency. A user
can `git clone` it alone and install, validate, evaluate, and seed the catalog.
Domain-general coaching concepts are implemented here, specialized for CrossFit —
not factored out into a shared library. This keeps the catalog content portable
and auditable in one place.

## How Skill Me consumes it

Skill Me ingests **text**: each skill becomes a row in the `skills` table (keyed
by `slug`, with the `SKILL.md` body in `skill_content`); the pack becomes a row in
`packs`; `pack_skills` associates them. Claude clients then reach the content
through the MCP server tools — `browse_skills`, `browse_packs`, `install_skill`,
`install_pack`, `get_active_skills`. The skill **descriptions** are the primary
triggering surface, so they are optimized for precise activation (see
[skill-authoring-standards.md](skill-authoring-standards.md)).

## Schema dependency

`seed/seed.sql` targets the live Skill Me `skills`/`packs` schema. The exact
columns were confirmed against the project before generation (see
[installation.md](installation.md) for the confirmed column list and the
re-confirmation procedure). If a future schema drift is detected, regenerate with
`npm run build` and re-confirm columns before applying.

## Skill taxonomy vs. catalog category

Each skill carries a rich **internal category** (programming, scaling, movement,
assessment, class-delivery, onboarding, coaching, nutrition, safety, competition,
credentials, orchestration) in `skill-inventory.json`. The Skill Me `skills.category`
column is constrained to a fixed set; all CrossFit skills map to `personal`
(the fitness/health bucket) for catalog purposes. The internal category is
preserved for routing and documentation.
