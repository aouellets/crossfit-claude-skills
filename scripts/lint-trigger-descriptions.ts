/**
 * Trigger-precision lint + duplicate detection.
 * Fails on: vague descriptions, too-short descriptions, descriptions that don't
 * signal WHEN to load, duplicate skill ids, and duplicate display names.
 */
import { loadAllSkills, Reporter, rel } from "./lib.js";

const r = new Reporter("validate:triggers");
const skills = loadAllSkills();

const BANNED = [
  /\bhelps with\b/i,
  /\bvarious\b/i,
  /\ball things\b/i,
  /\banything (related|about)\b/i,
  /^use this for crossfit/i,
];

// Signals that a description states a triggering condition / inputs / routing.
const WHEN_SIGNALS = /\b(when|use when|triggers? when|load (this|when)|for requests?|invoked when|activate)\b/i;

const seenIds = new Map<string, string>();
const seenNames = new Map<string, string>();

for (const s of skills) {
  const where = rel(s.skillPath);
  const desc = String(s.frontmatter.description ?? "");
  const name = String(s.frontmatter.name ?? "");

  // duplicate id
  if (seenIds.has(s.id)) r.error(`Duplicate skill id '${s.id}'.`);
  seenIds.set(s.id, where);

  // duplicate display name (case-insensitive)
  const nkey = name.trim().toLowerCase();
  if (nkey && seenNames.has(nkey)) {
    r.error(`Duplicate display name '${name}' (also in ${seenNames.get(nkey)}).`);
  }
  seenNames.set(nkey, where);

  if (desc.length < 80) {
    r.error(`${where}: description too short (${desc.length} chars); be trigger-precise (>=80).`);
  }
  if (desc.length > 600) {
    r.warn(`${where}: description very long (${desc.length} chars); consider tightening.`);
  }
  for (const b of BANNED) {
    if (b.test(desc)) r.error(`${where}: vague description matches ${b}. State WHEN to load it.`);
  }
  if (!WHEN_SIGNALS.test(desc)) {
    r.error(`${where}: description should state WHEN to load the skill (e.g. "Use when ...").`);
  }
  // Should reference routing / which skill owns adjacency, or exclusions.
  if (!/(instead|route|other skill|not for|excludes?|defer|hand off|owns)/i.test(desc)) {
    r.warn(`${where}: description does not mention routing/exclusions; helps disambiguation.`);
  }
}

r.done();
