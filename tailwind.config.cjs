/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        regular: ["raleway-regular", "sans-serif"],
        semibold: ["raleway-semibold", "sans-serif"],
        bold: ["raleway-bold", "sans-serif"],
        header: ['playfairdisplay-bold', "serif"]
      },
      textColor:{
        accent: "rgba(var(--accent), <alpha-value>)",
        light: "rgba(var(--light), <alpha-value>)",
        dark: "rgba(var(--dark), <alpha-value>)",
      },
      backgroundColor:{
        accent: "rgba(var(--accent), <alpha-value>)",
        light: "rgba(var(--light), <alpha-value>)",
        dark: "rgba(var(--dark), <alpha-value>)",
      },
      borderColor:{
        accent: "rgba(var(--accent), <alpha-value>)",
        light: "rgba(var(--light), <alpha-value>)",
        dark: "rgba(var(--dark), <alpha-value>)",
      },
      fontSize: {
        ch1: "clamp(1.2101rem, 1.0297rem + 0.902vw, 1.7287rem)",
        ch2: " clamp(1.1341rem, 0.9651rem + 0.8453vw, 1.6202rem)",
        ch3: "clamp(1.0629rem, 0.9045rem + 0.7922vw, 1.5185rem)",
        ch4: "clamp(0.9336rem, 0.7945rem + 0.6959vw, 1.3338rem)",
        ch5: "clamp(0.875rem, 0.7446rem + 0.6522vw, 1.25rem)",
        ch6: "clamp(0.8201rem, 0.6978rem + 0.6112vw, 1.1715rem)",
        csmall: "clamp(0.7686rem, 0.654rem + 0.5728vw, 1.0979rem)",
      },
    },
  },
  plugins: [],
};