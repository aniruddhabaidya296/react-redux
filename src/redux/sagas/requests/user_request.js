import axios from 'axios';

export function requestFetchUsers(){
    return axios.request({
        method: 'get',
        url: "https://jsonplaceholder.typicode.com/users"
    })
}