# Example 2 — Small space, rope climbs + running, station rotations + safety zones

**Prompt:** "Small box, one rope, 16 athletes, and the workout has rope climbs and
a run. The rope and the door are basically next to each other. How do I run it
without people colliding?"

**Context:** 1 rope, 1 door for the run, 16 athletes, low-ish ceiling, one coach.

---

## Attendance & equipment inventory
- Athletes: **16** · Ropes: **1** · Run route: single door
- Binding constraints: **one rope** (a bottleneck) and a **rope-landing area that
  overlaps the running path** (a struck-by/collision hazard).

## Chosen format — station rotations (the math)
One rope cannot serve 16 at once, so split into a **rope station** and an
**off-rope station** and rotate. 16 ÷ 2 = **8 per station**; even 8 is too many on
one rope, so the rope station runs a short **work/rest line** (2 climbing, others
in a queue doing the off-rope movement), capping rope traffic at 2 bodies in the
landing zone.

## Text station map (hazard fixed)
```
   [ ROPE ]                         The rope landing zone and the run door
   |  ROPE LANDING ZONE  |   <-- must NOT share a lane. Re-route the run.
   |  (climbers only,    |
   |   max 2, clear mat) |
   ----------------------
   | QUEUE / off-rope    |
   | air squats here     |
   ----------------------
   ====> RUN LANE re-routed along the OPPOSITE wall ====> [DOOR]
```
The run lane is moved to the far wall so runners never pass under or beside a
descending climber. A 6 ft clear mat under the rope is a no-walk safety zone.

## Heat assignments & timing
Two rotating groups of 8. Group 1 on rope/queue, Group 2 running; swap each round
or on a time interval. Max **2 athletes on the rope at a time**, the rest in the
queue doing the off-rope movement so the rope never stacks up.

## Transition logic
Runners return along the far-wall lane and tag into the queue, not the landing
zone. No one enters the rope mat until the previous climber's feet are down and
clear. Coach controls the "next up" call.

## Setup & cleanup plan
- **Pre-class:** mat squared under the rope, far-wall run lane cleared and marked,
  queue spot taped off.
- **Cleanup:** mat back, lane reopened for the next class.

## Coaching/visibility notes
Coach stands where both the rope landing zone and the run-lane return are visible.
Primary watch: the rope descent and the door return — the two points where a
collision could happen. Cap rope occupancy verbally every round.
