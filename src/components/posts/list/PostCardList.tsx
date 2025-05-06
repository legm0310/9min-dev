import { PostSummary } from '@/types/types';
import PostCard from './PostCard';

interface PostCardListProps {
  posts: PostSummary[];
  className?: string;
}

const PostCardList = ({ posts, className = '' }: PostCardListProps) => {
  const hasPost = posts.length === 0 ? false : true;

  return hasPost ? (
    <div className={`list-grid-only-col1 ${className}`}>
      {posts.map((post) => (
        <PostCard key={post.slug} postInfo={post} />
      ))}
    </div>
  ) : (
    <h3>업로드된 게시물이 없습니다..</h3>
  );
};

export default PostCardList;
