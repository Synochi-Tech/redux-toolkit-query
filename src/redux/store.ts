import { configureStore } from "@reduxjs/toolkit";
import { dummyAPI } from "../services/dummyJson";

const store = configureStore({
  reducer: {
    [dummyAPI.reducerPath]: dummyAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dummyAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
