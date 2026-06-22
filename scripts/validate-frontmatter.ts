/**
 * Validates SKILL.md frontmatter for every skill.
 * Fails loudly on missing/empty name or description, and on invalid
 * repo-internal augmentation keys (category, risk_level, requires_current_rules).
 */
import { loadAllSkills, Reporter, CATEGORIES, RISK_LEVELS, rel } from "./lib.js";

const r = new Reporter("validate:frontmatter");
const skills = loadAllSkills();

if (skills.length === 0) r.error("No skills found under skills/.");

for (const s of skills) {
  const fm = s.frontmatter;
  const where = rel(s.skillPath);
  if (!fm.name || String(fm.name).trim().length === 0) {
    r.error(`${where}: missing frontmatter 'name'.`);
  }
  if (!fm.description || String(fm.description).trim().length === 0) {
    r.error(`${where}: missing frontmatter 'description'.`);
  }
  if (fm.category !== undefined && !CATEGORIES.includes(fm.category as never)) {
    r.error(`${where}: invalid category '${fm.category}'. Allowed: ${CATEGORIES.join(", ")}.`);
  }
  if (fm.risk_level !== undefined && !RISK_LEVELS.includes(fm.risk_level as never)) {
    r.error(`${where}: invalid risk_level '${fm.risk_level}'. Allowed: ${RISK_LEVELS.join(", ")}.`);
  }
  if (
    fm.requires_current_rules !== undefined &&
    typeof fm.requires_current_rules !== "boolean"
  ) {
    r.error(`${where}: requires_current_rules must be a boolean.`);
  }
  // Encourage (warn, don't fail) the full augmentation set so build-inventory is complete.
  if (fm.category === undefined) r.warn(`${where}: no 'category' set; build-inventory will mark it 'uncategorized'.`);
  if (fm.risk_level === undefined) r.warn(`${where}: no 'risk_level' set; defaulting to 'medium' in inventory.`);
}

r.done();
