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
  const posts = await getPostSummaryList(category);

  return (
    <section>
      <CategoryFilter curCategory={category} />
      <PostCardList posts={posts} />
    </section>
  );
};
export default PostList;
