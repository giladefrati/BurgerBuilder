import axios from 'axios';

const instance = axios.create({
    baseURL:'https://bbb-udemy.firebaseio.com/'
});

export default instance;