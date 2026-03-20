import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f0c040",
        "dark-bg": "#141414",
        "light-blue": "#00a0b3",
        "section-dark": "#1e1e1e",
        "card-dark": "#2b2b2b",
        "footer-dark": "#212121",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        opensans: ["var(--font-opensans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
