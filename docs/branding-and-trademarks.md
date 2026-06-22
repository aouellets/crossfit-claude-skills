# Branding and Trademarks

This repository is independent and **not affiliated with, endorsed by, sponsored
by, approved by, or certified by CrossFit, LLC**. "CrossFit" is a registered
trademark of CrossFit, LLC.

## Content rules (enforced by review; some by tooling)

1. **Capitalize CrossFit** — capital C, capital F. Not "Crossfit", "crossfit",
   or "CROSSFIT" in prose.
2. **Use it as an adjective, not a verb.** Write "CrossFit training", "a CrossFit
   class", "a CrossFit athlete". Never "to CrossFit" / "CrossFitting".
3. **Never claim authority.** Do not call the repository, the pack, or any skill
   "official", "certified", "endorsed", "sponsored", or "approved".
4. **Nominative use is fine.** Referring to CrossFit training to describe what the
   content is about is permitted and expected.
5. **Neutral display name by default.** Because brand authorization is undocumented
   (`assets/brand/brand-authorization.json` → `authorized: false`), the pack is
   presented as the **Functional Fitness Coaching Pack**. The descriptive name
   "CrossFit Coaching Pack" may appear as a `display_name` for human context, but
   the **seeded** pack name and any user-facing default use the neutral name.

## Authorization metadata

`assets/brand/brand-authorization.json` is the machine-readable status:

```json
{ "brand": "CrossFit", "authorized": false, "authorization_type": null,
  "authorized_by": null, "authorization_date": null, "permitted_uses": [], "notes": "..." }
```

To ever present the pack as official, **all** of `authorized: true`,
`authorization_type`, `authorized_by`, and `authorization_date` must be populated
with real, verifiable authorization. Tooling treats incomplete metadata as
**unauthorized** and refuses official labeling. No logo image files are required
(Skill Me ingests text); if any are added, validation must still refuse to label
the pack official without complete authorization metadata.

## The notice

This exact sentence appears in `DISCLAIMER.md` and in the manifest `notes`, and is
written into the seeded pack metadata:

> This independent skill repository is not official, endorsed, sponsored,
> approved, or certified by CrossFit, LLC or its affiliates.
