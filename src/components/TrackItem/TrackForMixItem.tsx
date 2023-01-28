import React, {FC} from 'react';
import {ITrack} from "../../models/ITrack";

interface TrackForMixItemProps {
    track: ITrack;
}

const TrackForMixItem: FC<TrackForMixItemProps> = ({ track }) => {
    return (
        <div className="post">
            {track.artist}. {track.tittle}
        </div>
    );
};

export default TrackForMixItem;