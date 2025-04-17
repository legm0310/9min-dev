import { useState } from 'react';

// type LockIconProps = {
//   onToggle?: (locked: boolean) => void;
// };

const LockIcon = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    const UNLOCK_TIME = 300;
    setIsAnimating(true);
    setTimeout(() => {
      setIsLocked(!isLocked);
      setIsAnimating(false);
    }, UNLOCK_TIME);
  };

  return (
    <div
      onClick={handleClick}
      className={`w-8 h-8 cursor-pointer transition-transform duration-300 
        ${isAnimating ? 'rotate-45' : 'hover:rotate-12 hover:scale-110'}
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-gray-800"
      >
        <rect x="4" y="11" width="16" height="10" rx="2" ry="2" />
        <path d="M12 16v2" />
        <circle cx="12" cy="15" r="1" />
        <g
          className={`transition-transform duration-300 ease-in-out
            origin-[16px_7px]
            ${isLocked ? 'translate-x-0 translate-y-0 rotate-0' : 'translate-x-[7px]'}
          `}
        >
          <path d="M8 11V7a4 4 0 018 0v4" />
        </g>
      </svg>
    </div>
  );
};

export default LockIcon;
