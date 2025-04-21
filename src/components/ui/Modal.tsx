import { ReactNode } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-neutral-800 p-6 rounded shadow-md w-80"
        onClick={(e) => e.stopPropagation()} // 클릭 전파 막기
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
