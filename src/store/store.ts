import {combineReducers, configureStore} from '@reduxjs/toolkit';
import mixReducer from './mixSlice';
import extApiReducer from "./extApiSlice";
import {tracksAPI} from "../services/TracksService";

const rootReducer = combineReducers({
    mixReducer,
    extApiReducer,
    [tracksAPI.reducerPath]: tracksAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(tracksAPI.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
