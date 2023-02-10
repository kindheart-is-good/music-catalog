import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {ITrack} from "../../models/ITrack";

export const fetchTracks = createAsyncThunk(
    'mixPage/fetchAllTracks',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<ITrack[]>('http://localhost:4004/tracks');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить посты")
        }
    }
)

export const addTrackToMix = createAsyncThunk<any, {}, {rejectValue: string}>(
    'mixPage/addTrackToMix',
    async function (params, {rejectWithValue}) {
        //const { data } = await instance.post('/auth/login', params);
        const { data } = await axios.post('http://localhost:4004/track', params);
        return data as any;
    }
)

interface MixState {
    tracks: ITrack[];
    mixOne: ITrack[];
    currentMix: ITrack[];
    newMix: ITrack[];
    status?: string;
    isLoading: boolean;
    error: string | null;
}

const initialState: MixState = {
    tracks: [
        {artist: 'Skee Mask', tittle: 'Ozone', album: 'ITLP09 - Pool', year: 2021, label: 'ILIAN TAPE', genre: '', tags: 'ambient breakbeat drum&bass electronic hip hop techno Munich', folder: 'other Ambient or Atmospheric sound', bpm: 83, scale: 'G maj'},
        {artist: 'ANSR', tittle: 'M01', album: 'Chimhyangmoo 침​향​무 [OSC005]', year: 2021, label: 'Oslated', genre: '', tags: 'deep forest nature psychedelic techno South Korea', folder: 'mood Obscure', bpm: 140, scale: 'F min'},
        {artist: 'RX-101', tittle: 'Dopamine', album: 'Dopamine', year: 2019, label: 'Suction Records', genre: '', tags: 'electronic braindance electro idm rephlex techno Netherlands', folder: 'other Ambient or Atmospheric sound', bpm: 119, scale: 'A# min'},
    ],
    mixOne: [
        {artist: 'BLNDR', tittle: 'Tomb', album: 'Various Adepts - Volume II', year: 2015, label: 'Hypnus Records', genre: 'Techno (Raw / Deep / Hypnotic) | Deep / Hypnotic ', tags: 'electronic ambient techno atmospheric techno deep techno hypnotic techno techno Bålsta', folder: '_ mood LIGHT', bpm: 110, scale: 'F min'},
        {artist: 'Acronym', tittle: 'Albanova', album: 'Millennial Lowlife', year: 2022, label: 'Benthic', genre: 'Techno (Raw / Deep / Hypnotic)', tags: 'hard techno acid techno ambient deep techno dub techno industrial techno underground İstanbul', folder: '_ mood LIGHT', bpm: 103, scale: 'C min'},
        {artist: 'Aurora Halal', tittle: 'Eternal Blue (Wata Igarashi Cruising Remix)', album: 'Liquiddity', year: 2019, label: 'Mutual Dreaming Recordings', genre: 'Melodic House & Techno', tags: 'electronic brooklyn experimental techno New York', folder: '_ mood LIGHT', bpm: 128, scale: 'A# maj'},
    ],
    currentMix: [],
    newMix: [],
    isLoading: false,
    error: '',
}

const mixSlice = createSlice({
    name: 'mixPage',
    initialState,
    reducers: {
        /*usersFetching(state) {                      // будет вызываться в тот момент когда мы начинаем подгрузку пользователей
            state.isLoading = true;
        },
        usersFetchingSuccess(state, action: PayloadAction<ITrack[]>) {      // будет вызываться когда подгрузка пользователей произошла успешно
            state.isLoading = false;
            state.error = '';
            state.tracks = action.payload;
        },
        usersFetchingError(state, action: PayloadAction<string>) {      // будет вызываться когда произошла ошибка
            state.isLoading = false;
            state.error = action.payload;   // Если у нас произошла ошибка то мы также должны сохранить в состоянии сообщение об этой ошибке. А само сообщение об ошибке мы будем получать в payload
        },*/
    },
    extraReducers: {
        [fetchTracks.pending.type]: (state) => {                                        // Сценарий ожидания
            state.isLoading = true;
        },
        [fetchTracks.fulfilled.type]: (state, action: PayloadAction<ITrack[]>) => {      // Сценарий успешной загрузки
            state.isLoading = false;
            state.error = '';
            state.currentMix = action.payload;
        },
        [fetchTracks.rejected.type]: (state, action: PayloadAction<string>) => {        // Сценарий когда произошла ошибка
            state.isLoading = false;
            state.error = action.payload;
        },
        [addTrackToMix.pending.type]: (state) => {
            state.status = 'loading';
            //state.newMix = null;
            state.error = null;     // если до этого в стейте была сохранена какая-то Ошибка
        },
        [addTrackToMix.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.status = 'resolved';
            state.newMix = action.payload;
        },
        [addTrackToMix.rejected.type]: (state, action: PayloadAction<any>) => {     // т.к. внутри createAsyncThunk создали rejectWithValue
            state.status = 'rejected';
            //state.newMix = null;
            state.error = action.payload;
        },
    }
});

// деструктуризируем поле actions которое получаем из Slice и в фигурных скобках указываем какие поля мы хотим получить.
//export const {addTrackToMix} = mixSlice.actions;

export default mixSlice.reducer;
