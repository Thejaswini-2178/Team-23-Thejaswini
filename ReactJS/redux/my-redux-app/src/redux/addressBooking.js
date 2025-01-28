import { configureStore, createSlice } from "@reduxjs/toolkit";
export const addressBookSlice=createSlice(({
    name:"addressBook",
    initialState:["address1","address2"],
    reducers:{}
}))
export default addressBookSlice.reducer