'use client';

import { useEffect, useState } from 'react';
import ThemeToggle from './theme-toggle/ThemeToggle';
import Logo from './Logo';
import Posts from './Posts';
import About from './About';
import Portfolio from './Portfolio';
import Lock from './lock/Lock';
import Donation from './donation/Donation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky z-10 top-0 w-full h-20 transition-shadow duration-200 ${
        isScrolled
          ? 'bg-[color:var(--background)]/80 backdrop-blur-md shadow'
          : 'bg-[color:var(--background)]'
      }`}
    >
      <div className="w-full h-full mx-auto px-6 py-4 flex justify-between items-center ">
        <Logo />
        <div className="flex items-center gap-2">
          <Posts />
          <About />
          <Portfolio />
          <Lock />
          {/* <Donation /> */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
