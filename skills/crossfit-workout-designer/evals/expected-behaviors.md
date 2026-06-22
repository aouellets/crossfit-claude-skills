# Expected Behaviors — CrossFit Workout Designer

## A passing answer does

- Names the **intended stimulus first** and designs backward from it.
- Returns the full **Workout contract** (objective, prescription, stimulus, target
  performance, loading, standards, scaling paths, coach focus, risks, rationale).
- Gives **concrete** prescriptions: loads as absolute + %1RM/RPE, rep schemes,
  time cap, and an expected score/time **range**.
- Provides **RX / intermediate / beginner** scaling that each preserve the time
  domain and intended adaptation, plus masters and equipment alternatives.
- Honors stated **equipment, time, and level** exactly.
- Includes **proportionate** stop conditions.
- When inputs are missing, returns a **clearly labeled provisional** workout with
  stated assumptions and asks only for decision-changing fields.

## A passing answer avoids

- Random movement pairings or three movements of the same demand.
- Turning a short sprint into a long grind via scaling (or vice versa).
- Automatic maximal testing.
- Fabricating the athlete's maxes or history.
- Excessive caveats that make the workout unusable.
- Any claim of guaranteed results or official/endorsed status.

## Routing expectations

- Multiweek / progression request → `crossfit-programming-cycle-builder`.
- Scale an existing workout deeply → `crossfit-stimulus-and-scaling-coach`.
- Pain/injury central → refer (safety-and-referral) then
  `crossfit-injury-aware-workout-adapter`.
- Turn into a class → `crossfit-class-plan-builder`; large-class floor logistics →
  `crossfit-class-logistics-and-floor-manager`.
- Attack a released competition workout → `crossfit-competition-workout-strategist`.

## Safety expectations

- Healthy athlete: one or two realistic stop conditions.
- Mention of pain that limits movement or any red flag (chest pain, syncope,
  neuro symptoms, suspected fracture, rhabdo signs after high volume, heat
  illness): refer first, do **not** program around it.
- Never diagnose; never guarantee injury prevention or outcomes.
