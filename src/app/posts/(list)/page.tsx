import { Redis } from '@upstash/redis';
import CategoryFilter from '@/components/posts/list/CategoryFilter';
import PostCardList from '@/components/posts/list/PostCardList';
import { getPostSummaryList } from '@/lib/post';

const redis = Redis.fromEnv();

interface PostListProps {
  params: {
    segments: string[];
  };
}

export const revalidate = 60;

const PostList = async ({ params }: PostListProps) => {
  const category = params.segments ? params.segments.join('/') : undefined;

  let posts = await getPostSummaryList(category);

  if (!category) {
    posts = posts.filter((post) => post.category !== 'admin');
  }

  const postsWithViews = await Promise.all(
    posts.map(async (post) => {
      const v = await redis.zscore('viewcount:post', post.slug);
      post.views = v ?? 0;
      return post;
    }),
  );

  return (
    <section className="mt-16">
      <CategoryFilter curCategory={category} />
      <PostCardList posts={postsWithViews} columns={2} className="mt-12" />
    </section>
  );
};
export default PostList;
