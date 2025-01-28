import { configureStore, createSlice } from "@reduxjs/toolkit";
export const taskManagerSlice=createSlice({
    name:"taskManager",
    initialState:["task1","task2","task3","task4","task5"],
    reducers:{}
})
export default taskManagerSlice.reducer 