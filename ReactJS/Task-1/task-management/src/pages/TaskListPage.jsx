import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';
import { Link } from 'react-router-dom';

const TaskListPage = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTask(id)); // Delete task by ID
    };

    return (
        <div className="task-list-container">
            <h2>Task List</h2>
            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <div className="button-group">
                            <Link to={`/task/${task.id}`}>Update</Link> {/* Update Button */}
                            <button onClick={() => handleDelete(task.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            <Link to="/task/new" className="create-task-btn">Create New Task</Link> {/* Create Task Button */}
        </div>
    );
};

export default TaskListPage;
