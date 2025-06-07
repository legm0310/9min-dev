'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';
import MobileNavMenu from './MobileNavMenu';
import Posts from './Posts';
import About from './About';
import Portfolio from './Portfolio';
import Lock from './lock/Lock';
import Donation from './donation/Donation';
import ThemeToggle from './theme-toggle/ThemeToggle';

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
          ? 'bg-[color:var(--background)]/80 backdrop-blur-md shadow-md'
          : 'bg-[color:var(--background)]'
      }`}
    >
      <div className="w-full h-full mx-auto px-6 py-4 flex justify-between items-center ">
        <Logo />
        <MobileNavMenu />
        <div className="hidden sm:flex items-center gap-2">
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
