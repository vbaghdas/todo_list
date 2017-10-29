import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com/todos';
const API_KEY = '?key=vbaghdas';

export function getAll() {
    const request = axios.get(BASE_URL + API_KEY);

    return {
        type: types.GET_ALL,
        payload: request
    }
}

export function getSingleTodo(id) {
    const request =  axios.get(`${BASE_URL}/${id + API_KEY}`);

    return {
        type: types.GET_SINGLE,
        payload: request
    }
}

export function deleteSingleTodo(id) {
    const request = axios.delete(`${BASE_URL}/${id + API_KEY}`);

    return {
        type: types.DELETE_TODO,
        payload: request
    }
}

export function toggleComplete(id) {
    const request = axios.put(`${BASE_URL}/${id + API_KEY}`);

    return {
        type: types.TOGGLE_COMPLETE,
        payload: request
    }
}

export function addTodo(item) {
    const request = axios.post(BASE_URL + API_KEY, item);

    return {
        type: types.ADD_TODO,
        payload: request
    }
}

export function updateTime(){
    return {
        type: 'UPDATE_TIME',
        payload: new Date().toLocaleTimeString()
    }
}