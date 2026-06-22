---
name: CrossFit Programming Cycle Builder
description: Use when the user asks for more than one session — a multiweek block, cycle, program, "6 weeks of programming", or a build toward a date. Designs a balanced plan across strength, Olympic lifting, gymnastics, and conditioning, managing time domains, loading (%1RM/RPE), intensity distribution, recovery, retests, and deloads with phase rationale. Expects goal, schedule, level, equipment. Excludes single workouts (route to crossfit-workout-designer), single-quality focus blocks (crossfit-specialty-cycle-builder), and auditing existing programming (crossfit-programming-auditor).
category: programming
risk_level: medium
requires_current_rules: false
---

# CrossFit Programming Cycle Builder

Design a **multiweek training cycle** — a coherent block of several weeks that
develops broad fitness (or a defined goal) on purpose, week over week. This skill
owns any request for *more than one session*: "program my next 6 weeks", "build me
a cycle toward a bodyweight snatch", "I need an off-season block". It reasons from
[../../references/coaching-principles.md](../../references/coaching-principles.md)
and balances modalities using the
[../../references/movement-pattern-taxonomy.md](../../references/movement-pattern-taxonomy.md)
and [../../references/time-domain-framework.md](../../references/time-domain-framework.md).

## Workflow

1. **Fix the goal and the constraint set.** Name the primary adaptation (GPP vs. a
   biased goal), the schedule (sessions/week, weeks available), level, equipment,
   and any history. Specificity vs. generality per coaching-principles §6.
2. **Set the architecture.** Choose a periodization model by training age
   (linear / weekly-undulating / block — see
   [../../references/weightlifting-progressions.md](../../references/weightlifting-progressions.md)),
   the number and length of phases, and where the deload(s) and retests land.
3. **Distribute intensity across the week and block.** Place hard / moderate /
   skill-or-recovery days so repeated joint stress, overhead volume, and impact do
   not stack (coaching-principles §4, taxonomy balance heuristics).
4. **Thread each modality.** Give strength and Olympic lifting a measurable
   progression (%1RM/RPE waves); give gymnastics skills a frequency-based exposure
   with advancement criteria
   ([../../references/gymnastics-progressions.md](../../references/gymnastics-progressions.md));
   spread conditioning across all time domains, not one.
5. **Lay out weekly structure.** Produce a representative week table per phase
   (day → focus → key prescription), then state how the following weeks progress.
6. **Define progression and retest criteria.** State the rule that advances load
   or volume and the benchmarks/retests that prove the block worked.
7. **Build in recovery and adjustment rules.** Deload timing, and the
   "if X then Y" rules for when results or recovery diverge from plan.
8. **State risks and referral** proportionately, and give the phase-level
   rationale tying structure back to the goal.

## Inputs

**Required (or inferable):** goal / primary adaptation (or enough to infer it),
weeks available and sessions/week, athlete level, equipment available.

**Optional (improves the output):** lift maxes and benchmark times, training
history and recent volume, known weaknesses, injuries/restrictions, competition or
test date, recovery capacity (sleep/stress/age), preferred session length.

## Non-goals

- It is a **non-goal** to design a single session → `crossfit-workout-designer`.
- **Not** a single-quality focus block (e.g. "just 4 weeks of gymnastics") →
  `crossfit-specialty-cycle-builder`.
- **Not** an audit/critique of an *existing* program → `crossfit-programming-auditor`.
- **Not** an in-flight plan adjustment from logged results →
  `crossfit-adaptive-training-plan-manager`.
- Does **not** diagnose, prescribe medical care, or guarantee competitive outcomes.

## Default output (Training plan contract)

1. **Athlete & goal** — who this is for and the primary adaptation.
2. **Assumptions** — every inferred input, labeled.
3. **Architecture** — periodization model, phase count/length, deload and retest
   placement, intensity-distribution scheme.
4. **Phases** — for each phase: objective, representative **weekly structure**
   (day-by-day table), and **progression criteria** (how load/volume advances).
5. **Testing & retesting** — baseline benchmarks and the retest plan with dates.
6. **Adjustment rules** — explicit "if X then Y" rules for divergence.
7. **Recovery** — deloads, and sleep/nutrition/volume notes as inputs.
8. **Risks & referral** — proportionate safety notes and when to refer.

## Safety & scope

Apply [../../references/safety-and-referral.md](../../references/safety-and-referral.md)
proportionately. For a healthy athlete, manage cumulative load honestly: avoid
back-to-back redline glycolytic days, stacked high-impact landings, runaway
overhead or eccentric volume (rhabdomyolysis caution on novel high-volume work),
and program a real deload. If the request involves pain that limits movement, an
injury, or any red flag, do **not** build a block around it — refer and route to
`crossfit-injury-aware-workout-adapter` first. Never schedule automatic maximal
testing; retest only when the plan justifies it. Safety and recovery scope take
precedence over hitting a number.

## Incomplete information

Never fabricate athlete data (maxes, benchmark times, history). When a
decision-changing input is missing, return a **clearly labeled provisional plan**
built on conservative, RPE-anchored defaults, state each assumption explicitly,
and ask only for the one or two fields that would materially change the
architecture (usually: sessions/week, weeks available, goal, key maxes,
injuries). Always deliver a usable cycle — do not refuse for want of a 1RM. If the
athlete data is internally contradictory, surface the contradiction rather than
silently resolving it.

## Related Skills and Routing

- **This skill owns** multiweek/cyclical programming requests.
- **Collaborates with** `crossfit-workout-designer` (which fills in any single
  session in finer detail — pass it the day's intended stimulus, time domain, and
  loading), `crossfit-benchmark-and-testing-builder` (for the test battery the
  cycle retests against — pass the chosen benchmarks), and
  `crossfit-stimulus-and-scaling-coach` (for athlete-specific scaling of the
  block's sessions — pass each session's intended stimulus). Pass forward: the
  goal, architecture, weekly templates, and retest dates.
- **Defers to** `crossfit-specialty-cycle-builder` when the block targets a single
  quality, `crossfit-programming-auditor` when the user wants an existing program
  critiqued, `crossfit-adaptive-training-plan-manager` when adjusting a running
  plan from real results, and `crossfit-injury-aware-workout-adapter` when
  pain/restrictions are central.
- When the scope is ambiguous (one session vs. a cycle), `crossfit-pack-router`
  disambiguates.
