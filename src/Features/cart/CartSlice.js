import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartslice",
  initialState: {
    category: "all",
  },
  reducers: {
    setcategory: (state, action) => {
      state.category = action.payload;
    },
  },
});
export const { setcategory } = cartSlice.actions;
export default cartSlice.reducer;
