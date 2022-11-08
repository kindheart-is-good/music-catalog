const SHOW_TRACKS = 'SHOW_TRACKS';

let initialState = {
    tracks: [
        {artist: 'Skee Mask', tittle: 'Ozone', album: 'ITLP09 - Pool', year: 2021, label: 'ILIAN TAPE', genre: 'ambient breakbeat drum&bass electronic hip hop techno Munich', folderPC: 'other Ambient or Atmospheric sound', bpm: '83', scale: 'G maj'},
        {artist: 'ANSR', tittle: 'M01', album: 'Chimhyangmoo 침​향​무 [OSC005]', year: 2021, label: 'Oslated', genre: 'deep forest nature psychedelic techno South Korea', folderPC: 'mood Obscure', bpm: '140', scale: 'F min'},
        {artist: 'RX-101', tittle: 'Dopamine', album: 'Dopamine', year: 2019, label: 'Suction Records', genre: 'electronic braindance electro idm rephlex techno Netherlands', folderPC: 'other Ambient or Atmospheric sound', bpm: '119', scale: 'A# min'},
    ],
}

const tracksReducer = (state = initialState, action) => {
    switch (action.type) {

        case SHOW_TRACKS:
            return {
                ...state,
            }

        default:
            return state;
    }
}

export const showTracks = () => ({type: SHOW_TRACKS})

export default tracksReducer;