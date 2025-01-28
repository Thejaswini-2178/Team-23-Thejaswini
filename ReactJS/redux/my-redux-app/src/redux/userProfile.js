import { configureStore, createSlice } from "@reduxjs/toolkit";
export const userProfileSlice=createSlice({
    name:"userProfile",
    initialState:["profilName","Mail","Contact"],
    reducers:{}
})
export default userProfileSlice.reducer