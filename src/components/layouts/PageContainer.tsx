const PageCotainer = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <main
      className={`flex flex-col flex-1 min-h-[calc(100vh-13.5rem)] px-4 sm:px-6 ${className}`}
    >
      {children}
    </main>
  );
};

export default PageCotainer;
