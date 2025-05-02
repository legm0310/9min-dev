'use client';

import PageCotainer from '@/components/layouts/PageContainer';

const Error = () => {
  return (
    <PageCotainer className="w-full">
      <div className="flex flex-1 flex-col items-center">
        <h1 className="mt-16">Internal Error</h1>
        <p className="mt-4">잠시 후 다시 이용해주세요.</p>
      </div>
    </PageCotainer>
  );
};

export default Error;
