import { compileMDX, CompileMDXResult } from 'next-mdx-remote/rsc';
import type { PluggableList } from 'unified';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import MdxComponents from '@/components/mdx/MdxComponents';

const prettyCodeOptions = {
  theme: 'one-dark-pro',
  keepBackground: true,
};

export const remarkPlugins: PluggableList = [remarkGfm];

export const rehypePlugins: PluggableList = [
  [rehypePrettyCode, prettyCodeOptions],
  [rehypeSlug],
];

export const complieMdx = async (
  content: string,
): Promise<CompileMDXResult> => {
  return await compileMDX({
    source: content,
    components: MdxComponents,
    options: {
      mdxOptions: {
        rehypePlugins,
        remarkPlugins,
      },
    },
  });
};
