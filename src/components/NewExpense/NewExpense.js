import { useState, useId } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
   const [isEditing, setIsEditing] = useState(false);

   const id = useId();

   const startEditingHandler = () => {
      setIsEditing(true);
   };
   const endEditingHandler = () => {
      setIsEditing(false);
   };
   const SaveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
         ...enteredExpenseData,
         id: `${id}-expense`,
      };
      props.onAddExpense(expenseData);
      setIsEditing(false);
   };
   return (
      <div className="new-expense">
         {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
         {isEditing && (
            <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={endEditingHandler} />
         )}
      </div>
   );
};

export default NewExpense;
