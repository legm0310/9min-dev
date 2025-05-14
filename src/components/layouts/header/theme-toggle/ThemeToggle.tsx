'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Button from '@/components/ui/Button';
import DarkIcon from './DarkIcon';
import LightIcon from './LightIcon';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="group"
    >
      {theme === 'dark' ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

export default ThemeToggle;
