import type { Config } from "tailwindcss";

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
      backgroundImage: {
          Fevertree: "url(./assets/SouthAfricanFevertree.jpg)",
          Elephant: "url(./assets/DustSprayedElephant.jpg)",
          Dusk: "url(./assets/BWLightRays.jpg)",
          HDR: "url(./assets/HDRElephant.jpg)",
          Lioness: "url(./LionessValley.jpg)",
      },
    },
  },
  plugins: [],
} satisfies Config;
