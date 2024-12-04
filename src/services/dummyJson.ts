import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductResponse } from "../interfaces/product";

export const dummyAPI = createApi({
  reducerPath: "dummyAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_DUMMY_JSON_SERVICE_URL,
    headers: {
      "Content-Type": "application/json",
      // add Token if your API is required
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponse, void>({
      query: () => `products`,
    }),
  }),
});

export const { useGetProductsQuery, useLazyGetProductsQuery } = dummyAPI;
