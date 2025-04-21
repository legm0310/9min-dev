import { useEffect, useState, useRef } from 'react';

interface ChatInputProps {
  input: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  disabled?: boolean;
}

const ChatInput = ({ input, onChange, onSubmit, disabled }: ChatInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isMultiline, setIsMultiline] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      if (e.nativeEvent.isComposing) {
        return;
      }
      e.preventDefault();
      onSubmit();
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSubmit();
  };

  useEffect(() => {
    if (textareaRef.current) {
      const el = textareaRef.current;
      const maxHeight = window.innerHeight * 0.2;

      el.style.maxHeight = `${maxHeight}px`;
      el.style.height = 'auto';

      const newHeight = Math.min(el.scrollHeight, maxHeight);
      el.style.height = `${newHeight}px`;

      const lineHeight = 24;
      const currentRows = Math.floor(newHeight / lineHeight);
      setIsMultiline(currentRows >= 2);
    }
  }, [input]);

  return (
    <div
      className={`w-full flex gap-2 items-end ${isMultiline ? 'relative' : ''}`}
    >
      <textarea
        value={input}
        ref={textareaRef}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        className={`flex-grow border rounded-lg transition-all duration-200 ease-in-out px-3 py-3 text-md leading-tight resize-none ${isMultiline ? '' : 'overflow-hidden'}`}
        rows={1}
        placeholder="메시지를 입력하세요..."
      />
      <button
        type="button"
        onClick={handleClick}
        className={`bg-blue-500 hover:bg-blue-600 text-white text-sm transition-all duration-200 ${isMultiline ? 'absolute bottom-2 right-2 w-12 h-12 rounded-full' : 'w-[72px] h-11 rounded-lg'}`}
        disabled={disabled}
      >
        {isMultiline ? '>>' : '전송'}
      </button>
    </div>
  );
};

export default ChatInput;
