import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const onSaveExspenseData = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const [isEditing, setIsEditing] = useState(false);
  const editingMode = () => {
    setIsEditing(true);
  };
  const cancelHandler = () => {
    setIsEditing(false);
  };
  const addHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingMode}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onCancel={cancelHandler}
          onAdd={addHandler}
          onSaveExpenseData={onSaveExspenseData}
        />
      )}
    </div>
  );
};
export default NewExpense;
