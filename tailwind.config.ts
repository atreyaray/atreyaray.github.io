import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#F5F5F5",
        accent: "#2A2A72",
        dark: "#121212",
        "dark-secondary": "#1E1E1E",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "Montserrat", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: '#2A2A72',
              '&:hover': {
                color: '#1a1a4d',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
}

export default config; 