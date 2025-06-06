import Link from 'next/link';

interface IconWrapperProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const IconWrapper = ({ href, className = '', children }: IconWrapperProps) => {
  if (href) {
    return (
      <Link href={href}>
        <div className={className}>{children}</div>
      </Link>
    );
  } else {
    return <div className={className}>{children}</div>;
  }
};

export default IconWrapper;
