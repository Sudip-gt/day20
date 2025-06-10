import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Tasks'], 
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => '/todos?_limit=5',
      providesTags: ['Tasks'],
    }),

    addTask: builder.mutation({
      query: (newTask) => ({
        url: '/todos',
        method: 'POST',
        body: newTask,
      }),
      invalidatesTags: ['Tasks'],
    }),

    updateTask: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/todos/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: ['Tasks'],
    }),

    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tasks'],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = apiSlice;
