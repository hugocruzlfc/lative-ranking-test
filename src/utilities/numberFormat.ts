export const formatterCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

export const formatterPopulation = new Intl.NumberFormat("en-US", {
  maximumSignificantDigits: 3,
});
