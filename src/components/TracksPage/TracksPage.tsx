import React from 'react';
import styles from './TracksPage.module.css';
import {useAppSelector} from "../../hooks/reduxHooks";
import TrackItem from "./TrackItem/TrackItem";
import TrackMiniItem from "./TrackItem/TrackMiniItem";

const TracksPage = () => {

    const tracks = useAppSelector(state => state.mixReducer.tracks);

    let tracksItems = tracks.map( t => <TrackItem key={t.tittle} artist={t.artist}
                                                        tittle={t.tittle}
                                                        album={t.album}
                                                        year={t.year}
                                                        label={t.label}
                                                        genre={t.genre}
                                                        tags={t.genre}
                                                        folder={t.folder}
                                                        bpm={t.bpm}
                                                        scale={t.scale} />);

    let tracksMiniItems = tracks.map( t => <TrackMiniItem key={t.tittle} artist={t.artist}
                                                                tittle={t.tittle}
                                                                album={t.album}
                                                                year={t.year}
                                                                label={t.label}
                                                                genre={t.genre}
                                                                tags={t.genre}
                                                                folder={t.folder}
                                                                bpm={t.bpm}
                                                                scale={t.scale} />);

    //debugger;
    return (
        <div>
            { tracksItems }
            { tracksMiniItems }
        </div>
    )
}

export default TracksPage;