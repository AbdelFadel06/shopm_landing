import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        body: "#334155",
        muted: "#64748B",
        line: "#E2E8F0",
        soft: "#F8FAFC",
        brand: "#1D4ED8",
        "brand-dark": "#1E40AF",
        "brand-pale": "#EFF6FF",
        whatsapp: "#128C4B",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "76rem",
      },
    },
  },
  plugins: [],
};
export default config;
