import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/layouts/header/Header';
import Footer from '@/components/layouts/Footer';
import ThemeProvider from '@/components/layouts/header/theme-toggle/Provider';
import Toaster from '@/components/ui/Toaster';
import QueryParamListener from '@/components/common/QueryParamListener';

export const metadata: Metadata = {
  icons: {
    icon: '/icons/favicon_io/favicon.ico',
  },
  title: '이규민의 개발 기행',
  description: '비밀창고',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <QueryParamListener />
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
