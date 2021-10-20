import React from 'react';
import './style.css';
import ExpenseItems from './components/ExpenseItems';

export default function App() {
  let expenseArr = [
    {
      id: 1,
      title: 'Cars Insaurance',
      date: new Date(2021, 11, 21),
      amount: 229.99,
    },
  ];

  let arr = [];
  for (let i = 0; i < expenseArr.length; i++) {
    arr.push(
      <ExpenseItems
        title={expenseArr[i].title}
        date={expenseArr[i].date}
        amount={expenseArr[i].amount}
      />
    );
  }

  return (
    <div>
      <h1>Hello StacsdfkBlitz!</h1>
      {arr}
    </div>
  );
}
