import React from 'react';
import { useState } from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  const [dateFilter, dateFilterHandler] = useState('2019');
  const onDateClickHandler = (event) => {
    let cur = event.target.value;

    dateFilterHandler((prevValue) => {
      console.log(prevValue);
      console.log(cur);
      props.onDateClickHandler(cur);
    });
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={dateFilter} onChange={onDateClickHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
