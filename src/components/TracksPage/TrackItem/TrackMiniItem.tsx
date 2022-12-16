import React from "react";
import styles from "./TrackMiniItem.module.css"
import {NavLink} from "react-router-dom";
import {ITrack} from "../../../models/ITrack";

const TrackMiniItem: React.FC<ITrack> = (props) => {
    let path = "/tracks/" + props.tittle;

    return (
        <NavLink to={path} className={ navData => navData.isActive ? styles.active : styles.benefits} >
            <div className={styles.benefits}>
                <div className={styles.benefitsItem}>
                    <img className={styles.benefitsIcon} src="https://placehold.it/50" alt=""/>
                    <div className={styles.benefitsImage}>
                        <img />
                    </div>
                    <h3 className={styles.benefitsTitle}><b>{props.artist}</b> - {props.tittle}</h3>
                    <div className={styles.benefitsText}>
                        <p><b>album: </b>{props.album}</p>
                        <p><b>year: </b>{props.year}</p>
                        <p><b>label: </b>{props.label}</p>
                        <p><b>genre: </b>{props.genre}</p>
                        <p><b>folderPC: </b>{props.folder}</p>
                        <p><b>bpm: </b>{props.bpm}</p>
                        <p><b>scale: </b>{props.scale}</p>
                        <p>Id of track - </p>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default TrackMiniItem;