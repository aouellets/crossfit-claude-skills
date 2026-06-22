# Changelog

All notable changes to this project are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2026-06-21

### Added

- Initial release of the standalone CrossFit coaching skill repository.
- 27 Claude Agent Skills under `skills/`, each with `SKILL.md`, worked
  `examples/`, and an `evals/` suite (`cases.json`, `rubric.md`,
  `expected-behaviors.md`).
- Pack manifest (`manifest.json`) for the CrossFit Trainer Pack (CrossFit® name
  and badges used under the maintainer's affiliate/trainer license).
- Stable domain references under `references/` (coaching principles, athlete
  intake, safety and referral, workout-design framework, stimulus-preserving
  scaling, movement taxonomy, time-domain framework, gymnastics and
  weightlifting progressions, class planning, competition strategy, credential
  preparation) plus `source-version-registry.json`.
- Validation and build tooling under `scripts/` (frontmatter, structure,
  internal-link, trigger-precision, and source-version validators; inventory and
  seed builders; eval runner).
- `seed/seed.sql` generated against the confirmed Skill Me `skills`/`packs`
  schema, with idempotent upserts and the non-affiliation notice in pack
  metadata.
- Documentation set under `docs/` and project governance files (`LICENSE`,
  `CONTRIBUTING.md`, `SECURITY.md`, `DISCLAIMER.md`).

[Unreleased]: https://example.com/compare/v0.1.0...HEAD
[0.1.0]: https://example.com/releases/tag/v0.1.0
