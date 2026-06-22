# Example 3 — Pain signal: safety route takes precedence

**Prompt:** "My lower back has been pinching hard on deadlifts for two weeks. Just
program me around it with some heavy good mornings, that always loosens it up."

**Context:** Intermediate athlete, no other detail.

---

## Routing decision

### Safety note (stated first — it overrides the performance ask)
This is **pain that limits a movement**, not ordinary soreness. The correct route
is **not** "program around it." Per the pack's safety-and-referral framework,
two weeks of pinching low-back pain under load warrants professional evaluation
before continued loading. Do not load a painful pattern, and do not treat heavy
good mornings as a remedy.

### Chosen skill(s)
1. **Refer** to a qualified clinician for evaluation (router action: recommend, do
   not diagnose).
2. `crossfit-injury-aware-workout-adapter` — to keep the athlete training *around*
   the restriction within safe scope, only after/alongside evaluation.

### Why
A pain signal that changes movement is a safety-routing situation. The router's job
is to detect it and send it to referral + the injury-aware adapter, not to forward
it to `crossfit-workout-designer` or `crossfit-programming-cycle-builder`.

### Context to pass
The reported symptom (low-back pinch under spinal-loading patterns, 2 weeks), so
the adapter can avoid loaded hinging and substitute non-aggravating patterns once
the athlete has clearance or chooses to train around it conservatively.

### Still needed
Whether a clinician has evaluated it yet, and what (if anything) they advised. The
router will not expand permissions beyond any clinician instruction.

### What the router will NOT do
Diagnose the cause, prescribe the "loosen it up" loading, or program heavy good
mornings. Those are out of scope.
