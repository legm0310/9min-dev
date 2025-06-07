'use client';

import clsx from 'clsx';
import { useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@/components/common/icon/MenuIcon';
import MoblieMenuItem from './MobileMenuItem';
import Lock from './lock/Lock';
import ThemeToggle from './theme-toggle/ThemeToggle';

const MobileNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <div className="flex flex-row items-center gap-2 sm:hidden">
      <Lock
        className={clsx(
          'transition-all duration-300',
          !isOpen && 'opacity-0 translate-x-8 pointer-events-none',
          isOpen && 'flex items-center gap-2 translate-x-0 opacity-100',
        )}
      />
      <ThemeToggle
        className={clsx(
          'transition-all duration-200',
          !isOpen && 'opacity-0 translate-x-6 pointer-events-none',
          isOpen && 'flex items-center gap-2 translate-x-0 opacity-100',
        )}
      />
      <button onClick={handleToggle} className="sm:hidden">
        <MenuIcon width={20} height={20} isOpen={isOpen} className={`p-2`} />
      </button>
      {true && (
        <ul
          className={clsx(
            'absolute flex flex-col gap-6 bg-background z-10',
            'pb-1 px-4',
            'left-0 top-20 w-full h-[calc(100vh-5rem)]',
            'transition-all duration-200 ease-in-out',
            isOpen
              ? 'translate-x-0 opacity-100'
              : '-translate-x-full opacity-0',
          )}
        >
          <MoblieMenuItem
            className={clsx(
              'transition-transform duration-[200ms]',
              isOpen
                ? 'translate-x-0 opacity-100'
                : '-translate-x-full opacity-0',
            )}
          >
            <Link href="/posts" onClick={handleToggle}>
              Posts
            </Link>
          </MoblieMenuItem>
          <MoblieMenuItem
            className={clsx(
              'transition-transform duration-[300ms]',
              isOpen
                ? 'translate-x-0 opacity-100'
                : '-translate-x-full opacity-0',
            )}
          >
            <Link href="/about" onClick={handleToggle}>
              About
            </Link>
          </MoblieMenuItem>
          <MoblieMenuItem
            className={clsx(
              'transition-transform duration-[400ms]',
              isOpen
                ? 'translate-x-0 opacity-100'
                : '-translate-x-full opacity-0',
            )}
          >
            <Link href="/portfolio" onClick={handleToggle}>
              Portfolio
            </Link>
          </MoblieMenuItem>
        </ul>
      )}
    </div>
  );
};

export default MobileNavMenu;
