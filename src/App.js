import React from 'react';
import './style.css';
import ExpenseItems from './components/ExpenseItems';
import Expense from './components/Expense';

export default function App() {
  let expenseArr = [
    {
      id: 1,
      title: 'Cars Insaurance',
      date: new Date(2021, 11, 21),
      amount: 229.99,
    },
    {
      id: 2,
      title: 'New TV',
      date: new Date(2020, 10, 11),
      amount: 99.99,
    },
  ];

  

  return (
    <div>
      <h1>Hello StacsdfkBlitz!!</h1>
      <Expense data={expenseArr} 
      soot="dadsad"/>
    </div>
  );
}
