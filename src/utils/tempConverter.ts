export const tempConverter = (type: 'C' | 'F', value: number): number => {
  return type === 'C'
    ? Math.round(value - 273.15)
    : Math.round(((value - 273.15) * 9) / 5 + 32);
};
