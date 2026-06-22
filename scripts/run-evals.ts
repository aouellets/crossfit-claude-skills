/**
 * Eval harness (deterministic, structural + coverage — no model calls).
 * For every skill: loads evals/cases.json, checks case shape, that expected_skill
 * resolves to a real skill, that there are >=10 cases and >=1 adversarial case,
 * and that adversarial cases assert must_not_include. Reports per-skill and total.
 */
import { loadAllSkills, Reporter, rel, listSkillIds, join, existsSync, readFileSync } from "./lib.js";

const r = new Reporter("evals");
const skills = loadAllSkills();
const validIds = new Set(listSkillIds());

const REQUIRED_KEYS = [
  "id",
  "prompt",
  "context",
  "expected_skill",
  "must_include",
  "must_not_include",
  "safety_expectations",
  "quality_dimensions",
  "notes",
];

let totalCases = 0;
let totalAdversarial = 0;

for (const s of skills) {
  const casesPath = join(s.dir, "evals", "cases.json");
  if (!existsSync(casesPath)) {
    r.error(`${s.id}: missing evals/cases.json`);
    continue;
  }
  let cases: any[];
  try {
    cases = JSON.parse(readFileSync(casesPath, "utf8"));
  } catch (e) {
    r.error(`${rel(casesPath)}: invalid JSON (${(e as Error).message})`);
    continue;
  }
  if (!Array.isArray(cases)) {
    r.error(`${rel(casesPath)}: must be a JSON array.`);
    continue;
  }
  if (cases.length < 10) {
    r.error(`${s.id}: needs >=10 eval cases (found ${cases.length}).`);
  }

  const seen = new Set<string>();
  let adv = 0;
  for (const c of cases) {
    for (const k of REQUIRED_KEYS) {
      if (!(k in c)) r.error(`${s.id} case '${c.id ?? "?"}': missing field '${k}'.`);
    }
    if (c.id) {
      if (seen.has(c.id)) r.error(`${s.id}: duplicate case id '${c.id}'.`);
      seen.add(c.id);
    }
    if (c.expected_skill && !validIds.has(c.expected_skill)) {
      r.error(`${s.id} case '${c.id}': expected_skill '${c.expected_skill}' is not a real skill.`);
    }
    if (!Array.isArray(c.must_include)) r.error(`${s.id} case '${c.id}': must_include must be an array.`);
    if (!Array.isArray(c.must_not_include)) r.error(`${s.id} case '${c.id}': must_not_include must be an array.`);
    if (!Array.isArray(c.quality_dimensions)) r.error(`${s.id} case '${c.id}': quality_dimensions must be an array.`);

    const isAdv = /adv/i.test(String(c.id ?? "")) || /adversari/i.test(String(c.notes ?? ""));
    if (isAdv) {
      adv++;
      if (!Array.isArray(c.must_not_include) || c.must_not_include.length === 0) {
        r.error(`${s.id} adversarial case '${c.id}': must populate must_not_include.`);
      }
    }
  }
  if (adv < 1) r.error(`${s.id}: needs >=1 adversarial case (id containing 'adv' or notes mentioning 'adversarial').`);

  totalCases += cases.length;
  totalAdversarial += adv;
}

// Repo-level adversarial coverage across all skills.
const allText = skills
  .map((s) => {
    const p = join(s.dir, "evals", "cases.json");
    return existsSync(p) ? readFileSync(p, "utf8").toLowerCase() : "";
  })
  .join("\n");
const COVERAGE: Array<[string, RegExp]> = [
  ["diagnosis request", /diagnos/],
  ["ignore-medical-advice", /(ignore|override).*(doctor|physio|clinician|medical)|clinician/],
  ["guaranteed result", /guarantee/],
  ["outdated rulebook", /(outdated|old|stale|last season).*(rule|standard)|wrong-season|season/],
  ["protected exam content", /(exam|test) (question|content)|copyright|confidential/],
  ["pack-as-endorsed", /(endorsed|official|certified)/],
  ["contradictory athlete data", /contradict|inconsistent/],
];
for (const [label, re] of COVERAGE) {
  if (!re.test(allText)) r.warn(`Repo-wide adversarial coverage: no case appears to cover '${label}'.`);
}

console.log(`  • ${skills.length} skills, ${totalCases} cases, ${totalAdversarial} adversarial.`);
r.done();
