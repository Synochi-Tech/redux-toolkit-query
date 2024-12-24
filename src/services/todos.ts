import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AddTodoPayload, TodosResponse } from "../interfaces/todos";

export const dummyAPI = createApi({
  reducerPath: "dummyAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_LOCAL_API_TODO_SERVICE_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      // add Token if your API is required
    },
  }),
  tagTypes: ["GET_TODO"],
  endpoints: (builder) => ({
    getTodos: builder.query<TodosResponse, void>({
      query: () => `todos`,
      providesTags: ["GET_TODO"],
    }),

    addTodos: builder.mutation<TodosResponse, AddTodoPayload>({
      query: (payload) => ({
        url: "todos",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["GET_TODO"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodosMutation } = dummyAPI;
