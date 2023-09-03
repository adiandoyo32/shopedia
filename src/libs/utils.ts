export const camelize = (str?: string): string => {
  if (!str) return "";
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};

export const currency = (value: number): string => {
  if (!value) return "0";
  const formatted = value.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return `${formatted}`;
};

export const toInt = (value: number): any => {
  return 'asdasd'
}
