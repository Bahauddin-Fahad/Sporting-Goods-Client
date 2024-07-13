import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["product", "order"],
  baseQuery,
  endpoints: () => ({}),
});
