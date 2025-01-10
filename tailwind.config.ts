import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        acid: ["var(--font-acid)", ...fontFamily.sans],
        acidBold: ["var(--font-acid-bold)", ...fontFamily.sans],
        acidRegular: ["var(--font-acid-regular)", ...fontFamily.sans],
        acidNormal: ["var(--font-acid-normal)", ...fontFamily.sans],
        acidMedium: ["var(--font-acid-medium)", ...fontFamily.sans],

      },
    },
  },
  plugins: [],
} satisfies Config;
