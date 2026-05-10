// Price formatting helpers
const RSD = new Intl.NumberFormat('sr-RS', { maximumFractionDigits: 0 });

export function formatPrice(amount) {
  if (amount === null || amount === undefined || amount === '') return '';
  const n = Number(amount);
  if (Number.isNaN(n)) return '';
  return `${RSD.format(n)} RSD`;
}

export function formatPriceShort(amount) {
  const n = Number(amount);
  if (Number.isNaN(n)) return '';
  return RSD.format(n);
}
