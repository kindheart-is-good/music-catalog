import {configureStore} from '@reduxjs/toolkit';
import mixReducer from './mixSlice'

export default configureStore({
    reducer: {
        mixPage: mixReducer,
    },
});