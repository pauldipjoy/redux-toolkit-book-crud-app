import { configureStore } from "@reduxjs/toolkit";
import { BookSlice } from "../features/BookSlice";

export const Store = configureStore({
    reducer:{
        bookSlice: BookSlice.reducer,
    },
});


