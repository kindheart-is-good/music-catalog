import React, {useState} from 'react';
import styles from './Mix.module.css';
import {useDispatch, useSelector} from "react-redux";
import {addTrackToMix} from "../store/mixSlice";

function MixPage() {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const mix = useSelector(state => state.mixPage.mixOne);
    const currentMix = useSelector(state => state.mixPage.currentMix);

    const [isReady, setReady] = useState(false);

    return (
        <div className={styles.card}>
            From the component
            <label>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={()=>{
                    dispatch(addTrackToMix({text}));
                    setText('');
                }}>
                    Add Track
                </button>
            </label>

            <button onClick={()=>{
                setReady(true)
                console.log(currentMix.map(t => t.id))
            }}>
                Ready
            </button>
            <div className={styles.card}>
                {mix[1].label}
                <br/>
            </div>
        </div>
    )
}

export default MixPage;