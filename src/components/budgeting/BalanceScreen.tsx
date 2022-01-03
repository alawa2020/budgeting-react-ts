import React, { useEffect, useState } from 'react';
import { BudgetI, Expense } from '../../interfaces/interfaces';
import getTotalBudget from '../../utils/getTotalBudget';
import { getTotalExpenses } from '../../utils/getTotalExpenses';
import { getBalance } from '../../utils/getBalance';

interface Props {
  expensesState: Expense[];
  budgetsState: BudgetI[];
}
const BalanceScreen = ({ budgetsState, expensesState }: Props) => {
  const [totalBudgets, settotalBudgets] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [balance, setbalance] = useState(0);

  useEffect(() => {
    settotalBudgets(getTotalBudget(budgetsState));
  }, [budgetsState]);

  useEffect(() => {
    setTotalExpenses(getTotalExpenses(expensesState));
  }, [expensesState]);

  useEffect(() => {
    setbalance(getBalance(totalBudgets, totalExpenses));
  }, [totalBudgets, totalExpenses]);

  return (
    <div className="row">
      {/* part budget */}
      <div className="col-4 text-center">
        <p>BUDGET</p>
        <img src="./assets/budget.png" alt="" />
        <p className="mt-3 text-green">${totalBudgets}</p>
      </div>
      {/* end part budget */}
      <div className="col-4 text-center">
        <p>EXPENSES</p>
        <img src="./assets/expense.png" alt="" />
        <p className="mt-3 text-red">${totalExpenses}</p>
      </div>
      {/* end part budget */}
      <div className="col-4 text-center">
        <p>BALANCE</p>
        <img src="./assets/balance.png" alt="" />
        <p className="mt-3 text-green">${balance}</p>
      </div>
      {/* end part budget */}
    </div>
  );
};

export default BalanceScreen;
