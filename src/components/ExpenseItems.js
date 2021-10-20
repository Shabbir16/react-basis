import React from "react";

import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Cards from './Cards';

function ExpenseItems(props){



  return (
    <Cards className="expense-item">
      <div >
        <ExpenseDate
        date={props.date}
        />
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price ">${props.amount}</div>
      </div>
    </Cards>
  );
}

export default ExpenseItems;