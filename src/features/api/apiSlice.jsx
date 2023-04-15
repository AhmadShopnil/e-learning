import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mock-server-878b.onrender.com",
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
