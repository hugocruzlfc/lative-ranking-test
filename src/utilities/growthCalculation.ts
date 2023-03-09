export default function growthCalculation(
  values: number[],
  period: number
): string {
  let growth;
  let percentage;
  if (period === 1) {
    growth = (values[0] - values[1]) / values[1];
  } else {
    const base = (values[0] - values[1]) / values[1];
    const exponent = 1 / period;
    growth = Math.pow(base, exponent) - 1;
  }
  percentage = growth * 100;
  return intlRound(percentage);
}

function intlRound(value: number) {
  const options = {
    maximumFractionDigits: 2,
    useGrouping: false,
  };
  return new Intl.NumberFormat("en", options).format(value);
}
