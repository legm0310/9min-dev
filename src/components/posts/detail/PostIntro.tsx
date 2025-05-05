import Category from '@/components/ui/Category';
import Tag from '@/components/ui/Tag';
import { parseDateToString } from '@/utils/date';

interface PostIntroProps {
  title: string;
  date: Date;
  category: string;
  tags: string[];
  readingTime: string;
}

const PostIntro = ({
  title,
  date,
  category,
  tags,
  readingTime,
}: PostIntroProps) => {
  return (
    <header className="mb-10">
      <div className="mb-2 section-heading">{title}</div>
      <Category name={category} className="text-primary" />
      <div className="my-2 flex justify-between">
        <div className="text-sm text-muted-foreground">
          {parseDateToString(date)}
        </div>
        <div className="text-sm text-muted-foreground">{readingTime}</div>
      </div>
      <div className="mt-4 flex gap-3">
        {tags?.map((tag) => <Tag key={tag} name={tag} />)}
      </div>
    </header>
  );
};

export default PostIntro;
