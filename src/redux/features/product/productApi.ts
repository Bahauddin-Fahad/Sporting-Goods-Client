/* eslint-disable @typescript-eslint/no-unused-vars */

import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (queryObj) => {
        const params = new URLSearchParams();
        const {
          searchTerm,
          sort,
          categories,
          priceRange,
          category,
          page,
          limit,
        } = queryObj || {};
        if (category) {
          params.append("category", category);
        }
        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }
        const filteredCategories = categories
          ? Object.entries(categories)
              .filter(([key, value]) => value === true)
              .map(([key]) => key)
          : [];

        filteredCategories.forEach((category) => {
          params.append("category", category);
        });
        if (priceRange) {
          const { minPrice, maxPrice } = priceRange;
          if (minPrice !== undefined) {
            params.append("minPrice", minPrice);
          }
          if (maxPrice !== undefined) {
            params.append("maxPrice", maxPrice);
          }
        }
        if (sort) {
          const sortValue = sort === "descending" ? "-price" : "price";
          params.append("sort", sortValue);
        }
        if (page) {
          params.append("page", page);
        }
        if (limit) {
          params.append("limit", limit);
        }

        return { url: "/products", method: "GET", params };
      },
      providesTags: ["product"],
    }),
    getSingleProuct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    addProduct: builder.mutation({
      query: (data) => {
        return {
          url: "/products",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (options) => ({
        url: `/products/${options.id}`,
        method: "PUT",
        body: options.data,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProuctQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
