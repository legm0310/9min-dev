import Category from '@/components/ui/Category';
import Tag from '@/components/ui/Tag';
import { PostSummary } from '@/types/types';
import { parseDateToString } from '@/utils/date';
import Image from 'next/image';
import Link from 'next/link';

interface PostCardProps {
  postInfo: PostSummary;
}

const PostCard = ({ postInfo }: PostCardProps) => {
  return (
    <Link href={`${postInfo.url}`} className="">
      {postInfo.thumbnail && (
        <Image src={postInfo.thumbnail} alt={postInfo.title} />
      )}
      <Category name={postInfo.category} className="hover:underline" />
      <h2 className="my-1">{postInfo.title}</h2>
      <div className="my-2 flex gap-1.5">
        {postInfo.tags.map((tag) => (
          <Tag key={tag} name={tag} />
        ))}
      </div>
      <div className="flex justify-between">
        <div className="sm-text">{parseDateToString(postInfo.date)}</div>
        <div className="sm-text">{postInfo.readingTime}</div>
      </div>
    </Link>
  );
};

export default PostCard;
