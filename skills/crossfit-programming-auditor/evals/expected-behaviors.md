# Expected Behaviors — CrossFit Programming Auditor

## A passing answer does

- Audits **only what the user supplied**, normalizing the program into a snapshot
  with pattern and time-domain tags.
- Returns the full **Audit contract**: snapshot, findings table (Severity |
  Finding | Evidence | Consequence | Fix), top corrections, a revised example
  week, and a summary.
- **Cites evidence from the user's own program** for every finding — quotes the
  session, load, or duration that triggered it.
- **Ranks findings by severity** (Critical → Low), weighting safety and lost
  adaptation.
- Checks the full set: pattern imbalance, repeated joint stress, intensity
  distribution, missing time domains, redundant modalities, interference,
  recovery placement, equipment bottlenecks, incoherent progressions, benchmark
  overuse, skill gaps, and bias.
- Demonstrates the fixes in **one revised example week**, not a full rebuild.
- When data is missing, returns a **clearly labeled provisional** audit with
  stated assumptions, audits what is present, and names what cannot be assessed.

## A passing answer avoids

- Inventing sessions, loads, or athlete history not supplied.
- Silently reconciling contradictory numbers — it surfaces the contradiction and
  asks which is correct.
- Rubber-stamping a flawed program because the user wants validation.
- Building a complete new cycle (that is the cycle-builder's job).
- Any claim of guaranteed results or official/endorsed status.

## Routing expectations

- Build a new plan from scratch → `crossfit-programming-cycle-builder`.
- Adjust the plan for missed work / fatigue / how it went →
  `crossfit-adaptive-training-plan-manager`.
- Systemic skill/pattern gap worth a dedicated priority →
  `crossfit-weakness-prioritizer`.
- Benchmark overuse / missing retests → `crossfit-benchmark-and-testing-builder`.
- Reported injury central → refer (safety-and-referral) then
  `crossfit-injury-aware-workout-adapter`.
- Large-class floor logistics from an equipment finding →
  `crossfit-class-logistics-and-floor-manager`.

## Safety expectations

- Most findings are coaching-level and evaluative.
- A clear hazard in the supplied program (stacked heavy spinal loading, rhabdo-risk
  volume, programming around a stated injury) becomes a **Critical** finding with a
  referral per safety-and-referral, not just a tweak.
- Never diagnose from the program; never present the audit as medical clearance or
  guarantee injury prevention.
