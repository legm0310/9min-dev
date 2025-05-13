export const Image = ({
  alt = '',
  className = '',
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      {...props}
      alt={alt}
      className={`mx-auto mb-0 rounded-md ${className}`}
    />
    {alt && alt !== '' && (
      <span className="mt-2 mb-8 block text-center text-sm text-muted-foreground">
        {alt}
      </span>
    )}
  </>
);
