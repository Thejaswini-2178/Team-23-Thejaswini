import React from 'react'
import { useSelector } from 'react-redux'

const InventaryManageMent_9 = () => {
    const inventary=useSelector((state)=>state.inventary)
  return (
    <div>
        <h2>InventaryManageMent_9</h2>
        <ul>
            {inventary.map((item)=>{
                return <li>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default InventaryManageMent_9