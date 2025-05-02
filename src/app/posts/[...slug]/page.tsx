import PostContent from '@/components/posts/detail/PostContent';
import PostIntro from '@/components/posts/detail/PostIntro';
import { getPost, getPostPaths, getSegments } from '@/lib/post';
import { notFound } from 'next/navigation';

interface PostDetailProps {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams() {
  const slugs = getPostPaths();
  return slugs.map((slug) => {
    console.log(slug, '', getSegments(slug));
    return { slug: getSegments(slug) };
  });
}

//PostRouter로 리팩터링
const PostDetail = async ({ params }: PostDetailProps) => {
  const slug = params.slug.join('/');
  try {
    const post = await getPost(slug);
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

export default PostDetail;
