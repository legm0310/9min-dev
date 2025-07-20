'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import clsx from 'clsx';

interface TagFilterProps {
  tags: string[];
}

const TagFilter = ({ tags }: TagFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get('tag');

  const onClick = (tag: string) => {
    const params = new URLSearchParams();
    if (tag === selectedTag) {
      params.delete('tag');
    } else {
      params.set('tag', tag);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Tags</h3>
      <ul className="flex flex-col gap-1">
        {tags.map((tag) => (
          <li
            key={tag}
            className={clsx(
              'cursor-pointer px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors',
              selectedTag === tag &&
                'font-bold underline bg-gray-200 dark:bg-gray-700',
            )}
            onClick={() => onClick(tag)}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagFilter;
