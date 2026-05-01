# MaorForward

Capital campaign site for Maor — building permanent infrastructure and a proprietary AI engine for the next generation of Jewish media.

## Site structure

The site is split into separate pages by layer. Each page is self-contained and shares CSS/JS via the `assets/` folder.

| File | Layer | Description |
|------|-------|-------------|
| `index.html`    | master   | Maor overview + 2 pillars (Building & AI Engine) |
| `building.html` | building | Building pillar (7 blocks + property selector) |
| `property.html` | property | Property analysis (full underwriting card) |
| `ai.html`       | ai       | AI Engine pillar |
| `engine.html`   | engine   | Engine detail pages (5 sub-pages, slug via hash) |
| `audience.html` | audience | Audience detail pages (3 sub-pages, slug via hash) |

### Shared assets

- `assets/style.css` — all CSS (palette, typography, layouts, components)
- `assets/app.js`    — all JS (navigation, save-panel, animations, hash routing)

### Cross-page navigation

`showLayer()` is wrapped in `app.js` to navigate to the correct HTML file when the requested layer isn't on the current page. The hash (e.g. `#ai/engines/script-engine`) is preserved across page transitions, so deep links keep working.

## Local development

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Archive

The original single-file site is preserved at `_archive/Main_Updated_1.original.html` for reference.
