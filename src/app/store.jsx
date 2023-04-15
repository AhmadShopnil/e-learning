import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice.jsx";
// import authReducer from "../features/auth/authSlice";
import videosReducer from "../features/videos/videosSlice.jsx";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // auth: authReducer,
    videos: videosReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
