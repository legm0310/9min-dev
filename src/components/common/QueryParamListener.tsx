'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { toast } from 'sonner';

interface QueryParamListenerProps {
  denied?: string;
}

const QueryParamListener = ({ denied }: QueryParamListenerProps) => {
  const hasShown = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (!denied || hasShown.current) return;
    hasShown.current = true;

    setTimeout(() => {
      if (denied === 'unauthorized') {
        toast.warning('인증이 필요합니다');
      } else if (denied === 'forbidden') {
        toast.warning('접근 권한이 없습니다');
      }

      // 쿼리 파라미터 제거
      router.replace('/', { scroll: false });
    }, 0);
  }, [denied, router]);
  return null;
};

export default QueryParamListener;
