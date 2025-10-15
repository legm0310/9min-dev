import PageCotainer from '@/components/layouts/PageContainer';
import TagFilter from '@/components/posts/list/TagFilter';
import { getTagsWithCount } from '@/lib/post';

export default async function PostListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //getPost 호출 최적화
  const tags = await getTagsWithCount();
  return (
    <div className="flex">
      {/* tag filter */}
      <div className="hidden xl:block lg:absolute mt-[204px] ml-20">
        <TagFilter tags={tags} />
      </div>
      {/* main content */}
      <PageCotainer className="max-w-4xl mx-auto">{children}</PageCotainer>
    </div>
  );
}
