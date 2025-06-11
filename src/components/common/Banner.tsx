import Link from 'next/link';
import Landing from '../ui/Landing';

interface BannerProps {
  className?: string;
}

const Banner = ({ className = '' }: BannerProps) => {
  return (
    <section
      className={`flex flex-col items-center md:items-start ${className}`}
    >
      <h2 className="mb-4 font-medium ">경험하고 탐구한 내용을 기록합니다</h2>
      <Landing className="mb-4">
        이규민의 <span className="italic pr-2">사나이클럽</span>
      </Landing>
      <Link href={'/posts'} className="self-center md:self-start">
        <span className="p-2 underline text-secondary-foreground hover:text-link-muted">
          More Posts -{'>'}
        </span>
      </Link>
    </section>
  );
};

export default Banner;
