import localFont from 'next/font/local';

export const GEIST_SANS = localFont({
  src: './GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const GEIST_MONO = localFont({
  src: './GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const FONT_SF_PRO = localFont({
  display: 'swap',
  fallback: ['Poppins', 'Arial', 'Helvetica', 'sans-serif'],
  preload: true,
  src: [
    {
      path: './SF-Pro/SF-Pro.woff2',
      style: 'normal',
    },
  ],
  variable: '--font-SF-Pro',
});

export const FONT_PRETENDARD = localFont({
  adjustFontFallback: 'Arial',
  display: 'swap',
  fallback: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'sans-serif',
  ],
  preload: true,
  src: './Pretendard/PretendardVariable.woff2',
  style: 'normal',
  variable: '--font-pretendard',
});
