import React from 'react';
import ExpenseItems  from './ExpenseItems';
import Cards from './Cards';
import './Expances.css';
import NewExpense  from './NewExpense/NewExpense';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter'

function Expense(props){
  const submitFormHandler= (formData) =>{
    // alert('Expence')
    props.submitFormHandler(formData);
  }
  const onDateClickHandler = (data)=>{
    console.log(data);
    props.onDateClickHandler(data);
  }
  let expenseArr = props.data;
    let arr = [];
    for (let i = 0; i < expenseArr.length; i++) {
      arr.push(
        <ExpenseItems
          title={expenseArr[i].title}
          date={expenseArr[i].date}
          amount={expenseArr[i].amount}
          key={i}
        />
      );
    }

    return (
      <Cards>
        <NewExpense submitFormHandler={submitFormHandler}/>
        <div>
        <ExpenseFilter onDateClickHandler={onDateClickHandler}/>
        </div>
      <Cards className="expense">
       {arr}
      </Cards>
      </Cards>
    )
}
// class Expense extends React.Component{
  
//   render(){

//     let expenseArr = this.props.data;
//     alert(this.props.soot)
//     let arr = [];
//     for (let i = 0; i < expenseArr.length; i++) {
//       arr.push(
//         <ExpenseItems
//           title={expenseArr[i].title}
//           date={expenseArr[i].date}
//           amount={expenseArr[i].amount}
//         />
//       );
//     }

//     return (
//       <div>
//        sdf {arr}
//       </div>
//     )



//   }

// }

export default Expense;