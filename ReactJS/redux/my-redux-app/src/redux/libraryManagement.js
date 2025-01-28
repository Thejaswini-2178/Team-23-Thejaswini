import { configureStore, createSlice } from "@reduxjs/toolkit";
export const librarySlice=createSlice({
    name:"library",
    initialState:["book1","book2"],
    reducers:{}
})
export default librarySlice.reducer