import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const errorLogApi = createApi({
  reducerPath: 'errorLogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getLogs: builder.query({
      query: () => 'posts', 
      pollInterval: 5000,
    }),
  }),
});

export const { useGetLogsQuery } = errorLogApi;
