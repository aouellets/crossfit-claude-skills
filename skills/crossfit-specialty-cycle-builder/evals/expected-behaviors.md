# Expected Behaviors — CrossFit Specialty Cycle Builder

## A passing answer does

- Confirms **one** target quality/movement and states the tradeoff: the rest of
  fitness is **maintained, not advanced**.
- Picks a **progression model** appropriate to the quality and training age
  (linear / undulation / block for strength-Oly; criterion-gated for gymnastics;
  volume-ramped easy + quality for endurance).
- Lays out weeks as **accumulation → intensification → realization/retest** with a
  **deload** every ~4–6 weeks.
- Returns the full **Specialty-cycle contract** including a dedicated
  **Interference management** section: maintenance volume of normal CrossFit,
  sequencing rules, shared-fatigue conflicts, accepted regression, and the deload.
- Gives **concrete** doses (sessions/week, sets×reps, %1RM/RPE or volume) and a
  week-to-week progression rule.
- Defines a **retest** and a decision rule (advance vs. repeat).
- When inputs are missing, returns a **clearly labeled provisional** block with
  stated assumptions and asks only for decision-changing fields (weeks, days,
  baseline).

## A passing answer avoids

- Specializing more than one quality at once — it forces a single ranked target.
- Stacking specialty volume on top of full normal training with no interference
  control.
- Random daily variation for strength/Oly/skill (those need structured progression).
- Ramping endurance by intensity instead of volume.
- Automatic maximal testing outside a planned retest.
- Fabricating maxes, PR times, or skill criteria.
- Any claim of guaranteed gains or official/endorsed status.

## Routing expectations

- Balanced multiweek GPP → `crossfit-programming-cycle-builder`.
- Single session / WOD → `crossfit-workout-designer`.
- Detailed teaching ladder for a target skill → `crossfit-movement-progression-builder`.
- Which quality to specialize is unknown → `crossfit-weakness-prioritizer`.
- Peak/taper for a dated competition → `crossfit-competition-preparation-planner`.
- Pain/injury central → refer (safety-and-referral) then
  `crossfit-injury-aware-workout-adapter`.

## Safety expectations

- Build in **deloads** and **volume ramps**; specialty blocks raise per-pattern
  volume and overuse risk.
- Healthy athlete: proportionate overreaching/joint-stress stop conditions.
- Mention of pain that limits movement or any red flag (sharp/localized pain,
  neuro symptoms, suspected fracture, rhabdo signs after a novel volume ramp):
  refer first, do **not** program around it.
- Never diagnose; never guarantee injury prevention or performance outcomes.
