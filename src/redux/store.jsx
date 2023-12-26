import { configureStore } from '@reduxjs/toolkit'
import shopReducer from "../redux/slices/shopSlice"

export const store = configureStore({
  reducer: {
    shop: shopReducer
  },
})