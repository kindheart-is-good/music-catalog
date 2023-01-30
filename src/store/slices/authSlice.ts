import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import instance from "../../axios/axios";

export const fetchAuth = createAsyncThunk<any, {}, {rejectValue: string}>(
    'auth/fetchAuth',
    async function (params, {rejectWithValue}) {
        const { data } = await instance.post('/auth/login', params);
        //const response = await axios.post('auth/login', params);

        //const {data} = await response.json();
        //const {data} = response;
        return data as any;
    }
);

export const fetchRegister = createAsyncThunk<any, {}, {rejectValue: string}>(
    'auth/fetchRegister',
    async function (params, {rejectWithValue}) {
        const { data } = await instance.post('/auth/registration', params);
        //const response = await axios.post('auth/login', params);

        //const {data} = await response.json();
        //const {data} = response;
        return data as any;
    }
);

interface AuthState {
    data: any;
    status: string;
    error: string | null;
    isLoading: boolean;
    email: string;
    token: string;
    id: string;
}

const initialState: AuthState = {
    data: null,             // информацию о пользователе будем хранить в data
    status: 'loading',
    error: null,
    isLoading: false,
    email: '',
    token: '',
    id: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
        },
        setUser(state, action) {
            //state.email = action.payload.email;
            //state.token = action.payload.token;
            //state.id = action.payload.id;
        },
        removeUser(state) {
            //state.email = null;
            //state.token = null;
            //state.id = null;
        },
    },
    /*extraReducers: {
        [fetchAuth.pending.type]: (state) => {
            state.status = 'loading';
            state.data = null;
            state.error = null;     // если до этого в стете была сохранена какая-то Ошибка
        },
        [fetchAuth.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.status = 'resolved';
            state.data = action.payload;
        },
        [fetchAuth.rejected.type]: (state, action: PayloadAction<any>) => {     // т.к. внутри createAsyncThunk создали rejectWithValue
            state.status = 'rejected';
            state.data = null;
            state.error = action.payload;
        },
        [fetchRegister.pending.type]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchRegister.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.status = 'loaded';
            state.data = action.payload;
        },
        [fetchRegister.rejected.type]: (state) => {
            state.status = 'error';
            state.data = null;
        },*/
    extraReducers: builder => {
        builder
            .addCase(fetchAuth.pending, (state) => {
                state.isLoading = true;
                state.data = null;
                state.error = null;     // если до этого в стете была сохранена какая-то Ошибка
            })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchRegister.pending, (state) => {
                state.isLoading = true;
                state.data = null;
                state.error = null;     // если до этого в стете была сохранена какая-то Ошибка
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
    }
});

export const selectIsAuth = (state: any) => Boolean(state.auth.data);

export const {logout, setUser, removeUser} = authSlice.actions;

export const authReducer = authSlice.reducer;
