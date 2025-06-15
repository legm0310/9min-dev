import { z } from 'zod';

export const PostFrontmatterSchema = z.object({
  title: z.string(),
  date: z.preprocess(
    (val) => (typeof val === 'string' ? new Date(val) : val),
    z.date(),
  ),
  category: z.string(),
  tags: z.array(z.string()).default([]),
  thumbnail: z.string().default(''),
  description: z.string().default(''),
});
