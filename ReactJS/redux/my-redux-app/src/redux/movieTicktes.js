import { configureStore, createSlice } from "@reduxjs/toolkit";
export const movieTicketSlice=createSlice({
    name:"movieTicket",
    initialState:["A1","B2","C3","B4","C5","A3"],
    reducers:{}
})
export default movieTicketSlice.reducer

