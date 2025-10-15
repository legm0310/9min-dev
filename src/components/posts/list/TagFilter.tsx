'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import clsx from 'clsx';

interface TagFilterProps {
  tags: { tag: string; count: number }[];
}

const TagFilter = ({ tags }: TagFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedTag = searchParams.getAll('tag');

  const onClick = (tag: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const currentTags = new Set(params.getAll('tag'));
    console.log(params.getAll('tag'));
    console.log(selectedTag);
    if (currentTags.has(tag)) {
      currentTags.delete(tag);
    } else {
      currentTags.add(tag);
    }
    params.delete('tag');

    currentTags.forEach((t) => params.append('tag', t));

    router.push(`?${params.toString()}`);
  };

  return (
    <aside className="sticky top-24 text-sm">
      <h3 className="text-lg text-center font-semibold mb-4">Tags</h3>
      <ul className="flex flex-col gap-1">
        {tags.map((t) => (
          <li
            key={t.tag}
            className={clsx(
              'cursor-pointer px-2 py-1 w-fit rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors',
              selectedTag.includes(t.tag) &&
                'font-bold underline bg-gray-200 dark:bg-gray-700',
            )}
            onClick={() => onClick(t.tag)}
          >
            #{t.tag} ({t.count})
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TagFilter;
