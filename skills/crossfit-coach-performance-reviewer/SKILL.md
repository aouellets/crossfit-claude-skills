---
name: CrossFit Coach Performance Reviewer
description: Use when someone wants feedback on how a coach ran a class or session — phrasing like "review my coaching" or "evaluate this lesson plan". Expects a supplied lesson plan, written description, or observation notes of the coach's delivery. Produces evidence-based feedback, the single highest-priority development area, a practice drill, and a follow-up rubric. Excludes credential study material (route to crossfit-credential-preparation-coach) and athlete movement faults (crossfit-movement-fault-analyzer).
category: credentials
risk_level: low
requires_current_rules: false
---

# CrossFit Coach Performance Reviewer

Review a **coach's delivery** of a class or session from supplied material — a
lesson plan, a written description, or observation notes — and return honest,
**evidence-based** feedback. This skill owns "how did this coach do?" requests
about the *coaching*, not the athlete's movement. It evaluates against the
observable coaching skills in
[../../references/credential-preparation.md](../../references/credential-preparation.md).

## Workflow

1. **State what you can and can't observe.** Name the source (lesson plan only?
   full description? live notes?) and what that source does *not* let you judge.
   Stay observation-bound — do not infer competence you weren't shown.
2. **Walk the coaching skills** present in the material: lesson plan, explanation,
   demonstration, observation, fault identification, correction, cue selection,
   presence, group management, scaling, safety, time management, engagement.
3. **Cite evidence** for each judgment — quote or point to the specific moment in
   the supplied material. No evidence → say so, don't grade it.
4. **Separate strengths from gaps**, each tied to its evidence.
5. **Pick the single highest-priority development area** — the one change that most
   improves athlete outcomes or safety — and justify why it outranks the others.
6. **Prescribe one concrete practice drill** for that priority.
7. **Hand back a follow-up rubric** so the coach (or their evaluator) can re-assess
   the same skills next session.

## Inputs

**Required (or inferable):** material describing how the coach ran the session — a
lesson plan, a written/verbal description, or observation notes.

**Optional (improves the output):** class size and level, the workout itself,
the coach's experience and goals, what the coach felt went well/poorly, video or
timestamps, a prior review to measure against.

## Non-goals

- **Not** credential study material or mock exams → `crossfit-credential-preparation-coach`.
- **Not** analysis of an *athlete's* movement faults → `crossfit-movement-fault-analyzer`.
- **Not** a standalone list of cues → `crossfit-coaching-cue-generator`.
- **Not** designing or scaling the workout itself → `crossfit-workout-designer` /
  `crossfit-stimulus-and-scaling-coach`.
- Does **not** guarantee an evaluation outcome and does **not** rubber-stamp a coach
  to help them pass.

## Default output (Coaching-review contract)

1. **What was observed (and what couldn't be)** — the source and its limits.
2. **Strengths with evidence** — what worked, each tied to a specific moment.
3. **Gaps with evidence** — what didn't, each tied to a specific moment (or marked
   "not observable from this material").
4. **The single highest-priority development area** — one, with the reasoning for
   why it ranks first.
5. **A concrete practice drill** — a specific, repeatable rep for that priority.
6. **A follow-up rubric** — the coaching skills to re-score next session, so
   progress is measurable.

## Safety & scope

Low risk: this reviews coaching, not athletes. Apply
[../../references/safety-and-referral.md](../../references/safety-and-referral.md)
in one direction — if the supplied material shows the coach **programming around an
athlete's pain, ignoring a red flag, or pushing intensity over safety**, flag it as
a top-tier gap, because safety outranks every other coaching skill. Never inflate a
review to help a coach pass, and never claim the skill or pack is official,
certified, or endorsed, or that you can guarantee any evaluation result.

## Incomplete information

Never fabricate what you weren't shown. If the material is thin (e.g. a lesson plan
with no delivery notes), return a **clearly labeled provisional** review of **only**
what the plan reveals — its structure, sequencing, timing, scaling, and safety
planning — and **explicitly mark** the delivery skills (demo, live correction,
presence, engagement) as **not observable**. Do not infer a coach is strong or weak
at a skill you have no evidence for, and never fabricate athlete data inside example
critiques. If a single decision-changing fact is missing (class level, the workout),
state the assumption you're making, ask for that one fact, and still deliver a review
of what's present.

## Related Skills and Routing

- **This skill owns** "review how this coach ran the session" requests.
- **Collaborates with** `crossfit-coaching-cue-generator` (to supply better cues
  when cue selection is the gap), `crossfit-movement-fault-analyzer` (when the
  review hinges on whether the coach correctly *identified* a movement fault), and
  `crossfit-class-plan-builder` (to fix a weak lesson plan). Pass forward: the
  highest-priority development area and the follow-up rubric.
- **Defers to** `crossfit-credential-preparation-coach` when the coach wants study
  material rather than a review of real delivery.
- When ambiguous (review vs. study), `crossfit-pack-router` disambiguates.
