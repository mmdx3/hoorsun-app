import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-iran-yekan)", ...fontFamily.sans],
        vazir: ["var(--font-vazir)", ...fontFamily.sans],
        vazirfd: ["var(--font-vazir-Fd)", ...fontFamily.mono],
        dana: ["var(--font-dana)", ...fontFamily.mono],
        danafanum: ["var(--font-dana-fanum)", ...fontFamily.mono],
        satoshi: ["var(--font-satoshi)", ...fontFamily.mono],
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
