import { parseDateToString } from '@/utils/date';

interface PostIntroProps {
  title: string;
  date: Date;
  category: string;
  tags: string[];
}

const PostIntro = ({ title, date, category, tags }: PostIntroProps) => {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="text-sm text-gray-500 mt-1">
        {parseDateToString(date)}
      </div>
      <div className="mt-2 flex gap-3">
        {category && <span className="text-blue-500">📂 {category}</span>}
        {tags?.map((tag) => (
          <span key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded">
            #{tag}
          </span>
        ))}
      </div>
    </header>
  );
};

export default PostIntro;
