import React from 'react';
import BalanceScreen from './BalanceScreen';
import Budget from './Budget';
import Expenses from './Expenses';
import ListExpenses from './ListExpenses';

const BudgetingScreen = () => {
  return (
    <div className="mx-5 mt-5">
      <h1 className="mb-5">Budget App</h1>
      <div className="row">
        {/* part of budgets and expenses */}
        <div className="col-5">
          {/* part of budgets */}
          <Budget />
          {/* end part of budgets */}

          {/* part of expenses */}
          <Expenses />
          {/* end part of expenses */}
        </div>
        {/* end part of budgets and expenses */}

        {/* part of balance and list of expenses */}
        <div className="col-7">
          {/* part budget expense balance */}
          <BalanceScreen />
          {/* end part budget expense balance */}
          {/* table of list of expenses */}
          <ListExpenses />
          {/* end table of list of expenses */}
        </div>
        {/* end part of balance and list of expenses */}
      </div>
    </div>
  );
};

export default BudgetingScreen;
