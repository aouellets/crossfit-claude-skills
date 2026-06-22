/**
 * Shared utilities for the crossfit-claude-skills tooling.
 * Zero runtime dependencies (only Node built-ins) so `npm install` is minimal.
 */
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, dirname, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";

export const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
export const SKILLS_DIR = join(REPO_ROOT, "skills");

/** Internal categories allowed in skill-inventory.json. */
export const CATEGORIES = [
  "orchestration",
  "programming",
  "scaling",
  "movement",
  "coaching",
  "assessment",
  "class-delivery",
  "onboarding",
  "nutrition",
  "safety",
  "competition",
  "credentials",
] as const;
export type Category = (typeof CATEGORIES)[number];

export const RISK_LEVELS = ["low", "medium", "high"] as const;
export type RiskLevel = (typeof RISK_LEVELS)[number];

/** The Skill Me skills.category CHECK constraint allows only these. */
export const CATALOG_CATEGORY = "personal";
export const PACK_CATALOG_CATEGORY = "mixed";

export interface Frontmatter {
  name?: string;
  description?: string;
  category?: string;
  risk_level?: string;
  requires_current_rules?: boolean;
  [k: string]: unknown;
}

export interface Skill {
  id: string;
  dir: string;
  skillPath: string;
  frontmatter: Frontmatter;
  body: string;
  raw: string;
}

/** Minimal YAML-frontmatter parser (single-line key: value pairs only). */
export function parseFrontmatter(raw: string): { frontmatter: Frontmatter; body: string } {
  if (!raw.startsWith("---")) {
    return { frontmatter: {}, body: raw };
  }
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return { frontmatter: {}, body: raw };
  const fmBlock = raw.slice(3, end).replace(/^\r?\n/, "");
  const body = raw.slice(end + 4).replace(/^\r?\n/, "");
  const frontmatter: Frontmatter = {};
  for (const line of fmBlock.split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue;
    const m = line.match(/^([A-Za-z0-9_]+)\s*:\s*(.*)$/);
    if (!m || m[1] === undefined) continue;
    const key: string = m[1];
    let value: string = (m[2] ?? "").trim();
    // strip surrounding quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (value === "true" || value === "false") {
      frontmatter[key] = value === "true";
    } else {
      frontmatter[key] = value;
    }
  }
  return { frontmatter, body };
}

export function listSkillIds(): string[] {
  if (!existsSync(SKILLS_DIR)) return [];
  return readdirSync(SKILLS_DIR)
    .filter((d) => {
      const p = join(SKILLS_DIR, d);
      return statSync(p).isDirectory() && existsSync(join(p, "SKILL.md"));
    })
    .sort();
}

export function loadSkill(id: string): Skill {
  const dir = join(SKILLS_DIR, id);
  const skillPath = join(dir, "SKILL.md");
  const raw = readFileSync(skillPath, "utf8");
  const { frontmatter, body } = parseFrontmatter(raw);
  return { id, dir, skillPath, frontmatter, body, raw };
}

export function loadAllSkills(): Skill[] {
  return listSkillIds().map(loadSkill);
}

export function rel(p: string): string {
  return relative(REPO_ROOT, p) || p;
}

/* ---- tiny test reporter ---- */
export class Reporter {
  errors: string[] = [];
  warnings: string[] = [];
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  error(msg: string) {
    this.errors.push(msg);
  }
  warn(msg: string) {
    this.warnings.push(msg);
  }
  /** Prints summary and exits non-zero if there are errors. */
  done(): void {
    for (const w of this.warnings) console.warn(`  ⚠ ${w}`);
    if (this.errors.length === 0) {
      console.log(`✓ ${this.name}: passed${this.warnings.length ? ` (${this.warnings.length} warning(s))` : ""}`);
      return;
    }
    for (const e of this.errors) console.error(`  ✗ ${e}`);
    console.error(`✗ ${this.name}: ${this.errors.length} error(s)`);
    process.exit(1);
  }
}

export { join, existsSync, readFileSync, readdirSync, statSync };
