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

export const carouselApi = createApi({
  reducerPath: "carouselApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_CAROUSEL_URL,
    credentials: "include",
  }),
  tagTypes: ["Carousel"],
  endpoints: (builder) => ({
    getCarousel: builder.query({
      query: () => "/",
      providesTags: ["Carousel"],
    }),
    uploadCarouselImage: builder.mutation({
      query: (formData) => ({
        url: "/upload/",
        method: "POST",
        body: formData,
        headers: csrfHeaders(),
      }),
      invalidatesTags: ["Carousel"],
    }),
    deleteCarouselImage: builder.mutation({
      query: (id) => ({
        url: `/${id}/`,
        method: "DELETE",
        headers: csrfHeaders(),
      }),
      invalidatesTags: ["Carousel"],
    }),
  }),
});

export const {
  useGetCarouselQuery,
  useUploadCarouselImageMutation,
  useDeleteCarouselImageMutation,
} = carouselApi;
