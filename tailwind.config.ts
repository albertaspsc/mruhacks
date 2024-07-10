import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
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
        primary: "var(--primary)",
        "primary-content": "var(--primary-content)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        neutral: "var(--neutral)",
        "base-100": "var(--base-100)",
        foreground: "var(--text)",
        background: "var(--background)",
        popover: "var(--background)",
        "popover-foreground": "var(--text)",
        inp: "var(--inp)",
        apr: "var(--inp)",
        den: "var(--den)",
        apl: "var(--apl)",
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
