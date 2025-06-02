'use client';

import { createPortal } from 'react-dom';
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

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
      <div
        ref={modalRef}
        className="bg-muted text-foreground p-6 rounded shadow-md w-80"
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
