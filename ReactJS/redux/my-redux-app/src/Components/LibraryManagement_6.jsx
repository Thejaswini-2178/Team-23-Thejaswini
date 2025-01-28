import React from 'react'
import { useSelector } from 'react-redux'

const LibraryManagement_6 = () => {
    const library=useSelector((state)=>state.library)
  return (
    <div>
        <h2>LibraryManagement_6</h2>
        <ul>
            {library.map((library)=>{
                return <li>{library}</li>
            })}
        </ul>
    </div>
  )
}

export default LibraryManagement_6