import { createSlice } from "@reduxjs/toolkit";
import allProducts from "../../../data/products.json";
import allCategories from "../../../data/categories.json";

const initialState = {
    value:{
        products: allProducts,
        categories: allCategories,
        productSelected: {},
        categoryFilter: [],
    }
  }

  export const shopSlice = createSlice({
    name:"shop",
    initialState,
    reducers:{
        setCategoryFilter: (state, actions) => {
            state.value.categoryFilter = state.value.products.filter(product => product.category == actions.payload);
        },
        setProductSelected: (state, actions) => {
            state.value.productSelected = state.value.products.find(product => product.id === actions.payload);
        }
    }
  })

  export const { setCategoryFilter, setProductSelected } = shopSlice.actions;

  export default shopSlice.reducer;