# MaorForward

Capital campaign site for Maor — building permanent infrastructure and a proprietary AI engine for the next generation of Jewish media.

## Structure

The site is split into separate pages by layer:

- `index.html` — Master Hub (Maor overview + 2 pillars)
- `building.html` — Building pillar (7 blocks + property selector)
- `property.html` — Property analysis (full underwriting card)
- `ai.html` — AI Engine pillar
- `engine.html` — Engine detail pages (5 sub-pages)
- `audience.html` — Audience detail pages (3 sub-pages)

Shared assets:
- `assets/style.css` — shared styles
- `assets/app.js` — shared JS (navigation, helpers)

## Local development

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 8000
```
