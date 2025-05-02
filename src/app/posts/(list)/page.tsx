import CategoryFilter from '@/components/posts/list/CategoryFilter';
import PostCardList from '@/components/posts/list/PostCardList';
import { getPostSummaryList } from '@/lib/post';

const PostList = async () => {
  const posts = await getPostSummaryList();
  //카테고리 (AllPost 시작)
  return (
    <section>
      <CategoryFilter />
      <PostCardList posts={posts} />
    </section>
  );
};
export default PostList;
