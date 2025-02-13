import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addTask, updateTask } from '../redux/taskSlice';

const TaskFormPage = () => {
    const { taskId } = useParams(); // Get the task ID from the URL
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Get the task list from the Redux store
    const tasks = useSelector((state) => state.tasks.tasks); // Corrected here

    // State for form fields
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isEditMode, setIsEditMode] = useState(false); // Track if in edit mode

    // Pre-fill the form if in edit mode
    useEffect(() => {
        if (taskId) {
            const taskToEdit = tasks.find((task) => task.id === parseInt(taskId));
            if (taskToEdit) {
                setTitle(taskToEdit.title);
                setDescription(taskToEdit.description);
                setIsEditMode(true); // Enable edit mode
            }
        }
    }, [taskId, tasks]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEditMode) {
            // Dispatch the action to update the task
            const updatedTask = { id: parseInt(taskId), title, description };
            dispatch(updateTask(updatedTask)); // Dispatch the updateTask action
        } else {
            // Dispatch the action to add the task
            const newTask = { id: Date.now(), title, description };
            dispatch(addTask(newTask)); // Dispatch the addTask action
        }

        navigate('/tasks'); // Navigate to the tasks list after submission
    };

    return (
        <div className="form-container" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h2>{isEditMode ? 'Edit Task' : 'Create New Task'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                />
                <textarea
                    placeholder="Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', height: '100px' }}
                />
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
                    {isEditMode ? 'Update Task' : 'Create Task'}
                </button>
            </form>
        </div>
    );
};
export default TaskFormPage;