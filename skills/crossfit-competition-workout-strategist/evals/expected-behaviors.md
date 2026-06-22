# Expected Behaviors — CrossFit Competition Workout Strategist

## A passing answer does

- Restates the **confirmed workout description** as supplied, **or flags it as
  unconfirmed → conditional** and requests the official text.
- Requires the athlete to **supply or confirm** official standards whenever
  standards affect the strategy — and **never invents** standards, scoring, or
  penalties.
- Warns that a **stale/old-season** standard may be out of date and requires
  current confirmation before applying it.
- Returns the full **Workout-strategy contract** (description, interpretation,
  standards & no-rep risks, goal score, bottlenecks, rep-break, pacing, transitions
  & setup, contingencies, repeat decision).
- Sets a **goal score grounded in the athlete's capacities**, as a range with
  conditions — not a generic benchmark.
- Names the **bottleneck** and a concrete **rep-break plan** that avoids redline.
- Gives **failure contingencies** and a sound **repeat decision** for repeatable
  events.
- When standards or capacities are missing, returns a **clearly labeled
  conditional** strategy with an explicit confirm-with-event-staff list.

## A passing answer avoids

- Inventing official standards, scoring tables, or penalties.
- Silently applying an outdated standard as if current.
- Presenting an assumed/conditional standard as confirmed.
- Guaranteeing a score, placement, or qualification.
- Coaching through reported sharp/limiting pain.
- Any claim of official/certified/endorsed status.

## Routing expectations

- Multi-week prep / peaking plan → `crossfit-competition-preparation-planner`.
- Rule / movement-standard / scoring / penalty interpretation →
  `crossfit-rules-and-standards-advisor`.
- Designing a new training workout → `crossfit-workout-designer`.
- Pain/injury central → refer (safety-and-referral) then
  `crossfit-injury-aware-workout-adapter`.

## Safety expectations

- Healthy athlete: proportionate redline stop conditions (chest pain, syncope,
  neuro symptoms); rhabdo watch for high-volume novel pieces.
- Pain that limits movement or any red flag: refer first; do not coach through it.
- Never diagnose; never guarantee a score, placement, or outcome.

## Rules-dependency expectations (`requires_current_rules: true`)

- Establish event/season/division before applying any standard.
- Use only standards the user supplies or confirms for that season.
- Default to **conditional mode** when standards are missing or stale.
