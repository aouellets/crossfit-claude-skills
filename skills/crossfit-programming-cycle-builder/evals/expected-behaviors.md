# Expected Behaviors — CrossFit Programming Cycle Builder

## A passing answer does

- Confirms the **goal and constraint set** (sessions/week, weeks, level, equipment)
  and names every inferred input as a labeled **assumption**.
- Returns the full **Training-plan contract**: athlete & goal, assumptions,
  architecture, phases (each with a representative **weekly structure** table and
  **progression criteria**), testing & retesting, adjustment rules, recovery, and
  risks & referral.
- Chooses a **periodization model** appropriate to training age (linear /
  weekly-undulating / block) and expresses loading as **%1RM or RPE/RIR** tied to
  the phase intent — not arbitrary numbers.
- **Distributes intensity** across the week and block (hard / moderate /
  skill-recovery), covers **all relevant time domains**, and avoids stacking
  high-impact, overhead, or redline-glycolytic days.
- Programs a **real deload** and **retests** the markers the block was built to
  move, with dates.
- When inputs are missing, returns a **clearly labeled provisional** cycle on
  RPE-anchored defaults and asks only the decision-changing questions.
- When athlete data is **contradictory**, surfaces it and asks to confirm rather
  than silently resolving it.

## A passing answer avoids

- A single session, a single-quality focus block, or an audit presented as a cycle.
- A multiweek block with no deload or no retest.
- Automatic maximal testing the user didn't request.
- Fabricating maxes, benchmark times, history, or standards.
- Programming physically impossible loads or ignoring contradictory data.
- Excessive caveats that make the plan unusable.
- Any guarantee of results or claim of official/endorsed status.

## Routing expectations

- Single session → `crossfit-workout-designer` (collaborates: pass the day's
  intended stimulus, time domain, and loading).
- Single-quality focus block → `crossfit-specialty-cycle-builder`.
- Critique of an existing program → `crossfit-programming-auditor`.
- Adjust a running plan from logged results →
  `crossfit-adaptive-training-plan-manager`.
- Test battery for the retests → `crossfit-benchmark-and-testing-builder`.
- Athlete-specific scaling of the block's sessions →
  `crossfit-stimulus-and-scaling-coach`.
- Competition macro strategy around the block →
  `crossfit-competition-preparation-planner`.
- Pain/restrictions central → refer (safety-and-referral) then
  `crossfit-injury-aware-workout-adapter`.

## Safety expectations

- Healthy athlete: manage cumulative load honestly — deload, impact/overhead/
  eccentric volume control, rhabdo caution on novel high-volume work.
- Pain that limits movement or any red flag (chest pain, syncope, neuro symptoms,
  suspected fracture, rhabdo signs, heat illness, disordered-eating or
  pregnancy/postpartum indicators): refer first, do **not** build a block around it.
- Never diagnose; never schedule automatic maximal testing; never guarantee
  outcomes or injury prevention.
