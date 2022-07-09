import './ExpensesTotal.css';

const ExpensesTotal = (props) => {
   const spend = props.spendedValue.reduce((acc, expense) => acc + expense, 0) + '$';
   return (
      <div className="total-expenses">
         <h2 className="total-expenses__title">Total Expenses this year is:</h2>
         <div className="total-expenses__value">{spend}</div>
      </div>
   );
};

export default ExpensesTotal;
