---
name: CrossFit Injury Aware Workout Adapter
description: Use when a CrossFit athlete has pain, an injury, a clinician restriction, or is returning to training and needs a session or plan adapted around it. Expects the stated restriction or clinician limits, current symptoms, training goal, and equipment. Modifies training around limits without diagnosing or rehabbing — diagnosis and rehab route to a clinician, generic difficulty scaling to crossfit-stimulus-and-scaling-coach, and mobility limitation without pain to crossfit-mobility-assessment-and-programmer.
category: safety
risk_level: high
requires_current_rules: false
---

# CrossFit Injury Aware Workout Adapter

Adapt training **around** pain, an injury, a clinician's restriction, return-to-training
status, equipment, and tolerance — while **preserving an appropriate training
objective**. This skill owns "I have a tweaked back / a surgeon's ROM limit / I'm
coming back from a sprain — what can I safely train?"

It does **not** diagnose, does **not** rehabilitate, does **not** override a
clinician, and never promises to prevent injury. It works **only within stated
clearance** and applies
[../../references/safety-and-referral.md](../../references/safety-and-referral.md)
in full, with [../../references/stimulus-preserving-scaling.md](../../references/stimulus-preserving-scaling.md)
as the modification logic.

## Workflow

1. **Red-flag screen FIRST.** Before adapting anything, screen for the red flags in
   [../../references/safety-and-referral.md](../../references/safety-and-referral.md):
   chest pain, neurological symptoms (numbness/tingling/weakness/loss of
   coordination), suspected fracture or major trauma, acute joint instability
   ("giving way"/dislocation), rapidly increasing swelling, severe or unexplained
   pain, and rhabdomyolysis warning signs. If any is present or described, the
   output is a clear recommendation to seek prompt professional / emergency
   evaluation — **do not program** the requested training.
2. **Capture the stated restriction and clinician limits** verbatim. Never expand
   the athlete's permissions beyond what a clinician set. Never fabricate medical data.
3. **Set the objective to preserve** — a safe, appropriate training goal for this
   session/plan given the restriction (e.g. keep the engine, train the unaffected
   limbs, maintain skill).
4. **List movements to AVOID** for this restriction (the patterns that load or
   provoke the affected area).
5. **List allowed patterns** that fit within the stated clearance.
6. **State range-of-motion and loading constraints** within the clinician's limits.
7. **Give substitutions** that preserve the stimulus where possible
   ([../../references/stimulus-preserving-scaling.md](../../references/stimulus-preserving-scaling.md)).
8. **Define STOP conditions** — the specific signs that mean stop this session and
   reassess or seek care (pain that increases or changes, new neuro symptoms,
   swelling, instability).
9. **List questions for the athlete's clinician** — what to confirm before
   progressing (allowed ROM, loading, timeline, contraindicated patterns).
10. **Set reassessment criteria** — when and on what evidence to progress, hold, or
    re-refer.

## Inputs

**Required (or inferable):** the stated restriction / injury / symptoms and any
clinician limits already given; the training goal or objective to preserve;
equipment available.

**Optional (improves the output):** time since onset or surgery, the clinician's
explicit ROM/loading clearances, irritability/tolerance, prior training, pain
behavior (when it occurs, what eases it), and return-to-training stage.

## Non-goals

- **Not** diagnosis of what the injury is → clinician (physician / physiotherapist).
- **Not** rehabilitation or return-to-play clearance → treating clinician.
- **Not** generic difficulty scaling of a healthy athlete's workout →
  `crossfit-stimulus-and-scaling-coach`.
- **Not** a mobility/range limitation **without pain or injury** →
  `crossfit-mobility-assessment-and-programmer`.
- Does **not** override or expand a clinician's instructions, and **never** promises
  that an adaptation prevents injury or guarantees a safe return.

## Default output (Injury-aware adaptation contract)

1. **Stated restriction / clinician limits** — captured verbatim, with any gaps named.
2. **Red-flag screen** — explicit check; if any flag is present, refer and stop here.
3. **Objective to preserve** — the safe training goal for this session/plan.
4. **Movements to AVOID** — patterns that load or provoke the affected area.
5. **Allowed patterns** — what fits within the stated clearance.
6. **Range & loading constraints** — within the clinician's limits.
7. **Substitutions** — stimulus-preserving swaps where possible.
8. **STOP conditions** — specific signs to stop and reassess / seek care.
9. **Questions for the clinician** — what to confirm before progressing.
10. **Reassessment criteria** — when and how to progress, hold, or re-refer.

## Safety & scope

Safety is central (risk_level **high**). Run the **red-flag screen before anything
else** and refer rather than program when a flag is present. **Never diagnose**,
**never override or expand a clinician's instructions**, and **never claim** an
adaptation prevents injury or guarantees a safe return. Work strictly within the
restriction the athlete or clinician states; when clearance is unknown, default
conservative and ask the clinician via the questions list. Apply
[../../references/safety-and-referral.md](../../references/safety-and-referral.md)
in full — this is a referral-and-modify context, not a "train through it" context.

## Incomplete information

Never fabricate medical data (diagnosis, ROM clearance, surgical timeline, pain
behavior). If a materially safety-relevant input is missing, return a **clearly
labeled provisional** adaptation built on **conservative defaults** (avoid the
suspect pattern, stay well within likely-safe ROM and load), state every
**assumption**, and ask only the one or two questions that would change the
adaptation — usually the clinician's explicit ROM/loading clearance. When in doubt,
under-load and route the unanswered questions to the clinician rather than guessing.

## Related Skills and Routing

- **This skill owns** adapting training around pain, an injury, a clinician
  restriction, or a return-to-training stage.
- **Collaborates with** `crossfit-equipment-substitution-engine` (for implement
  swaps inside the allowed patterns) and `crossfit-workout-designer` (which can
  build a fresh session once the avoid-list and constraints are set). Pass forward:
  the avoid-list, allowed patterns, ROM/loading constraints, and STOP conditions.
- **Defers to** the athlete's clinician for diagnosis, rehab, and clearance; to
  `crossfit-stimulus-and-scaling-coach` for ordinary difficulty scaling of a
  healthy athlete; and to `crossfit-mobility-assessment-and-programmer` for a
  range-of-motion limitation that involves **no pain or injury**.
- When ambiguous (pain-driven vs. just-too-hard, mobility vs. injury),
  `crossfit-pack-router` disambiguates.
