---
name: CrossFit Equipment Substitution Engine
description: Use when the user lacks a piece of equipment and needs a substitute movement or implement for a workout (e.g. "no rower, what instead?", "no barbell for thrusters"). Maps the movement's demand profile (joint action, force, energy system, skill, impact), proposes the closest feasible swap, and states what it preserves vs. fails to reproduce plus a loading adjustment. Expects the movement and available gear. Excludes general difficulty scaling, owned by crossfit-stimulus-and-scaling-coach, and designing a workout, owned by crossfit-workout-designer.
category: programming
risk_level: low
requires_current_rules: false
---

# CrossFit Equipment Substitution Engine

Find the **closest feasible equipment substitution** for a movement the athlete
cannot perform as written, and be honest about the gap. This skill owns "I don't
have X — what do I use instead?" It substitutes **within pattern and demand**, not
by superficial similarity, and always states what the swap preserves and what it
fails to reproduce.

## Workflow

1. **Profile the original movement's demand** along the axes in
   [../../references/movement-pattern-taxonomy.md](../../references/movement-pattern-taxonomy.md):
   joint action(s), force orientation, contraction type and time under tension,
   primary musculature and energy system, skill/coordination demand, and
   impact/repeated joint stress.
2. **Name the intended stimulus** the movement serves in this workout (engine?
   grip? absolute load? skill?) using
   [../../references/stimulus-preserving-scaling.md](../../references/stimulus-preserving-scaling.md)
   — the swap must protect the limiter, not just the muscle group.
3. **Propose the closest feasible substitution(s)** from the available equipment,
   matching as many demand axes as possible.
4. **State what it preserves** — the axes the swap reproduces well.
5. **State what it does NOT reproduce** — the axes it changes or loses (impact,
   grip, force orientation, skill, etc.). This is mandatory; an honest swap names
   its gap.
6. **Give a loading or rep adjustment** so the substitution lands in the same
   stimulus (e.g. calorie/rep ratios for bike vs. row, load tweak for dumbbell
   vs. barbell).
7. **Flag when no good swap exists** — if the available equipment cannot preserve
   the stimulus, say so and offer the least-bad option clearly labeled as a
   compromise.

## Inputs

**Required (or inferable):** the original movement, and the equipment actually
available (or the missing piece).

**Optional (improves the output):** the workout it appears in and its intended
stimulus, the athlete's level and loads, space constraints, and any
pain/restriction (which changes the situation entirely).

## Non-goals

- **Not** general scaling for difficulty or stimulus → `crossfit-stimulus-and-scaling-coach`
  (substituting for *difficulty* rather than *missing equipment* is a **non-goal**
  here).
- **Not** designing a workout from scratch → `crossfit-workout-designer`.
- **Not** an injury-driven modification → `crossfit-injury-aware-workout-adapter`.
- Does **not** diagnose, prescribe medical care, or guarantee equivalence —
  substitutions approximate, they do not replicate.

## Default output (Substitution contract)

1. **Original demand profile** — the movement scored along the demand axes.
2. **Intended stimulus** — what the movement is there to deliver in this workout.
3. **Proposed substitution(s)** — the closest feasible swap(s) from available gear.
4. **What it preserves** — the demand axes reproduced well.
5. **What it does NOT reproduce** — the axes lost or changed (always stated).
6. **Loading / rep adjustment** — the ratio or load tweak to match the stimulus.

## Safety & scope

Low risk: swapping implements, not loading to failure. Apply
[../../references/safety-and-referral.md](../../references/safety-and-referral.md)
proportionately — note any new impact or joint stress a swap introduces (e.g.
running adds impact a rower did not). If the reason for the swap is **pain** or a
restriction rather than missing equipment, this is an injury situation: refer and
route to `crossfit-injury-aware-workout-adapter`, do not just swap movements.
Never claim a substitution is equivalent when it changes the stimulus.

## Incomplete information

Never fabricate the athlete's loads or what equipment they have. If the available
equipment is unclear, give a **clearly labeled provisional** substitution for the
most common setup, state the assumption, and ask the single question that would
change it (usually: "what do you actually have?"). If the workout's intended
stimulus is unknown, infer it conservatively and say so — do not optimize a swap
against a stimulus you guessed silently.

## Related Skills and Routing

- **This skill owns** equipment substitutions: "no X, what instead?"
- **Collaborates with** `crossfit-workout-designer` (which calls this skill for
  non-obvious swaps in a workout it built — pass forward the movement, its
  intended stimulus, and the available gear) and `crossfit-stimulus-and-scaling-coach`
  (which uses the demand-axis logic when a scale involves an implement swap).
- **Defers to** `crossfit-stimulus-and-scaling-coach` when the goal is to make a
  movement easier/harder rather than replace missing equipment; to
  `crossfit-workout-designer` when the ask is to build a new workout around the
  available gear; and to `crossfit-injury-aware-workout-adapter` when the swap is
  driven by pain or restriction.
- When ambiguous (missing-gear swap vs. difficulty scale vs. injury), the
  `crossfit-pack-router` disambiguates.
