import { getPostSummaryList } from '@/lib/post';
import PostCardList from './PostCardList';

interface LatestPostListProps {
  className?: string;
}

const LatestPostList = async ({ className = '' }: LatestPostListProps) => {
  let posts = await getPostSummaryList();
  posts = posts.filter((post) => post.category !== 'admin');

  const hasPost = posts.length === 0 ? false : true;

  return (
    <section>
      <h3
        className="pb-2 font-medium text-secondary-foreground
      border-b-[1px]
      border-b-gray-200"
      >
        Latest Posts
      </h3>
      {hasPost ? (
        <PostCardList posts={posts} className="list-grid-2col mt-8" />
      ) : (
        <h3>업로드된 게시물이 없습니다..</h3>
      )}
    </section>
  );
};

export default LatestPostList;
