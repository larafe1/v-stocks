export function capitalizeText(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function parseNumber(value: number, currency?: string) {
  let parsedValue: string;

  if (currency) {
    parsedValue = new Intl.NumberFormat('en-us', {
      style: 'currency',
      currency
    }).format(value);
  } else {
    parsedValue = new Intl.NumberFormat('en-us').format(value);
  }

  return parsedValue;
}
