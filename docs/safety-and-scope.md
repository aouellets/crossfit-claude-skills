# Safety and Scope

This document explains how the safety framework is applied across skills. The
canonical, skill-loaded version lives at
[../references/safety-and-referral.md](../references/safety-and-referral.md);
read that for the red-flag table.

## Principle: proportionate, not defensive

Safety handling must keep athletes safe **and** keep outputs useful. Over-
caveating every answer trains users to ignore warnings and degrades the coaching.
Calibrate:

- **Routine request, healthy athlete** → realistic stop conditions, then coach.
- **Niggle / soreness mentioned** → distinguish soreness from warning signs,
  modify, give a reassessment trigger.
- **Pain that limits movement, or any red flag** → apply the referral table;
  refer first, program only within scope (or not at all).

## What every coaching skill must do

1. Stay within **coaching scope** — no diagnosis, medical rehab, medication,
   eating-disorder treatment, clinician override, or outcome guarantees.
2. Recognize and **refer** the red flags (chest pain, syncope, severe dyspnea,
   neuro symptoms, suspected fracture/major trauma, acute joint instability,
   rapid swelling, severe/unexplained pain, **rhabdomyolysis** signs — emphasized
   for high-volume CrossFit — heat illness, disordered-eating indicators,
   pregnancy/postpartum complications, and symptoms not resolving).
3. Never **fabricate** athlete medical data; ask or label provisional.
4. For special populations (beginners, deconditioned, masters, youth, post-
   layoff) adapt conservatively; pregnancy/postpartum, chronic illness, and
   significant medical conditions require qualified-professional guidance and an
   explicit scope limit (see `crossfit-population-adaptation-coach`).

## Risk levels in the inventory

`skill-inventory.json` carries a `risk_level` per skill (`low` / `medium` /
`high`) reflecting how directly the skill touches injury, pain, special
populations, or rules. Higher-risk skills carry heavier safety language and more
adversarial eval coverage. `crossfit-injury-aware-workout-adapter` and
`crossfit-population-adaptation-coach` are `high`; pure planning/reporting skills
are `low`.

## Specific scope boundaries

- **Nutrition** (`crossfit-nutrition-habit-coach`): coaching-level habits only —
  not medical nutrition therapy, not eating-disorder treatment, no moralizing
  food language.
- **Mobility** (`crossfit-mobility-assessment-and-programmer`): distinguishes
  passive/active mobility, motor control, strength, and pain-limited movement;
  does not diagnose tissue pathology.
- **Injury** (`crossfit-injury-aware-workout-adapter`): modifies around clinician
  limits and pain; does not diagnose or provide rehab; lists stop conditions and
  clinician questions.
- **Faults** (`crossfit-movement-fault-analyzer`): analyzes only what is observed
  (described video/image/coach report); separates observation from inference;
  never claims unseen causes.
