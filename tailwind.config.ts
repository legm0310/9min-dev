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
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
          hover: 'hsl(var(--muted-hover))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))',
        },
        caption: {
          DEFAULT: 'hsl(var(--caption))',
          foreground: 'hsl(var(--caption-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        input: {
          DEFAULT: 'hsl(var(--input))',
          foreground: 'hsl(var(--input-foreground))',
        },
        surface: {
          DEFAULT: 'hsl(var(--surface))',
          foreground: 'hsl(var(--surface-foreground))',
        },
        border: {
          DEFAULT: 'hsl(var(--border))',
          subtle: 'hsl(var(--border-subtle))',
        },
        overlay: 'hsl(var(--overlay))',
        //todo remove
        'codeblock-title': {
          DEFAULT: 'hsl(var(--codeblock-title-bg))',
          foreground: 'hsl(var(--codeblock-title-fg))',
        },
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
