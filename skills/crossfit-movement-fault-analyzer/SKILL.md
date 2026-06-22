---
name: CrossFit Movement Fault Analyzer
description: Use when the user describes or shows a CrossFit movement being performed and asks what is wrong or how to fix it — phrasings like "my squat caves at the bottom", "here's my snatch, what's the fault". Works from observation only (described video, an image where supported, or coach observation), separates observation from inference, ranks visible faults, gives cues and drills, and recommends a retest. Excludes building a skill the athlete cannot yet do (crossfit-movement-progression-builder owns that) and pure cue lists (crossfit-coaching-cue-generator).
category: movement
risk_level: medium
requires_current_rules: false
---

# CrossFit Movement Fault Analyzer

Analyze a movement **from observation only** — a described video, an image where
supported, or a coach's account — and identify the **visible** faults, ranked.
This skill owns "what's wrong with this rep / how do I fix it" requests. The
discipline is honesty about evidence: separate what is **observed** from what is
**inferred**, never claim an unseen cause, and never diagnose anatomy or pathology
from a movement. Use
[../../references/movement-pattern-taxonomy.md](../../references/movement-pattern-taxonomy.md),
[../../references/gymnastics-progressions.md](../../references/gymnastics-progressions.md),
and
[../../references/weightlifting-progressions.md](../../references/weightlifting-progressions.md).

## Workflow

1. **Restate what was observed** in neutral, concrete terms (positions, bar path,
   timing) — the evidence base.
2. **State what cannot be determined** from this observation (camera angle, single
   rep, no load info, no internal/anatomical view).
3. **List visible faults**, separating **observation** ("knees track inward at the
   bottom") from **inference** ("likely a position/control issue, not necessarily
   weakness").
4. **Rank the faults** by safety first, then performance impact, then ease of
   correction — in a table.
5. **Give 1–2 concise cues per priority fault** (defer long cue libraries to
   `crossfit-coaching-cue-generator`).
6. **Prescribe targeted drills** tied to each priority fault
   (use the progression references).
7. **Define what improvement looks like** — the observable change to look for.
8. **Recommend a retest** (re-film the same angle, same load) to confirm.

## Inputs

**Required (or inferable):** a description of the movement being performed (or an
image where supported) and the movement name.

**Optional (improves the output):** camera angle and number of reps shown, the
load used, the athlete's level/experience, what the athlete already feels or
notices, and whether any pain is present.

## Non-goals

- **Not** building a skill the athlete does not yet have →
  `crossfit-movement-progression-builder` (this skill is a non-goal for "help me
  get my first muscle-up").
- **Not** producing a standalone cue list with no analysis →
  `crossfit-coaching-cue-generator`.
- **Not** scaling or designing a workout →
  `crossfit-stimulus-and-scaling-coach` / `crossfit-workout-designer`.
- **Not** an anatomical or medical diagnosis — it is a **non-goal** to name a torn,
  strained, or injured tissue, or any pathology, from observation.
- Does **not** diagnose injury, prescribe medical care, or guarantee a fault is
  fixed.

## Default output (Movement assessment contract)

1. **Observations** — neutral description of what is visible.
2. **What cannot be determined** — explicit limits of this observation.
3. **Prioritized faults** — a **table**: fault | observation vs. inference |
   why it matters (safety/performance) | ease of correction | priority.
4. **Cues** — 1–2 per priority fault.
5. **Drills** — targeted to the top faults.
6. **What improvement looks like** — the observable change to confirm progress.
7. **Retest** — re-film/re-observe conditions and when.

## Safety & scope

Apply the safety framework proportionately
([../../references/safety-and-referral.md](../../references/safety-and-referral.md)).
Rank a fault that creates injury risk (e.g. low-back rounding under load, knee
collapse, pressing out overhead with a swinging bar) **first**, and say so. Do
**not** diagnose anatomical or medical causes from a video or description — name
faults as **movement** observations, not tissue diagnoses. If the athlete reports
**pain** (not just inefficiency), stop the performance analysis, refer per the
framework, and route to `crossfit-injury-aware-workout-adapter`; pain is not a
fault to coach through. Never claim a cause you cannot see (strength, mobility, or
anatomy) — flag it as a hypothesis to test.

## Incomplete information

Never fabricate observations or athlete data. If the description is too thin to
analyze (no angle, one ambiguous rep, no movement named), return a **clearly
labeled provisional** read: state what *can* be inferred, label every working
assumption as an assumption, list explicitly **what cannot be determined**, and
ask for the one or two things that would unlock the analysis (usually: a clear
side/front angle, the load, and whether there's pain). Do not invent faults to
fill the contract.

## Related Skills and Routing

- **This skill owns** "diagnose the fault in this observed rep" requests.
- **Collaborates with** `crossfit-coaching-cue-generator` (hand it the prioritized
  faults for a fuller cue set), `crossfit-movement-progression-builder` (hand it
  the limiter to build a development block), and
  `crossfit-mobility-assessment-and-programmer` (when a mobility limit is the
  hypothesis). Pass forward: the prioritized faults and the leading hypothesis.
- **Defers to** `crossfit-movement-progression-builder` when the athlete cannot yet
  perform the movement (nothing to observe); and to
  `crossfit-injury-aware-workout-adapter` when pain, not inefficiency, is reported.
- When ambiguous (fix a rep vs. build a skill vs. just want cues),
  `crossfit-pack-router` disambiguates.
