import { configureStore } from "@reduxjs/toolkit";
import  ecommerceSlice  from "./ecommerce";
import  socialMediaPostSlice  from "./socialMediaPost";
import  onlineQuizSlice  from "./onlineQuiz";
import  taskManagerSlice  from "./taskManager";
import  userProfileSlice  from "./userProfile"
import  addressBookSlice  from "./addressBooking"
import  librarySlice  from "./libraryManagement"
import  movieTicketSlice  from "./movieTicktes"
import  inventarySice  from "./inventaryManagement";
import  expenseSlice  from "./expenseTraker";

const store = configureStore({
reducer: {
        ecommerce: ecommerceSlice, // Use the ` property of the slice
        socialMediaPost:socialMediaPostSlice,
        onlineQuiz:onlineQuizSlice,
        taskManager:taskManagerSlice,
        userProfile:userProfileSlice,
        addressBook:addressBookSlice,
        library:librarySlice,
        movieTicket:movieTicketSlice,
        inventary:inventarySice,
        expense:expenseSlice
    },
});
export default store

// import { configureStore } from '@reduxjs/toolkit'
// import inventoryReducer from './inventorySlice'

// const store = configureStore({
//     reducer: {
//         inventory: inventoryReducer
//     }
// })

// export default store

