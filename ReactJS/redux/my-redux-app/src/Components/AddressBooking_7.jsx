import React from 'react'
import { useSelector } from 'react-redux'

const AddressBooking_7 = () => {
    const addressBook=useSelector((state)=>state.addressBook)
  return (
    <div>
        <h2>AddressBooking_7</h2>
        <ul>
        {addressBook.map((a)=>{
                    return <li >{a}</li>
                })}
        </ul>
    </div>
  )
}

export default AddressBooking_7