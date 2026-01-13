import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'geel': '#fef00d',
        'licht-geel': '#fef99e',
        'groen': '#2eae6c',
        'licht-groen': '#6bc48b',
      },
      fontFamily: {
        'display': ['var(--font-londrina)', 'sans-serif'],
        'body': ['var(--font-hanken)', 'sans-serif'],
        'decorative': ['var(--font-playwrite)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
