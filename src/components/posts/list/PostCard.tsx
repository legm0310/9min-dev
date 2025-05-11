import Link from 'next/link';
import Image from 'next/image';
import Category from '@/components/ui/Category';
import Tag from '@/components/ui/Tag';
import { getCategoryLabel } from '@/lib/post';
import { PostSummary } from '@/types/types';
import { parseDateToString } from '@/utils/date';
import Thumbnail from '@/components/ui/Thumbnail';

interface PostCardProps {
  postInfo: PostSummary;
}
/**
 * @TODO 마우스 호버 시 게시물 정보 칸에 디스크립션
 */
const PostCard = ({ postInfo }: PostCardProps) => {
  const label = getCategoryLabel(postInfo.category) ?? postInfo.category;

  return (
    <Link
      href={`${postInfo.url}`}
      className="h-full flex flex-col flex-1 rounded-md hover:shadow-lg"
    >
      <Thumbnail
        src={postInfo.thumbnail}
        alt={postInfo.title}
        className="rounded-t-md"
      />

      <div className="flex flex-col flex-1 p-2">
        <Category name={label} className="text-primary" />
        <h2 className="my-1 line-clamp-2">{postInfo.title}</h2>
        <div className="my-2 flex flex-wrap gap-1.5">
          {postInfo.tags.length > 0 ? (
            postInfo.tags.map((tag) => <Tag key={tag} name={tag} />)
          ) : (
            <span className="invisible tag-pill">#placeholder</span>
          )}
        </div>
        <div className="mt-auto flex justify-between">
          <div className="text-sm text-muted-foreground">
            {parseDateToString(postInfo.date)}
          </div>
          <div className="text-sm text-muted-foreground">
            {postInfo.readingTime}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
