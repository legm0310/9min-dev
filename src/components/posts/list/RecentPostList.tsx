import { getPostSummaryList } from '@/lib/post';
import PostCardList from './PostCardList';

const RecentPostList = async () => {
  let posts = await getPostSummaryList();
  posts = posts.filter((post) => post.category !== 'admin');
  return (
    <section>
      <div className="mb-10 section-heading-semibold">Recent Posts</div>
      <PostCardList posts={posts} />
    </section>
  );
};

export default RecentPostList;
