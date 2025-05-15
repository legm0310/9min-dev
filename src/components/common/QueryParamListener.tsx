'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

const QueryParamListener = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const denied = searchParams.get('denied');

  useEffect(() => {
    if (!denied) return;

    setTimeout(() => {
      if (denied === 'unauthorized') {
        toast.warning('인증이 필요합니다');
      } else if (denied === 'forbidden') {
        toast.warning('접근 권한이 없습니다');
      }

      // 쿼리 파라미터 제거
      router.replace(pathname, { scroll: false });
    }, 0);
  }, [denied, router, pathname]);
  return null;
};

export default QueryParamListener;
