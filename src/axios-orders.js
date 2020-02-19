import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-1f61f.firebaseio.com/'
});

export default instance;