import { BudgetI } from '../interfaces/interfaces';
import { BudgetAction } from '../actions/actions';

export const budgetReducer = (
  state: BudgetI[],
  action: BudgetAction,
): BudgetI[] => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];

    default:
      return state;
  }
};
