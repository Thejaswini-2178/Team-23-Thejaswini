import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [], // Ensure tasks is an array
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        updateTask: (state, action) => {
            const { id, title, description } = action.payload;
            const taskToUpdate = state.tasks.find((task) => task.id === id);
            if (taskToUpdate) {
                taskToUpdate.title = title;
                taskToUpdate.description = description;
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
    },
});


export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;