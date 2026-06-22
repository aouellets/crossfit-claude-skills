---
name: CrossFit Athlete Assessment
description: Use when the user wants an overall evaluation of where a CrossFit athlete stands ("assess me", "build my profile") across strength, power, capacity, gymnastics, weightlifting, mobility, and skill. Expects whatever maxes and benchmarks the athlete supplies; flags unknowns instead of inventing them. Produces a profile of strengths, limiters, unknowns, and recommended tests. Excludes ranking which limiter to fix first once a profile exists (crossfit-weakness-prioritizer) and designing the test battery (crossfit-benchmark-and-testing-builder).
category: assessment
risk_level: medium
requires_current_rules: false
---

# CrossFit Athlete Assessment

Produce a **structured athlete profile**: where this athlete stands across the
full range of CrossFit / GPP qualities, what the evidence is, what is strong,
what limits them, and — critically — what is still **unknown**. This skill owns
the "evaluate me / build my profile" request. It reasons from supplied intake and
benchmarks; it never manufactures numbers the athlete did not give. See
[../../references/athlete-intake.md](../../references/athlete-intake.md) and
[../../references/coaching-principles.md](../../references/coaching-principles.md).

## Workflow

1. **Gather what exists.** Collect supplied maxes, benchmark times/scores,
   gymnastics skills, mobility notes, training age, schedule, goals, and history
   from [../../references/athlete-intake.md](../../references/athlete-intake.md).
   Do not assume anything not stated.
2. **Map each quality to evidence.** For strength, power, aerobic and anaerobic
   capacity, gymnastics, weightlifting, mobility, movement quality, skill, work
   capacity, pacing, consistency, recovery, and goal-fit — note the data point(s)
   behind each rating and tag thinly-evidenced areas.
3. **Cross-check for internal consistency.** Compare claims against each other
   (e.g. a stated engine vs. a stated 2k row time, a 1RM vs. a benchmark load).
   When numbers contradict, **surface the contradiction** — never silently pick
   one or average them into a fabricated middle.
4. **Rate against time domains** using
   [../../references/time-domain-framework.md](../../references/time-domain-framework.md):
   is the athlete short-domain biased, long-domain biased, or balanced?
5. **Name strengths, limiters, and unknowns** separately and honestly. A limiter
   is something the evidence shows; an unknown is something the evidence cannot
   yet show.
6. **Rank provisional priorities** by likely benefit, but defer deep
   benefit/interference ranking to `crossfit-weakness-prioritizer`.
7. **Recommend tests** to close the biggest unknowns — describe what to measure
   and why, and hand battery construction to `crossfit-benchmark-and-testing-builder`.
8. **Propose a 4–12 week focus** with success metrics tied to the limiters and
   the athlete's goal.

## Inputs

**Required (or inferable):** the athlete's goal or reason for assessing, plus at
least some capacity data (any maxes, benchmark scores, or skill list). Training
age/level if available.

**Optional (improves the output):** full 1RM set, named benchmark times with
dates, gymnastics skill ceilings (strict vs. kipping), monostructural paces,
mobility/movement-quality notes, schedule, injury history, recovery inputs.

## Non-goals

- It is a **non-goal** to rank which single limiter to attack first once a profile
  exists → `crossfit-weakness-prioritizer`.
- It is a non-goal to design the test battery itself → `crossfit-benchmark-and-testing-builder`.
- It is a non-goal to build the training block that fixes a limiter →
  `crossfit-programming-cycle-builder` / `crossfit-specialty-cycle-builder`.
- It is a non-goal to write a single workout → `crossfit-workout-designer`.
- Does **not** diagnose injury, prescribe medical care, or guarantee outcomes.

## Default output (Athlete profile contract)

1. **Snapshot** — one-line characterization (level, bias, primary goal).
2. **Profile by quality** — strength, power, aerobic capacity, anaerobic capacity,
   gymnastics, weightlifting, mobility, movement quality, skill, work capacity,
   pacing, consistency, recovery, goal-fit — each with a rating and its basis.
3. **Evidence** — the specific data points each rating rests on.
4. **Strengths** — the qualities the evidence supports as strong.
5. **Limiters** — the evidence-backed weaknesses, root vs. visible where clear.
6. **Unknowns** — what the data cannot yet show (explicitly listed, not guessed).
7. **Ranked priorities (provisional)** — likely order to address limiters, with
   the note to confirm via `crossfit-weakness-prioritizer`.
8. **Recommended tests** — what to measure to close the top unknowns, and why.
9. **4–12 week focus** — the proposed emphasis window for the top limiters.
10. **Success metrics** — measurable retest targets that would prove improvement.

## Safety & scope

Apply [../../references/safety-and-referral.md](../../references/safety-and-referral.md)
proportionately. Assessing an athlete is low-contact, but if the intake mentions
pain that limits movement, a recent injury, a red flag (chest pain, syncope,
neurological symptoms, rhabdomyolysis warning signs, disordered-eating
indicators, pregnancy/postpartum complications), name the limit and refer before
treating it as a trainable "limiter". Never schedule automatic maximal testing as
part of an assessment — recommend tests, but flag maximal efforts as a deliberate,
optional stressor. This is coaching-level evaluation, not diagnosis.

## Incomplete information

Never fabricate athlete data — no invented 1RMs, benchmark times, or history.
When required capacity data is thin, return a **clearly labeled provisional
profile**: rate only what the evidence supports, mark everything else as an
**unknown** with the assumption (if any) stated, and list the **recommended
tests** that would resolve it. Ask only for the one or two fields that would most
change the profile. A profile that honestly says "unknown" beats one that guesses.

## Related Skills and Routing

- **This skill owns** "evaluate / profile this athlete" requests.
- **Collaborates with** `crossfit-benchmark-and-testing-builder` (it builds the
  test battery this skill recommends; pass forward the named unknowns and goal)
  and `crossfit-mobility-assessment-and-programmer` (for a deep mobility-specific
  workup). Pass forward the profile, evidence, and unknowns.
- **Defers to** `crossfit-weakness-prioritizer` once a profile exists and the
  question becomes "which limiter first?"; to `crossfit-programming-cycle-builder`
  / `crossfit-specialty-cycle-builder` to build the block; and to
  `crossfit-athlete-progress-report` when the ask is to compare against a prior
  assessment over time.
- When ambiguous (profile vs. prioritize vs. test-battery), `crossfit-pack-router`
  disambiguates.
