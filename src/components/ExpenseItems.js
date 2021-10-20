import React from "react";

import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Cards from './Cards';
import {useState} from 'react'

function ExpenseItems(props){

  const [title,setTitle] = useState(props.title);
  const clickHandler = ()=>{
    setTitle('Changed');
    console.log('Clicked');
  }

  return (
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
  );
}

export default ExpenseItems;