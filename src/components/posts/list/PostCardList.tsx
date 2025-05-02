import { PostSummary } from '@/types/types';
import PostCard from './PostCard';

interface PostCardListProps {
  posts: PostSummary[];
}

const PostCardList = ({ posts }: PostCardListProps) => {
  return (
    <div className="list-grid-only-col1">
      {posts.map((post) => (
        <PostCard key={post.slug} postInfo={post} />
      ))}
    </div>
  );
};

export default PostCardList;
