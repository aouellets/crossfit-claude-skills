---
name: CrossFit Adaptive Training Plan Manager
description: Use when an athlete reports how an existing plan actually went — missed sessions, accumulating fatigue, a niggle, schedule shifts, or performance changes — and wants the upcoming week or block adjusted while keeping the original objective. Takes the original plan plus completed work, misses, fatigue, pain, and schedule, and returns a revised upcoming period that drops low-value work rather than stacking missed sessions. Excludes building a plan from scratch (route to crossfit-programming-cycle-builder); crossfit-programming-auditor owns critiques.
category: programming
risk_level: medium
requires_current_rules: false
---

# CrossFit Adaptive Training Plan Manager

Adjust an **existing** training plan based on how it actually went, then hand back
a revised **upcoming** period that still serves the original objective. This skill
owns "here's what happened — fix my next week/block" requests. Its defining rule:
it **never stacks missed work into the remaining days**. Missed training is
absorbed by re-prioritizing and dropping low-value work, not by cramming.

## Workflow

1. **Restate the original objective** (GPP base, a competition, a movement/lift
   goal) and the **time horizon** that remains. Everything else answers to this.
2. **Intake what actually happened** — sessions completed vs. missed, reported
   fatigue, pain/niggles, schedule changes, and any performance changes (PRs,
   slowed times, failed lifts).
3. **Screen for safety first.** Pain that limits movement or any red flag is a
   referral, not an adjustment — see
   [../../references/safety-and-referral.md](../../references/safety-and-referral.md).
4. **Assess the impact on the objective.** Decide whether the goal is still on
   track, needs the timeline extended, or needs a deload — per
   [../../references/coaching-principles.md](../../references/coaching-principles.md)
   §4 (intensity distribution) and §9 (recovery).
5. **Re-prioritize, do not stack.** Keep the highest-value work toward the
   objective; **intentionally drop** the low-value/redundant sessions the misses
   displaced. Never compress a week of missed volume into the days remaining.
6. **Rebuild the upcoming period** preserving the original time-domain spread and
   stimulus intent ([../../references/time-domain-framework.md](../../references/time-domain-framework.md)).
7. **State what was dropped and why**, and give a recovery/monitoring note plus
   any referral.

## Inputs

**Required (or inferable):** the original plan (or its objective + structure) and
a report of how it went — at minimum which sessions were missed/completed or the
fatigue/pain/schedule change driving the adjustment.

**Optional (improves the output):** athlete level and history, recent performance
data, recovery markers (sleep, soreness, RPE trends), equipment/schedule
constraints, and the competition date or goal deadline.

## Non-goals

- **Not** building a plan from scratch → `crossfit-programming-cycle-builder`.
- **Not** auditing/critiquing existing programming → `crossfit-programming-auditor`.
- **Not** stacking or cramming missed work into remaining days — this is an
  explicit non-goal and a refusal condition.
- **Not** an injury-restricted adaptation when pain limits movement →
  refer, then `crossfit-injury-aware-workout-adapter`.
- Does **not** diagnose, prescribe medical care, or guarantee outcomes.

## Default output (Plan-update contract)

1. **Objective restated** — the goal and remaining horizon being preserved.
2. **What changed** — completed/missed work, fatigue, pain, schedule, performance.
3. **Impact on the objective** — on track / extend timeline / deload, with reason.
4. **Revised upcoming period** — the adjusted week/block, domains preserved.
5. **What was intentionally dropped (not stacked)** — the low-value work removed
   and the rationale.
6. **Adjustment rationale** — why these tradeoffs serve the objective.
7. **Recovery & referral notes** — monitoring triggers; referral if warranted.

## Safety & scope

Apply the safety framework proportionately and **before** adjusting. Accumulating
fatigue is a programming decision (deload, reduce intensity) — make it; do not
ignore it under athlete pressure. Pain that limits movement, or any red flag
(chest pain, syncope, neuro symptoms, suspected fracture, rhabdo signs after
high-volume work), is a **referral first** per
[../../references/safety-and-referral.md](../../references/safety-and-referral.md)
and a route to `crossfit-injury-aware-workout-adapter` — never program training
intensity around it. Never use "catching up" as a reason to override recovery.

## Incomplete information

Never fabricate athlete data (what they completed, their maxes, recovery markers).
If the report is vague, return a **clearly labeled provisional** adjustment using
conservative defaults (assume the objective stands, bias toward recovery when
fatigue is mentioned), state each assumption, and ask only for the one or two
fields that change the decision (usually: remaining timeline, severity of
fatigue/pain, and which sessions were actually missed). Always return a usable
revised period — do not refuse for want of complete logs.

## Related Skills and Routing

- **This skill owns** updating an existing plan after it ran.
- **Collaborates with** `crossfit-programming-cycle-builder` (the original plan
  it adjusts; hand back to it for a full re-plan if the objective itself changes),
  `crossfit-programming-auditor` (when the report reveals the plan was flawed to
  begin with, not just disrupted), and `crossfit-athlete-progress-report` (to log
  performance changes). Pass forward: the objective, what was dropped, and the
  revised period.
- **Defers to** `crossfit-programming-cycle-builder` when there is no existing
  plan to adjust, to `crossfit-programming-auditor` when the user wants a critique
  rather than an update, and to `crossfit-injury-aware-workout-adapter` (after
  referral) when a niggle limits movement.
- When ambiguous (adjust vs. build vs. audit), `crossfit-pack-router`
  disambiguates.
