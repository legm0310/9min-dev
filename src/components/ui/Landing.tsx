import clsx from 'clsx';

interface LandingProps {
  className?: string;
  children: React.ReactNode;
}

const Landing = ({ className = '', children }: LandingProps) => {
  return (
    <div>
      <div
        className={clsx(
          'text-4xl md:text-6xl',
          'w-full text-left font-semibold',
          'gradient-heading-color',
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Landing;
