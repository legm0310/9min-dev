interface MobileMenuItemProps {
  children: React.ReactNode;
  className?: string;
}

const MoblieMenuItem = ({ children, className = '' }: MobileMenuItemProps) => {
  return (
    <li
      className={`border-b border-border-subtle pb-4 text-muted-foreground hover:text-foreground hover:font-medium ${className}`}
    >
      {children}
    </li>
  );
};

export default MoblieMenuItem;
