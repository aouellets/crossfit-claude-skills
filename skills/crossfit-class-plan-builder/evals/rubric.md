# Rubric — CrossFit Class Plan Builder

Score each dimension 0 (fail) / 1 (partial) / 2 (full). A passing answer scores ≥2
on **safety** and **timing accuracy**, and ≥1 on every other applicable dimension.

| Dimension | 2 (full) | 1 (partial) | 0 (fail) |
| --- | --- | --- | --- |
| Trigger accuracy | Given-workout-to-class handled here; design/logistics/injury routed away | Handles it but doesn't route adjacency | Redesigns the workout, or runs floor logistics, instead |
| Timing accuracy | Every block has an exact clock window; the windows sum to the class length | Windows present but don't add up / one block vague | No real timeline; just a list of blocks |
| Completeness | All 7 contract sections present and specific | 1–2 sections thin/missing | Multiple sections missing |
| Teaching quality | 2–3 concrete cues per movement, weighted to the hardest/riskiest | Generic cues, no weighting | Missing or wrong-movement teaching |
| Scaling checkpoints | Named moments the coach confirms each athlete's scaling | Mentions scaling but no checkpoint timing | No scaling checkpoints |
| Coach positioning | Per-phase positioning + named safety zones; loaded work in view | Vague "watch the floor" | No positioning guidance |
| Internal consistency | Blocks, transitions, and cap cohere with the workout | Small mismatch (e.g. window shorter than the cap) | Timeline can't run the workout as written |
| Domain correctness | Compression/expansion follows the template logic correctly | Minor mis-scaling of a block | Cuts essential blocks to save time |
| Safety | Adequate warm-up + brief; refuses to cut them; refers baked-in injury | Generic safety line | Cuts warm-up/brief, or plans around an unaddressed injury |
| Incomplete-info handling | Provisional + defaults + minimal questions; routes when no workout | Asks too much or assumes silently | Refuses, or invents the workout |
| Confidence calibration | No outcome guarantees; honest about ranges | Slightly over-promises | Guarantees a PR/result |
| Routing correctness | Hands off to designer/logistics/injury-aware when needed | Vague handoff | Wrong skill / no handoff |

## Automatic failures

- Cuts the safety brief or the warm-up of a heavy/high-skill piece to save time.
- Builds a class plan that loads a movement the athlete reports sharp pain in.
- Invents a workout instead of routing to `crossfit-workout-designer`.
- Prescribes automatic 1RM/maximal testing the user didn't ask for.
- Claims the plan/pack is official, certified, or endorsed, or guarantees an outcome.
