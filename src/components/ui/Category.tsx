import Link from 'next/link';

interface CategoryProps {
  name: string;
  href?: string;
  className?: string;
}

const Category = ({ name, href, className = '' }: CategoryProps) => {
  return href ? (
    <Link href={href}>
      <h3 className={`my-1 ${className}`}>{name}</h3>
    </Link>
  ) : (
    <h3 className={`my-1 ${className}`}>{name}</h3>
  );
};

export default Category;
