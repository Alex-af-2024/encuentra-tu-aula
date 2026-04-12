export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#007d6d',
          light: 'rgba(0, 125, 109, 0.1)',
          border: 'rgba(0, 125, 109, 0.5)',
        },
        social: {
          bg: 'rgba(244, 243, 236, 0.5)',
          bgDark: 'rgba(47, 48, 58, 0.5)',
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [],
}
