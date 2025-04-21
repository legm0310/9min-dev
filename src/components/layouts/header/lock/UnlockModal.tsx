import { useState } from 'react';
import { unlockByPhoneNumber } from '@/actions/auth';
import Modal from '@/components/ui/Modal';
import { toast } from 'sonner';

interface UnlockModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onFailure: () => void;
}

const UnlockModal = ({
  open,
  onClose,
  onSuccess,
  onFailure,
}: UnlockModalProps) => {
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parseNumber = phone.replace(/-/g, '');

    const isValid = /^010\d{8}$/.test(parseNumber);
    if (!isValid) {
      toast.warning('전화번호 형식을 확인해주세요');
      return;
    }

    try {
      await unlockByPhoneNumber(parseNumber);
      setPhone('');
      onSuccess();
    } catch (err) {
      setPhone('');
      onFailure();
    }
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length < 4) return digits;
    if (digits.length < 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    if (digits.length < 11)
      return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
  };

  return (
    <Modal open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <h2 className="text-lg font-semibold mb-4 text-center">
          전화번호 입력
        </h2>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(formatPhone(e.target.value))}
          placeholder="010-1234-5678"
          className="w-full p-2 border rounded mb-4"
          required
        />
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-gray-500"
          >
            취소
          </button>
          <button
            type="submit"
            className="text-sm text-white bg-[var(--black)] px-3 py-1 rounded"
          >
            확인
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UnlockModal;
