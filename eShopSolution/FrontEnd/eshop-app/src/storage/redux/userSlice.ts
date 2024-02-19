import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userItem: null
}

export const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setUserItem: (state, action) => {
            state.userItem = action.payload;
        },
        // updateUserName: (state, action) => {
        //     if (state.userItem) {
        //         state.userItem.name = action.payload;
        //     }
        // },
        // updateUserEmail: (state, action) => {
        //     if (state.userItem) {
        //         state.userItem.email = action.payload;
        //     }
        // },
    },
});

export const { setUserItem } = userSlice.actions;
export const userReducer = userSlice.reducer;