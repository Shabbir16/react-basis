import React from 'react';
import './ExpenseForm.css';
import {useState} from 'react';

const ExpenseForm = ()=>{
  const [shabbir,setShabbir] = useState('Shabbir');
  const titleChageHandler = (event)=>{
    // console.log(event.target.value);
    setShabbir(event.target.value);
  }



  return (
    <form>
      <span>{shabbir}</span>
      <div className="new-expense__controls">
        <div clasName="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChageHandler}/>
        </div>
        <div clasName="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div clasName="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  )
};

export default ExpenseForm;
