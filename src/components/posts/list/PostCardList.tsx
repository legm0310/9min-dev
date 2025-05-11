import { PostSummary } from '@/types/types';
import PostCard from './PostCard';

interface PostCardListProps {
  posts: PostSummary[];
  className?: string;
}

const PostCardList = ({ posts, className = '' }: PostCardListProps) => {
  const hasPost = posts.length === 0 ? false : true;

  return hasPost ? (
    <ul className={`list-grid-2col list-none ${className}`}>
      {posts.map((post) => (
        <li key={post.slug}>
          <PostCard postInfo={post} />
        </li>
      ))}
    </ul>
  ) : (
    <h3>업로드된 게시물이 없습니다..</h3>
  );
};

export default PostCardList;
