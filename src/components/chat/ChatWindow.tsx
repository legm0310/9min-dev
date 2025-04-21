import { useEffect, useRef } from 'react';
import type { Components } from 'react-markdown';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function unwrapMarkdownIfFenced(text: string): string {
  const trimmed = text.trim();
  if (/^```markdown\n[\s\S]*\n```$/.test(trimmed)) {
    return trimmed.replace(/^```markdown\n/, '').replace(/\n```$/, '');
  }
  return text;
}

interface ChatWindowProps {
  messages: { id: string; role: string; content: string }[];
}

const ChatWindow = ({ messages }: ChatWindowProps) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto min-h-3.5 space-y-4 mb-4">
      {messages.map((m) => (
        <div
          key={m.id}
          className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[75%] px-4 py-3 text-md rounded-lg leading-relaxed whitespace-pre-wrap shadow
          ${m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'}`}
          >
            <div
              className={`prose prose-sm dark:prose-invert ${m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'}`}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {unwrapMarkdownIfFenced(m.content)}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
};

export default ChatWindow;
