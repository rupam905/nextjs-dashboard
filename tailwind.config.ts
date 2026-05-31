import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0a0a0a",
        "dark-surface": "#1a1a1a",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
