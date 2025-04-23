import { compileMDX, CompileMDXResult } from 'next-mdx-remote/rsc';
import type { Plugin } from 'unified';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode, {
  type Options as PrettyCodeOptions,
} from 'rehype-pretty-code';
import MdxComponents from '@/components/mdx/MdxComponents';

const prettyCodeOptions: PrettyCodeOptions = {
  theme: 'one-dark-pro',
  keepBackground: true,
};

export const remarkPlugins = [remarkGfm];

export const rehypePlugins: [Plugin, PrettyCodeOptions][] = [
  [rehypePrettyCode as Plugin, prettyCodeOptions],
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
