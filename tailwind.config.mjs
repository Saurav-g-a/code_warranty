/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        large: "90%",
        1366: "1095px",
        tablet: "880px",
      },
      backgroundImage: {
        "headerBackground": "url('/assets/images/Mask group.png')",
        "headerBackground1": "url('/assets/images/banner1.png')",
      },
      backgroundClip: {
        text: "text",
      },
      dropShadow: {
        "3xl": "0 4px 84px rgba(0, 0, 0, 0.25)",
        "4xl": "0px 0px 100px rgba(0, 0, 0, 0.15)",
        "5xl": "0px 4.979px 29.872px rgba(0, 0, 0, 0.25)",
        header: "0px 7px 14px 0px #00000014",
      },
      boxShadow: {
        "6xl": "-11px -4px 11px 20px #f9f9f9",
      },
      screens: {
        s: "320px",

        sm: "580px",

        md: "680px",

        lg: "1024px",

        xl: "1366px",

        "2xl": "1440px",

        "3xl": "1980px",

        "4xl": "2570px",
      },
    },
  },
  plugins: [],
};
