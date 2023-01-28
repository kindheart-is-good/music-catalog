import React, {useState} from 'react';
import styles from './Mix.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {tracksAPI} from "../../services/TracksService";
import TrackForMixItem from "../../components/TrackItem/TrackForMixItem";

const MixPage: React.FC = () => {

    const dispatch = useAppDispatch();
    const mix = useAppSelector(state => state.mixReducer.mixOne);
    const currentMix = useAppSelector(state => state.mixReducer.currentMix);

    const {data: tracks, error, isLoading} = tracksAPI.useFetchAllTracksQuery(10);  //  кастомный параметр на лимит выдаваемых элементов
    const [createTrack, {}] = tracksAPI.useCreateTrackMutation();

    const [isReady, setReady] = useState(false);
    const [text, setText] = useState('');

    return (
        <div className={styles.card}>

            <label>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={()=>{
                    /*dispatch(addTrackToMix({text}));*/
                    setText('');
                }}>
                    Add Track
                </button>
            </label>

            <button onClick={()=>{
                setReady(true)
                //console.log(currentMix.map(t => t.tittle))
                console.log(mix.map(t => t.tittle))
            }}>
                Ready
            </button>

            <div className={styles.card}>
                {mix[1].label}
                <br/>
            </div>

            {isLoading && <h1>Идёт загрузка...</h1>}
            {error && <h1>Произошла ошибка при загрузке</h1>}
            {(tracks && isReady) && tracks.map(track =>
                <TrackForMixItem key={track.tittle} track={track} />
            )}
        </div>
    )
}

export default MixPage;