import React from 'react';
import styles from './Content.module.css';
import ContentItem from "./ContentItem/ContentItem";
import ContentBenefits from "./ContentItem/ContentBenefits";

const Content = (props) => {

    let contentElementsArticle = props.tracks.map( t => <ContentItem key={t.tittle} artist={t.artist}
                                                                         tittle={t.tittle}
                                                                         album={t.album}
                                                                         year={t.year}
                                                                         label={t.label}
                                                                         genre={t.genre}
                                                                         folderPC={t.folderPC}
                                                                         bpm={t.bpm}
                                                                         scale={t.scale} />);

    let contentElementsBenefits = props.tracks.map( t => <ContentBenefits key={t.tittle} artist={t.artist}
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
            { contentElementsArticle }
            { contentElementsBenefits }
        </div>
    )
}

export default Content;