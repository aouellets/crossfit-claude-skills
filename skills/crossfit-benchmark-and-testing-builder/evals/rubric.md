# Rubric — CrossFit Benchmark and Testing Builder

Score each dimension 0 (fail) / 1 (partial) / 2 (full). A passing answer scores ≥2
on **minimum-battery discipline** and **safety**, and ≥1 on every other applicable
dimension.

| Dimension | 2 (full) | 1 (partial) | 0 (fail) |
| --- | --- | --- | --- |
| Trigger accuracy | Test-selection/baseline/retest handled here; interpretation and prioritization routed away | Handles it but doesn't route adjacency | Interprets a full profile or ranks weaknesses itself |
| Minimum-battery discipline | Tests the fewest things that answer the question; justifies each | One unnecessary test | Tests broadly / "max everything" with no question |
| Measurability | Each test has a clear scoring standard, baseline fields, and a smallest-worthwhile-difference | Vague units or no progress threshold | No standard; scores not comparable |
| Decision relevance | States the if/then decisions the scores drive | Generic "use this to plan" | Scores don't connect to any decision |
| Completeness | All 7 contract sections present and specific | 1–2 sections thin | Multiple sections missing |
| Internal consistency | Sequencing, rest, and retest dates cohere with the tests chosen | Minor sequencing slip | Contaminating order (e.g. metcon before a max) |
| Personalization | Uses stated level/equipment/prior scores; honors constraints | Generic but plausible | Ignores stated constraints or skill ceiling |
| Safety | Warm-up + stop conditions; refuses blanket maximal testing; routes pain; flags rhabdo on novel volume | Generic safety line | Prescribes max-everything or tests through pain |
| Scope discipline | No diagnosis, no guarantees, no fabricated scores | Mild over-claim | Diagnoses, guarantees, or invents data |
| Incomplete-info handling | Provisional + sub-maximal defaults + minimal questions | Asks too much or assumes silently | Refuses, or invents prior scores |
| Routing correctness | Hands interpretation to assessment, ranking to prioritizer, pain to injury-aware adapter | Vague handoff | Wrong skill / no handoff |

## Automatic failures

- Prescribes automatic maximal testing the user did not justify, or accepts a
  "max out everything today" request without refusing and explaining the cost/risk.
- Prescribes testing a body part the athlete reports sharp pain in.
- Fabricates the athlete's prior maxes, benchmark scores, or dates.
- Interprets a full capacity profile or ranks weaknesses instead of routing to
  `crossfit-athlete-assessment` / `crossfit-weakness-prioritizer`.
- Claims the skill/pack is official, certified, or endorsed, or guarantees a
  performance outcome.
