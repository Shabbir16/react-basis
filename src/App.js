import React from 'react';
import './style.css';
import ExpenseItems from './components/ExpenseItems';
import Expense from './components/Expense';
import {useState} from 'react';

export default function App() {
  let iniexpenseArr = [
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
    {
      id: 3,
      title: 'Real Me tab',
      date: new Date(2021, 9, 7),
      amount: 199,
    },
  ];
  const submitFormHandler= (formData) =>{
    // alert(formData.title);
    setExpenseArr(prev=>{
      return [...expenseArr,{
        ...formData,
        id:expenseArr.length
      }]
      
    })
    
  }

  const [expenseArr,setExpenseArr] = useState(iniexpenseArr);
  

  return (
    <div>
      <h1>Hello StacsdfkBlitz!!</h1>
      <Expense data={expenseArr} 
      submitFormHandler={submitFormHandler}/>
    </div>
  );
}
