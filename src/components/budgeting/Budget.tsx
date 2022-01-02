import React from 'react';

const Budget = () => {
  return (
    <div className="budget-component mb-5">
      <div className="budget-component-inside">
        <label htmlFor="budget-input" className="form-label">
          Please Enter Your Budget
        </label>
        <input id="budget-input" className="form-control mb-3" type="number" />
        <button className="btn btn-outline-success" type="button">
          Calculate
        </button>
      </div>
    </div>
  );
};

export default Budget;
