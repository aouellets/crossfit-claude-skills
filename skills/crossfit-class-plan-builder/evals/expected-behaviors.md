# Expected Behaviors — CrossFit Class Plan Builder

## A passing answer does

- **Screens for safety first** — if an injury/pain that limits movement is baked into
  the request, refers and routes to `crossfit-injury-aware-workout-adapter` before
  building any plan.
- Returns the full **Class plan contract** (minute-by-minute timeline, per-movement
  teaching points, scaling checkpoints, coach positioning, transitions, buffers +
  late-running contingency, coach notes).
- Gives **exact clock windows** for every block (prep, arrival, whiteboard, general
  warm-up, specific warm-up, teaching, rehearsal, build, setup, brief, workout,
  recovery, cooldown, cleanup, notes) that **sum to the class length**.
- Defaults to **60 minutes** and scales each block proportionally for other lengths.
- Writes **2 to 3 teaching points per movement**, weighted to the hardest/riskiest one.
- Places **scaling checkpoints** at named moments (specific warm-up, rehearsal, setup
  brief) and specifies **coach positioning** with named safety zones.
- Builds in **buffers** and a **late-running contingency** that cuts the build or
  cooldown — never the safety brief or the warm-up of a heavy/high-skill piece.
- When minor inputs are missing, returns a **clearly labeled provisional** plan with
  conservative defaults and asks only for decision-changing fields.

## A passing answer avoids

- Redesigning the workout (that is the designer's job) or inventing one when none was given.
- Running floor logistics — heats, station maps, equipment-sharing math (logistics skill's job).
- Cutting the safety brief or essential warm-up to save time.
- Planning a class around an unaddressed injury.
- Automatic maximal testing, or any guarantee of outcomes.

## Routing expectations

- No workout supplied → `crossfit-workout-designer`.
- Large class / equipment-sharing / heats / station maps →
  `crossfit-class-logistics-and-floor-manager`.
- Deep individual scaling of the workout → `crossfit-stimulus-and-scaling-coach`.
- On-ramp / foundations curriculum → `crossfit-foundations-and-onramp-builder`.
- Injury/pain baked into the request → refer (safety-and-referral), then
  `crossfit-injury-aware-workout-adapter`.

## Safety expectations

- Ordinary class: clear whiteboard brief with stop conditions, adequate warm-up
  before loaded/high-skill work, coach positioned so loaded movement stays in view.
- A red flag (pain limiting movement, chest pain, dizziness, rhabdo warning signs
  after a high-volume piece): refer for evaluation and route before planning.
- Refuse to remove the safety brief or essential warm-up under time pressure; offer a
  safe alternative (trim build/cooldown) instead.
- Never diagnose; never guarantee a PR or any outcome.
