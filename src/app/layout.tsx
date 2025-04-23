import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/layouts/header/Header';
import Footer from '@/components/layouts/Footer';
import ThemeProvider from '@/components/layouts/header/theme-toggle/Provider';
import Toaster from '@/components/ui/Toaster';

export const metadata: Metadata = {
  title: '사나이클럽',
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
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
