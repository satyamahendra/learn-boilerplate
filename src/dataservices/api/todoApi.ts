import { Todo } from '@/pages/Todo/Todo.type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:4000/';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  // tag cache
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    // get all todos
    getTodos: builder.query<Todo[], void>({
      query: () => 'todos',
      providesTags: ['Todos'],
    }),

    // create todo
    createTodo: builder.mutation({
      query: (todo) => ({
        url: 'todos',
        method: 'POST',
        body: todo,
      }),
      // invalidate cache
      invalidatesTags: ['Todos'],
    }),

    // delete todo
    deleteTodo: builder.mutation({
      query: (todoId) => ({
        url: `todos/${todoId}`,
        method: 'delete',
      }),
      // invalidate cache
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
