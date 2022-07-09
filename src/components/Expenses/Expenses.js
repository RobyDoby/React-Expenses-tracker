import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
   const [selectedYear, setSelectedYear] = useState('2019');

   const filteredExpenses = props.items.filter((item) => {
      return item.date.getFullYear().toString() === selectedYear;
   });

   const YearSelectedHandler = (year) => {
      setSelectedYear(year);
   };

   return (
      <Card className="expenses">
         <ExpensesFilter currentYear={selectedYear} onYearSelected={YearSelectedHandler} />
         <ExpensesList items={filteredExpenses} />
      </Card>
   );
}

export default Expenses;
