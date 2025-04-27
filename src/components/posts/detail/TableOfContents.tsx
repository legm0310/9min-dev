'use client';

import { useIndexObserver } from '@/hooks/useIndexObserver';

interface TableOfContentsProps {
  id: string;
  text: string;
  level: number;
}

const TableOfContents = () => {
  const { headings, activeId } = useIndexObserver();

  return (
    <aside className="sticky top-24 hidden lg:block text-sm px-4">
      <div className="mb-2 text-xl font-bold">On this post</div>
      <ul>
        {headings.map(({ id, text, level }) => (
          <li key={id} className={level == 3 ? 'ml-4' : ''}>
            <a
              href={`#${id}`}
              className={`block transition-colors hover:text-cyan-500 ${activeId === id ? 'text-cyan-600 font-semibold' : ''}`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TableOfContents;
