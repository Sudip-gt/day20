import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => '/posts/1',

      refetchOnFocus: true,         // auto refetch the data when the window is focused
    }),
  }),
});

export const { useGetPostQuery } = apiSlice;
