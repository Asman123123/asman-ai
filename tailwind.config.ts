import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070d",
        night: "#0a101a",
        cobalt: "#4d8dff",
        aura: "#9cc7ff",
        pearl: "#f7f9fc",
      },
      boxShadow: {
        glow: "0 0 46px rgba(77, 141, 255, 0.18)",
        card: "0 28px 90px rgba(0, 0, 0, 0.22)",
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 20% 12%, rgba(77,141,255,.16), transparent 28%), radial-gradient(circle at 86% 8%, rgba(156,199,255,.10), transparent 24%), linear-gradient(135deg, #03050a 0%, #0a101a 48%, #03050a 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
