import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { shopApi } from "./shopServices";
import { authApi } from "./auth";
import shopReducer from "../redux/slices/shopSlice";
import cartReducer from "../redux/slices/cartSlice";
import authReducer from "../redux/slices/authSlice";

export const store = configureStore({
  reducer: {
    shop:shopReducer,
    cart:cartReducer,
    auth:authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
})

setupListeners(store.dispatch);