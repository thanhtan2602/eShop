import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productItems: []
};

export const productItemsSlice = createSlice({
    name: 'ProudctItems',
    initialState,
    reducers: {
        setProductItems: (state, action) => {
            state.productItems = action.payload
        }
    }
})

export const { setProductItems } = productItemsSlice.actions;
export const productItemsReducer = productItemsSlice.reducer;