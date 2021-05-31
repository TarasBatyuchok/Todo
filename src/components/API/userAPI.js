import axios from 'axios';



const Endpoints = {
    BASE_URL: "https://jsonplaceholder.typicode.com/",
    USERS: 'users'
}


const instance = axios.create({
    baseURL: Endpoints.BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});




export const UserAPI = {
    getUsers(){
        return instance.get(`${Endpoints.USERS}`)
    },
    deleteUserById(){

    },
    updateUser(){

    }
}