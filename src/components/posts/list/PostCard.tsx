import Link from 'next/link';
import Image from 'next/image';
import Category from '@/components/ui/Category';
import Tag from '@/components/ui/Tag';
import { getCategoryLabel } from '@/lib/post';
import { PostSummary } from '@/types/types';
import { parseDateToString } from '@/utils/date';

interface PostCardProps {
  postInfo: PostSummary;
}

const PostCard = ({ postInfo }: PostCardProps) => {
  const label = getCategoryLabel(postInfo.category) ?? postInfo.category;

  return (
    <Link
      href={`${postInfo.url}`}
      className="px-2 py-4 rounded-md hover:shadow-lg"
    >
      <div className="relative aspect-video w-full rounded-t-md">
        <Image
          src={postInfo.thumbnail}
          alt={postInfo.title}
          sizes="(max-width: 1000px) 50vw, 450px"
          fill
          priority
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <Category name={label} className="text-primary" />
      <h2 className="my-1">{postInfo.title}</h2>
      <div className="my-2 flex gap-1.5">
        {postInfo.tags.map((tag) => (
          <Tag key={tag} name={tag} />
        ))}
      </div>
      <div className="flex justify-between">
        <div className="text-sm text-muted-foreground">
          {parseDateToString(postInfo.date)}
        </div>
        <div className="text-sm text-muted-foreground">
          {postInfo.readingTime}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
