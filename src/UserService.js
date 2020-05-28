import axios from 'axios';

const BACKEND_URL = 'http://localhost:8081/';

export const getUsers = async () => {
    axios.get(BACKEND_URL)
    .then( response => {
        console.log(response.data);
        console.log(response.status);
    }).catch( err => {
        console.log(err);
    })
}