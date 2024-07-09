import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "0.667rem",
        base: "1rem",
        xl: "1.500rem",
        "2xl": "2.250rem",
        "3xl": "3.375rem",
        "4xl": "5.063rem",
        "5xl": "7.595rem",
      },
      fontFamily: {
        heading: "DM Sans",
        body: "DM Sans",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      colors: {
        primary: "#002766",
        "primary-content": "#581188",
        secondary: "#0062ff",
        accent: "#ff00ff",
        neutral: "#f2f2f2",
        // Background Color
        "base-100": "#e4e4e7",
        inp: "rgba(0, 0, 255, 0.3)",
        apr: "rgba(0, 128, 0, 0.3)",
        den: "rgba(255, 0, 0, 0.3)",
        apl: "rgba(255, 255, 0, 0.3)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
};
export default config;
