import dayjs from 'dayjs';

export const convertTimeStampToTime = (timestamp) => {
  return dayjs(timestamp).format('hh:mm A');
};
