import clsx from 'clsx';
import IconWrapper from '@/components/ui/IconWrapper';

interface MenuIconProps {
  width: number;
  height: number;
  href?: string;
  isOpen: boolean;
  className?: string;
}

const MenuIcon = ({
  width,
  height,
  href,
  isOpen,
  className = '',
}: MenuIconProps) => {
  return (
    <IconWrapper
      href={href}
      className={clsx(
        `group transition-transform duration-300`,
        className,
        isOpen && 'hover:skew-x-6 hover:skew-y-6',
      )}
    >
      <svg
        viewBox="0 0 24 24"
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      >
        <line
          x1="2"
          y1={isOpen ? 12 : 4}
          x2={isOpen ? 22 : 12}
          y2={isOpen ? 12 : 4}
          className={clsx(
            'transition-transform duration-400 ease-in-out',
            'origin-center',
            isOpen ? 'rotate-[135deg]' : 'group-hover:rotate-12',
          )}
        />
        <line
          x1={isOpen ? 2 : 6}
          y1="12"
          x2="22"
          y2="12"
          className={clsx(
            'transition-[transform, opacity] duration-500 ease-in-out',
            'origin-center',
            isOpen ? 'rotate-[225deg]' : 'group-hover:-rotate-12',
          )}
        />
        <line
          x1="2"
          y1={isOpen ? 12 : 20}
          x2={isOpen ? 22 : 14}
          y2={isOpen ? 12 : 20}
          className={clsx(
            'transition-transform duration-300 ease-in-out',
            'origin-center',
            isOpen ? 'rotate-[315deg]' : 'group-hover:rotate-12',
          )}
        />
      </svg>
    </IconWrapper>
  );
};

export default MenuIcon;
