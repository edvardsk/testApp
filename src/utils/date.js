export const getFormatDate = (dateStr) => {
  const date = dateStr ? new Date(dateStr) : new Date();
  const year = `${date.getFullYear()}`;
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  return `${year}-${month}-${day}`;
};
