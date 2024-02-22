import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice/ProductSlice";
import cartReducer from "./cart/Cart";
const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
