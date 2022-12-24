import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const day = props.date.toLocalString("en-US", {day: "2-digit"});
  // const day = props.date.toLocalString("en-US", {date: "2-digit"});
  // const year = props.date.toLocalString("en-US", {date: "2-digit"});
  return (
    <>
      <div className='expense-item'>
        <div>{day}</div>
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        </div>
      </div>
    </>
  )
}

export default ExpenseItem;

