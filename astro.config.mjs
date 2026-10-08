// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sugarcube from "@sugarcube-sh/vite";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import { fonts } from "./src/utils/fonts.js";

// astro.config.mjs doesn't see .env files by default, so load one if it exists.
try {
  process.loadEnvFile();
} catch {
  // No .env file; SITE_URL may still come from the host environment.
}

// The Keystatic editor needs server routes, so it only runs under `astro dev`.
// The production build stays fully static.
const isDev = process.argv.includes("dev");

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "http://localhost:4321",
  integrations: [
    sitemap(),
    markdoc(),
    ...(isDev ? [react(), keystatic()] : []),
  ],
  fonts: fonts.map((font) => ({ provider: fontProviders.local(), ...font })),
  vite: {
    plugins: [sugarcube()],
  },
});
