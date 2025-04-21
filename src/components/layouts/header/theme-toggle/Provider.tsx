'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  const [isMount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      {...props}
    >
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
