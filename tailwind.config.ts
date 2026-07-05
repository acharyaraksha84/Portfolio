import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        "bg-secondary": "#111111",
        card: "#171717",
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          hover: "rgba(255,255,255,0.16)",
        },
        text: {
          DEFAULT: "#FFFFFF",
          muted: "#A1A1AA",
        },
        accent: "#D4D4D4",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        hero: ["clamp(3.2rem, 8vw, 7.5rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        display: ["clamp(2.2rem, 5vw, 4.2rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        xl: "18px",
        "2xl": "28px",
        "3xl": "36px",
      },
      boxShadow: {
        soft: "0 8px 40px rgba(0,0,0,0.5)",
        "soft-lg": "0 24px 80px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "portrait-vignette":
          "radial-gradient(circle at 50% 35%, rgba(255,255,255,0.06), transparent 65%)",
        "fade-bottom": "linear-gradient(180deg, transparent 0%, #0A0A0A 100%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      animation: {
        "float-slow": "float 10s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
