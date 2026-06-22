# Example 1 — 6-week GPP block (happy path, full week tables)

**Prompt:** "Build me 6 weeks of general programming. I train 5 days a week and
want to be well-rounded."

**Context:** Intermediate, 3 years training, full gym. Back squat 1RM 140 kg, clean
& jerk 95 kg, can do 8 strict / 25 kipping pull-ups, 5 km row ~20:00. No injuries.

---

## Athlete & goal
Intermediate athlete; primary adaptation = broad GPP with a mild strength + engine
emphasis (no single dominant weakness reported). 6 weeks, 5 sessions/week.

## Assumptions
- 60–75 min sessions. (Adjust if shorter.)
- Recovery is adequate (7+ h sleep). If not, drop one hard day to skill/recovery.
- Maxes above are current and honest; loads are %1RM, retested at the end.

## Architecture
- **Model:** weekly undulation on strength (heavy/medium across the week);
  conditioning rotated through all time domains.
- **Phases:** Phase A accumulation (wk 1–3) → **deload (wk 4)** → Phase B
  intensification (wk 5–6) → retest (end of wk 6).
- **Intensity distribution per week:** 2 hard / 2 moderate / 1 skill-or-recovery.
- Deload = ~60% of accumulation volume, loads capped at RPE 6.

## Phase A — Accumulation (weeks 1–3)
**Objective:** build work capacity and strength base; raise pull-up volume and
aerobic base.

| Day | Focus | Key prescription |
| --- | --- | --- |
| Mon (hard) | Back squat + short metcon | Squat 5×5 @ 72/75/77% across wk1–3; then "Fran"-style couplet, ~4–6 min |
| Tue (moderate) | Olympic + skill | Clean & jerk 6×2 @ 70–75% (RPE 7); 3×5 strict pull-up + hollow holds |
| Wed (skill/recovery) | Aerobic + midline | 30-min Z2 row/bike intervals (5 min on / 1 easy); T2B skill EMOM (quality) |
| Thu (hard) | Press + medium metcon | Push press 5×3 @ 75/77/80%; 12-min triplet (mixed patterns), pace-managed |
| Fri (moderate) | Mixed long piece | 20–25 min long metcon, aerobic-dominant, low-skill, steady pace |

**Progression criteria:** add load each week while bar speed/RPE hold (squat +2.5%/wk,
press +2.5%/wk). Pull-up: advance kipping-volume sets only once 5 strict are clean.
Conditioning: hold pace targets, not just finish.

## Deload — week 4
All strength @ RPE 5–6, sets cut ~40%; conditioning kept short and aerobic; no
metcon above ~8 min, no max-effort intervals. Purpose: dissipate fatigue before
intensification.

## Phase B — Intensification (weeks 5–6)
**Objective:** express the base at higher relative intensity.

| Day | Focus | Key prescription |
| --- | --- | --- |
| Mon (hard) | Heavy squat | Back squat 5/3/1 wave to a top triple @ RPE 8; short power metcon |
| Tue (moderate) | Olympic | Clean & jerk build to a heavy double @ RPE 8 (not a max); skill T2B |
| Wed (skill/recovery) | Aerobic | 30 min Z2 + handstand-skill work |
| Thu (hard) | Press + glycolytic | Push press top double @ RPE 8; 5–7 min redline-OK metcon (rationed) |
| Fri (moderate) | Long piece | 20-min aerobic grind, retest-adjacent movements |

**Progression criteria:** intensity up, volume down vs. Phase A; stop a set if bar
speed drops or form breaks (no grinding maximal singles).

## Testing & retesting
- **Baseline (wk1):** back squat 1RM 140 kg, C&J 95 kg, "Fran"-style benchmark time,
  5 km row.
- **Retest (end wk6):** squat top triple → estimate 1RM (no automatic 1RM test
  unless the athlete chooses it), C&J heavy double, repeat the benchmark + row.
  Compare to baseline; the result sets the next block.

## Adjustment rules
- If two consecutive hard days leave RPE elevated at warm-up → swap the next hard
  day to skill/recovery.
- If squat load stalls two weeks running → hold load, add a back-off set, recheck.
- If a benchmark regresses at retest → next block reduces conditioning volume and
  protects recovery before adding intensity.

## Recovery
Deload wk4 is mandatory, not optional. Sleep and protein are programmed inputs.
Echo the taxonomy: do not stack high-impact (box jumps + heavy squats) on
consecutive days.

## Risks & referral
Healthy-athlete scope: stop conditions are sharp joint pain, dizziness, form
breakdown; rhabdo caution if any session is unusually high-volume/novel. If pain
limiting movement appears, refer and route to `crossfit-injury-aware-workout-adapter`.
No outcome guarantees.
