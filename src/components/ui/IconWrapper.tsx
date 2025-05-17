import Link from 'next/link';

interface IconWrapperProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const IconWrapper = ({ href, className = '', children }: IconWrapperProps) => {
  return (
    <Link href={href}>
      <div className={className}>{children}</div>
    </Link>
  );
};

export default IconWrapper;
