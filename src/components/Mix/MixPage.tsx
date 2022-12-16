import React, {useState} from 'react';
import styles from './Mix.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";

const MixPage: React.FC = () => {

    const [text, setText] = useState('');
    const dispatch = useAppDispatch();

    const mix = useAppSelector(state => state.mixPage.mixOne);
    const currentMix = useAppSelector(state => state.mixPage.currentMix);

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
        </div>
    )
}

export default MixPage;