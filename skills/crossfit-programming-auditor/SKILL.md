---
name: CrossFit Programming Auditor
description: Use when the user asks you to review, critique, or "audit my last cycle/programming" and supplies an existing week or block log. Audits delivered programming for pattern imbalance, repeated joint stress, intensity distribution, missing time domains, recovery placement, equipment bottlenecks, incoherent progressions, and bias, then ranks findings by severity with evidence and fixes. Excludes building new programming (route to crossfit-programming-cycle-builder); crossfit-adaptive-training-plan-manager owns updating a plan after it ran.
category: programming
risk_level: medium
requires_current_rules: false
---

# CrossFit Programming Auditor

Audit **existing** CrossFit / mixed-modal programming that the user supplies (a
cycle, week, or training log) and report what is wrong, ranked by severity, with
evidence cited from their own program and a concrete corrective action for each
finding. This skill owns "review / critique / audit my programming" requests. It
does **not** invent new programming from scratch and it does **not** redesign
around how the plan actually went — it evaluates what is on the page.

## Workflow

1. **Ingest and normalize the supplied program.** List every session with its
   modality, movements, loading, time domain, and volume **as written by the
   user**. Do not fill gaps with invented sessions.
2. **Tag movement patterns** for each session using
   [../../references/movement-pattern-taxonomy.md](../../references/movement-pattern-taxonomy.md)
   (squat/hinge/press/pull/Olympic/gymnastics/midline/monostructural).
3. **Map time domains** across the program against
   [../../references/time-domain-framework.md](../../references/time-domain-framework.md);
   flag clustering (e.g. every metcon 8–12 min) and missing domains.
4. **Check intensity distribution and recovery placement** per
   [../../references/coaching-principles.md](../../references/coaching-principles.md)
   §4 and §9 — count hard/moderate/easy days, look for back-to-back redline,
   stacked impact, and grip/overhead/midline carryover.
5. **Evaluate progressions** (strength/Olympic/gymnastics) against
   [../../references/weightlifting-progressions.md](../../references/weightlifting-progressions.md)
   — is there planned, measurable overload with retests, or random daily jumps?
6. **Scan for redundancy, interference, equipment bottlenecks, benchmark
   overuse, skill gaps, and bias** (favored movements, neglected patterns).
7. **Rank every finding by severity** (Critical / High / Medium / Low) using
   safety + lost-adaptation impact, with evidence cited from their program, the
   likely consequence, and a specific fix.
8. **Write one revised example week** demonstrating the top fixes without
   rebuilding the entire block.

## Inputs

**Required (or inferable):** the existing programming to audit — at minimum one
week of sessions with movements; ideally a full cycle with loads, time domains,
and volume.

**Optional (improves the output):** the program's stated goal/phase, athlete
level and history, equipment inventory, schedule constraints, prior cycles, and
known injuries or restrictions.

## Non-goals

- **Not** building new programming → that is a non-goal here; route to
  `crossfit-programming-cycle-builder`.
- **Not** designing a single workout → `crossfit-workout-designer`.
- **Not** updating the plan based on missed work / fatigue / how it went →
  `crossfit-adaptive-training-plan-manager`.
- **Not** scaling an individual workout → `crossfit-stimulus-and-scaling-coach`.
- Does **not** diagnose injury, prescribe medical care, or guarantee outcomes.

## Default output (Audit contract)

1. **Program snapshot** — normalized list of sessions with pattern + domain tags.
2. **Findings table** — columns: **Severity** | **Finding** | **Evidence (cited
   from their program)** | **Consequence** | **Fix**, sorted Critical → Low.
3. **Top corrections** — the 2–3 highest-leverage changes in prose.
4. **Revised example week** — one week showing the fixes applied.
5. **Summary** — overall verdict and what to monitor on retest.

## Safety & scope

Apply the safety framework proportionately. An audit is evaluative, not
prescriptive, so most findings are coaching-level. But if the supplied program
contains a clear safety hazard (e.g. heavy spinal loading the day after a
high-volume deadlift session, repeated maximal eccentric work with rhabdo risk,
or programming around a reported injury), raise it as a **Critical** finding and
recommend professional evaluation per
[../../references/safety-and-referral.md](../../references/safety-and-referral.md)
rather than just a programming tweak. Never diagnose from the program, and never
present an audit as medical clearance.

## Incomplete information

Never fabricate athlete data (maxes, history) or invent sessions the user did not
supply. If parts of the program are missing or ambiguous, return a **clearly
labeled provisional** audit: audit what is present, state each assumption (e.g.
"assuming Mon/Wed/Fri are the only training days"), and ask only for the one or
two fields that would change the severity ranking (usually goal/phase, level, or
the missing sessions). If the supplied numbers contradict each other (e.g. weekly
volume that does not match the listed sessions), **surface the contradiction
explicitly as a finding** and ask which figure is correct — do not silently pick
one or invent a reconciliation.

## Related Skills and Routing

- **This skill owns** review/critique/audit of *existing, supplied* programming.
- **Collaborates with** `crossfit-programming-cycle-builder` (hand it the audit
  findings to rebuild a corrected block), `crossfit-weakness-prioritizer` (when
  the audit reveals a systemic skill/pattern gap worth a dedicated priority), and
  `crossfit-benchmark-and-testing-builder` (when benchmark overuse or missing
  retests is the finding). Pass forward: the findings table and revised week.
- **Defers to** `crossfit-programming-cycle-builder` when the user actually wants
  a new plan, to `crossfit-adaptive-training-plan-manager` when the request is
  about adjusting the plan after missed/changed sessions, and to
  `crossfit-injury-aware-workout-adapter` when a reported injury is central.
- When ambiguous (audit vs. build vs. adjust), `crossfit-pack-router`
  disambiguates.
