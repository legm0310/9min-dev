import { notFound } from 'next/navigation';
import PostContent from '@/components/posts/detail/PostContent';
import PostIntro from '@/components/posts/detail/PostIntro';
import PostListContent from '@/components/posts/list/PostListContent';
import {
  getPostPaths,
  getSegments,
  getPost,
  getCategoryPaths,
  isCategory,
} from '@/lib/post';

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
  segments: string[];
}

const PostDetail = async ({ segments }: PostDetailProps) => {
  const slug = segments.at(-1)!;
  const postPath = segments.join('/');
  try {
    const post = await getPost(postPath);

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
          views={0}
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
  params: Promise<{
    segments: string[];
  }>;
}

const PostRouter = async ({ params }: PostRouterProps) => {
  const { segments } = await params;
  const normalizedSegments = Array.isArray(segments) ? segments : [];
  const isListPage =
    normalizedSegments.length === 0 || isCategory(normalizedSegments);
  return isListPage ? (
    <PostListContent segments={normalizedSegments} />
  ) : (
    <PostDetail segments={normalizedSegments} />
  );
};

export default PostRouter;
