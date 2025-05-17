import Banner from '@/components/common/Banner';
import RecentPostList from '@/components/posts/list/RecentPostList';

export default async function Home() {
  return (
    <div>
      <Banner />
      <RecentPostList />
    </div>
  );
}
