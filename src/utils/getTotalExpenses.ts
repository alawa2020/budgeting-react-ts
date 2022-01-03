import { Expense } from '../interfaces/interfaces';

export const getTotalExpenses = (expenses: Expense[]): number => {
  let totalExpenses: number = 0;
  expenses.forEach(
    (expense) => (totalExpenses = totalExpenses + expense.value),
  );

  return totalExpenses;
};
