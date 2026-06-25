# design-sync notes — @maorforward/ds

## What this is

This repo (`maorforward.org`) is a **static HTML marketing site**, not a component
library. The design system synced here was **authored from scratch** by extracting the
site's real CSS/tokens into a small React + TS package at `design-system/`. The package
is the source of truth for the sync; the bundle is built from its `dist/`.

- Package: `design-system/` → `@maorforward/ds` (14 components + `tokens` export).
- Source palette: the live homepage's v3 cream/parchment system (`assets/style-v3.css`)
  plus the navy/gold base (`assets/style.css`). Both ship — the site uses both.
- Components map 1:1 to site sections: Wordmark, Badge, Button, IconButton, Hero,
  StatCard, SectionHeading, AudienceCard, PillarCard, PointCard, StakesCard, ExploreCta,
  Footer, plus a `Surface` tonal-backdrop helper.

## Build / re-sync mechanics

- Build the package first: `cd design-system && npm install && npm run build`
  (esbuild → `dist/index.js`, tsc → `.d.ts`, stylesheet copied to `dist/styles.css`).
  Recorded as `cfg.buildCmd`.
- Converter entry/node-modules (run from repo root):
  `--entry ./design-system/dist/index.js --node-modules ./design-system/node_modules`.
- Render check chromium: this env has no playwright browser download. Point
  `DS_CHROMIUM_PATH=/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell`
  and install the `playwright` npm package in `.ds-sync/` (executablePath bypasses the
  version pin). On another machine, install playwright + chromium normally instead.
- `cfg.overrides.*.cardMode = "column"` is set for the multi-item stories
  (AudienceCard, ExploreCta, Hero, SectionHeading, StakesCard, StatCard) — they render
  wider than a grid cell otherwise (`[GRID_OVERFLOW]`). Do not remove.

## Known render warns (triaged, expected — not new)

- `[FONT_REMOTE]` for Fredoka / Inter / Vidaloka / Cormorant Garamond — fonts load via a
  Google Fonts `@import` in `styles.css`, exactly as the live site does. Intentional;
  the bundle ships no local font files by design.

## Preview authoring notes

- Image-bearing previews (Hero, PillarCard, AudienceCard) use **inline SVG data URIs** as
  stand-ins for the site's real PNG/JPG assets, so cards are self-contained.
  - GOTCHA: pass **raw** hex (`#9e6e36`) into the data-URI builders, NOT pre-encoded
    `%23...` — `encodeURIComponent` re-encodes the `%`, producing an invalid color that
    renders black. (This bit AudienceCard + PillarCard on the first pass.)
- All 14 components have authored previews under `.design-sync/previews/`, every cell
  graded `good`.

## Upload status — ACTION REQUIRED

The bundle is built, validated (render check clean, exit 0), and fully graded, but it was
**NOT uploaded**: this environment (claude.ai/code web) has no interactive `/design-login`,
so DesignSync can't create the project or push files. To finish:

1. Run design-sync from an environment with Claude Design auth (interactive terminal, or
   use Claude Design's "Send to Claude Code Web").
2. `/design-sync` will rebuild deterministically from the committed inputs and upload.
   Because no `projectId` is pinned yet, it will create a fresh project (first-time path).

## Re-sync risks (watch-list for the next run)

- **The DS is hand-authored, not vendor-shipped.** If the live site's CSS/tokens change
  (`assets/style*.css`), this package will NOT auto-update — it must be edited by hand to
  stay faithful. Treat `design-system/src/styles.css` as a mirror that can drift.
- **Preview images are data-URI stand-ins**, not the site's real assets. If you want real
  imagery in the cards, wire the actual `images/*` files (they aren't bundled today).
- **Fonts are remote-only.** A design built with this DS depends on Google Fonts being
  reachable at render time; nothing local is shipped.
- **No `projectId` pinned** — first authorized run creates a new project. Once it uploads,
  the id is recorded in `config.json` and future syncs target it.
- Playwright/chromium pinning is env-specific (see Build mechanics) — the
  `DS_CHROMIUM_PATH` trick is for this container only.
