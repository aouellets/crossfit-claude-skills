# Installation & Seeding

Two audiences: **users** who want the skills inside Claude, and **operators** who
seed the Skill Me catalog from this repo.

## For users — install via Skill Me MCP

The Skill Me MCP server is live at `https://skillshelf-ten.vercel.app/api/mcp`.
Once connected in a Claude client, install the whole pack or individual skills:

- **Whole pack:** call `install_pack` with the pack slug **`crossfit-coaching`**
  (displayed as the **CrossFit Trainer Pack**).
- **One skill:** call `install_skill` with a skill slug, e.g.
  `crossfit-workout-designer`.
- Browse first with `browse_packs` / `browse_skills`; confirm active skills with
  `get_active_skills`.

You can also read the skills straight from this repo — each lives at
`skills/<id>/SKILL.md`.

## For operators — seed the catalog

```bash
npm install
npm run validate     # gate the content
npm run build        # regenerate skill-inventory.json + seed/seed.sql
npm run evals        # run the eval harness
```

Then apply `seed/seed.sql` to the Skill Me Supabase project (idempotent upsert).

### Confirmed schema (as used by seed.sql)

The seed targets these confirmed columns:

- **`skills`**: `slug` (unique key), `name`, `description`, `category`
  (CHECK: `coding|writing|research|productivity|data|design|business|personal`),
  `subcategory`, `source_url`, `author`, `skill_content`, plus defaulted
  `install_count`, `rating_avg`, `rating_count`, `verified`, `featured`, `free`,
  `tags`, timestamps.
- **`packs`**: `slug` (unique key), `name`, `tagline`, `description`, `author`,
  `author_url`, `category` (CHECK adds `mixed`), `tags`, `repo_url`, defaults,
  timestamps.
- **`pack_skills`**: `pack_id`, `skill_id`, `position` (association table).

All CrossFit skills are seeded with `category = 'personal'`; the pack uses
`category = 'mixed'`. The pack is seeded as the **CrossFit Trainer Pack** (the
CrossFit® name/badges used under the maintainer's affiliate/trainer license),
with the not-endorsed notice written into the pack description.

### Re-confirming the schema

If you suspect schema drift, re-list the columns (e.g. via the Supabase MCP
`list_tables` with `verbose: true`, or `\d public.skills` / `\d public.packs`)
before applying. `build-seed.ts` will emit a clearly-marked **template** with
column placeholders and a TODO header if it is run in `--template` mode (when the
live schema cannot be confirmed) — never apply a template blindly.

## Requirements

- Node.js 20+ for the tooling.
- Write access to the Skill Me Supabase project to apply the seed.
