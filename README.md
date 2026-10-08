# Astro Starter

An [Astro](https://astro.build) starter using [Sugarcube](https://sugarcube.sh) design tokens and [CUBE CSS](https://cube.fyi).

## Getting started

```sh
pnpm install
cp .env.example .env   # set SITE_URL to your production URL
pnpm dev
```

## Commands

| Command         | Action                                           |
| :-------------- | :----------------------------------------------- |
| `pnpm dev`      | Start the dev server at `localhost:4321`         |
| `pnpm build`    | Build the production site to `./dist/`           |
| `pnpm preview`  | Preview the build locally                        |
| `pnpm check`    | Type-check Astro and TypeScript files            |
| `pnpm lint`     | ESLint (with jsx-a11y accessibility rules)       |
| `pnpm lint:css` | Stylelint (flags raw colours that bypass tokens) |
| `pnpm format`   | Prettier (`format:check` to verify only)         |

## Project structure

```text
src/
├── components/   core/ (header, footer, meta) plus optional masthead, hero, closer
├── data/         site-settings.json (title, description; editable in Keystatic) and site-data.ts (nav links)
├── design-tokens/ Sugarcube tokens (JSON); edit these, not generated CSS
├── layouts/      BaseLayout.astro
├── pages/        one file per route
├── styles/       CUBE CSS: global, compositions, utilities, blocks
└── utils/
```

## Starting a new project

1. Edit "Site settings" in Keystatic (or `src/data/site-settings.json`) for the title and description, and `src/data/site-data.ts` for the nav links.
2. Set `SITE_URL` in `.env` (and in your host's environment for deploys).
3. Adjust the brand colours in `src/design-tokens/colors.json`.
4. Delete the optional blocks you don't need (masthead, hero, closer) along with their CSS in `src/styles/blocks/` and their `@import` in `src/styles/index.css`.

## Notes

- **Styling:** use tokens (`var(--space-md)`, `var(--color-brand-primary)`) rather than raw values. Run `pnpm build` and check the generated CSS if you're unsure a token exists.
- **Mobile nav:** below 40rem the header collapses to a menu button. Without JavaScript the nav simply stays visible. The breakpoint is a literal in `site-head.css` because CSS variables can't be used in media queries.
- **Dark mode:** the dark token set applies under `[data-mode="dark"]` on `<html>`. An inline script in `BaseLayout.astro` sets it before first paint from the saved choice, falling back to `prefers-color-scheme`. The header toggle saves an explicit choice to `localStorage` (key `theme`), which then wins over the OS setting.
