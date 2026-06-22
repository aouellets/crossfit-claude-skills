/**
 * Smoke tests for the repository invariants. Run with: npm test
 * Uses the Node built-in test runner via tsx (no extra deps).
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { listSkillIds, loadAllSkills } from "../scripts/lib.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(join(ROOT, "manifest.json"), "utf8"));

test("there are exactly 27 skills", () => {
  assert.equal(listSkillIds().length, 27);
});

test("manifest lists exactly the 27 skill folders", () => {
  const folders = new Set(listSkillIds());
  const ids: string[] = manifest.skill_ids;
  assert.equal(ids.length, 27);
  for (const id of ids) assert.ok(folders.has(id), `manifest id missing folder: ${id}`);
  for (const id of folders) assert.ok(ids.includes(id), `folder missing from manifest: ${id}`);
});

test("every skill has name + description frontmatter", () => {
  for (const s of loadAllSkills()) {
    assert.ok(s.frontmatter.name, `${s.id}: missing name`);
    assert.ok(s.frontmatter.description, `${s.id}: missing description`);
  }
});

test("pack is not brand-authorized and uses the neutral display name", () => {
  assert.equal(manifest.brand_authorized, false);
  assert.equal(manifest.neutral_display_name, "Functional Fitness Coaching Pack");
  const brand = JSON.parse(readFileSync(join(ROOT, "assets/brand/brand-authorization.json"), "utf8"));
  assert.equal(brand.authorized, false);
});

test("the non-affiliation notice is present in manifest notes", () => {
  assert.match(String(manifest.notes), /not official, endorsed, sponsored, approved, or certified by CrossFit/);
});

test("rules-dependent skills require current rules", () => {
  const inv = JSON.parse(readFileSync(join(ROOT, "skill-inventory.json"), "utf8"));
  const byId = new Map(inv.skills.map((s: any) => [s.id, s]));
  for (const id of ["crossfit-rules-and-standards-advisor", "crossfit-competition-workout-strategist"]) {
    assert.equal((byId.get(id) as any)?.requires_current_rules, true, `${id} must require current rules`);
  }
});

test("generated seed.sql seeds under the neutral pack name and carries the notice", () => {
  const sql = readFileSync(join(ROOT, "seed/seed.sql"), "utf8");
  assert.match(sql, /Functional Fitness Coaching Pack/);
  assert.match(sql, /not official, endorsed, sponsored, approved, or certified by CrossFit/);
  assert.match(sql, /insert into pack_skills/);
});
