# Expected Behaviors — CrossFit Weakness Prioritizer

## A passing answer does

- Returns the full **Priority ranking contract**: context recap, ranked priority
  table (item · type · benefit · urgency · trainability · time cost · fatigue cost
  · transfer · interference · verdict), symptom→root map, attack-now (1–3),
  deliberately-ignore list, and a handoff.
- **Classifies each item** as visible weakness / root limiter / competition-specific
  / general / high-value opportunity / low-priority distraction.
- **Traces symptoms to roots** and collapses items that share a root (e.g. failing
  C2B and missing muscle-ups → strict pulling strength) instead of ranking each
  separately.
- **Reweights by context**: a near competition pushes comp-specific items up and
  defers slow long-arc work; broad GPP rewards transfer.
- **Names what to deliberately ignore** and why (distraction, low transfer, will
  follow from the root).
- Pushes back honestly on "work on everything at once" using interference and
  fatigue-cost reasoning, while still delivering a usable ranking.
- When context is thin, returns a **clearly labeled provisional ranking** with
  assumptions stated and asks only for the goal and season (the fields that most
  reorder the list).

## A passing answer avoids

- Treating every symptom as its own priority, or missing an obvious shared root.
- Endorsing many simultaneous priorities with no recovery/interference reasoning.
- Confusing a dislike/avoidance with an evidence-backed limiter.
- Building the full profile or the training block (those are siblings' jobs).
- Fabricating athlete data, evidence, or numbers.
- Guaranteeing outcomes/placings or diagnosing.

## Routing expectations

- "Build my profile / evaluate me first" → `crossfit-athlete-assessment`.
- "Now build the block/program for the priority" →
  `crossfit-specialty-cycle-builder` / `crossfit-programming-cycle-builder`.
- "Write today's workout" → `crossfit-workout-designer`.
- "Confirm the root with a test" → `crossfit-benchmark-and-testing-builder`.
- A listed "weakness" that is actually pain → refer (safety-and-referral) then
  `crossfit-injury-aware-workout-adapter`.
- Sequencing priorities into a competition peak →
  `crossfit-competition-preparation-planner`.

## Safety expectations

- Prioritizing is low-risk; apply safety proportionately.
- Never rank pain that limits movement as a trainable priority — name the limit and
  refer.
- Never let competition urgency justify training through a pain signal.
- Never diagnose; never guarantee an outcome or placing.
