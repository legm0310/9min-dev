import Link from 'next/link';
import Category from '@/components/ui/Category';
import Tag from '@/components/ui/Tag';
import Thumbnail from '@/components/common/Thumbnail';
import { PostSummary } from '@/types/types';
import { parseDateToString } from '@/utils/date';

interface PostCardProps {
  postInfo: PostSummary;
  columns: 1 | 2 | 3 | 4;
}
/**
 * @TODO 마우스 호버 시 게시물 정보 칸에 디스크립션
 */
const PostCard = ({ postInfo, columns }: PostCardProps) => {
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
        className="group py-6 flex flex-col border-b border-b-border-subtle transition-[padding,box-shadow] duration-300 hover:shadow-md hover:pl-2"
      >
        <Category
          name={postInfo.categoryLabel}
          className="mb-4 text-primary md:text-lg"
        />
        <div className="flex flex-row gap-x-8">
          <div className="flex flex-col basis-full sm:basis-3/4">
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
            className={`hidden sm:flex w-52 h-full md:flex-shrink-0 overflow-hidden border border-border-subtle rounded-md`}
          >
            <Thumbnail
              src={postInfo.thumbnail}
              alt={postInfo.title}
              className="transform transition-transform duration-300 group-hover:scale-110 rounded-md"
            />
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <Link
        href={`${postInfo.url}`}
        className="group h-full flex flex-col flex-1 rounded-md transition-[padding,box-shadow] duration-300 hover:shadow-lg"
      >
        <div className="overflow-hidden border border-border-subtle rounded-t-md">
          <Thumbnail
            src={postInfo.thumbnail}
            alt={postInfo.title}
            className="transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <div className="flex flex-col flex-1 p-2">
          <Category
            name={postInfo.categoryLabel}
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
