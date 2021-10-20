import React from 'react';
import './NewExpense.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm'

const NewExpense = () => {
  const submitFormHandler= (formData) =>{
    alert('New Expances')
    return formData;
  }
  return (
          <div className="new-expense">
            <ExpenseForm
            submitFormHandler={submitFormHandler}/>
          </div>
  )
};

export default NewExpense;
