import { BudgetI } from '../interfaces/interfaces';

const getTotalBudget = (budgets: BudgetI[]): number => {
  let totalBudget: number = 0;
  budgets.forEach((budget) => (totalBudget = totalBudget + budget.value));

  return totalBudget;
};

export default getTotalBudget;
