# Security Policy

This repository contains **text content** (Markdown skills, JSON metadata, and
TypeScript tooling). It ships no runtime service and stores no user data. The
security surface is therefore limited to (a) the build/validation tooling and
(b) the integrity of the catalog content that downstream systems ingest.

## Supported versions

The `main` branch is the only supported version. Fixes are released forward
following [SemVer](https://semver.org/) and recorded in [CHANGELOG.md](CHANGELOG.md).

## Reporting a vulnerability

Please report suspected vulnerabilities **privately** — do not open a public
issue for an unpatched problem.

- Open a [GitHub Security Advisory](https://docs.github.com/en/code-security/security-advisories)
  on this repository, **or**
- email the maintainers at the address listed in the repository profile.

Include reproduction steps, affected files, and impact. We aim to acknowledge
within 5 business days.

## In scope

- Tooling that could execute untrusted input during `validate`, `build`, or `evals`.
- Content that could cause a downstream catalog (e.g. Skill Me) to ingest unsafe
  instructions, fabricated medical claims, or mislabeled brand authorization.
- Seed SQL that could perform unintended writes.

## Out of scope

- The security of any third-party platform that ingests this content.
- Vulnerabilities in transitive dev dependencies that are not reachable by the
  scripts in `scripts/`.

## Content-safety note

Skills are coaching content, not executable payloads. Validation
(`npm run validate`) enforces structural and policy gates (frontmatter,
non-affiliation labeling, source versioning). Treat any skill that attempts to
bypass the safety-and-referral framework, fabricate official standards, or
assert brand endorsement as a content-security defect and report it.
