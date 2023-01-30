import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch} from "../store";
import {extApiSlice} from "../slices/extApiSlice";
import {ICoffee} from "../../models/IforExtAPI";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(extApiSlice.actions.usersFetching());
//         const response = await axios.get<ICoffee[]>('https://jsonplaceholder.typicode.com/users');
//         dispatch(extApiSlice.actions.usersFetchingSuccess(response.data));
//     } catch (e: any) {
//         dispatch(extApiSlice.actions.usersFetchingError(e.message));
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<ICoffee[]>('https://jsonplaceholder.typicode.com/users');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить посты")
        }
    }
)
