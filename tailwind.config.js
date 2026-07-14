/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F2A2E",
          light: "#17393E",
        },
        gold: {
          DEFAULT: "#C9973A",
          light: "#E0B463",
        },
        sage: "#7C9A87",
        cream: "#FAF7F2",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      backgroundImage: {
        perforation:
          "repeating-linear-gradient(to bottom, #E5DFD3 0, #E5DFD3 6px, transparent 6px, transparent 14px)",
      },
    },
  },
  plugins: [],
}
