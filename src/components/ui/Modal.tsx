'use client';

import { useRef, useEffect, ReactNode } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const mouseDownInsideRef = useRef(false);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      mouseDownInsideRef.current =
        modalRef.current?.contains(e.target as Node) ?? false;
    };

    const handleMouseUp = (e: MouseEvent) => {
      const isInside = modalRef.current?.contains(e.target as Node);
      const clickedOutside = !mouseDownInsideRef.current && !isInside;

      if (clickedOutside) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
      <div
        ref={modalRef}
        className="bg-white dark:bg-neutral-800 p-6 rounded shadow-md w-80"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
