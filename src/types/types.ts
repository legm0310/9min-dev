import { ReactElement } from 'react';
import { PostFrontmatterSchema } from '@/lib/schema';
import { z } from 'zod';

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
  categoryPath?: string;
  tags: string[];
  readingTime: string;
  url: string;
  thumbnail?: string;
}

export interface PostCard {
  title: string;
  date: Date;
  category?: string;
  tags: string[];
  readingTime: string;
  thumbnail?: string;
}

export interface Post extends PostSummary {
  content: ReactElement;
}
