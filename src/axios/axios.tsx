import axios from 'axios';

console.log(`проверка что внутри process.env: ${process.env}`);

const instance = axios.create({
    baseURL: 'http://localhost:4004'
    //baseURL: process.env.REACT_APP_BASE_URL
});

//axios.get('http://localhost:4004/posts');
//axios.get(process.env.REACT_APP_BASE_URL + '/posts');
//axios.get('/tracks');

export default instance;
