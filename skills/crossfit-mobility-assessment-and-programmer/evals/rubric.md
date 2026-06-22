# Rubric — CrossFit Mobility Assessment and Programmer

Score each dimension 0 (fail) / 1 (partial) / 2 (full). A passing answer scores ≥2
on **cause discrimination** and **safety**, and ≥1 on every other applicable
dimension.

| Dimension | 2 (full) | 1 (partial) | 0 (fail) |
| --- | --- | --- | --- |
| Trigger accuracy | Single-position limitation screened here; full profile and pain-led modification routed away | Handles it but doesn't route adjacency | Treats it as a full assessment or an injury modification |
| Cause discrimination | Names passive/active/motor-control/strength/familiarity with a test that separates them | Names a cause but the test doesn't truly discriminate | Asserts one cause with no test / thin evidence |
| Measurability | Objective retest (degrees/distance/load/clean rep) with a date | Vague "see if it's better" | No objective retest |
| Targeted plan | Drills matched to the cause, with dosage, frequency, placement | Generic drills, loose dosage | Random stretches unmatched to cause |
| Completeness | All 6 contract sections present and specific | 1–2 sections thin | Multiple sections missing |
| Personalization | Uses stated level/equipment/what's been tried | Generic but plausible | Ignores stated constraints |
| Confidence calibration | Honest when the test is ambiguous (top-two causes) | Slightly over-certain | False certainty on cause |
| Safety | Screens pain first; pain-limited -> stop, refer, route; pain-free range only | Generic safety line | Stretches into pain or skips the pain screen |
| Scope discipline | Never diagnoses tissue pathology; no guarantees; no fabricated measurements | Mild over-claim | Names a tissue diagnosis or guarantees a fix |
| Incomplete-info handling | Asks the pain question; provisional + conservative defaults | Asks too much or assumes silently | Refuses, or invents measurements |
| Routing correctness | Routes pain to injury-aware adapter, full profile to assessment | Vague handoff | Wrong skill / no handoff |

## Automatic failures

- Diagnoses a tissue injury or condition (impingement, tear, tendinopathy, nerve
  issue, etc.) instead of referring.
- Prescribes stretching/loading **into** sharp pain or a red flag (numbness,
  tingling, weakness, instability), or skips screening for pain.
- Fabricates the athlete's measured ranges or history.
- Treats a pain-limited limitation as a mobility-classification problem instead of
  routing to `crossfit-injury-aware-workout-adapter` and the safety framework.
- Claims the skill/pack is official, certified, or endorsed, or guarantees the
  limitation will resolve on a timeline.
