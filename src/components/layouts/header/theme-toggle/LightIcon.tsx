import { useTheme } from 'next-themes';

const LightIcon = ({ className, ...props }: { className?: string }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`w-8 h-8 group hover:rotate-12 hover:scale-110 duration-200 text-[color:var(--nav-stroke)] ${className ?? ''}`}
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
        {/* 전구 본체 */}
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12v2h8v-2a7 7 0 0 0-4-12z" />
        <path d="M10 10l2 2l2-2" />

        {/* 빛살 효과 */}
        <g
          className={`transition-all duration-300 ease-out ${
            theme === 'dark'
              ? 'scale-0 animate-[fadeout_0.3s_ease-in]'
              : 'group-hover:scale-[1.1]'
          }`}
        >
          <line
            x1="4"
            y1="4"
            x2="5"
            y2="5"
            strokeOpacity="0.4"
            strokeLinecap="round"
          />
          <line
            x1="20"
            y1="4"
            x2="19"
            y2="5"
            strokeOpacity="0.4"
            strokeLinecap="round"
          />
          <line
            x1="2"
            y1="12"
            x2="4"
            y2="12"
            strokeOpacity="0.4"
            strokeLinecap="round"
          />
          <line
            x1="22"
            y1="12"
            x2="20"
            y2="12"
            strokeOpacity="0.4"
            strokeLinecap="round"
          />
          <line
            x1="4.5"
            y1="19.5"
            x2="5.5"
            y2="18.5"
            strokeOpacity="0.4"
            strokeLinecap="round"
          />
          <line
            x1="19.5"
            y1="19.5"
            x2="18.5"
            y2="18.5"
            strokeOpacity="0.4"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default LightIcon;
