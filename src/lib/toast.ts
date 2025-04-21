import { toast, type ToastT } from 'sonner';

type ToastVariant =
  | 'normal'
  | 'action'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
  | 'loading'
  | 'default';

interface CustomToastT extends Partial<ToastT> {
  type?: ToastVariant;
}

// export const showToast = ({
//   title,
//   type = 'default',
//   duration = 2500,
//   ...rest
// }: CustomToastT) => {

//   if (['default', 'normal', 'action'].includes(type)) {
//     return toast({
//       title,
//       duration,
//       type,
//     } as ToastT)
//   }

//   if (type === 'default' || type === 'normal' || type === 'action') {
//     return toast({
//       title,
//       duration,
//       ...rest,
//       type, // pass type explicitly if using these custom variants
//     } as Partial<ToastT> & { type: ToastVariant });
//   }
//   return (toast as any)[type]({ title, duration, ...rest });
// };
