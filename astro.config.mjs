// @ts-check
import { defineConfig } from "astro/config";
import sugarcube from "@sugarcube-sh/vite";
import sitemap from "@astrojs/sitemap";

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
  vite: {
    plugins: [sugarcube()],
  },
});
