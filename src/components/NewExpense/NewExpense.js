import React from 'react';
import './NewExpense.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm'

const NewExpense = (props) => {
  const submitFormHandler= (formData) =>{
    alert('New Expances')
    props.submitFormHandler(formData);
  }
  return (
          <div className="new-expense">
            <ExpenseForm
            submitFormHandler={submitFormHandler}/>
          </div>
  )
};

export default NewExpense;
