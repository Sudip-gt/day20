import { configureStore } from '@reduxjs/toolkit';
import { errorLogApi } from '../services/errorLogApi';

export const store = configureStore({
  reducer: {
    [errorLogApi.reducerPath]: errorLogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(errorLogApi.middleware),
  devTools: true,
});
