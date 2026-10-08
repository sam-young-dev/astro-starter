// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sugarcube from "@sugarcube-sh/vite";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import netlify from "@astrojs/netlify";
import { fonts } from "./src/utils/fonts.js";

// astro.config.mjs doesn't see .env files by default, so load one if it exists.
try {
  process.loadEnvFile();
} catch {
  // No .env file; SITE_URL may still come from the host environment.
}

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "http://localhost:4321",
  // Pages stay prerendered static HTML. Only the Keystatic admin (/keystatic)
  // and its API routes run on demand, as Netlify Functions.
  adapter: netlify(),
  integrations: [sitemap(), markdoc(), react(), keystatic()],
  fonts: fonts.map((font) => ({ provider: fontProviders.local(), ...font })),
  vite: {
    plugins: [sugarcube()],
  },
});
