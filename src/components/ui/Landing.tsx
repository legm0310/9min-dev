import clsx from 'clsx';

interface LandingProps {
  children: React.ReactNode;
}

const Landing = ({ children }: LandingProps) => {
  return (
    <div>
      <div
        className={clsx(
          'w-full mb-16 px-2 text-center font-semibold text-transparent',
          'duration-200 bg-clip-text animate-gradient-scroll',
          'bg-[image:theme(backgroundImage.gradient)] bg-[length:200%_100%]',
          'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Landing;
