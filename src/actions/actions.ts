import { BudgetI, Expense } from '../interfaces/interfaces';

// EXPENSES
export type ExpenseAction =
  | { type: 'add'; payload: Expense }
  | { type: 'delete'; payload: { id: number } }
  | { type: 'edit'; payload: Expense };

export const doAddExpense = (expense: Expense): ExpenseAction => ({
  type: 'add',
  payload: expense,
});

export const doDeleteExpense = (id: number): ExpenseAction => ({
  type: 'delete',
  payload: { id },
});

export const doEditExpense = (expense: Expense): ExpenseAction => ({
  type: 'edit',
  payload: expense,
});

// BUDGETS

export type BudgetAction = {
  type: 'add';
  payload: BudgetI;
};

export const doAddBudget = (budget: BudgetI): BudgetAction => ({
  type: 'add',
  payload: budget,
});
