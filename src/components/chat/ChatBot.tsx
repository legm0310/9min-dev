'use client';
import { useChat } from '@ai-sdk/react';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';

function unwrapMarkdownIfFenced(text: string): string {
  const trimmed = text.trim();
  if (/^```markdown\n[\s\S]*\n```$/.test(trimmed)) {
    return trimmed.replace(/^```markdown\n/, '').replace(/\n```$/, '');
  }
  return text;
}

export default function ChatBot() {
  const MAX_MESSAGES = 20;

  const {
    status,
    messages,
    setMessages,
    input,
    handleInputChange,
    handleSubmit,
  } = useChat({
    api: '/api/chat',
    onFinish: () => {
      setMessages((prev) =>
        prev.length > MAX_MESSAGES ? prev.slice(-MAX_MESSAGES) : prev,
      );
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <div className="flex flex-col gap-2 max-w-4xl h-[70vh] w-full p-4 mx-auto">
      <ChatWindow messages={messages} />
      {status == 'streaming' && (
        <div className="text-center text-xs text-gray-400 mt-2">
          응답 중입니다...
        </div>
      )}
      <ChatInput
        input={input}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        disabled={status == 'streaming' ? true : false}
      />
    </div>
  );
}
