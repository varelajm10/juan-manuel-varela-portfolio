/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        paper: '#F5F5F0',
        stone: '#ECEEE8',
        obsidian: '#0E171B',
        petrol: {
          DEFAULT: '#0F4C54',
          dark: '#0A363C',
          tint: '#E6F0EE',
          border: '#B9D3D0',
        },
        verdigris: '#A7E3CE',
        sage: {
          DEFAULT: '#3F6656',
          tint: '#EAF3EE',
          border: '#C6DDD0',
        },
        brass: {
          DEFAULT: '#8C4B28',
          tint: '#F7EFEA',
          border: '#E6CEBE',
        },
        ink: {
          body: '#435057',
          muted: '#526067',
        },
        gridline: '#DCE2DE',
      },
    },
  },
  plugins: [],
};
