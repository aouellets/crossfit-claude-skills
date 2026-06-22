---
name: CrossFit Mobility Assessment and Programmer
description: Use when an athlete reports a position limitation and wants to improve it ("can't reach overhead", "no squat depth", "can't hit the front rack"). Expects the position, what it limits, and any pain. Distinguishes passive vs. active mobility vs. motor control vs. strength vs. familiarity vs. pain via a discriminating test, then builds a short plan with an objective retest. Excludes pain-led modification (route to crossfit-injury-aware-workout-adapter) and full assessment (defer to crossfit-athlete-assessment); never diagnoses tissue.
category: assessment
risk_level: medium
requires_current_rules: false
---

# CrossFit Mobility Assessment and Programmer

When an athlete cannot get into a position — overhead, bottom of the squat, front
rack — the first job is to find out **why**, because the fix is different for each
cause. This skill distinguishes six causes and builds a **short, targeted plan**
with an **objective retest**. It owns "I can't get into this position, help me
improve it"; it does **not** diagnose tissue pathology and it is not the place for
pain-led modification.

The six candidate causes:

1. **Passive mobility** — the joint/tissue won't reach the range even when relaxed
   and assisted.
2. **Active mobility** — passive range exists, but the athlete can't *own* it
   actively (range without control).
3. **Motor control** — the range and strength exist, but the movement pattern/
   sequencing is off.
4. **Strength** — the position is reachable but can't be held/loaded.
5. **Position familiarity** — the athlete simply hasn't practiced the position.
6. **Pain-limited** — movement is restricted by pain. **This is the stop case.**

## Workflow

1. **Name the limitation precisely** (which position, in which movement, what it
   blocks). See [../../references/movement-pattern-taxonomy.md](../../references/movement-pattern-taxonomy.md).
2. **Screen for pain first.** If the limit is pain-limited, **stop** — do not
   classify further; refer and route (see Safety & scope).
3. **Run the discriminating test** that separates the likely causes (e.g.
   passive-vs-active overhead test; ankle-driven vs. motor-control squat test).
   State exactly what each result rules in or out.
4. **Name the most likely cause** (or the top two if the test is ambiguous), with
   the evidence — never assert a single cause on thin evidence.
5. **Build a short targeted plan** matched to that cause: drills, dosage
   (sets/reps/holds), frequency, and where it sits in the session.
6. **Define an objective retest** — a measurable check (degrees, a wall distance, a
   load, a clean rep at the position) and a **date** to re-screen.
7. **Pull intake context** only as needed
   ([../../references/athlete-intake.md](../../references/athlete-intake.md)); never
   fabricate measurements or history.

## Inputs

**Required (or inferable):** the position/limitation and what it blocks; whether
there is any pain in that position.

**Optional (improves the output):** training level, prior mobility work tried,
relevant maxes or skill ceilings, equipment, recent training load, masters/age
considerations, and what the athlete has already ruled out.

## Non-goals

- **Not** pain-led workout modification → `crossfit-injury-aware-workout-adapter`.
- **Not** a full capacity profile/archetype → `crossfit-athlete-assessment`.
- **Not** diagnosing a tissue injury or condition (impingement, labral tear,
  tendinopathy, etc.) — that is outside coaching scope; refer.
- **Not** building a strength block or a full workout → `crossfit-workout-designer`
  / `crossfit-programming-cycle-builder` (though the plan may include a few drills).
- Does **not** promise the limitation will resolve or guarantee a timeline.

## Default output (Mobility-screen contract)

1. **Limitation** — the position, the movement it appears in, what it blocks.
2. **Likely cause** — which of passive / active / motor-control / strength /
   familiarity / pain, with the evidence.
3. **Discriminating test** — the exact test and what each result means (the test
   that separates the candidate causes).
4. **Targeted plan** — drills matched to the cause, with dosage (sets × reps/holds),
   frequency, and session placement.
5. **Objective retest** — the measurable check (degrees / distance / load / clean
   rep) and a re-screen **date**.
6. **Safety** — the pain stop case and stop conditions.

## Safety & scope

Apply the safety framework proportionately
([../../references/safety-and-referral.md](../../references/safety-and-referral.md)).
**Critical:** if the limitation is **pain-limited** — pain that restricts the range,
sharp pain in the position, or any red flag (numbness/tingling, weakness, instability,
night pain) — **stop**. Do not classify it as a mobility problem, do not prescribe
aggressive stretching into it, and do not diagnose the tissue. Recommend professional
evaluation and route to `crossfit-injury-aware-workout-adapter`. This skill screens
*positions*; it never names a tissue pathology (impingement, tear, tendinopathy) —
that is a clinician's job. Mobility drills should be worked in a pain-free range only.

## Incomplete information

Never fabricate athlete data — measurements, ranges, or history. The single most
decision-changing question is almost always **"is there pain in this position?"**;
ask it if unknown. If other inputs are missing, return a **clearly labeled
provisional** screen: give the discriminating test the athlete can self-administer,
a conservative pain-free drill set, and a retest, stating each assumption. Always
provide a usable next step; do not refuse for want of a measured range.

## Related Skills and Routing

- **This skill owns** screening a position limitation, classifying its cause, and
  prescribing a short targeted plan with an objective retest.
- **Collaborates with** `crossfit-movement-fault-analyzer` (which reads a movement
  error from observation — pass it the classified cause), `crossfit-workout-designer`
  (which can program around a known range limit), and
  `crossfit-coaching-cue-generator` (for cueing the position). Pass forward: the
  limitation, the likely cause, the drill set, and the retest.
- **Defers to** `crossfit-injury-aware-workout-adapter` (and the safety/referral
  framework) the moment pain limits the movement, and to
  `crossfit-athlete-assessment` when the request is really a full profile rather
  than one position.
- When it's unclear whether the issue is mobility, a fault, or pain,
  `crossfit-pack-router` disambiguates.
