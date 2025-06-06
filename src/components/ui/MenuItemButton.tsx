import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItemButtonProps {
  label: string;
  href: string;
  className?: string;
}

const MenuItemButton = ({
  label,
  href,
  className = '',
}: MenuItemButtonProps) => {
  let itemClass = '';
  const path = usePathname();
  const isActive = path === href;
  console.log(isActive, path, href);

  if (isActive) {
    itemClass += 'text-foreground font-semibold';
  } else {
    itemClass += 'text-muted-foreground';
  }
  return (
    <Link
      href={href}
      className={clsx(
        itemClass,
        'menu-item px-1 md:px-2 py-1 rounded-md transition-all duration-200 hover:px-1.5 md:hover:px-2.5 hover:bg-muted-hover hover:shadow-md',
        className,
      )}
    >
      {label}
    </Link>
  );
};

export default MenuItemButton;
