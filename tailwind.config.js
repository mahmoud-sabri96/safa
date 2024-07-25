/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '850px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1280px',
    },
    colors: {
      primary: "#1777fb",
      secondary: "#F1F8ED",
      secondaryLight: "#F1F8ED",
      black: "#121212",
      blackLight: "#252B42", 
      gray: "#666666", 
      grayLight: "#999999",
      grayHover: "rgba(255, 255, 255, 0.20)",
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Unbounded: ["Unbounded", "sans-serif"],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
  corePlugins: {
    preflight: true,
  }
});


