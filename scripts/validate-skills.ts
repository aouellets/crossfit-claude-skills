/**
 * Validates skill structure: required body sections, explicit non-goals,
 * a Related Skills and Routing section, and the presence of examples/ (>=3)
 * and evals/ files. Also checks every manifest skill_id has a folder and
 * vice versa.
 */
import { loadAllSkills, Reporter, rel, REPO_ROOT, join, existsSync, readFileSync, readdirSync, statSync } from "./lib.js";

const r = new Reporter("validate:skills");
const skills = loadAllSkills();

const manifest = JSON.parse(readFileSync(join(REPO_ROOT, "manifest.json"), "utf8"));
const manifestIds: string[] = manifest.skill_ids ?? [];
const folderIds = skills.map((s) => s.id);

// manifest <-> folders parity
for (const id of manifestIds) {
  if (!folderIds.includes(id)) r.error(`manifest.json lists '${id}' but skills/${id}/ does not exist.`);
}
for (const id of folderIds) {
  if (!manifestIds.includes(id)) r.error(`skills/${id}/ exists but is not listed in manifest.json skill_ids.`);
}

function countFiles(dir: string): number {
  if (!existsSync(dir)) return 0;
  return readdirSync(dir).filter((f) => statSync(join(dir, f)).isFile()).length;
}

for (const s of skills) {
  const where = rel(s.skillPath);
  const body = s.body;
  const lower = body.toLowerCase();

  // Required sections
  if (!/related skills and routing/i.test(body)) {
    r.error(`${where}: missing 'Related Skills and Routing' section.`);
  }
  if (!/non-goal/i.test(lower)) {
    r.error(`${where}: missing explicit non-goals (no 'Non-goal' heading/text).`);
  }
  if (!/(default output|output contract|## .*output)/i.test(lower)) {
    r.error(`${where}: missing a default/structured output section.`);
  }
  if (!/(safety|scope|referral)/i.test(lower)) {
    r.error(`${where}: missing safety/scope handling.`);
  }
  if (!/(incomplete|missing (data|information)|provisional|assumption)/i.test(lower)) {
    r.error(`${where}: missing incomplete-information / provisional-answer guidance.`);
  }
  if (!/(required|inputs)/i.test(lower) || !/optional/i.test(lower)) {
    r.error(`${where}: must separate required vs optional inputs.`);
  }

  // examples/
  const exDir = join(s.dir, "examples");
  const exCount = countFiles(exDir);
  if (exCount < 3) r.error(`${where}: needs >=3 worked examples in examples/ (found ${exCount}).`);

  // evals/
  const evDir = join(s.dir, "evals");
  for (const f of ["cases.json", "rubric.md", "expected-behaviors.md"]) {
    if (!existsSync(join(evDir, f))) r.error(`${where}: missing evals/${f}.`);
  }
}

r.done();
