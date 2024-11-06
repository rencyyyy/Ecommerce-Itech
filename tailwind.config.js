/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ffb100",
        secondary: "#2d70a4",
        brandskyBlue: "#bbe5ed",
        brandPurple: "#8380b6",
        brandNavyBlue: "#111d4a",
        brandWhite: "#fdfffc",

        // Icon info colors
        Map: "#b18e72",

        // Social links color
        Instagram: "#f72585",
        Facebook: "#0165E1",
        LinkedIn: "#0A66C2",
        X: "#14171A",
        X2: "#212529",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        },
      },
    },
  },
  plugins: [],
}