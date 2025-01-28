import React from 'react'
import { useSelector } from 'react-redux'

const MovieTicktesBook_8 = () => {
    const movieTicket=useSelector((state)=>state.movieTicket)
  return (
    <div>
        <h2>MovieTicktesBook_8</h2>
        <ul>
            {movieTicket.map((ticket)=>{
                return <li>{ticket}</li>
            })}
        </ul>
    </div>
  )
}

export default MovieTicktesBook_8