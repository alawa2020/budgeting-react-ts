import React from 'react';

const BalanceScreen = () => {
  return (
    <div className="row">
      {/* part budget */}
      <div className="col-4 text-center">
        <p>BUDGET</p>
        <img src="./assets/budget.png" alt="" />
        <p className="mt-3 text-green">$7000</p>
      </div>
      {/* end part budget */}
      <div className="col-4 text-center">
        <p>EXPENSES</p>
        <img src="./assets/expense.png" alt="" />
        <p className="mt-3 text-red">$7000</p>
      </div>
      {/* end part budget */}
      <div className="col-4 text-center">
        <p>BALANCE</p>
        <img src="./assets/balance.png" alt="" />
        <p className="mt-3 text-green">$7000</p>
      </div>
      {/* end part budget */}
    </div>
  );
};

export default BalanceScreen;
