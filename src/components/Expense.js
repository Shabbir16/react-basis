import React from 'react';
import ExpenseItems  from './ExpenseItems';

function Expense(props){
  let expenseArr = props.data;
    let arr = [];
    for (let i = 0; i < expenseArr.length; i++) {
      arr.push(
        <ExpenseItems
          title={expenseArr[i].title}
          date={expenseArr[i].date}
          amount={expenseArr[i].amount}
        />
      );
    }

    return (
      <div>
       {arr}
      </div>
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