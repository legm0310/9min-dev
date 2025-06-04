import { getPostSummaryList } from '@/lib/post';
import PostCardList from './PostCardList';

interface LatestPostListProps {
  className?: string;
}

const LatestPostList = async ({ className = '' }: LatestPostListProps) => {
  let posts = await getPostSummaryList();
  posts = posts.filter((post) => post.category !== 'admin');

  return (
    <section className={className}>
      <h3 className="pb-2 font-medium text-secondary-foreground border-b border-b-border-subtle">
        Latest Posts
      </h3>
      <PostCardList posts={posts} columns={1} />
    </section>
  );
};

export default LatestPostList;
