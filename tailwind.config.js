/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        bungee: ["Bungee", "sans-serif"],
      },
      textShadow: {
        DEFAULT: '0 1px 3px rgba(0, 0, 0, 0.5)',
        md: '0 1px 3px rgba(0, 0, 0, 0.5)',
        lg: '0 2px 5px rgba(0, 0, 0, 0.5)',
        xl: '0 3px 10px rgba(0, 0, 0, 0.5)',
        none: 'none',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const textShadowUtilities = {
        '.text-shadow': {
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-xl': {
          textShadow: '0 3px 10px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      };
      addUtilities(textShadowUtilities, ['responsive', 'hover']);
    },
  ],
};
