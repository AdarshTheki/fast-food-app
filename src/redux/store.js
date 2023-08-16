import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import categorySlice from "./categorySlice";
import CartSlice from "./CartSlice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    cart: CartSlice,
  },
  middleware: [thunk],
});
