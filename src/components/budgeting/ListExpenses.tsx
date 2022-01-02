import React from 'react';

const ListExpenses = () => {
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
          <tr>
            <th>- FIX A CAR</th>
            <td>1000</td>
            <td>
              <span className="me-2">
                <i className="fas fa-edit" />
              </span>
              <span className="me-2">
                <i className="fas fa-trash" />
              </span>
            </td>
          </tr>
          <tr>
            <th>- FOOD OF CAT</th>
            <td>100</td>
            <td>
              <span className="me-2">
                <i className="fas fa-edit" />
              </span>
              <span className="me-2">
                <i className="fas fa-trash" />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListExpenses;
