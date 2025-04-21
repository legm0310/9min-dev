import QueryParamListener from '@/components/common/QueryParamListener';
import Landing from '@/components/ui/Landing';

export default async function Home({
  searchParams,
}: {
  searchParams: { denied?: string };
}) {
  return (
    <div>
      <QueryParamListener denied={searchParams.denied} />
      <Landing />
      <p>태그, 카테고리들</p>
      <p>최근 게시물</p>
    </div>
  );
}
