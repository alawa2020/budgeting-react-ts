import React, { useState } from 'react';
import { doDeleteExpense, doEditExpense } from '../../actions/actions';
import useForm from '../../hooks/useForm';
import { Expense } from '../../interfaces/interfaces';

interface Props {
  expensesState: Expense[];
  expenseDispatch: any;
}

const ListExpenses = ({ expensesState, expenseDispatch }: Props) => {
  const [editMode, setEditMode] = useState(false);

  const [formValues, handleValue, , setFormValues] = useForm({
    uidEdit: 0,
    titleEdit: '',
    valueEdit: '',
  });

  const { uidEdit, titleEdit, valueEdit } = formValues;

  const handleDeleteExpense = (uid: number): void => {
    expenseDispatch(doDeleteExpense(uid));
  };

  const changeEditMode = ({ uid, title, value }: Expense): void => {
    setEditMode(true);
    setFormValues({
      uidEdit: uid,
      titleEdit: title,
      valueEdit: value.toString(),
    });
  };

  const handleEditExpense = (): void => {
    const editExpense: Expense = {
      uid: uidEdit,
      title: titleEdit,
      value: Number(valueEdit),
    };
    expenseDispatch(doEditExpense(editExpense));
    setEditMode(false);
  };

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
                <span
                  onClick={() => changeEditMode(expense)}
                  className="me-2 icon-edit"
                >
                  <i className="fas fa-edit" />
                </span>
                <span
                  onClick={() => handleDeleteExpense(expense.uid)}
                  className="me-2 icon-delete"
                >
                  <i className="fas fa-trash" />
                </span>
              </td>
            </tr>
          ))}

          {/* WHEN EDIT MODE IS TRUE */}
          {editMode && (
            <tr>
              <td>
                <input
                  type="text"
                  value={titleEdit}
                  name="titleEdit"
                  onChange={handleValue}
                  autoFocus
                />
              </td>
              <td>
                <input
                  type="number"
                  value={valueEdit}
                  name="valueEdit"
                  onChange={handleValue}
                />
              </td>
              <td>
                <span onClick={handleEditExpense} className="icon-edit-check">
                  <i className="fas fa-check"></i>
                </span>
                <span
                  onClick={() => setEditMode(false)}
                  className="ms-2 icon-edit-cancel"
                >
                  <i className="fas fa-times"></i>
                </span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListExpenses;
