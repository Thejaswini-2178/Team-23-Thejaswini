import { configureStore, createSlice } from "@reduxjs/toolkit";
export const inventarySice=createSlice({
    name:"inventary",
    initialState:["item1","item2","item3"],
    reducers:{}
})
export default inventarySice.reducer


// import { createSlice } from '@reduxjs/toolkit'

// const inventorySlice = createSlice({
//     name: 'inventory',
//     initialState: [],
//     reducers: {
//         addItem: (state, action) => {
//             state.push(action.payload)
//         },
//         removeItem: (state, action) => {
//             return state.filter((item, index) => index !== action.payload)
//         }
//     }
// })

// export const { addItem, removeItem } = inventorySlice.actions
// export default inventorySlice.reducer
