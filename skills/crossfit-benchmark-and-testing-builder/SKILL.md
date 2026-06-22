---
name: CrossFit Benchmark and Testing Builder
description: Use when the user wants to test, baseline, or retest an athlete, or asks which benchmarks to run to answer a question ("how should I test my engine", "retest after this block"). Expects the question, level, equipment, and recent maxes. Selects the minimum useful battery, standardizes scoring, captures a baseline, schedules retests. Excludes interpreting the full profile (route to crossfit-athlete-assessment) and ranking weaknesses (defer to crossfit-weakness-prioritizer); owns test selection, not interpretation.
category: assessment
risk_level: medium
requires_current_rules: false
---

# CrossFit Benchmark and Testing Builder

Select the **minimum useful battery** of tests — benchmark WODs, strength tests,
gymnastics or weightlifting tests — that actually answers a specific question, then
standardize setup and scoring, capture a baseline, schedule retests, and state how
the results will change training. This skill owns "what should I test and how",
not "what does the whole athlete look like".

Testing has a cost: fatigue, soreness, time, and risk. The default posture is to
test the **fewest** things that resolve the stated question, never to "max out
everything today." Work from the question backward, the same way
`crossfit-workout-designer` works from the stimulus backward.

## Workflow

1. **Pin the question.** Make the user name what decision the test informs ("is my
   aerobic base limiting Fran?", "did the strength block work?"). One question →
   one small battery.
2. **Select the minimum battery.** Choose the fewest tests that isolate the
   question, each tagged with **what it measures**. Prefer tests the athlete has a
   prior score for (so a retest is meaningful). See
   [../../references/time-domain-framework.md](../../references/time-domain-framework.md),
   [../../references/weightlifting-progressions.md](../../references/weightlifting-progressions.md),
   and [../../references/gymnastics-progressions.md](../../references/gymnastics-progressions.md).
3. **Standardize each test.** Define setup (equipment, loads, monitor settings),
   warm-up requirement, scoring standard (ROM, no-rep, units), and stop conditions.
4. **Sequence and rest.** Order tests least-to-most fatiguing or split across days;
   specify rest between tests so one does not contaminate the next.
5. **Capture the baseline.** Record date, score, conditions, and scaling used so the
   number is comparable later. Never invent prior scores
   ([../../references/athlete-intake.md](../../references/athlete-intake.md)).
6. **Schedule retests** with concrete intervals/dates appropriate to the adaptation
   (strength 6–12 weeks, aerobic 4–8 weeks, skill on a milestone), and name the
   change that would count as progress.
7. **State how results change training**, then hand interpretation to
   `crossfit-athlete-assessment` and prioritization to
   `crossfit-weakness-prioritizer`.

## Inputs

**Required (or inferable):** the question/decision the testing should answer;
athlete training level; equipment and time available.

**Optional (improves the output):** recent maxes or prior benchmark scores (and
their dates), goal and timeline, injury/pain history, training phase, prior days'
load, masters/age considerations.

## Non-goals

- **Not** interpreting a full capacity profile or naming the athlete's archetype →
  `crossfit-athlete-assessment`.
- **Not** ranking which weakness to attack first → `crossfit-weakness-prioritizer`.
- **Not** designing the training block that follows → `crossfit-workout-designer`
  or `crossfit-programming-cycle-builder`.
- **Not** mobility/position screening → `crossfit-mobility-assessment-and-programmer`.
- Does **not** prescribe automatic maximal testing, diagnose, or guarantee outcomes.

## Default output (Testing-plan contract)

1. **Question** — the single decision this battery answers.
2. **Minimum battery** — each test as: *what it measures · setup · scoring
   standard*. Justify why each test earns its place.
3. **Sequencing & rest** — order, same-day vs. split-day, rest between tests.
4. **Baseline capture** — fields to record (date, score, units, conditions,
   scaling) so the retest is comparable.
5. **Retest schedule** — concrete interval/date per test and the change that counts
   as progress (smallest worthwhile difference).
6. **How results change training** — the if/then decisions the scores drive.
7. **Safety** — warm-up requirement and stop conditions.

## Safety & scope

Apply the safety framework proportionately
([../../references/safety-and-referral.md](../../references/safety-and-referral.md)).
Every maximal or near-maximal test names a warm-up requirement and stop conditions
(sharp joint pain, dizziness, form breakdown, loss of midline). High-volume novel
testing carries rhabdomyolysis risk — flag it and never tell an athlete to test
through pain. If the request involves pain that limits movement or any red flag,
do **not** prescribe the test: refer per the safety reference and route to
`crossfit-injury-aware-workout-adapter`. Refuse blanket "max out everything today"
requests and explain the fatigue/soreness/risk cost; offer the minimum battery
instead. Never schedule maximal testing the user did not justify.

## Incomplete information

Never fabricate athlete data — prior maxes, benchmark scores, or dates. If a
decision-changing input is missing, return a **clearly labeled provisional** testing
plan using conservative defaults (e.g. an RPE-capped strength test or a
submaximal/repeatable engine test instead of an all-out max), state each
assumption, and ask only for the one or two fields that change the battery (usually:
the question, equipment, recent scores, injuries). Always provide a usable plan;
do not refuse for want of a prior 1RM.

## Related Skills and Routing

- **This skill owns** choosing the test battery, standardizing it, and scheduling
  retests.
- **Collaborates with** `crossfit-athlete-assessment` (which interprets the results
  into a profile), `crossfit-weakness-prioritizer` (which ranks what to fix from
  those results), and `crossfit-athlete-progress-report` (which consumes baselines
  and retests over time). Pass forward: the question, each test's measure, the
  baseline, and the retest dates.
- **Defers to** `crossfit-mobility-assessment-and-programmer` when the question is a
  position limitation rather than a capacity, and to
  `crossfit-injury-aware-workout-adapter` when pain is central.
- When the request is really "tell me what's wrong and what to fix," that is
  assessment + prioritization, not test selection; `crossfit-pack-router`
  disambiguates.
