import { useId } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
   const id = useId();

   const onSaveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
         ...enteredExpenseData,
         id: `${id}-expense`,
      };
      props.onAddExpense(expenseData);
   };
   return (
      <div className="new-expense">
         <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
      </div>
   );
};

export default NewExpense;
