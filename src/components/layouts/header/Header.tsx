'use client';

import Logo from './Logo';
import About from './About';
import Portfolio from './Portfolio';
import Lock from './lock/Lock';
import Donation from './donation/Donation';
import ThemeToggle from './theme-toggle/ThemeToggle';

const Header = () => {
  return (
    <header className="">
      <div className="w-full mx-auto px-8 py-6 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-4">
          <About />
          <Portfolio />
          <Lock />
          <Donation />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
