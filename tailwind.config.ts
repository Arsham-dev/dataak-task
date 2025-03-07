import { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#2d9cdb',
          light: '#7bc1e8',
          dark: '#00699c',
          contrastText: '#fff'
        }
      }
    }
  },
  plugins: []
}

export default config
