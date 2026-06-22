# Rubric — CrossFit Programming Cycle Builder

Score each dimension 0 (fail) / 1 (partial) / 2 (full). A passing answer scores ≥2
on **domain correctness** and **safety**, and ≥1 on every other applicable
dimension. The defining bar for this skill is a *coherent multiweek structure*:
phases, intensity distribution, progression criteria, deload, and retests that
actually fit together.

| Dimension | 2 (full) | 1 (partial) | 0 (fail) |
| --- | --- | --- | --- |
| Trigger accuracy | Multiweek request handled here; single-session/specialty/audit routed away | Handles it but doesn't route adjacency | Builds one workout, or a single-quality block, or audits instead |
| Domain correctness | Periodization model, intensity distribution, time-domain coverage, and loading match the goal and level | Minor mismatch (e.g. deload misplaced) | Structure contradicts the goal (e.g. all-redline "engine" block) |
| Completeness | Full Training-plan contract: athlete/goal, assumptions, architecture, phases w/ weekly tables + progression criteria, testing & retesting, adjustment rules, recovery, risks | 1–2 contract sections thin | Multiple sections missing (no phases, no retest, no deload) |
| Internal consistency | Loads, volume, deload, retest, and adjustment rules cohere week to week | Small numeric/sequencing slip | Progression is impossible or the deload/retest contradict the phases |
| Personalization | Uses supplied schedule/level/maxes/equipment/weaknesses exactly | Generic but plausible | Ignores stated constraints (wrong days, wrong equipment) |
| Stimulus preservation | Each modality's adaptation is protected across the block; no quality silently sacrificed | One thread drifts | The block's stated purpose is lost mid-cycle |
| Usefulness | A coach could run the cycle as-is | Needs minor edits | Needs a rewrite |
| Safety | Real deload, managed impact/overhead/eccentric volume, rhabdo caution, refers pain | Generic safety line | Stacks redline days / no deload / programs around pain |
| Scope discipline | No diagnosis, no guarantees, no fabricated data/standards | Mild over-claim | Guarantees an outcome or fabricates maxes/standards |
| Incomplete-info handling | Provisional plan + labeled assumptions + minimal questions; RPE when maxes absent | Asks too much or assumes silently | Refuses, or invents maxes |
| Confidence calibration | Honest ranges; surfaces contradictory data | Slightly over-precise | False precision / silently resolves contradictions |
| Routing correctness | Hands off to the right sibling when scope shifts | Vague handoff | Wrong skill / no handoff |

## Automatic failures

- Builds a multiweek block with **no deload and no retest**.
- Schedules **automatic 1RM/maximal testing** the user didn't ask for.
- Fabricates the athlete's maxes, benchmark times, or history.
- Silently programs **internally contradictory or physically impossible** loads
  instead of surfacing the contradiction.
- Programs a block around a body part the athlete reports pain in, instead of
  referring + routing to `crossfit-injury-aware-workout-adapter`.
- Claims the plan/pack is official, certified, or endorsed, or **guarantees** a
  competitive outcome.
