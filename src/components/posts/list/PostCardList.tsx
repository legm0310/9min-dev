import { PostSummary } from '@/types/types';
import PostCard from './PostCard';

interface PostCardListProps {
  posts: PostSummary[];
  columns: 1 | 2 | 3 | 4;
  className?: string;
}

const PostCardList = ({
  posts,
  columns,
  className = '',
}: PostCardListProps) => {
  const gridColsMap = {
    1: 'list-grid-1col',
    2: 'list-grid-2col',
    3: 'list-grid-3col',
    4: 'list-grid-4col',
  }[columns];

  return (
    <div>
      <ul className={`list-none ${gridColsMap} ${className}`}>
        {posts.map((post) => (
          <li key={`${post.category}/${post.slug}`}>
            <PostCard postInfo={post} columns={columns} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostCardList;
