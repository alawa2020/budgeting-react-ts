import React, { useReducer } from 'react';
import BalanceScreen from './BalanceScreen';
import Budget from './Budget';
import Expenses from './Expenses';
import ListExpenses from './ListExpenses';
import { BudgetI, Expense } from '../../interfaces/interfaces';
import expenseReducer from '../../reducers/expenseReducer';
import { budgetReducer } from '../../reducers/budgetReducer';

const BudgetingScreen = () => {
  // REDUCER FOR EXPENSES
  const INITIAL_STATE_EXPENSES: Expense[] = [
    {
      uid: new Date().getTime(),
      title: 'Fix the car',
      value: 1000,
    },
  ];

  const [expensesState, expensesDispatch] = useReducer(
    expenseReducer,
    INITIAL_STATE_EXPENSES,
  );

  // REDUCER FOR BUDGETS
  const INITIAL_STATE_BUDGETS: BudgetI[] = [
    {
      uid: new Date().getTime(),
      title: 'salary of programming',
      value: 9000,
    },
  ];

  const [budgetsState, budgetDispatch] = useReducer(
    budgetReducer,
    INITIAL_STATE_BUDGETS,
  );

  console.log(typeof budgetDispatch);
  console.log(budgetsState);
  return (
    <div className="mx-5 mt-5">
      <h1 className="mb-5">Budget App</h1>
      <div className="row">
        {/* part of budgets and expenses */}
        <div className="col-5">
          <Budget budgetDispatch={budgetDispatch} />
          <Expenses />
        </div>
        {/* end part of budgets and expenses */}

        {/* part of balance and list of expenses */}
        <div className="col-7">
          <BalanceScreen />
          <ListExpenses />
          {/* end table of list of expenses */}
        </div>
        {/* end part of balance and list of expenses */}
      </div>
    </div>
  );
};

export default BudgetingScreen;
