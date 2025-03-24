export const convertToPercentage = (value: string) => {
  const number = parseFloat(value);

  return `${(number * 100).toFixed(2)}%`;
};
