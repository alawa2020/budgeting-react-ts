import { Expense } from '../interfaces/interfaces';
import { ExpenseAction } from '../actions/actions';

const expenseReducer = (state: Expense[], action: ExpenseAction): Expense[] => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];

    case 'delete':
      return state.filter((expense) => expense.uid !== action.payload.id);

    case 'edit':
      return state.map((expense) =>
        expense.uid === action.payload.uid ? action.payload : expense,
      );

    default:
      return state;
  }
};

export default expenseReducer;
