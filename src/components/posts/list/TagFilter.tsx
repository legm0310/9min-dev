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

  const toggleTag = (tag: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const currentTags = new Set(params.getAll('tag'));

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
      <h3 className="text-xl mb-4">Tags</h3>
      <div className="border-t-[1px] pt-4">
        <ul className="flex flex-col gap-1">
          {tags.map((t) => (
            <li
              key={t.tag}
              className={clsx(
                'cursor-pointer px-2 py-1 w-fit text-base rounded-lg text-muted-foreground',
                'hover:bg-muted-hover hover:text-foreground hover:shadow-md',
                selectedTag.includes(t.tag) &&
                  'font-medium bg-muted border border-muted shadow-md',
              )}
              onClick={() => toggleTag(t.tag)}
            >
              <span># {t.tag}</span>
              <span className="align-text-top text-xs aria-hidden">
                {' '}
                ({t.count})
              </span>
              {selectedTag.includes(t.tag) && <span> 📌</span>}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default TagFilter;
