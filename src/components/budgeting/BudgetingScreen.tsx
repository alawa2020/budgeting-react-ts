import React, { useEffect, useReducer } from 'react';
import BalanceScreen from './BalanceScreen';
import Budget from './Budget';
import Expenses from './Expenses';
import ListExpenses from './ListExpenses';
import { BudgetI, Expense } from '../../interfaces/interfaces';
import expenseReducer from '../../reducers/expenseReducer';
import { budgetReducer } from '../../reducers/budgetReducer';

const BudgetingScreen = () => {
  // REDUCER FOR EXPENSES

  const initExpenses = (): Expense[] => {
    return (
      JSON.parse(localStorage.getItem('list-expenses-budgeting') as string) ||
      [] //as string buscar
    );
  };

  const [expensesState, expensesDispatch] = useReducer(
    expenseReducer,
    [],
    initExpenses,
  );

  useEffect(() => {
    localStorage.setItem(
      'list-expenses-budgeting',
      JSON.stringify(expensesState),
    );
  }, [expensesState]);

  // REDUCER FOR BUDGETS

  const initBudgets = (): BudgetI[] => {
    return (
      JSON.parse(localStorage.getItem('list-budgets-budgeting') as string) || []
    );
  };

  const [budgetsState, budgetDispatch] = useReducer(
    budgetReducer,
    [],
    initBudgets,
  );

  useEffect(() => {
    localStorage.setItem(
      'list-budgets-budgeting',
      JSON.stringify(budgetsState),
    );
  }, [budgetsState]);

  console.log(typeof budgetDispatch);
  console.log(budgetsState);
  return (
    <div className="mx-5 mt-5">
      <h1 className="mb-5">Budget App</h1>
      <div className="row">
        {/* part of budgets and expenses */}
        <div className="col-5">
          <Budget budgetDispatch={budgetDispatch} />
          <Expenses expenseDispatch={expensesDispatch} />
        </div>
        {/* end part of budgets and expenses */}

        {/* part of balance and list of expenses */}
        <div className="col-7">
          <BalanceScreen
            expensesState={expensesState}
            budgetsState={budgetsState}
          />
          <ListExpenses
            expensesState={expensesState}
            expenseDispatch={expensesDispatch}
          />
          {/* end table of list of expenses */}
        </div>
        {/* end part of balance and list of expenses */}
      </div>
    </div>
  );
};

export default BudgetingScreen;
