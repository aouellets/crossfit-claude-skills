/**
 * Validates references/source-version-registry.json is well-formed:
 * required fields present, supersedes references resolve, placeholder/unauthorized
 * entries are flagged (not silently trusted), and no entry claims authorization
 * without complete metadata.
 */
import { Reporter, REPO_ROOT, join, readFileSync } from "./lib.js";

const r = new Reporter("validate:sources");
const path = join(REPO_ROOT, "references", "source-version-registry.json");

let registry: any;
try {
  registry = JSON.parse(readFileSync(path, "utf8"));
} catch (e) {
  r.error(`Cannot parse source-version-registry.json: ${(e as Error).message}`);
  r.done();
  process.exit(1);
}

const REQUIRED = [
  "source_id",
  "organization",
  "document_title",
  "season",
  "effective_date",
  "retrieved_date",
  "authorization_status",
  "official_source_reference",
  "supersedes",
  "notes",
];

const sources: any[] = registry.sources ?? [];
const ids = new Set<string>();

if (!registry.policy || registry.policy.no_embedded_proprietary_text !== true) {
  r.error("registry.policy.no_embedded_proprietary_text must be true (no proprietary manuals embedded).");
}

for (const [i, s] of sources.entries()) {
  const tag = s.source_id ?? `#${i}`;
  for (const k of REQUIRED) {
    if (!(k in s)) r.error(`source '${tag}': missing required field '${k}'.`);
  }
  if (s.source_id) {
    if (ids.has(s.source_id)) r.error(`Duplicate source_id '${s.source_id}'.`);
    ids.add(s.source_id);
  }
  const status = String(s.authorization_status ?? "");
  const isPlaceholder = /placeholder|unauthorized|illustrative/i.test(status) || /placeholder|illustrative/i.test(String(s.document_title ?? ""));
  if (isPlaceholder) {
    r.warn(`source '${tag}': placeholder/unauthorized entry — rules-dependent skills must treat it as non-authoritative.`);
  } else {
    // A "real" source must have a season and effective_date.
    if (!s.season || /replace/i.test(String(s.season))) r.error(`source '${tag}': authorized source needs a concrete 'season'.`);
    if (!s.effective_date) r.error(`source '${tag}': authorized source needs an 'effective_date'.`);
  }
}

// supersedes must resolve
for (const s of sources) {
  if (s.supersedes && !ids.has(s.supersedes)) {
    r.error(`source '${s.source_id}': supersedes '${s.supersedes}' which is not a known source_id.`);
  }
}

r.done();
