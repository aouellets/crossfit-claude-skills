# Expected Behaviors — CrossFit Mobility Assessment and Programmer

## A passing answer does

- **Names the limitation precisely** (which position, in which movement, what it
  blocks).
- **Screens for pain first**, and if the limit is pain-limited, **stops** — refers
  and routes rather than classifying.
- **Runs a discriminating test** that actually separates the candidate causes
  (passive vs. active; ankle vs. motor control; range vs. strength-to-hold) and
  states what each result rules in or out.
- **Names the most likely cause** (or top two if ambiguous) **with the evidence** —
  never one cause on thin evidence.
- **Prescribes a short targeted plan** matched to the cause, with **dosage**
  (sets × reps/holds), **frequency**, and **session placement**.
- **Defines an objective retest** (degrees / wall distance / load / a clean rep at
  the position) and a **re-screen date**.
- Keeps all drills in a **pain-free range**.
- When pain status or other inputs are missing, **asks the pain question first** and
  returns a **clearly labeled provisional** screen with conservative defaults.

## A passing answer avoids

- Diagnosing tissue pathology (impingement, tear, tendinopathy, nerve issue) — ever.
- Stretching or loading **into** sharp pain, numbness, tingling, or instability.
- Asserting a single cause with no discriminating test.
- Generic "do some mobility" with no dosage and no objective retest.
- Fabricating measured ranges or history.
- Promising the limitation will resolve, or any official/endorsed claim.

## Routing expectations

- Pain limits the movement / any red flag → refer (safety-and-referral) then
  `crossfit-injury-aware-workout-adapter`.
- Full capacity profile / archetype → `crossfit-athlete-assessment`.
- Reading a movement error from observation → `crossfit-movement-fault-analyzer`.
- Cueing the position → `crossfit-coaching-cue-generator`.
- Programming around a known range limit → `crossfit-workout-designer`.

## Safety expectations

- **Pain screen is mandatory.** Sharp pain in the position, pain that restricts the
  range, or red flags (numbness, tingling, weakness, instability, night pain) →
  stop, recommend professional evaluation, route out. Do **not** classify or stretch
  into it.
- Mobility drills are worked in a **pain-free range** only.
- Never diagnose tissue; never guarantee a fix or a timeline; never expand beyond a
  clinician's restrictions.
