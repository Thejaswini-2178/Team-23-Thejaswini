import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: "expense",
    initialState: ["product1", "product2", "product3"],
    reducers: {}
})
export default expenseSlice.reducer