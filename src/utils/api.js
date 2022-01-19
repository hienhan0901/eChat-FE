import axios from "axios";

const token = localStorage.getItem('access_token');

const instance = axios.create({
    baseURL: process.env.REACT_APP_BE,
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export default instance;