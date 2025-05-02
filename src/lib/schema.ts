import { z } from 'zod';

export const PostFrontmatterSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  category: z.string(),
  tags: z.array(z.string()),
  thumbnail: z.optional(z.string()),
});
