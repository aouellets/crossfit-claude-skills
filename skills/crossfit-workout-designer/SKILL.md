---
name: CrossFit Workout Designer
description: Use when the user asks for a single CrossFit / functional-fitness workout, WOD, or metcon ("something for today"), supplying or implying a stimulus, time domain, level, or equipment. Designs one complete workout (stimulus, time domain, patterns, loading, scaling paths) from those inputs plus optional maxes and phase. Excludes multiweek programming, owned by crossfit-programming-cycle-builder; scaling an existing workout, owned by crossfit-stimulus-and-scaling-coach; and class plans, owned by crossfit-class-plan-builder.
category: programming
risk_level: medium
requires_current_rules: false
---

# CrossFit Workout Designer

Design **one complete CrossFit / mixed-modal workout** that is intentional rather
than a random pairing of movements. This skill owns single-session requests
("write me a workout", "give me a 12-minute metcon", "something heavy for today").
It works from stimulus backward using the
[../../references/workout-design-framework.md](../../references/workout-design-framework.md).

## Workflow

1. **Establish the intended stimulus** (or infer it from goal/level/time). Name
   the adaptation and the felt experience before choosing movements. See
   [../../references/coaching-principles.md](../../references/coaching-principles.md) §3.
2. **Select the time domain** that produces that stimulus
   ([../../references/time-domain-framework.md](../../references/time-domain-framework.md)).
3. **Choose movements by pattern**, balancing push/pull, hinge/squat, and
   mono-structural vs. mixed, avoiding stacked joint stress
   ([../../references/movement-pattern-taxonomy.md](../../references/movement-pattern-taxonomy.md)).
4. **Set loading and rep schemes relative to the athlete** (%1RM / RPE / "should
   stay unbroken until…"), so the intended pacing can actually happen.
5. **Define movement standards** (ROM, no-rep criteria).
6. **Write scaling paths** — RX / intermediate / beginner — each preserving the
   stimulus, plus masters considerations and equipment alternatives
   ([../../references/stimulus-preserving-scaling.md](../../references/stimulus-preserving-scaling.md)).
7. **State coaching focus and risks/stop conditions** proportionately
   ([../../references/safety-and-referral.md](../../references/safety-and-referral.md)).
8. **Give the rationale** tying the prescription back to the stimulus, athlete,
   and phase.

## Inputs

**Required (or inferable):** intended stimulus *or* enough to infer it (goal +
level), time available / target duration, equipment available.

**Optional (improves the output):** athlete level detail and maxes, class size and
format, phase of training, prior days' training (to avoid interference), known
restrictions/injuries, masters/age considerations.

## Non-goals

- **Not** multiweek or cyclical programming → `crossfit-programming-cycle-builder`.
- **Not** scaling/modifying an *already-chosen* workout → `crossfit-stimulus-and-scaling-coach`.
- **Not** a minute-by-minute class plan → `crossfit-class-plan-builder`.
- **Not** an injury-restricted adaptation → `crossfit-injury-aware-workout-adapter`.
- Does **not** diagnose, prescribe medical care, or guarantee outcomes.

## Default output (Workout contract)

1. **Objective** — one line: what this session is for.
2. **Prescription** — format, movements, reps, loads, time cap / scoring.
3. **Intended stimulus** — adaptation + felt experience; pacing intent.
4. **Target performance** — expected time range / rounds / score band.
5. **Loading guidance** — absolute and relative (%1RM / RPE) options.
6. **Movement standards** — ROM / no-rep criteria.
7. **Scaling paths** — RX / intermediate / beginner (stimulus preserved),
   masters considerations, equipment alternatives.
8. **Coaching focus** — 1–2 priorities.
9. **Risks & stop conditions** — proportionate safety notes.
10. **Rationale** — why this serves the stimulus / athlete / phase.

## Safety & scope

Apply the safety framework proportionately. For a healthy athlete, include
realistic stop conditions (sharp joint pain, dizziness, form breakdown) and move
on. If the request mentions pain that limits movement, an injury, or any red flag
(chest pain, syncope, neurological symptoms, rhabdomyolysis warning signs after
high-volume work, etc.), do **not** simply program around it — refer per
[../../references/safety-and-referral.md](../../references/safety-and-referral.md)
and route to `crossfit-injury-aware-workout-adapter`. Never use intensity as a
substitute for design logic, and never schedule automatic maximal testing.

## Incomplete information

Never fabricate athlete data (maxes, history). If a materially decision-changing
input is missing, return a **clearly labeled provisional workout** using
conservative defaults (e.g. RPE-based loads, scalable rep schemes), state each
assumption, and ask only for the one or two fields that would change the
prescription (usually: equipment, time, level, injuries). Always provide a usable
workout — do not refuse to answer for want of a 1RM.

## Related Skills and Routing

- **This skill owns** single-workout requests.
- **Collaborates with** `crossfit-stimulus-and-scaling-coach` (it writes the
  scaling paths; defer to it for deep, athlete-specific scaling of a chosen
  workout), `crossfit-class-plan-builder` (which consumes this workout and adds
  timing/teaching), and `crossfit-equipment-substitution-engine` (for non-obvious
  swaps). Pass forward: the workout, its intended stimulus, and movement standards.
- **Defers to** `crossfit-programming-cycle-builder` when the request is for more
  than one session or a progression; to `crossfit-injury-aware-workout-adapter`
  when pain/restrictions are central; and to `crossfit-competition-workout-strategist`
  when the request is how to *attack* a released competition workout rather than
  design one.
- When ambiguous (single vs. cycle, design vs. scale), `crossfit-pack-router`
  disambiguates.
