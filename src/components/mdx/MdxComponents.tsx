import { MDXComponents } from 'mdx/types';
import { Image } from './Image';
import { Callout } from './Callout';
// import { InlineCode } from './InlineCode';
// import { CodeBlock } from './CodeBlock';
// import { PreWrapper } from './PreWrapper';

const MdxComponents: MDXComponents = {
  img: Image,
  Callout,
  // h1: (props) => <h1 className="" {...props} />,
  // code: InlineCode,
  // pre: PreWrapper,
};
export default MdxComponents;
