/** @type {import('tailwindcss').Config} */

export default {
  content: ["./{src,db}/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        sky: {
          50: "#f1f8fe",
          100: "#e2f1fc",
          200: "#bfe2f8",
          300: "#86ccf3",
          400: "#46b1ea",
          500: "#1e97d9",
          600: "#0f6faa",
          700: "#0e6096",
          800: "#10527c",
          900: "#134567",
          950: "#0d2c44",
        },
      },
    },
  },
};
