# Branding and Trademarks

This repository is independent and **not endorsed by, sponsored by, approved by,
or certified by CrossFit, LLC**. "CrossFit®" is a registered trademark of
CrossFit, LLC.

**Methodology-use authorization (current status).** The pack is maintained by a
**licensed CrossFit affiliate and CrossFit-L2 trainer in good standing**. Under
the licensee's CrossFit **Affiliate Agreement** and **Trainer Agreement**, the
CrossFit® word mark is used **descriptively** (adjective + registered symbol) to
identify content that **applies the CrossFit methodology**. This is methodology
use, **not** a claim of endorsement, partnership, or that this is an official
CrossFit, LLC product. The licensee's identity is withheld by request and is
confirmable by CrossFit, LLC on request. See
[../assets/brand/brand-authorization.json](../assets/brand/brand-authorization.json).

## Content rules (enforced by review; some by tooling)

1. **Capitalize CrossFit** — capital C, capital F. Not "Crossfit", "crossfit",
   or "CROSSFIT" in prose.
2. **Use it as an adjective, not a verb.** Write "CrossFit training", "a CrossFit
   class", "a CrossFit athlete". Never "to CrossFit" / "CrossFitting".
3. **Never claim authority.** Do not call the repository, the pack, or any skill
   "official", "certified", "endorsed", "sponsored", or "approved".
4. **Nominative use is fine.** Referring to CrossFit training to describe what the
   content is about is permitted and expected.
5. **Neutral display name, CrossFit® as a methodology badge.** Even though
   methodology use is authorized (`assets/brand/brand-authorization.json` →
   `authorized: true`, scope: affiliate/trainer methodology license), the pack
   **name** stays neutral — **Functional Fitness Coaching Pack** — so it is never
   mistaken for an official CrossFit, LLC product. CrossFit® appears as a
   **methodology badge / tagline** ("Applies the CrossFit® methodology"), with the
   registered symbol, used as an adjective. The mark is **not** added to the
   official-partner / authored-by registry (`lib/partners.ts`), which would imply
   corporate authorship.

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
