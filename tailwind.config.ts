import { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        common: {
          white: '#ffffff',
          black: '#222222',
          gray: '#E2E2EA'
        },
        primary: {
          main: '#199DA3',
          light: '#82e5e9',
          dark: '#009298',
          contrastText: '#fff'
        },
        secondary: {
          light: '#6C879B',
          moreLight: '#9CAEBB'
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
        },
        gray: {
          light: '#f5f5f5',
          main: '#777777',
          dark: '#222222'
        }
      },
      boxShadow: {
        drop: '0px 4px 15px 0px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  plugins: []
}

export default config
