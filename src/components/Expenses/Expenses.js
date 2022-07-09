import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

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
         <ExpensesChart expenses={filteredExpenses} />
         <ExpensesList items={filteredExpenses} />
      </Card>
   );
}

export default Expenses;
