import { configureStore, createSlice } from "@reduxjs/toolkit";
export const inventarySice=createSlice({
    name:"inventary",
    initialState:["item1","item2","item3"],
    reducers:{}
})
export default inventarySice.reducer