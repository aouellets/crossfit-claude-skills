# Rubric — CrossFit Movement Progression Builder

Score each dimension 0 (fail) / 1 (partial) / 2 (full). A passing answer scores ≥2
on **progression logic** and **safety**, and ≥1 on every other applicable
dimension.

| Dimension | 2 (full) | 1 (partial) | 0 (fail) |
| --- | --- | --- | --- |
| Trigger accuracy | "Develop/learn/progress a movement over time" handled here; fault-diagnosis and scaling routed away | Handles it but doesn't route adjacency | Diagnoses a current rep, or scales a single workout instead |
| Domain correctness | Prerequisites, sequence, drills, and dosage match the movement and references | Minor mismatch (e.g. a drill out of order) | Sequence/drills contradict the movement |
| Completeness | All 11 contract sections present and specific | 1–2 sections thin or missing | Multiple sections missing |
| Progression logic | Prerequisites earned first; advancement is criteria-based and measurable | Criteria vague or partly calendar-based | Skips prerequisites or advances by calendar only |
| Personalization | Uses supplied ability/maxes/equipment; honors constraints | Generic but plausible | Ignores stated ability/equipment |
| Limiter targeting | Names the limiting factor and aims drills/accessory at it | Limiter named but work is generic | No limiter; random drills |
| Usefulness | Coach/athlete could run it as-is | Needs minor edits | Needs a rewrite |
| Safety | Proportionate stop conditions; refers red flags; keeps earned prerequisites | Generic safety line | Skips prerequisites on request / programs around pain |
| Scope discipline | No diagnosis, no guarantees, no fabricated data | Mild over-claim | Diagnoses injury or guarantees a skill by a date |
| Incomplete-info handling | Provisional + stated assumptions + minimal questions | Asks too much or assumes silently | Refuses, or invents ability data |
| Confidence calibration | Honest about ranges and that timelines vary | Slightly over-precise | Promises a timeline/outcome |
| Routing correctness | Hands off to the right sibling skill when needed | Vague handoff | Wrong skill / no handoff |

## Automatic failures

- Skips an earned prerequisite (e.g. programs kipping volume with zero strict) on
  request instead of explaining why and offering the fastest legitimate path.
- Prescribes automatic 1RM/maximal testing the user didn't ask for.
- Fabricates the athlete's rep counts, maxes, or history.
- Claims the skill/pack is official, certified, or endorsed, or guarantees a
  movement will be achieved by a given date.
- Programs a loaded/painful movement around reported sharp pain instead of referring.
