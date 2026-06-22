# CrossFit Trainer Pack — Catalog & Routing Guide

**Pack slug:** `crossfit-coaching` · **Display:** CrossFit Trainer Pack
(CrossFit® name/badges used under the maintainer's affiliate/trainer license) ·
**Category:** mixed · 27 skills.

> This independent skill repository is not official, endorsed, sponsored,
> approved, or certified by CrossFit, LLC or its affiliates.

A coordinated set of CrossFit / mixed-modal coaching skills. Each skill is
**trigger-precise** and routes to the narrowest applicable specialist. Start at
`crossfit-pack-router` for anything ambiguous or multi-part.

## Routing map (intent → skill)

| You want to… | Skill |
| --- | --- |
| "Write me a workout for tomorrow" | `crossfit-workout-designer` |
| "Build six weeks of programming" | `crossfit-programming-cycle-builder` |
| "Bring up just my strength / Oly / engine" | `crossfit-specialty-cycle-builder` |
| "Audit my last cycle" | `crossfit-programming-auditor` |
| "I missed sessions / I'm fatigued — fix my upcoming week" | `crossfit-adaptive-training-plan-manager` |
| "How should a beginner scale this?" | `crossfit-stimulus-and-scaling-coach` |
| "Help me get my first muscle-up / improve my snatch" | `crossfit-movement-progression-builder` |
| "What's wrong with this squat/snatch?" (from observation) | `crossfit-movement-fault-analyzer` |
| "Give me cues to fix X" | `crossfit-coaching-cue-generator` |
| "No rower/barbell — what do I use instead?" | `crossfit-equipment-substitution-engine` |
| "Assess where this athlete stands" | `crossfit-athlete-assessment` |
| "What should I prioritize fixing?" | `crossfit-weakness-prioritizer` |
| "Which benchmarks should I test?" | `crossfit-benchmark-and-testing-builder` |
| "I can't reach overhead / hit depth" (no pain) | `crossfit-mobility-assessment-and-programmer` |
| "Summarize this athlete's progress" | `crossfit-athlete-progress-report` |
| "Turn this workout into a 60-minute class" | `crossfit-class-plan-builder` |
| "30 people, 8 barbells, small box — how do I run it?" | `crossfit-class-logistics-and-floor-manager` |
| "Build an on-ramp for new athletes" | `crossfit-foundations-and-onramp-builder` |
| "Adapt for a masters / postpartum / youth athlete" | `crossfit-population-adaptation-coach` |
| "Help me eat better to support training" | `crossfit-nutrition-habit-coach` |
| "My shoulder hurts during pull-ups" | **safety/referral first**, then `crossfit-injury-aware-workout-adapter` |
| "Plan my prep for the Open / a comp" | `crossfit-competition-preparation-planner` |
| "How do I attack this released workout?" | `crossfit-competition-workout-strategist` |
| "What does this rule/standard mean?" | `crossfit-rules-and-standards-advisor` |
| "Help me pass my Level 2 / Judges Course" | `crossfit-credential-preparation-coach` |
| "Review how I coached this class" | `crossfit-coach-performance-reviewer` |

## Resolving overlaps

- **Scaling vs. progression:** scaling adapts *one workout now*
  (`crossfit-stimulus-and-scaling-coach`); progression *builds a skill over weeks*
  (`crossfit-movement-progression-builder`).
- **Single workout vs. cycle:** one session →
  `crossfit-workout-designer`; multiple sessions/weeks →
  `crossfit-programming-cycle-builder` (balanced) or
  `crossfit-specialty-cycle-builder` (one quality).
- **Mobility limitation vs. pain:** a position you *can't reach* →
  `crossfit-mobility-assessment-and-programmer`; *pain* → safety/referral +
  `crossfit-injury-aware-workout-adapter`.
- **Credential study vs. exam content:** `crossfit-credential-preparation-coach`
  generates **original** practice only — it never reproduces protected exam
  content.
- **Class plan vs. floor logistics:** teaching/timing →
  `crossfit-class-plan-builder`; people/equipment/space →
  `crossfit-class-logistics-and-floor-manager`.
- **Competition prep vs. workout strategy vs. rules:** macro plan →
  `crossfit-competition-preparation-planner`; attack a released workout →
  `crossfit-competition-workout-strategist`; rule meaning →
  `crossfit-rules-and-standards-advisor`.

## Example workflows

1. **Athlete development:** `crossfit-athlete-assessment` →
   `crossfit-weakness-prioritizer` → `crossfit-specialty-cycle-builder` →
   `crossfit-adaptive-training-plan-manager` → `crossfit-athlete-progress-report`.
2. **Class delivery:** `crossfit-workout-designer` →
   `crossfit-stimulus-and-scaling-coach` → `crossfit-class-plan-builder` →
   `crossfit-class-logistics-and-floor-manager` → athlete briefing.

## Safety & rules behavior

Every coaching skill applies the
[safety-and-referral framework](references/safety-and-referral.md) proportionately
and stays in coaching scope. Rules-dependent skills
(`crossfit-rules-and-standards-advisor`, `crossfit-competition-workout-strategist`)
check event/season/division, use only a matching versioned source, warn when
stale, require user-supplied/confirmed rule text, and never fabricate standards.
