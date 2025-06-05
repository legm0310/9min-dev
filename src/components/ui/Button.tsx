import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className = '', ...props }: ButtonProps) => {
  return (
    <button
      className={`common-button transition-all duration-200 hover:shadow-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

type ButtonVariant = 'default' | 'muted' | 'destructive' | 'icon';

interface ExtButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const ExtButton = ({
  children,
  variant = 'default',
  className = '',
  ...props
}: ExtButtonProps) => {
  const base = '';
  const variants = {
    default: '',
    muted: '',
    destructive: '',
    icon: '',
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
