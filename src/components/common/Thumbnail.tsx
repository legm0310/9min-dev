import Image from 'next/image';

interface ThumbnailProps {
  src: string;
  alt?: string;
  className?: string;
}

const Thumbnail = ({ src, alt = '', className = '' }: ThumbnailProps) => {
  return (
    <div
      className={`relative aspect-video w-full overflow-hidden ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1000px) 50vw, 450px"
          style={{ objectFit: 'cover' }}
        />
      ) : (
        <div
          className="w-full h-full bg-[url('/contents/light-default-thumbnail.png')] dark:bg-[url('/contents/dark-default-thumbnail.png')] bg-cover bg-center"
          role="img"
          aria-label={alt}
        />
      )}
    </div>
  );
};

export default Thumbnail;
