import { ReactElement } from 'react';
import { PostFrontmatterSchema } from '@/lib/schema';
import { z } from 'zod';

export type ViewCountType = 'blog-visitors' | 'post' | 'project' | 'about';

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export type PostFrontmatter = z.infer<typeof PostFrontmatterSchema>;

export interface PostSummary {
  slug: string;
  title: string;
  date: Date;
  category: string;
  categoryLabel: string;
  categoryPath?: string;
  tags: string[];
  readingTime: string;
  //page.tsx에서 쿼리할 조회수
  views?: number;
  url: string;
  thumbnail: string;
  description: string;
}

export interface Post extends PostSummary {
  content: ReactElement;
}

// export interface PostHeader {
//   slug: string;
//   title: string;
//   date: Date;
//   category: string;
//   categoryLabel: string
//   tags: string[];
//   readingTime: string;
// }

export interface CategoryInfo {
  key: string;
  label: string;
  parent?: string;
  icon?: string;
  color?: string;
  description?: string;
}
