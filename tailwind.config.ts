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
    },
  },
  // plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mruhacks: {
          primary: "#002766",
          "primary-content": "#581188",
          secondary: "#0062ff",
          accent: "#ff00ff",
          neutral: "#f2f2f2",
          // Background Color
          "base-100": "#e4e4e7",
        },
      },
    ],
  },
};
export default config;
