---
name: CrossFit Specialty Cycle Builder
description: Use when the user wants a dedicated multiweek block to bring up ONE quality or movement — strength, Olympic lifting, gymnastics, running, rowing, aerobic base, sprint capacity, or a single lift — phrased as "specialize", "bias", "bring up my", or "focus block". Expects target quality, weeks, training days, and current level/maxes. Produces a focused plan plus an explicit interference-management section. Excludes balanced GPP cycles (route to crossfit-programming-cycle-builder) and single sessions (route to crossfit-workout-designer).
category: programming
risk_level: medium
requires_current_rules: false
---

# CrossFit Specialty Cycle Builder

Build a **focused, single-quality training block** that deliberately biases one
adaptation (e.g. back-squat strength, the snatch, strict pulling, a 5 k run, a
2 k row, aerobic base, sprint capacity, or one competition skill) **while
controlling interference** with the rest of an athlete's CrossFit training. This
skill owns "specialize / bias / bring up ONE thing" requests. It does **not**
build balanced general physical preparedness (GPP) and it does **not** write a
single session. It works from the
[../../references/coaching-principles.md](../../references/coaching-principles.md)
§6 (specificity for goals) and §4 (intensity must be distributed).

## Workflow

1. **Confirm the single target** and that the athlete accepts the tradeoff:
   biasing one quality means the rest of fitness is *maintained*, not advanced
   (see [../../references/coaching-principles.md](../../references/coaching-principles.md) §1).
   If the user names more than one priority, force a ranking — you cannot peak
   everything at once.
2. **Pick the progression model** for that quality from training age:
   strength/Oly via
   [../../references/weightlifting-progressions.md](../../references/weightlifting-progressions.md)
   (novice linear / intermediate undulation / advanced block + taper); gymnastics
   via
   [../../references/gymnastics-progressions.md](../../references/gymnastics-progressions.md)
   (strict → kip → volume, criteria-gated); engine/running/rowing via aerobic and
   interval structure in
   [../../references/time-domain-framework.md](../../references/time-domain-framework.md).
3. **Lay out the weeks** — accumulation → intensification → realization/retest,
   with a deload every ~4–6 weeks; state the weekly primary-quality dose
   (sessions/week, sets, %1RM or RPE, or volume).
4. **Decide the maintenance dose of normal CrossFit** — how many metcons/skill
   days stay in, at what intensity, so the rest of fitness does not regress while
   the priority advances.
5. **Sequence to protect the priority** — put the specialty work *before*
   fatiguing conditioning when freshness matters (strength/Oly/skill); manage
   shared-pattern fatigue (e.g. heavy squats + high-volume box jumps/wall balls).
6. **Define the retest** that closes the block (a top single/triple at RPE, a
   skill criterion, a time-trial), and what result advances vs. repeats.
7. **State interference management explicitly** as its own section (below).
8. **Give the rationale** tying weekly structure back to the target adaptation.

## Inputs

**Required (or inferable):** the single target quality/movement; weeks available;
training days/week; current level (and a relevant max, PR time, or skill
criterion if the target is strength/Oly/endurance/skill).

**Optional (improves the output):** other maxes, recent training history, how much
normal CrossFit they want to keep, competition date, known restrictions/injuries,
masters/age considerations, equipment limits.

## Non-goals

- **Not** a balanced multiweek GPP cycle → `crossfit-programming-cycle-builder`.
- **Not** a single session/WOD → `crossfit-workout-designer`.
- **Not** scaling an already-chosen workout → `crossfit-stimulus-and-scaling-coach`.
- **Not** a competition peak/taper plan with strategy → `crossfit-competition-preparation-planner`.
- **Not** an injury-restricted adaptation → `crossfit-injury-aware-workout-adapter`.
- It is a **non-goal** to specialize multiple qualities at once or to promise a PR;
  the skill forces prioritization and frames outcomes as ranges.
- Does **not** diagnose, prescribe medical care, or guarantee outcomes.

## Default output (Specialty-cycle contract)

1. **Target & tradeoff** — the one quality, and the explicit "maintain, not
   advance, everything else" framing.
2. **Block structure** — weeks split into phases (accumulation / intensification /
   realization), deload placement.
3. **Primary-quality prescription** — weekly dose: sessions, sets×reps, %1RM/RPE
   or volume, progression rule week to week.
4. **Maintained CrossFit** — how many metcons/skill days stay, at what intensity,
   and what they may *not* include (to protect the priority).
5. **Weekly template** — a representative week showing sequencing within and
   across days.
6. **Interference management** — how this block protects the priority and limits
   regression elsewhere (its own section; see below).
7. **Retest & decision rule** — the closing test and what advances vs. repeats.
8. **Risks & stop conditions** — overreaching signs, shared-joint stress, deload
   triggers.
9. **Rationale** — why this structure produces the target adaptation.

### Interference management (always include)

State, concretely: (a) the **maintenance volume** of non-priority work (e.g. "keep
3 metcons/week, ≤2 at hard intensity"); (b) **sequencing rules** (priority work
fresh / before conditioning, or on separate sessions); (c) **shared-fatigue
conflicts** to avoid (e.g. don't stack heavy squats the day before a long run, or
high-grip pulling the day before a max-pull test); (d) **what regresses and is
accepted** during the block; (e) the **deload** that resets accumulated fatigue.
See [../../references/coaching-principles.md](../../references/coaching-principles.md)
§4–§5 and [../../references/weightlifting-progressions.md](../../references/weightlifting-progressions.md).

## Safety & scope

Apply the safety framework proportionately. Specialty blocks raise per-pattern
volume, so name the relevant risks: overuse from repeated loading of one pattern,
overreaching from too little distributed recovery, novel-stimulus risk (e.g. a
sudden running or GHD ramp), and impact accumulation. Build in deloads and
volume ramps rather than jumping load. If the request involves training **through
pain**, an injury, or any red flag (sharp/localized pain, neurological symptoms,
suspected fracture, rhabdomyolysis warning signs), do **not** program around it —
refer per
[../../references/safety-and-referral.md](../../references/safety-and-referral.md)
and route to `crossfit-injury-aware-workout-adapter`. Never use intensity as a
substitute for structured progression, and never schedule automatic maximal
testing outside a planned retest.

## Incomplete information

Never fabricate athlete data (maxes, PR times, training history, skill criteria).
If a materially decision-changing input is missing (weeks, days/week, current
level, or the relevant baseline), return a **clearly labeled provisional block**
using conservative defaults — RPE-anchored loads, criterion-gated skill
progressions, a standard accumulation→deload cadence — state each assumption, and
ask only for the one or two fields that would change the structure. Treat unknown
baselines as **provisional** and never invent a starting max.

## Related Skills and Routing

- **This skill owns** focused single-quality / single-movement multiweek blocks
  and their interference management.
- **Collaborates with** `crossfit-workout-designer` (it can author the individual
  sessions referenced by the weekly template — pass forward the target quality,
  weekly dose, and sequencing constraints), `crossfit-movement-progression-builder`
  (for the detailed teaching ladder of a target skill), and
  `crossfit-weakness-prioritizer` (which can identify *which* quality to specialize
  before this skill builds the block).
- **Defers to** `crossfit-programming-cycle-builder` when the request is a balanced
  GPP cycle rather than a single-quality bias; to
  `crossfit-competition-preparation-planner` when the block must peak and taper for
  a dated competition; and to `crossfit-injury-aware-workout-adapter` when pain or
  an injury is central.
- When ambiguous (specialty vs. balanced cycle, build vs. scale),
  `crossfit-pack-router` disambiguates.
