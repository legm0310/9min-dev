'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import LockIcon from './LockIcon';
import UnlockModal from './UnlockModal';
import { toast } from 'sonner';

const Lock = () => {
  const [open, setOpen] = useState(false);
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
    toast.success('Success to Unlcok');
    router.push('/lock');
  };

  const onFailure = () => {
    setOpen(false);
    toast.warning('Unregistered Users');
    router.push('/');
  };

  return (
    <div>
      <Button onClick={handleClick}>
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
