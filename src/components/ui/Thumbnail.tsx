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
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 1000px) 50vw, 450px"
        style={{ objectFit: 'cover' }}
        // className={`${className}`}
      />
    </div>
  );
};

export default Thumbnail;
