export function monthlyPayment(principal, annualRatePct, years) {
  const n = years * 12;
  const r = annualRatePct / 100 / 12;
  if (!r) return principal / n;
  const k = Math.pow(1 + r, n);
  return (principal * r * k) / (k - 1);
}

export function buildSchedule(principal, annualRatePct, years) {
  const payment = monthlyPayment(principal, annualRatePct, years);
  const r = annualRatePct / 100 / 12;
  const rows = [];
  let rest = principal;
  for (let month = 1; month <= years * 12; month++) {
    const interest = rest * r;
    const body = payment - interest;
    rest = rest - body;
    rows.push({
      month: month,
      payment: Math.round(payment * 100) / 100,
      interest: Math.round(interest * 100) / 100,
      body: Math.round(body * 100) / 100,
      rest: rest > 0 ? Math.round(rest * 100) / 100 : 0,
    });
  }
  return rows;
}
