import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITodo } from "../types/types";

export const todoApi = createApi({
  reducerPath: "todoApi",
  tagTypes: ["Todos"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  endpoints: (build) => ({
    getTodos: build.query<ITodo[], string>({
      query: (limit = "") => ({
        url: `/todos?${
          limit && `_limit=${limit}`
        }` /*, params: {_limit:limit}*/,
      }),
      providesTags: () => ["Todos"],
    }),

    getTodo: build.query<ITodo, string | undefined>({
      query: (id) => `/todos/${id}`,
      providesTags: () => ["Todos"],
    }),

    addTodo: build.mutation<ITodo, Partial<ITodo>>({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),

    deleteTodo: build.mutation<void, string>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodo: build.mutation<ITodo, Partial<ITodo>>({
      query: ({ id, ...patch }) => ({
        url: `/todos/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodoQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todoApi;
