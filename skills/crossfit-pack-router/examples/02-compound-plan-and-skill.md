# Example 2 — Compound request: a plan AND fix a movement AND a swap

**Prompt:** "Build me a 6-week program, help me finally get my snatch better, and I
don't have a rower so tell me what to use instead."

**Context:** Intermediate athlete, 3 years training, trains 5x/week, has barbell +
rack + dumbbells + bike, no rower, no injuries. Snatch 1RM 60 kg, "feels stuck".

---

## Routing decision

### Chosen skill(s)
Three distinct asks, three owners:
1. `crossfit-programming-cycle-builder` — the 6-week program (multiweek scope).
2. `crossfit-movement-progression-builder` — the snatch development track
   (skill built over time, not a one-off fault diagnosis).
3. `crossfit-equipment-substitution-engine` — the rower substitution.

### Why
- "6-week program" is unambiguously multiweek -> cycle builder, not the designer.
- "Get my snatch better" over time is a progression track, not a single-session
  fault call (`crossfit-movement-fault-analyzer` would own a *diagnosis from
  observation* of one bad rep — that is not what was asked).
- "What to use instead of a rower" is a clean substitution question.

### Ordered steps and context to pass
1. **Equipment substitution** first (fast, unblocks the rest): pass the available
   kit (bike, dumbbells, no rower). Output: the rower swap (e.g. bike-erg calories
   at an adjusted ratio, with what it preserves/loses) -> feeds into the cycle.
2. **Movement progression (snatch)** — pass the 60 kg 1RM and "stuck" report.
   Output: a snatch progression with criteria and retests -> becomes the cycle's
   Olympic-lift thread.
3. **Cycle builder** — consumes the substitution map and the snatch track and
   weaves them into the 6-week block with intensity distribution and deload.

### Safety note
No pain or red flags -> performance route. Snatch loading stays %1RM/RPE-based; no
automatic max testing prescribed.

### Still needed
Nothing blocking. The cycle builder will ask its own contract questions (goal
emphasis, recovery) once it owns the handoff.
