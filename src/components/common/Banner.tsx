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
      {/* <h2 className="mb-4 font-medium ">경험하고 탐구한 내용을 기록합니다</h2> */}
      <Landing className="p-1 mb-4 text-2xl xs:text-3xl md:text-4xl italic font-semibold">
        경험하고 탐구한 내용을 기록합니다
      </Landing>
      {/* <Landing className="mb-4 text-5xl md:text-6xl">
        이규민의 <span className="italic pr-2">개발 기행</span>
      </Landing> */}
    </section>
  );
};

export default Banner;
