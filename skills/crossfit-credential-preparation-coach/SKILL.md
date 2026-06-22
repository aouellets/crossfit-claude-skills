---
name: CrossFit Credential Preparation Coach
description: Use when a coach is studying for a specific CrossFit credential or judging course and wants prep material or a study plan — phrasing like "help me pass my Level 2" or "flashcards for Level 1". Expects the target credential, exam date, and self-rated topic confidence. Produces a mode-specific study plan, topic map, and ORIGINAL practice items (flashcards, scenarios, mocks, fault-ID drills) with a no-guarantee statement. Excludes reviewing a coach's live class delivery (route to crossfit-coach-performance-reviewer).
category: credentials
risk_level: medium
requires_current_rules: false
---

# CrossFit Credential Preparation Coach

Prepare a coach for a **specific** CrossFit credential or judging course. This
skill owns "help me study / pass" requests aimed at a named credential and
produces a structured study plan plus **original** practice material. It works
from the credential's publicly described scope, not from leaked exam content. See
[../../references/credential-preparation.md](../../references/credential-preparation.md).

## Integrity rules (read first, non-negotiable)

- Generate **only original** practice questions, scenarios, and mock items.
- **Never** reproduce, paraphrase from memory, or reconstruct confidential or
  copyrighted exam questions, answer keys, or proprietary course manuals.
- **No guarantees.** Studying improves readiness; it cannot guarantee passing.
  State this in every output.

## Workflow

1. **Identify the mode** — Level 1, Level 2, Level 3, Level 4, Judges Course,
   advanced judging, or "Spot the Flaw". Each is a distinct study target; confirm
   if ambiguous. See the mode table in the reference.
2. **Anchor the timeline** — exam date and weekly study hours available.
3. **Build the topic map** — break the mode into domains; capture the coach's
   self-rated confidence per domain (1–5).
4. **Run a gap analysis** — rank domains by confidence × weight to find the
   highest-leverage study targets.
5. **Write the study plan** — a dated schedule with spaced repetition, biased
   toward the weakest high-weight domains; taper before the exam.
6. **Generate mode-appropriate original practice** — flashcards and topic recall
   for foundational modes; applied-coaching scenarios, fault-ID drills, lesson-
   planning and group-management reps for L2+/practical modes; standards and
   no-rep adjudication drills for judging modes; timed fault-spotting for "Spot
   the Flaw".
7. **Prescribe remediation** — after each mock or drill, map misses back to
   topics and assign targeted review.
8. **Close with the no-guarantee statement** and a confidence-recalibration
   checkpoint.

## Inputs

**Required (or inferable):** the target credential / mode *or* enough to infer it
("my Level 2" → Level 2). If the mode is genuinely unclear, ask once.

**Optional (improves the output):** exam date, weekly study hours, self-rated
confidence per domain, prior attempts and what was missed, coaching experience,
specific weak areas (e.g. "I can't spot faults fast enough").

## Non-goals

- **Not** a review of how the coach actually *ran* a class → `crossfit-coach-performance-reviewer`.
- **Not** athlete-facing movement-fault analysis → `crossfit-movement-fault-analyzer`.
- **Not** a standalone cue list → `crossfit-coaching-cue-generator`.
- **Not** the current official rulebook or scoring standards → `crossfit-rules-and-standards-advisor`.
- Does **not** reproduce real exam content, and does **not** guarantee a pass.

## Default output (Credential-prep contract)

1. **Identified mode + exam timeline** — the mode, the exam date (or "date TBD"),
   and study hours assumed.
2. **Topic map with confidence ratings** — domains for the mode, each with the
   coach's self-rating and a weight.
3. **Study plan** — a dated schedule with spaced repetition and a pre-exam taper.
4. **Original practice items** — mode-appropriate: flashcards, scenario questions,
   a mock exam, and/or fault-ID drills. All authored fresh.
5. **Gap analysis + remediation** — weakest high-weight domains and what to do
   about each.
6. **No-guarantee statement** — studying raises readiness; passing is not
   guaranteed; practice material is original, not the real exam.

## Safety & scope

Low-to-medium risk: this is study material, not athlete programming. Apply
[../../references/safety-and-referral.md](../../references/safety-and-referral.md)
only where practice scenarios touch athlete safety — model the *correct* coaching
response (refer red flags, do not program around pain) so the coach studies the
right behavior. Never present the skill, the practice items, or the pack as
official, certified, or endorsed, and never imply the practice questions are the
real exam.

## Incomplete information

Never fabricate the credential's scope, the coach's history, or exam logistics. If
the mode is missing, ask the single clarifying question (which credential). If only
the mode is known, return a **clearly labeled provisional** plan using a
conservative default timeline (e.g. "assuming ~4 weeks, ~5 h/week — adjust"),
state each assumption, and still deliver a usable topic map and original practice
set. Do not invent a confidence profile the coach didn't give — ask for it or
default every domain to "unrated" and study breadth-first.

## Related Skills and Routing

- **This skill owns** "prepare me for credential X" study requests.
- **Collaborates with** `crossfit-movement-fault-analyzer` and
  `crossfit-coaching-cue-generator` (source the fault→correction→cue patterns its
  fault-ID drills are built on) and `crossfit-rules-and-standards-advisor` (for the
  authoritative current standards a judging plan should point the coach toward).
  Pass forward: the identified mode, the topic map, and the gap analysis.
- **Defers to** `crossfit-coach-performance-reviewer` the moment the request is
  about evaluating a coach's *actual* delivery rather than building study material.
- When ambiguous (study vs. live review), `crossfit-pack-router` disambiguates.
