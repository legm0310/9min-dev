import clsx from 'clsx';

const Landing = () => {
  return (
    <div>
      <div
        className={clsx(
          'w-full px-2 text-center font-bold text-transparent',
          'duration-200 bg-clip-text animate-gradient-scroll',
          'bg-[image:theme(backgroundImage.gradient)] bg-[length:200%_100%]',
          'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
        )}
      >
        이규민의 땀내나는 <span className="italic">사나이클럽</span>
      </div>
    </div>
  );
};

export default Landing;
