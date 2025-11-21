'use client';

import { useEffect, useState } from 'react';
import ViewCounter from '@/components/common/ViewCounter';

const PostView = ({
  slug,
  initialViews,
}: {
  slug: string;
  initialViews: number;
}) => {
  const [views, setViews] = useState(initialViews);
  useEffect(() => {
    const run = async () => {
      const res = await fetch('/api/viewcount', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, viewCountType: 'post' }),
      });

      const data = await res.json();

      if (data.latestView != null) {
        setViews(data.latestView);
      }
    };

    run();
  }, [slug]);

  return <ViewCounter views={views} />;
};

export default PostView;
