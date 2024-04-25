import { configureStore } from "@reduxjs/toolkit";
import productDataSlice from "../slices/Produc_data_slice";

const store=configureStore({
    reducer:{
        product_store:productDataSlice
    }
})
export default store