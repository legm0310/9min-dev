import { notFound } from 'next/navigation';
import PostContent from '@/components/posts/detail/PostContent';
import PostIntro from '@/components/posts/detail/PostIntro';
import { getPost, getPostPaths, getSegments, isCategory } from '@/lib/post';
import PostList from '../../(list)/page';

export async function generateStaticParams() {
  const slugs = getPostPaths();
  return slugs.map((slug) => {
    console.log(slug, '', getSegments(slug));
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
    return (
      <>
        <PostIntro
          title={post.title}
          date={post.date}
          category={post.category}
          tags={post.tags}
          readingTime={post.readingTime}
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
