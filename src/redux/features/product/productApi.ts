import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (id) => {
        const params = new URLSearchParams();
        if (id) {
          params.append("categoryId", id);
        }
        return { url: "/products", method: "GET", params };
      },
    }),
    getSingleProuct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    updateProduct: builder.mutation({
      query: (options) => ({
        url: `/products/${options.id}`,
        method: "PUT",
        body: options.data,
      }),
      invalidatesTags: ["products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProuctQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
