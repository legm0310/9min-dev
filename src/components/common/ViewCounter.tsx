'use client';

import ViewIcon from './icon/ViewIcon';

const ViewCounter = ({
  views,
  isIcon,
}: {
  views: number | null;
  isIcon?: boolean;
}) => {
  //     const key = `viewcount:${viewCountType}`;
  //     if (viewCountType == 'blog-visitors') {
  //       redis.get<number>(key).then((res) => setViews(res ?? 1));
  //     } else {
  //       redis.zscore(key, slug).then((res) => setViews(res ?? 1));
  //     }

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
