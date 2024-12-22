import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TodosResponse } from "../interfaces/todos";

export const dummyAPI = createApi({
  reducerPath: "dummyAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_LOCAL_API_TODO_SERVICE_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      // add Token if your API is required
    },
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<TodosResponse, void>({
      query: () => `products`,
    }),
  }),
});

export const { useGetTodosQuery } = dummyAPI;
