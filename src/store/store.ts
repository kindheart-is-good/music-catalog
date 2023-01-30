import {combineReducers, configureStore} from '@reduxjs/toolkit';
import mixReducer from './slices/mixSlice';
import extApiReducer from './slices/extApiSlice';
import {authReducer} from './slices/authSlice';
import {tracksAPI} from '../services/TracksService';

const rootReducer = combineReducers({
    mixReducer,
    extApiReducer,
    auth: authReducer,
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
