import React from "react";
import styles from "./TrackItem.module.css"
import {NavLink} from "react-router-dom";
import {ITrack} from "../../models/ITrack";

interface TrackItemProps {
    track: ITrack;
}

const TrackItem: React.FC<TrackItemProps> = ({ track }) => {
    //let path = "/tracks/" + track.tittle;

    return (
        <div className={styles.article}>
            {/*<NavLink to={path} className={ navData => navData.isActive ? styles.active : styles.article} >*/}

                <div className={styles.articleHeader}>
                    <img className={styles.articlePhoto} src="https://placehold.it/750x200" alt="" />
                    <div className={styles.articleImage}></div>
                </div>

                <div className={styles.articleContent}>
                    <h1 className={styles.articleTitle}>
                        <a href="src/components/TrackItem#"><b>{track.artist}</b> - {track.tittle}</a>
                    </h1>
                    <div className={styles.articleText}>
                        <p><b>album: </b>{track.album}</p>
                        <p><b>year: </b>{track.year}</p>
                        <p><b>label: </b>{track.label}</p>
                        <p><b>genre: </b>{track.genre}</p>
                        <p><b>folderPC: </b>{track.folder}</p>
                        <p><b>bpm: </b>{track.bpm}</p>
                        <p><b>scale: </b>{track.scale}</p>
                    </div>
                    <ul className={styles.articleFooter}>
                        <li><span>Id of track - </span></li>
                        <li>еще <span className={styles.articleData}></span></li>
                    </ul>
                </div>

            {/*</NavLink>*/}
        </div>
    )
}

export default TrackItem;