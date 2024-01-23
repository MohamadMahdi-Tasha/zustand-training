// Codes by mahdi tasha
// Importing configs of tailwindCSS
import type { Config } from "tailwindcss";

// Defining configs of tailwindCSS
const config: Config = {
  content: [
    './app/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './component/*.{ts,tsx,js,jsx}',
    './component/**/*.{ts,tsx,js,jsx}',
    './chunk/*.{ts,tsx,js,jsx}',
    './chunk/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#2B3499',
        orange: '#FF6C22',
        midOrange: '#FF9209',
        lightOrange: '#FFD099',
      }
    }
  },
  plugins: [],
};

// Exporting the configs
export default config;