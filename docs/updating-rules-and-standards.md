# Updating Rules and Standards

Competition rules and movement standards change by **season, event, and
division**. Two skills are rules-dependent —
`crossfit-rules-and-standards-advisor` and
`crossfit-competition-workout-strategist` — and must never hardcode or silently
reuse stale standards.

## The hard rules

1. **No embedded proprietary text.** This repo embeds no CrossFit manuals or
   rulebooks and scrapes no site. `references/source-version-registry.json` holds
   **metadata pointers only**.
2. **Check event / season / division first.** A rules-dependent answer must
   establish which competition and season it concerns before applying anything.
3. **Use only a matching version.** If no registry entry matches the requested
   season, do not apply a different season's standard.
4. **Warn when stale.** If the available source is older than the requested
   season (or season is unknown), warn explicitly that standards may have changed.
5. **Distinguish official rule from interpretation,** and never present common gym
   practice as an official rule.
6. **Request current text when missing,** and otherwise continue with a clearly
   labeled **conditional** analysis. Recommend confirmation from event staff.
7. **Never fabricate** standards, scoring, or penalties.

## Registry entry shape

Each entry in `source-version-registry.json` carries:

`source_id`, `organization`, `document_title`, `season`, `effective_date`,
`retrieved_date`, `authorization_status`, `official_source_reference`,
`supersedes`, `notes`.

## Adding / updating a source

1. Obtain the **user-authorized** official rule reference (URL or citation). Do
   not paste proprietary full text into the repo.
2. Add an entry with the real `season`, `effective_date`, `retrieved_date`, and
   `authorization_status`; set `supersedes` to the prior `source_id` it replaces.
3. Run `npm run validate:sources` — it checks the registry is well-formed, that
   `supersedes` references resolve, and that placeholder/unauthorized entries are
   flagged (not silently trusted).
4. The rules-dependent skills still require the **user to supply or confirm the
   actual rule text** at request time; the registry only records provenance.

## When a user supplies rule text

Treat user-supplied rule text as the source for that one analysis, cite it back,
label official-vs-interpretation, flag ambiguity, and recommend confirming with
event staff. Do not persist proprietary text into the repository.
