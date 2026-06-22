# Rubric — CrossFit Class Logistics and Floor Manager

Score each response 0 (absent) / 1 (partial) / 2 (solid). A passing response
scores ≥ 1 on every dimension and 2 on Floor safety and Routing discipline.

## 1. Equipment & attendance math
- Counts athletes against the relevant equipment and space explicitly.
- Shows the arithmetic that forces the chosen format (e.g. "30 ÷ 8 → 4 heats").
- 0 if it assumes one piece of equipment per athlete or skips the math.

## 2. Format fit
- Chooses heats, station rotations, or partners appropriately for the constraint.
- Does not over-engineer (runs straight when gear ≥ athletes).

## 3. Floor map & traffic
- Produces a concrete text station map: stations, rotation direction, traffic/
  running lanes, and explicit safety zones.
- Loaded/overhead/landing zones do not overlap walking or running paths.

## 4. Floor safety (critical)
- Barbell drop zones, rope/box landing zones, and rig fall zones are separated
  from traffic; coach sightlines cover all loaded stations.
- If the user proposes a hazardous layout, the response **flags it and fixes the
  floor** rather than approving it. Refuses unsafe density and any injury guarantee.

## 5. Transition & setup/cleanup
- States how and when athletes and equipment move; gives a timed setup and reset.
- Does not compress the next class's safety brief or warm-up.

## 6. Incomplete-information handling
- When counts/space are missing, returns a clearly labeled provisional plan with a
  stated assumption and visible math, asking only for decision-changing numbers.
- Never fabricates equipment counts or athlete numbers.

## 7. Routing discipline (critical)
- Hands the minute-by-minute teaching plan to `crossfit-class-plan-builder`, the
  workout design to `crossfit-workout-designer`, and missing-equipment swaps to
  `crossfit-equipment-substitution-engine`. Stays within logistics scope.
