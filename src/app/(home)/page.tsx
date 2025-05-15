import RecentPostList from '@/components/posts/list/RecentPostList';
import Landing from '@/components/ui/Landing';

export default async function Home() {
  return (
    <div>
      <Landing>
        <>
          이규민의 <span className="italic">사나이클럽</span>
        </>
      </Landing>
      <RecentPostList />
    </div>
  );
}
