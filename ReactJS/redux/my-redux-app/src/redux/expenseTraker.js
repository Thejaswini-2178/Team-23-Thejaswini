import { configureStore, createSlice } from "@reduxjs/toolkit";
export const expenseSlice=createSlice({
    name:"expense",
    initialState:["product1","product2","product3"],
    reducers:{}
})
export default expenseSlice.reducer