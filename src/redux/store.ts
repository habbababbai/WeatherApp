import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import searchbarReducer from "../features/searchbarSlice";
import { weatherApi } from "../features/fetchWeather";

//  Redux store made using Redux Toolkit
export const store = configureStore({
    reducer: {
        searchbar: searchbarReducer,
        [weatherApi.reducerPath]: weatherApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
