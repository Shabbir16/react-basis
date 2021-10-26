import React from "react";

import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Cards from './Cards';
import {useState} from 'react'
import ExpenseFilter from './ExpenseFilter/ExpenseFilter'

function ExpenseItems(props){

  const [title,setTitle] = useState(props.title);
  const clickHandler = ()=>{
    setTitle('Changed');
    console.log('Clicked');
  }

  return (
    <div>
      <ExpenseFilter/>
    <Cards className="expense-item">
      <div >
        <ExpenseDate
        date={props.date}
        />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price ">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click me</button>
    </Cards>
    </div>
  );
}

export default ExpenseItems;