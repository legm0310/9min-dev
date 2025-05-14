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
        'menu-item px-1 md:px-2 py-1 rounded-md text-muted-foreground hover:bg-muted-hover hover:italic hover:text-foreground',
        className,
      )}
    >
      {label}
    </Link>
  );
};

export default MenuItemNavButton;
