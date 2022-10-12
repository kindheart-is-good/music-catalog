const SHOW_CONTENT = 'SHOW_CONTENT';

let initialState = {
    tracks: [
        {artist: 'Skee Mask', tittle: 'Ozone', album: 'ITLP09 - Pool', year: 2021, label: 'ILIAN TAPE', genre: 'ambient breakbeat drum&bass electronic hip hop techno Munich', folderPC: 'other Ambient or Atmospheric sound', bpm: '83', scale: 'G maj'},
        {artist: 'ANSR', tittle: 'M01', album: 'Chimhyangmoo 침​향​무 [OSC005]', year: 2021, label: 'Oslated', genre: 'deep forest nature psychedelic techno South Korea', folderPC: 'mood Obscure', bpm: '140', scale: 'F min'},
        {artist: 'RX-101', tittle: 'Dopamine', album: 'Dopamine', year: 2019, label: 'Suction Records', genre: 'electronic braindance electro idm rephlex techno Netherlands', folderPC: 'other Ambient or Atmospheric sound', bpm: '119', scale: 'A# min'},
    ],
    newMessageBody: "",
    isFetching: false,
}

const contentReducer = (state = initialState, action) => {
    /* Насколько глубоко нужно копировать? Мы должны копировать только то что планируем изменить (ниже). */
    switch (action.type) {

        case SHOW_CONTENT:
            return {
                ...state,
            }

        default:
            return state;
    }
}

export const showContentAC = () => ({type: SHOW_CONTENT})

export default contentReducer;