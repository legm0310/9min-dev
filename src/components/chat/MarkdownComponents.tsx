// import { Components } from 'react-markdown';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

//deprecated
// const MarkdownComponents: Components = {
//   code({ children, className, ...props }) {
//     const match = /language-(\w+)/.exec(className || '');
//     return match && className?.includes('language-') ? (
//       <SyntaxHighlighter PreTag="div" language={match[1]} style={oneDark}>
//         {String(children).replace(/\n$/, '')}
//       </SyntaxHighlighter>
//     ) : (
//       <code {...props}>{children}</code>
//     );
//   },
//   blockquote({ children }) {
//     return <blockquote>{children}</blockquote>;
//   },
// };

// export default MarkdownComponents;
