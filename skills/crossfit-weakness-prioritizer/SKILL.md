---
name: CrossFit Weakness Prioritizer
description: Use when a CrossFit athlete (or an existing profile) lists several weaknesses and asks what to work on first ("prioritize my limiters", "what should I focus on?", "where do I start?"). Distinguishes visible weakness from root limiter and opportunity from distraction, then ranks by benefit, urgency, trainability, time and fatigue cost, transfer, and interference. Excludes producing the full athlete profile (crossfit-athlete-assessment) and building the block that fixes the chosen priority (crossfit-specialty-cycle-builder).
category: assessment
risk_level: low
requires_current_rules: false
---

# CrossFit Weakness Prioritizer

Turn a pile of weaknesses into a **ranked, defensible order of attack**. This
skill owns the "what do I work on first?" question. It separates **symptom from
root**, **competition-specific from general**, and **high-value from distraction**,
then ranks by benefit, urgency, trainability, time cost, fatigue cost, transfer,
and interference — and names what to deliberately ignore. It reasons from
[../../references/coaching-principles.md](../../references/coaching-principles.md)
and the intake in
[../../references/athlete-intake.md](../../references/athlete-intake.md).

## Workflow

1. **Collect the candidate weaknesses** and the context that changes priority:
   athlete level, primary goal, and whether a competition/season is near.
2. **Classify each item** — visible weakness vs. **root limiter** vs.
   competition-specific vs. general vs. high-value opportunity vs. low-priority
   distraction. Trace symptoms to roots (e.g. failing chest-to-bar is usually a
   symptom; the root may be absent strict pulling strength).
3. **Score each on the seven factors** — benefit (how much fitness it unlocks),
   urgency (deadline/competition pressure), trainability (how fast it responds),
   time cost, fatigue cost, transfer (carryover to other movements/domains), and
   interference (how it competes with other priorities for recovery).
4. **Resolve overlaps** — when two items share a root, attack the root once; when
   a symptom would self-resolve from fixing the root, don't list it separately.
5. **Pick the 1–3 to attack now** and justify why focus beats breadth (limited
   recovery, interference, and the principle that few well-driven adaptations beat
   many diluted ones — see [../../references/coaching-principles.md](../../references/coaching-principles.md) §4–5).
6. **Name what to deliberately ignore (for now)** and why — distractions, low
   transfer, or things that will follow from the chosen priorities.
7. **Hand the chosen priority to the block-builder** to actually program it.

## Inputs

**Required (or inferable):** the list of weaknesses, and the athlete's primary
goal or context (recreational GPP vs. a competition on a date).

**Optional (improves the output):** athlete level/training age, season timing and
division, recovery capacity and schedule, which items are symptoms the athlete
already suspects, and any evidence behind each weakness.

## Non-goals

- It is a **non-goal** to produce the full athlete profile / evidence / unknowns →
  `crossfit-athlete-assessment`.
- It is a non-goal to build the training block that fixes the chosen priority →
  `crossfit-specialty-cycle-builder` / `crossfit-programming-cycle-builder`.
- It is a non-goal to write a single workout → `crossfit-workout-designer`.
- It is a non-goal to design the tests that confirm a root → `crossfit-benchmark-and-testing-builder`.
- Does **not** diagnose injury, prescribe medical care, or guarantee outcomes.

## Default output (Priority ranking contract)

1. **Context recap** — goal, level, season timing as understood (assumptions flagged).
2. **Ranked priority table** — for each item: **item · type** (visible / root /
   comp-specific / general / opportunity / distraction) **· benefit · urgency ·
   trainability · time cost · fatigue cost · transfer · interference · verdict**.
3. **Symptom → root map** — which listed items collapse into a shared root.
4. **Attack now (1–3)** — the chosen priorities and why focus beats breadth here.
5. **Deliberately ignore (for now)** — what to drop and why (distraction / low
   transfer / will-follow-from-the-root).
6. **Handoff** — which block-builder should program the chosen priority.

## Safety & scope

Apply [../../references/safety-and-referral.md](../../references/safety-and-referral.md)
proportionately. Prioritizing weaknesses is low-risk, but if a "weakness" is
actually pain that limits movement, an injury, or any red flag, do not rank it as
a trainable priority — name the limit and refer (route to
`crossfit-injury-aware-workout-adapter` for restriction-aware programming). Never
let competition urgency justify ignoring a pain signal. This is coaching-level
prioritization, not diagnosis, and it guarantees no outcome.

## Incomplete information

Never fabricate athlete data or evidence. If the weaknesses are listed without the
context that changes priority (goal, season, level), return a **clearly labeled
provisional ranking** using the stated items and conservative assumptions (default
to broad GPP and trace symptoms to likely roots), state each assumption, and ask
only for the one or two fields that would most reorder the list — usually the goal
and whether a competition is near. Always deliver a usable ranking; do not refuse
for want of a full profile.

## Related Skills and Routing

- **This skill owns** "which of these weaknesses do I work on first?" requests.
- **Collaborates with** `crossfit-athlete-assessment` (which produces the profile
  and limiter list this skill ranks — pass forward the limiters, evidence, and
  goal) and `crossfit-benchmark-and-testing-builder` (when confirming a suspected
  root needs a test). Pass forward the chosen priorities and their roots.
- **Defers to** `crossfit-athlete-assessment` when no profile exists yet and the
  weaknesses themselves are unverified; to `crossfit-specialty-cycle-builder` /
  `crossfit-programming-cycle-builder` to build the block; and to
  `crossfit-injury-aware-workout-adapter` when a listed "weakness" is really pain.
- When ambiguous (profile vs. prioritize vs. build-the-block),
  `crossfit-pack-router` disambiguates.
