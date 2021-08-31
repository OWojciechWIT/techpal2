import axios from 'axios';

const instance = axios.create({
    //baseURL: 'https://techpal-68352-default-rtdb.europe-west1.firebasedatabase.app/'
    baseURL: 'http://localhost:5000/api'
});

export default instance;