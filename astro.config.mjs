import db from "@astrojs/db";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), auth(), db()],
  output: "server",

  markdown: {
    shikiConfig: {
      theme: "github-dark-default",
      langs: ["astro", "jsx"],
    },
  },

  adapter: vercel(),
});
