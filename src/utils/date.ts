import dayjs from 'dayjs';

export const parseDateToString = (date: Date): string => {
  return dayjs(date).format('YYYY. MM. DD');
};
