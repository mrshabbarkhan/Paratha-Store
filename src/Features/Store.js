import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice/ProductSlice";
import cartReducer from "./cart/Cart";
import CartSlice from "./cart/CartSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    cartslice:CartSlice
  },
});

export default store;
