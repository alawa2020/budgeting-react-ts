import { Expense } from '../interfaces/interfaces';
import { ExpenseAction } from '../actions/actions';

const expenseReducer = (state: Expense[], action: ExpenseAction): Expense[] => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];

    case 'delete':
      return state.filter((expense) => expense.uid !== action.payload.id);

    default:
      return state;
  }
};

export default expenseReducer;
