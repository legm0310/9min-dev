import Link from 'next/link';
import { getPostSummaryList } from '@/lib/post';
import PostCardList from './PostCardList';

interface LatestPostListProps {
  className?: string;
}

const LatestPostList = async ({ className = '' }: LatestPostListProps) => {
  let posts = await getPostSummaryList();
  posts = posts.filter((post) => post.category !== 'admin');
  posts = posts.slice(0, 4);
  return (
    <section className={className}>
      <div className="flex flex-row justify-between border-b border-b-border-subtle">
        <h3 className="pb-2 font-medium text-secondary-foreground">
          Latest Posts
        </h3>
        <Link href={'/posts'} className="self-center md:self-start">
          <span className="p-2 underline text-secondary-foreground hover:text-link-muted">
            More Posts -{'>'}
          </span>
        </Link>
      </div>
      <PostCardList posts={posts} columns={1} />
    </section>
  );
};

export default LatestPostList;
