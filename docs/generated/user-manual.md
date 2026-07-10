# Micro-Interactions Lab
## User and Technical Manual

**Version:** 3.0.0<br>
**Updated:** July 10, 2026<br>
**License:** MIT

## Overview

Micro-Interactions Lab contains 50 focused UI animations built with HTML, CSS and vanilla JavaScript. It can run directly from a static server and has no runtime dependencies.

## Start the project

From the repository root:

```bash
python -m http.server 8000
```

Open:

- `http://localhost:8000/` for the project overview;
- `http://localhost:8000/micro-interactions-lab/` for the interactive catalog.

## Lab interface

The lab is organized into five categories: Button, Feedback, Loading, Text and Spatial. Category filters update the visible cards. “Replay all” restarts visible entrance animations.

Every card provides two controls:

- `</>` opens a complete integration panel with the rendered HTML, full scoped CSS, JavaScript controller, setup steps and copy controls;
- `↻` replays the card animation.

Hover or keyboard focus shows a short label for the integration control. Activating the control opens the complete panel; Escape or the close button dismisses it and restores focus.

## Interaction index

1. **Magnetic pull** — pointer-based attraction around a circular CTA.
2. **Ink ripple** — a click wave created at local coordinates.
3. **Liquid fill** — a CSS-only fluid hover surface.
4. **Menu morph** — three lines transition into a close icon.
5. **Day / night** — an accessible theme switch with moving celestial body.
6. **Notification bell** — bell motion and an elastic unread badge.
7. **Heart burst** — favorite state with pop and radial feedback.
8. **Success morph** — a button collapses into a drawn SVG checkmark.
9. **Floating field** — focus and content move the field label.
10. **Elastic tooltip** — contextual help for hover and keyboard focus.
11. **Skeleton wave** — a lightweight loading shimmer.
12. **Orbital loader** — three CSS satellites around a glowing core.
13. **Progress ring** — SVG stroke animation to 72 percent.
14. **Audio equalizer** — six asynchronous bars with pause state.
15. **Word cascade** — masked words enter in sequence.
16. **Text scramble** — random glyphs resolve into readable text.
17. **Perspective tilt** — pointer-driven depth and local highlight.
18. **Card flip** — front and back connected by a 3D rotation.
19. **Spring accordion** — fluid expansion with synchronized ARIA state.
20. **Cursor spotlight** — a local gradient follows the pointer.
21. **Border trace** — a conic highlight travels around the control edge.
22. **Split label** — two text layers exchange places on hover.
23. **Depth press** — offset and shadow simulate a physical press.
24. **Arrow slide** — directional icons exchange positions around a stable label.
25. **Shine sweep** — a restrained reflection crosses the button surface.
26. **Hold progress** — pointer or keyboard hold completes a timed confirmation.
27. **Copy confirmation** — clipboard feedback changes inside the original control.
28. **Check toggle** — track, thumb and checkmark share accessible switch state.
29. **Toast stack** — live notifications enter, stack and dismiss automatically.
30. **Rating wave** — star selection travels across the chosen range.
31. **Dot pulse** — three delayed dots communicate background activity.
32. **Segment spinner** — eight opacity steps form a rotating indicator.
33. **Typing bubble** — conversational dots animate inside a message surface.
34. **Wave loader** — staggered bars produce a continuous loading wave.
35. **Conic spinner** — a masked conic gradient creates a circular loader.
36. **Step loader** — four discrete states expose visible and ARIA progress.
37. **Letter stagger** — individual letters rise into a complete word.
38. **Gradient flow** — a moving color field remains clipped to text.
39. **Typewriter** — step timing reveals a line behind an animated caret.
40. **Rolling number** — a numeric value eases toward application data.
41. **Highlight sweep** — a marker surface reveals a semantic phrase.
42. **Blur reveal** — words resolve from blur and vertical distance.
43. **Kinetic underline** — an underline exits and returns from the opposite side.
44. **Word rotator** — a vertical reel cycles through product values.
45. **Parallax layers** — three planes move at different pointer ratios.
46. **Glass glare** — a soft reflection follows local coordinates.
47. **Expanding dock** — icon controls grow on hover and keyboard focus.
48. **CSS cube** — six transformed planes form a rotating object.
49. **Stack spread** — layered cards fan out from a shared origin.
50. **Elastic drag** — a constrained draggable orb springs back on release.

## Accessibility

- Interactive elements use native controls.
- Toggle state is exposed through appropriate ARIA attributes.
- Integration panels use labelled dialog semantics, visible focus triggers and explicit close controls.
- The page includes a skip link and high-contrast focus outlines.
- Pointer-only effects degrade to stable, usable components.
- `prefers-reduced-motion` shortens automatic animations and transitions.

## Integration

Source sections use the same interaction number across HTML, CSS and JavaScript. The complete guide is available at [`docs/integration-guides.md`](../integration-guides.md).

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

## Browser support

The project targets current Chrome, Edge, Firefox and Safari releases. It uses CSS custom properties, Intersection Observer, pointer events and `requestAnimationFrame`.

## Netlify deployment

The repository includes `netlify.toml` and requires no build command. Import the Git repository in Netlify and publish the repository root (`.`).

The configuration provides:

- redirects from `/lab` and `/interactions` to the complete catalog;
- a custom `404.html` page;
- Content Security Policy and other security headers;
- cache behavior for HTML and lab assets;
- Pretty URLs while preserving the static CSS and JavaScript source used by integration panels.

If a future build tool or plugin minifies assets, configure it to preserve the numbered CSS and JavaScript comments. After deployment, open an integration panel and confirm that its complete source snippets load.

## License

The repository is released under the MIT License.
