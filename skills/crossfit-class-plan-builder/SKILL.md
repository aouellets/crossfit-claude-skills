---
name: CrossFit Class Plan Builder
description: Use when the user has a chosen workout and wants it turned into a coached class or lesson plan (e.g. "turn this into a 60-minute class", "build a class plan for this WOD"). Produces a minute-by-minute timeline with timing, coach positioning, teaching points, scaling checkpoints, transitions, buffers, and a late-running contingency; defaults to 60 minutes. Excludes designing the workout (route to crossfit-workout-designer) and large-class floor logistics/equipment-sharing (crossfit-class-logistics-and-floor-manager owns heats and station maps).
category: class-delivery
risk_level: medium
requires_current_rules: false
---

# CrossFit Class Plan Builder

Convert a **given** workout into a runnable, minute-by-minute coached class plan.
This skill owns the request "I have the workout, now make it a class" — it adds
timing, teaching, rehearsal, and floor flow on top of an already-designed piece.
Default class length is **60 minutes**; support other lengths by scaling each block
proportionally. Build from the template and rules in
[../../references/class-planning.md](../../references/class-planning.md).

## Workflow

1. **Read the supplied workout and confirm its intended stimulus.** If no workout
   was given, route to `crossfit-workout-designer` rather than inventing one.
2. **Screen the request for safety first.** If the workout arrives with an
   athlete-reported injury or pain that limits movement baked in, do **not** plan
   the class around it — refer per
   [../../references/safety-and-referral.md](../../references/safety-and-referral.md)
   and route to `crossfit-injury-aware-workout-adapter` before building the plan.
3. **Pick the class length** (default 60 min) and scale the block lengths from the
   template in [../../references/class-planning.md](../../references/class-planning.md).
4. **Lay out the blocks** — prep, arrival, whiteboard, general warm-up, specific
   warm-up, teaching, rehearsal, build, setup, brief, workout, recovery, cooldown,
   cleanup, notes — each with an **exact clock window** and the coach's action.
5. **Write 2 to 3 teaching points per movement**, weighted toward the highest-skill
   or highest-risk movement in the piece.
6. **Place scaling checkpoints** — the explicit moments the coach confirms each
   athlete's scaling choice (usually during specific warm-up, rehearsal, and the
   setup brief).
7. **Specify coach positioning** for each phase so the whole floor (especially
   overhead/loaded work) stays in view; name safety zones.
8. **Define transitions and buffers**, and write a **late-running contingency** that
   says exactly what to cut if the class is behind (never the safety brief or the
   warm-up of a heavy/high-skill piece).
9. **Close with coach notes** — what to watch for and how to reset for the next class.

## Inputs

**Required:** the workout to be coached (movements, format, loads/standards) — or a
clear pointer to one. Without a workout, this skill routes to the designer.

**Optional (improves the output):** class length (defaults to 60 min), class size
and ability mix, available equipment, the workout's stated intended stimulus,
known injuries/constraints, and the coach's experience level.

## Non-goals

- **Not** designing the workout → `crossfit-workout-designer`.
- **Not** large-class floor logistics, heats, station maps, or equipment-sharing
  math → `crossfit-class-logistics-and-floor-manager`.
- **Not** scaling the workout itself for an individual → `crossfit-stimulus-and-scaling-coach`.
- **Not** an on-ramp/foundations curriculum → `crossfit-foundations-and-onramp-builder`.
- It is a non-goal to plan a normal class around an unaddressed injury; that routes
  to safety/injury-aware first. Does **not** diagnose, prescribe medical care, or
  guarantee outcomes.

## Default output (Class plan contract)

1. **Minute-by-minute timeline** — every block with its clock window, and the
   coach action for that window.
2. **Per-movement teaching points** — 2 to 3 cues each, weighted to the hardest/
   riskiest movement.
3. **Scaling checkpoints** — the named moments the coach confirms each athlete's
   scaling choice.
4. **Coach positioning** — where the coach stands per phase; named safety zones.
5. **Transitions** — how athletes move between blocks/stations.
6. **Buffers + late-running contingency** — built-in slack and exactly what to cut
   if behind.
7. **Coach notes** — what to watch, and reset for the next class.

## Safety & scope

Apply
[../../references/safety-and-referral.md](../../references/safety-and-referral.md)
proportionately. For an ordinary class, this means a clear whiteboard brief with
stop conditions, an adequate warm-up before loaded/high-skill work, and coach
positioning that keeps loaded movement in view. If the workout or its athletes come
with a red flag (pain that limits movement, chest pain, dizziness, rhabdo warning
signs after a high-volume piece, etc.), the plan is **not** the deliverable yet —
refer for evaluation and route to `crossfit-injury-aware-workout-adapter` first.
Never cut the safety brief or the warm-up of a heavy/high-skill piece to save time.

## Incomplete information

Never fabricate the workout, the class length, or athlete data. If the workout is
missing, route to `crossfit-workout-designer`. If only minor details are missing
(class length, size, equipment), return a **clearly labeled provisional** plan using
conservative defaults (60 minutes, a typical class size, standard equipment), state
each assumption inline, and ask only for the one or two fields that would most
change the timeline. Always deliver a usable plan from what was given.

## Related Skills and Routing

- **This skill owns** turning a chosen workout into a minute-by-minute coached class
  plan.
- **Collaborates with** `crossfit-workout-designer` (which hands this skill the
  workout, its intended stimulus, and movement standards) and
  `crossfit-class-logistics-and-floor-manager` (pass it the plan when the class is
  large or equipment-constrained and needs heats/station maps/sharing logic).
- **Defers to** `crossfit-workout-designer` when there is no workout yet; to
  `crossfit-class-logistics-and-floor-manager` for floor logistics and
  equipment-sharing; to `crossfit-stimulus-and-scaling-coach` for deep individual
  scaling; and to `crossfit-injury-aware-workout-adapter` (after a safety referral)
  when an injury is baked into the request.
- When the request is ambiguous (design vs. plan vs. logistics),
  `crossfit-pack-router` disambiguates.
