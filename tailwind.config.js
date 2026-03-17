/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#06B6D4',
        accent: '#22C55E',
        dark: '#0F172A',
        'dark-light': '#1E293B',
        'dark-lighter': '#334155',
        light: '#F8FAFC',
        muted: '#94A3B8'
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif']
      }
    }
  },
  plugins: [],
}