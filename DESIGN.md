---
name: Astro Starter
description: A neutral, brand-swappable Astro base: stone paper, strong Archivo type, one cobalt accent.
colors:
  brand-primary: "#3358d4"
  brand-dark: "#171406"
  brand-light: "#ffffff"
  paper: "oklch(97% 0.001 106.424)"
  surface: "oklch(100% 0 0)"
  surface-lowered: "oklch(97% 0 0)"
  hairline: "oklch(92.2% 0 0)"
  ink: "oklch(20.5% 0 0)"
  ink-quiet: "oklch(43.9% 0 0)"
  ink-quieter: "oklch(55.6% 0 0)"
  block-loud: "oklch(26.9% 0 0)"
  focus-pink: "oklch(59.2% 0.249 0.584)"
  night: "oklch(14.5% 0 0)"
  night-ink: "oklch(87% 0 0)"
typography:
  display:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif"
    fontSize: "clamp(2rem, 1.64rem + 1.82vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.25
  headline:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif"
    fontSize: "clamp(1.75rem, 1.57rem + 0.91vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.25
  title:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif"
    fontSize: "clamp(1.5rem, 1.36rem + 0.68vw, 1.875rem)"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.23vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.04ch"
rounded:
  s: "0.2rem"
  lg: "0.5rem"
  full: "9999px"
spacing:
  3xs: "0.25rem"
  xs: "clamp(0.6875rem, 0.66rem + 0.11vw, 0.75rem)"
  sm: "clamp(0.875rem, 0.83rem + 0.23vw, 1rem)"
  md: "clamp(1.3125rem, 1.24rem + 0.34vw, 1.5rem)"
  lg: "clamp(1.75rem, 1.66rem + 0.45vw, 2rem)"
  xl: "clamp(2.625rem, 2.49rem + 0.68vw, 3rem)"
components:
  button-primary:
    backgroundColor: "{colors.brand-primary}"
    textColor: "{colors.brand-light}"
    typography: "{typography.label}"
    rounded: "0"
    padding: "0.5em 0.75em"
  button-secondary:
    backgroundColor: "{colors.block-loud}"
    textColor: "{colors.surface-lowered}"
    typography: "{typography.label}"
    rounded: "0"
    padding: "0.5em 0.75em"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.s}"
    padding: "0.5em 0.8em"
  site-foot:
    backgroundColor: "{colors.block-loud}"
    textColor: "{colors.brand-light}"
    padding: "{spacing.md} 0"
  closer:
    backgroundColor: "{colors.brand-primary}"
    textColor: "{colors.brand-light}"
---

# Design System: Astro Starter

## Overview

**Creative North Star: "The Blank Letterhead"**

This is the stationery a client's brand gets printed onto. The page is a warm stone paper with near-black ink, one saturated cobalt, and Archivo doing most of the work. Nothing is decorated and nothing is branded, because every visual decision exists to be overwritten by changing tokens. The system's job is to look finished while staying neutral.

Density is relaxed and the type is large: fluid scales for both text and space, 70ch reading measures, generous flow between blocks. Labels and navigation are the one blunt note, set in small bold uppercase with tight tracking, like the printed fields on a form. Everything else is quiet.

Dark mode is a first-class twin of the same sheet, not an afterthought: paper becomes near-black, ink lifts to light grey, and the footer inverts to a light slab.

**Key Characteristics:**
- Stone paper and near-black ink, with a single cobalt accent used sparingly.
- Fluid type and spacing scales; nothing is a fixed pixel step.
- Flat surfaces with hairline strokes; depth comes from tone, not shadow.
- Square, uppercase, bold buttons and navigation.
- Every value is a token; brand swaps happen in `src/design-tokens/`.

## Colors

A restrained palette: one chromatic accent over a neutral stone-and-grey ladder, with a second accent (pink) reserved for focus.

### Primary
- **Cobalt Signal** (`#3358d4`, `brand-primary`): the only brand colour. Fills primary buttons, the closer block and the hero skip-link disc; also the `accent-color` for form controls. White text on it clears AA.

### Secondary
- **Focus Pink** (`oklch(59.2% 0.249 0.584)` light, pink-500 in dark): the global focus ring and nothing else. It is deliberately not the brand colour, so keyboard focus stays visible on cobalt surfaces.

### Neutral
- **Stone Paper** (`oklch(97% 0.001 106.424)`, `paper`): the page background in light mode. A faint warm tint, not white.
- **Page White** (`oklch(100% 0 0)`, `surface`): raised surfaces and form fields.
- **Lowered Grey** (`oklch(97% 0 0)`, `surface-lowered`): disabled fields and recessed fills.
- **Hairline Grey** (`oklch(92.2% 0 0)`, `hairline`): every stroke, table rule and form border.
- **Ink** (`oklch(20.5% 0 0)`, `ink`): body text.
- **Quiet Ink** (`oklch(43.9% 0 0)`, `ink-quiet`) and **Quieter Ink** (`oklch(55.6% 0 0)`, `ink-quieter`): secondary text, captions, placeholders. Quieter Ink is for placeholders and incidental text only, not essential copy.
- **Loud Block** (`oklch(26.9% 0 0)`, `block-loud`): the footer slab and secondary buttons in light mode.
- **Night** (`oklch(14.5% 0 0)`, `night`) and **Night Ink** (`oklch(87% 0 0)`, `night-ink`): dark-mode page and text. In dark mode the footer slab and loud fills flip to light grey.
- **Brand Dark** (`#171406`) and **Brand Light** (`#ffffff`): fixed brand endpoints, used for text selection and inverse text.

### Named Rules
**The One Voice Rule.** Cobalt appears on a few large blocks and primary actions, never as scattered decoration. If more than one or two cobalt surfaces share a viewport, one of them is wrong.

**The Token Only Rule.** No raw colour values in components. Colours come from the semantic tokens (`--color-background-base`, `--color-foreground-primary`, `--color-decorative-stroke`, `--color-interactive-fill-default`). Stylelint enforces this.

**The Rebrand Rule.** To rebrand, change `brand-primary` and the neutral ladder in `colors.json`. Components must not need editing.

## Typography

**Display Font:** Archivo (with system sans fallback)
**Body Font:** Archivo (with system sans fallback)
**Label/Mono Font:** Geist Mono stack for code only; labels use Archivo.

**Character:** A single grotesque family for everything, from headline to footnote. Hierarchy comes from size, weight and case, not from pairing.

### Hierarchy
- **Display** (600, `--size-step-6`, 2rem to 3rem, 1.25): h1, capped at 20ch.
- **Headline** (600, `--size-step-5`, 1.75rem to 2.25rem, 1.25): h2, capped at 35ch.
- **Title** (600, `--size-step-4`, 1.5rem to 1.875rem, 1.25): h3; h4 to h6 use `--size-step-3`.
- **Body** (400, `--size-step-1`, 1rem to 1.125rem, 1.5): running text. In `.prose`, paragraphs run at line-height 2 and a 70ch measure.
- **Label** (700, 0.875rem, 1.0, `0.04ch` tracking, uppercase): header, navigation and buttons.

**How the font is wired.** Font files live in `src/fonts/` and are registered through Astro's fonts API (`src/utils/fonts.js`). The layout sets `--font-primary` to the primary family (the first one found, or `PRIMARY_FAMILY` in `fonts.js`), and the body uses `font-family: var(--font-primary), var(--font-body)`. The `font.sans` token is only the system fallback stack, because Sugarcube quotes any `var()` placed in a font token. To change the brand font, replace the files in `src/fonts/`; never name a family in CSS.

### Named Rules
**The Measure Rule.** Prose never exceeds 70ch and headings never exceed 35ch. Long lines are a bug.

**The Uppercase Label Rule.** Only controls and navigation are uppercase. Body copy and headings are always sentence case.

## Layout

A single-column document in a three-row grid: auto-height header, a `1fr` main, auto-height footer, so the footer always reaches the bottom. Content sits in `.wrapper` (1360px max, fluid inline padding).

Spatial rhythm is built from CUBE compositions, not component margins: `flow` (vertical stack), `cluster` (wrapping rows), `repel`, `sidebar`, `switcher` and `grid`, each configured through custom properties such as `--flow-space` and `--cluster-gap`. Spacing uses the fluid Utopia-style scale (`--space-3xs` to `--space-3xl` plus paired steps like `--space-md-lg`).

Below 40rem the header collapses to a menu button, and only once JavaScript has marked it `[data-nav-js]`. Without JavaScript the navigation stays fully visible.

## Elevation & Depth

Flat by default. Surfaces sit on the page with no shadow, and separation comes from tonal steps (paper, white, lowered grey) and 1px hairline strokes. Shadow tokens exist in the token set (`--shadow-xs` to `--shadow-2xl`) but no shipped component uses them. They are held in reserve for future overlays.

### Named Rules
**The Flat Until Floating Rule.** Only an element that genuinely floats above the page (menu, popover, dialog) may take a shadow. Cards and blocks never do.

## Shapes

Mostly square. Buttons, header, footer, closer and hero blocks have no radius. Form fields take a small `0.2rem` corner (`--radius-s`). The only fully round shapes are the hero skip-link disc and the theme toggle pill, which are small interactive affordances, not containers. Code blocks and panels use `--radius-lg` (0.5rem). Strokes are 1px (`--stroke-width`), dashed for decorative rules and tables, solid for field borders and the mobile menu edge.

## Components

Blunt and utilitarian: square, uppercase, bold, with small physical feedback.

### Buttons
- **Shape:** square corners, no border.
- **Primary:** Cobalt fill, white text, `0.5em 0.75em` padding, 0.875rem bold uppercase with `0.04ch` tracking.
- **Secondary** (`data-button-variant="secondary"`): Loud Block fill with inverse text.
- **Hover / Focus:** hover raises brightness to 105%, and press scales to 99%. Focus uses the global Focus Pink ring (2px solid, 4px offset).

### Inputs / Fields
- **Style:** page-white fill, 1px solid hairline border, `0.2rem` corners, `0.5em 0.8em` padding, full width.
- **Focus:** the global focus ring. Placeholders use Quieter Ink.
- **Disabled:** lowered-grey fill with a `not-allowed` cursor.

### Navigation
Header nav is uppercase, bold, `0.875rem`, tracked at `0.04ch`, with no underline by default. The current page gets a `0.125em` underline offset `0.4em`. On mobile it becomes an overlay panel under the header, in the page background with a solid hairline bottom edge.

### Site Footer
A full-width Loud Block slab with inverse text and plain inherited-colour links. It holds the theme toggle, a pill switch showing sun and moon icons with a thumb that slides to the active mode (transition removed under `prefers-reduced-motion`).

### Closer (optional block)
A full-bleed cobalt block with bold inverse text and a deep top padding (`clamp(2rem, 50vb, 8rem)`) for a closing call to action.

### Hero (optional block)
A full-bleed image overlaid with a black 0 to 50% vertical gradient, with a circular cobalt skip-link disc centred over it. The disc nudges down with the bounce transition on hover.

### Masthead (optional block)
A four-row grid of heading, location and meta lines, with the heading in medium weight at `--size-step-5`.

## Do's and Don'ts

### Do:
- **Do** take every colour, size, space and radius from the Sugarcube tokens (`var(--space-md)`, `var(--color-brand-primary)`).
- **Do** structure CSS in CUBE layers: compositions for layout, utilities for single jobs, blocks for components, `data-*` attributes for variant exceptions.
- **Do** keep the navigation and core content working with JavaScript disabled; JavaScript only enhances.
- **Do** verify contrast in both light and dark mode against WCAG 2.2 AA.
- **Do** use Focus Pink at 2px for focus, and keep it visible on every surface including cobalt.

### Don't:
- **Don't** write raw hex, rgb or oklch values in component CSS.
- **Don't** put shadows on cards or static blocks.
- **Don't** add rounded corners to buttons or bands. The squareness is the voice.
- **Don't** let body text exceed 70ch or use uppercase for anything but labels and navigation.
- **Don't** hard-code the brand: no client colours outside the tokens, and no font family names in CSS (fonts come from `src/fonts` via `--font-primary`).
- **Don't** use Quieter Ink for essential copy; it is for placeholders and incidental text.
