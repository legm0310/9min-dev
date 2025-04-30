import PageCotainer from '@/components/layouts/PageContainer';
import TableOfContents from '@/components/posts/detail/TableOfContents';

export default function PostDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //게시물 메인, toc
    <div className="flex max-w-5xl mx-auto">
      <PageCotainer className="max-w-3xl min-w-0 lg:min-w-[768px] mx-auto ">
        {children}
      </PageCotainer>
      <div className="w-60 mt-16 ml-12 flex-shrink-0 hidden lg:block">
        <TableOfContents />
      </div>
    </div>
  );
}
