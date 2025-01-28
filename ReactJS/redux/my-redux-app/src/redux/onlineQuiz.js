import { configureStore, createSlice } from "@reduxjs/toolkit";
export const onlineQuizSlice=createSlice({
    name:"onlineQuiz",
    initialState:["question1","question2","question3","question4"],
    reducers:{}
})
export default onlineQuizSlice.reducer