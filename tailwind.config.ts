import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        appleBlue: '#0071E3',
        appleBlueDark: '#0055C6',
        appleText: '#1D1D1F',
        appleMuted: '#6E6E73',
        appleSurface: '#F5F5F7',
        appleBorder: '#D2D2D7',
      },
      boxShadow: {
        softInner: 'inset 0 1px 0 rgba(255,255,255,0.8)',
      },
      borderRadius: {
        apple: '18px',
        appleLg: '28px',
      },
    },
  },
  plugins: [],
};

export default config;
