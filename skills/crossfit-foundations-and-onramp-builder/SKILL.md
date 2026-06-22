---
name: CrossFit Foundations and Onramp Builder
description: Use when the user wants to onboard new athletes or build a CrossFit foundations / on-ramp / intro course before regular class — e.g. "design a 6-session beginner on-ramp". Expects format (1:1, group, accelerated, multiweek), session count, and equipment. Produces a session-by-topic architecture, competence checkpoints, and competence-based graduation criteria. Excludes ongoing programming (route to crossfit-programming-cycle-builder, which owns it) and special-population adaptation (crossfit-population-adaptation-coach).
category: onboarding
risk_level: medium
requires_current_rules: false
---

# CrossFit Foundations and Onramp Builder

Build an **onboarding / on-ramp course** that prepares a new athlete to enter
regular class safely and competently. This skill owns the intro program: the
sequence of sessions, what each one teaches, and the competence checkpoints that
gate progression. It teaches movement patterns, the key lifts, gymnastics basics,
monostructural work, formats, intensity, scaling, safety, etiquette, terminology,
scoring, and recovery — sequenced **mechanics → consistency → intensity**. See
[../../references/class-planning.md](../../references/class-planning.md) §Onboarding
and [../../references/coaching-principles.md](../../references/coaching-principles.md) §2.

## Workflow

1. **Pick the format and budget.** 1:1, small-group, accelerated, or multiweek;
   how many sessions and how long each. Gate progression on **demonstrated
   competence, not attendance count**.
2. **Lay out the course architecture.** Map sessions × topics so every required
   area (patterns, key lifts, gymnastics, monostructural, formats, intensity,
   scaling, safety, etiquette, terminology, scoring, recovery) is covered before
   graduation, with no movement introduced before its prerequisite.
3. **Write per-session objectives.** For each session: its learning objective, the
   key movements introduced, and the **competence checkpoint** (what the athlete
   must demonstrate to move on).
4. **Sequence movement teaching mechanics-first.** Air squat before front/back
   squat before overhead; deadlift/hinge before clean; ring rows/scaled pulls
   before pull-ups. See
   [../../references/coaching-principles.md](../../references/coaching-principles.md) §2 and §5.
5. **Introduce scaling and safety as taught skills**, not afterthoughts — how the
   athlete will self-scale and the stop conditions they must know. See
   [../../references/safety-and-referral.md](../../references/safety-and-referral.md).
6. **Cover the culture layer.** Etiquette (sharing space, cleaning equipment),
   terminology (AMRAP, EMOM, RX, reps/rounds), and scoring/how the whiteboard works.
7. **Define graduation criteria.** A competence-based checklist that says the
   athlete is ready for regular class — and what happens if they are not yet.
8. **Provide format variants.** Show how the same competencies compress into a 1:1
   or accelerated path, or expand across a multiweek group on-ramp.

## Inputs

**Required (or inferable):** format (1:1 / group / accelerated / multiweek) or
enough to choose it, number of sessions or time available, and equipment available.

**Optional (improves the output):** athlete background and training age, group size,
known restrictions/injuries (which may trigger routing), age/population
considerations, and whether this is a transfer from another methodology.

## Non-goals

- **Not** ongoing regular programming after graduation → `crossfit-programming-cycle-builder`.
- **Not** special-population or medical adaptation (pregnancy, masters-specific,
  deconditioned ramp, chronic conditions) → `crossfit-population-adaptation-coach`.
- **Not** building a single skill over time → `crossfit-movement-progression-builder`.
- **Not** the floor-running logistics of a session → `crossfit-class-logistics-and-floor-manager`.
- Does **not** diagnose, prescribe medical care, or guarantee outcomes.

## Default output (On-ramp course contract)

1. **Course architecture** — sessions × topics grid; format and total budget.
2. **Per-session plan** — for each session: objective, key movements introduced,
   and the competence checkpoint to advance.
3. **Scaling & safety intro** — how athletes self-scale; the stop conditions taught.
4. **Culture coverage** — etiquette, terminology, scoring/whiteboard.
5. **Graduation criteria** — competence-based checklist + what to do if not yet met.
6. **Format variants** — 1:1, accelerated, multiweek expansions of the same
   competencies.

## Safety & scope

New athletes are the highest-risk population for doing too much too soon, so apply
[../../references/safety-and-referral.md](../../references/safety-and-referral.md)
firmly: sequence **mechanics → consistency → intensity** and never let an
accelerated timeline skip the mechanics phase, even for an experienced transfer —
verify competence rather than assume it. Teach stop conditions and rhabdomyolysis
caution explicitly (novel high-volume stimulus is a known trigger for new
athletes). If the request involves pain, injury, pregnancy/postpartum, a chronic
condition, or any red flag, route per the framework and to
`crossfit-population-adaptation-coach` or `crossfit-injury-aware-workout-adapter`;
do not "onboard around" it.

## Incomplete information

Never fabricate athlete history or competence. If a decision-changing input is
missing (usually format, session count, or equipment), return a **clearly labeled
provisional** course using a stated assumption (e.g. "assuming a 4-session
small-group on-ramp"), keep the competence checkpoints as the real gate, and ask
only for the one or two fields that change the architecture. Always deliver a
usable course outline — do not refuse for want of full background.

## Related Skills and Routing

- **This skill owns** building the intro / foundations / on-ramp course.
- **Collaborates with** `crossfit-class-plan-builder` (which turns any single
  on-ramp session into a minute-by-minute lesson), `crossfit-movement-progression-builder`
  (for an athlete who needs an extended single-skill progression beyond on-ramp),
  and `crossfit-stimulus-and-scaling-coach` (for the scaling logic taught). Pass
  forward: the session objectives, key movements, and competence checkpoints.
- **Defers to** `crossfit-programming-cycle-builder` once the athlete graduates to
  regular programming, `crossfit-population-adaptation-coach` for special
  populations, and `crossfit-injury-aware-workout-adapter` when pain/restrictions
  are central.
- When ambiguous (on-ramp vs. ongoing programming vs. special population),
  `crossfit-pack-router` disambiguates.
