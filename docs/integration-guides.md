# Integration Guide

This guide explains how to move any Micro-Interactions Lab pattern into another static site, application or design system.

## Standard workflow

Each interaction has the same number in the three source files:

1. Copy the component markup from `micro-interactions-lab/index.html`.
2. Copy the matching numbered section from `micro-interactions-lab/styles.css`.
3. Copy the matching controller from `micro-interactions-lab/script.js`, when required.
4. Replace the demo state with your application state.
5. Test pointer, touch, keyboard and reduced-motion behavior.

The card-level `motion:reset` and `motion:replay` events only power the demo replay controls. Remove those listeners when the extracted component does not need replay.

## Shared CSS

Define the accent and surface values on a local wrapper instead of importing the complete lab theme:

```css
.motion-component {
  --accent: #c8ff46;
  --motion-ink: #f4f2eb;
  --motion-surface: #121414;
  color: var(--motion-ink);
  background: var(--motion-surface);
}
```

Preserve a reduced-motion fallback:

```css
@media (prefers-reduced-motion: reduce) {
  .motion-component,
  .motion-component *,
  .motion-component *::before,
  .motion-component *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Component requirements

| # | Pattern | Markup | CSS | JavaScript |
|---|---------|--------|-----|------------|
| 01 | Magnetic pull | `.magnetic-stage`, `.magnetic-button` | Section 01 | Section 01 |
| 02 | Ink ripple | `.ripple-button` | Section 02 | Section 02 |
| 03 | Liquid fill | `.liquid-button` | Section 03 | None |
| 04 | Menu morph | `.menu-button` | Section 04 | Section 04 |
| 05 | Day / night | `.theme-toggle`, `.sky-stage` | Section 05 | Section 05 |
| 06 | Notification bell | `.bell-button` | Section 06 | Section 06 |
| 07 | Heart burst | `.heart-button` | Section 07 | Section 07 |
| 08 | Success morph | `.success-button` | Section 08 | Section 08 |
| 09 | Floating field | `.float-field` | Section 09 | None |
| 10 | Elastic tooltip | `.tooltip-trigger`, `.tooltip` | Section 10 | None |
| 11 | Skeleton wave | `.skeleton` | Section 11 | None |
| 12 | Orbital loader | `.orbital-loader` | Section 12 | None |
| 13 | Progress ring | `.progress-ring` | Section 13 | Optional value setter |
| 14 | Audio equalizer | `.equalizer` | Section 14 | Section 14 |
| 15 | Word cascade | `.word-stage` | Section 15 | Observer or `.is-visible` |
| 16 | Text scramble | `.scramble-text` | Section 16 | Section 16 |
| 17 | Perspective tilt | `.tilt-stage`, `.tilt-card` | Section 17 | Section 17 |
| 18 | Card flip | `.flip-card`, `.flip-inner` | Section 18 | Section 18 |
| 19 | Spring accordion | `.accordion` | Section 19 | Section 19 |
| 20 | Cursor spotlight | `.spotlight` | Section 20 | Section 20 |
| 21 | Border trace | `.trace-button` | Section 21 | None |
| 22 | Split label | `.split-button` | Section 22 | None |
| 23 | Depth press | `.depth-button` | Section 23 | None |
| 24 | Arrow slide | `.arrow-button` | Section 24 | None |
| 25 | Shine sweep | `.shine-button` | Section 25 | None |
| 26 | Hold progress | `.hold-button` | Section 26 | Section 26 |
| 27 | Copy confirmation | `.copy-chip`, `.copy-button` | Section 27 | Section 27 |
| 28 | Check toggle | `.check-toggle` | Section 28 | Section 28 |
| 29 | Toast stack | `.toast-stage`, `.toast-region` | Section 29 | Section 29 |
| 30 | Rating wave | `.rating` | Section 30 | Section 30 |
| 31 | Dot pulse | `.dot-pulse` | Section 31 | None |
| 32 | Segment spinner | `.segment-spinner` | Section 32 | None |
| 33 | Typing bubble | `.typing-bubble` | Section 33 | None |
| 34 | Wave loader | `.wave-loader` | Section 34 | None |
| 35 | Conic spinner | `.conic-spinner` | Section 35 | None |
| 36 | Step loader | `.step-loader` | Section 36 | Section 36 |
| 37 | Letter stagger | `.letter-stagger` | Section 37 | Observer or `.is-visible` |
| 38 | Gradient flow | `.gradient-text` | Section 38 | None |
| 39 | Typewriter | `.typewriter` | Section 39 | Observer or `.is-visible` |
| 40 | Rolling number | `.rolling-number` | Section 40 | Section 40 |
| 41 | Highlight sweep | `.highlight-text` | Section 41 | Observer or `.is-visible` |
| 42 | Blur reveal | `.blur-reveal` | Section 42 | Observer or `.is-visible` |
| 43 | Kinetic underline | `.kinetic-link` | Section 43 | None |
| 44 | Word rotator | `.word-rotator` | Section 44 | None |
| 45 | Parallax layers | `.parallax-layers` | Section 45 | Section 45 |
| 46 | Glass glare | `.glare-card` | Section 46 | Section 46 |
| 47 | Expanding dock | `.mini-dock` | Section 47 | None |
| 48 | CSS cube | `.cube-stage`, `.css-cube` | Section 48 | None |
| 49 | Stack spread | `.card-stack` | Section 49 | None |
| 50 | Elastic drag | `.drag-zone`, `.drag-orb` | Section 50 | Section 50 |

## Pattern-specific guidance

### 01 — Magnetic pull

Keep `.magnetic-stage` larger than the button. It is the pointer detection area that allows attraction to begin before the cursor reaches the control. Ignore touch pointers and reset transforms on `pointerleave`.

### 02 — Ink ripple

The button requires `position: relative` and `overflow: hidden`. The controller creates the ripple at the click coordinates and removes it after `animationend`.

### 03 — Liquid fill

Copy the decorative `i` element and mark it `aria-hidden="true"`. No controller is needed; hover and focus styles can trigger the fill.

### 04 — Menu morph

Connect `aria-expanded` to the real menu visibility and add `aria-controls`:

```javascript
const button = document.querySelector('.menu-button');
const menu = document.querySelector('#site-menu');

button.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') !== 'true';
  button.classList.toggle('is-open', open);
  button.setAttribute('aria-expanded', String(open));
  menu.hidden = !open;
});
```

### 05 — Day / night

Apply the selected theme class to the application root instead of the demo stage. Keep `role="switch"` and synchronize `aria-checked` with the stored preference.

### 06 — Notification bell

Replace the static badge with the real unread count. Apply `.is-read` only when the notification state has been updated successfully.

### 07 — Heart burst

Treat `.is-liked` as a view of your saved favorite state. Keep `aria-pressed` synchronized and revert optimistic UI if an API request fails.

### 08 — Success morph

Trigger `.is-success` after the underlying operation completes. For important actions, also announce completion through an `aria-live="polite"` status element.

### 09 — Floating field

The input needs `placeholder=" "` because the CSS relies on `:placeholder-shown`. Use the correct input type, label and autocomplete value for the real field.

### 10 — Elastic tooltip

Give every tooltip a unique ID and reference it from `aria-describedby`. Do not place essential actions inside a hover-only tooltip.

### 11 — Skeleton wave

Match the skeleton dimensions to the final content to prevent layout shift. Replace the skeleton when data arrives; do not leave it running behind loaded content.

### 12 — Orbital loader

This is an indeterminate status indicator. Add `role="status"` and an accessible label. Use the progress ring when a real percentage is available.

### 13 — Progress ring

The demo radius is `50`, giving a circumference of approximately `314.16`:

```javascript
function setProgress(element, value) {
  const progress = Math.min(100, Math.max(0, value));
  const circumference = 314.16;
  element.querySelector('.ring-value').style.strokeDashoffset =
    circumference * (1 - progress / 100);
  element.setAttribute('aria-valuenow', String(progress));
}
```

Update the visible value and `aria-valuenow` from the same source.

### 14 — Audio equalizer

The demo is visual only. In a real player, derive `.is-paused`, `aria-pressed` and `aria-label` from the actual audio state.

### 15 — Word cascade

Add `.is-visible` to a parent when the heading enters the viewport. Keep a complete `aria-label` on the container because the visual text is split into multiple elements.

### 16 — Text scramble

Store the readable final value in `data-text`. Use the effect on short labels or headings and always finish on the original string.

### 17 — Perspective tilt

Perspective belongs on the parent stage. Keep pointer coordinates local to the card, limit rotation and reset the transform when the pointer leaves.

### 18 — Card flip

Front and back belong inside `.flip-inner`. If the back contains interactive controls, do not make the entire card a button; provide a separate flip control.

### 19 — Spring accordion

Give every panel a unique ID and match it with the trigger's `aria-controls`. Keep `aria-expanded` synchronized with `.is-open`.

### 20 — Cursor spotlight

The spotlight is progressive enhancement. Text and controls must remain readable without pointer coordinates or the decorative gradient.

### 21 — Border trace

Keep the inner button surface above the rotating conic gradient. The animation belongs to hover and focus states; do not run it continuously across many controls.

### 22 — Split label

The two visual labels repeat the same text and should be hidden from assistive technology. Provide the button's accessible name with `aria-label` or a visually hidden label.

### 23 — Depth press

Reduce vertical offset and shadow depth together in `:active`. The resting state must still look interactive without relying on the simulated shadow.

### 24 — Arrow slide

Mark both arrow layers as decorative. Keep the visible label stationary enough to remain readable during the directional transition.

### 25 — Shine sweep

Use a short, low-opacity highlight and keep text contrast stable throughout the sweep. Avoid applying this continuous effect to a large button group.

### 26 — Hold progress

Support pointer and keyboard hold events. Cancel progress when input ends early and expose a clear confirmed state after the timer completes.

### 27 — Copy confirmation

Use the Clipboard API when available and handle rejection in production. Update the existing button rather than injecting a second status that changes layout.

### 28 — Check toggle

Use `role="switch"` and synchronize `aria-checked` with the visual thumb, track and checkmark state.

### 29 — Toast stack

Place messages in an `aria-live="polite"` region, limit simultaneous items and allow enough reading time. Important errors should not disappear automatically.

### 30 — Rating wave

Give each star a numeric accessible label and retain a static selected color. The wave is feedback, not the only indication of the chosen value.

### 31 — Dot pulse

Use the wrapper as an accessible status while keeping the animated dots decorative. This pattern represents indeterminate work only.

### 32 — Segment spinner

Expose loading state on the wrapper, not on each segment. The stepped rotation should stop when content is ready or when reduced motion is requested.

### 33 — Typing bubble

Use an explicit status such as “Someone is typing”. Remove the component when the conversation state changes.

### 34 — Wave loader

The bars need no JavaScript; staggered delays create the wave. Keep bar count and motion small when several loaders can appear at once.

### 35 — Conic spinner

The inner span masks a conic gradient into a ring. Provide a solid fallback for browsers that cannot render `conic-gradient`.

### 36 — Step loader

Update the completed steps, visible label and `aria-valuenow` from one source of truth. Use meaningful step names from the actual workflow.

### 37 — Letter stagger

Keep the complete word in `aria-label` because visual letters are separated. Trigger the parent `.is-visible` class only once unless replay is intentional.

### 38 — Gradient flow

Declare a readable solid text color before applying clipped gradient text. Disable the loop under reduced motion.

### 39 — Typewriter

Match `steps()` and final width to the exact character count. Keep the complete phrase available to assistive technology from the start.

### 40 — Rolling number

Read the target from application data, cancel previous frames before restarting and render the final value immediately under reduced motion.

### 41 — Highlight sweep

Use semantic `mark` so emphasis remains understandable before animation. Animate background size without hiding the phrase.

### 42 — Blur reveal

Keep the blur brief and preserve DOM reading order. Do not use blur as the only way to conceal sensitive or conditional content.

### 43 — Kinetic underline

The underline is decorative. Preserve native link semantics, focus indication and enough contrast without the hover animation.

### 44 — Word rotator

Repeat the first word at the end of the reel for a seamless loop. Provide static alternative copy when every rotating word is important.

### 45 — Parallax layers

Move each plane at a different pointer ratio, use local coordinates and reset every custom property on pointer leave or blur.

### 46 — Glass glare

Drive the radial reflection with local percentages. The glare must not reduce text contrast or become necessary for understanding depth.

### 47 — Expanding dock

Every icon requires an accessible label. Mirror hover expansion on keyboard focus and leave enough spacing to prevent accidental activation.

### 48 — CSS cube

Perspective belongs on the stage and `transform-style: preserve-3d` belongs on the cube. Mark a purely decorative cube as hidden from assistive technology.

### 49 — Stack spread

Treat the stack as one button unless each card becomes independently actionable. Keep the resting item count visible without hover.

### 50 — Elastic drag

Use pointer capture, constrain coordinates to the drag zone and reset transform on release or cancellation. Keep a keyboard-accessible alternative for any real drag action.

## Framework integration

### React and Vue

Initialize pointer listeners and observers after mount. Remove listeners, timers, observers and animation frames during component cleanup. Do not rely on `DOMContentLoaded` inside a component lifecycle.

### CMS platforms

Load component CSS and JavaScript as scoped assets. Avoid copying global catalog rules for `body`, `button` or headings into a site theme.

## Production checklist

- The component works without the lab's global layout CSS.
- Focus, Enter and Space work where expected.
- ARIA state always matches visual state.
- Reduced motion produces an understandable result.
- Touch behavior does not depend on hover.
- Timers, observers and animation frames are cleaned up in SPAs.
- Loading indicators expose an accessible status.
- Color contrast is checked against the host interface.
