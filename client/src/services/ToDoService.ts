import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import ToDo, { NewToDo } from "../features/todo/types";

export const toDoApi = createApi({
  reducerPath: "toDoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["ToDo"],
  endpoints: (builder) => ({
    getTodos: builder.query<ToDo[], void>({
      query: () => ({
        url: "/todo",
      }),
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: "ToDo" as const, id })), "ToDo"]
          : ["ToDo"],
    }),
    newTodo: builder.mutation<ToDo, NewToDo>({
      query: (body) => ({
        url: "/todo",
        method: "POST",
        body,
      }),
      invalidatesTags: ["ToDo"],
    }),
    deleteTodo: builder.mutation<number, number>({
      query: (id) => ({
        url: `/todo/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ToDo"],
    }),
  }),
});

export const { useGetTodosQuery, useNewTodoMutation, useDeleteTodoMutation } =
  toDoApi;
