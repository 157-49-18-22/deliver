/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "primary": "#ff4500",
        "background": "#fcf9f8",
        "on-background": "#1c1b1b",
        "surface": "#fcf9f8",
        "on-surface": "#1c1b1b",
        "inverse-surface": "#1c1b1b",
        "primary-container": "#ff4500",
        "on-primary-container": "#ffffff",
        "surface-container": "#f0eded",
        "surface-variant": "#e5e2e1"
      },
      "borderRadius": {
        "DEFAULT": "0px",
        "lg": "8px",
        "xl": "12px",
        "full": "9999px"
      },
      "fontFamily": {
        "body-md": ["Hanken Grotesk", "sans-serif"],
        "display-lg": ["Anton", "sans-serif"],
        "headline-md": ["Anton", "sans-serif"],
        "headline-lg": ["Anton", "sans-serif"],
        "label-bold": ["Hanken Grotesk", "sans-serif"],
        "body-lg": ["Hanken Grotesk", "sans-serif"]
      },
      "fontSize": {
        "body-md": ["16px", {"lineHeight": "1.5"}],
        "display-lg": ["72px", {"lineHeight": "1.1"}],
        "headline-md": ["24px", {"lineHeight": "1.2"}],
        "headline-lg": ["48px", {"lineHeight": "1.2"}],
        "label-bold": ["14px", {"lineHeight": "1.2", "fontWeight": "700"}],
        "body-lg": ["18px", {"lineHeight": "1.6"}]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
