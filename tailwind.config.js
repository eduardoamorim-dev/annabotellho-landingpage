/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#F2F5EB',      // Creme mais suave/off-white
          dark: '#142823',    // Verde floresta profundo (quase preto)
          green: '#2D5B4F',   // Verde médio para elementos secundários
          accent: '#CC4B3F',  // Terracota/Vermelho queimado (menos agressivo)
          gold: '#D4AF37'     // Toque dourado sutil
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
      }
    },
  },
  plugins: [],
}