import React from 'react'
import { useSelector } from 'react-redux'

const ExpenseTraker_10 = () => {
    const expense=useSelector((state)=>state.expense)
  return (
    <div>
        <h2>ExpenseTraker_10</h2>
        <ul>{expense.map((item)=>{
            return <li>{item}</li>
        })}</ul>
    </div>
  )
}

export default ExpenseTraker_10