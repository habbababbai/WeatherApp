import { configureStore } from "@reduxjs/toolkit";

//  Redux store made using Redux Toolkit
const store = configureStore({
    reducer: {
        
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;