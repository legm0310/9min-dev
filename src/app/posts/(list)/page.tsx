import PostContent from '@/components/posts/detail/PostContent';
import PostIntro from '@/components/posts/detail/PostIntro';
import Landing from '@/components/ui/Landing';
import { getPostListMeta } from '@/lib/post';

const PostList = async () => {
  const posts = await getPostListMeta();
  console.log(posts);
  return <section></section>;
};
export default PostList;
