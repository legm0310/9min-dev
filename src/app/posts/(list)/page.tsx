import PostListContent from '@/components/posts/list/PostListContent';

export const revalidate = 60;

const PostList = async () => {
  return <PostListContent />;
};

export default PostList;
