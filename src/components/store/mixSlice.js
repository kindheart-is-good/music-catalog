import {createSlice} from '@reduxjs/toolkit';

const mixSlice = createSlice({
    name: 'mixPage',

    initialState: {
        tracks: [
            {artist: 'Skee Mask', tittle: 'Ozone', album: 'ITLP09 - Pool', year: 2021, label: 'ILIAN TAPE', genre: 'ambient breakbeat drum&bass electronic hip hop techno Munich', folderPC: 'other Ambient or Atmospheric sound', bpm: '83', scale: 'G maj'},
            {artist: 'ANSR', tittle: 'M01', album: 'Chimhyangmoo 침​향​무 [OSC005]', year: 2021, label: 'Oslated', genre: 'deep forest nature psychedelic techno South Korea', folderPC: 'mood Obscure', bpm: '140', scale: 'F min'},
            {artist: 'RX-101', tittle: 'Dopamine', album: 'Dopamine', year: 2019, label: 'Suction Records', genre: 'electronic braindance electro idm rephlex techno Netherlands', folderPC: 'other Ambient or Atmospheric sound', bpm: '119', scale: 'A# min'},
        ],
        mixOne: [
            {artist: 'BLNDR', tittle: 'Tomb', album: 'Various Adepts - Volume II', year: 2015, label: 'Hypnus Records', genre: 'Techno (Raw / Deep / Hypnotic) | Deep / Hypnotic ', tags: 'electronic ambient techno atmospheric techno deep techno hypnotic techno techno Bålsta', folderPC: '_ mood LIGHT', bpm: '110', scale: 'F min'},
            {artist: 'Acronym', tittle: 'Albanova', album: 'Millennial Lowlife', year: 2022, label: 'Benthic', genre: 'Techno (Raw / Deep / Hypnotic)', tags: 'hard techno acid techno ambient deep techno dub techno industrial techno underground İstanbul', folderPC: '_ mood LIGHT', bpm: '103', scale: 'C min'},
            {artist: 'Aurora Halal', tittle: 'Eternal Blue (Wata Igarashi Cruising Remix)', album: 'Liquiddity', year: 2019, label: 'Mutual Dreaming Recordings', genre: 'Melodic House & Techno', tags: 'electronic brooklyn experimental techno New York', folderPC: '_ mood LIGHT', bpm: '128', scale: 'A# maj'},
        ],
        currentMix: [],
    },

    reducers: {
        addTrackToMix(state, action) {
            console.log(state);
            console.log(action);

            state.currentMix.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            });
        },
    },

});

// деструктуризируем поле actions которое получаем из Slice и в фигурных скобках указываем какие поля мы хотим получить.
export const {addTrackToMix} = mixSlice.actions;

export default mixSlice.reducer;