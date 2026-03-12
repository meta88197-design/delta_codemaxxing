import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        delta: {
          charcoal: "var(--delta-charcoal)",
          violet: "var(--delta-violet)",
          blue: "var(--delta-blue)",
          azure: "var(--delta-azure)",
          fog: "var(--delta-fog)"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.15), 0 24px 60px rgba(18, 12, 35, 0.45)"
      },
      backgroundImage: {
        "delta-gradient":
          "linear-gradient(130deg, rgba(29,28,33,1) 0%, rgba(56,37,99,1) 36%, rgba(38,38,116,1) 72%, rgba(36,120,196,1) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
