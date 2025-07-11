// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://maximeconceicao.github.io",
  base: "/temple-of-reflection/",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), icon()],
});
