import dayjs from 'dayjs';

export const parseDateToString = (date: Date): string => {
  return dayjs(date).format('YYYY년 MM월 DD일');
};
