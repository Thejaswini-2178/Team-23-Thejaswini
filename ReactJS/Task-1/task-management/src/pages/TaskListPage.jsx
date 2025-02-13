import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';
import { Link } from 'react-router-dom';

const TaskListPage = () => {
    const tasks = useSelector((state) => state.tasks.tasks); // Corrected here
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTask(id)); // Delete task by ID
    };

    return (
        <div className="task-list-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h2>Task List</h2>
            <ul className="task-list" style={{ listStyle: 'none', padding: '0' }}>
                {tasks && tasks.map((task) => (
                    <li key={task.id} style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '10px', marginBottom: '10px' }}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <div className="button-group" style={{ display: 'flex', gap: '10px' }}>
                            <Link to={`/task/${task.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>Update</Link>
                            <button onClick={() => handleDelete(task.id)} style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px' }}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            <Link to="/task/new" className="create-task-btn" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>Create New Task</Link>
        </div>
    );
};
export default TaskListPage;