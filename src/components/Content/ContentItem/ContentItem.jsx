import React from "react";
import styles from "./ContentArticle.module.css"
import {NavLink} from "react-router-dom";

const ContentItem = (props) => {
    let path = "/content/" + props.tittle;

    return (
        <div className={styles.article}>
            <NavLink to={path} className={ navData => navData.isActive ? styles.active : styles.article} >

                <div className={styles.articleHeader}>
                    <img className={styles.articlePhoto} src="https://placehold.it/750x200" alt="" />
                    <div className={styles.articleImage}></div>
                </div>

                <div className={styles.articleContent}>
                    <h1 className={styles.articleTitle}>
                        <a href="#"><b>{props.artist}</b> - {props.tittle}</a>
                    </h1>
                    <div className={styles.articleText}>
                        <p><b>album: </b>{props.album}</p>
                        <p><b>year: </b>{props.year}</p>
                        <p><b>label: </b>{props.label}</p>
                        <p><b>genre: </b>{props.genre}</p>
                        <p><b>folderPC: </b>{props.folderPC}</p>
                        <p><b>bpm: </b>{props.bpm}</p>
                        <p><b>scale: </b>{props.scale}</p>
                    </div>
                    <ul className={styles.articleFooter}>
                        <li><span>Id of track - </span></li>
                        <li>еще <span className={styles.articleData}></span></li>
                    </ul>
                </div>
            </NavLink>
        </div>
    )
}

export default ContentItem;