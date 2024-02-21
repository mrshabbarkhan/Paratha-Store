import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    isloading: false,
    isError: false,
    isSuccess: false,
    product: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isloading = false;
      state.product = action.payload;
      state.isSuccess = true;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.isloading = false;
      state.isSuccess = false;
      state.isError = true;
    });
  },
});

export default productSlice.reducer;

export const fetchProducts = createAsyncThunk("Fetch/Data", async () => {
  const data = await fetch("https://paratha-store.onrender.com/data");
  const response = await data.json();
  console.log(response);
  return response;
});
