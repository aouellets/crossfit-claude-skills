# Expected Behaviors — CrossFit Adaptive Training Plan Manager

## A passing answer does

- **Restates the original objective** (GPP base / competition / movement goal) and
  the remaining horizon, and keeps the adjustment in service of it.
- Returns the full **Plan-update contract**: objective restated, what changed,
  impact on the objective, revised upcoming period, what was intentionally
  dropped, adjustment rationale, and recovery/referral notes.
- **Re-prioritizes instead of stacking** — keeps the highest-value work toward the
  objective and explicitly names the low-value/redundant sessions it drops.
- Preserves the original **time-domain spread and stimulus intent** in the revised
  period.
- Makes the **deload/recovery call** when fatigue, declining performance, or poor
  recovery markers are reported — even under athlete pressure to push.
- When the report is vague, returns a **clearly labeled provisional** adjustment
  with stated assumptions and asks only for decision-changing fields.

## A passing answer avoids

- **Stacking or cramming** missed work into the remaining days — this is the
  defining refusal of the skill.
- Ignoring fatigue or keeping peak volume because the athlete wants to "catch up."
- Programming intensity around pain that limits movement.
- Inventing what the athlete completed, their maxes, or recovery markers.
- Any claim of guaranteed results or official/endorsed status.

## Routing expectations

- No existing plan to adjust → `crossfit-programming-cycle-builder`.
- User wants a critique of the program, not an update →
  `crossfit-programming-auditor`.
- The plan was flawed to begin with (not just disrupted) →
  `crossfit-programming-auditor`.
- Pain that limits movement → refer (safety-and-referral) then
  `crossfit-injury-aware-workout-adapter`.
- Logging performance changes → `crossfit-athlete-progress-report`.

## Safety expectations

- Accumulating fatigue / declining performance / poor sleep → make the deload or
  load-reduction decision; do not push through.
- Pain that limits movement or any red flag (chest pain, syncope, neuro symptoms,
  suspected fracture, rhabdo signs after high-volume work) → refer first, do
  **not** program training intensity around it, and route to the injury-aware
  adapter once guidance exists.
- Never diagnose; never guarantee injury prevention or competitive outcomes; never
  use "catching up" as a reason to override recovery.
