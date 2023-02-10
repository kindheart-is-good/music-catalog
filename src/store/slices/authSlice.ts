import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import instance from "../../axios/axios";
import {IUser} from "../../models/IUser";

export const fetchAuth = createAsyncThunk<any, {}, {rejectValue: string}>(
    'auth/fetchAuth',
    async function (params, {rejectWithValue}) {
        const { data } = await instance.post('/auth/login', params);
        return data as any;
    }
);

export const fetchRegister = createAsyncThunk<any, any, {rejectValue: string}>(
    'auth/fetchRegister',
    async function (params, {rejectWithValue}) {
        const { data } = await instance.post('/auth/registration', params);
        return data as any;
    }
);

/*export const fetchGetUsers = createAsyncThunk<IUser[], undefined, {rejectValue: string}>(
    'users/getUsers',
    async function (_, { rejectWithValue }) {
    const { data } = await instance.get('/users/getUsers');
    if (!data) {
        return rejectWithValue('Server Error!');
    }
    return data as IUser[];
});*/

/*export const fetchGetUsers = createAsyncThunk<IUser[], undefined>(
    'users/getUsers',
    async function (_) {
    const { data } = await instance.get('/users/getUsers');
    return data as IUser[];
});*/

export const fetchGetUsers = createAsyncThunk<IUser[], undefined, {rejectValue: string}>(
    'users/getUsers',
    async function (_, { rejectWithValue }) {
        const response = await fetch('http://localhost:4004/users/getUsers');
        if (!response.ok) {
            return rejectWithValue('Server Error!');
        }
        const data = response.json();
        return data;
});

interface AuthState {
    data: any | null;
    status: string;
    error: string | null;
    isLoading: boolean;
    email: string;
    token: string;
    id: string;
    users: IUser[];
}

const initialState: AuthState = {
    data: null,             // информацию о пользователе будем хранить в data
    status: 'loading',
    error: null,
    isLoading: false,
    email: '',
    token: '',
    id: '',
    users: [],
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
    extraReducers: {
        [fetchAuth.pending.type]: (state) => {
            state.status = 'loading';
            state.data = null;
            state.error = null;     // если до этого в стейте была сохранена какая-то Ошибка
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
        },
        [fetchGetUsers.pending.type]: (state) => {
            state.status = 'looooadin';
            //state.data = null;
        },
        [fetchGetUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.status = 'ok';
            //state.users = action.payload;
        },
        [fetchGetUsers.rejected.type]: (state) => {
            state.status = 'err';
            //state.data = null;
        },
    }
    /*extraReducers: (builder) => {
        builder
            .addCase(fetchAuth.pending, (state) => {
                state.isLoading = true;
                state.data = null;
                state.error = null;     // если до этого в стейте была сохранена какая-то Ошибка
            })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload.email;
            })
            .addCase(fetchRegister.pending, (state) => {
                state.isLoading = true;
                state.data = null;
                state.error = null;     // если до этого в стейте была сохранена какая-то Ошибка
            })
            .addCase(fetchRegister.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.data = action.payload.token;
            })
            .addCase(fetchGetUsers.pending, (state) => {
                //state.isLoading = true;
                //state.data = null;
                //state.error = null;     // если до этого в стейте была сохранена какая-то Ошибка
            })
            .addCase(fetchGetUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                //state.isLoading = false;
                //state.data = action.payload;
                state.users = action.payload;
            })
    }*/
});

export const selectIsAuth = (state: any) => Boolean(state.auth.data);

export const {logout, setUser, removeUser} = authSlice.actions;

export const authReducer = authSlice.reducer;
