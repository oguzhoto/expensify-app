export default (expenses) => {
  const amounts = expenses.map((expense) => {
    return expense.amount / 100;
  });
  return amounts.reduce((x, y) => x + y, 0);
};
