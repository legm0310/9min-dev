import RecentPostList from '@/components/posts/list/RecentPostList';
import Landing from '@/components/ui/Landing';

export default async function Home() {
  return (
    <div>
      {/* <Landing /> */}
      <RecentPostList />
    </div>
  );
}
