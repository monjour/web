import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        "mj-purple": "#817886",
        "mj-purple2": "#b2a3c2",
        "mj-purple-dark": "#664c7c",
        "mj-olive": "#a1a887",
        "mj-olive-dark": "#57673a",
        "mj-white": "#eaeaea",
        "mj2-brown": "#787049",
        "mj2-bone": "#d4d8bf",
        "mj2-purple1": "#b9acb3",
        "mj2-purple2": "#988396",
        "mj2-purple3": "#6e5d89",
      },
      fontFamily: {
        alice: ["Alice"],
        gvibes: ["Great Vibes"],

      },
    },
  },

  plugins: [],
};
export default config;
