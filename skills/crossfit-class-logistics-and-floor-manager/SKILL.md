---
name: CrossFit Class Logistics and Floor Manager
description: Use when the constraint on a CrossFit class is people, equipment, or space — e.g. "30 athletes, 8 barbells, small box, how do I run this?". Expects attendance, equipment counts, space, and ability spread. Produces equipment math, a format (heats / stations / partners), a text station map with safety zones and traffic flow, heat assignments, transitions, and setup/cleanup. Excludes the minute-by-minute teaching plan (route to crossfit-class-plan-builder, which owns timing) and designing the workout (crossfit-workout-designer).
category: class-delivery
risk_level: medium
requires_current_rules: false
---

# CrossFit Class Logistics and Floor Manager

Make a chosen workout **runnable for a real group on a real floor** when the
binding constraint is people, equipment, or space. This skill owns the question
"how do I physically run this class?" — heats, stations, partners, the floor
layout, traffic flow, safety zones, coach visibility, and setup/cleanup. It does
**not** design the workout and does **not** write the minute-by-minute teaching
plan; it takes a workout as given and makes it deliverable. See
[../../references/class-planning.md](../../references/class-planning.md).

## Workflow

1. **Inventory attendance and equipment.** Count athletes against barbells,
   racks, ergs (rower/bike/ski), rig/pull-up stations, wall-ball targets, boxes,
   and usable floor footage. State the math explicitly.
2. **Pick the format from the math.** If equipment ≥ athletes, run straight; if
   short, choose **heats**, **station rotations**, or **partner/relay** so every
   athlete has a station every minute. Show the arithmetic that forces the choice.
3. **Lay out the floor as a text map.** Draw stations, rotation direction,
   running/traffic lanes, and **safety zones** (barbell drop areas kept clear of
   walking paths, rope-climb landing zones, rig fall zones). See
   [../../references/class-planning.md](../../references/class-planning.md) §Floor
   management & logistics.
4. **Assign heats and timing.** Who is in each heat (by ability or equipment),
   start staggering, who counts/judges, and the clock for each heat.
5. **Write the transition logic.** Exactly how athletes move between stations or
   heats, when, in which direction, and how equipment is shared/reset between them.
6. **Plan setup and cleanup.** What is laid out before class, by whom, and how the
   floor resets for the next class — timed.
7. **Keep the class together on stimulus.** Use the brief's scaling map so mixed
   ability stays in one shared stimulus rather than fragmenting the floor. See
   [../../references/coaching-principles.md](../../references/coaching-principles.md) §3.
8. **Check coach sightlines.** Position the coach so the whole floor — especially
   overhead/loaded and high-skill stations — is visible at once.

## Inputs

**Required (or inferable):** number of athletes, the workout (or its format/
movements), equipment counts available, and the usable space.

**Optional (improves the output):** class length, ability spread, ceiling height /
rope or rig count, number of coaches, door/wall positions and running route,
incoming next-class overlap, and any known mobility/space limits.

## Non-goals

- **Not** designing the workout → `crossfit-workout-designer`.
- **Not** the minute-by-minute teaching/timing plan → `crossfit-class-plan-builder`.
- **Not** athlete-specific scaling of the movements → `crossfit-stimulus-and-scaling-coach`.
- **Not** non-obvious equipment substitutions for missing gear → `crossfit-equipment-substitution-engine`.
- Does **not** diagnose injury, prescribe medical care, or guarantee outcomes.

## Default output (Floor-plan contract)

1. **Attendance & equipment inventory** — athletes vs. each equipment count, plus
   space, stated as numbers.
2. **Chosen format** — heats / stations / partners, with the math that forces it.
3. **Text station map** — floor layout, station list, rotation direction,
   traffic/running lanes, and explicit safety zones.
4. **Heat assignments & timing** — who is where, stagger, who judges, the clock.
5. **Transition logic** — how and when athletes and equipment move.
6. **Setup & cleanup plan** — pre-class layout and post-class reset, timed.
7. **Coaching/visibility notes** — where the coach stands; what to watch.

## Safety & scope

Floor safety is the point of this skill, so apply
[../../references/safety-and-referral.md](../../references/safety-and-referral.md)
to the **layout**: keep barbell drop zones and rope-climb/box landing areas out of
running lanes, give loaded and overhead stations clearance, preserve coach
sightlines on every loaded station, and never pack a floor so tight that a dropped
barbell or a sprinting athlete crosses someone's platform. If a user-proposed
layout creates a collision or struck-by hazard, **flag it and fix the floor** —
do not run it as drawn. If the request shifts to an athlete's pain, injury, or any
red flag (chest pain, syncope, neurological symptoms, rhabdomyolysis warning
signs), stop and refer per the framework; that is not a logistics problem.

## Incomplete information

Never fabricate athlete data, equipment counts, or box dimensions. If a
decision-changing input is missing (usually equipment counts, athlete count, or
ceiling/space), return a **clearly labeled provisional** floor plan using a stated
assumption (e.g. "assuming 8 barbells and a 1-rope rig"), make the math visible so
the user can re-run it with real numbers, and ask only for the one or two counts
that change the format. Always give a usable plan — do not refuse for want of an
exact footprint.

## Related Skills and Routing

- **This skill owns** running a chosen workout on a constrained floor.
- **Collaborates with** `crossfit-class-plan-builder` (it consumes that timing/
  teaching plan, or hands the floor map back to it) and `crossfit-workout-designer`
  (which supplies the workout and its intended stimulus). Pass forward: the format,
  station map, heat assignments, and any scaling map used.
- **Defers to** `crossfit-class-plan-builder` for minute-by-minute teaching and
  timing, `crossfit-workout-designer` for the workout itself,
  `crossfit-equipment-substitution-engine` for substituting missing equipment, and
  `crossfit-stimulus-and-scaling-coach` for deep per-athlete scaling.
- When ambiguous (logistics vs. teaching plan vs. workout design),
  `crossfit-pack-router` disambiguates.
