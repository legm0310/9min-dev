import PostListLayout from '@/app/posts/(list)/layout';
import PageCotainer from '@/components/layouts/PageContainer';
import TableOfContents from '@/components/posts/detail/TableOfContents';
import { isCategory } from '@/lib/post';

export default function PostSegmentLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { segments: string[] };
}) {
  const segments = Array.isArray(params.segments) ? params.segments : [];
  const isListPage = segments.length === 0 || isCategory(segments);
  return (
    //카테고리 여부에 따른 레이아웃 렌더링
    isListPage ? (
      <PostListLayout>{children}</PostListLayout>
    ) : (
      <div className="flex max-w-5xl mt-16 mx-auto">
        <PageCotainer className="max-w-3xl min-w-0 lg:min-w-[768px] mx-auto ">
          {children}
        </PageCotainer>
        <div className="w-60 ml-12 flex-shrink-0 hidden lg:block">
          <TableOfContents />
        </div>
      </div>
    )
  );
}
