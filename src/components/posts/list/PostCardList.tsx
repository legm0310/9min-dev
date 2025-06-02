import { PostSummary } from '@/types/types';
import PostCard from './PostCard';

interface PostCardListProps {
  posts: PostSummary[];
  className?: string;
}

const PostCardList = ({ posts, className = '' }: PostCardListProps) => {
  return (
    <div>
      <ul className={`list-none ${className}`}>
        {posts.map((post) => (
          <li key={`${post.category}/${post.slug}`}>
            <PostCard postInfo={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostCardList;
