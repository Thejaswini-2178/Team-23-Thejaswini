import React from 'react'
import { useSelector } from 'react-redux'

const Ecommerce_1 = () => {
    const ecommerce=useSelector((state)=>state.ecommerce)
  return (
    <div>
        <h2>Welcome To Products</h2>
        <ul>
            {ecommerce.map((item)=>{
                return <li>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default Ecommerce_1