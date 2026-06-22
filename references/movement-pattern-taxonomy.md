# Movement Pattern Taxonomy

A working classification of CrossFit movements by **pattern and demand**, so
programming balances patterns, scaling substitutes within a pattern, and audits
can detect imbalance or repeated joint stress. Used by the designer, cycle
builder, auditor, substitution engine, and progression builders.

## Primary patterns

- **Squat** — air squat, front/back/overhead squat, wall ball, thruster (squat +
  press), pistol, box squat.
- **Hip hinge** — deadlift, sumo deadlift high pull, kettlebell swing, good
  morning, clean/snatch pulls, hip-extension (GHD/back extension).
- **Vertical press** — strict/push press, push jerk, handstand push-up, overhead
  dumbbell press.
- **Horizontal press** — bench press, push-up, ring/bar dip (push-up family).
- **Vertical pull** — pull-up (strict/kipping/butterfly), chest-to-bar,
  bar/ring muscle-up, rope climb.
- **Horizontal pull** — ring row, bent-over row, inverted row.
- **Olympic / triple-extension power** — snatch, clean & jerk and their
  variants (see [weightlifting-progressions.md](weightlifting-progressions.md)).
- **Gymnastics / bodyweight skill** — handstand, muscle-up, toes-to-bar, levers,
  pistols (see [gymnastics-progressions.md](gymnastics-progressions.md)).
- **Core / midline** — toes-to-bar, GHD sit-up, hollow/arch, plank, L-sit,
  carries (anti-flexion/extension/rotation).
- **Locomotion / monostructural** — run, row, bike/Echo, SkiErg, swim,
  shuttle/odd-object carries.
- **Jumping / plyometric** — box jump, broad jump, double-unders (also a
  coordination/monostructural demand).

## Demand axes (for substitution & audit)

When substituting or auditing, compare along these axes — a good swap matches as
many as feasible:

- **Joint action(s)** — which joints, which direction.
- **Force orientation** — vertical / horizontal / mixed.
- **Contraction type & time under tension** — concentric/eccentric/isometric;
  fast cyclical vs. grind.
- **Primary musculature & energy system** — what's actually limiting.
- **Skill/coordination demand** — technical ceiling.
- **Cardiorespiratory demand** — how much it taxes the engine.
- **Impact / repeated joint stress** — landing, spinal loading, grip volume.

## Substitution guidance

Substitute **within pattern and demand**, not by superficial similarity. State
what the swap **preserves** and what it **fails to reproduce** (see
[stimulus-preserving-scaling.md](stimulus-preserving-scaling.md)). Example:
rowing for running preserves cyclical aerobic demand but removes impact and
changes the posterior-chain/grip contribution; an Echo bike preserves the engine
but removes both impact and grip.

## Balance heuristics (for programming & audit)

Over a week/cycle, watch for: push vs. pull balance, hinge vs. squat balance,
repeated high-impact landings on consecutive days, grip-intensive movements
stacked back-to-back, overhead volume accumulation, and midline fatigue carrying
between sessions. Imbalance and repeated joint stress are the first things
`crossfit-programming-auditor` checks.
