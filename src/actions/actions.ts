import { Expense } from '../interfaces/interfaces';

export type ExpenseAction =
  | { type: 'add'; payload: Expense }
  | { type: 'delete'; payload: { id: number } };

export const doAdd = (expense: Expense): ExpenseAction => ({
  type: 'add',
  payload: expense,
});

export const doDelete = (id: number): ExpenseAction => ({
  type: 'delete',
  payload: { id },
});
