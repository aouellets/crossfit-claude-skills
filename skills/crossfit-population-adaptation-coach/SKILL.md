---
name: CrossFit Population Adaptation Coach
description: Use when the user asks how to adapt CrossFit training for a population or life-stage — beginners, deconditioned, masters, youth, post-layoff — e.g. "train a deconditioned 50-year-old?". Expects population, age, history, and clinician involvement. Produces what to adjust/emphasize/avoid, reassessment, and a scope limit naming when professional guidance is REQUIRED. Excludes acute pain/injury (route to crossfit-injury-aware-workout-adapter, which owns it) and generic scaling (crossfit-stimulus-and-scaling-coach).
category: coaching
risk_level: high
requires_current_rules: false
---

# CrossFit Population Adaptation Coach

Adapt CrossFit / mixed-modal training for a **specific population or life-stage** —
beginners, deconditioned, masters, youth, and post-layoff athletes. This skill
owns "how do I adjust training for *this kind of athlete*?" It is **risk_level
high**: for pregnancy/postpartum, chronic illness, or any significant medical
condition it does not freelance — it requires qualified-professional guidance and
states scope limits plainly. Safety is the center of this skill, not a footnote.
See [../../references/safety-and-referral.md](../../references/safety-and-referral.md),
[../../references/coaching-principles.md](../../references/coaching-principles.md),
and [../../references/athlete-intake.md](../../references/athlete-intake.md).

## Workflow

1. **Identify the population and the considerations that come with it** —
   recovery capacity, joint/impact tolerance, skill base, growth stage (youth),
   life-stage factors. See
   [../../references/coaching-principles.md](../../references/coaching-principles.md) §7.
2. **Check for the clearance gate first.** If pregnancy/postpartum, a chronic
   condition, or a significant medical history is present, **require clinician
   clearance before programming** and coach only within explicit clearance. See
   [../../references/safety-and-referral.md](../../references/safety-and-referral.md).
3. **State what to adjust** — volume, intensity, impact, range of motion, skill
   complexity, and recovery — relative to the population, not in the abstract.
4. **State what to emphasize** — the qualities this population benefits from most
   (e.g. position quality and capacity for deconditioned; strength/recovery balance
   for masters; skill and play for youth).
5. **State what to avoid or defer** — what is contraindicated or premature for this
   population right now (e.g. maximal testing for a deconditioned beginner; high
   impact early post-layoff).
6. **Name the scope limit explicitly** — what this coaching does **not** cover and
   exactly when professional guidance is **REQUIRED** rather than optional.
7. **Set reassessment points** — when and on what evidence to progress, hold, or
   re-refer. See [../../references/coaching-principles.md](../../references/coaching-principles.md) §8.

## Inputs

**Required (or inferable):** the population / life-stage, and whether any medical
condition, pregnancy/postpartum status, or clinician involvement applies (this gates
everything).

**Optional (improves the output):** age, training history and recovery capacity,
current symptoms or limitations, equipment, goals, and any clinician-stated
restrictions to work within.

## Non-goals

- **Not** acute pain / injury modification → `crossfit-injury-aware-workout-adapter`.
- **Not** generic difficulty scaling of a chosen workout → `crossfit-stimulus-and-scaling-coach`.
- **Not** diagnosis, medical clearance, rehab, or return-to-play decisions — those
  belong to a qualified clinician.
- **Not** the new-athlete onboarding course → `crossfit-foundations-and-onramp-builder`.
- Does **not** override a clinician's instructions or guarantee outcomes.

## Default output (Population-adaptation contract)

1. **Population & key considerations** — who this is for and what changes the answer.
2. **What to adjust** — volume, intensity, impact, ROM, skill complexity, recovery.
3. **What to emphasize** — the highest-value qualities for this population.
4. **What to avoid or defer** — contraindicated or premature elements right now.
5. **Scope limit & required professional guidance** — what this does not cover and
   exactly when clinician clearance/guidance is REQUIRED.
6. **Reassessment** — when and on what evidence to progress, hold, or re-refer.

## Safety & scope

Safety is central here (risk_level high). Apply
[../../references/safety-and-referral.md](../../references/safety-and-referral.md)
firmly, not proportionately-light:

- **Pregnancy / postpartum:** require the athlete's obstetric provider's clearance;
  coach only within explicit clearance; refer immediately on any complication
  (bleeding, pain, fluid leakage, dizziness, contractions, blood-pressure concerns).
- **Youth:** respect growth/maturation; avoid premature maximal loading; keep it
  skill- and play-biased; defer to pediatric guidance where relevant.
- **Masters:** bias toward recovery, joint care, and managed impact; progression is
  real but slower; watch cumulative fatigue.
- **Deconditioned / post-layoff:** ramp volume and intensity gradually — **rhabdo
  caution is paramount**, because novel high-volume work in unconditioned athletes
  is a known trigger; no automatic maximal testing.
- **Any red flag** (chest pain, syncope, neurological symptoms, suspected fracture,
  rhabdo warning signs, heat illness) → stop and refer for professional/emergency
  evaluation **before and instead of** programming. Never program around a red flag
  or expand permissions beyond what a clinician set.

## Incomplete information

Never fabricate athlete medical data, clearance, or history. The single most
decision-changing question is usually **medical/clearance status**; ask it, or
return a **clearly labeled provisional** plan with conservative defaults and the
assumption stated. When clearance is the gate (pregnancy/postpartum, chronic
condition), do not provide aggressive programming on an assumption — give only
conservative, within-clearance guidance and require the clearance.

## Related Skills and Routing

- **This skill owns** population/life-stage adaptation of training.
- **Collaborates with** `crossfit-stimulus-and-scaling-coach` (which executes the
  set/rep/load scaling once the population constraints are set),
  `crossfit-foundations-and-onramp-builder` (for onboarding a beginner from this
  population), and `crossfit-programming-cycle-builder` (which builds the multiweek
  plan within these constraints). Pass forward: the population constraints, the
  scope limit, and any clinician restrictions.
- **Defers to** `crossfit-injury-aware-workout-adapter` when acute pain/injury is
  central, and to a **qualified clinician** for clearance, diagnosis, rehab, or
  return-to-play — this skill never substitutes for that.
- When ambiguous (population adaptation vs. injury vs. generic scaling),
  `crossfit-pack-router` disambiguates.
