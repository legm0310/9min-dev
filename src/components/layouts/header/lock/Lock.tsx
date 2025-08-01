'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import LockIcon from './LockIcon';
import UnlockModal from './UnlockModal';
import { toast } from 'sonner';

interface LockProps {
  className?: string;
}

const Lock = ({ className = '' }: LockProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [isUnlocked, setIsUnlocked] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/check-auth', { cache: 'no-cache' })
      .then((res) => res.json())
      .then(({ valid }) => setIsUnlocked(valid));
  }, []);

  const handleClick = () => {
    if (isUnlocked) {
      router.push('/lock');
    } else {
      setOpen(true);
    }
  };

  const onSuccess = () => {
    setIsUnlocked(true);
    setOpen(false);
    toast.success('잠금 해제 성공');
    router.push('/lock');
  };

  const onFailure = () => {
    setOpen(false);
    toast.warning('접근 권한이 없습니다');
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        className={`px-1 md:px-1 py-1 group ${className} `}
      >
        <LockIcon open={!!isUnlocked} />
      </Button>
      <UnlockModal
        open={open}
        onClose={() => setOpen(false)}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
};

export default Lock;
