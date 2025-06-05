'use client';

import { toast, type ExternalToast } from 'sonner';

type ToastTypes =
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
  | 'message'
  | 'promise'
  | 'custom'
  | 'loading'
  | 'dismiss';

interface ToastButtonProps {
  children: React.ReactNode;
  message: string;
  type?: ToastTypes;
  className?: string;
  toastOptions?: ExternalToast;
  promise?: () => Promise<any>;
  custom?: (id: number | string) => React.ReactElement;
  toastIdToDismiss?: string | number;
}

export default function ToastButton({
  children,
  message,
  type = 'info',
  className = '',
  toastOptions = {},
  promise,
  custom,
  toastIdToDismiss,
}: ToastButtonProps) {
  const handleClick = () => {
    switch (type) {
      case 'promise':
        if (!promise) return;
        toast.promise(promise, toastOptions);
        break;

      case 'custom':
        if (!custom) return;
        toast.custom(custom, toastOptions);
        break;

      case 'loading':
        toast.loading(message, toastOptions);
        break;

      case 'dismiss':
        toast.dismiss(toastIdToDismiss);
        break;

      default:
        toast[type]?.(message, toastOptions);
        break;
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

{
  /* 사용 예시 
<ToastButton type="success" label="성공!" message="작업 완료됨" />
<ToastButton type="loading" label="로딩 중..." />
<ToastButton
  type="promise"
  label="비동기 작업"
  promise={() => fetch('/api/something')}
  toastOptions={{
    loading: '불러오는 중...',
    success: '성공!',
    error: '실패!',
  }}
/>
<ToastButton
  type="custom"
  label="커스텀 토스트"
  custom={(id) => <div>커스텀 {id}</div>}
/> */
}
