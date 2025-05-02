import PageCotainer from '@/components/layouts/PageContainer';

const NotFound = () => {
  return (
    <PageCotainer className="w-full">
      <div className="flex flex-1 flex-col items-center">
        <h1 className="mt-16"> Page Not Found</h1>
        <p className="mt-4">페이지를 찾을 수 없습니다.</p>
      </div>
    </PageCotainer>
  );
};

export default NotFound;
