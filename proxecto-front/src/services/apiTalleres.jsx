import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

function getCookie(name) {
    if (document.cookie && document.cookie !== '') {
        const [cookie=null] =document.cookie.split(";"). map((c)=>{return c.split("=");}).filter(([key])=>key.trim() === name);
        if (cookie) {
            return cookie[1];
        }
    }
    return "";
}

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
        headers: {
          "X-CSRFToken": getCookie("csrftoken"),
        },
      }),
      invalidatesTags: ["Talleres"],
    }),
    updateTaller: builder.mutation({
      query: ({ id, ...taller }) => ({
        url: `/${id}/`,
        method: "PUT",
        body: taller,
      }),
      invalidatesTags: ["Talleres"],
    }),
    deleteTaller: builder.mutation({
      query: (id) => ({
        url: `/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["Talleres"],
    }),
    uploadImage: builder.mutation({
      query: (formData) => ({
        url: "upload/",
        method: "POST",
        body: formData,
        credentials: "include",
        headers: {
          "X-CSRFToken": getCookie("csrftoken"),
        },
      }),
      invalidatesTags: ["Talleres"],
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
