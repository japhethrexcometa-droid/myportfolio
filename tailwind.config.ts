import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        teal: {
          950: "#020F1A",
          900: "#062832",
          800: "#093740",
          700: "#1D5D64",
          600: "#3F8188",
          500: "#479B9D",
          400: "#A2DFE0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
