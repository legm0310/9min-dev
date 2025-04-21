interface PostContentProps {
  content: React.ReactNode;
}

const PostContent = ({ content }: PostContentProps) => {
  return <div>{content}</div>;
};

export default PostContent;
