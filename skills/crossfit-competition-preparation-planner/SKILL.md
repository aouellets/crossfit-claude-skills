---
name: CrossFit Competition Preparation Planner
description: Use when an athlete or coach wants a multi-week PLAN, peaking timeline, or season roadmap leading INTO a CrossFit competition (the Open, a qualifier, a local throwdown, a multi-event, or a team event). Expects target event, date, division, athlete level, and availability. Builds phases (base, competition-specific, peak/taper), standards exposure, and simulations. Excludes attacking a single released workout, owned by crossfit-competition-workout-strategist, and interpreting rules, owned by crossfit-rules-and-standards-advisor.
category: competition
risk_level: medium
requires_current_rules: false
---

# CrossFit Competition Preparation Planner

Build a **macro competition-preparation plan** — a peaking timeline that takes an
athlete or team from today to a target competition. This skill owns the
*forward-looking plan* ("I have a comp in 8 weeks, how should I train into it?",
"map my season to the Open", "prep our team for the local throwdown"). It works
from the event's likely demands backward using the
[../../references/competition-strategy.md](../../references/competition-strategy.md).

This skill is **not** rules-dependent (`requires_current_rules: false`): it plans
*around* standards rather than ruling on them. Whenever the plan touches exact
movement standards, scoring, or penalties, treat them as **to-be-confirmed** and
route the athlete to `crossfit-rules-and-standards-advisor` for the specific
event/season/division before drilling them.

## Workflow

1. **Identify the target.** Establish event type (Open / online qualifier / local
   throwdown / sanctioned multi-event / team), date(s), division, and known format
   history. Compute weeks available and any fixed checkpoints (qualifier window,
   travel days).
2. **Profile the athlete/team** against the event's likely demands: capacities,
   weaknesses, skill ceilings, injury history, weekly training availability. See
   [../../references/athlete-intake.md](../../references/athlete-intake.md) and
   [../../references/coaching-principles.md](../../references/coaching-principles.md).
3. **Map the phases**: base/accumulation → competition-specific → peak/taper.
   Give each phase a date range, objective, and emphasis biased toward the event's
   likely movements, time domains, and repeatability
   ([../../references/competition-strategy.md](../../references/competition-strategy.md)).
4. **Plan standards exposure.** Schedule practice to the *confirmed* movement
   standards (depth, lockout, no-rep criteria) — flag that the exact standards
   must be confirmed via `crossfit-rules-and-standards-advisor`; do not drill
   guessed standards.
5. **Define peak & taper**: when to reduce volume, hold intensity/sharpness, and
   protect skills and positions into the event.
6. **Plan event-day and inter-event recovery** — multi-event days are a
   recovery-management problem (fueling, mobility, re-warm-up windows).
7. **Schedule simulations**: rehearse competition-day logistics, warm-up windows,
   and back-to-back events. Manage **skill-risk** — do not gamble high-failure
   movements without a contingency.
8. **Address travel**: sleep, nutrition, equipment familiarity, schedule shifts.
9. **For teams, assign roles** to events by athlete strength and plan handoffs.
10. **State risks, assumptions, and referral triggers**, and tie the plan back to
    the athlete's goal — without guaranteeing any placement or qualification.

## Inputs

**Required (or inferable):** target event type, the competition date (or weeks
available), the athlete's division and current level/capacities.

**Optional (improves the output):** known weaknesses and skill ceilings, weekly
training availability and current weekly load, prior competition results, injury
history, the event's published format/standards (when known), team roster and each
athlete's strengths, travel logistics.

## Non-goals

- **Not** a strategy for a single released/known competition workout →
  `crossfit-competition-workout-strategist`.
- **Not** rule or movement-standard interpretation → `crossfit-rules-and-standards-advisor`.
- **Not** a single training session → `crossfit-workout-designer`.
- **Not** a general (non-competition) training block →
  `crossfit-programming-cycle-builder`.
- **Not** an injury-restricted adaptation → `crossfit-injury-aware-workout-adapter`.
- Does **not** diagnose, prescribe medical care, confirm official standards, or
  guarantee qualification, placement, or any competitive outcome.

## Default output (Competition-prep plan contract)

1. **Event & date & division** — the target, weeks available, fixed checkpoints.
2. **Assumptions** — every inferred input, stated explicitly.
3. **Phase map** — base → competition-specific → peak/taper, each with a date
   range, objective, and emphasis.
4. **Standards-exposure plan** — what to drill to standard, flagged
   *confirm-via-rules-advisor* for the exact event/season/division.
5. **Peak & taper** — volume/intensity trajectory into the event; what to protect.
6. **Event-day & inter-event recovery** — fueling, mobility, re-warm-up,
   inter-day recovery for multi-event formats.
7. **Simulations** — when and what to rehearse (logistics, warm-up, back-to-back).
8. **Skill-risk management** — high-failure movements, contingencies, go/no-go.
9. **Travel** — sleep, nutrition, equipment, schedule shifts.
10. **Risks & referral** — overtraining/injury risk, red-flag triggers, and an
    explicit note that no outcome is guaranteed.

## Safety & scope

Apply the safety framework proportionately
([../../references/safety-and-referral.md](../../references/safety-and-referral.md)).
Competition prep raises volume and intensity, so watch for overtraining, novel
high-volume stimulus (rhabdomyolysis warning signs), and pushing through pain to
"make the comp". If the athlete reports pain that limits movement or any red flag
(chest pain, syncope, neurological symptoms, suspected fracture, rhabdo signs),
refer for evaluation **before** continuing the plan and route to
`crossfit-injury-aware-workout-adapter`. Never use the looming event as a reason to
train through warning signs, and never schedule automatic maximal testing as part
of a peak.

## Incomplete information

Never fabricate athlete data (capacities, results, history) or the event's
standards. If a materially decision-changing input is missing (date, division,
availability), return a **clearly labeled provisional** plan built on conservative
assumptions — state each assumption explicitly — and ask only for the one or two
fields that would change the phasing. Where exact standards are unknown, mark them
**to confirm** and route to `crossfit-rules-and-standards-advisor`; do not invent
them. Always deliver a usable plan rather than refusing for want of one input.

## Related Skills and Routing

- **This skill owns** the multi-week plan / peaking timeline / season roadmap into
  a competition.
- **Collaborates with** `crossfit-programming-cycle-builder` (to detail the
  training blocks the phase map calls for), `crossfit-weakness-prioritizer` (to
  rank what the specific phase should target), and `crossfit-nutrition-habit-coach`
  (for fueling around events). Pass forward: the phase map, the event demands, and
  the standards-to-confirm list.
- **Defers to** `crossfit-competition-workout-strategist` once a specific workout
  is released and the athlete wants to attack it; and to
  `crossfit-rules-and-standards-advisor` for any rule, standard, scoring, or
  penalty interpretation.
- When ambiguous (plan vs. single-workout strategy vs. rules), `crossfit-pack-router`
  disambiguates.
