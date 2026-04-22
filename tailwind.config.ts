import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        brand:   "#1D4ED8",
        "brand-light": "#3B82F6",
        "brand-pale":  "#EFF6FF",
        success: "#10B981",
        warning: "#D97706",
        danger:  "#DC2626",
        muted:   "#64748B",
        subtle:  "#94A3B8",
        border:  "#E2E8F0",
        surface: "#F8FAFC",
      },
      fontFamily: { sans: ["Inter","system-ui","sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
