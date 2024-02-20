import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../constants/apiConstants';

const userApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_BASE_URL}/api/user`,
    }),
    tagTypes: ['user'],
    endpoints: (builder) => ({
        getUserById: builder.query({
            query: (id) => ({
                url: `user/${id}`
            }),
            providesTags: ['user']
        }),
        addUser: builder.mutation({
            query: (user) => ({
                url: 'user',
                method: 'POST',
                body: user
            })
        }),
        updateUser: builder.mutation({
            query: (user) => ({
                url: `user/${user.id}`,
                body: user
            })
        })
    })
})

export const { useGetUserByIdQuery } = userApi;
export default userApi;