import Button from '@/components/ui/Button';
import Link from 'next/link';

const LockPage = () => {
  //채팅창 접근 ui 임시
  return (
    <div>
      <Button className="border-2 shadow-md">
        <Link href="/lock/chat">
          <div className="w-full">
            <p className="px-4 py-3 text-lg font-semibold">ai 채팅 바로가기</p>
          </div>
        </Link>
      </Button>
    </div>
  );
};

export default LockPage;
