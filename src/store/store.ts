import {configureStore} from '@reduxjs/toolkit';
import mixReducer from './mixSlice'

const store = configureStore({
    reducer: {
        mixPage: mixReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
