import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import { productItemsReducer } from './productSlice';
import { productApi } from '../../apis';

export const store = configureStore({
  reducer: {
    userStore: userReducer,
    productItems: productItemsReducer,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export default store;