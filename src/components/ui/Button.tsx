import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className = '', ...props }: ButtonProps) => {
  return (
    <button
      className={`px-2 md:px-3 py-1 md:py-2 rounded-md text-sm font-medium transition-colors
  text-foreground hover:bg-muted-hover
  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
