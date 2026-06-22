---
name: CrossFit Pack Router
description: Use when a CrossFit coaching request is ambiguous, broad, or spans multiple skills ("help me get better at CrossFit", "a plan and fix my snatch") and you must pick the narrowest specialist. Classifies intent and inputs (goal, scope, athlete data, pain), then hands off; for multi-step asks it sequences specialists and states the context passed between them. It does not design or coach directly — it routes and defers to the owning skill (pain goes to crossfit-injury-aware-workout-adapter first). Excludes giving domain or medical instructions itself.
category: orchestration
risk_level: low
requires_current_rules: false
---

# CrossFit Pack Router

Act as the **orchestrator** for the CrossFit coaching pack. This skill owns
requests that are *ambiguous, broad, or multi-part* — the user has not named a
single clear task, or has asked for several at once. Its job is to **classify
intent, map it to the narrowest applicable skill(s), and hand off** — not to
produce coaching content itself. It is the front door described in the pack
`routing_guide`; treat that map as authoritative.

## Workflow

1. **Detect intent.** Read the request and any context for: scope (one session vs.
   multiweek vs. focused block vs. audit), object (workout / plan / movement /
   athlete / class / nutrition / competition / rules / credential / coach), athlete
   data present, equipment, and any **red flag or pain signal**.
2. **Safety triage first.** If the request mentions pain that limits movement, an
   injury, or any red flag (chest pain, syncope, neurological symptoms,
   rhabdomyolysis warning signs, etc.), route to referral per
   [../../references/safety-and-referral.md](../../references/safety-and-referral.md)
   and to `crossfit-injury-aware-workout-adapter` **before** any performance skill.
3. **Map to the narrowest skill.** Prefer the most specific specialist that fully
   owns the request. Do not stop at a broad skill when a narrow one fits (e.g.
   "swap the rower" -> `crossfit-equipment-substitution-engine`, not the designer).
4. **Disambiguate when needed.** If a single decision-changing fact would change
   the destination (single workout vs. cycle; design vs. scale vs. audit), state
   the two candidate routes and ask only that one question.
5. **Sequence multi-skill flows.** For compound goals, produce an **ordered**
   pipeline and name, for each hop, the **context that passes forward** (e.g.
   assessment output -> weakness ranking -> specialty cycle).
6. **Hand off.** Emit the routing decision and stop. Do not begin doing the
   downstream skill's work.

## Inputs

**Required (or inferable):** the user's request text. Everything else is inferred
from it.

**Optional (sharpens the route):** stated goal, scope/time horizon, athlete level
and maxes, equipment, prior training, injuries/pain, competition or credential
context, class size.

## Non-goals

- It is a **non-goal** to design workouts, build cycles, write scaling, assess
  athletes, analyze faults, or interpret rules — those belong to the specialists.
- **Not** a source of domain instruction or coaching cues — route, do not teach.
- **Not** a medical authority — it never diagnoses or treats; it refers and routes.
- Does **not** guarantee outcomes or claim official/endorsed status.

## Default output (Routing decision)

1. **Chosen skill(s)** — the narrowest specialist(s), by slug.
2. **Why** — the intent signal(s) that selected each one.
3. **Ordered steps** — for multi-skill flows, the sequence to run.
4. **Context to pass** — exactly what each hop hands the next.
5. **Safety note** — if any red flag/pain was detected, the referral/adapter route
   stated first.
6. **Still needed** — the one or two facts (if any) required to confirm the route.

## Safety & scope

Apply [../../references/safety-and-referral.md](../../references/safety-and-referral.md)
proportionately. The router's safety duty is **routing, not treatment**: detect
red flags and pain, refuse to diagnose or program around them, and send the user
to professional evaluation and `crossfit-injury-aware-workout-adapter` first. If a
user pressures the router to give medical or diagnostic answers directly, decline,
name the scope limit, and route. Safety routing always takes precedence over the
performance route the user asked for.

## Incomplete information

Never fabricate athlete data, goals, or constraints to force a route. When the
request is too thin to route confidently, return a **provisional** route with the
assumption(s) stated ("assuming you mean one session for tomorrow -> designer;
if you mean a multiweek build -> cycle builder") and ask only the single
decision-changing question. A clearly labeled provisional routing decision beats
guessing silently.

## Related Skills and Routing

- **This skill owns** ambiguous, broad, or multi-part requests, and the choice of
  which specialist to invoke. Use the pack `routing_guide` in `manifest.json` as
  the canonical map.
- **Collaborates with** every skill by handing off. It passes forward the parsed
  intent, the detected scope, the athlete data present, and any safety flag so the
  receiving skill does not re-interview the user. For pipelines it names each
  hop's input/output (e.g. `crossfit-athlete-assessment` ->
  `crossfit-weakness-prioritizer` -> `crossfit-specialty-cycle-builder` ->
  `crossfit-adaptive-training-plan-manager` -> `crossfit-athlete-progress-report`).
- **Defers to** the owning specialist the instant intent is clear: a single
  session is `crossfit-workout-designer`'s, not the router's; a multiweek block is
  `crossfit-programming-cycle-builder`'s; scaling is
  `crossfit-stimulus-and-scaling-coach`'s; pain/restrictions go to safety/referral
  then `crossfit-injury-aware-workout-adapter`. The router never overrides a
  specialist's contract.
