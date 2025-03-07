import { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#199DA3',
          light: '#82e5e9',
          dark: '#009298',
          contrastText: '#fff'
        },
        error: {
          main: '#FF5630',
          light: '#ffad9a',
          dark: '#e42700'
        },
        successful: {
          main: '#36B37E',
          light: '#8adbb8',
          dark: '#13875b'
        }
      }
    }
  },
  plugins: []
}

export default config
