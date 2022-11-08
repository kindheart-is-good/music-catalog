import React from 'react';
import styles from './TracksPage.module.css';
import TrackItem from "./Tracks/TrackItem";
import TrackMiniItem from "./Tracks/TrackMiniItem";

const TracksPage = (props) => {

    let tracksItems = props.tracks.map( t => <TrackItem key={t.tittle} artist={t.artist}
                                                            tittle={t.tittle}
                                                            album={t.album}
                                                            year={t.year}
                                                            label={t.label}
                                                            genre={t.genre}
                                                            folderPC={t.folderPC}
                                                            bpm={t.bpm}
                                                            scale={t.scale} />);

    let tracksMiniItems = props.tracks.map( t => <TrackMiniItem key={t.tittle} artist={t.artist}
                                                                        tittle={t.tittle}
                                                                        album={t.album}
                                                                        year={t.year}
                                                                        label={t.label}
                                                                        genre={t.genre}
                                                                        folderPC={t.folderPC}
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