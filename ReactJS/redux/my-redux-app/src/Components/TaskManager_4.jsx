import React from 'react'
import { useSelector } from 'react-redux'

const TaskManager_4 = () => {
    const taskManager=useSelector((state)=>state.taskManager)
  return (
    <div>
        <h2>TaskManager_4</h2>
        <ul>
            {taskManager.map((task)=>{
                return <li>{task}</li>
            })}
        </ul>
    </div>
  )
}

export default TaskManager_4