import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`px-3 py-2 rounded-md text-sm text-black hover:bg-gray-200 transition-colors ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
