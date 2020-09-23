import axios from 'axios';
require('dotenv').config()

const instance = axios.create({
    baseURL: process.env.BASE_URL
});

export default instance;