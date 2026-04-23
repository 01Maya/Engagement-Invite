import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
        'great-vibes': 'var(--font-great-vibes)',
        playfair: 'var(--font-playfair)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        border: 'var(--border)',
        input: 'var(--input)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        wine: '#6e2c3a',
        gold: '#d4af37',
        'pink-light': '#f8dfe3',
        'pink-medium': '#f3cfd6',
        'pink-dark': '#f0bcc7',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px)',
            opacity: '0.6',
          },
          '50%': {
            transform: 'translateY(-20px) translateX(10px)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
