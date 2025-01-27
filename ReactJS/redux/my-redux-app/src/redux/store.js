// import { configureStore } from "@reduxjs/toolkit";
// import { ecommerceSlice } from "./ecommerce";
// export const store=configureStore({
//     reducer:{
//         ecommerce:ecommerceSlice
//     }
// })
import { configureStore } from "@reduxjs/toolkit";
import { ecommerceSlice } from "./ecommerce";

export const store = configureStore({
    reducer: {
        ecommerce: ecommerceSlice.reducer, // Use the `reducer` property of the slice
    },
});
