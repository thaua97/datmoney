export function formatMoney(value: number | bigint) {
  return new Intl.NumberFormat('pt-BR', {
    style:  'currency',
    currency: 'BRL',
  }).format(value);
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
}