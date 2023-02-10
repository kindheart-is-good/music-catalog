import axios from 'axios';

console.log(`проверка что внутри process.env: ${Boolean(process.env)}`);

const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL,
    //baseURL: 'http://localhost:4004',
});

//axios.get('http://localhost:4004/posts');
//axios.get(process.env.REACT_APP_BASE_URL + '/posts');
//axios.get('/tracks');

export default instance;
