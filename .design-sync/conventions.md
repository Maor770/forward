# MaorForward Design System — usage conventions

A small React component library extracted from the maorforward.org capital-campaign
site. Warm cream/parchment + deep-navy palette, condensed **Fredoka** headings, and
**Noto Sans** body copy. Use it to build on-brand campaign pages, donor/landing
sections, and impact callouts.

## Setup

1. Import the stylesheet **once** at your app root — it defines all tokens, fonts, and
   component styles:
   ```js
   import "@maorforward/ds/styles.css";
   ```
2. There is **no provider to wrap**. Tokens live in `:root`, so any component is styled
   the moment the stylesheet is loaded.
3. Fonts (Fredoka, Vidaloka, Noto Sans, Cormorant Garamond) load via a remote
   `@import` from Google Fonts inside `styles.css` — nothing to configure.

## Tonal surfaces — the one rule that matters

Sections alternate between **light parchment** and **deep navy**. Components are built
for one or the other, so place them on the matching background or they lose contrast.
Use the `Surface` component (or its classes) to set the backdrop:

- `<Surface tone="cream">` / `tone="paper"` — light. Put cream-oriented pieces here:
  `Hero`, `PillarCard` (self-framed), `Wordmark`, `Badge` (gold), light `SectionHeading tone="cream"`.
- `<Surface tone="navy">` / `tone="elevated"` — dark. Put light-text pieces here:
  `StatCard`, `AudienceCard`, `StakesCard`, `ExploreCta`, default `SectionHeading`,
  `Badge tone="onDark"`. (`PointCard` and `Footer` carry their own dark fill.)

## Styling idiom

This is a **CSS custom-property token system**. Components style themselves via their
own class names — you do not pass style props. For your own layout glue, reference the
real tokens rather than inventing hex values or fonts. Authoritative names live in
`styles.css` `:root`; the most-used:

| Purpose | Token |
|---|---|
| Light backgrounds | `--v3-cream` `--v3-cream-soft` `--v3-cream-deep` (and `#E7DFD5` paper) |
| Dark backgrounds | `--v3-blue-deep` `--v3-blue-deeper` `--v3-blue-elevated` |
| Warm gold (on light) | `--v3-gold-warm` `--v3-gold-glow` |
| Bright gold (on dark) | `--gold-bright` `--gold` `--gold-deep` |
| Body / brown text | `--v3-brown-soft` `--text-warm` |
| Heading font | `--v3-heading` (Fredoka, condensed `wdth 75`) |
| Body font | `--sans` (Noto Sans) |
| Serif (wordmark) | `--serif` (Vidaloka) |

For a heading that matches the DS, add the `mf-heading` class (Fredoka 500, condensed).
Emphasis inside body copy uses `<strong>`/`<em>`, which the components auto-color gold.

## Where the truth lives

- `styles.css` — every token and component rule (read it before styling anything custom).
- `components/<group>/<Name>/<Name>.d.ts` — the exact props for each component.
- `components/<group>/<Name>/<Name>.prompt.md` — per-component usage notes.

## Idiomatic example

```jsx
import { Surface, SectionHeading, StatCard } from "@maorforward/ds";

<Surface tone="navy">
  <SectionHeading lede={<>The Rebbe gave us a clear directive: <strong>prepare the world for Moshiach.</strong></>}>
    A Generation Desperate for the Message
  </SectionHeading>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "2rem", marginTop: "2rem" }}>
    <StatCard value="1,137" label="English Videos" plus />
    <StatCard value="103,000" label="Maor Users" plus />
  </div>
</Surface>
```

Available components: `Surface`, `Wordmark`, `Badge`, `Button`, `IconButton`, `Hero`,
`StatCard`, `SectionHeading`, `AudienceCard`, `PillarCard`, `PointCard`, `StakesCard`,
`ExploreCta`, `Footer`.
