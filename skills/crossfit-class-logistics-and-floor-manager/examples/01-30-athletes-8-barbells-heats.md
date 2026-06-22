# Example 1 — 30 athletes, 8 barbells, heats (happy path)

**Prompt:** "I've got 30 people coming, only 8 barbells, and a medium box. The
workout is a barbell-heavy AMRAP. How do I run this?"

**Context:** Workout already designed (thrusters + box jumps + cal row), 60-minute
class, one coach, mixed ability.

---

## Attendance & equipment inventory
- Athletes: **30**
- Barbells: **8** · Boxes: 12 · Rower(s): 4 · Floor: medium (one rig wall, one
  running door)
- Binding constraint: **barbells (8 for 30)** — straight start is impossible.

## Chosen format — heats (the math)
30 athletes ÷ 8 barbells ≈ 4 athletes per barbell. Running 30 at once needs ~30
barbells, so we run **4 heats**. 30 ÷ 4 = 7–8 athletes per heat, and 8 barbells
covers a heat of 8 one-to-one. Each working heat is judged by a resting partner
from the next heat.

## Text station map
```
        [ RIG WALL ]
  B1 B2 B3 B4 B5 B6 B7 B8      <- 8 barbell platforms (drop zone, no walk-through)
  --------------------------
  |  SAFETY ZONE (clear)   |   <- 3 ft buffer behind platforms
  --------------------------
  X X X X X X X X              <- box-jump line (faces away from barbells)
  --------------------------
  [ROWERS x4]   [ judges/rest stand here ]
  ====>  running/walk lane along this wall to door  ====>  [DOOR]
```
Rotation within the workout is stationary (athletes own one platform for their
heat); heats rotate on/off the floor. Running lane is kept on the far wall, never
crossing a barbell platform.

## Heat assignments & timing
- **Heat A (8):** stronger/faster athletes — clock 0:00–8:00.
- **Heat B (8):** 8:00 start after A racks bars and clears the safety zone.
- **Heat C (8) / Heat D (6):** staggered the same way.
- Resting athletes from the next heat **count reps and judge box-jump standards**
  for the working heat.

## Transition logic
On "time," working heat strips bars to the assigned next-heat load, steps fully
behind the safety zone, and the next heat steps in only when platforms are clear.
Bars are changed by the incoming athlete, not mid-lane. No equipment crosses the
running lane.

## Setup & cleanup plan
- **Pre-class (coach + early arrivals, ~5 min):** 8 platforms loaded to the most
  common load, boxes set, rowers reset to zero, whiteboard with the scaling map.
- **Cleanup (~3 min):** each heat strips its own bar; boxes stacked along the rig
  wall; rowers reset for the next class.

## Coaching/visibility notes
Coach stands at the rower end facing the platforms so all 8 loaded bars and the
box line are in view at once. Watch the platform-to-box transition (the only
crossing point) and call resets there.
