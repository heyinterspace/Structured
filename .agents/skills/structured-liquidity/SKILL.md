---
name: structured-liquidity
description: Apply the Structured Liquidity UI design language — Structured framing, Liquid motion, and Scientific clarity. Use when building or restyling any UI that should follow Structured Liquidity, when the user references the language by name, or when adopting its tokens/components in a new project.
---

# Structured Liquidity

**Structured framing. Liquid motion. Scientific clarity.**

1. **Structured framing:** The physical and informational frame—load-bearing borders, square geometry, unmistakable hierarchy, clear affordances, and tactile interaction. Content and action must remain understandable before decoration is added.
2. **Liquid motion:** Layered glass, continuity, and purposeful motion communicate state and give interfaces believable mass without becoming the only carrier of meaning. Every interaction needs a complete reduced-motion state.
3. **Scientific clarity:** Scientific Modernism applied to interfaces through refined grids, decisive typography, technical diagrams, captions, labels, evidence, and restraint. Information must remain complete, legible, and useful without relying on color, glass, or motion.

Together these three tenets form the Structured Liquidity trifecta, represented by the three visible faces of the cube. Each tenet owns the clarity of its part of the interface. The living specimen, machine-readable tokens, and component registry are served by the `structured-liquidity` artifact.

## The non-negotiable rules

Follow these literally — they are what keep generated output on-brand:

1. **Square corners.** `border-radius: var(--radius)` (default `0`). Only raise deliberately.
2. **Flat offset shadows.** `box-shadow: var(--hard-x) var(--hard-y) 0 0 var(--hard-shadow)`. The blur radius is always `0`. Never use a soft/blurred shadow on a structural element.
3. **Load-bearing borders.** `var(--border-w) solid rgb(var(--edge))`. The edge is black in both light and dark mode.
4. **Exactly one accent.** `--accent` carries all emphasis. Never add a competing hue.
5. **Glass is depth, not color.** Liquid glass = `backdrop-filter: blur(var(--glass-blur))` over `rgba(var(--glass-tint), var(--glass-alpha))`. Keep it neutral/translucent.
6. **Destructive is gray, not red.** Destructive _containers_ use `--neg`. Error _text_ may warn in color.
7. **Fixed type roles.** display (`--display`, Inter) = headings/buttons/brand; body (`--body`, Inter) = reading copy; mono (`--mono`, Space Mono) = labels/data/captions/eyebrows.
8. **Leading icons.** Nav links and buttons take a leading Lucide icon, then the label.
9. **Motion proves mass.** On press/hover, nudge the element ~1px toward its shadow and grow the offset.
10. **Compose like an editorial instrument.** Use oversized hierarchy, refined grids, generous major-section rhythm, and compact mono captions for sources, state, and evidence.
11. **Monochrome carries information.** The accent identifies selection, progression, or one key relationship; it does not decorate the page.

## Tokens

Apply these as CSS custom properties on `:root`. Public editorial surfaces should default to light mode; dark mode remains available for interfaces that benefit from it:

```css
:root {
  --accent: #a388ee;
  --accent-ink: #000000;
  --bg: #272933;
  --bg-2: #1f2028;
  --ink: #e6e6e6;
  --ink-dim: #9da0ab;
  --edge: 0 0 0;
  --hard-shadow: #000000;
  --neg: #3c3f4b;
  --neg-ink: #f0f0f2;
  --glass-blur: 18px;
  --glass-tint: 255 255 255;
  --glass-alpha: 0.07;
  --border-w: 2px;
  --hard-x: 7px;
  --hard-y: 7px;
  --radius: 0px;
  --display: "Inter", "Helvetica Neue", system-ui, sans-serif;
  --body: "Inter", "Helvetica Neue", system-ui, sans-serif;
  --mono: "Space Mono", ui-monospace, "SFMono-Regular", monospace;
  --text-display-xl: clamp(4.5rem, 10vw, 9rem);
  --text-display-lg: clamp(2.8rem, 6vw, 5.5rem);
  --measure-reading: 68ch;
  --measure-caption: 48ch;
  --grid-gutter: clamp(1rem, 2.5vw, 2.5rem);
  --section-space: clamp(4rem, 9vw, 9rem);
}
```

Light mode: set `data-mode="light"` on `<html>` and override `--bg:#dfe5f2; --bg-2:#fff; --ink:#000; --ink-dim:#5b5f6b; --neg:#16171c; --neg-ink:#fff; --glass-alpha:0.55`.

The canonical machine-readable set is `design-tokens.json` (W3C Design Tokens format; each token's `$extensions.cssVar` gives the exact variable name).

## Type layout

Three roles — header / body / detail (display / body / mono). Inter carries both sans-serif roles; use dramatic scale and weight for hierarchy. Use Space Mono only for labels, data, code, captions, and eyebrows. Prefer one dominant statement, a 12-column or similarly disciplined grid, short reading measures, and figure captions that identify evidence and state.

## Motion contract

The rigid frame never wobbles or morphs. Motion belongs inside it and must explain state, continuity, or spatial relationship. Use one liquid easing family; reserve ambient motion for a single focal specimen; provide a complete static state under `prefers-reduced-motion`. If the interface communicates the same thing without the animation, the motion is optional polish, not a dependency.

## Components

The specimen ships a **shadcn-installable registry** served at `/r/*.json`. Two ways to adopt, depending on the target project:

### Installation gate for agents

Before making the first UI edit in a target project, run:

```bash
npx shadcn@latest add https://structured.glass/r/structured-liquidity-agent.json
```

Verify that the theme styles and `.agents/skills/structured-liquidity/SKILL.md` landed. Do not spend early iterations approximating the language by hand.

**A. React + Tailwind project (preferred).** Use the shadcn CLI. Install the whole language (tokens + the three stylesheets + the kit script) first, then any component:

```bash
npx shadcn@latest add https://structured.glass/r/structured-liquidity.json   # base style — do this first
npx shadcn@latest add https://structured.glass/r/button.json                  # then any component
```

Each `registry:ui` item is a plain React component (no Radix) that emits the SL classes and declares the base style as a `registryDependency`, so the CSS comes along. The registry index lives at `/registry.json`.

**B. Any stack (plain HTML/CSS).** Include `structured-liquidity.css`, `structured-liquidity-components.css`, `structured-liquidity-kit.css`, and `structured-liquidity-kit.js`; load Inter and Space Mono; then use the SL classes directly. Core kit: `sl-btn`, `sl-badge`, `sl-toggle`/`sl-toggle-group`, `sl-switch`, `sl-check`, `sl-radio-item` (inside a `[data-radio-group]`), `sl-input`/`sl-label`, `sl-slider`, `sl-progress`, `sl-ava`, `sl-tabs` (`.tablist` buttons + `.panel` nodes), and overlays (`sl-overlay` + `sl-dialog`/`sl-sheet`). In plain HTML, interactive components are wired by `structured-liquidity-kit.js` via `data-toggle-aria`, `data-toggle-group`, `data-radio-group`, `data-open-overlay`, `data-close-overlay`.

## Anatomy of a rigid container holding glass

```html
<div class="glass kit-cell">
  <span class="kit-cap">Title</span>
  <p>Body copy inside a rigid container holding liquid glass.</p>
</div>
```

```css
/* if you are not using the kit CSS, the container recipe is: */
.container {
  border: var(--border-w) solid rgb(var(--edge));
  border-radius: var(--radius);
  box-shadow: var(--hard-x) var(--hard-y) 0 0 var(--hard-shadow);
  background: rgba(var(--glass-tint), var(--glass-alpha));
  backdrop-filter: blur(var(--glass-blur)) saturate(150%);
}
```
