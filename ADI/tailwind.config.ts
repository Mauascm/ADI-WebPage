import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        fg: "hsl(var(--fg))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        glass: "hsl(var(--glass))",
        accent: "hsl(var(--accent))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px hsla(196, 100%, 65%, 0.25)",
        soft: "0 10px 40px hsla(221, 35%, 4%, 0.35)",
      },
      backgroundImage: {
        "radial-tech":
          "radial-gradient(circle at 15% 20%, hsla(196,100%,60%,0.14) 0%, transparent 36%), radial-gradient(circle at 85% 10%, hsla(215,100%,66%,0.1) 0%, transparent 35%), radial-gradient(circle at 50% 85%, hsla(170,80%,48%,0.08) 0%, transparent 40%)",
      },
      animation: {
        marquee: "marquee 24s linear infinite",
        shimmer: "shimmer 2.2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
