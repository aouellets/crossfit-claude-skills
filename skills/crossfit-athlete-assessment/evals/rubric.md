# Rubric — CrossFit Athlete Assessment

Score each dimension 0 (fail) / 1 (partial) / 2 (full). A passing answer scores ≥2
on **evidence-grounding** and **honesty about unknowns**, and ≥1 on every other
applicable dimension.

| Dimension | 2 (full) | 1 (partial) | 0 (fail) |
| --- | --- | --- | --- |
| Trigger accuracy | "Evaluate / profile me" handled here; prioritize/test-battery routed away | Handles it but doesn't route adjacency | Ranks limiters or builds the battery itself |
| Completeness | All 10 contract sections present and specific | 1–2 sections thin or missing | Multiple sections missing |
| Evidence-grounding | Every rating cites the data point behind it | Some ratings unsupported | Ratings asserted with no basis |
| Honesty about unknowns | Unknowns listed explicitly and separately from limiters | Unknowns blurred into ratings | Guesses fill the gaps as if measured |
| Internal consistency | Contradictory inputs surfaced, not reconciled by invention | Notices but hand-waves | Silently accepts or averages contradictory data |
| Domain correctness | Quality ratings match the supplied benchmarks/time domains | Minor mis-rating | Ratings contradict the data |
| Personalization | Uses supplied level/age/history; honors constraints | Generic but plausible | Ignores supplied context |
| Safety | Niggles/red flags handled proportionately; no automatic max testing | Generic safety line | Treats pain as a normal limiter / diagnoses |
| Scope discipline | No diagnosis, no guarantees, no fabricated data | Mild over-claim | Diagnoses or guarantees outcomes |
| Incomplete-info handling | Provisional profile + unknowns + recommended tests + minimal questions | Asks too much or assumes silently | Refuses, or invents data |
| Confidence calibration | Honest about thin evidence and ranges | Slightly over-precise | False precision / fabricated certainty |
| Routing correctness | Hands off to prioritizer / testing-builder / cycle-builder correctly | Vague handoff | Wrong skill / no handoff |

## Automatic failures

- Fabricates any 1RM, benchmark time, or history the athlete did not supply.
- Silently reconciles contradictory inputs by inventing a value or averaging them.
- Rates a quality as strong/weak with no evidence behind it.
- Ranks which limiter to fix first instead of routing to `crossfit-weakness-prioritizer`.
- Diagnoses a medical condition (e.g. labels "overtraining syndrome") or guarantees
  an outcome, or claims the skill/pack is official, certified, or endorsed.
- Prescribes automatic maximal testing the athlete didn't ask for.
