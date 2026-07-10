# Micro-Interactions Lab

A focused collection of **50 accessible UI animations** built with HTML, CSS and vanilla JavaScript. The project has no build step and no JavaScript dependencies.

Open the visual overview at [`index.html`](index.html), then enter the interactive lab at [`micro-interactions-lab/index.html`](micro-interactions-lab/index.html).

## Interactions

| # | Pattern | Input | Category |
|---|---------|-------|----------|
| 01 | Magnetic pull | Pointer | Button |
| 02 | Ink ripple | Click | Button |
| 03 | Liquid fill | Hover | Button |
| 04 | Menu morph | Toggle | Button |
| 05 | Day / night | Toggle | Feedback |
| 06 | Notification bell | Click | Feedback |
| 07 | Heart burst | Click | Feedback |
| 08 | Success morph | Click | Feedback |
| 09 | Floating field | Focus | Feedback |
| 10 | Elastic tooltip | Hover / focus | Feedback |
| 11 | Skeleton wave | Loop | Loading |
| 12 | Orbital loader | Loop | Loading |
| 13 | Progress ring | Entrance / replay | Loading |
| 14 | Audio equalizer | Toggle | Loading |
| 15 | Word cascade | Entrance / replay | Text |
| 16 | Text scramble | Decode | Text |
| 17 | Perspective tilt | Pointer | Spatial |
| 18 | Card flip | Click | Spatial |
| 19 | Spring accordion | Expand | Spatial |
| 20 | Cursor spotlight | Pointer | Spatial |
| 21 | Border trace | Hover | Button |
| 22 | Split label | Hover | Button |
| 23 | Depth press | Press | Button |
| 24 | Arrow slide | Hover | Button |
| 25 | Shine sweep | Hover | Button |
| 26 | Hold progress | Hold | Button |
| 27 | Copy confirmation | Click | Feedback |
| 28 | Check toggle | Toggle | Feedback |
| 29 | Toast stack | Click | Feedback |
| 30 | Rating wave | Select | Feedback |
| 31 | Dot pulse | Loop | Loading |
| 32 | Segment spinner | Loop | Loading |
| 33 | Typing bubble | Loop | Loading |
| 34 | Wave loader | Loop | Loading |
| 35 | Conic spinner | Loop | Loading |
| 36 | Step loader | Progress | Loading |
| 37 | Letter stagger | Reveal | Text |
| 38 | Gradient flow | Loop | Text |
| 39 | Typewriter | Reveal | Text |
| 40 | Rolling number | Count | Text |
| 41 | Highlight sweep | Reveal | Text |
| 42 | Blur reveal | Reveal | Text |
| 43 | Kinetic underline | Hover | Text |
| 44 | Word rotator | Loop | Text |
| 45 | Parallax layers | Pointer | Spatial |
| 46 | Glass glare | Pointer | Spatial |
| 47 | Expanding dock | Hover / focus | Spatial |
| 48 | CSS cube | Loop | Spatial |
| 49 | Stack spread | Hover / focus | Spatial |
| 50 | Elastic drag | Drag | Spatial |

Every card includes a complete integration panel. Select the `</>` control to inspect and copy the component's rendered HTML, full scoped CSS and complete JavaScript controller. The panel also includes setup steps, reduced-motion guidance, an implementation contract and a one-click “Copy complete integration” action.

## Run locally

Start a static server from the repository root:

```bash
python -m http.server 8000
```

Open:

- Project overview: `http://localhost:8000/`
- Interactive lab: `http://localhost:8000/micro-interactions-lab/`

## Project structure

```text
web-animations/
|-- index.html
|-- 404.html
|-- catalog.css
|-- favicon.svg
|-- site.webmanifest
|-- robots.txt
|-- netlify.toml
|-- micro-interactions-lab/
|   |-- index.html
|   |-- styles.css
|   |-- script.js
|   `-- README.md
|-- docs/
|   |-- integration-guides.md
|   `-- generated/
|       |-- user-manual.md
|       |-- project-map.json
|       |-- documentation-data.json
|       `-- animation-analyses/
|           `-- 01-micro-interactions-lab.json
|-- LICENSE
`-- README.md
```

## Integration

The complete [integration guide](docs/integration-guides.md) explains how to extract a component, isolate its styles, connect it to application state and preserve accessible behavior.

The source uses matching section numbers across:

- `micro-interactions-lab/index.html` for markup;
- `micro-interactions-lab/styles.css` for presentation and keyframes;
- `micro-interactions-lab/script.js` for state and input handling.

## Deploy to Netlify

The repository is ready for a zero-build Netlify deployment. `netlify.toml` defines the publish directory, clean URLs, redirects, cache behavior and security headers.

### From a Git repository

1. Push this repository to GitHub, GitLab or Bitbucket.
2. In Netlify, select **Add new site → Import an existing project**.
3. Choose the repository.
4. Leave the build command empty.
5. Use `.` as the publish directory.
6. Deploy the site.

Netlify reads the same settings from `netlify.toml`, so no framework preset is required.

### With the Netlify CLI

```bash
npx netlify-cli deploy --dir=.
npx netlify-cli deploy --prod --dir=.
```

The first command creates a preview deployment; the second publishes to production.

### Important source requirement

The in-card integration panels extract numbered sections from the published CSS and JavaScript. Netlify serves these static assets unchanged. If you later add a bundler, Build Plugin or other minification step, configure it to preserve comments matching `/* 01 — ... */` through `/* 50 — ... */` and `// 01 — ...` controller markers.

After deployment, verify:

- `/` loads the project overview;
- `/micro-interactions-lab/` loads all 50 cards;
- `/lab` redirects to the lab;
- a `</>` control displays complete HTML, CSS and JavaScript;
- an unknown URL displays the custom 404 page.

## Accessibility

- Native buttons, inputs and links are used for interactive controls.
- Toggle state is exposed through `aria-expanded`, `aria-pressed` or `aria-checked`.
- Focus indicators remain visible.
- Tooltips and form labels are available from the keyboard.
- `prefers-reduced-motion` shortens non-essential motion.
- Pointer-driven effects remain usable without pointer input.

## Browser support

The lab targets current versions of Chrome, Edge, Firefox and Safari. It uses CSS custom properties, modern transforms, Intersection Observer and `requestAnimationFrame`.

## License

[MIT](LICENSE) — free to use, modify and integrate.
