import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from '../constants/api.js';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  /** TODO - To be added when api endpoints are ready */
  endpoints: (builder) => ({
    /** This is an example of an added endpoint - endpoint to be changed*/
    getUsers: builder.query({
      query: () => '/karolkproexe/jsonplaceholderdb/data',
      providesTags: ['get-users'],
    }),
    setUsers: builder.mutation({
      query: ({ payload }) => ({
        url: `/karolkproexe/jsonplaceholderdb/data`,
        method: 'PUT',
        body: payload,
      }),
      invalidatesTags: ['get-users'],
    }),
  }),
});

export const { useGetUsersQuery, use } = usersApi;
