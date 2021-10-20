

import React from "react";
import './ExpenseDate.css';

class ExpenseDate extends React.Component{

  render(){
    let date  = new Date(); 
    if(this.props.date){
      date  = this.props.date;
    }
    
    let year = date.getFullYear();
    let month = date.toLocaleString('en-US',{month:'long'});
    let day = date.toLocaleString('en-US',{day:'2-digit'});
  return (
        <div className="expense-date">
           <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
  )

  }


}

export default ExpenseDate;