// @ts-check
// Builds the Astro `fonts` config from the files in src/fonts, so adding a
// font is just dropping a .woff2 in that folder.
//
// Naming: Family-Style.woff2, e.g. CabinetGrotesk-Bold.woff2,
// Archivo-SemiBoldItalic.woff2, Archivo-Variable.woff2, Archivo-VariableItalic.woff2.
// The family name is split on capitals ("CabinetGrotesk" -> "Cabinet Grotesk")
// and its CSS variable is kebab-cased ("--font-cabinet-grotesk").
// If a family has a Variable file, its static files are ignored.
import { readdirSync } from "node:fs";

const FONTS_DIR = "./src/fonts";

const WEIGHTS = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

/** @param {string} file */
function parseFile(file) {
  const match = file.match(/^(.+?)-([A-Za-z]+)\.woff2$/);
  if (!match) return null;

  const [, family, rawStyle] = match;
  const italic = /italic$/i.test(rawStyle);
  const key = rawStyle.replace(/italic$/i, "").toLowerCase() || "regular";
  const variable = key === "variable";
  const weight = variable ? "100 900" : WEIGHTS[/** @type {keyof typeof WEIGHTS} */ (key)];
  if (!weight) {
    console.warn(`[fonts] Skipping ${file}: unknown weight "${rawStyle}"`);
    return null;
  }

  return {
    family,
    variable,
    variant: {
      weight,
      style: italic ? "italic" : "normal",
      src: [`${FONTS_DIR}/${file}`],
    },
  };
}

function scan() {
  /** @type {Map<string, { variable: boolean; variants: ReturnType<typeof parseFile>[] }>} */
  const families = new Map();

  for (const file of readdirSync(FONTS_DIR).sort()) {
    const parsed = parseFile(file);
    if (!parsed) continue;
    const entry = families.get(parsed.family) ?? { variable: false, variants: [] };
    entry.variable ||= parsed.variable;
    entry.variants.push(parsed);
    families.set(parsed.family, entry);
  }

  return [...families].map(([family, { variable, variants }]) => ({
    name: family.replace(/([a-z])([A-Z])/g, "$1 $2"),
    cssVariable: `--font-${family.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}`,
    variants: variants
      .filter((v) => v && v.variable === variable)
      .map((v) => /** @type {NonNullable<typeof v>} */ (v).variant),
  }));
}

const scanned = scan();

/** CSS variables for every font found, e.g. for <Font> tags in the layout. */
export const fontVariables = scanned.map((f) => f.cssVariable);

/** Font entries for astro.config.mjs; add `provider: fontProviders.local()` to each. */
export const fonts = scanned.map(({ name, cssVariable, variants }) => ({
  name,
  cssVariable,
  fallbacks: ["Arial", "sans-serif"],
  options: { variants },
}));
