import React from 'react'
import { useSelector } from 'react-redux'

const OnlineQuiz_3 = () => {
    const onlineQuiz = useSelector((state) => state.onlineQuiz)
    return (
        <div>
            <h2>Welcom to onlineQuize</h2>
            <ul>
                {onlineQuiz.map((qs) => {
                    return <li>{qs}</li>
                })}
            </ul>
        </div>
    )
}

export default OnlineQuiz_3