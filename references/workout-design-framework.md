# Workout Design Framework

A repeatable method for designing a single CrossFit / mixed-modal workout so the
result is intentional rather than random movement combinations. Used directly by
`crossfit-workout-designer` and referenced by class, scaling, and audit skills.

## Design from stimulus backward

1. **Name the intended stimulus first.** What adaptation/experience should this
   produce? Examples: "sustained aerobic, conversational-hard, no redline";
   "high-power anaerobic, near-max, full recovery between"; "muscular-endurance
   grind under moderate load"; "skill + light metcon". Everything else serves
   this. See [coaching-principles.md](coaching-principles.md) §3.
2. **Pick the time domain** that produces that stimulus (see
   [time-domain-framework.md](time-domain-framework.md)). Short (<5 min), medium
   (5–15), long (15–30+), or interval. The domain dictates the realistic
   intensity.
3. **Choose movements by pattern, not by habit.** Cover/complement patterns from
   [movement-pattern-taxonomy.md](movement-pattern-taxonomy.md). Balance push/
   pull, hinge/squat, and monostructural vs. mixed. Avoid stacking the same joint
   stress (e.g. heavy hinge + high-volume box jumps + running in one short
   sprint).
4. **Set loading and rep schemes relative to the athlete.** Use %1RM, RPE, or
   "moderate/should-not-redline" guidance tied to the stimulus, not arbitrary
   numbers. Loads should let the intended pacing actually happen.
5. **Define movement standards** (range of motion, no-rep criteria) so the score
   means something and the stimulus is preserved.
6. **Write scaling paths up front** — RX / intermediate / beginner — each
   preserving the stimulus, plus masters considerations and equipment
   alternatives. See [stimulus-preserving-scaling.md](stimulus-preserving-scaling.md).
7. **State the coaching focus** (the one or two things to watch) and **risks /
   stop conditions** (apply [safety-and-referral.md](safety-and-referral.md)
   proportionately).
8. **Give a rationale** connecting the prescription back to the stimulus and the
   athlete/phase.

## Inputs

Required: intended stimulus *or* enough to infer it (goal, level), time available,
equipment. Optional but improves output: athlete maxes, class size/format, phase
of training, restrictions/injuries, prior days' work (to avoid interference).

## Default output contract (Workout)

Use this structure unless a more specific skill overrides it:

1. **Objective** — one line: what this session is for.
2. **Prescription** — format, movements, reps, loads, time cap / scoring.
3. **Intended stimulus** — the adaptation + felt experience; pacing intent.
4. **Target performance** — expected time range, rounds, or score band.
5. **Loading guidance** — absolute and relative (%1RM / RPE) options.
6. **Movement standards** — ROM / no-rep criteria.
7. **Scaling paths** — RX / intermediate / beginner (stimulus preserved),
   masters considerations, equipment alternatives.
8. **Coaching focus** — 1–2 priorities.
9. **Risks & stop conditions** — proportionate safety notes.
10. **Rationale** — why this serves the stimulus / athlete / phase.

## Quality bar

Specific, measurable, internally consistent, realistic in the time available, and
honest about assumptions. Avoid: random movement pairings, false precision,
automatic maximal testing, intensity used as a substitute for design logic, and
caveats so heavy the workout becomes unusable. If key inputs are missing, return a
clearly labeled provisional workout with conservative defaults and state the
assumptions.
