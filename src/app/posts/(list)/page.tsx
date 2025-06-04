import CategoryFilter from '@/components/posts/list/CategoryFilter';
import PostCardList from '@/components/posts/list/PostCardList';
import { getPostSummaryList } from '@/lib/post';

interface PostListProps {
  params: {
    segments: string[];
  };
}

const PostList = async ({ params }: PostListProps) => {
  const category = params.segments ? params.segments.join('/') : undefined;
  let posts = await getPostSummaryList(category);
  if (!category) {
    posts = posts.filter((post) => post.category !== 'admin');
  }

  return (
    <section className="mt-16">
      <CategoryFilter curCategory={category} />
      <PostCardList posts={posts} columns={2} className="mt-12" />
    </section>
  );
};
export default PostList;
