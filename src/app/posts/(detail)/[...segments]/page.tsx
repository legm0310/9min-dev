import { notFound } from 'next/navigation';
import { Redis } from '@upstash/redis';
import PostContent from '@/components/posts/detail/PostContent';
import PostIntro from '@/components/posts/detail/PostIntro';
import {
  getPostPaths,
  getSegments,
  getPost,
  getCategoryPaths,
  isCategory,
} from '@/lib/post';
import PostList from '../../(list)/page';

const redis = Redis.fromEnv();

export async function generateStaticParams() {
  const categorySlugs = getCategoryPaths();
  const postSlugs = getPostPaths();

  const allSlugs = [...categorySlugs, ...postSlugs];

  const uniqueSegments = Array.from(
    new Map(allSlugs.map((s) => [getSegments(s), s])).values(),
  );

  return uniqueSegments.map((slug) => {
    // console.log('Slug', slug);
    // console.log('Segments', getSegments(slug));
    return { segments: getSegments(slug) };
  });
}

interface PostDetailProps {
  params: {
    segments: string[];
  };
}

const PostDetail = async ({ params }: PostDetailProps) => {
  const categoryPath = params.segments.slice(0, -2);
  const category = params.segments.at(-2)!;
  const slug = params.segments.at(-1)!;
  const postPath = params.segments.join('/');
  try {
    const post = await getPost(postPath);
    const initialViews = (await redis.zscore('viewcount:post', slug)) ?? 0;

    return (
      <>
        <PostIntro
          slug={slug}
          title={post.title}
          date={post.date}
          category={post.category}
          categoryLabel={post.categoryLabel}
          tags={post.tags}
          readingTime={post.readingTime}
          views={initialViews}
        />
        <article className="prose-base">
          <PostContent content={post.content} />
        </article>
      </>
    );
  } catch (err) {
    console.log(err);
    notFound();
  }
};

interface PostRouterProps {
  params: {
    segments: string[];
  };
}

const PostRouter = async ({ params }: PostRouterProps) => {
  const segments = Array.isArray(params.segments) ? params.segments : [];
  const isListPage = segments.length === 0 || isCategory(segments);
  return isListPage ? (
    <PostList params={params} />
  ) : (
    <PostDetail params={params} />
  );
};

export default PostRouter;
