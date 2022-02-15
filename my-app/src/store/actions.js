import {ADD, REMOVE, CHANGE} from './actionTypes';


export const addGood = (data) => ({ type: ADD, payload: data });
export const changeGoods = (data) => ({ type: CHANGE, payload: { items: data } });

export const addToDo = (data) => ({type: ADD, payload: data});
export const deleteTask = (data) => ({type: 'REMOVE_ALL', payload: data});