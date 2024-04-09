/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: "selector",
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function ({ addVariant }) {
      addVariant("hover", "@media (any-hover: hover) { &:hover }");
      addVariant(
        "group-hover",
        "@media (any-hover: hover) { :merge(.group):hover & }",
      );
      addVariant("hover-active", [
        "@media (any-hover: hover) { &:hover }",
        "&:active",
      ]);
      addVariant("group-hover-active", [
        "@media (any-hover: hover) { :merge(.group):hover & }",
        ":merge(.group):active &",
      ]);
    })
	],
}
