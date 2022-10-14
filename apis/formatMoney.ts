export const formatMoney = (money: number) =>
  new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'USD' }).format(money);
