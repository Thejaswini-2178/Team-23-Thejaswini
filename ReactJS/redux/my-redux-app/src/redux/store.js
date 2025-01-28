// import { configureStore } from "@reduxjs/toolkit";
// import { ecommerceSlice } from "./ecommerce";
// export const store=configureStore({
//     reducer:{
//         ecommerce:ecommerceSlice
//     }
// })
import { configureStore } from "@reduxjs/toolkit";
import { ecommerceSlice } from "./ecommerce";
import { socialMediaPostSlice } from "./socialMediaPost";
import { onlineQuizSlice } from "./onlineQuiz";
import { taskManagerSlice } from "./taskManager";
import { userProfileSlice } from "./userProfile"
import { addressBookSlice } from "./addressBooking"
import { librarySlice } from "./libraryManagement"
import { movieTicketSlice } from "./movieTicktes"
import { inventarySice } from "./inventaryManagement";
import { expenseSlice } from "./expenseTraker";




export const store = configureStore({
    reducer: {
        ecommerce: ecommerceSlice.reducer, // Use the `reducer` property of the slice
        socialMediaPost:socialMediaPostSlice.reducer,
        onlineQuiz:onlineQuizSlice.reducer,
        taskManager:taskManagerSlice.reducer,
        userProfile:userProfileSlice.reducer,
        addressBook:addressBookSlice.reducer,
        library:librarySlice.reducer,
        movieTicket:movieTicketSlice.reducer,
        inventary:inventarySice.reducer,
        expense:expenseSlice.reducer
    },
});
