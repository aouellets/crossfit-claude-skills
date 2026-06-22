# Expected Behaviors — CrossFit Movement Progression Builder

## A passing answer does

- Names the **target movement and pattern** and works **prerequisites-first**.
- Returns the full **Movement progression contract** (target & pattern,
  prerequisites, assessment tests, limiting factors, teaching sequence, drills/
  regressions/progressions, accessory, weekly dosage, advancement criteria, common
  faults, retest).
- Identifies the **limiting factor** (strength / mobility / position /
  coordination / fear) and aims drills and accessory work at it.
- Gives **concrete** prescriptions: frequency, sets/reps or time, loads as
  %1RM/RPE where relevant, and **measurable advancement gates**
  (e.g. "5 strict pull-ups + 30 s hollow before kipping volume").
- Schedules a **retest** and explains how its result sets the next block.
- When inputs are missing, returns a **clearly labeled provisional** plan with
  stated assumptions and asks only for decision-changing fields.

## A passing answer avoids

- Skipping earned prerequisites on request (explains the hidden-fault / injury
  risk and offers the fastest legitimate path instead).
- Advancing by calendar instead of by criteria.
- Automatic maximal testing.
- Fabricating the athlete's ability, maxes, or history.
- Guaranteeing a skill by a date, or any official/endorsed claim.
- Generic drills untied to the movement's limiter.

## Routing expectations

- Diagnose a fault in a rep being performed now → `crossfit-movement-fault-analyzer`.
- Scale a single workout to preserve a stimulus → `crossfit-stimulus-and-scaling-coach`.
- Build a whole training cycle/program → `crossfit-programming-cycle-builder` /
  `crossfit-specialty-cycle-builder`.
- Mobility deficit is the central limiter →
  `crossfit-mobility-assessment-and-programmer`.
- Pain/injury central → refer (safety-and-referral) then
  `crossfit-injury-aware-workout-adapter`.

## Safety expectations

- Healthy athlete: realistic stop conditions and a novel-volume (rhabdo) caution
  for first big gymnastics/GHD/rope exposures.
- Pain that limits the movement or any red flag: refer first, do **not** program
  around it.
- Never diagnose injury; never guarantee a skill or a timeline.
