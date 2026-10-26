# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary user: a developer (Sam Young) who clones this starter to build sites for clients. Downstream users are the clients' non-technical editors, who change copy and pages through Keystatic, and the end visitors of each client site.

## Product Purpose

A reusable Astro starter for client sites. It gives each new project a working base: header, footer, meta/SEO, sitemap, dark mode, content pages and a CMS, so the work goes into brand and content, not scaffolding. Success is a new client site that is ready to brand and hand off to editors with little setup.

## Positioning

A deliberately neutral, brand-swappable base. Everything visual comes from Sugarcube design tokens and CUBE CSS layers, so a project is re-skinned by editing tokens, not by rewriting components.

## Operating Context

- Developers work in the repo (`pnpm dev`, lint, stylelint, prettier) and delete the optional blocks (masthead, hero, closer) they don't need.
- Editors work in Keystatic: "Site settings" (title, description) and "Pages" (title, description, Markdoc content). Storage is local, or GitHub when `PUBLIC_KEYSTATIC_GITHUB_REPO` is set.
- Deployed on Netlify (`@astrojs/netlify`). `SITE_URL` must be set per project.

## Capabilities and Constraints

- Stack: Astro 7, React (for Keystatic), Markdoc content, Sugarcube tokens (`src/design-tokens/*.json`), CUBE CSS in `src/styles/` (compositions, utilities, blocks).
- Light and dark mode via `[data-mode="dark"]`, saved in `localStorage`, falling back to `prefers-color-scheme`.
- Routes are driven by the `pages` collection; nav links live in `src/data/site-data.ts`.
- Hard constraints from the owner:
  - **Token-only styling.** No raw colours or values that bypass tokens (stylelint enforces this).
  - **CUBE CSS methodology.** Composition, Utility, Block, Exception, with the cascade embraced.
  - **Works without JavaScript.** Nav and core content must function with JS off.
  - **WCAG 2.2 AA.** jsx-a11y lint is on.
  - **Brand-swappable.** The starter stays neutral; per-project brand lives in tokens.
- Undecided: the starter's own visual identity. Archivo is the current font, but it is placeholder-level and not a brand commitment.

## Brand Commitments

None for the starter itself. Each client project defines its own.

## Evidence on Hand

Placeholder content only (`src/content/pages/home.mdoc`, `about.mdoc`, "Astro Starter" site title). There are no real client assets, testimonials or metrics, and future work must not fabricate any.

## Product Principles

1. Tokens first: any visual change goes through the design tokens, so one edit re-brands a whole site.
2. Neutral by default: the starter carries no opinionated brand, so it never fights a client's identity.
3. Editor-safe: non-technical editors can change content without breaking layout, and the CMS fields stay few and clear.
4. Resilient: the site works without JavaScript, in light and dark, on any device.
5. Small and deletable: optional blocks are removable without side effects.

## Accessibility & Inclusion

WCAG 2.2 AA is required. Content must be usable with JavaScript disabled, and both colour modes must meet contrast requirements.
