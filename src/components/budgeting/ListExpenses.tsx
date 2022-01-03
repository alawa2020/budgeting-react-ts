import React from 'react';
import { Expense } from '../../interfaces/interfaces';

interface Props {
  expensesState: Expense[];
  expenseDispatch: any;
}

const ListExpenses = ({ expensesState, expenseDispatch }: Props) => {
  return (
    <div className="row">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Expense Title</th>
            <th scope="col">Expense Value</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expensesState.map((expense) => (
            <tr key={expense.uid}>
              <th>- {expense.title.toUpperCase()}</th>
              <td>{expense.value}</td>
              <td>
                <span className="me-2">
                  <i className="fas fa-edit" />
                </span>
                <span className="me-2">
                  <i className="fas fa-trash" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListExpenses;
