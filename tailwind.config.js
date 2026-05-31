/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0B0F19',
        panel: '#101826',
        panelSoft: '#142033',
        neon: '#00E5FF',
        ice: '#EAFBFF',
        steel: '#7F91A8',
      },
      fontFamily: {
        display: ['Sora', 'IBM Plex Sans', 'sans-serif'],
        body: ['IBM Plex Sans', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 32px rgba(0, 229, 255, 0.25)',
        panel: '0 24px 80px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
};
