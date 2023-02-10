import React, {useState} from 'react';
import styles from './Mix.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {tracksAPI} from "../../services/TracksService";
import TrackForMixItem from "../../components/TrackItem/TrackForMixItem";
import TrackItem from "../../components/TrackItem/TrackItem";
import {addTrackToMix, fetchTracks} from "../../store/slices/mixSlice";

const MixPage: React.FC = () => {

    const dispatch = useAppDispatch();
    const mix = useAppSelector(state => state.mixReducer.mixOne);
    //const currentMix = useAppSelector(state => state.mixReducer.currentMix);
    const {currentMix, isLoading, error} = useAppSelector(state => state.mixReducer);

    //const {data: currentMix, error, isLoading} = tracksAPI.useFetchAllTracksQuery(10);  //  кастомный параметр на лимит выдаваемых элементов
    //const [createTrack, {}] = tracksAPI.useCreateTrackMutation();

    //const [isReady, setReady] = useState(false);

    const [artist, setArtist] = useState('');
    const [tittle, setTittle] = useState('');
    const [album, setAlbum] = useState('');
    const [year, setYear] = useState('');
    const [label, setLabel] = useState('');
    const [genre, setGenre] = useState('');
    const [tags, setTags] = useState('');
    const [folder, setFolder] = useState('');
    const [bpm, setBpm] = useState('');
    const [scale, setScale] = useState('');
    const [coverUrl, setCoverUrl] = useState('');

    return (
        <div className={styles.card}>

            <label>
                <input
                    value={artist}
                    placeholder="artist"
                    onChange={(e) => setArtist(e.target.value)}
                />
                <input
                    value={tittle}
                    placeholder="tittle"
                    onChange={(e) => setTittle(e.target.value)}
                />
                <input
                    value={album}
                    placeholder="album"
                    onChange={(e) => setAlbum(e.target.value)}
                />
                <input
                    value={year}
                    placeholder="year (number)"
                    onChange={(e) => setYear(e.target.value)}
                />
                <input
                    value={label}
                    placeholder="label"
                    onChange={(e) => setLabel(e.target.value)}
                />
                <input
                    value={genre}
                    placeholder="genre"
                    onChange={(e) => setGenre(e.target.value)}
                />
                <input
                    value={tags}
                    placeholder="tags"
                    onChange={(e) => setTags(e.target.value)}
                />
                <input
                    value={folder}
                    placeholder="folder"
                    onChange={(e) => setFolder(e.target.value)}
                />
                <input
                    value={bpm}
                    placeholder="bpm (number)"
                    onChange={(e) => setBpm(e.target.value)}
                />
                <input
                    value={scale}
                    placeholder="scale"
                    onChange={(e) => setScale(e.target.value)}
                />
                <input
                    value={coverUrl}
                    placeholder="coverUrl (not required)"
                    onChange={(e) => setCoverUrl(e.target.value)}
                />

                <button onClick={()=>{
                    dispatch(addTrackToMix({
                        artist,
                        tittle,
                        album,
                        year,
                        label,
                        genre,
                        tags,
                        folder,
                        bpm,
                        scale,
                        coverUrl,
                    }));

                    setArtist('');
                    setTittle('');
                    setAlbum('');
                    setYear('');
                    setLabel('');
                    setGenre('');
                    setTags('');
                    setFolder('');
                    setBpm('');
                    setScale('');
                    setCoverUrl('');
                }}>
                    Add Track
                </button>
            </label>

            <div className={styles.card}>
                {isLoading && <h1>Идёт загрузка...</h1>}
                {error && <h1>{error}</h1>}
                {JSON.stringify(currentMix, null, 2)}
            </div>

            <button onClick={()=>{
                //setReady(true)
                //console.log(currentMix.map(t => t.tittle))
                //console.log(mix.map(t => t.tittle))

                dispatch(fetchTracks())
            }}>
                Ready
            </button>

            <div className={styles.card}>
                {mix[1].label}
                <br/>
            </div>

            {isLoading && <h1>Идёт загрузка...</h1>}
            {error && <h1>Произошла ошибка при загрузке</h1>}
            {/*{(currentMix && isReady) && currentMix.map(track =>
                <TrackForMixItem key={track.tittle} track={track} />
            )}*/}

            {currentMix &&
                currentMix.map(track =>
                    <TrackItem key={track.tittle} track={track} />
                )
            }
        </div>
    )
}

export default MixPage;