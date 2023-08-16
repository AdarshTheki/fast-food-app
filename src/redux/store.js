import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import categorySlice from "./categorySlice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
  },
  middleware: [thunk],
});
