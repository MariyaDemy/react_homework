import {ADD, REMOVE, CHANGE} from './actionTypes';
import {FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, FETCH_USERS_REQUEST, FETCH_USER} from './actionTypes';
import {createAsyncThunk} from "@reduxjs/toolkit";

export const addGood = (data) => ({ type: ADD, payload: data });
export const changeGoods = (data) => ({ type: CHANGE, payload: { items: data } });

export const addToDo = (data) => ({type: ADD, payload: data});
export const removeAll = (data) => ({type: 'REMOVE_ALL', payload: data});
export const removeTask = (id) => ({type: REMOVE, payload: id});




// const fetchUsersRequest = () => ({
//     type: FETCH_USERS_REQUEST
// });

// const fetchUsersSuccess = (data) => ({
//     type: FETCH_USERS_SUCCESS,
//     payload: data
// });

// const fetchUsersError = (error) => ({
//     type: FETCH_USERS_ERROR,
//     payload: error
// });

// export const fetchUsers = () => async (dispatch) => {
//     try {
//         let response = await fetch('https://api.github.com/users');
//         let result = await response.json();
//         dispatch(fetchUsersSuccess(result));
//     } catch(error) {
//         dispatch(fetchUsersError(error));
//     }
// }


// export const fetchUsers = createAsyncThunk (
//     'users',
//     async () => {
//        let response = await fetch('https://api.github.com/users');
//        let result = await response.json();
//        return result;
//     }
// )



export const fetchUsers = () => {
return {
    type: 'FETCH_USERS'
}
}


export const fetchUser = () => {
    return {
        type: FETCH_USER
    }
    }


