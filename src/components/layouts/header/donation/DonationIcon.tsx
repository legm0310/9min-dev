import { useState } from 'react';

const DonationIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };
  return (
    <div
      onClick={handleClick}
      className={`w-8 h-8 cursor-pointer transition-transform duration-300 text-[color:var(--nav-stroke)]
      ${isClicked ? ' rotate-45 text-yellow-400' : 'hover:rotate-12 hover:scale-110'}
    `}
    >
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        {/* Outer coin circle */}
        <circle cx="12" cy="12" r="9" />

        {/* Inner detailing – double ring */}
        <circle cx="12" cy="12" r="6" strokeWidth="1" />

        {/* ₩ symbol (centered) */}
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fontSize="10"
          fill="currentColor"
          fontFamily="sans-serif"
          fontWeight="300"
        >
          $
        </text>
      </svg>
    </div>
  );
};

export default DonationIcon;
