import { useEffect, useState } from 'react';
import { Heading } from '@/types/types';

export function useIndexObserver(): { headings: Heading[]; activeId: string } {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll('article h2, article h3'),
    );
    setHeadings(
      elements.map((el) => ({
        id: el.id,
        text: el.textContent || '',
        level: el.tagName === 'H2' ? 2 : 3,
      })),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.target.getBoundingClientRect().top -
              b.target.getBoundingClientRect().top,
          );

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-10% 0px -85% 0px', // 안정성을 위해 감지 범위 조정
        // threshold: [0.5, 1], // 교차 비율이 적어도 50% 이상일 때만 감지
      },
    );

    elements.forEach((el) => observer.observe(el));
    const fallback = elements.find((el) => {
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.top < window.innerHeight;
    });
    if (fallback) setActiveId(fallback.id);

    return () => observer.disconnect();
  }, []);

  return { headings, activeId };
}
