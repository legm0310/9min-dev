'use client';

import { useEffect, useState } from 'react';
import { Redis } from '@upstash/redis';
import { ViewCountType } from '@/types/types';
import ViewIcon from './icon/ViewIcon';

const ViewCounter = ({
  slug,
  viewCountType,
  isIcon,
}: {
  slug?: string;
  viewCountType: ViewCountType;
  isIcon?: boolean;
}) => {
  const [views, setViews] = useState<number | null>(null);
  const redis = new Redis({
    url: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_URL,
    token: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_TOKEN,
  });
  useEffect(() => {
    const key = `viewcount:${viewCountType}`;

    if (viewCountType == 'blog-visitors') {
      redis.get<number>(key).then((res) => setViews(res));
    } else {
      redis.zscore(key, slug).then((res) => setViews(res));
    }
  }, []);

  return isIcon ? (
    <div className="flex text-sm text-muted-foreground">
      <ViewIcon width={16} height={16} />
      &nbsp;
      {views ? `${views.toLocaleString()}` : '-'}
    </div>
  ) : (
    <div className="text-sm text-muted-foreground">
      {views ? `${views.toLocaleString()} views ` : '- views '}
    </div>
  );
};

export default ViewCounter;
