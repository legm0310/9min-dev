import { getPostSummaryList } from '@/lib/post';
import PostCardList from './PostCardList';

const RecentPostList = async () => {
  const posts = await getPostSummaryList();
  return (
    <section>
      <div className="mb-10 section-heading-semibold">Recent Posts</div>
      <PostCardList posts={posts} />
    </section>
  );
};

export default RecentPostList;
