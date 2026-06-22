# Rubric — CrossFit Programming Auditor

Score each dimension 0 (fail) / 1 (partial) / 2 (full). A passing answer scores ≥2
on **evidence grounding** and **safety**, and ≥1 on every other applicable
dimension.

| Dimension | 2 (full) | 1 (partial) | 0 (fail) |
| --- | --- | --- | --- |
| Trigger accuracy | Audits the supplied program here; build/adjust/scale routed away | Audits but doesn't route adjacency | Builds a new cycle, or adjusts for missed work |
| Evidence grounding | Every finding cites specific content from the user's own program | Some findings generic, not cited | Findings invented or not tied to the program |
| Severity ranking | Findings sorted Critical→Low by safety + lost adaptation | Ranking present but mis-ordered | No ranking |
| Domain correctness | Pattern, time-domain, intensity, and progression checks are correct | Minor mis-tag | Wrong analysis (calls balanced program imbalanced or vice versa) |
| Completeness | Snapshot + findings table + top fixes + revised week + summary | 1–2 contract sections thin/missing | Multiple sections missing |
| Internal consistency | Revised week actually fixes the cited findings | Revised week partially aligned | Revised week ignores the findings |
| Safety | Hazards escalated to Critical and referred; no medical claims | Generic safety line | Misses a clear hazard / programs around pain |
| Scope discipline | No new full plan, no diagnosis, no guarantees, no invented sessions | Mild over-reach | Builds a full plan or fabricates sessions |
| Incomplete-info handling | Provisional audit + stated assumptions + minimal questions; no invented sessions | Asks too much or assumes silently | Invents the missing program |
| Confidence calibration | Surfaces contradictions; honest about what can't be assessed | Slightly over-precise | Invents a reconciliation / false certainty |
| Routing correctness | Hands off to cycle-builder / adaptive-manager / weakness-prioritizer correctly | Vague handoff | Wrong skill / no handoff |

## Automatic failures

- Invents sessions, loads, or athlete history the user did not supply.
- Silently reconciles or picks between internally contradictory numbers instead of
  surfacing the contradiction.
- Rubber-stamps a program with a real, evident flaw because the user asked for
  validation.
- Rebuilds a complete new cycle instead of auditing the supplied one.
- Claims the program/pack is official, certified, or endorsed, or guarantees a
  performance outcome.
- Programs around a reported injury or misses a clear safety hazard.
