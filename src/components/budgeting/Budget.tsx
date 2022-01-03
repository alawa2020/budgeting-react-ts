import React from 'react';
import useForm from '../../hooks/useForm';
import { doAddBudget } from '../../actions/actions';

interface Props {
  budgetDispatch: any;
}

const Budget = ({ budgetDispatch }: Props) => {
  const [formValues, handleValue, resetForm] = useForm({
    title: '',
    value: '',
  });

  const { title, value } = formValues;

  const handleAddBudget = (): void => {
    budgetDispatch(
      doAddBudget({
        uid: new Date().getTime(),
        title,
        value: Number(value),
      }),
    );
    resetForm();
  };

  return (
    <div className="budget-component mb-5">
      <div className="budget-component-inside">
        <label htmlFor="budget-input" className="form-label">
          Please Enter Your Budget
        </label>
        <input
          id="budget-input"
          className="form-control mb-3"
          type="text"
          name="title"
          value={title}
          onChange={handleValue}
        />

        <label htmlFor="budget-input" className="form-label">
          Please Enter Your Budget
        </label>
        <input
          id="budget-input"
          className="form-control mb-3"
          type="number"
          name="value"
          value={value}
          onChange={handleValue}
        />
        <button
          className="btn btn-outline-success"
          type="button"
          onClick={handleAddBudget}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default Budget;
