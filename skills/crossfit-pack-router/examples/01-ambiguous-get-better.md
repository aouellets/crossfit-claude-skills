# Example 1 — Ambiguous "help me get better at CrossFit" (multi-skill pipeline)

**Prompt:** "I want to get better at CrossFit. Where do I start?"

**Context:** Recreational athlete, ~1 year training, trains 4x/week, full gym, no
injuries mentioned, no specific goal or numbers given.

---

## Routing decision

### Chosen skill(s)
A sequenced pipeline, not a single skill:
1. `crossfit-athlete-assessment`
2. `crossfit-weakness-prioritizer`
3. `crossfit-programming-cycle-builder` (or `crossfit-specialty-cycle-builder` if
   one quality dominates the gap list)
4. `crossfit-adaptive-training-plan-manager` (after real-world results accrue)

### Why
"Get better at CrossFit" names no single task, no goal, and no measurable target —
it is broad GPP improvement. You cannot program intelligently without first knowing
where the athlete stands, so the route starts at assessment, not at programming.

### Ordered steps and context to pass
1. **Assessment** — gather baselines (benchmarks, lifts, skills, engine). Output:
   an athlete profile with measured strengths/gaps.
2. **Weakness prioritizer** — consumes the profile; ranks what to fix by leverage.
   Output: a prioritized 2–3 item focus list.
3. **Cycle builder** — consumes the focus list + schedule (4x/week) + equipment;
   builds the multiweek block with retests. Output: the plan + retest dates.
4. **Adaptive plan manager** — after the first weeks of logged results, adjusts.

### Safety note
No red flags or pain reported -> standard performance route. If the athlete later
reports pain, re-route to safety/referral and `crossfit-injury-aware-workout-adapter`
first.

### Still needed
One question only: **what does "better" mean to you** — a benchmark time, a missing
skill (e.g. pull-ups), a lift, or just broad fitness? The answer confirms whether
step 3 is the general cycle builder or the specialty-cycle builder.
