export const fromDateMinusDays = (days) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return `${date.getFullYear()}-${leadingZeroHelper(
    date.getMonth() + 1
  )}-${date.getDate()}`;
};

const leadingZeroHelper = (number) => {
  return number > 9 ? `${number}` : `0${number}`;
};
