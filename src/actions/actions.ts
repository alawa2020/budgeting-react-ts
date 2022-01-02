import { Expense } from '../interfaces/interfaces';

export type ExpenseAction =
  | { type: 'add'; payload: Expense }
  | { type: 'delete'; payload: { id: number } };
