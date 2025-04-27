import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        rotateIn: {
          '0%': { transform: 'rotate(-180deg) scale(0)', opacity: '0' },
          '100%': { transform: 'rotate(0deg) scale(1)', opacity: '1' },
        },
        'gradient-scroll': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        rotateIn: 'rotateIn 0.3s ease-out',
        'gradient-scroll': 'gradient-scroll 5s linear infinite',
      },

      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px', // ✅ 기본 lg는 1024px 이상
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
        mobile: { max: '767px' },
        tablet: { min: '768px', max: '1023px' },
      },

      fontFamily: {
        pretend: ['var(--font-pretendard)', 'sans-serif'],
        sfPro: ['var(--font-SF-Pro)', 'sans-serif'],
        geist: ['var(--font-geist-sans)', 'sans-serif'],
      },

      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        stroke: 'var(--nav-stroke)',
      },

      typography: {
        DEFAULT: {
          css: {
            pre: null, // Tailwind가 기본적으로 pre에 주는 스타일 제거
          },
        },
      },

      backgroundImage: {
        gradient:
          'repeating-linear-gradient(to right, #06b6d4 0%, #c084fc 10%, #f472b6 20%, #f97316 30%, #3b82f6 40%, #06b6d4 50%, #a855f7 60%, #ec4899 70%, #f97316 80%, #3b82f6 90%, #06b6d4 100%)',
      },
    },
  },
  plugins: [typography],
};

export default config;
