import ViewCounter from '@/components/common/ViewCounter';
import Category from '@/components/ui/Category';
import Tag from '@/components/ui/Tag';
import { categoryMap, getCategoryLabel } from '@/lib/post';
import { parseDateToString } from '@/utils/date';

interface PostIntroProps {
  slug: string;
  title: string;
  date: Date;
  category: string;
  tags: string[];
  readingTime: string;
}

const PostIntro = ({
  slug,
  title,
  date,
  category,
  tags,
  readingTime,
}: PostIntroProps) => {
  const label = getCategoryLabel(category);
  return (
    <header className="mb-10">
      <div className="mb-2 section-heading">{title}</div>
      <Category
        name={label ?? category}
        href={`/posts/${category}`}
        className="text-primary hover:underline"
      />
      <div className="my-2 flex justify-between">
        <div className="text-sm text-muted-foreground">
          {parseDateToString(date)}
        </div>
        <div className="flex">
          <ViewCounter slug={slug} viewCountType={'post'} isIcon={false} />
          <div className="text-sm text-muted-foreground">
            &nbsp;&middot;&nbsp;{`${readingTime}`}
          </div>
        </div>
      </div>
      <div className="mt-4 flex gap-3">
        {tags?.map((tag) => <Tag key={tag} name={tag} />)}
      </div>
    </header>
  );
};

export default PostIntro;
