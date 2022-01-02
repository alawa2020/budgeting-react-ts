import React from 'react';

const Expenses = () => {
  return (
    <div className="expense-component mb-5">
      <div className="expense-component-inside">
        <label htmlFor="budget-input" className="form-label">
          Please Enter Your Expense
        </label>
        <input id="budget-input" className="form-control mb-3" type="text" />

        <label htmlFor="budget-input" className="form-label">
          Please Enter Expense Amount
        </label>
        <input id="budget-input" className="form-control mb-3" type="number" />

        <button className="btn btn-outline-danger" type="button">
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default Expenses;
