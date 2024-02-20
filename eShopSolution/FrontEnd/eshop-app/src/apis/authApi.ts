// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { ChangePasswordData, LoginData, RegisterData } from "../Interface";
// const authApi = createApi({
//     reducerPath: "authApi",
//     baseQuery: fetchBaseQuery({
//         baseUrl: process.env.REACT_APP_API_URL ?? "http://localhost:5251/api",
//     }),
//     tagTypes: ["Auths"],
//     endpoints: (builder) => ({
//         loginUser: builder.mutation({
//             query: (loginData: LoginData) => ({
//                 url: "auth/login",
//                 method: "POST",
//                 body: loginData,
//             }),
//         }),
//         registerUser: builder.mutation({
//             query: (registerData: RegisterData) => ({
//                 url: "auth/register",
//                 method: "POST",
//                 body: registerData,
//             }),
//         }),
//         changePassword: builder.mutation({
//             query: (changePasswordData: ChangePasswordData) => ({
//                 url: "auth/change-password",
//                 method: "POST",
//                 body: changePasswordData,
//             }),
//         }),
//     }),
// });

// export const {
//     useLoginUserMutation,
//     useRegisterUserMutation,
//     useChangePasswordMutation,
// } = AuthApi;
// export default AuthApi;