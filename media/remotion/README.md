# Demo video source

`CrossFitPackDemo.tsx` is the [Remotion](https://www.remotion.dev/) composition
for the pack's flagship demo video (the one shown on the Skill Me pack page).

It is archived here so the source travels with the pack. It is **not** wired into
this repo's tooling (this repo has no Remotion dependency); it is rendered inside
the Skill Me Remotion project.

## Branding

The composition uses a neutral barbell glyph and a **"Applies the CrossFit®
methodology"** badge — descriptive, affiliate-licensed methodology use. It does
**not** use the corporate CrossFit logo or imply endorsement/partnership, and the
outro keeps the "not endorsed or certified by CrossFit, LLC" line. See
[../../assets/brand/brand-authorization.json](../../assets/brand/brand-authorization.json)
and [../../docs/branding-and-trademarks.md](../../docs/branding-and-trademarks.md).

## How it was rendered & published

1. Place `CrossFitPackDemo.tsx` in the Skill Me Remotion project
   (`remotion-skillme-ai-engineer/src/compositions/`) and register it in that
   project's `Root.tsx` (composition id `CrossFitPackDemo`, 1920×1080, 30fps).
2. Render: `npx remotion render CrossFitPackDemo out/crossfit-pack.mp4`
   and a poster still: `npx remotion still CrossFitPackDemo out/crossfit-pack-poster.jpg --frame=62`.
3. Publish: the skillshelf script `scripts/upload-crossfit-demo.mjs` uploads the
   MP4 + poster to the `demos` Supabase bucket and wires the `media_assets`
   pack/landscape row (subject `pack` / `crossfit-coaching`) plus the pack poster.

The pack page reads the demo from `media_assets` at runtime, so republishing does
not require a redeploy.

> Note: Skill Me's canonical demo pipeline (`skillme-demos` repo) is data-driven
> via a generic `PackDemo`. This bespoke composition was authored for a richer,
> CrossFit-specific cut; a future cleanup could migrate it to that pipeline.
