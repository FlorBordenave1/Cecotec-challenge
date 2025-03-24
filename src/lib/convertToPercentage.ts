export const convertToPercentage = (value: string) => {
  const number = parseFloat(value);

  return Math.round(number * 100);
};
