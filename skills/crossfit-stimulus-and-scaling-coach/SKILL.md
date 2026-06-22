---
name: CrossFit Stimulus and Scaling Coach
description: Use when the user has a SPECIFIC, already-chosen CrossFit workout and asks how to scale or modify it — "how should a beginner scale this?", "how do I adjust Fran?", "I can't do this RX". Expects the workout plus athlete level, limiters, and equipment. Identifies the intended stimulus and scales to preserve it across separate levers (load, volume, substitution, ROM, skill, time cap, rep scheme). Excludes designing a new workout (route to crossfit-workout-designer) and pain/injury-led modification (route to crossfit-injury-aware-workout-adapter).
category: scaling
risk_level: medium
requires_current_rules: false
---

# CrossFit Stimulus and Scaling Coach

Take an **already-chosen workout** and scale it so the athlete stays in the
workout's **intended stimulus** — not merely make it "easier." This skill owns
"how should I scale this?" requests. The central idea, from
[../../references/stimulus-preserving-scaling.md](../../references/stimulus-preserving-scaling.md):
a scale that changes the stimulus (turns a sprint into a grind, a grip test into a
non-grip workout) has **failed even if the athlete finished**. An easier movement
can still be a *poor* scale.

## Workflow

1. **Identify the intended stimulus** of the given workout: time domain, intended
   intensity/pacing, the **limiting quality** (aerobic? grip? absolute load?
   skill?), and what "done right" feels like. See
   [../../references/stimulus-preserving-scaling.md](../../references/stimulus-preserving-scaling.md)
   §1 and [../../references/time-domain-framework.md](../../references/time-domain-framework.md).
2. **Name the athlete's limiter** for *this* workout (what would actually break
   down — grip, engine, a missing skill, the load, ROM).
3. **Choose the scaling lever(s) deliberately** — treat these as **separate**:
   load / volume / movement substitution / ROM / skill / time cap / rep scheme /
   equipment / injury-aware. State which you are pulling and why.
4. **Substitute within pattern and demand**, not by superficial similarity, using
   [../../references/movement-pattern-taxonomy.md](../../references/movement-pattern-taxonomy.md).
5. **Write the scaling paths** — RX / intermediate / beginner — each annotated with
   **what it preserves** and **what it trades**, plus a masters note.
6. **Verify the scale preserves the stimulus**: does the athlete still hit the time
   domain and the intended limiter? Call out where an "easier movement" would be a
   *bad* scale and why.
7. **Add proportionate stop conditions**; if pain/injury is present, stop and route
   (see Safety & scope).

## Inputs

**Required (or inferable):** the specific workout (movements, reps, loads, time cap
or scoring); the athlete's level *or* limiter for this workout.

**Optional (improves the output):** maxes, equipment available, masters/age, skill
ceilings (e.g. "can do 20 unbroken double-unders"), prior training that day, any
restrictions.

## Non-goals

- **Not** designing a new workout from scratch → `crossfit-workout-designer`.
- **Not** building a multiweek plan → `crossfit-programming-cycle-builder`.
- **Not** pain/injury-led modification → `crossfit-injury-aware-workout-adapter`.
- **Not** a generic equipment swap divorced from a workout's stimulus →
  `crossfit-equipment-substitution-engine` (collaborate for the swap, but the
  stimulus call stays here).
- It is a **non-goal** to make a workout "easier" at the cost of its stimulus, or to
  assume a regression preserves the stimulus without checking.
- Does **not** diagnose, prescribe medical care, or guarantee outcomes.

## Default output (Scaling contract)

1. **Identified stimulus** — time domain, intended pacing/intensity, and what
   "done right" feels like.
2. **Limiter** — what would actually break down for this athlete in this workout.
3. **Lever(s) chosen** — which of load/volume/substitution/ROM/skill/time-cap/
   rep-scheme/equipment you are pulling, and why those preserve the stimulus.
4. **Scaling paths** — RX / intermediate / beginner, each annotated with **what it
   preserves** AND **what it trades**.
5. **Masters note** — age/recovery-aware adjustment.
6. **Bad-scale warning** — at least one plausible-but-poor scale and why it changes
   the stimulus (the teaching point).
7. **Risks & stop conditions** — proportionate safety notes; route pain.

## Safety & scope

Apply the safety framework proportionately. For a healthy athlete, scaling is the
right tool and red flags are limited to in-workout stop conditions (sharp joint
pain, dizziness, form breakdown, grip failure causing falls). **If the athlete
reports sharp pain, an injury, or any red flag (chest pain, syncope, neurological
symptoms, suspected fracture, rhabdomyolysis warning signs after high volume),
scaling is the wrong lever — do not just substitute a movement.** Stop, refer per
[../../references/safety-and-referral.md](../../references/safety-and-referral.md),
and route to `crossfit-injury-aware-workout-adapter`. Pain-driven modification is a
different decision from stimulus-driven scaling. Never use intensity as a
substitute for a correct scale, and never prescribe automatic maximal testing.

## Incomplete information

Never fabricate athlete data (maxes, skill ceilings, history). If the athlete's
level or limiter is unknown, state your **assumption** explicitly, give a
conservative **provisional** scale (RPE-anchored loads, regressions that hold the
time domain), and ask only the one question that would change the recommendation
(usually: level, the specific limiter, or equipment). Always return a usable scale
rather than refusing for want of a 1RM, and never assume a regression preserves
the stimulus without verifying it.

## Related Skills and Routing

- **This skill owns** scaling/modifying an already-chosen workout while preserving
  its stimulus.
- **Collaborates with** `crossfit-workout-designer` (which authors the workout and
  its first-pass scaling — defer back to it to *design* a new one; this skill
  handles deep, athlete-specific scaling of a chosen one), and
  `crossfit-equipment-substitution-engine` (for non-obvious implement swaps — pass
  it the identified stimulus and demand axes so the swap is stimulus-aware).
- **Defers to** `crossfit-injury-aware-workout-adapter` whenever pain or an injury
  is central (that is a safety decision, not a stimulus decision), and to
  `crossfit-movement-progression-builder` when the real need is to *build* a missing
  skill over time rather than scale around it today.
- When ambiguous (design vs. scale, scale vs. injury-modify), `crossfit-pack-router`
  disambiguates.
