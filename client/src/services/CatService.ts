import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const catApi = createApi({
  reducerPath: "catApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://catfact.ninja/" }),
  endpoints: (builder) => ({
    getCatFact: builder.query({
      query: () => ({
        url: "/fact",
      }),
    }),
  }),
});

export const { useGetCatFactQuery } = catApi;
