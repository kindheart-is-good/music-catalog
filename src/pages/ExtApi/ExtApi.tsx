import React, {useState} from 'react';
import styles from './ExtApi.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {fetchUsers} from "../../store/actions/extApiActions";

const ExtApi: React.FC = () => {

    const dispatch = useAppDispatch();
    const mix = useAppSelector(state => state.extApiReducer.mixOne);
    const currentMix = useAppSelector(state => state.extApiReducer.currentMix);
    const {coffee} = useAppSelector(state => state.extApiReducer);

    const [isReady, setReady] = useState(false);
    const [text, setText] = useState('');
    const [data, setData] = useState("");

    const fetchToSampleapis = async (url: string) => {
        const resp = await fetch(url)           // в ответ мы получаем Promise
            .then(res => res.json())            // переводим полученный ответ в формат JSON
            .then(data => {console.log(data)})  // получим наши данные
    }

    const getDataFromSampleApis = async (url: string) => {
        const resp = await fetch(url);
        const json = await resp.json();
        setData(json);
    }

    // const fetchWithReturn = async (url: string) => {
    //     const resp = await fetch(url);
    //     const json = await resp.json();
    //     return json;
    // }



    const getUser = async(id: number) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (!response.ok) {
                throw new Error('Ответ сервера не в диапазоне 200-299');
            }
            const data = await response.json();

            return data;
        } catch (e) {
            throw new Error('Ошибка при получении данных пользователя');
        }
    }
    // функция для отображения данных пользователя на странице
    //const renderUsers = (users) => { ... }
    // асинхронная функция, в которой сначала вызывается getUser(), а затем renderUsers() для отображения полученных на странице
    const clickUser = async(id: number) => {
        try {
            const data = await getUser(id);
            const users = Array.isArray(data) ? data : [data];
            console.log(users);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className={styles.card}>
            <p>From the component</p>

            <button onClick={()=>{
                setReady(true)
                fetchToSampleapis('https://api.sampleapis.com/beers/ale');
                fetchToSampleapis('https://jsonplaceholder.typicode.com/posts/1');
                //fetchToSampleapis('https://api.sampleapis.com/movies/action-adventure');
                getDataFromSampleApis('https://api.sampleapis.com/coffee/hot');
                //const resp = fetchWithReturn('https://api.sampleapis.com/coffee/hot');

                clickUser(1);

                dispatch(fetchUsers());
            }}>
                Ready
            </button>

            <div className={styles.card}>
                {mix[4].label}
                <br/>
            </div>

            <pre className={styles.card}>
                {JSON.stringify(coffee, null, 2)}
            </pre>

            <pre className={styles.card}>
                {JSON.stringify(data, null, 2)}
            </pre>

        </div>
    )
}

export default ExtApi;