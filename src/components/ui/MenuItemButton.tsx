import clsx from 'clsx';
import Link from 'next/link';

interface MenuItemButtonProps {
  label: string;
  href: string;
  className?: string;
}

const MenuItemNavButton = ({
  label,
  href,
  className = '',
}: MenuItemButtonProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        'menu-item px-1 md:px-2 py-1 rounded-md transition-all duration-200 text-muted-foreground hover:px-1.5 md:hover:px-2.5 hover:text-foreground hover:bg-muted-hover hover:shadow-md hover:skew-x-[-5deg]',
        className,
      )}
    >
      {label}
    </Link>
  );
};

export default MenuItemNavButton;
