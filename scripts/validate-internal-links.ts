/**
 * Validates relative markdown links across SKILL.md files, references/, and docs/
 * resolve to files that exist. Ignores external (http/https/mailto) and anchors.
 */
import { Reporter, REPO_ROOT, rel, join, existsSync, readFileSync, readdirSync, statSync } from "./lib.js";
import { dirname, resolve } from "node:path";

const r = new Reporter("validate:links");

function walk(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    if (e === "node_modules" || e === ".git") continue;
    const p = join(dir, e);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (p.endsWith(".md")) out.push(p);
  }
  return out;
}

const linkRe = /\[[^\]]*\]\(([^)]+)\)/g;
const files = walk(REPO_ROOT);

for (const file of files) {
  const content = readFileSync(file, "utf8");
  let m: RegExpExecArray | null;
  while ((m = linkRe.exec(content)) !== null) {
    const rawTarget = (m[1] ?? "").trim();
    if (/^(https?:|mailto:|#)/.test(rawTarget)) continue;
    // strip anchor and line suffix
    const target = (rawTarget.split("#")[0] ?? "").split(" ")[0] ?? "";
    if (target === "") continue;
    const resolved = resolve(dirname(file), target);
    if (!existsSync(resolved)) {
      r.error(`${rel(file)}: broken internal link -> ${m[1]}`);
    }
  }
}

r.done();
