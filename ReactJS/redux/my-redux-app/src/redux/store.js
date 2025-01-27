import { configureStore } from "@reduxjs/toolkit";
import { ecommerceSlice } from "./ecommerce";
export const store=configureStore({
    reducer:{
        ecommerce:ecommerceSlice
    }
})