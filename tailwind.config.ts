import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#05070b",
        graphite: "#0b1118",
        panel: "#101823",
        line: "rgba(255,255,255,0.1)",
        electric: "#2f80ff",
        cyan: "#5de1ff",
        mercury: "#f4f7fb",
        muted: "#9ca9b8"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
        display: ["var(--font-space)", "Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 70px rgba(47,128,255,0.22)",
        panel: "0 28px 80px rgba(0,0,0,0.36)"
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at 50% 0%, rgba(47,128,255,0.22), transparent 34%), linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;
