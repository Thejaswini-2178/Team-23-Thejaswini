import React from 'react'
import { useSelector } from 'react-redux'

const UserProfile_5 = () => {
    const userProfile=useSelector((state)=>state.userProfile)
  return (
    <div>
        <h2>UserProfile_5</h2>
        <ul>
          {userProfile.map((user)=>{
            return <li>{user}</li>
          })}
        </ul>
    </div>
  )
}

export default UserProfile_5