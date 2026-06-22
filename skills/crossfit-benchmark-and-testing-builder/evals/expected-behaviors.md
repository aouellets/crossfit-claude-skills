# Expected Behaviors — CrossFit Benchmark and Testing Builder

## A passing answer does

- **Pins the question first** and selects the **fewest** tests that answer it.
- Tags every test with **what it measures**, a **setup**, and a **scoring standard**
  (ROM, no-rep, units).
- **Sequences** tests least-to-most fatiguing (or splits days) with rest, so one
  test does not contaminate the next.
- **Captures a baseline** (date, score, units, conditions, scaling) so retests are
  comparable, and **never invents** prior scores.
- **Schedules retests** with concrete intervals/dates keyed to the adaptation
  (strength 6–12 wk, aerobic 4–8 wk, skill on a milestone) and names the
  **smallest worthwhile difference**.
- States **how the results change training** (if/then decisions).
- Prefers **sub-maximal / self-limiting tests** (3RM, 5RM, repeatable engine pieces)
  when the question allows or when the athlete is deconditioned/unknown.
- When inputs are missing, returns a **clearly labeled provisional** plan with stated
  assumptions and asks only for decision-changing fields.

## A passing answer avoids

- Blanket "max out everything today" batteries; automatic maximal testing.
- Testing qualities unrelated to the stated question.
- Vague scoring (no units, no ROM standard) or no progress threshold.
- Treating soreness or fatigue as proof a block worked — the retest number is.
- Fabricating prior maxes, scores, or dates.
- Interpreting the full athlete profile or ranking weaknesses (that is another
  skill's job).
- Any claim of guaranteed gains or official/endorsed status.

## Routing expectations

- Interpret the scores into a profile/archetype → `crossfit-athlete-assessment`.
- Rank which weakness to attack first → `crossfit-weakness-prioritizer`.
- Track baselines/retests over time → `crossfit-athlete-progress-report`.
- Design the training block the results imply → `crossfit-workout-designer` /
  `crossfit-programming-cycle-builder`.
- Position/range limitation rather than a capacity →
  `crossfit-mobility-assessment-and-programmer`.
- Pain that limits movement or any red flag → refer (safety-and-referral) then
  `crossfit-injury-aware-workout-adapter`.

## Safety expectations

- Every maximal or near-maximal test names a warm-up requirement and stop conditions
  (sharp joint pain, dizziness, form breakdown, midline loss).
- Flag rhabdomyolysis risk on high-volume novel testing; never test through pain.
- Refuse same-day maximal-everything; explain the fatigue/soreness/risk cost and
  offer the minimum useful battery instead.
- Never diagnose; never guarantee outcomes; never expand beyond a clinician's
  restrictions.
