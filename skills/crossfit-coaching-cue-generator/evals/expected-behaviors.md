# Expected Behaviors — CrossFit Coaching Cue Generator

## A passing answer does

- Restates the **named movement and fault/goal** before generating cues.
- Gives a coaching-level **working read** of the likely cause, explicitly **not** a
  diagnosis.
- **Prioritizes one or two** high-value cues to try first, with the exact words to
  say, and a backup if the first does not land.
- Offers a **fitting menu by cue type** (verbal / visual / tactile / external /
  internal) — not all seven for every fault.
- Gates **every tactile cue on explicit consent** ("ask first").
- Offers **one constraint or drill** that produces the correct movement without
  talking.
- States **when to stop cueing** — the observable signal to go quiet and let the
  athlete accumulate reps.
- Prefers **external-focus** cues for fast/ballistic faults unless an internal cue
  is clearly better.

## A passing answer avoids

- Dumping every cue type with no prioritization.
- Inventing the fault when the user named none (route to the fault analyzer).
- Suggesting hands-on contact without consent.
- Cueing through reported pain.
- Fabricating what the coach saw or the athlete's history.
- Encouraging more cues when the real problem is over-coaching.
- Any claim of guaranteed results or official/endorsed status.

## Routing expectations

- Raw observation / video with no named fault → `crossfit-movement-fault-analyzer`.
- Build the skill over weeks → `crossfit-movement-progression-builder`.
- Design or scale the workout the movement lives in → `crossfit-workout-designer`
  / `crossfit-stimulus-and-scaling-coach`.
- The "fault" is pain or a red flag → refer (safety-and-referral) then
  `crossfit-injury-aware-workout-adapter`.

## Safety expectations

- Low risk overall; keep safety proportionate.
- **Tactile cues require explicit consent every single time** — non-negotiable.
- Pain that limits movement, instability, or any red flag: refer first; do **not**
  cue through it.
- Never diagnose; never guarantee outcomes.
