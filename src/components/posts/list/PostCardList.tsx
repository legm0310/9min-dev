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

  const hasPost = posts.length === 0 ? false : true;

  return (
    <div>
      {hasPost ? (
        <ul className={`list-none ${gridColsMap} ${className}`}>
          {posts.map((post) => (
            <li key={`${post.category}/${post.slug}`}>
              <PostCard postInfo={post} columns={columns} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-10">
          <h3 className="text-center">🔖 업로드된 게시물이 없습니다..</h3>
        </div>
      )}
    </div>
  );
};

export default PostCardList;
