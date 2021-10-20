import React from 'react';
import './ExpenseForm.css';
import {useState} from 'react';

const ExpenseForm = ()=>{
  const [title,setTitle] = useState('Shabbir');
  const [amount,setAmount] = useState('1.11');
  const [date,setDate] = useState('2020-11-12');

  const titleChageHandler = (event)=>{
    setTitle((prev)=>{return event.target.value});
  }

  const amountChageHandler = (event)=>{
    setAmount((prev)=>{return event.target.value});
  }

  const dateChageHandler = (event)=>{
    setDate((prev)=>{return event.target.value});
  }
  const submitFormHandler = (event)=>{
    event.preventDefault();
    const formData = {
      title:title,
      date:new Date(date),
      amount:amount
    }
    console.log(formData);
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div clasName="new-expense__control">
          <label>Title</label>
          <input type="text"
          value={title}
           onChange={titleChageHandler}/>
        </div>
        <div clasName="new-expense__control">
          <label>Amount</label>
          <input type="number"
          value={amount} min="0.01" step="0.01" onChange={titleChageHandler} />
        </div>
        <div clasName="new-expense__control">
          <label>Date</label>
          <input type="date"
          value={date} min="2019-01-01" max="2022-12-31"  onChange={titleChageHandler}/>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  )
};

export default ExpenseForm;
