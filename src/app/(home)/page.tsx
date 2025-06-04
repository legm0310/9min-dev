import Banner from '@/components/common/Banner';
import Profile from '@/components/common/Profile';
import LatestPostList from '@/components/posts/list/LatestPostList';

export default async function Home() {
  return (
    <div>
      <Banner className="my-20" />
      <Profile className="mb-20" />
      <LatestPostList className="mb-10" />
    </div>
  );
}
