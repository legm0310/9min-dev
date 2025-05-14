const DarkIcon = ({ ...props }: { className?: string }) => {
  return (
    <div
      className={`w-5 md:w-6 h-5 md:h-6 group-hover:rotate-12 group-hover:scale-110 duration-200 text-foreground`}
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

        {/* 작대기 – 다크모드 전용 등장 애니메이션 */}
        <line
          x1="4"
          y1="4"
          x2="20"
          y2="20"
          className="origin-center animate-[rotateIn_0.3s_ease-out]"
        />
      </svg>
    </div>
  );
};

export default DarkIcon;
