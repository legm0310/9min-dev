'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Button from '@/components/ui/Button';
import DarkIcon from './DarkIcon';
import LightIcon from './LightIcon';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className = '' }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`px-1 md:px-1 py-1 group ${className}`}
    >
      {theme === 'dark' ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

export default ThemeToggle;
