import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";

export const makeStore = () =>
    configureStore({
        reducer: {
            [baseApi.reducerPath]: baseApi.reducer,
            // add your own slices here later
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(baseApi.middleware),
        devTools: process.env.NODE_ENV !== "production",
    });

// a single store instance for client apps
export const store = makeStore();
