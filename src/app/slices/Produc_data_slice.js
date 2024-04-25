// slices/ProductDataSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductDataAsync = createAsyncThunk(
  "productData/getData",
  async () => {
    try {
      const response = await axios.get("https://api.pujakaitem.com/api/products?");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  productData: [],
  isLoading: false,
  error: null,
};

const productDataSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductDataAsync.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProductDataAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productData = action.payload;
      })
      .addCase(getProductDataAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default productDataSlice.reducer;
