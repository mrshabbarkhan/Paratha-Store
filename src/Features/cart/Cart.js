import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    add: (state, action) => {
      const existing = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        console.log("in exist");
        state.cartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : { ...item, qty: item.qty }
        );
      } else {
        console.log("in new");
        return {
          ...state,
          cartItems: [action.payload, ...state.cartItems],
        };
      }
    },
    increase: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: item.qty + 1 }
          : { ...item, qty: item.qty }
      );
    },
    decrease: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: item.qty>1?item.qty - 1:1 }
          : { ...item, qty: item.qty }
      );
    },


    remove: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    },
  },
});

export const { add, remove, increase,decrease } = CartSlice.actions;
export default CartSlice.reducer;
