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
    </div>
  );
}
