import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluegrey: {
          DEFAULT: "#7298C7",
          light: "#A7C0DF",
          dark: "#54779F",
        },
        butter: {
          DEFAULT: "#F3D98F",
          light: "#F9EBC4",
          dark: "#E2BE5B",
        },
        cream: "#FAFAF7",
        // soft second-tone backgrounds for the two-tone section rhythm
        mist: "#EEF2F8", // blue-grey tint over off-white
        buttermilk: "#FAF5E8", // very light butter tint
        charcoal: {
          DEFAULT: "#2E3440",
          light: "#3B4252",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        mono: "0.15em",
      },
      boxShadow: {
        butter: "0 12px 40px -12px rgba(243, 217, 143, 0.55)",
        "butter-lg": "0 24px 70px -18px rgba(226, 190, 91, 0.6)",
        card: "0 4px 24px -8px rgba(46, 52, 64, 0.08)",
        lift: "0 20px 48px -16px rgba(46, 52, 64, 0.14)",
        sticker: "0 6px 18px -6px rgba(46, 52, 64, 0.22)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "drip-fall": {
          "0%": { transform: "scaleY(0)", opacity: "0" },
          "60%": { opacity: "1" },
          "100%": { transform: "scaleY(1)", opacity: "1" },
        },
        "blob-spin": {
          "0%, 100%": { borderRadius: "45% 55% 60% 40% / 55% 45% 55% 45%" },
          "50%": { borderRadius: "55% 45% 40% 60% / 45% 55% 45% 55%" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "blob-spin": "blob-spin 12s ease-in-out infinite",
        wiggle: "wiggle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
