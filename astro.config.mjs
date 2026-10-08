// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sugarcube from "@sugarcube-sh/vite";
import sitemap from "@astrojs/sitemap";
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
  integrations: [sitemap()],
  fonts: fonts.map((font) => ({ provider: fontProviders.local(), ...font })),
  vite: {
    plugins: [sugarcube()],
  },
});
