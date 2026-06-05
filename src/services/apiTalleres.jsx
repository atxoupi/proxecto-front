import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

function getCookie(name) {
  if (document.cookie && document.cookie !== '') {
    const [cookie = null] = document.cookie
      .split(";")
      .map((c) => c.split("="))
      .filter(([key]) => key.trim() === name);
    if (cookie) return cookie[1];
  }
  return "";
}

const csrfHeaders = () => ({ "X-CSRFToken": getCookie("csrftoken") });

export const tallerApi = createApi({
  reducerPath: "tallerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_TALLERES_URL,
    credentials: "include",
  }),
  tagTypes: ["Talleres"],
  endpoints: (builder) => ({
    getTalleres: builder.query({
      query: () => "/",
      providesTags: ["Talleres"],
    }),
    getTaller: builder.query({
      query: (id) => `/${id}/`,
      providesTags: ["Talleres"],
    }),
    createTaller: builder.mutation({
      query: (taller) => ({
        url: "/",
        method: "POST",
        body: taller,
        headers: csrfHeaders(),
      }),
      invalidatesTags: ["Talleres"],
    }),
    updateTaller: builder.mutation({
      query: ({ id, ...taller }) => ({
        url: `/${id}/`,
        method: "PUT",
        body: taller,
        headers: csrfHeaders(),
      }),
      invalidatesTags: ["Talleres"],
    }),
    deleteTaller: builder.mutation({
      query: (id) => ({
        url: `/${id}/`,
        method: "DELETE",
        headers: csrfHeaders(),
      }),
      invalidatesTags: ["Talleres"],
    }),
    uploadImage: builder.mutation({
      query: (formData) => ({
        url: "upload/",
        method: "POST",
        body: formData,
        credentials: "include",
        headers: csrfHeaders(),
      }),
    }),
  }),
});

export const {
  useGetTalleresQuery,
  useGetTallerQuery,
  useCreateTallerMutation,
  useUpdateTallerMutation,
  useDeleteTallerMutation,
  useUploadImageMutation,
} = tallerApi;
