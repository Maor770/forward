# Working rules for this repo

1. **Push every change to `main`** so the user can verify on the live site immediately. Do not develop on feature branches unless explicitly told otherwise — the user has overridden the default branch policy for this project.

2. **Always open the site locally and visually verify** every change before reporting it as done. Use a local static server (`python3 -m http.server`) plus a headless browser (Playwright at `/opt/pw-browsers`) to load the page and screenshot the affected area. Only confirm completion to the user after the verification screenshot matches the requested behavior.
