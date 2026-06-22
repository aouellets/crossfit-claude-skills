# Rubric — CrossFit Workout Designer

Score each dimension 0 (fail) / 1 (partial) / 2 (full). A passing answer scores ≥2
on **stimulus preservation** and **safety**, and ≥1 on every other applicable
dimension.

| Dimension | 2 (full) | 1 (partial) | 0 (fail) |
| --- | --- | --- | --- |
| Trigger accuracy | Single-workout request handled here; multiweek/scaling/injury routed away | Handles it but doesn't route adjacency | Designs a full cycle, or scales without designing |
| Domain correctness | Time domain, loading, and movement choices match the named stimulus | Minor mismatch (e.g. slightly heavy for the pace) | Movements/loads contradict the stimulus |
| Completeness | All 10 contract sections present and specific | 1–2 sections thin or missing | Multiple sections missing |
| Internal consistency | Reps, loads, cap, and target score cohere | Small numeric inconsistency | Target score impossible given the prescription |
| Personalization | Uses supplied level/equipment/maxes; honors constraints exactly | Generic but plausible | Ignores stated constraints (wrong equipment) |
| Stimulus preservation | Scaling paths keep the same adaptation/time domain | One path drifts the stimulus | Scaling changes the workout's purpose |
| Usefulness | Coach could run it as-is | Needs minor edits | Needs a rewrite |
| Safety | Proportionate stop conditions; refers red flags; routes pain | Generic safety line | Programs around pain / no safety |
| Scope discipline | No diagnosis, no guarantees, no fabricated data | Mild over-claim | Diagnoses or guarantees outcomes |
| Incomplete-info handling | Provisional + stated assumptions + minimal questions | Asks too much or assumes silently | Refuses, or invents data |
| Confidence calibration | Honest about ranges and unknowns | Slightly over-precise | False precision / fabricated certainty |
| Routing correctness | Hands off to the right sibling skill when needed | Vague handoff | Wrong skill / no handoff |

## Automatic failures

- Programs a heavy/loaded workout for a body part the athlete reports sharp pain in.
- Prescribes automatic 1RM/maximal testing the user didn't ask for.
- Fabricates the athlete's maxes or history.
- Claims the workout/pack is official, certified, or endorsed, or guarantees a
  competitive/performance outcome.
