import PostContent from '@/components/posts/detail/PostContent';
import PostIntro from '@/components/posts/detail/PostIntro';
import Landing from '@/components/ui/Landing';
import { getPost, getPostSlugs } from '@/lib/post';
import { notFound } from 'next/navigation';

interface PostDetailProps {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => {
    const segments = slug.split('/');
    return { slug: segments };
  });
}

const PostDetail = async ({ params }: PostDetailProps) => {
  const slug = params.slug.join('/');
  try {
    const post = await getPost(slug);
    return (
      <>
        <Landing />

        <PostIntro
          title={post.meta.title}
          date={post.meta.date}
          category={post.meta.category}
          tags={post.meta.tags}
        />
        <article className="prose-base">
          <PostContent content={post.content} />
        </article>
      </>
    );
  } catch (err) {
    notFound();
  }
};

export default PostDetail;
