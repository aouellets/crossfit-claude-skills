---
name: CrossFit Coaching Cue Generator
description: Use when a coach wants cues to fix or improve an already-named movement or fault (e.g. "cues for the squat", "cues to fix early arm pull", "how to cue kipping rhythm"). Generates cues by type — verbal, visual, tactile (consensual only), external/internal-focus, constraint, drill — then prioritizes the one or two best and says when to stop talking. Expects the movement plus the fault. Excludes diagnosing faults from raw observation, owned by crossfit-movement-fault-analyzer, and building a skill over weeks, owned by crossfit-movement-progression-builder.
category: coaching
risk_level: low
requires_current_rules: false
---

# CrossFit Coaching Cue Generator

Generate a **focused menu of coaching cues** for one named movement or fault, then
**prioritize one or two** that will move the needle now — and state **when the
coach should stop cueing and let the athlete move**. This skill owns the request
"give me cues for X." It assumes the fault or goal is already named; it does not
diagnose from scratch.

## Workflow

1. **Restate the target** — the movement and the specific fault or goal in one
   line (e.g. "back squat, knees caving in on the way up"). If the user has not
   named a fault and only describes raw video/observation, that is diagnosis —
   route to `crossfit-movement-fault-analyzer` first.
2. **Identify the likely cause class** at a coaching level (mobility,
   motor-control, position, awareness, or pacing/rhythm), using
   [../../references/movement-pattern-taxonomy.md](../../references/movement-pattern-taxonomy.md)
   to keep the cue inside the right pattern and joint action. State this as a
   working read, not a diagnosis.
3. **Generate a small menu by cue type** — verbal, visual (demo/comparison),
   tactile (**consensual only**), external-focus, internal-focus, constraint-based,
   and drill-based. Draw movement-specific language from
   [../../references/weightlifting-progressions.md](../../references/weightlifting-progressions.md)
   and [../../references/gymnastics-progressions.md](../../references/gymnastics-progressions.md)
   where relevant. Do not dump all seven for every fault — offer the ones that fit.
4. **Prioritize one or two high-value cues.** Athletes can act on one thing at a
   time; name the single cue to try first and the backup if it does not land.
   Prefer external-focus cues for fast/ballistic faults unless an internal cue is
   clearly better.
5. **Offer one constraint or drill** that makes the correct movement the path of
   least resistance (often beats more talking).
6. **State when to stop cueing** — the signal that the athlete now needs reps and
   silence, not more words (over-coaching is itself a fault).

## Inputs

**Required (or inferable):** the movement, and the fault or improvement goal.

**Optional (improves the output):** athlete level/experience, what the coach has
already tried, whether tactile contact is appropriate and consented, time/format
of the session, any pain or restriction (which changes the situation entirely).

## Non-goals

- **Not** fault diagnosis from raw observation/video → `crossfit-movement-fault-analyzer`
  (it is a **non-goal** here to infer the fault when none is named).
- **Not** a multi-session skill build or progression → `crossfit-movement-progression-builder`.
- **Not** designing or scaling the workout the movement appears in →
  `crossfit-workout-designer` / `crossfit-stimulus-and-scaling-coach`.
- Does **not** diagnose injury or program around pain; if the "fault" is pain,
  refer (see Safety & scope).

## Default output (Cue contract)

1. **Target** — the movement and the named fault or goal, restated.
2. **Working read** — the likely cause class (coaching-level, not a diagnosis).
3. **Prioritized cues** — the **1–2** cues to try first, in order, with the exact
   words to say.
4. **Cue menu by type** — a short labeled set (verbal / visual / tactile /
   external-focus / internal-focus) for when the first cue does not land. Tactile
   entries are explicitly marked **"ask consent first."**
5. **Constraint or drill** — one setup that fixes it without talking.
6. **When to stop cueing** — the observable signal to go quiet and let them move.

## Safety & scope

Low risk: this is coaching language, not loading. Apply
[../../references/safety-and-referral.md](../../references/safety-and-referral.md)
proportionately. **Tactile cues require explicit consent every time** — name this
in any tactile suggestion; never imply a coach should touch an athlete without
asking. If the described "fault" is actually pain, instability, or a red flag
(sharp joint pain, giving way, neurological symptoms), do **not** generate cues to
push through it — recommend evaluation and route to
`crossfit-injury-aware-workout-adapter` or a professional. Never diagnose.

## Incomplete information

Never fabricate what the coach saw or the athlete's history. If the fault is named
but the cause is ambiguous, give a **clearly labeled provisional** cue set covering
the two most likely causes, state the assumption, and ask the single question that
would narrow it (usually: "where in the rep does it break down?"). If **no** fault
is named at all, do not invent one — route to `crossfit-movement-fault-analyzer`.

## Related Skills and Routing

- **This skill owns** "give me cues for / to fix <named movement or fault>."
- **Collaborates with** `crossfit-movement-fault-analyzer` (it diagnoses the
  fault from observation; this skill turns a named fault into cues — pass forward
  the named fault and cause read) and `crossfit-coaching-cue-generator`'s output
  feeds in-session coaching for `crossfit-class-plan-builder`.
- **Defers to** `crossfit-movement-fault-analyzer` when the user supplies raw
  observation and no fault is named; to `crossfit-movement-progression-builder`
  when the ask is to build the skill over weeks rather than fix it now; and to
  `crossfit-injury-aware-workout-adapter` when pain is the real issue.
- When ambiguous (diagnose vs. cue vs. progress), `crossfit-pack-router`
  disambiguates.
