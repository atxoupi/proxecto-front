import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tallerApi = createApi({
  reducerPath: 'tallerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_TALLERES_URL,
    credentials: 'include',
  }),
  tagTypes: ['Talleres'],
  endpoints: (builder) => ({
    getTalleres: builder.query({
      query: () => '/',
      providesTags: ['Talleres'],
    }),
    getTaller: builder.query({
      query: (id) => `/${id}/`,
      providesTags: ['Talleres'],
    }),
    createTaller: builder.mutation({
      query: (taller) => ({
        url: '/',
        method: 'POST',
        body: taller,
      }),
      invalidatesTags: ['Talleres'],
    }),
    updateTaller: builder.mutation({
      query: ({ id, ...taller }) => ({
        url: `/${id}/`,
        method: 'PUT',
        body: taller,
      }),
      invalidatesTags: ['Talleres'],
    }),
    deleteTaller: builder.mutation({
      query: (id) => ({
        url: `/${id}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Talleres'],
    }),
  }),
});

export const {
  useGetTalleresQuery,
  useGetTallerQuery,
  useCreateTallerMutation,
  useUpdateTallerMutation,
  useDeleteTallerMutation,
} = tallerApi;
