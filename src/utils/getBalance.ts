export const getBalance = (
  totalBudgets: number,
  totalExpenses: number,
): number => {
  return totalBudgets - totalExpenses;
};
