import Link from 'next/link';

interface TagProps {
  name: string;
  href?: string;
}

const Tag = ({ name, href }: TagProps) => {
  const className = `tag-pill`;
  return href ? (
    <Link href={href} className={className}>
      #{name}
    </Link>
  ) : (
    <span className={className}>#{name}</span>
  );
};

export default Tag;
