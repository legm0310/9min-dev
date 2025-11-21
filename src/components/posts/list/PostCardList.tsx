'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';
import PostCard from './PostCard';
import { PostSummary } from '@/types/types';

interface PostCardListProps {
  posts: PostSummary[];
  columns: 1 | 2 | 3 | 4;
  className?: string;
}

const PostCardList = ({
  posts,
  columns,
  className = '',
}: PostCardListProps) => {
  const searchParams = useSearchParams();
  const selectedTags = searchParams.getAll('tag');
  const [viewMap, setViewMap] = useState<Record<string, number>>({});

  const filteredPosts = useMemo(() => {
    if (selectedTags.length === 0) return posts;
    return posts.filter((post) =>
      selectedTags.every((tag) => post.tags.includes(tag)),
    );
  }, [posts, selectedTags]);

  useEffect(() => {
    const slugs = posts.map((p) => p.slug);

    async function fetchViews() {
      const res = await fetch(
        `/api/viewcounts?slugs=${slugs.join(',')}&viewCountType=post`,
      );
      const viewData = await res.json();
      setViewMap(viewData);
    }
    fetchViews();
  }, []);

  const gridColsMap = {
    1: 'list-grid-1col',
    2: 'list-grid-2col',
    3: 'list-grid-3col',
    4: 'list-grid-4col',
  }[columns];

  const hasPost = filteredPosts.length > 0;

  return (
    <div>
      {hasPost ? (
        <ul className={`list-none ${gridColsMap} ${className}`}>
          {filteredPosts.map((post) => (
            <li key={`${post.category}/${post.slug}`}>
              <PostCard
                postInfo={{ ...post, views: viewMap[post.slug] ?? post.views }}
                columns={columns}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-10">
          <h3 className="text-center">🔖 업로드된 게시물이 없습니다..</h3>
        </div>
      )}
    </div>
  );
};

export default PostCardList;
