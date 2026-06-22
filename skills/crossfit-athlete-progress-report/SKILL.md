---
name: CrossFit Athlete Progress Report
description: Use when the user supplies a span of an athlete's logged data (attendance, workout scores, benchmarks, strength/gymnastics/weightlifting numbers, scaling changes, consistency, coach notes, athlete feedback) and wants a progress summary, report, or check-in over that period. Produces an evidence-based before to after report with actionable next priorities. Excludes building the initial profile (route to crossfit-athlete-assessment, which owns intake) and ranking what to fix first (crossfit-weakness-prioritizer owns prioritization).
category: assessment
risk_level: low
requires_current_rules: false
---

# CrossFit Athlete Progress Report

Turn a span of an athlete's **already-logged** data into an honest progress
report: what changed, what stalled, what regressed, how consistent the athlete
was, and the concrete next priorities. This skill owns retrospective check-ins
("how am I doing over the last 8 weeks?", "write a progress report from this
log"). It reports on data the user supplies; it does not invent it. Draw on
[../../references/athlete-intake.md](../../references/athlete-intake.md) for the
field taxonomy and
[../../references/coaching-principles.md](../../references/coaching-principles.md)
for how to read change as signal vs. noise.

## Workflow

1. **Bound the period and inventory the data.** State the date span and exactly
   which data categories are present (attendance, scores, strength, gymnastics,
   weightlifting, monostructural, scaling history, coach notes, athlete
   feedback) and which are absent. Do not fill gaps with assumptions.
2. **Extract before to after deltas** for each category that has at least two
   comparable data points. Always show the numbers (e.g. back squat 120 to 132.5 kg).
3. **Separate signal from noise.** A single PR on one day is weaker evidence than
   a trend across sessions; flag short or sparse series as low-confidence. See
   [../../references/coaching-principles.md](../../references/coaching-principles.md).
4. **Cross-check for contradictions** between categories (e.g. claimed PRs against
   low attendance, or "felt great" feedback against a stalled engine). Surface any
   contradiction plainly rather than smoothing it over.
5. **Read consistency and the scaling trend** — is attendance steady, and is the
   athlete scaling less (progressing) or more (regressing/fatigued) over time?
6. **Name what improved, what stalled, and what regressed**, each tied to evidence.
7. **Set actionable next priorities** — 2 to 4 specific, measurable focus items the
   athlete or coach can act on, without ranking the athlete's global weaknesses
   (that is `crossfit-weakness-prioritizer`'s job).
8. **List what to retest next and when**, so the next report has clean comparisons.

## Inputs

**Required:** the reporting period (date span) and at least one category of logged
data with two or more comparable data points so a change can be computed.

**Optional (improves the output):** the athlete's goal and timeline, attendance
log, coach notes, athlete-reported feedback, baseline from a prior
`crossfit-athlete-assessment`, scaling history, and known constraints/injuries.

## Non-goals

- **Not** building the initial athlete profile or baseline assessment → `crossfit-athlete-assessment`.
- **Not** ranking which weakness to fix first → `crossfit-weakness-prioritizer`.
- **Not** designing the next workout or cycle → `crossfit-workout-designer` / `crossfit-programming-cycle-builder`.
- **Not** a fabricated report — if a category has no data, say so; this is not a non-goal to be polite, it is a hard rule: never invent missing data points.
- Does **not** diagnose, prescribe medical care, or guarantee outcomes.

## Default output (Progress report contract)

1. **Period & data covered** — date span; which categories are present vs. absent.
2. **Headline progress** — one or two lines with the strongest evidence (before to after numbers).
3. **What improved** — each item with before to after figures and confidence.
4. **What stalled or regressed** — named honestly, with the evidence.
5. **Consistency & adherence** — attendance/engagement pattern over the period.
6. **Scaling trend** — scaling less (progress) or more (regression/fatigue).
7. **Actionable next priorities** — 2 to 4 specific, measurable focus items.
8. **What to retest next** — the tests/lifts to re-measure and roughly when.

## Safety & scope

This is a low-risk reporting skill, but apply
[../../references/safety-and-referral.md](../../references/safety-and-referral.md)
proportionately. If the logged data or athlete feedback contains a red flag
(pain that limits movement, dizziness/syncope, dark urine or severe soreness out
of proportion to work after high-volume sessions, disordered-eating indicators,
pregnancy/postpartum complications), surface it and recommend professional
evaluation rather than reporting it as ordinary progress. Do not diagnose from
log entries, and do not present body-composition change in a way that drives
restriction.

## Incomplete information

Never fabricate athlete data. When a category is missing or a series is too short
to judge, return a **clearly labeled provisional** report that states the gap as an
assumption ("no benchmark retests in this period, so engine progress is
unconfirmed"), reports confidently only on categories that have evidence, and asks
for the one or two missing fields that would most change the picture. Always
deliver a usable report from whatever real data exists — do not refuse for want of
a complete log.

## Related Skills and Routing

- **This skill owns** retrospective progress reports / check-ins over a span of
  logged data.
- **Collaborates with** `crossfit-athlete-assessment` (which produces the baseline
  this report compares against; pass forward the period deltas and any flagged
  regression) and `crossfit-weakness-prioritizer` (hand it the stalled/regressed
  items when the user then asks "so what should I fix first?").
- **Defers to** `crossfit-athlete-assessment` when there is no prior data and the
  user actually needs an initial profile, and to `crossfit-weakness-prioritizer`
  when the request is about ranking and sequencing fixes rather than reporting
  change. Forward-routes follow-up workout/cycle requests to
  `crossfit-workout-designer` or `crossfit-programming-cycle-builder`.
- When the request is ambiguous (report vs. assess vs. prioritize),
  `crossfit-pack-router` disambiguates.
