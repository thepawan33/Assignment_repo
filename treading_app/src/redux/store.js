import { configureStore } from "@reduxjs/toolkit";

import stockReducer from "../redux/slices/stockSlice";

export const store = configureStore({
  reducer: {
    stock: stockReducer,
  },
});
