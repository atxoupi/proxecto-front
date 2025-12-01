import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

function getCookie(name) {
    if (document.cookie && document.cookie !== '') {
        const [cookie=null] =document.cookie.split(";"). map((c)=>{return c.split("=");}).filter(([key])=>key.trim() === name);
        if (cookie) {
            return cookie[1];
        }
    }
    return "";
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_AUTH_URL,
    prepareHeaders: (headers) => {
        headers.set("X-CSRFToken", getCookie("csrftoken"));
        return headers;
    },
    credentials: 'include',
  }),
  tagTypes: ['Auth', 'Permissions', 'Members'],
  endpoints: (builder) => ({
    me: builder.query({
      query: () => ({
        url: '/me',
        providesTags: ['Auth'],
      }),
    }),
    login: builder.mutation({
      query: (initialPost) => ({
        url: '/login',
        method: 'POST',
        body: initialPost,
      }),
      invalidatesTags: ['Auth', 'Permissions', 'Members'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Auth', 'Permissions', 'Members'],
    }),
  }),
});

export const { useMeQuery, useLoginMutation, useLogoutMutation } = authApi;