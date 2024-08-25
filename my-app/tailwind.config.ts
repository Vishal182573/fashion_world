import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        accent: {
          light: '#FDA085',
          DEFAULT: '#DB2777',
          dark: '#9D174D',
        },
        background: {
          light: '#FFF8F0',
          dark: '#212121',
        },
        foreground: '#212121',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "fashion-gradient": "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
      },
    },
  },
  plugins: [],
};

export default config;