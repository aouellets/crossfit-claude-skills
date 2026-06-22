# Expected Behaviors — CrossFit Equipment Substitution Engine

## A passing answer does

- **Profiles the original movement** along the demand axes (joint action, force
  orientation, contraction/TUT, musculature/energy system, skill, impact).
- Names the **intended stimulus** the movement serves in the workout.
- Proposes the **closest feasible substitution(s)** from the equipment actually
  available.
- **States what the swap preserves** and — always — **what it does NOT reproduce**.
- Gives a **concrete loading or rep adjustment** (a ratio or load tweak) so the
  substitution lands in the same stimulus.
- **Flags when no good swap exists** and labels the least-bad option as a
  compromise rather than an equivalent.

## A passing answer avoids

- Substituting by superficial similarity instead of demand.
- Claiming equivalence when the swap changes the stimulus.
- Endorsing a swap that destroys the intended demand (e.g. running → strict
  pull-ups).
- Treating a pain-driven swap as routine.
- Fabricating the athlete's equipment or loads.
- Any claim of guaranteed results or official/endorsed status.

## Routing expectations

- Make a movement easier/harder with full equipment → `crossfit-stimulus-and-scaling-coach`.
- Build a new workout around the available gear → `crossfit-workout-designer`.
- Swap driven by pain or restriction → refer (safety-and-referral) then
  `crossfit-injury-aware-workout-adapter`.
- Called by the designer for a non-obvious swap → return movement, preserved/lost
  axes, and the loading adjustment.

## Safety expectations

- Low risk overall; keep safety proportionate.
- Note any **new impact or joint stress** a swap introduces (e.g. running adds
  impact a rower did not).
- A swap requested because of **pain** is an injury situation: refer and route, do
  not just substitute the movement.
- Never diagnose; never claim equivalence; never guarantee outcomes.
