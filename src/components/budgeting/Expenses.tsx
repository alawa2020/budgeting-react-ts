import React from 'react';
import { doAddExpense } from '../../actions/actions';
import useForm from '../../hooks/useForm';

interface Props {
  expenseDispatch: any;
}

const Expenses = ({ expenseDispatch }: Props) => {
  const [formValues, handleValue, resetForm] = useForm({
    title: '',
    value: '',
  });
  const { title, value } = formValues;

  const handleAddExpense = (): void => {
    expenseDispatch(
      doAddExpense({
        uid: new Date().getTime(),
        title,
        value: Number(value),
      }),
    );
    resetForm();
  };

  return (
    <div className="expense-component mb-5">
      <div className="expense-component-inside">
        <label htmlFor="budget-input" className="form-label">
          Please Enter Your Expense
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
          Please Enter Expense Amount
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
          className="btn btn-outline-danger"
          type="button"
          onClick={handleAddExpense}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default Expenses;
