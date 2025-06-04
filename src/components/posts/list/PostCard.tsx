import Link from 'next/link';
import Category from '@/components/ui/Category';
import Tag from '@/components/ui/Tag';
import { getCategoryLabel } from '@/lib/post';
import { PostSummary } from '@/types/types';
import { parseDateToString } from '@/utils/date';
import Thumbnail from '@/components/ui/Thumbnail';

interface PostCardProps {
  postInfo: PostSummary;
  columns: 1 | 2 | 3 | 4;
}
/**
 * @TODO 마우스 호버 시 게시물 정보 칸에 디스크립션
 */
const PostCard = ({ postInfo, columns }: PostCardProps) => {
  const label = getCategoryLabel(postInfo.category) ?? postInfo.category;

  const cardTitleClass = {
    1: 'text-xl md:text-2xl',
    2: 'text-lg md:text-xl',
    3: 'text-lg md:text-xl',
    4: 'text-base md:text-lg',
  }[columns];

  const cardCategoryClass = {
    1: 'text-base md:text-lg',
    2: 'text-sm md:text-base',
    3: 'text-sm md:text-base',
    4: 'text-sm md:text-base',
  }[columns];

  const tagVisibilityClass = columns === 4 ? 'overflow-hidden' : 'flex-wrap';

  if (columns === 1) {
    return (
      <Link
        href={`${postInfo.url}`}
        className="py-6 flex flex-col border-b border-b-border-subtle hover:shadow-lg hover:pl-1"
      >
        <Category name={label} className="mb-4 text-primary md:text-lg" />
        <div className="flex flex-row gap-x-8">
          <div className="flex flex-col w-full sm:basis-3/4">
            <h2 className={`line-clamp-2 ${cardTitleClass}`}>
              {postInfo.title}
            </h2>
            <div className="mt-2 line-clamp-2 flex flex-wrap gap-1.5">
              {postInfo.tags.length > 0 ? (
                postInfo.tags.map((tag) => <Tag key={tag} name={tag} />)
              ) : (
                <span className="invisible tag-pill">#placeholder</span>
              )}
            </div>
            <div className="mt-6 flex justify-between">
              <div className="text-sm text-muted-foreground">
                {parseDateToString(postInfo.date)}
              </div>
              <div className="text-sm text-muted-foreground">
                {postInfo.readingTime}
              </div>
            </div>
          </div>
          <div
            className={`hidden sm:flex sm:basis-1/4 w-52 h-[5.625rem] justify-center items-start`}
          >
            <Thumbnail
              src={postInfo.thumbnail}
              alt={postInfo.title}
              className="rounded-md"
            />
          </div>
        </div>
      </Link>
    );
  } else {
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
          <Category
            name={label}
            className={`text-primary ${cardCategoryClass}`}
          />
          <h2 className={`my-1 line-clamp-2 ${cardTitleClass}`}>
            {postInfo.title}
          </h2>
          <div className={`my-2 flex gap-1.5 ${tagVisibilityClass}`}>
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
  }
};

export default PostCard;
