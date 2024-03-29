import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase";

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes:["image", "order"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
    }),
    getProduct: builder.query({
        query:(id)=> `products/${id}.json`
    }),
    getCategories : builder.query({
        query: () => "categories.json"
    }),
    postOrders: builder.mutation({
      query: ({localId, order}) => ({
        url:`orders/${localId}.json`,
        method:"POST",
        body:order
      }),
      invalidatesTags:["order"]
    }),
    getOrders: builder.query({
      query: (localId) => `orders/${localId}.json`,
      transformResponse:(response) => {
       if(!response) return []
       const data = Object.keys(response).map(key =>({id:key, ...response[key]}))
       return data
      },
      providesTags:["order"]
    }),
    postProfileImage: builder.mutation({
      query: ({localId,image}) => ({
        url:`profileImage/${localId}.json`,
        method:"PUT",
        body:{image}
      }),
      invalidatesTags:["image"]
    }),
    getProfileImage: builder.query({
      query: (localId) => `profileImage/${localId}.json`,
      providesTags:["image"]
    }),
  }),
})

export const { useGetProductsQuery, useGetProductQuery, useGetCategoriesQuery, usePostOrdersMutation, useGetOrdersQuery, usePostProfileImageMutation, useGetProfileImageQuery } = shopApi;