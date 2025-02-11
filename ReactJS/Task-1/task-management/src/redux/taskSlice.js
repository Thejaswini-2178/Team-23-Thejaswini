import { createSlice } from '@reduxjs/toolkit';
import { saveToLocalStorage, getFromLocalStorage } from '../utils/localStorage';

const initialState = {
    tasks: getFromLocalStorage('tasks') || []
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
            saveToLocalStorage('tasks', state.tasks);
        },
        updateTask: (state, action) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
                saveToLocalStorage('tasks', state.tasks);
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            saveToLocalStorage('tasks', state.tasks);
        }
    }
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
