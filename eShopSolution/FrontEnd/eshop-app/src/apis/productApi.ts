import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../constants/apiConstants';

const productApi = createApi({
    reducerPath: 'product',
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_BASE_URL}/api/product`,
    }),
    tagTypes: ['product'],
    endpoints: (builder) => ({
        getProductList: builder.query({
            query: () => ({
                url: 'product/load'
            }),
            providesTags: ['product']
        }),
        getProductById: builder.query({
            query: (id) => ({
                url: `product/${id}`
            }),
            providesTags: ['product']
        })
    })
})

export const { useGetProductListQuery, useGetProductByIdQuery } = productApi;
export default productApi;