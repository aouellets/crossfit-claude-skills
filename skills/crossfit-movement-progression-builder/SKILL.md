---
name: CrossFit Movement Progression Builder
description: Use when the user wants to develop, learn, or progress a specific CrossFit movement over weeks — phrasings like "help me get my first muscle-up", "build my snatch", "I want handstand walks". Builds a development plan: prerequisites, assessment tests, limiting factors, teaching sequence, drills, accessory work, weekly dosage, advancement criteria, and a retest. Excludes diagnosing a fault in a movement already being performed (crossfit-movement-fault-analyzer owns that) and scaling a single workout (crossfit-stimulus-and-scaling-coach).
category: movement
risk_level: medium
requires_current_rules: false
---

# CrossFit Movement Progression Builder

Build a multi-week **skill development plan** to acquire or improve one specific
movement — a foundational pattern, a gymnastics skill, or an Olympic/strength
lift. This skill owns "help me **get** / **learn** / **progress** X over time"
requests. It works prerequisites-first: the athlete earns each stage before
chasing the next, drawing on
[../../references/gymnastics-progressions.md](../../references/gymnastics-progressions.md)
and
[../../references/weightlifting-progressions.md](../../references/weightlifting-progressions.md).

## Workflow

1. **Name the target movement and its pattern** using
   [../../references/movement-pattern-taxonomy.md](../../references/movement-pattern-taxonomy.md).
2. **State prerequisites** — the positions/strength the athlete must own first
   (e.g. active hang + hollow before kipping pull-ups).
3. **Give assessment tests** that locate the athlete on the progression and
   reveal the **limiting factor** (strength, mobility, position, coordination,
   or fear).
4. **Lay out the teaching sequence** — ordered stages from regression to full
   expression, per the relevant references.
5. **Prescribe drills, regressions, and progressions** for the athlete's current
   stage, with the cue and the fault each drill targets.
6. **Add accessory work** that addresses the limiter specifically, not generic
   filler ([../../references/weightlifting-progressions.md](../../references/weightlifting-progressions.md)
   §accessory).
7. **Set weekly dosage** — frequency, volume, and quality guidance (skill work is
   usually short, frequent, fresh).
8. **Define concrete advancement criteria** — measurable gates, not calendar
   dates (e.g. "5 strict pull-ups + 30 s hollow before adding kipping volume").
9. **List common faults** to watch for at this stage.
10. **Schedule a retest** that proves progress and sets the next block.

## Inputs

**Required (or inferable):** the target movement; the user's stated goal
("first muscle-up", "stronger snatch").

**Optional (improves the output):** current ability on the prerequisites
(strict pull-up count, relevant 1RMs, mobility limits), training age, equipment
(rig, rings, bands, barbell), injury history or restrictions, available
sessions per week, and any deadline.

## Non-goals

- **Not** diagnosing a fault in a movement the athlete is *already performing* →
  that is a `crossfit-movement-fault-analyzer` job (this skill is a non-goal for
  "what's wrong with my squat right now").
- **Not** scaling a single workout to preserve a stimulus →
  `crossfit-stimulus-and-scaling-coach`.
- **Not** a full multiweek mixed-modal program or competition cycle →
  `crossfit-programming-cycle-builder` / `crossfit-specialty-cycle-builder`.
- **Not** a mobility-deficit assessment in isolation →
  `crossfit-mobility-assessment-and-programmer`.
- Does **not** diagnose injury, prescribe medical care, or guarantee that a skill
  will be achieved by any date.

## Default output (Movement progression contract)

1. **Target & pattern** — the movement and its movement pattern.
2. **Prerequisites** — positions/strength to own before starting; how to verify.
3. **Assessment tests** — quick tests to place the athlete and find the limiter.
4. **Limiting factors** — the likely blockers (strength / mobility / position /
   coordination / fear) for this athlete.
5. **Teaching sequence** — ordered stages from regression to full movement.
6. **Drills, regressions & progressions** — concrete work for the current stage,
   each tied to a cue or fault.
7. **Accessory work** — targeted to the limiter.
8. **Weekly dosage** — frequency, sets/reps or time, and quality guidance.
9. **Advancement criteria** — measurable gates between stages.
10. **Common faults** — what to watch and correct.
11. **Retest** — what to re-measure and when, and how the result sets the next block.

## Safety & scope

Apply the safety framework proportionately
([../../references/safety-and-referral.md](../../references/safety-and-referral.md)).
For a healthy athlete, include realistic stop conditions (sharp joint pain,
shoulder/grip warning signs on high-volume gymnastics, low-back loss of position
under load) and the rhabdo caution for novel high-volume work (e.g. GHD, first
big kipping or rope-climb exposures). If the request mentions pain that limits
the movement, an injury, or any red flag, do **not** simply program around it —
refer per the framework and route to `crossfit-injury-aware-workout-adapter`.
Earning prerequisites is itself a safety mechanism: kipping or loading a movement
the athlete cannot do strictly hides faults and raises injury risk, so never skip
prerequisites on request — explain why and offer the fastest legitimate path
instead. Never schedule automatic maximal testing; test only at planned retests.

## Incomplete information

Never fabricate athlete data (strict-rep counts, maxes, mobility, history). If a
decision-changing input is missing, return a **clearly labeled provisional plan**
using conservative defaults (assume the athlete is at an early stage, start at the
safest regression), state each assumption explicitly, and ask only for the one or
two fields that would change the plan (usually: current ability on the
prerequisite, equipment, and any injury). Always provide a usable plan — do not
refuse for want of a number.

## Related Skills and Routing

- **This skill owns** "develop / learn / progress a specific movement over weeks"
  requests.
- **Collaborates with** `crossfit-movement-fault-analyzer` (consume its prioritized
  faults to choose drills; pass back the stage and limiter), `crossfit-coaching-cue-generator`
  (for cue lists per drill), `crossfit-mobility-assessment-and-programmer` (when a
  mobility deficit is the limiter), and `crossfit-equipment-substitution-engine`
  (for missing rig/rings). Pass forward: the target stage, limiter, and advancement criteria.
- **Defers to** `crossfit-programming-cycle-builder` / `crossfit-specialty-cycle-builder`
  when the request is a whole training cycle rather than one skill; and to
  `crossfit-injury-aware-workout-adapter` when pain/restriction is central.
- When ambiguous (build a skill vs. fix a rep vs. scale a workout),
  `crossfit-pack-router` disambiguates.
