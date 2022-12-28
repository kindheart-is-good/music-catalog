import {configureStore} from '@reduxjs/toolkit';
import mixReducer from './mixSlice';
import extApiReducer from "./extApiSlice";

const store = configureStore({
    reducer: {
        mixPage: mixReducer,
        extApiPage: extApiReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
