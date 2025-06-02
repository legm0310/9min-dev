import Banner from '@/components/common/Banner';
import Profile from '@/components/common/Profile';
import LatestPostList from '@/components/posts/list/LatestPostList';

export default async function Home() {
  return (
    <div>
      <Banner />
      <Profile />
      <LatestPostList />
    </div>
  );
}
