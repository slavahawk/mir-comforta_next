import axios from 'axios';

const $axios = axios;

$axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/api/'
})

module.exports =  $axios