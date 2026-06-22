# Example 3 — Routing: the athlete actually wants a test battery

**Prompt:** "Can you give me a set of tests to run over the next two weeks to
measure my fitness across the board? I'll bring you the numbers after."

**Context:** Athlete is not asking for an evaluation of existing data — they want
the **battery itself** designed.

---

## Routing decision

This is a **test-battery design** request, not an assessment of supplied data.
This skill (`crossfit-athlete-assessment`) owns turning *results* into a profile;
constructing the *battery* — which tests, in what order, with what rest between
them so they don't contaminate each other — is owned by
`crossfit-benchmark-and-testing-builder`.

**Route to `crossfit-benchmark-and-testing-builder`.**

## What this skill contributes to the handoff

So the battery is well-targeted, this skill supplies the framing:

- **Qualities to cover** so the eventual profile is complete: strength, power,
  aerobic and anaerobic capacity, gymnastics (strict and kipping), weightlifting,
  mobility, and a mixed-modal benchmark for pacing/work capacity.
- **Sequencing principle:** separate maximal-strength and maximal-aerobic efforts
  across days so fatigue from one doesn't depress another (avoid back-to-back
  maximal tests).
- **Then come back here:** once the athlete brings results, this skill builds the
  profile — strengths, limiters, unknowns, ranked priorities, and a focus block —
  from real numbers.

> I'm handing the battery design to `crossfit-benchmark-and-testing-builder`. Bring
> the results back and I'll build your full athlete profile from them. I won't
> profile you on guessed numbers in the meantime.
