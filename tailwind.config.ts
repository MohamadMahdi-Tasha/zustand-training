// Codes by mahdi tasha
// Importing configs of tailwindCSS
import type { Config } from "tailwindcss";

// Defining configs of tailwindCSS
const config: Config = {
  content: [
    './app/*.{ts, tsx, js, jsx}',
    './app/**/*.{ts, tsx, js, jsx}',
    './app/component/*.{ts, tsx, js, jsx}',
    './app/component/**/*.{ts, tsx, js, jsx}',
    './app/chunk/*.{ts, tsx, js, jsx}',
    './app/chunk/**/*.{ts, tsx, js, jsx}',
  ],
  theme: {},
  plugins: [],
};

// Exporting the configs
export default config;